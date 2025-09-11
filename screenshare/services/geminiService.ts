
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { TerminalData, DesktopData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function cleanAndParseJson<T,>(text: string): T | null {
  try {
    const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanedText) as T;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    console.error("Original text:", text);
    return null;
  }
}

export async function analyzeTerminalFrame(base64Image: string): Promise<TerminalData | null> {
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: base64Image.split(',')[1],
    },
  };
  
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: { parts: [
      imagePart, 
      { text: "Analyze this terminal screenshot. Extract all visible text. Respond ONLY with a JSON object: {\"fullText\": \"<all_visible_text>\"}." }
    ]},
    config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                fullText: { type: Type.STRING }
            }
        }
    }
  });

  if (response.text) {
    return cleanAndParseJson<TerminalData>(response.text);
  }
  return null;
}

export async function analyzeDesktopFrame(base64Image: string, width: number, height: number): Promise<DesktopData | null> {
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: base64Image.split(',')[1],
    },
  };

  const prompt = `Analyze this desktop screenshot (${width}x${height}px). Identify the active window title, open app names in the dock/taskbar, and bounding boxes of PII (names, emails, addresses). Bounding box values must be percentages (0.0 to 1.0) relative to image dimensions. Respond ONLY with a JSON object with keys: "activeWindow", "openApps", "sensitiveAreas". For "sensitiveAreas", provide an array of objects, each with "x", "y", "width", "height".`;
  
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: { parts: [
      imagePart,
      { text: prompt }
    ]},
    config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                activeWindow: { type: Type.STRING },
                openApps: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                },
                sensitiveAreas: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            x: { type: Type.NUMBER },
                            y: { type: Type.NUMBER },
                            width: { type: Type.NUMBER },
                            height: { type: Type.NUMBER }
                        }
                    }
                }
            }
        }
    }
  });

  if (response.text) {
      return cleanAndParseJson<DesktopData>(response.text);
  }
  return null;
}

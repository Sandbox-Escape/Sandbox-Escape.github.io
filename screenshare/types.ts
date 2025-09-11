
export enum ShareMode {
  NONE = 'NONE',
  TERMINAL = 'TERMINAL',
  DESKTOP = 'DESKTOP'
}

export interface TerminalData {
  fullText: string;
}

export interface SensitiveArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface DesktopData {
  activeWindow: string;
  openApps: string[];
  sensitiveAreas: SensitiveArea[];
}

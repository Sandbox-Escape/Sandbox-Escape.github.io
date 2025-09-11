import React, { useState, useRef, useCallback } from 'react';
import Controls from './components/Controls';
import DesktopView from './components/DesktopView';
import Welcome from './components/Welcome';
import Viewer from './components/Viewer';

// PeerJS is loaded from a script tag in index.html, so we declare it here.
declare const Peer: any;

type AppState = 'welcome' | 'prompt-for-code' | 'sharing' | 'viewing';

export default function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [peerId, setPeerId] = useState<string>('');
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const peerRef = useRef<any>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);

  const cleanup = useCallback(() => {
    // Stop local video tracks
    if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach(track => track.stop());
        localStreamRef.current = null;
    }
    // Stop remote video tracks
    if (remoteStreamRef.current) {
        remoteStreamRef.current.getTracks().forEach(track => track.stop());
        remoteStreamRef.current = null;
    }
    setRemoteStream(null);

    // Destroy peer object
    if (peerRef.current) {
        peerRef.current.destroy();
        peerRef.current = null;
    }

    setPeerId('');
    setError(null);
  }, []);
  
  const stopConnection = useCallback(() => {
    cleanup();
    setAppState('welcome');
  }, [cleanup]);

  const startSharing = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      localStreamRef.current = stream;
      
      const peer = new Peer();
      peerRef.current = peer;

      peer.on('open', (id: string) => {
        setPeerId(id);
        setAppState('sharing');
      });

      peer.on('call', (call: any) => {
        call.answer(stream); // Answer the call with the local screen share stream.
        
        call.on('stream', (remoteUserStream: MediaStream) => {
          // This app doesn't expect a stream back from the viewer, but good to handle.
        });
      });
      
       peer.on('error', (err: any) => {
            console.error('PeerJS error:', err);
            setError(`Connection error: ${err.message}`);
            stopConnection();
       });

      stream.getVideoTracks()[0].onended = () => {
        stopConnection();
      };
    } catch (err) {
      console.error('Error starting screen share:', err);
      setError('Could not start screen sharing. Please grant permission and try again.');
      stopConnection();
    }
  };

  const connectToPeer = async (remoteId: string) => {
    setError(null);
    if(!remoteId) {
        setError("Please enter a valid Share Code.");
        return;
    }
    
    setAppState('viewing');

    const peer = new Peer();
    peerRef.current = peer;

    peer.on('open', () => {
        // We send a dummy stream, as the sharer will send theirs back.
        const call = peer.call(remoteId, new MediaStream());
        
        call.on('stream', (stream: MediaStream) => {
          remoteStreamRef.current = stream;
          setRemoteStream(stream);
        });
        
        call.on('close', () => {
            stopConnection();
        });

        call.on('error', (err: any) => {
             console.error('Call error:', err);
             setError(`Failed to connect. Please check the code and try again.`);
             stopConnection();
        });
    });

    peer.on('error', (err: any) => {
        console.error('PeerJS error:', err);
        setError(`Connection error: ${err.message}`);
        stopConnection();
    });
  };

  const renderContent = () => {
    switch(appState) {
        case 'sharing':
            return <DesktopView stream={localStreamRef.current} />;
        case 'viewing':
            return <Viewer stream={remoteStream} />;
        case 'welcome':
        case 'prompt-for-code':
        default:
            return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Sandbox Escape Screenshare Service</h1>
      </header>

      <main className="flex-grow flex flex-col p-4 md:p-8 space-y-6">
        <Controls 
          appState={appState}
          peerId={peerId}
          onStartShare={startSharing}
          onShowViewPrompt={() => setAppState('prompt-for-code')}
          onConnect={connectToPeer}
          onStop={stopConnection}
          onBackToWelcome={() => setAppState('welcome')}
        />

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md text-center">
            <p>{error}</p>
          </div>
        )}

        <div className="flex-grow bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-2xl shadow-black/30 min-h-[60vh] flex items-center justify-center">
          {renderContent()}
        </div>
      </main>
      
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Peer-to-peer screen sharing powered by WebRTC.</p>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';

interface ControlsProps {
  appState: 'welcome' | 'prompt-for-code' | 'sharing' | 'viewing';
  peerId: string;
  onStartShare: () => void;
  onShowViewPrompt: () => void;
  onConnect: (id: string) => void;
  onStop: () => void;
  onBackToWelcome: () => void;
}

const ShareIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const ViewIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>);
const StopIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" /></svg>);

const Controls: React.FC<ControlsProps> = ({ appState, peerId, onStartShare, onShowViewPrompt, onConnect, onStop, onBackToWelcome }) => {
  const [remoteId, setRemoteId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(peerId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () => {
    switch (appState) {
      case 'sharing':
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <div className="flex-grow flex items-center bg-gray-900 p-2 rounded-md">
                <span className="text-gray-400 mr-2">Your Share Code:</span>
                <input type="text" readOnly value={peerId} className="bg-transparent text-white font-mono flex-grow p-1 focus:outline-none" />
                <button onClick={handleCopy} className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded-md text-sm">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <button onClick={onStop} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-transform transform hover:scale-105">
              <StopIcon /> Stop Sharing
            </button>
          </div>
        );
      case 'viewing':
         return (
             <button onClick={onStop} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-transform transform hover:scale-105">
                 <StopIcon /> Disconnect
             </button>
         );
      case 'prompt-for-code':
        return (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
             <button onClick={onBackToWelcome} className="text-gray-400 hover:text-white transition-colors p-2">&larr; Back</button>
             <input
                type="text"
                placeholder="Enter Share Code"
                value={remoteId}
                onChange={(e) => setRemoteId(e.target.value)}
                className="flex-grow bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
             />
             <button
                onClick={() => onConnect(remoteId)}
                disabled={!remoteId}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
             >
                Connect
             </button>
          </div>
        );
      case 'welcome':
      default:
        return (
          <div className="flex items-center gap-4">
            <button onClick={onStartShare} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-transform transform hover:scale-105">
                <ShareIcon/> Share Screen
            </button>
            <button onClick={onShowViewPrompt} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md flex items-center justify-center transition-transform transform hover:scale-105">
               <ViewIcon/> View a Share
            </button>
          </div>
        );
    }
  };
  
  return (
    <div className="bg-gray-800/60 p-4 rounded-lg flex items-center justify-center gap-4 border border-gray-700">
      {renderContent()}
    </div>
  );
};

export default Controls;

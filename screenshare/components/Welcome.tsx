import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center text-gray-400 max-w-3xl mx-auto">
      <div className="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-200 mb-2">Welcome to Sandbox Escape Screenshare Service</h2>
      <p className="mb-8 text-lg">
        Simple, secure, peer-to-peer screen sharing. Right from your browser.
      </p>
      <div className="flex justify-center text-left">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 space-y-4 max-w-md">
            <h3 className="font-semibold text-gray-200 text-lg border-b border-gray-700 pb-2">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>Click <strong>"Share Screen"</strong> to start sharing and get a unique code.</li>
                <li>Send the code to a friend.</li>
                <li>Your friend clicks <strong>"View a Share"</strong>, enters the code, and connects directly to your stream.</li>
                <li>Your connection is private and peer-to-peer. No data is stored on a server.</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

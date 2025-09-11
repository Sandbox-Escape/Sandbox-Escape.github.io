import React, { useRef, useEffect } from 'react';

interface ViewerProps {
  stream: MediaStream | null;
}

const Viewer: React.FC<ViewerProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      if (videoRef.current.srcObject !== stream) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(console.error);
      }
    }
  }, [stream]);

  if (!stream) {
    return (
      <div className="text-center text-gray-400">
        <div className="w-8 h-8 mx-auto border-2 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
        <p className="mt-4">Connecting to peer...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
    </div>
  );
};

export default Viewer;

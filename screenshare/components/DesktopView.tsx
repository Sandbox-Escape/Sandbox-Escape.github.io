import React, { useRef, useEffect } from 'react';

interface DesktopViewProps {
  stream: MediaStream | null;
}

const DesktopView: React.FC<DesktopViewProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      if (videoRef.current.srcObject !== stream) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(console.error);
      }
    }
  }, [stream]);

  return (
    <div className="w-full h-full flex flex-col bg-black rounded-lg overflow-hidden relative">
       <div className="absolute top-0 left-0 right-0 p-2 bg-black/30 backdrop-blur-sm text-center">
            <p className="text-white font-semibold">You are sharing your screen</p>
       </div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-contain"
        />
    </div>
  );
};

export default DesktopView;

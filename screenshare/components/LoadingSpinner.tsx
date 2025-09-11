
import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-5 h-5 border-2 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
    <span className="text-sm text-gray-400">AI Processing...</span>
  </div>
);

export default LoadingSpinner;

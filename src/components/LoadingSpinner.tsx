import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center flex-col space-y-4">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    <p className="text-lg text-gray-700">Sip a coffee... This might take a moment!</p>
  </div>
  
  );
}
import React from 'react';

interface ResultImageProps {
  url: string;
}

export function ResultImage({ url }: ResultImageProps) {
  // Use a public URL in a production environment or your specific domain in development
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://yourproductiondomain.com'
    : 'http://127.0.0.1:8000';

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={`${baseUrl}${url}`} alt="Style transfer result" className="w-full h-auto" />
      <div className="bg-white p-4">
        <p className="text-sm text-gray-500">Generated Result</p>
        <a
          href={`${baseUrl}${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
        >
          Open in new tab
        </a>
      </div>
    </div>
  );
}

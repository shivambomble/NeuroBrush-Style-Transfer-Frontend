import React, { useState } from 'react';

import { ImageUpload } from './components/ImageUpload';
import { ImagePreview } from './components/ImagePreview';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { ResultImage } from './components/ResultImage';
import { uploadImages } from './utils/api';

function App() {
  const [contentImage, setContentImage] = useState<File | null>(null);
  const [styleImage, setStyleImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contentImage || !styleImage) {
      setError('Please select both content and style images');
      return;
    }

    setLoading(true);
    setError(null);
    setResultUrl(null);

    try {
      const response = await uploadImages(contentImage, styleImage);
      setResultUrl(response.result_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
  <svg className="mx-auto h-14 w-14 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v4h4M4 4l4 4M20 4v4h-4M20 4l-4 4M4 20v-4h4m0 4l-4-4m16 4v-4h-4m0 4l4-4M4 10v4h16v-4H4z" />
  </svg>
  <h1 className="mt-3 text-4xl font-bold text-gray-900">NeuroBrush Style Transfer</h1>
  <p className="mt-2 text-gray-600">Unleash the artist in you! Transform your photos with cutting-edge AI that blends styles in seconds.</p>
</div>


        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <ImageUpload
                label="Content Image"
                onChange={(file) => setContentImage(file)}
                hasFile={!!contentImage}
              />
              {contentImage && (
                <ImagePreview
                  file={contentImage}
                  label="Content Image"
                  onRemove={() => setContentImage(null)}
                />
              )}
            </div>
            <div className="space-y-4">
              <ImageUpload
                label="Style Image"
                onChange={(file) => setStyleImage(file)}
                hasFile={!!styleImage}
              />
              {styleImage && (
                <ImagePreview
                  file={styleImage}
                  label="Style Image"
                  onRemove={() => setStyleImage(null)}
                />
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading || !contentImage || !styleImage}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span className="ml-2">Processing...</span>
                </>
              ) : (
                'Generate Style Transfer'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8">
          {error && <ErrorMessage message={error} />}
          {resultUrl && <ResultImage url={resultUrl} />}
        </div>
      </div>
    </div>
  );
}

export default App;
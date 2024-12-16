import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  onChange: (file: File) => void;
  accept?: string;
  hasFile?: boolean;
}

export function ImageUpload({ label, onChange, accept = "image/*", hasFile = false }: ImageUploadProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg transition-colors duration-200 ${
        hasFile ? 'border-green-500 bg-green-50' : 'hover:border-indigo-500'
      }`}>
        <div className="space-y-1 text-center">
          <Upload className={`mx-auto h-12 w-12 ${hasFile ? 'text-green-500' : 'text-gray-400'}`} />
          <div className="flex text-sm text-gray-600">
            <label htmlFor={`file-${label}`} className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span>{hasFile ? 'Change file' : 'Upload a file'}</span>
              <input
                id={`file-${label}`}
                name={label}
                type="file"
                className="sr-only"
                accept={accept}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onChange(file);
                }}
              />
            </label>
            {!hasFile && <p className="pl-1">or drag and drop</p>}
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}
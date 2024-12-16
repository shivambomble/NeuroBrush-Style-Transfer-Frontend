import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  file: File;
  label: string;
  onRemove: () => void;
}

export function ImagePreview({ file, label, onRemove }: ImagePreviewProps) {
  const imageUrl = React.useMemo(() => URL.createObjectURL(file), [file]);

  React.useEffect(() => {
    return () => URL.revokeObjectURL(imageUrl);
  }, [imageUrl]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group">
      <img
        src={imageUrl}
        alt={`${label} preview`}
        className="w-full h-48 object-cover"
      />
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors duration-200"
        type="button"
        title="Remove image"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-2">
        <p className="text-sm font-medium text-gray-700 text-center">{label}</p>
      </div>
    </div>
  );
}
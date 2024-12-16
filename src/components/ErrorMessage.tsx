import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-lg bg-red-50 p-4 text-sm text-red-500 flex items-center">
      <AlertCircle className="h-5 w-5 mr-2" />
      {message}
    </div>
  );
}
import { StyleTransferResponse } from '../types';

export async function uploadImages(contentImage: File, styleImage: File): Promise<StyleTransferResponse> {
  const formData = new FormData();
  formData.append('content_image', contentImage);
  formData.append('style_image', styleImage);

  const response = await fetch('http://127.0.0.1:8000/api/style-transfer/', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to process images');
  }


  return response.json();
}
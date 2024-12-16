import { defineConfig , searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      allow: [
        // Search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // Your custom rules (e.g., add custom allowed directories)
        'D:\\Projects\\GAN\\NeuroBrush\\neuro_brush\\Public',
        'D:\\Projects\\GAN\\NeuroBrush\\neuro_brush',
      ],
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = '/seusstreasury/';  // Replace with your exact GitHub repo name here, starting and ending with '/'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
});

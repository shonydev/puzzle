import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/puzzle/sw.js', { scope: '/puzzle/' }).catch((error) => {
      console.error('AquaSort service worker registration failed:', error);
    });
  });
}

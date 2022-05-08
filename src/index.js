import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './index.css';

const root = createRoot( document.querySelector('#root')); // createRoot(container!) if you use TypeScript
root.render(<GifExpertApp />);
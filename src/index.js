import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import "./components/style/style.scss";



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);
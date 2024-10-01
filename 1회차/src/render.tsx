import { TestComponent } from './components/TestComponent';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const container = createRoot(root as HTMLElement);

export const testRender = () => {
  container.render(<TestComponent />);
};

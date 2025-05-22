import { setupCounter } from './counter.ts';
import './styles/main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter();

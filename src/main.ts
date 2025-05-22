import { getJoke } from './joke.ts';
import './styles/main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>S4. API</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

getJoke();

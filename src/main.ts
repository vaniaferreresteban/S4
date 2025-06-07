import { getJoke } from './joke.ts';
import { getChuckJoke } from './joke.ts';
import { getWeather, organizeWeather } from './weather.ts';
import type { ReportJoke } from './types/reportJoke.ts';
import './styles/main.scss';
import type { JokeRequest } from './types/JokeRequest.ts';
import type { MeteoStats } from './types/MeteoStats.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <div id="weatherOutput"></div>
  
    <div class="card">
    <h1>Preparat per riure?🤣</h1>
      <div id="jokeOutput"></div>
      
    <form id="jokeForm" name="nextJoke">
    
      <div>
        <label for="score1"></label>
        <input data-score="1" type="button" name="score1" id="score1" value="😥" />
        <label for="score2"></label>
        <input data-score="2" type="button" name="score2" id="score2" value="🤨" />
        <label for="score3"></label>
        <input data-score="3" type="button" name="score3" id="score3" value="😆" />
        
        <label for="selectedScore"></label>
        <input  type="hidden" name="selectedScore" id="selectedScore" value="0" />
      </div>
      <button id="nextJoke"form="jokeForm" type="submit">Següent Acudit</button>
    </form>
    </div>
  </div>
`;
function print(callback: string, target: HTMLElement) {
  target.innerHTML = callback;
}
async function getRandomJoke() {
  const oddOrEven = Math.floor(Math.random() * 100);
  if (oddOrEven % 2 === 0) {
    return await getJoke();
  } else {
    return await getChuckJoke();
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const joke: JokeRequest = await getRandomJoke();
  const weather: MeteoStats = await getWeather();
  const jokeOutput = document.getElementById('jokeOutput') as HTMLElement;
  const weatherOutput = document.getElementById('weatherOutput') as HTMLElement;
  const form = document.getElementById('jokeForm') as HTMLFormElement;
  const scoreButtons = document.querySelectorAll<HTMLInputElement>(
    '#jokeForm input[type="button"]',
  );
  const selectedScoreInput = document.getElementById(
    'selectedScore',
  ) as HTMLInputElement;
  const reportJokeArr: ReportJoke[] = [];

  print(joke.joke || "no s'han trobat acudits", jokeOutput);
  print(organizeWeather(weather), weatherOutput);
  form?.addEventListener('click', async () => {});

  scoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const score = button.dataset.score;
      selectedScoreInput.value = score!;
    });
  });

  form?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const joke = await getRandomJoke();
    const jokeID: string = joke.id;
    const score: number = formData ? Number(formData.get('selectedScore')) : 0;
    const date: string = new Date().toISOString();
    const reportedJoke: ReportJoke = { id: jokeID, score: score, date: date };
    if (score > 0 && score < 4) {
      reportJokeArr.push(reportedJoke);
      selectedScoreInput.value = String(0);
      console.log(reportJokeArr);
    }

    print(joke.joke || "No s'han trobat acudits", jokeOutput as HTMLElement);
  });
});

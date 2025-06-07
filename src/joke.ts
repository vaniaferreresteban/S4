import type { JokeRequest } from './types/JokeRequest';

export const getJoke = async (): Promise<JokeRequest> => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error("Error 404: L'Acudit no s'ha trobat");
  }
  const data = await response.json();

  return data;
};
export const getChuckJoke = async (): Promise<JokeRequest> => {
  const response = await fetch('https://api.chucknorris.io/jokes/random', {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error("Error 404: L'Acudit no s'ha trobat");
  }
  const data = await response.json();
  const jokeRequest = {
    id: data.id,
    joke: data.value,
    status: response.status,
  };

  return jokeRequest;
};

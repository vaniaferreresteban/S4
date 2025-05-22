import type { JokeRequest } from './types/JokeRequest';

export const getJoke = async (): Promise<JokeRequest> => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(await data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

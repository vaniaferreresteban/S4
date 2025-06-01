import { getJoke } from '../src/joke';

describe('getJokes fetch from api', () => {
  it('On Success return, it have the right propertys', async () => {
    const jokeResponse = await getJoke();

    expect(jokeResponse).not.toBe(null);
    expect(jokeResponse).toHaveProperty('id');
    expect(jokeResponse).toHaveProperty('joke');
    expect(jokeResponse).toHaveProperty('status');
    expect(typeof jokeResponse.id).toBe('string');
    expect(typeof jokeResponse.joke).toBe('string');
    expect(typeof jokeResponse.status).toBe('number');
    expect(jokeResponse.status).toBe(200);
  });
  const mockError = () => {
    throw new Error(
      'The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.',
    );
  };
  //qué sentido tiene testear una mock sin parámetro?
  it('On Error it should throw an error', () => {
    expect(mockError).toThrow(
      'The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.',
    );
  });
});

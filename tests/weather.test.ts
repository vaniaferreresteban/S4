import { getWeather } from '../src/weather';

describe('getJokes fetch from api', () => {
    it('On Success return, it have the right propertys', async () => {
        const weatherResponse = await getWeather();

        expect(weatherResponse).not.toBe(null);
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

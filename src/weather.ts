import type { MeteoApiResponse } from './types/MeteoApiResponse';
import type { MeteoStats } from './types/MeteoStats';
export const organizeWeather = (weather: MeteoStats) => {
  let img: string = '../public/solete.png';
  if (weather.prec == 0) {
    img = '/solete.png';
  } else if (weather.prec < 2) {
    img = '/ennuvolatplujos.png';
  } else if (weather.prec < 15) {
    img = '/ennuvolatplujosplus.png';
  } else if (weather.prec < 25) {
    img = '/tempesta.png';
  } else if (weather.prec > 25) {
    img = '/coberttempesta.png';
  }

  return `
      <img src="${img}" alt="" />
      <div class="plec"></div>
      <div id="temperature">${weather.ta}<span class="halfwidth">ºC</span></div>
      <div>
        <div>T.Mínima: ${weather.tamin}ºC</div>
        <div>T.Màxima: ${weather.tamax}ºC</div>
      </div>
      <div>
        <div>Prec.: ${weather.prec}%</div>
        <div>Humitat: ${weather.hr}%</div>
      </div>
       `;
};
export const getWeather = async (): Promise<MeteoStats> => {
    const response = await fetch(
      'https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/0194D/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YW5pYWZlcnJlcmVzdGViYW5AZ21haWwuY29tIiwianRpIjoiOWJiODU0ODgtMDg0MS00NjhjLTg4ZjUtOWMwMThhM2Y0NjNjIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE3NDg0MzI2NjQsInVzZXJJZCI6IjliYjg1NDg4LTA4NDEtNDY4Yy04OGY1LTljMDE4YTNmNDYzYyIsInJvbGUiOiIifQ.GOBgTs6jp0E0NWtoyCygM4h-IjxDKGsBtVLy-LsxpOE',
      {
        headers: { Accept: 'application/json' },
      },
    );
    if (!response.ok) {
      throw new Error("Error 404: No s'ha trobat el temps");
    }
    const data: MeteoApiResponse = await response.json();

    const response2 = await fetch(data.datos, {
      headers: { Accept: 'application/json' },
    });
    if (!response2.ok) {
      throw new Error("Error 404: No s'ha trobat el temps actual");
    }
    const weatherData: MeteoStats = (await response2.json())[0];

    return weatherData;
};

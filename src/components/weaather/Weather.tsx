import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { weatherInstance } from "../../axios";
import { WEATHER } from "../../type";

export const Weather = () => {
  const [weather, setWeather] = useState<WEATHER>([]);
  const WEATHER_KEY = "b5434fd3d2bd41cc93190523221505";
  const days = 3;
  const country = "Janpan";

  useEffect(() => {
    async function fetchData() {
      await weatherInstance
        .get(
          `forecast.json?key=${WEATHER_KEY}&q=${country}&days=${days}&aqi=no&alerts=no`
        )
        .then((res: AxiosResponse<WEATHER>) => setWeather(res.data.forecast))
        .catch((err: AxiosError) => alert(err));
    }
    fetchData();
  }, []);
  console.log(weather);
  return (
    <section className="Weather">
      <h1>Japan</h1>
      <div>
        <div className="Weathermain">
          <div className="Weathertop">
            <div className="WeatherHeading">
              {weather.map((weather, index: number) => (
                <a key={index}>{weather.day.condition.text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

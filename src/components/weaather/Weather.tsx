import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { weatherInstance } from "../../axios";
import { WEATHER } from "../../type";

export const Weather = () => {
  const [weathers, setWeathers] = useState<WEATHER[]>([]);
  const WEATHER_KEY = "b5434fd3d2bd41cc93190523221505";
  const days = 3;
  const country = "Janpan";

  useEffect(() => {
    async function fetchData() {
      await weatherInstance
        .get(
          `forecast.json?key=${WEATHER_KEY}&q=${country}&days=${days}&aqi=no&alerts=no`
        )
        .then((res: AxiosResponse<WEATHER>) =>
          setWeathers(res.data.forecast.forecastday)
        )
        .catch((err: AxiosError) => alert(err));
    }
    fetchData();
  }, []);
  console.log(weathers);
  return (
    <section className="Weather">
      <h1>Japan</h1>
      <div>
        <div className="Weathermain">
          <div className="Weathertop">
            <div className="WeatherHeading">
              {weathers.map((weather, index: number) => (
                <li key={index}>
                  <p>{weather.date}</p>
                  <span>
                    <img
                      src={weather.day.condition.icon}
                      alt={`${weather.date}'sicon`}
                      width={41}
                      height={41}
                    />
                  </span>
                  <div className="weather_temp">
                    <p className="weater-temp-max">
                      {parseInt(weather.day.maxtemp_c.toLocaleString(), 10)}℃
                    </p>
                    <p className="weater-temp-min">
                      {parseInt(weather.day.mintemp_c.toLocaleString(), 10)}℃
                    </p>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

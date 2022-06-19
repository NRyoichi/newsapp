import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { weatherInstance } from "../../axios";
import { WEATHER } from "../../type";

const WeatherSection = styled.section`
  border: 1.2px solid rgba(135, 135, 135, 0.5);
  border-radius: 15px;
  padding: 0 20px 0 20px;
  margin: 30px 20px 0 20px;
  h1 {
    font-weight: 1000;
    font-size: 16px;
    color: rgb(233, 163, 163);
    padding: 12px 0;
    border-bottom: 1px solid rgba(150, 113, 113, 0.5);
  }
`;
const WeatherTop = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    li {
      list-style-type: none;
      p {
        text-align: center;
      }
      .weatherIcon {
        font-size: 70px;
      }
      .weater_temp {
        margin-bottom: 10px;
        .weater_temp_max {
          font-weight: 50px;
        }
        .weather_temp_min {
          font-weight: 100;
        }
      }
    }
  }
`;

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
    <WeatherSection>
      <h1>Japan</h1>
      <div className="Weathermain">
        <WeatherTop>
          <ul className=" WeatherHeading">
            {weathers.map((weather, index: number) => (
              <li key={index}>
                <p>
                  {weather.date.substring(6, 7) +
                    `/` +
                    weather.date.substring(8, 11)}
                </p>
                <span>
                  <img
                    src={weather.day.condition.icon}
                    alt={`${weather.date}'sicon`}
                    width={41}
                    height={41}
                    className="weatherIcon"
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
          </ul>
        </WeatherTop>
      </div>
    </WeatherSection>
  );
};

import axios from "axios";

export const newsInstance = axios.create({
  baseURL: `https://newsapi.org/v2/`,
});

export const weatherInstance = axios.create({
  baseURL: `http://api.weatherapi.com/v1/`,
});

const API_KEY = "360512eda0b74d8ca5f3e9cd589582e3";
const pageSize = 10;

export const requests = {
  fetchTopNews: `top-headlines?country=us&pageSize=${pageSize}&apiKey=${API_KEY}`,
  fetchBusiness: `top-headlines?country=us&category=business&pageSize=${pageSize}&apiKey=${API_KEY}`,
  fetchEntertainment: `top-headlines?country=us&category=entertainment&pageSize=${pageSize}&apiKey=${API_KEY}`,
  fetchTechnology: `top-headlines?country=us&category=technology&pageSize=${pageSize}&apiKey=${API_KEY}`,
  fetchSports: `top-headlines?country=us&category=sports&pageSize=${pageSize}&apiKey=${API_KEY}`,
};

const WEATHER_KEY = "b5434fd3d2bd41cc93190523221505";
const days = 3;
const country = "Janpan";

export const weatherRequest = {
  fetchForecast: `forecast.json?key=${WEATHER_KEY}&q=${country}&days=${days}&aqi=no&alerts=no`,
};

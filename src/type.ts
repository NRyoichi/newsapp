export type NEWS = {
  articles: [];
  author: string;
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
};

export type WEATHER = {
  forecast: {
    forecastday: [];
  };
  date: string;
  day: {
    condition: {
      text: string;
      icon: string;
    };
    maxtemp_c: string;
    mintemp_c: string;
  };
};

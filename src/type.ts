export type NEWS = {
  articles: [];
  author: string;
  title: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
};

export type WEATHER = {
  forecastday: [];
  date: string;
  avgtemp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};

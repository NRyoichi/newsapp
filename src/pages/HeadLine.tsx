import { memo } from "react";
import { Article } from "../components/article/Article";
import { Weather } from "../components/weaather/Weather";
import { requests } from "../request";

export const HeadLine = memo(() => {
  return (
    <>
      <Article topic="HeadLine" fetchUrl={requests.fetchTopNews} />
      <Weather />
    </>
  );
});

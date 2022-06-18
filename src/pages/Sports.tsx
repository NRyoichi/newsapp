import { memo } from "react";
import { Article } from "../components/article/Article";
import { requests } from "../request";

export const Sports = memo(() => {
  return (
    <>
      <Article topic="Sports" fetchUrl={requests.fetchSports} />
    </>
  );
});

import { memo } from "react";
import { Article } from "../components/article/Article";
import { requests } from "../request";

export const Technology = memo(() => {
  return (
    <>
      <Article topic="Technology" fetchUrl={requests.fetchTechnology} />
    </>
  );
});

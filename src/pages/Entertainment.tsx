import { memo } from "react";
import { Article } from "../components/article/Article";
import { requests } from "../request";

export const Entertainment = memo(() => {
  return (
    <>
      <Article topic="Entertainment" fetchUrl={requests.fetchEntertainment} />
    </>
  );
});

import { memo } from "react";
import { Article } from "../components/article/Article";
import { requests } from "../request";

export const Business = memo(() => {
  return (
    <>
      <Article topic="Business" fetchUrl={requests.fetchBusiness} />
    </>
  );
});

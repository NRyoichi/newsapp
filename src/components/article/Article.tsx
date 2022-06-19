import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { newsInstance } from "../../axios";
import styled from "styled-components";
import { NEWS } from "../../type";

type Props = {
  topic: string;
  fetchUrl: string;
};

const Articles = styled.section`
  margin: 10px auto;
  width: 900px;
`;

const ArticleHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 64px;
`;

const ArticleMain = styled.article`
  display: flex;
  border: 1.2px solid rgba(135, 135, 135, 0.5);
  margin: 0 20px 20px 20px;
  padding: 15px;
  border-radius: 10px;
`;

const ArticleTitle = styled.div`
  flex: 4;
  margin-right: 5px;
`;

const ArticleImg = styled.img`
  object-fit: contains;
  width: 100%;
  border-raidus: 5px;
  max-height: 100px;
  margin-right: 10px;
  flex: 1;
`;

export const Article = ({ topic, fetchUrl }: Props) => {
  const [articles, setArticles] = useState<NEWS[]>([]);

  useEffect(() => {
    async function fetchData() {
      await newsInstance
        .get(fetchUrl)
        .then((res: AxiosResponse<NEWS>) => setArticles(res.data.articles))
        .catch((err: AxiosError) => {
          alert(err);
        });
    }
    fetchData();
  }, [fetchUrl]);
  console.log(articles);
  return (
    <Articles>
      <ArticleHeading>
        <h1>{topic}</h1>
      </ArticleHeading>
      {articles.map((article, index: number) => (
        <a key={index} href={article.url} target="_blank" rel="noopener">
          <ArticleMain>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleImg
              src={article.urlToImage}
              alt={article.url}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </ArticleMain>
        </a>
      ))}
    </Articles>
  );
};

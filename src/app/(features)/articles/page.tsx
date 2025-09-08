import { getAllArticles } from "@/features/articles/helper";
import React from "react";

const Articles = async () => {
  const articles = await getAllArticles();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(articles, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Articles;

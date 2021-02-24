import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import timeout from "await-timeout";

export default function ArticleList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  useEffect(() => {
    async function waitForATimer() {
      console.log("A");
      await timeout.set(2000);
      console.log("B");
    }
    waitForATimer();
  }, []);

  const removeArticle = () => {
    set_articles([]);
  };

  return (
    <div className="App">
      <button type="button" onClick={removeArticle}>
        Clear notifications
      </button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map((article, index) => (
        <ArticleCard title={article.title} content={article.body} />
      ))}
    </div>
  );
}

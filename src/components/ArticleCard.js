import React from "react";

export default function ArticleCard({ title, content }) {
  return (
    <div className="Article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios("https://hn.algolia.com/api/v1/search?query=react")
      .then((result) => {
        console.log("API response:", result.data);
        setNews(result.data.hits);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log("News state:", news);

  return (
    <div>
      <h2>News</h2>
      {news.map((article, index) => (
        <p key={index}>{article.title}</p>
      ))}
    </div>
  );
};

export default News;

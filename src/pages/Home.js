import { useState, useEffect } from 'react';

function Home() {
  const API = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/codeacademia'
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    fetch(API)
      .then(res => res.json())
      .then(feed => {
        const articles = [];

        feed.items.slice(0, 6).forEach(f => {
          articles.push({
            title: f.title,
            link: f.link,
            image: f.thumbnail,
            author: f.author,
            pubDate: f.pubDate
          });
        });

        setArticles(articles);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {articles.map(article => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}

export default Home;

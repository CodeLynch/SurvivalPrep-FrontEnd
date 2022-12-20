import { useEffect, useState } from "react";
import NewsService from "../services/NewsService";
import "./containerStyles.css";
import './NavBar.css';
import NewsComp, { NewsType } from "./NewsComponent";

function NewsPage() {
  const [newsArr, setNews] = useState<NewsType[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    NewsService.getNews().then((res) => {
      setNews(res.articles);
      setLoading(false);
    }).catch((err) => {
      alert("error in fetching news")
      console.log(err);
    })
  }, [])


  return (
    <div className="container">
      <h1><strong>News</strong></h1>
      <div className='MainContainer d-flex justify-content-center' style={{ minHeight: "75vh", width: "100%", height: 'auto' }}>
        {
          isLoading ?
            <div className='d-flex justify-content-center'>
              <img className='App-logo' src='AppLogoSymbol.png' alt='spinner' />
            </div>
            :
            <div className='container d-flex p-2 justify-content-center' style={{ height: "90%" }}>
              <div className='row d-flex flex-wrap justify-content-center ' style={{ height: "auto", maxHeight: '100%', width: "100%" }}>
                {
                  newsArr.map((article, i) => {
                    return (<div className="col-auto" key={i}>
                      <NewsComp source={article.source} author={article.author} title={article.title}
                        publishedAt={article.publishedAt} content={article.content} description={article.description}
                        url={article.url} urlToImage={article.urlToImage} />
                    </div>);
                  })
                }
              </div>
            </div>
        }
      </div>
    </div>
  );
}
export default NewsPage;

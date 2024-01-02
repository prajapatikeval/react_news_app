import { useState } from "react"
import {useEffect} from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
  },[category])

  return (
    <div>
      <h4 className="text-center my-4">Latest <span className="badge bg-danger">News</span></h4>
      {articles.map((news,index)=>{
        return <NewsItem key={index} news_title={news.title} news_description={news.description} news_src={news.urlToImage} news_url={news.url}/>
      })}
    </div>
  )
}

export  default NewsBoard
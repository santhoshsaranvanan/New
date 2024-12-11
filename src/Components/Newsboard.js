import { useState } from "react";
import { useEffect } from "react";
import Newsitem from "./Newsitem";
const Newsboard = ({category}) => {
  const[articles,setArticles]=useState([]);
  useEffect(()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3db4f18171d94bd5a0212c87236c6749`
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
  },[category])
  return (
    <div> 
      <h2  className="text-center m-2">Latest <span className="badge bg-danger rounded-pill m-2"> News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index}
                    title={news.title} 
                    description={news.description} 
                    src={news.urlToImage} 
                    url={news.url}
                    publishedAt={news.publishedAt}/>
      })}
    </div>
  )
}

export default Newsboard
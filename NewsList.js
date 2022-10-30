import React, {useState,useEffect, Component}from 'react'
import axios from 'axios'
import NewsItem from './NewsItem';

const NewsList = () => {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
        const getArticles=async ()=>{
            const response= await axios.get('https://newsapi.org/v2/everything?q=general&from=2022-09-30&sortBy=publishedAt&apiKey=bebf203afe1f4dcd92ff79f55714fff7')
console.log(response)
setArticles(response.data.articles)
        }
        getArticles()
       },[])
       
  return (
    <div className='newsmainbox'>
        
        {articles.map(article=>{
            return(
<NewsItem
title={article.title}
description={article.description}
url={article.url}
urlToImage={article.urlToImage}
publishedAt={article.publishedAt}/>
            )
        })}
    </div>
  )
}

export default NewsList

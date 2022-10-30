import React from 'react'
import './newsItem.css'

const NewsItem = ({ title, description, url, urlToImage,publishedAt }) => {
    return (
                            <div className='bigcontent'>

            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{description}</p>
                <p>{ publishedAt }</p>
                <a href={url}><button>Read more...</button></a>
            </div>
        </div>
      
    )
}

export default NewsItem
import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../components/footer/newsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({ newsArray, newsResults }) => {
    return (
        <Container maxWidth="md">
            <div className='content'>
                <div className="downloadMessage">
                    <span className='downloadText'>For the best experience use <strong>inshorts</strong> app on your smartphone</span>
                    <a href='https://apps.apple.com/us/app/news-in-shorts/id892146527' target="_blank" className='downloadApp'>
                        <img
                            alt='app store'
                            height="80%"
                            src="https://assets.inshorts.com/website_assets/images/appstore.png" />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website' target="_blank" className='downloadApp'>
                        <img
                            alt='play store'
                            height="80%"
                            src="https://assets.inshorts.com/website_assets/images/playstore.png" />
                    </a>
                </div>

                {newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}
                <hr style={{ width: "90%" }} />
            </div>
        </Container >
    )
}

export default NewsContent
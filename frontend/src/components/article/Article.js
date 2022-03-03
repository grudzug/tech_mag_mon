import './article.css'
import fallbackImg from './no_img.svg'
import LoadingSpinner from '../loading_spinner/LoadingSpinner'
import { useState } from "react"
import { useSpring, animated, config } from 'react-spring'


export default function Article({ article }) {

    const [src, setSrc] = useState(article.urlToImage)
    const [loaded, setLoaded] = useState(false)
    const flip = useSpring({
        from: { rotateX: 90, opacity: 0 },
        to: { rotateX: 0, opacity: 1 },
        delay: 400,
        config: config.molasses
    })

    return (
        <animated.div style={flip} className="article_card" >
            {!loaded && <LoadingSpinner />}
            <img
                style={loaded? {} : {display:'none'}}
                src={src ? src : fallbackImg}
                alt={article.title}
                onError={()=>setSrc(fallbackImg)}
                onLoad={()=>setLoaded(true)}
            />
            <div className="text_content">
                <p className="date">
                    {article.publishedAt.slice(0, 10) + " " + article.publishedAt.slice(11, -4)}
                </p>
                <p>{article.description}</p>
                <a href={article.url}>
                    <h3>{article.title}</h3>
                </a>
            </div>
        </animated.div>
    )
}
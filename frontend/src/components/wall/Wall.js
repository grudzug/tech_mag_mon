import './Wall.css'
import Article from "../article/Article"

export default function Wall({ articles }) {
  
  return (
    <div className="article_wrapper" >  
      {articles &&
        articles.map((article) => (
            <Article  article={article} key={article.publishedAt} />
        ))}
    </div>
  )
}

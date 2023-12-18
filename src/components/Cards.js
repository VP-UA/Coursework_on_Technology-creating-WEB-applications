import Card from './Card'
import './Cards.scss'


export default function Cards(props) {
    return (
        <div>
            <div className="articles">
                {
                    props.articles.map((article, index) =>
                        <Card article={article} index={index} />
                    )
                }
            </div>
        </div>
    )
}
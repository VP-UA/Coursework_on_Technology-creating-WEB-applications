import { Link } from 'react-router-dom'
import './Card.scss'


export default function Card(props) {
    return (
        <div title={props.article.title} className='article'>
            <h3 className='title'><Link to='CardPage' state={{ data: props.article.url.split('/').slice(-2)[0] }}>Наукова стаття №{props.index + 1}</Link></h3>
            <p>{props.article.source}</p>
        </div>
    )
}

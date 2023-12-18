import { Link } from 'react-router-dom'
import './FullCard.scss'


export default function FullCard(props) {
    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
            <div className='card'>
                <h1>{props.article.source}</h1>
                <h2>{props.article.title}</h2>
                <h3>URL: <Link to={props.article.url}>{props.article.url}</Link></h3>
                <button><Link to='/'>Go Back</Link></button>
            </div>
        </div>
    )
}
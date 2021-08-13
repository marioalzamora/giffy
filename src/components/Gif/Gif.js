import {Link} from 'wouter'
import './Gif.css'

export default function Gif({title, id, url}){
    return (
            <div className='Gif'>
                <Link to={`/gif/${id}`} className='Gif-link'>
                <h5>{title}</h5>
                <img loading='lazy' alt={title} src={url} />
                </Link>
            </div>
    )
}
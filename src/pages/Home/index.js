import {Link, useLocation} from 'wouter'
import { useState } from 'react'
import {useGifs} from "../../hooks/useGifs";
import ListOfGifs from '../../components/ListOfGIfs'

const POPULAR_GIFS = ["Messi", "Maradona", "Ronaldinho", "Riquelme"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a GIF here..." onChange={handleChange} type="text" value={keyword} />
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <ul>
                {
                    POPULAR_GIFS.map((popularGifs) => (
                        <li key={popularGifs}>
                            <Link to={`/search/${popularGifs}`}> Gifs de {popularGifs}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
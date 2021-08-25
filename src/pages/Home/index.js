import { useCallback } from 'react'
import {Link, useLocation} from 'wouter'
import {useGifs} from "hooks/useGifs"
import ListOfGifs from 'components/ListOfGIfs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

export default function Home(){
    
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])

    return (
        <div>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </div>
    )
}
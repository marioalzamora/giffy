import {useEffect, useRef, useCallback} from 'react'
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGIfs";
import {useGifs} from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

export default function SearchResults({params}) {
    const { keyword } = params;
    const { loading, gifs, setPage} = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs  ? `${gifs.length} resultados de ${keyword}` : ''

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1 ), 300
    ),[setPage])

    useEffect(function(){
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return <div className='App-wrapper'>
                {
                    loading
                    ? <Spinner />
                    : <>
                        <Helmet>
                            <title>{title}</title>
                            <meta name="description" content={title}></meta>
                        </Helmet>
                        <h3 className="App-title">
                         { decodeURI(keyword) }
                        </h3>
                        <ListOfGifs gifs={gifs} />
                        <div id="visor" ref={externalRef}></div>
                    </>
                }
            </div>
}
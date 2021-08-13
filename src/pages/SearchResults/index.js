import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGIfs";
import {useGifs} from "../../hooks/useGifs";

export default function SearchResults({params}) {
    const { keyword } = params;
    const { loading, gifs} = useGifs({ keyword })

    console.log({ loading, gifs})

    return <div>
                {
                    loading
                    ? <Spinner />
                    : <ListOfGifs gifs={gifs} />
                }
            </div>
}
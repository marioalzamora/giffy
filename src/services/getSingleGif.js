import {API_KEY, API_URL} from 'services/settings' 

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const {id, images, title} = data
    const {url} = images.downsized_medium
    return {title, id, url}

}

export default function getSingleGif({ id }) {

    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then( fromApiResponseToGifs )
}
import {API_KEY, API_URL} from 'services/settings' 

export default function getGifs({limit = 5,  keyword = 'messi', page = 0} = {})
{
    const apiURL=`${API_URL}/gifs/search?api_key=${API_KEY}&q=${ keyword }&&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response;
      const gifs = data.map(image => {
          const {id, images, title} = image
          const {url} = image.images.downsized_medium
          return {title, id, url}
      })
      return gifs
    })
}
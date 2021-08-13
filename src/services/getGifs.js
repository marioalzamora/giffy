const apiKey = 'HGX5aNwLoofywpCX79M9r4tXHpFOzGxK' 

export default function getGifs({ keyword = 'messi'} = {})
{
    const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ keyword }&&limit=10&offset=0&rating=g&lang=en`;

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
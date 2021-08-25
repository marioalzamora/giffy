import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs ({gifs}) {
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, url, ...restOfGifs}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          extraInfo={restOfGifs}
        />
      )
    }
  </div>
}
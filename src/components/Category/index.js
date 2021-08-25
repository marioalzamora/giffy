import { Link } from "wouter";
import './styles.css'

export default function Category({ name, options = [] }) {

  console.log(options)
  return (
    <section>
      <h5>{name}</h5>
      <div className='categoryContainer'>
        {options.map((singleOption, index) => (
          <div className='categoryItem'
            key={singleOption}
            index={index}
            type='primary'
          >
            <Link to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
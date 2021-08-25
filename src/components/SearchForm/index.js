import React,{ useState } from "react";

function SearchForm({ onSubmit }){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({keyword}) 
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
                
    return <form onSubmit={handleSubmit}>
        <input placeholder="Search a GIF here..." onChange={handleChange} type="text" value={keyword} />
        <button>Buscar</button>
    </form>
}

export default React.memo(SearchForm) 
import "./search.css";
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
const Search = () => {
  const [terms, setTerms] = useState('')
  const history = useHistory()


  const handleSearch = e => {
    e.preventDefault()
    history.push(`/search/${terms}`)
  }


  return (

      <form onSubmit={(e)=> handleSearch(e)} className="search_book">
        <input
        className="search-input"
          type="text"
          placeholder="Discovery a new story...."
          value={terms}
          onChange={e => setTerms(e.target.value)}
        />
        <button className="search-button">
          <i className="fa fa-book search-button"></i>
        </button>
      </form>
    
  );
};

export default Search;

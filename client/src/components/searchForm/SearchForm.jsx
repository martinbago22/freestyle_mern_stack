import { useState } from "react"
import './SearchForm.css';

export default function SearchForm({ onSearch, onReset }) {

  const [userSearch, setUserSearch] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserSearch({
      ...userSearch,
      [name]: value
    });
  }

  function handleClick(e) {
    e.preventDefault();
    const result = new URLSearchParams(userSearch).toString();
    onSearch(result);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={e => handleClick(e)}>
        <div className="control">
          <label htmlFor="SearchLocation">Location: </label>
          <input
            id="SearchLocation"
            name="location"
            type="text"
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className="control">
          <label htmlFor="SearchDate">Date: </label>
          <input
            id="SearchDate"
            name="date"
            type="date"
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className="control">
          <label>Price: </label>
          <label htmlFor="MinPrice">min </label>
          <input
            id="MinPrice"
            name='minPrice'
            type="number"
            
            onChange={e => handleInputChange(e)}
          />
          <label htmlFor="MaxPrice">max </label>
          <input
            id="MaxPrice"
            name="maxPrice"
            type="number"
            onChange={e => handleInputChange(e)}
          />
        </div>
        <div className='SearchButtonContainer'>
          <button className='SearchButton' type="submit">Search</button>
          <button className="ResetButton" onClick={onReset}type="button">Reset filter</button>
        </div>
      </form>
    </div>
  )
}
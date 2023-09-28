import { useState } from "react"

export default function SearchForm() {

  const [userSearch, setUserSearch] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserSearch({
      ...userSearch,
      [name]: value
    });
  }

  return (
    <div className="SearchForm">
      <form>
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
          <label htmlFor="SearchPrice">Price: </label>
          <input
            id="SearchPrice"
            name="price"
            type="number"
            onChange={e => handleInputChange(e)}
          />
          <label htmlFor="MaxCheck">Max</label>
          <input
            id="MaxCheck"
            type="checkbox"
          />
          <label htmlFor="MinCheck">Min</label>
          <input
            id="MinCheck"
            type="checkbox"
          />
        </div>
      </form>
    </div>
  )
}
import { useEffect, useState } from "react";
import EventDetails from "../components/eventDetail/EventDetails";
import SearchForm from "../components/searchForm/SearchForm";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {

  const [events, setEvents] = useState(null);

  async function handleSearch(query) {
    const response = await fetch(`/api/events?${query}`);
    return await response.json();
  }

  return (
    <div>
      {
        events ? (
          <div className="EventContainer">
            <SearchForm onSearch={handleSearch}></SearchForm>
            {events && events.map((event) => <EventDetails key={event._id} event={event} />)}
          </div>
        ) : (<h1>Loading Site</h1>)
      }
      {<Pagination setEvents={setEvents}/> }
    </div>
  )
}
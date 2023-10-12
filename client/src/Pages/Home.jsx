import { useEffect, useState } from "react";
import EventDetails from "../components/eventDetail/EventDetails";
import SearchForm from "../components/searchForm/SearchForm";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const [events, setEvents] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
      const response = await fetch('/api/events');
      const allEvents = await response.json()
      setEvents(allEvents);
      } catch (err) {
        console.error(err);
      }
    }
    fetchEvents()
  }, []);

  async function handleSearch(query) {
    const response = await fetch(`/api/events?${query}`);
    const events = await response.json();
    setEvents(events);
  }

  async function handleReset() {
    const response = await fetch('/api/events');
    const allEvents = await response.json();
    setEvents(allEvents);
  }

  function handleBuy(id){
    navigate(`/tickets/${id}`);
  }

  return events ? (
    <div className="EventContainer">
      <SearchForm onSearch={handleSearch} onReset={handleReset}></SearchForm>
      {events.map((event) => <EventDetails
      key={event._id}
      event={event}
      onBuy={handleBuy}/>)}
    </div>
  ) : ( <h1>Loading Site</h1> );

}
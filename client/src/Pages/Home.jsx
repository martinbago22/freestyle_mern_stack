import { useEffect, useState } from "react";
import EventDetails from "../components/eventDetail/EventDetails";

export default function Home() {

  const [events, setEvents] = useState(null);

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
  }, [])

  return events ? (
    <div className="EventContainer">
      {events.map((event) => <EventDetails key={event._id} event={event} />)}
    </div>
  ) : ( <h1>Loading Site</h1> );

}
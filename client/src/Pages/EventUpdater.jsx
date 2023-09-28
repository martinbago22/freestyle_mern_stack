import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/eventform/Form";
import fetchByMethod from "../functions/fetchByMethod";
import Notify from "../components/notify/Notify";

export default function EventUpdater() {

  const [event, setEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`/api/events/${id}`);
      const event = await response.json();
      setEvent(event);
    }
    fetchEvent();
  }, [id]);

  async function handleUpdate(e, event) {
    e.preventDefault();
    try {
      const response = await fetchByMethod(`/api/events/${id}`, 'PATCH', event);
      if (response.ok) {
        setUpdatedEvent(true);
      }
    } catch (err) {
      console.error(err);
    }
  }


  return updatedEvent ? (<Notify></Notify>)
    : (
      event ? <div className="FormContainer"><Form event={event} onSave={handleUpdate} /></div> : <div>Loading...</div>
    )
}
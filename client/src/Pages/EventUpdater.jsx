import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form/Form";
import fetchByMethod from "../functions/fetchByMethod";
import { useNavigate } from "react-router-dom";


export default function EventUpdater() {

  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
        navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    event ? <div className="FormContainer"><Form event={event} onSave={handleUpdate} /></div> : <div>Loading...</div>
  )
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventTickets from "../components/eventTickets/EventTickets";

export default function BuyTickets() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/events/${id}`);
      const event = await response.json();
      setEvent(event);
    }
    fetchData();
  }, [id]);

  async function handleBuy(tickets) {
    const response = await fetch(`/api/tickets/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tickets })
    });
    const result = await response.json();
    if (response.status === 404) {
      const confirm = window.confirm(`There are only ${result.available} tickets`)
    }
    navigate('/checkout')
  }

  return (
    event && <EventTickets event={event} handleBuy={handleBuy} />
  )
}
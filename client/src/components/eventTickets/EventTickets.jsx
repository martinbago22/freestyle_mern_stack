import { useState } from "react";
import './EventTickets.css';

export default function EventTickets({ event, handleBuy }) {
  const [tickets, setTickets] = useState(-1);

  function onBuy(){
    handleBuy(tickets)
  }

  return (
    <div className="TicketContainer">
      <div className="TicketDetails">
      <div>Event:
        <br />
        {event.name}</div>
      <div>Date:
        <br />{event.date.slice(0,10)}</div>
      <select className="TicketSelect" value={tickets} onChange={e => setTickets(e.target.value)}>
        <option value='-1'>1</option>
        <option value='-2'>2</option>
        <option value='-3'>3</option>
        <option value='-4'>4</option>
        <option value='-5'>5</option>
        <option value='-6'>6</option>
        <option value='-7'>7</option>
        <option value='-8'>8</option>
        <option value='-9'>9</option>
        <option value='-10'>10</option>
      </select>
      <button className="BuyButton" onClick={onBuy}>Buy</button>
      </div>
    </div>
  )
}
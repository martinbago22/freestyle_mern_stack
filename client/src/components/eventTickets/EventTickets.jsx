import { useState } from "react"

export default function EventTickets({ event, handleBuy }) {
  const [tickets, setTickets] = useState(-1);

  function onBuy(){
    handleBuy(tickets)
  }

  return (
    <div>
      <div>{event.name}</div>
      <div>{event.date.slice(0,10)}</div>
      <select value={tickets} onChange={e => setTickets(e.target.value)}>
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
      <button onClick={onBuy}>Buy</button>
    </div>
  )
}
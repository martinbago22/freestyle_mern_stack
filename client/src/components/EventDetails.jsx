export default function EventDetails({ event }) {
  return (
    <div className="Event">
      <div className="EventName">{event.name}</div>
      <div className="EventIMG">
        <img src='/event.png'></img>
      </div>
      <div className="EventInfo">
        <ul>
          <li>
            <label>Date: </label>
            {event.date}
          </li>
          <li>
            <label>Location: </label>
            {event.location}
          </li>
          <li>
            <label>Price: </label>
            {event.price} €
          </li>
        </ul>
      </div>
      <div className="EventDetails">{event.details}</div>
      <div className="EventButtons">
        <button>DEL</button>
        <button>EDIT</button>
      </div>
    </div>
  )
}
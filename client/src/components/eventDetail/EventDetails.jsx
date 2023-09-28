import { Link } from "react-router-dom"
import './EventDetail.css'

export default function EventDetails({ event, onDelete }) {
  return (
    <div className="Event">
      <div className="EventName">{event.name}</div>
      <div className="EventIMG">
        <img src={event.image}></img>
      </div>
      <div className="EventInfo">
        <ul>
          <li>
            <label>Date: </label>
            {event.date.slice(0, 10)}
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
      <div className="EventDetails">
        <span>Details: </span>
        <br />
        {event.details}
        </div>
      <div className="EventButtons">
        <Link to={`/delete/${event._id}`}><button className="EventButton">DEL</button></Link>
        <Link to={`/event/update/${event._id}`} ><button className="EventButton">EDIT</button></Link>
      </div>
    </div>
  )
}
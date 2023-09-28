import { Link, useParams } from "react-router-dom";
import './ConfirmDelete.css';

export default function ConfirmDelete({ onDelete }) {
  const { id } = useParams();
  return (
    <div className="DeleteWindow">
      <div>Confirm delete?</div>
      <div>
        <button className="DeleteButton" onClick={() => onDelete(id)}>Delete</button>
        <Link to='/'><button className="DeleteButton">Cancel</button></Link>
      </div>
    </div>
  )
}
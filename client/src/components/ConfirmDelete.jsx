import { Link, useParams } from "react-router-dom";

export default function ConfirmDelete({ onDelete }) {
  const { id } = useParams();
  return (
    <div>
      <div>Confirm delete?</div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    </div>
  )
}
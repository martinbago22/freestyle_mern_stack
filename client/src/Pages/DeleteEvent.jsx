import ConfirmDelete from "../components/ConfirmDelete";
import { useNavigate } from "react-router-dom";

export default function DeleteEvent() {
  const navigate = useNavigate();

  async function handleDelete(id) {
    const response = await fetch(`/api/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      console.log('yey');
      navigate('/');
    }
  }

  return (
    <ConfirmDelete onDelete={handleDelete} />
  )
}
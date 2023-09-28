import Form from "../components/eventform/Form";
import { useNavigate } from "react-router-dom";
import fetchByMethod from "../functions/fetchByMethod";
import './pages.css';

export default function EventCreator() {
  const navigate = useNavigate();


  async function handleSubmit(e, formData) {
    e.preventDefault();
    try {
      const response = await fetchByMethod('/api/events', 'POST', formData);
      if (response.ok) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="FormContainer">
    <Form onSave={handleSubmit}></Form>
    </div>
  )
}
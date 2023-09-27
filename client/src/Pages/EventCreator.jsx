import Form from "../components/form/Form";
import { useNavigate } from "react-router-dom";


export default function EventCreator() {
  const navigate = useNavigate();

  async function fetchByMethod(url, method, data) {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  }

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
    <Form onSave={handleSubmit}></Form>
  )
}
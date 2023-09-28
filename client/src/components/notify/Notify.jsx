import { useNavigate } from 'react-router-dom';
import './Notify.css';

export default function Notify() {

  const navigate = useNavigate();

  return (
    <div className='AlertWindow'>
      <h1>Your update was succesful!</h1>
      <h3>We will redirect you to our home page now</h3>
      <button className='NotifyButton' onClick={() => navigate('/')}>Ok</button>
    </div>
  )
}
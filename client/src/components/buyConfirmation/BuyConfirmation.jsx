import { Link } from "react-router-dom";
import './BuyConfirmation.css';

export default function BuyConfirmation(){
  return(
    <div className="ConfirmContainer">
    <div className="ConfirmText">Have fun!</div>
    <Link to='/'><button className="HomeButton">Home</button></Link>
    </div>
  )
}
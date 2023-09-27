import { useState } from 'react';

export default function Form({ onSave }) { // Ha upgradelünk az event propban érkezne a szerkeszteni kívánt event

    const [formData, setFormData] = useState({
        name: event ? event.name : '',
        image: event ? event.image : '',
        location: event ? event.location : '',
        date: event ? event.date : '',
        details: event ? event.details : '',
        price: event ? event.price : 0,
        available: event ? event.available : 0,
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={(e) => onSave(e, formData)}>
            <div className='control'>
                <label htmlFor='eventName'>Name:</label>
                <input type="text" name="name" id='eventName' value={formData.name} onChange={handleInputChange} />
            </div>
            <div className='control'>
                <label htmlFor='eventLocation'>Location:</label>
                <input type="text" name="location" id='eventLocation' value={formData.location} onChange={handleInputChange} />
            </div>
            <div className='control'>
                <label htmlFor='eventDate'>Date:</label>
                <input type="date" name="date" id='eventDate' value={formData.date} onChange={handleInputChange} />
            </div>
            <div className='control'>
                <label htmlFor='eventDetails'>Details:</label>
                <input type="text" name="details" id='eventDetails' value={formData.details} onChange={handleInputChange} />
            </div>
            <div className='control'>
                <label htmlFor='eventPrice'>Price:</label>
                <input type="number" name="price" id='eventPrice' value={formData.price} onChange={handleInputChange} />
            </div>
            <div className='control'>
                <label htmlFor='eventAvailable'>Available:</label>
                <input type="number" name="available" id='eventAvailable' value={formData.available} onChange={handleInputChange} />
            </div>
            <div className='FormButton'>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
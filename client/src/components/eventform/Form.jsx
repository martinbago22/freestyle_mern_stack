import { useState } from 'react';
import './eventForm.css'

export default function Form({ event, onSave }) { // Ha upgradelünk az event propban érkezne a szerkeszteni kívánt event

    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSave(formData)
        }}>
            <div className='control'>
                <label htmlFor='eventName'>Name: </label>
                <input
                    type="text"
                    name="name"
                    id='eventName'
                    value={formData?.name ?? event?.name ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className='control'>
                <label htmlFor='eventLocation'>Location: </label>
                <input
                    type="text"
                    name="location"
                    id='eventLocation'
                    value={formData?.location ?? event?.location ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className='control'>
                <label htmlFor='eventDate'>Date: </label>
                <input
                    type="date"
                    name="date"
                    id='eventDate'
                    value={formData?.date ?? event?.date.slice(0, 10) ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className='control'>
                <label htmlFor='eventPrice'>Price: </label>
                <input
                    type="number"
                    name="price"
                    id='eventPrice'
                    value={formData?.price ?? event?.price ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className='control'>
                <label htmlFor='eventAvailable'>Available: </label>
                <input
                    type="number"
                    name="available"
                    id='eventAvailable'
                    value={formData?.available ?? event?.available ?? ''}
                    onChange={handleInputChange}
                />
            </div>
            <div className='controlDetails'>
                <label htmlFor='eventDetails'>Details: </label>
                <textarea
                    type="text"
                    name="details"
                    id='eventDetails'
                    value={formData?.details ?? event?.details ?? ''}
                    onChange={handleInputChange}
                    rows='6'
                    cols='40'
                />
            </div>
            <div className='FormButtonContainer'>
                <button className='FormButton' type="submit">Submit</button>
            </div>
        </form>
    )
}
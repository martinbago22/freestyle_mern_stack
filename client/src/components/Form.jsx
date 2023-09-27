import { useState } from 'react';

export default function Form({ event }) { // Ha upgradelünk az event propban érkezne a szerkeszteni kívánt event

    const [formData, setFormData] = useState({
        name: event ? event.name : '',
        image: event ? event.image : '',
        location: event ? event.location : '',
        date: event ? event.date : '',
        details: event ? event.details : '',
        price: event ? event.price : 0,
        available: event ? event.available : 0,
    });

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

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let response;
            if (!event) {
                response = await fetchByMethod('/api/events', 'POST', formData);
            } else {
                response = await fetchByMethod(`/api/events/${event._id}`, 'PATCH', formData);
            }
            if (response.ok) {
                console.log('New event has been created:' + response);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Image:</label>
            <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
            <label>Location:</label>
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
            <label>Details:</label>
            <input type="text" name="details" value={formData.details} onChange={handleInputChange} />
            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
            <label>Available:</label>
            <input type="number" name="available" value={formData.available} onChange={handleInputChange} />
            <button type="submit">Submit</button>
        </form>
    )
}
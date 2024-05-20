// ContactForm.js
import React, { useState } from 'react';
import { API_URL } from "../constants";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const url = `${API_URL}api/auth/contact`;

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        console.log(response);
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;

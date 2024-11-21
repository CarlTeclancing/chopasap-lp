import React, { useState } from 'react';
import { db, collection, addDoc } from '../../firebase';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "message") setMessage(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message,
                timestamp: new Date()
            });
            alert('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div>
            <Navigation />
            <h1>Contact Us</h1>
            <div className="container">
                <form className='contact' onSubmit={handleSubmit}>
                    <label htmlFor="uname">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleChange}
                        name="name"
                        required
                        placeholder="Your name.."
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        name="email"
                        required
                        placeholder="Your email.."
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleChange}
                        name="message"
                        required
                        placeholder="Write something.."
                        style={{ height: '200px' }}
                    ></textarea>
                    <input 
                        className="btn-ls" 
                        type="submit" 
                        value="Submit" 
                    />

                </form>
            </div>
            <Footer />
        </div>
    );
}

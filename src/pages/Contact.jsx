import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import {ref, set} from "firebase/database";
import { uid } from "uid";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../ScrollToTop'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = async () => {
        //event.preventDefault();

        try {
            const uuid = uid();
            await set(ref(db, `/${uuid}`), {
                uuid,
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
            console.log("Error adding document: ", error);
            alert("Error: " + error.message);
        }
    };

    return (
        <div>
            <Navigation />
            <ScrollToTop />
            <h1>Contact Us</h1>
            <div className="container">
                <form className='contact'>
                    <label htmlFor="uname">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) =>setName(e.target.value)}
                        name="name"
                        required
                        placeholder="Your name.."
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        name="email"
                        required
                        placeholder="Your email.."
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) =>setMessage(e.target.value)}
                        name="message"
                        required
                        placeholder="Write something.."
                        style={{ height: '200px' }}
                    ></textarea>
                    <button 
                        className="btn-ls"  
                        value="Submit" 
                        onClick={handleSubmit}
                    >
                        Submit
                    
                    </button>

                </form>
            </div>
            <Footer />
        </div>
    );
}

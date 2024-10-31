import React from 'react'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// const FormSubmit = () => {
//     const uname = document.getElementById("name").value
//     const email = document.getElementById("email").value
//     const message = document.getElementById("message").value

//     console.log(uname, email, message)
//     alert('Form submitted successfully!')

//     document.getElementById("name").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("message").value = ""
// }

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
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message);
        alert('Form submitted successfully!');
    };
    


  return (
    <div>
        <Navigation />
            <h1>Contact Us</h1>
            <div className="container">
                <form action="" className='contact'>
                    <label htmlFor="uname">Name</label>
                    <input type="text" id="name" value={name} onChange={handleChange} name="name" required placeholder="Your name.." />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={handleChange} name="email" required placeholder="Your email.." />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={message} onChange={handleChange} name="message" required placeholder="Write something.." style={{height: '200px'}}></textarea>
                    <button onClick={handleSubmit} className="btn-ls" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        <Footer />
    </div>
  )
}

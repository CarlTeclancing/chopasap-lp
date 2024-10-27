import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FormSubmit = () => {
    const uname = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    console.log(uname, email, message)
    alert('Form submitted successfully!')

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("message").value = ""
}

export default function Contact() {
  return (
    <div>
        <Navigation />
            <h1>Contact Us</h1>
            <div className="container">
                <form action="" className='contact'>
                    <label htmlFor="uname">Name</label>
                    <input type="text" id="name" name="uname" required placeholder="Your name.." />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Your email.." />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Write something.." style={{height: '200px'}}></textarea>
                    <button onClick={FormSubmit} className="btn-ls" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        <Footer />
    </div>
  )
}

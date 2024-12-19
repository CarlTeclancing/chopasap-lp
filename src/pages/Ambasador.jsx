import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero.jsx';

export default function Ambasador() {
  return (

    <div className='container'>
    <Navigation />
    
        <h1>Become An Ambassador</h1>
        <div className="container-narrow">
            <h4>Welcome to the Chop ASAP Ambassador Program!</h4>
            <p>Are you a food enthusiast, influencer, or someone passionate about promoting local businesses? Our Ambassador Program is your chance to earn rewards while spreading the word about Chop ASAP.</p>
            <h3>Why Join the Program?</h3>
            <ul>
                <li>Earn Commissions: Get paid for every successful sign-up using your referral code.</li>
                <li>Exclusive Perks: Gain access to discounts, early app features, and ambassador-only events.</li>
                <li>Make an Impact: Support local vendors and bring food delivery closer to communities.</li>
            </ul>
            <h3>What Do Ambassadors Do?</h3>
            <p>As a Chop ASAP Ambassador, you’ll:</p>
            <ul>
                <li>Share Chop ASAP with your network through creative campaigns, social media, and events.</li>
                <li>Generate new sign-ups using your personalized referral code.</li>
                <li>Provide feedback to help improve our platform.</li>
            </ul>
            <h3>How to Apply</h3>
            <div className="container">
                <form className='contact'>
                    <label htmlFor="uname">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name.."
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Your email.."
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
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
        </div>
        

    <Footer />
  </div>  )
}

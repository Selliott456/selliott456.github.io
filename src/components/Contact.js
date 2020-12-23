import React from 'react'
import contact from '../styles/contact.png'

const Contact = () => {
  return <main className="contactMain">
    <img src={contact}></img>
    <div className="contact">
      <form>
        <input type="email" placeholder='email address'></input>
      </form>
    </div>

  </main>
}

export default Contact
import React from 'react'
import emailjs from 'emailjs-com'




const Contact = () => {

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_2dfgj4j', 'template_zs23v1c', e.target, 'user_3hmUW5ZzZycAnveOuL0LD')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (<main className="contactMain">
    <h1>Contact Me</h1>
    <form className="contact-form" onSubmit={sendEmail}>
      <input className="formInput" type="hidden" name="contact_number" />
      <label className="formLabel">Name</label>
      <input className="formInput" type="text" name="name" />
      <label className="formLabel">Email</label>
      <input className="formInput" type="email" name="email" />
      <label className="formLabel">Subject</label>
      <input className="formInput" type="text" name="subject" />
      <label className="formLabel">Message</label>
      <textarea className="message" name="message" />
      <input className="formSend" type="submit" value="Send" />
    </form>
  </main>
  )
}

export default Contact
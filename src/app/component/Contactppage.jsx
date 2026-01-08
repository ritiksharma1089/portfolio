'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formdata, setFormdata] = useState({
    username: '',
    useremail: '',
    usermessage: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({ ...prev, [id]: value }));
  };

  const submitform = async () => {

    console.log(formdata); 
    
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formdata),
  });

  const data = await res.json();

  if (data.success) {
    alert('Message sent!');
    setFormdata({ name: '', email: '', message: '' });
  } else {
    alert('Failed to send message.');
  }
  };

return (
    <section className="bg-black text-light py-5 px-3" id="contact">
        <div className="container">
            <h2 className="text-center text-primary mb-5">Contact Me</h2>
            <div className="row align-items-start">
                {/* Left Side */}
                <div className="col-md-5 mb-4">
                    <div className="p-4 h-100 ">
                        <h4 className="text-info mb-4">Contact Information</h4>

                        <p className="mb-3">
                            <span className="fs-5 me-2">📧</span>
                            <strong>Email:</strong><br />
                            <a href="mailto:Rijikkaushik9@gmail.com" className="text-decoration-none text-light">
                                Rijikkaushik9@gmail.com
                            </a>
                        </p>

                        <p className="mb-3">
                            <span className="fs-5 me-2">📱</span>
                            <strong>Phone:</strong><br />
                            <a href="tel:+918684834208" className="text-decoration-none text-light">
                                +91-8684834208
                            </a>
                        </p>

                        <p className="mb-4">
                            <span className="fs-5 me-2">📍</span>
                            <strong>Location:</strong><br />
                            Haryana-131101
                        </p>

                        <h5 className="text-info mb-3">Follow Me</h5>
                        <div className="d-flex gap-3">
                            <a
                                href="https://github.com/ritiksharma1089"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light btn-sm rounded-pill"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rijik-sharma-a0965a256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-primary btn-sm rounded-pill"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

             
                 <div className="col-md-7">
                    <div className="bg-dark border border-secondary rounded-4 p-4">
                        <h4 className="text-info mb-4">Send a Message</h4>
                     
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">NAME</label>
                                <textarea
                                    className="form-control bg-black text-light"
                                    id="username"
                                    placeholder="your name"
                                    value={formdata.username}
                                    onChange={handleChange}
                                    required
                                    rows="1"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <textarea
                                    className="form-control bg-black text-light "
                                    id="useremail"
                                    placeholder="you@example.com"
                                    onChange={handleChange}
                                    value={formdata.useremail}
                                    required
                                    rows="1"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control bg-black text-light border-secondary"
                                    id="usermessage"
                                    value={formdata.usermessage}
                                    rows="5"
                                    placeholder="Type your message..."
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" onClick={submitform} className="btn btn-primary rounded-pill px-4">
                                Submit
                            </button>
                    
                    </div> 
                 </div>


                <div>

                </div>
            </div>
        </div>
    </section>
);
};

export default ContactPage;

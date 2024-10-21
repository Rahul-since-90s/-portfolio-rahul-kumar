// app/contact/page.js
'use client'
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [messageStatus, setMessageStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the form data to an API or service
        // For demonstration, we just log the data
        console.log('Form submitted:', formData);

        // Simulate success message (in a real app, you'd handle success/error based on API response)
        setMessageStatus('Your message has been sent successfully!');

        // Clear form fields after submission (optional)
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Me</h2>
            {messageStatus && (
                <div className="alert alert-success" role="alert">
                    {messageStatus}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

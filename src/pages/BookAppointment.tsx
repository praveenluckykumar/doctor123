
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookAppointment.css'; 

const BookAppointment: React.FC = () => {
  const { id } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted)
    return <p className="success-message">Appointment booked successfully for {form.datetime}!</p>;

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2 className="form-title">Book Appointment with Doctor #{id}</h2>
      <input
        name="name"
        placeholder="Patient Name"
        required
        onChange={handleChange}
        className="form-input"
      /><br /><br />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="form-input"
      /><br /><br />
      <input
        name="datetime"
        type="datetime-local"
        required
        onChange={handleChange}
        className="form-input"
      /><br /><br />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default BookAppointment;

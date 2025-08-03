
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data';
import './DoctorProfile.css';

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <p className="not-found">Doctor not found</p>;

  return (
    <div className="profile-container">
      <h2 className="doctor-name">{doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Status:</strong> {doctor.status}</p>

      <h4>Availability:</h4>
      <ul className="availability-list">
        {doctor.availability.length > 0 ? (
          doctor.availability.map((slot, i) => <li key={i}>{slot}</li>)
        ) : (
          <li>No slots available</li>
        )}
      </ul>

      <Link to={`/book/${doctor.id}`}>
        <button className="book-button">Book Appointment</button>
      </Link>
    </div>
  );
};

export default DoctorProfile;

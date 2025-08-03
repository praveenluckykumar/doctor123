
import React, { useState } from 'react';
import { doctors } from '../data';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import { Doctor } from '../types';

const LandingPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Doctor Directory</h1>
      <SearchBar onSearch={setQuery} />
      {filteredDoctors.map((doctor: Doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default LandingPage;

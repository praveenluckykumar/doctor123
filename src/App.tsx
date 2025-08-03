// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorProfile from './pages/DoctorProfile';
import BookAppointment from './pages/BookAppointment';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/book/:id" element={<BookAppointment />} />
    </Routes>
  </Router>
);

export default App;

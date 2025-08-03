import React from 'react';
import { Doctor } from '../types';
import { Link } from 'react-router-dom';
import styles from './DoctorCard.module.css';

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => (
  <div className={styles.card}>
    <img src="https://www.apollospectra.com/backend/web/doctor-images/1692943480DR.%20Mohammad%20Naseeruddin.jpg" alt={doctor.name} className={styles.avatar} />
   
    <div className={styles.details}>
      <h3 className={styles.name}>{doctor.name}</h3>
      <p className={styles.specialization}>{doctor.specialization}</p>
      <p className={styles.status}>
    
        Status:{' '}
        <strong className={styles[`status_${doctor.status.replace(/\s+/g, '').toLowerCase()}`]}>
          {doctor.status}
        </strong>
      </p>
      <Link to={`/doctor/${doctor.id}`} className={styles.link}>
        View Profile
      </Link>
    </div>
    <img src="https://tse1.mm.bing.net/th/id/OIP.WDfcZHiDfY_bsf8BFFqvsgHaHz?pid=Api&P=0&h=220" alt={doctor.name} className={styles.avatar} />
   
    <div className={styles.details}>
      <h3 className={styles.name}>Dr. Sarah Lee</h3>
      <p className={styles.specialization}>Neurologist</p>
      <p className={styles.status}>
    
        Status:{' '}
        <strong className={styles[`status_${doctor.status.replace(/\s+/g, '').toLowerCase()}`]}>
          {doctor.status}
        </strong>
      </p>
      <Link to={`/doctor/${doctor.id}`} className={styles.link}>
        View Profile
      </Link>
    </div>
  
  </div>
);

export default DoctorCard;

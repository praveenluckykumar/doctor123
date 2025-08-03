
import React from 'react';
import  styles from './SearchBar.module.css';


interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search by name or specialization"
    onChange={(e) => onSearch(e.target.value)}
    style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
  />
);

export default SearchBar;

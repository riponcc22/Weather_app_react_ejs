import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput(''); // Clear the input field after search
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter city" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;

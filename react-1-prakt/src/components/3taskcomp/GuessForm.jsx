import React, { useState } from 'react';

function GuessForm({ onGuess }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    if (typeof onGuess === 'function') {
      onGuess(inputValue);
    }
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Įveskite spėjimą"
      />
      <button type="submit">Spėti</button>
    </form>
  );
}

export default GuessForm;

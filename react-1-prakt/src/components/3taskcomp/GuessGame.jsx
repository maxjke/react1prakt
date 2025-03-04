import React, { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';

function GuessGame() {
  const [secretNumber, setSecretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const [guesses, setGuesses] = useState([]);

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setMessage('');
    setGuesses([]); 
  };

  const handleGuess = (guess) => {
    setAttempts(prev => prev + 1);
    const guessNumber = parseInt(guess, 10);

    
    setGuesses(prevGuesses => [...prevGuesses, guessNumber]);

    if (guessNumber > secretNumber) {
      setMessage('Bandyk mažesnį');
    } else if (guessNumber < secretNumber) {
      setMessage('Bandyk didesnį');
    } else {
      setMessage('Teisingai!');
      setTimeout(resetGame, 3000);
    }
  };

  return (
    <div>
      <h2>Spėk skaičių nuo 1 iki 100</h2>
      <GuessForm onGuess={handleGuess} />
      <Message message={message} attempts={attempts} />
      {guesses.length > 0 && (
        <div>
          <h3>Tavo spėjimai:</h3>
          <ul>
            {guesses.map((guess, index) => (
              <li key={index}>
                {guess}
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GuessGame;

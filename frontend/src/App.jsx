import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState('a dense, misty forest');
  const [description, setDescription] = useState('');
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Fetch adventure data
  const fetchAdventure = async (newLocation) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/adventure', { location: newLocation });
      setDescription(response.data.description);
      setChoices(response.data.choices);
      setLocation(newLocation);
    } catch (error) {
      setDescription('The magic faltered... Try again!');
      setChoices([]);
    }
    setLoading(false);
  };

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    fetchAdventure(location);
  };

  // Handle choice
  const handleChoice = (choice) => {
    const newLocation = choice.split('. ')[1].toLowerCase();
    fetchAdventure(`a ${newLocation}`);
  };

  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    setDescription('');
    setChoices([]);
    setLocation('a dense, misty forest');
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <div className="landing">
          <h1>The Lost Realm</h1>
          <p className="tagline">Embark on a magical journey through a world of wonder!</p>
          <button className="play-button" onClick={startGame}>
            Play Now
          </button>
          <div className="how-to-play">
            <h3>How to Play</h3>
            <p>Explore a fantasy world by reading the story and clicking choices to shape your adventure. No rules, just imagination!</p>
          </div>
        </div>
      ) : (
        <div className="game">
          <h1>The Lost Realm</h1>
          <div className="game-content">
            <h2>{location}</h2>
            {loading ? (
              <div className="loader">Unveiling the path...</div>
            ) : (
              <>
                <p className="description">{description}</p>
                <div className="choices">
                  {choices.length > 0 ? (
                    choices.map((choice, index) => (
                      <button
                        key={index}
                        onClick={() => handleChoice(choice)}
                        disabled={loading}
                        className="choice-button"
                      >
                        {choice}
                      </button>
                    ))
                  ) : (
                    <p>The path is unclear. Restart your journey!</p>
                  )}
                </div>
                <button onClick={resetGame} className="restart-button">
                  Restart Journey
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
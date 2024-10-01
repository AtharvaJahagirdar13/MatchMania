import React from 'react';
import { useParams } from 'react-router-dom'; // To get the game ID from URL
import games from '../Assets/data3'; // Import the data for games
import './UserGameDetailPage.css'; // Import CSS for styling

const UserGameDetailPage = () => {
  const { id } = useParams(); // Get game ID from URL params
  const game = games.find((g) => g.id === parseInt(id)); // Find the specific game by ID

  if (!game) {
    return <p>Game not found</p>;
  }

  const handleShowOnMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(game.venue)}`, '_blank');
  };

  return (
    <div className="game-detail-page">
      <div className="left-section">
        <div className="activity-box">
          <h2>{game.sport}</h2>
          <p>Hosted by: {game.userName}</p>
          <p>Date: {game.timing}</p>
          <p>Location: {game.venue}</p>
          <button onClick={handleShowOnMaps} className="maps-button">
            Show on Maps
          </button>
          <p>Level: {game.difficulty}</p>
        </div>
      </div>

      <div className="right-section">
        <div className="players-box">
          <h3>Players Attending</h3>
          <ul>
            {game.players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <button className="nearby-venues-button">See Nearby Venues</button>
      </div>
    </div>
  );
};

export default UserGameDetailPage;

import React from 'react';
import './Popvene.css'; // Add a CSS file for styling

const sports = [
  { id: 1, name: 'Cricket', image: 'cricket.jpg' },
  { id: 2, name: 'Football', image: 'football.jpg' },
  { id: 3, name: 'Tennis', image: 'tennis.jpg' },
  { id: 4, name: 'Badminton', image: 'badminton.jpg' },
  { id: 5, name: 'Basketball', image: 'basketball.jpg' },
];

const Popvene = () => {
  return (
    <div className="popular-sports-container">
      <h2>Popular Sports</h2>
      <div className="sports-grid">
        {sports.map((sport) => (
          <div key={sport.id} className="sport-card">
            <img src="" alt={sport.name} className="sport-image" />
            <div className="sport-details">
              <h3>{sport.name}</h3>
             
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Popvene;

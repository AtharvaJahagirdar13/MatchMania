import React, { useEffect, useState } from 'react';
import { turfs } from '../Assets/data'; // Adjust the path as needed
import './Popvenue.css'; // Add a CSS file for styling

const Popvenue = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Fetch the first three venues from data.js
    const selectedVenues = turfs.slice(0, 4);
    setVenues(selectedVenues);
  }, []);

  // Function to calculate the distance between the user and the venue location
  const calculateDistance = (venueLocation) => {
    // Placeholder for distance calculation logic
    return Math.floor(Math.random() * 20) + 1; // Random distance between 1 and 20 km
  };

  return (
    <div className="popular-venues-container">
      <h2>Popular Venues</h2>
      <div className="venues-grid">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src=""alt={venue.title} className="venue-image" />
            <div className="venue-details">
              <h3>{venue.title}</h3>
              <p>{calculateDistance(venue.location)} km away</p>
            </div>
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default Popvenue;

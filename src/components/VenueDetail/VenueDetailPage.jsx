/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import venues from '../Assets/data1'; // Your venues data
import './VenueDetailPage'

const VenueDetailPage = () => {
  const { venueId } = useParams(); // Extract the venueId from the URL
  const [venue, setVenue] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // Fetch the venue details based on the venueId
  useEffect(() => {
    const selectedVenue = venues[venueId];
    setVenue(selectedVenue);
  }, [venueId]);

  // Handle review submission
  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview('');
    }
  };

  if (!venue) {
    return <p>Loading...</p>;
  }

  return (
    <div className="venue-detail-page">
      <div className="venue-details-container">
        <div className="venue-info">
          <h1>{venue.location}</h1>
          <p>Sports Played: {venue.sports.join(', ')}</p>

          <div className="timeslots">
            <h3>Available Timeslots:</h3>
            <ul>
              {venue.timeSlots.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="venue-image">
          <img src={venue.image} alt={venue.location} />
          <button
            className="maps-button"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
                '_blank'
              )
            }
          >
            View on Google Maps
          </button>
        </div>
      </div>

      
      <div className="review-section">
        <h3>Leave a Review:</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>

        <div className="reviews-list">
          <h3>Existing Reviews:</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave a review!</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueDetailPage;

*/
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import venues from '../Assets/data1'; // Your venues data
import './VenueDetailPage.css'; // Updated import for CSS

const VenueDetailPage = () => {
  const { venueId } = useParams(); // Extract the venueId from the URL
  const [venue, setVenue] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [cartCount, setCartCount] = useState(0); // Cart count for the venue

  const navigate = useNavigate(); // For navigation to the cart page

  // Fetch the venue details based on the venueId
  useEffect(() => {
    const selectedVenue = venues[venueId];
    setVenue(selectedVenue);
  }, [venueId]);

  // Handle review submission
  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview('');
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count
    // Assuming there's a global or local state to manage the cart
    // Add this venue to the cart (you can replace this with actual cart logic)
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({
      venueId,
      venueName: venue.location,
      timeslot: venue.timeSlots[0], // Assuming selecting first timeslot
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  // Navigate to cart page
  const goToCartPage = () => {
    navigate('/cart');
  };

  if (!venue) {
    return <p>Loading...</p>;
  }

  return (
    <div className="venue-detail-page-custom">
      <div className="venue-details-container-custom">
        <div className="venue-info-custom">
          <h1>{venue.location}</h1>
          <p>Sports Played: {venue.sports.join(', ')}</p>

          <div className="timeslots-custom">
            <h3>Available Timeslots:</h3>
            {venue.timeSlots && venue.timeSlots.length > 0 ? (
              <ul>
                {venue.timeSlots.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            ) : (
              <p>No timeslots available</p>
            )}
          </div>

          {/* Add null check for owner */}
          {venue.owner && (
            <p>
              Owner: {venue.owner.name} ({venue.owner.contact})
            </p>
          )}
          
          {/* Add to Cart Section */}
          <div className="cart-section-custom">
            <button
              onClick={handleAddToCart}
              className="add-to-cart-button-custom"
            >
              Add to Cart
            </button>
            {cartCount > 0 && (
              <p>
                Items in Cart: {cartCount}{' '}
                <button onClick={goToCartPage}>Go to Cart</button>
              </p>
            )}
          </div>
        </div>

        <div className="venue-image-custom">
          <img src={venue.image} alt={venue.location} />
          <button
            className="maps-button-custom"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${venue.location}`,
                '_blank'
              )
            }
          >
            View on Google Maps
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section-custom">
        <h3>Leave a Review:</h3>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>

        <div className="reviews-list-custom">
          <h3>Existing Reviews:</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave a review!</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueDetailPage;

import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContext } from '../components/AlbumContext';
import AlbumCard from '../components/AlbumCard';
import ReviewCard from '../components/ReviewCard';
import './AlbumDashboard.css';

const AlbumDashboard = () => {
  const { albumName } = useParams();
  const allinfo = useContext(AlbumContext);

  // Find the album that matches the albumName URL parameter
  const album = allinfo.find(album => album[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase() === decodeURIComponent(albumName));

  // Start with an empty array for reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // Function to handle adding a new review
  const addReview = () => {
    const review = {
      avatarUrl: '',
      username: 'anon',
      comment: newReview,
    };

    setReviews([...reviews, review]);
    setNewReview('');
  };

  // If no matching album is found, display an error message
  if (!album) {
    return (
      <div>
        <h1>Album not found</h1>
      </div>
    )
  }

  return (
    <div className="album-dashboard">
      <div className="left-side">
        <AlbumCard album={album} />
      </div>
      <div className="right-side">
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          <div className="new-review-form">
            <input type="text" value={newReview} onChange={e => setNewReview(e.target.value)} />
            <button onClick={addReview}>Submit Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDashboard;

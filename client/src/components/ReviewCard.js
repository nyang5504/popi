import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review, albumName }) => {
  if (review.albumName === albumName)
  return (
    <div className="review-card">
      <div className="review-user">
        <img src={review.avatarUrl}/>
        <p>{review.username}</p>
      </div>
      <div className="review-text">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-user">
        <img src={review.avatarUrl} alt="User avatar" />
        <p>{review.username}</p>
      </div>
      <div className="review-text">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
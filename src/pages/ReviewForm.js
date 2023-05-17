import React, { useState } from 'react';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit the review to backend
    // resets the textarea after submitting
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write a review!"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

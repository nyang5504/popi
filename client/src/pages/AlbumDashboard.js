import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlbumContext } from '../components/AlbumContext';
import AlbumCard from '../components/AlbumCard';
import ReviewCard from '../components/ReviewCard';
import {useLocalStorage} from 'usehooks-ts';
import popilogo from './popi.png';
import './AlbumDashboard.css';

const AlbumDashboard = () => {
  const { albumName } = useParams();
  const allinfo = useContext(AlbumContext);

  // Find the album that matches the albumName URL parameter
  const album = allinfo.find(album => album[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase() === decodeURIComponent(albumName));

  // Start with an empty array for reviews
  // const [reviews, setReviews] = useState(json.parse(localStorage.getItem("reviews")) ||[]);
  const [newReview, setNewReview] = useState('');

  const [reviews, setReviews] = useLocalStorage('review', []) 
  useEffect(()=>{
    localStorage.setItem("reviews", reviews.toString());
  }, [reviews])


  // Function to handle adding a new review
  const addReview = () => {
    const review = {
      avatarUrl: '',
      username: 'anon',
      comment: newReview,
      albumName: albumName
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
    <div>
      <div id="top"><Link to="/home">
        <img style={{height: '100px'}} src={popilogo}></img>
        </Link></div>
    
    <div className="album-dashboard">
      {/* <div style={{alignItems: 'center'}}> */}
      <div className="left-side"  style={{alignItems:'center'}}>
        <AlbumCard album={album} />
      </div>
      {/* </div> */}
      <div className="right-side">
        <div className="reviews-container">
          {reviews.map((review, index) => (
            // {review.albumName === albumName &&
            <ReviewCard key={index} review={review} albumName={albumName}/>
          ))}
          <div className="new-review-form">
            <input type="text" value={newReview} onChange={e => setNewReview(e.target.value)} />
            <button onClick={addReview}>Submit Review</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AlbumDashboard;

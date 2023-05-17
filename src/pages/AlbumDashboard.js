import React from 'react';
//import AlbumInfo from './AlbumInfo';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import AlbumCard from '../components/AlbumCard';
import './AlbumDashboard.css';

const AlbumDashboard = (props) => {
    const album = { title: 'My Album', artist: 'Artist Name' };

    // Static reviews data
  const reviews = [
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'Slaaaaaay!',
    },
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'SO GOOD!',
    },
    {
      avatarUrl: '',
      username: 'anon',
      comment: 'obsessed',
    },
  ];

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
        </div>
        <ReviewForm />
        </div>
    </div>
    );
};

export default AlbumDashboard;
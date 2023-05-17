import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContext } from '../components/AlbumContext';
import AlbumCard from '../components/AlbumCard';
import ReviewCard from '../components/ReviewCard';

const AlbumDashboard = () => {
  const { albumName } = useParams();
  const allinfo = useContext(AlbumContext);

  // Find the album that matches the albumName URL parameter
  const album = allinfo.find(album => album[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase() === decodeURIComponent(albumName));

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
        </div>
      </div>
    </div>
  );
};

export default AlbumDashboard;



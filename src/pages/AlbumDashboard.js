import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import AlbumCard from '../components/AlbumCard';
import './AlbumDashboard.css';


const AlbumDashboard = (props) => {
    const [artist, setArtist] = useState('');
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        if (artist !== '') {
            const fetchAlbums = async () => {
                try {
                    const res = await axios.get(`/albums/${artist}`);
                    setAlbums(res.data);  // res.data is now an array of album objects
                } catch (err) {
                    console.error(err);
                }
            };
    
            fetchAlbums();
        }
    }, [artist]);    

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

    const handleArtistChange = (event) => {
        setArtist(event.target.value);
    };

    return (
        <div className="album-dashboard">
            <div className="left-side">
                {albums.map((album, index) => (
                     <AlbumCard key={index} album={album.title} artistName={album.artist} img={album.img} />
                ))}
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

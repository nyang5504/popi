import React, { useContext } from 'react';
import AlbumCard from "../components/AlbumCard";
import './Homepage.css';
import { Link } from 'react-router-dom';
import { AlbumContext } from '../components/AlbumContext';

const Homepage = () => {
    const info = useContext(AlbumContext);

    console.log(info);

    return (
        <div className="album-grid">
          {Array.isArray(info) && info.map((item, index) => (
            <Link to={"/albumdashboard/" + item[2].replace(/\s+/g, '-').toLowerCase()}>
              <AlbumCard key={index} album={item} />
            </Link>
          ))}
        </div>
    )
};

export default Homepage;


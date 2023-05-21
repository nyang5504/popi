import React, { useContext } from 'react';
import AlbumCard from "../components/AlbumCard";
import './Homepage.css';
import { Link } from 'react-router-dom';
import { AlbumContext } from '../components/AlbumContext';
import popilogo from './popi.png';

const Homepage = () => {
    const info = useContext(AlbumContext);

    console.log(info);

    return (
      <div id="headerLine">
      <img style={{height: '100px', alignSelf: 'center'}} src={popilogo}></img>
      {/* <h1 style={{textAlign: 'center'}}>Popi</h1> */}
        <div className="album-grid">
          {Array.isArray(info) && info.map((item, index) => (
            // <Link to={"/albumdashboard/" + encodeURIComponent(item[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase())}>
                <AlbumCard key={index} album={item} />
            // </Link>                           
          ))}
        </div>
      </div>
    )
};

export default Homepage;


import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AlbumDashboard from './pages/AlbumDashboard';
import React, { useEffect, useState } from 'react';
// import { getAlbumInfo } from '../../server/server'; 
import './App.css';

// let image = ""
// let albumName = ""
// let artist = ""

function App() {
  const [image, setImage] = useState([]);
  const [artist, setArtist] = useState([]);
  const [albumName, setAlbumName] = useState([]);
  const [allinfo, setAllInfo] = useState([]);

  useEffect(() => {
    fetch('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&limit=12&api_key=c2b279f1bbfca29d3c01815222dafcf9&format=json')
      .then(response => response.json())
      .then(data => {
        let imageUrl = [];
        let artistName = [];
        let name = [];
        let allInfoData = [];
      for (let i = 0; i < 12; i++) {
        let imageUrl = data.albums.album[i].image[2]['#text'];
        let artistName = data.albums.album[i].artist.name;
        let album = data.albums.album[i].name;
        allInfoData.push([imageUrl, artistName, album]);
      }
      setAllInfo(allInfoData);
    });
}, []);
  
  // const renderAll = () => {
  //   return allinfo.map(item => (
  //     <div id="albumCardHomepage">
  //       <img src={item[0]}></img>
  //       <div class="artistName">{item[1]}</div>
  //       <div class="albumName">{item[2]}</div>
  //     </div>
  //   ))
  //     // e => (
  //     //   <img src={e}/>
  //     // )
  // };

  return (
    

    <div>
      
      <BrowserRouter>
        
        <Link to="/albumdashboard">album dashboard</Link>
        
        <Routes>
          <Route index element={<Homepage info={allinfo}/>}/>
          <Route path='/home' element={<Homepage info={allinfo}/>}/>
          <Route path='/albumdashboard' element={<AlbumDashboard/>}/>
        </Routes>
        {/* <div id="homepage">{renderAll()}</div> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
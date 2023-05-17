import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlbumInfo = ({ album }) => {
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const response = await axios.get(`/artist/${album.artist}`);
        setArtistInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtistInfo();
  }, [album.artist]);

  return (
    <div className="album-info">
      <img src={album.coverImageUrl} alt={album.name} />
      <audio src={album.previewUrl} controls />
      <div className="album-details">
        <h2>{album.name}</h2>
        <p>Artist: {album.artist}</p>
        {artistInfo && (
          <div>
            <p>Artist Info: {artistInfo}</p>
            {/* Render additional artist information */}
          </div>
        )}
        <p>Release Date: {album.releaseDate}</p>
        <p>Genres: {album.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;

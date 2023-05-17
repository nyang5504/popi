import React from 'react';

const AlbumInfo = ({ album }) => {
  return (
    <div className="album-info">
      <img src={album.coverImageUrl} alt={album.name} />
      <audio src={album.previewUrl} controls />
      <div className="album-details">
        <h2>{album.name}</h2>
        <p>Artist: {album.artist}</p>
        <p>Release Date: {album.releaseDate}</p>
        <p>Genres: {album.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
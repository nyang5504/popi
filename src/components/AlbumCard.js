import React from 'react';

const AlbumCard = (props) => {
  return (
    <div className="album-card">
      <img src={props.album.img} width="275" height="275" alt="Album Cover" />
      <div className="album-name">
        <p>{props.album.title}</p>
      </div>
      <div className="artist-name">
        <p>{props.album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;

import React from 'react';

const AlbumCard = (props) => {
  return (
      <div className="album-card">
          <img src={props.img} width="275" height="275" alt="Album Cover" />
          <div className="album-name">
              <p>{props.album}</p>
          </div>
          <div className="artist-name">
              <p>{props.artistName}</p>
          </div>
      </div>
  );
};


export default AlbumCard;

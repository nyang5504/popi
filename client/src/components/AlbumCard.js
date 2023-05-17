import './AlbumCard.css'
const AlbumCard = (props) => {

  return ((props.info).map(item => (
    <div id="albumCardHomepage" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <img src={item[0]}></img>
      <div className="artistName">{item[1]}</div>
      <div className="albumName">{item[2]}</div>
    </div>
  )))
};

export default AlbumCard;
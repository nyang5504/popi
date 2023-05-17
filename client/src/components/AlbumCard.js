import { Link } from 'react-router-dom';
import './AlbumCard.css'

const AlbumCard = (props) => {
    const { album } = props;

    return (
      <Link to={"/albumdashboard/" + encodeURIComponent(album[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase())}>
            <div className="album-card">
                <img src={album[0]} alt={album[1] + " " + album[2]} />
                <div className="artist-name">{album[1]}</div>
                <div className="album-name">{album[2]}</div>
            </div>
        </Link>
    );
};

export default AlbumCard;


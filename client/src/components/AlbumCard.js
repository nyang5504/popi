import { Link } from 'react-router-dom';
import './AlbumCard.css'

const AlbumCard = (props) => {
    const { album } = props;
    document.cookie = "name=John Doe";
    return (
            <div className="album-card">
                <Link to={"/albumdashboard/" + encodeURIComponent(album[2].replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase())}>
      
                <img src={album[0]} alt={album[1] + " " + album[2]} />
                </Link>
                <div className="artist-name">{album[1]}</div>
                <div className="album-name">{album[2]}</div>
            </div>
      
    );
};

export default AlbumCard;


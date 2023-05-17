import './AlbumCard.css'

const AlbumCard = (props) => {
    const { album } = props;

    return (
        <div className="album-card">
            <img src={album[0]} alt={album[1] + " " + album[2]} />
            <div className="artist-name">{album[1]}</div>
            <div className="album-name">{album[2]}</div>
        </div>
    );
};

export default AlbumCard;

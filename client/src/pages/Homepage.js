import AlbumCard from "../components/AlbumCard"
import './Homepage.css'

const Homepage = (props) => {
    return(
        <div className="album-grid">
            {props.info.map((item, index) => (
                <AlbumCard key={index} album={item} />
            ))}
        </div>
    )
};

export default Homepage;

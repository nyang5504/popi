import AlbumCard from "../components/AlbumCard"
import styles from './Homepage.css'

const Homepage = (props) => {
    return(
        <div>
            <AlbumCard info={props.info}/>
            {/* {props.render()} */}
        </div>
    )
};

export default Homepage;
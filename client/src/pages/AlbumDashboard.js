import { useParams } from 'react-router-dom';

const AlbumDashboard = (props) => {
    const { albumName } = useParams();

    return(
        <div>
            <h1>ALBUM DASHBOARD</h1>
            <h2>Album: {albumName.replace(/-/g, ' ')}</h2>
        </div>
    )
};

export default AlbumDashboard;

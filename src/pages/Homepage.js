import AlbumCard from "../components/AlbumCard"

const Homepage = (props) => {
    const albums = [
        {
          coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
          name: 'Album 1',
          artist: 'Artist 1',
        },
        {
          coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
          name: 'Album 2',
          artist: 'Artist 2',
        },
        {
            coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
            name: 'Album 2',
            artist: 'Artist 2',
        },
        {
            coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
            name: 'Album 1',
            artist: 'Artist 1',
        },
        {
            coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
            name: 'Album 2',
            artist: 'Artist 2',
        },
        {
            coverImageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',
            name: 'Album 2',
            artist: 'Artist 2',
        }
      ];
    
      return (
        <div>
            <h1>HOMEPAGE</h1>
            <div className="home-page">
                <div className="album-grid2">
                    <div className="album-grid">
                    {albums.map(e => (
                        <AlbumCard img={e.coverImageUrl} album={e.name} artistName={e.artist} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
      );
};

export default Homepage;
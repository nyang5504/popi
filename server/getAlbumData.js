export const getAlbumData = () => {
  return fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json')
    .then(res => res.json())
    .then(data => data);
}


const express = require("express");
const fetch = require("node-fetch").default;

const app = express();

app.use(express.json())


// const api_key = "c2b279f1bbfca29d3c01815222dafcf9";

// let getAlbumdata = () =>{
//     app.get("/home", (req, res) => {
//         fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&limit=6&api_key=${api_key}&format=json`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("Response data:", data);
//                 console.log("Number of albums:", data.albums.length);
//                 res.send(`<h1>hellovsddfa</h1>`);
//             })
//     })
// }
    




app.listen(5000, () => {console.log("Server started on port 5000")})


// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "UserThree"]})
// })

// app.get("/album", (req, res) => {
//     fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json')
//         .then(response => response.json())
// })
// app.get('/check', (req, res) => {
//     fetch('https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c2b279f1bbfca29d3c01815222dafcf9&artist=Cher&album=Believe&format=json/')
//       // This takes the raw response from the fetch promise and parses it to json data format.
//       .then(response => response.json())
//       // And then takes THAT promise and does things with the json data.
//   });
// app.get('/AlbumDashboard', (req, res) => {
    
//     // This takes the raw response from the fetch promise and parses it to json data format.
//     // And then takes THAT promise and does things with the json data.
// });
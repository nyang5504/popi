const api_key = "c2b279f1bbfca29d3c01815222dafcf9";

app.get("/album", (req, res) => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&limit=6&api_key=${api_key}&format=json`)
        .then(response => response.json())
})

// https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&limit=6&api_key=c2b279f1bbfca29d3c01815222dafcf9&format=json
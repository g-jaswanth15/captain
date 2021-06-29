function details(){ 
    let URLparams = (new URL(document.location)).searchParams;
    let id = URLparams.get('id'); 
    console.log(id)
    if(id!=null){
        displayDetails(id);
    }
}

function displayDetails(id){
    fetch(`http://www.omdbapi.com/?apikey=e94d2f36&i=${id}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('movie_image').src= data.Poster!="N/A"?data.Poster:"../assets/images/unavailable.png";
            document.getElementById('movie_name').innerText=data.Title;
            document.getElementById('movie_description').innerText=data.Plot;
            document.getElementById('movie_release_date').innerText=data.Released;
            document.getElementById('movie_genre').innerText=data.Genre;
            document.getElementById('movie_imdb_rating').innerText=data.imdbRating;
            document.getElementById('movie_runtime').innerText=data.Runtime;
            document.getElementById('movie_director').innerText=data.Director;
            document.getElementById('movie_actors').innerText=data.Actors;
        })
        .catch((err)=>{
            console.log(err);
        })
}

details();


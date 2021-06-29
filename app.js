async function displayHomeMovieList(elementId,listName){
	let movielist;
	if(elementId==="watchlist") movielist = returnWatchList();
	else if(elementId==="favourites") movielist = getFavourites();
	else if(elementId==="watched") movielist= returnWatched();
	if(movielist==null||movielist==undefined) return;
	console.log(movielist);
	const movielist_movies = document.getElementById(elementId);
	movielist_movies.innerHTML = "";
	if (movielist.length === 0) {
        console.log(`${listName} is Empty`);
		movielist_movies.innerHTML += `
            <div class="alert alert-info movie-name">
                Your ${listName} is empty
            </div>
        `;
	} else {
		movielist=movielist.slice(0,10);
		for(element of movielist) {
			try{
			let response = await fetch(`http://www.omdbapi.com/?apikey=e94d2f36&i=${element}`)
			const data= await response.json();
			poster=data.Poster!="N/A"?data.Poster:"./assets/images/unavailable.png"
			movielist_movies.innerHTML += `
				<a href="./pages/details.html?id=${data.imdbID}">
					<div class="p-3 border bg-light">
						<img src="${poster}" alt="example1" width="150px"/>
					</div>
				</a>
				`;
			}catch(err){ console.log(err) };
		}
	}
}

displayHomeMovieList("watchlist","Watchlist");
displayHomeMovieList("favourites","Favourites");
displayHomeMovieList("watched","Already Watched");
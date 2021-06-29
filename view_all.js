function list(){ 
    let URLparams = (new URL(document.location)).searchParams;
    let list = URLparams.get('list'); 
    console.log(list)
    if(list!=null){
        displayList(list);
    }
}

function displayList(list){
    const list_name=document.getElementById("list-name");
    if(list=="watchlist") {
        list_name.innerText="Watch List"
        displayFullList("watchlist","Watchlist");
    }
    else if(list=="watched"){
        list_name.innerText="Already Watched"
        displayFullList("watched","Already Watched");
    }
    else if(list=="favourites"){
        list_name.innerText="Favourites";
        displayFullList("favourites","Favourites");
    }
}

async function displayFullList(list,listName) {
    let movielist;
    if(list==="watchlist") movielist= returnWatchList();
    else if(list==="favourites") movielist= getFavourites();
    else if(list==="watched") movielist= returnWatched();
    if(movielist==null||movielist==undefined) return;
	const movielist_movies = document.getElementById("movies-list");
	movielist_movies.innerHTML = "";
	if (movielist.length === 0) {
        console.log(listName+" is Empty");
		movielist_movies.innerHTML += `
            <div class="alert alert-info movie-name">
                Your ${listName} is empty
            </div>
        `;
	} else {
        console.log(movielist);
		for(let movieId of movielist){
			try{
				let response = await fetch(`http://www.omdbapi.com/?apikey=e94d2f36&i=${movieId}`);
				let data = await response.json();
				poster=data.Poster!="N/A"?data.Poster:"../assets/images/unavailable.png"
				movielist_movies.innerHTML += `
				<div class="col">
					<div class="p-3 movie-img">
					<a href="./details.html?id=${data.imdbID}">
						<img src="${poster}" alt="example1" width="100%"/>
					</a>
					</div>
				</div>
				`;
			}catch(err){ console.log(err); }
		}
	}
}

list();
function addToWatched(id) {
	let watched= returnWatched();
	if (watched.includes(id)) {
		console.log("Already present");
	} else {
		watched.unshift(id);
		localStorage.setItem("watched", JSON.stringify(watched));
	}
	showColorWatched();
}

function removeFromWatched(id) {
	let watched= returnWatched();
	if (watched.includes(id)) {
		watched = watched.filter((val) => val !== id);
		localStorage.setItem("watched", JSON.stringify(watched));
	} else {
		console.log("Element not present");
	}
	showColorWatched();
}

function returnWatched(){
	const res = localStorage.getItem("watched");
	let watched = JSON.parse(res);
	if (watched === null || watched === undefined) {
		watched = [];
	}
	return watched;
}

function isPresentWatched(){
	let watched = returnWatched();
	return watched.includes(id);
}

function showColorWatched(){
  if(isPresentWatched()){
    document.getElementById('watched').setAttribute('fill','dark-green');
  }
  else{
  document.getElementById('watched').setAttribute('fill','currentColor');
  }
}

showColorWatched();

function watchedClick(){
	if(!isPresentWatched()){
		addToWatched(id);
	}
	else{
		removeFromWatched(id);
	}
}
let URLparams = (new URL(document.location)).searchParams;
let id = URLparams.get('id');

function favouriteClicked(){
    if(checkFavourite()){
        removeFromFavourites();
    }
    else{
        addToFavourite();
    }
}

//add to favourite function
function addToFavourite(){
    let existing=localStorage.getItem('favourite');
    existing=existing?existing.split(','):[];
    if(!checkFavourite(id)){
      existing.push(id);
    }
    localStorage.setItem('favourite', existing.toString());
    showColor();
}

//check if a movie is in favourite list
function checkFavourite(){
    let list=localStorage.getItem('favourite');
    list=list?list.split(','):false;
    if(!list){
        return false;
    }
    else{
        if(list.includes(id)){
            return true;
        }
        else{
            return false;
        }
    }
}

//function to get all favourite movies
function getFavourites(){
    let list = localStorage.getItem('favourite');
    list=list?list.split(','):[];
    return list;
}

//remove a movie from favourites
function removeFromFavourites(){
    let list=localStorage.getItem('favourite');
    list = list ? list.split(',') : [];
    if(list.length!==0){
        list = list.filter(item => item !== id)
    }
    localStorage.setItem('favourite', list.toString());
    showColor();
}


function showColor(){
  if(checkFavourite()){
    document.getElementById('favourite').setAttribute('fill','red');
  }
  else{
  document.getElementById('favourite').setAttribute('fill','currentColor');
  }
}

showColor();
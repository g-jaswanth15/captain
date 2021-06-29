//API KEY
const API_KEY= 'ecdb4cd2'

const searchInput= document.querySelector('#searchInput');
const searchButton= document.querySelector("#searchButton");
const movieTitle= document.querySelector("#movieTitle");
const movieYear= document.querySelector("#movieYear");
const movieDetailsbtn= document.querySelector("#movieDetailsbtn");
const viewLessbtn= document.querySelector("#viewLessbtn");

function getData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        console.log('Data:', data);
        movieTitle.innerHTML= "Title : " + data.Title
        movieYear.innerHTML= "Year : " + data.Year
            + "<div>" + data.Language +"</div>"
            +  "<div>" + data.Country +"</div>"

        moviedetails.innerHTML= "Cast : "+ data.Actors 
         + "<div>" + "Collection : " + data.BoxOffice +"</div>" 
         +"<div>" + "Genre : " + data.Genre +"</div>" 
         + "<div>"+ "Director : " + data.Director +"</div>"        
        
    })
    .catch(err=> console.log(err))
}

//fetch data from the api
searchButton.onclick=function(event){
    event.preventDefault();

    const value=searchInput.value;
    const url="http://www.omdbapi.com/?t="

    //generate the url based on the user input
    const newUrl= url + value + "&apikey=" + API_KEY;
    console.log(newUrl)
    getData(newUrl);  
}

//toggle between the buttons to hide and show details
movieDetailsbtn.onclick=(()=>{
    console.log("show")
    moviedetails.style.display= "block";  
    movieDetailsbtn.style.display= "none"; 
    viewLessbtn.style.display="block";
})

viewLessbtn.onclick=(()=>{
    console.log("hide")
    moviedetails.style.display= "none";  
    movieDetailsbtn.style.display= "block";
    viewLessbtn.style.display= "none";  
})




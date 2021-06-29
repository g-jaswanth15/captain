//API KEY
const API_KEY= 'ecdb4cd2';

const selectBox = document.getElementById("select-box");
const searchInput = document.querySelector("#searchInput");
const select = document.getElementById("select");
const optionText = document.querySelector("#optionText");

function getData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        console.log('Data:', data.Search);
        let MoviesList =  data.Search;
        let arr=[]
        
        if (data.Search){
            MoviesList.forEach(function(value, key) {
                console.log(key + ' : ' + value.Title)
                // var option = document.createElement("OPTION");
                txt = `
                <div class="card" onclick="window.location.href='../pages/details.html?id=${value.imdbID}'" style="width: 18rem; cursor: pointer;">
                <div class="card-body">
                    <h6  style="text-decoration:none; color:#2F4F4F"class="card-title">${value.Title}</h6>
                   
                </div>
                </div>
                `;
                arr.push(txt)
                // optionText.innerHTML=txt;
                // option.setAttribute("value", value.Title);
                // select.insertBefore(option,select.lastChild);
              })
        }else{
            txt = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-title">No search results</h6>  
            </div>
            </div>
            `;
            arr.push(txt)
            optionText.innerHTML=txt;
        }
     
          const html= arr.join(" ");
          optionText.innerHTML= html;

    })
    .catch(err=> console.log(err))
}

//fetch data from the api
select.onclick =function(e){
    e.preventDefault();

    const value=searchInput.value;
    const url="http://www.omdbapi.com/?apikey=e94d2f36&s="

    //generate the url based on the user input
    const newUrl= url + value
    console.log(newUrl)
    getData(newUrl);  
}
optionText.onmouseout=()=>{
    optionText.style.display="none"
}
selectBox.onmouseover=()=>{
    optionText.style.display="block"
}






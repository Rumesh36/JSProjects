let searchTerm = ''

document.getElementById("search").addEventListener("click",(e)=>{
    e.preventDefault()
    searchTerm = document.getElementById("input").value;
    fetchMovies() 
    
      
})


 function fetchMovies(){

const link = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=6e419398`;

fetch(link)
.then(response => {
    if(!response.ok){
        throw new Error('Network response was not fetcg')
    }
    return response.json();  
})

.then(data => {
    let moviename = document.getElementById('movie');
    let years = document.getElementById("year")
    let img = document.getElementsByTagName("img")[0]

    if (data && data.Search && data.Search.length > 0) {
        moviename.textContent = data.Search[0].Title;
        years.textContent=data.Search[0].Year
        img.src=data.Search[0].Poster
    console.log(data);
  
    }
})
.catch(err=>{
    console.log(`Error - ${err}`);
})
}
fetchMovies();


window.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("myforms").reset()
    
})


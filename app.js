import Movies from "./info.js";


let curindex=0;
function updatecarusel(index){
    const movies = Movies[index];

    const img=document.getElementsByTagName("img")[0];
    img.src=movies.img;
    img.alt=movies.name;
    img.height=400;
    img.width=400;

    let Nam=document.querySelector(".Name").
    innerHTML=movies.name;

    let Genre=document.querySelector(".Genre").
    innerHTML=movies.Genre;

    let dir=document.querySelector(".dir").
    innerHTML=movies.director;

    let link=document.querySelector("#link").
    innerHTML=`<a href="${movies.link}" target="_blank">Watch Now </a>`;


}


const next=document.querySelector(".next");
const prev=document.querySelector(".prev");

next.addEventListener("click",()=>{

if(curindex<Movies.length-1){
    curindex++;
}
else{
    curindex=0;
}
updatecarusel(curindex);
});

prev.addEventListener("click",()=>{

    if(curindex>0){
        curindex--;
    }
    else{
        curindex=Movies.length-1;
    }
    updatecarusel(curindex); 
});
updatecarusel(curindex); 


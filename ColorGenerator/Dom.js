let btn=document.querySelector("#btn");
let cpybtn=document.querySelector("#copybtn");
let div=document.querySelector("#div");
let color=""

function Colorchange(){
 
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
     color =`rgb(${r},${g},${b})`

    div.style.backgroundColor=color;
    div.textContent=color

}




btn.addEventListener("click",Colorchange)

cpybtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(color)
    alert(`color copied:${color}`);

})


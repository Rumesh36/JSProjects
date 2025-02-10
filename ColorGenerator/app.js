const div = document.querySelector("#div");
const btn = document.querySelector("#btn");
const cpy=document.querySelector("#copyBtn");
let color ='';

function ColorChange(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)

     color =`rgb(${r},${g},${b})`;

    div.style.backgroundColor=color;
    div.textContent=color;
}

function copybtn(){

    navigator.clipboard.writeText(color);
    alert(`color copied:${color}`);
}

btn.addEventListener("click",ColorChange);
cpy.addEventListener("click",copybtn)
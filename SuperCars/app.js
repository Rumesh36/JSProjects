const btn = document.querySelectorAll("button")

const historycont = document.getElementById("History-content")
const featurecont = document.getElementById("features-content")
const costcont = document.getElementById("cost-content")


historycont.classList.remove("para")

btn.forEach(btn=>{

btn.addEventListener("click",()=>{

    //for hiding 
   
    historycont.classList.add("para");
    featurecont.classList.add("para")
    costcont.classList.add("para")

    //to display
    
    if(btn.id === "History"){
        historycont.classList.remove("para");
    }
    else if(btn.id === "features"){
        featurecont.classList.remove("para");
    }
    else if(btn.id === "cost"){
        costcont.classList.remove("para")
    }

})
})

//dark mode or light mode
document.getElementById("moon").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// carouel page
const car1={
    img :"https://cdn.motor1.com/images/mgl/40KMWZ/s3/2024-lamborghini-revuelto-review.jpg",
};
const car2={
    img:"https://www.hrowen.life/wp-content/uploads/2023/03/639366-scaled.jpg",
    name:"car2"
};
const car3={
    img:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/164543/revuelto-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
    name:"car3"

};
const car4={
    img:"https://cdn.motor1.com/images/mgl/zxQBp4/s1/2024-lamborghini-revuelto-exterior.jpg",
    name:"car4"
};
const car5={
    img:"https://robbreport.com/wp-content/uploads/2023/11/Lamborghini_Revuelto2.jpg?w=1000",
    name:"car5"
}
const Images =[car1,car2,car3,car4,car5];

let curindex=0;

function updateCarousel(index){

    const imgs =Images[index];

    const img =document.getElementsByTagName("img")[0];
    img.src=imgs.img
    img.alt=imgs.name
}

document.getElementById("next").addEventListener("click",()=>{
    if(curindex<Images.length-1){
        curindex++;
    }
    else{
        curindex=0
    }
    updateCarousel(curindex);
})

document.getElementById("prev").addEventListener("click",()=>{

    if(curindex>0){
        curindex--
    }
    else{
        curindex=Images.length-1;
    }
    updateCarousel(curindex)
})
setInterval(()=>{

    curindex=(curindex+1)%Images.length;
    updateCarousel(curindex)
 
 },2000)
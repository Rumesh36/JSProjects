let t1=document.querySelector(".t1")
let start=document.querySelector(".start")
let stop=document.querySelector(".stop")
let Reset=document.querySelector(".reset")
let initialTime=document.getElementById("TimerInput")

let time =initialTime.value*60
let Timeout=null
let isRunning=false;

function UpdateTimer(){

if(time<=0){

    t1.innerHTML="Times up "
    clearInterval(Timeout)
    initialTime.style.display="block"
}
else{

    let min =Math.floor(time/60);
    let sec=Math.floor(time%60);
    time--
    t1.innerHTML=`${min} m : ${sec} s`
}

}

start.addEventListener("click",function (){
    if(!isRunning){
        isRunning=true;
    Timeout=setInterval(UpdateTimer,1000)
        initialTime.style.display="none"
    }
});

stop.addEventListener("click",function (){
    clearInterval(Timeout);
    isRunning=false

});

Reset.addEventListener("click",function(){
    clearInterval(Timeout)
    time=initialTime.value*60
    isRunning=false
    initialTime.style.display="block"
    t1.innerHTML = `${Math.floor(time / 60)} m : ${time % 60} s`;
})

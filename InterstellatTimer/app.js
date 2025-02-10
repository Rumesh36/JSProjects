const t1= document.querySelector(".t1"); 
const expdate = document.querySelector(".out");


let futureTime=new Date("2025-02-11T10:00").getTime();


function UpdateTimer(){

let curTime=new Date().getTime();
let Diff=futureTime-curTime;
let time=new Date(Diff);

if(Diff<=0){
  
 clearInterval(TimeOut);
 expdate.innerHTML="Time has Arrived....Enjoy the Show >>"
 t1.innerHTML="0:00"

}

else{

 let days=Math.floor(Diff/(1000*60*60*24));
 let hours=time.getUTCHours();
 let minutes = time.getUTCMinutes();
 let seconds = time.getUTCSeconds();
    
 t1.innerHTML= `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

}
let TimeOut=setInterval(UpdateTimer,1000);

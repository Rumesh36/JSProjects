let btn =document.querySelector(".switch-btn")
let video=document.querySelector(".video-container")

btn.addEventListener("click",function(){

    if(!btn.classList.contains("slide")){
        btn.classList.add('slide')
        video.play()
    }
    else{
        btn.classList.remove("slide")
        video.pause()
    }

})
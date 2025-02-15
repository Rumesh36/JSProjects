const btn =document.querySelectorAll(".toggle")
const ans=document.querySelectorAll(".ans");


btn.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{

        ans[index].classList.toggle("show");

        if(ans[index].classList.contains("show")){
          
            ans[index].style.display="block"
        }
        else{

             ans[index].style.display="none"
        }
    });
});




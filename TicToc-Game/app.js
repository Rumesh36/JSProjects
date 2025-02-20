const btn = document.querySelectorAll(".cell")
const resetbtn = document.getElementById("reset")
const h4 =document.querySelector("h4")


let curPlayer = "X"
let gameOver=false;
const cells = Array.from(btn);

btn.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(cell.textContent || gameOver) return;

        cell.textContent=curPlayer

        if(Winner()){
            alert("Congratulations player...")
            h4.textContent="game over please Restart to play again"
            gameOver=true;
            return;
        }

        curPlayer=curPlayer==="X"?"O":"X"
    });
});


function Winner(){
    let combos=[
        [0,1,2],//row-1
        [3,4,5], //row-2
        [6,7,8], //row-3
        [0,3,6], //col-1
        [1,4,7], // col-2
        [2,5,8], //col-3
        [0,4,8], //dig-1
        [2,4,6] // dig-2
    ]
    for(const [a,b,c] of combos){
        if(btn[a].textContent &&
            btn[a].textContent === btn[b].textContent &&
            btn[a].textContent === btn[c].textContent
        ) {
            gameOver=true
            return true;
        }
    }
    return false
}
resetbtn.addEventListener("click", () => {
    btn.forEach(cell => cell.textContent = ""); 
    h4.textContent=""
    curPlayer = "X"; 
    gameOver = false;
});

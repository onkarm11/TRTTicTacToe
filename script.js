console.log("Welcome to tic tac toe")

let music = new Audio("music.mp3")
let audioTurn =new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn ="X"

// Function  to change the turn

const changeTurn =()=>
{
    return turn === "X"?"0": "X"
}

// Function to check win

const checkWin = ()=>{

}

// Game Logic
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click' ,()=>{
        if(boxtext.innerText === ' '){
        
            boxtext.innerText =turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }

    })

})

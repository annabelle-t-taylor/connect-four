//note to self: refactor the e.compasedPath() into something that isn't quite so incidental

//fall to lowest point possible




const boardEl = document.querySelector('.board')
const resetEl = document.querySelector('.reset')
const cells = document.querySelectorAll('.cell')
const nextPlayer = document.querySelector('.nextPlayer')
let currentPlayer = 1

// let boardState = [[],[],[],[],[],[]]

// for (let i = 0; i < 7; i++){
//     for (let j = 0; j < 6; j++){
//         boardState[j].push(" ")
//     }
// }

boardEl.addEventListener('click', function(e){
    if (e.composedPath().length === 7){
        console.log(e)
        if (currentPlayer === 1){
            e.target.style.backgroundColor = 'red'
            e.target.style.pointerEvents = "none"
            nextPlayer.innerText = "Black"
            currentPlayer = 2
        }
        else {
            e.target.style.backgroundColor = 'black'
            e.target.style.pointerEvents = "none"
            nextPlayer.innerText = "Red"
            currentPlayer = 1
        }
    }
})

resetEl.addEventListener('click', function(e){
    e.preventDefault()
    currentPlayer = 1
    nextPlayer.innerText = "Red"

     for (i = 0; i < cells.length; i++){
         cells[i].style.backgroundColor = "white"
         cells[i].style.pointerEvents = "auto"
     }
})
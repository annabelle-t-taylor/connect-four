const boardEl = document.querySelector('.board')
const resetEl = document.querySelector('.reset')
const cells = document.querySelectorAll('.cell')
const nextPlayer = document.querySelector('.nextPlayer')
let currentPlayer = 1

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 7; j++){
        const row = "row" + (i+1)
        const column = "col" + (j+1)
        const cell = document.createElement('div')
        cell.classList.add("cell",row,column)
        boardEl.appendChild(cell)
    }
}

boardEl.addEventListener('click', function(e){
    if (e.composedPath().length === 7){
        console.log(e.target.classList)
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
const boardEl = document.querySelector('.board')
const resetEl = document.querySelector('.reset')
let currentPlayer = 1
let nextPlayer = document.querySelector('.nextPlayer')

for (let i = 0; i < 7; i++){
    const column = document.createElement('div')
    column.classList.add(i)
    boardEl.append(column)
    for (let j = 0; j < 6; j++){
        const cell = document.createElement('div')
        cell.classList.add('cell',i,j)
        column.append(cell)
    }
}

boardEl.addEventListener('click', function(evt){
    let columnToPutPiece = evt.composedPath()[1].classList.value
    let rowToPutPiece = evt.composedPath()[1].children.length -1
    
    while (rowToPutPiece >= 0){
        if (this.children[columnToPutPiece].children[rowToPutPiece].style.backgroundColor === 'red' ||
            this.children[columnToPutPiece].children[rowToPutPiece].style.backgroundColor === 'black'){
            rowToPutPiece--
        }
        else{
            if (currentPlayer === 1){
                this.children[columnToPutPiece].children[rowToPutPiece].style.backgroundColor = 'red'
                nextPlayer.innerText = "Black"
                currentPlayer = 2
            }
            else{
                this.children[columnToPutPiece].children[rowToPutPiece].style.backgroundColor = 'black'
                nextPlayer.innerText = "Red"
                currentPlayer = 1
            }
            break
        }
    }
})

const cells = document.querySelectorAll('.cell')
resetEl.addEventListener('click', function(e){
    console.log("Reset!")
    e.preventDefault()
    currentPlayer = 1
    nextPlayer.innerText = "Red"

     for (i = 0; i < cells.length; i++){
         cells[i].style.backgroundColor = "white"
         cells[i].style.pointerEvents = "auto"
     }
})

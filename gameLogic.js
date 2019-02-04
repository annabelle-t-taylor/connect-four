class Board{
    constructor(){
        this.board = [[],[],[],[],[],[]]
    }

    generateBoard(){
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 6; j++){
                this.board[j].push(" ")
            }
        }
        return this.board
    }

    playPiece(column){
        //let row = this.board.length;
        let row = 0
        while (row < this.board.length){
            //check if the spot at board[row][column] is available
            if (this.board[row][column] !== " ")
                row--
            else
                this.board[row][column] = "X"
        }
        return this.board
    }
}

const game = new Board()
// game.generateBoard()
// console.log(game)
// game.playPiece(2)
// console.log(game)
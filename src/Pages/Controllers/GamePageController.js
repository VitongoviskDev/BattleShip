import { getPlayerGameboard } from "../../Components/Controllers/GameBoardController";

const HideGamePage = () =>{
    document.querySelector('.root').classList.add('leave');
}

function FillBoards(nickname){
    const playerBoard = document.getElementById(`player-board`);
    const playerGameBoard = getPlayerGameboard();
    FillBoard(playerBoard, playerGameBoard);


    const machineBoard = document.getElementById(`machine-board`);
    console.log(machineBoard);
}
const FillBoard = (board, gameBoard) =>{
    let cells = gameBoard.cells;
    for (let x = 0; x < gameBoard.boardSize; x++) {
        for (let y = 0; y < gameBoard.boardSize; y++) {
            let currentCell = cells[x][y];
            if(currentCell.id > -1){
                console.log(board.querySelectorAll('.row')[x].id, board.querySelectorAll('.row')[x].childNodes[y].id);
                console.log(board.querySelectorAll('.row')[x].childNodes[y].classList);
                board.querySelectorAll('.row')[x].childNodes[y].classList.add('ship')
            }
        }
    }
}

export {HideGamePage, FillBoards};
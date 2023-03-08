import { getMachineGameboard, getPlayerGameboard, setMachineGameboard } from "../../Components/Controllers/GameBoardController";
import Player from "../../factory/Player";
import { OpenForm, OpenPage } from "./PagesController";
import ResignForm from '../ResignForm';

const HideGamePage = () =>{
    document.querySelector('.root').classList.add('leave');
}
function HandleResignButtonClicked(){
    OpenForm(ResignForm().id);
}
function FillBoards(nickname){
    const playerBoard = document.getElementById(`player-board`);
    const playerGameBoard = getPlayerGameboard();
    FillBoard(playerBoard, playerGameBoard);

    const machine = Player();
    const machineGameboard = machine.GenerateBoard();
    setMachineGameboard(machineGameboard);
}
const FillBoard = (board, gameBoard) =>{
    let cells = gameBoard.cells;
    for (let x = 0; x < gameBoard.boardSize; x++) {
        for (let y = 0; y < gameBoard.boardSize; y++) {
            let currentCell = cells[x][y];
            if(currentCell.id > -1){
                board.querySelectorAll('.row')[x].childNodes[y].classList.add('ship');
            }
        }
    }
}

export {HideGamePage, FillBoards, HandleResignButtonClicked};
import './GameBoard_GUI.css';
import { HandleBoardCellClicked,  HandleBoardCellDoubleClick, HandleBoardCellRightClick, HandleBoardCellMouseover, HandleBoardCellMouseout} from './Controllers/GameBoardController';
const Board = (player) =>{

    const board = document.createElement('div');
    board.classList.add('board');
    board.id = player ? 'player-board' : 'machine-board';
    
    for(let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = i;
        for(let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = j;
            cell.addEventListener('click', () => {
                HandleBoardCellClicked(cell);
            });
            cell.addEventListener('dblclick', () => {
                HandleBoardCellDoubleClick(cell);
            });
            cell.addEventListener('contextmenu', () => {
                event.preventDefault();
                HandleBoardCellRightClick(cell);
            });
            cell.addEventListener('mouseover', () => {
                HandleBoardCellMouseover(cell);
            });
            cell.addEventListener('mouseout', () => {
                HandleBoardCellMouseout();
            });
            row.appendChild(cell);   
        }
        board.appendChild(row);
    }
    
    return board;
}

export default Board;
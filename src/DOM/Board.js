import './Board.css';

const Board = (player) =>{

    const board = document.createElement('div');
    board.classList.add('board');
    
    for(let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = i;
        for(let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = j;
            row.appendChild(cell);   
        }
        board.appendChild(row);
    }
    
    return board;
}

export default Board;
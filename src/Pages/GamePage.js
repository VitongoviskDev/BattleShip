import { doc } from 'prettier';
import Board from '../Components/GameBoard_GUI';
import { FillBoards } from './Controllers/GamePageController';
import './Styles/GamePage.css';
const GamePage = (nickname) =>{
    const container = document.createElement('div');
    container.classList.add('root');
    container.classList.add('game-container');
    container.id = 'Game';

    container.innerHTML = 
    `<div class="boards-container">
        <div class="board-container">
            <div class="title-container">
                <p class="nickname">${nickname}</p>
            </div>
        </div>
        <p>VS</p>
        <div class="board-container">
            <div class="title-container">
                <p class="nickname">MACHINE</p>
            </div>
        </div>
    </div>
    <div class="buttons-container">
        <button>Resign</button>
    </div>`;

    const boardContainers = container.querySelectorAll('.boards-container .board-container');
    boardContainers[0].appendChild(Board(true));
    boardContainers[1].appendChild(Board(false));

    
    return container;
}

export default GamePage;
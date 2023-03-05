import './Styles/SetupBoardPage.css';

import Board from '../Components/GameBoard_GUI';

import widthIcon from '../Assets/width.png'
import leftClickIcon from '../Assets/left-click.png'
import rightClickIcon from '../Assets/right-click.png'
import { HandleSetupPlayButtonClicked, HandleSetupPiecesButtonClicked } from './Controllers/SetupPageController';
import { setPlayerGameBoard } from '../Components/Controllers/GameBoardController';
import Gameboard from '../factory/Gameboard';

const SetupBoard = (nickname) => {
    const container = document.createElement('div');
    container.classList.add('page-root');
    container.classList.add('setup-board-container');
    container.id = 'SetupBoard';
    container.innerHTML = 
    `<div class="nickname-container">
            <p>${nickname}</p>
            <p>Prepare your fleet for combat</p>
        </div>
        <div class="bottom-container">
            <div class="pieces-container">
                <div class="hints-container">
                    <div class="hint">
                        <div class="image">
                            <img src='${leftClickIcon}' alt='left click icon'>
                        </div>
                        <p>click to select the ship</p>
                    </div>
                </div>
            </div>
            <div class="board-container">
                <div class="hints-container">
                    <div class="hint">
                        <div class="image">
                            <img src='${rightClickIcon}' alt='right click icon'>
                        </div>
                        <p>right click to rotate</p>
                    </div>
                    <div class="hint">
                        <div class="image">
                            <img src='${leftClickIcon}' alt='left click icon'>
                        </div>
                        <p>click to place</p>
                    </div>
                    <div class="hint">
                        <div class="image">
                            <p>2x</p>
                            <img src='${leftClickIcon}' alt='left click icon'>
                        </div>
                        <p>double click to remove</p>
                    </div>
                </div>
            </div>
        </div>`;

    for (let i = 0; i < 5; i++) {
        const shipButton = document.createElement('div');
        shipButton.classList.add('ship-button');

        const button = document.createElement('button');
        button.classList.add('active');
        
        button.id = `ship-button-${i+1}`;
        button.textContent = `SHIP ${i + 1}`;
        button.addEventListener('click', () =>{
            HandleSetupPiecesButtonClicked(button, i + 1);
        })

        const img = document.createElement('img');

        button.appendChild(img);

        const sizeContainer = document.createElement('div');
        sizeContainer.classList.add('size-container')
    
        const sizeP = document.createElement('p');
        sizeP.textContent = i + 1;
        const sizeImg = document.createElement('img');
        sizeImg.src = widthIcon;

        sizeContainer.appendChild(sizeP);
        sizeContainer.appendChild(sizeImg);

        shipButton.appendChild(button);
        shipButton.appendChild(sizeContainer);

        container.querySelector('.pieces-container').appendChild(shipButton);
    }
    
    let button = document.getElementById('ship-button-1')
    if(button){
        button.classList.add('selected');
    }

    setPlayerGameBoard(Gameboard());
    container.querySelector('.board-container').appendChild(Board())
    container.querySelector('.board-container .board').classList.add("setup");
    
    const playButtonContainer = document.createElement('div');
    playButtonContainer.classList.add("play-button-container");

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click',()=>{
        HandleSetupPlayButtonClicked(playButton);
    })

    playButtonContainer.appendChild(playButton);

    container.appendChild(playButtonContainer);

    

    return container;
}

export default SetupBoard;
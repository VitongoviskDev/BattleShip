import { doc } from "prettier";
import Board from "../Board";
import './Setup.css'

const Setup = (nickname) =>{
    let counter = 0
    const container = document.createElement('div');
    container.classList.add('setup-container')
    container.innerHTML = 
    `
    <div class="nickname-container">
            <p>${nickname}</p>
            <p>Prepare your fleet for combat</p>
        </div>
        <div class="bottom-container">
            <div class="pieces-container">
                
            </div>
            <div class="board-container">
                <div class="board-hints">
                    <p>Click to place</p>
                    <p>Double click to rotate</p>
                </div>
            </div>
        </div>
    `
    for (let i = 5; i > 0; i--) {
        const shipButton = document.createElement('div');
        shipButton.classList.add('ship-button');

        const button = document.createElement('button');
        button.id = 'ship-'+i;
        if(i == 5){
            button.classList.add('selected');
        }
        button.textContent = 'ship-'+i;

        button.addEventListener('click', () =>{
            let selected = document.querySelector('.ship-button button.selected');
            if(selected){
                selected.classList.remove('selected');
            }

            button.classList.add('selected');
        })

        const img = document.createElement('img');

        button.appendChild(img);

        const p = document.createElement('p');
        p.textContent = counter + "x";

        shipButton.appendChild(button);
        shipButton.appendChild(p);

        container.querySelector('.pieces-container').appendChild(shipButton);
    }

    container.querySelector('.board-container').appendChild(Board())

    const playButtonContainer = document.createElement('div');
    playButtonContainer.classList.add("play-button-container");

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';

    playButtonContainer.appendChild(playButton);

    container.appendChild(playButtonContainer);

    return container;

    /* <div class="ship-button">
                    <button id="ship-5"><img src="" alt=""></button>
                    <p>${counter}x</p>
                </div>
                <div class="ship-button">
                    <button id="ship-4"><img src="" alt=""></button>
                    <p>${counter}x</p>
                </div>
                <div class="ship-button">
                    <button id="ship-3"><img src="" alt=""></button>
                    <p>${counter}x</p>
                </div>
                <div class="ship-button">
                    <button id="ship-2"><img src="" alt=""></button>
                    <p>${counter}x</p>
                </div>
                <div class="ship-button">
                    <button id="ship-1"><img src="" alt=""></button>
                    <p>${counter}x</p>
                </div> */
}

export default Setup;
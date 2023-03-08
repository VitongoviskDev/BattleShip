import { HandleMainMenuButtonClick } from './Controllers/GameOverPageController';
import './Styles/GameOverPage.css'
const GameOverPage = (winner) => {
    const container = document.createElement('div');
    container.classList.add('root');
    container.classList.add('GameOver-container');
    container.id = 'GameOver';

    const center = document.createElement('div');
    center.classList.add('center');

    const text1 = document.createElement('p');
    text1.textContent = 'The winner is';

    const winnerP = document.createElement('p');
    winnerP.textContent = winner;
    winnerP.classList.add(winner == 'machine' ? 'lose' : 'win');

    center.appendChild(text1);
    center.appendChild(winnerP);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('button-container');

    const button = document.createElement('button');
    button.textContent = 'Main menu';
    button.addEventListener('click', ()=>{
        HandleMainMenuButtonClick();
    })

    buttonContainer.appendChild(button);

    container.appendChild(center);
    container.appendChild(buttonContainer);

    return container;
}

export default GameOverPage;
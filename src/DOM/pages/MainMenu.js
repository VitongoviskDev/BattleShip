import { MainMenuPlay } from '../../uiManager';
import './MainMenu.css';

const MainMenu = () =>{
    //.container
    const container = document.createElement('div');
    container.classList.add('container');

    //.container > .title-container
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    //.container > .title-container > h1
    const title = document.createElement('h1');
    title.textContent = 'BattleShip';
    //container > .title-container APPENDING
    titleContainer.appendChild(title);

    //container > .signin-container
    const signinContainer = document.createElement('div');
    signinContainer.classList.add("signin-container");
    //container > .signin-container > input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Username';
    input.addEventListener('change', () =>{
        input.classList.remove('wrong');
    })
    //container > .signin-container > button
    const button = document.createElement('button');
    button.textContent = 'Play'
    button.addEventListener('click', () =>{
        if(input.value == ''){
            input.classList.add('wrong');
            return;
        }else{
            container.classList.add('leave');
            setTimeout(() => {MainMenuPlay(input.value)}, 300);
        }
    })
    //container > .signin-container APPENDING
    signinContainer.appendChild(input);
    signinContainer.appendChild(button);

    //container APPENDING
    container.appendChild(titleContainer);
    container.appendChild(signinContainer);


    return container;
}

export default MainMenu;
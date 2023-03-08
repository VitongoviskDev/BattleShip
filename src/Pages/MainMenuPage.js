import { HandlePlayButtonClick, HandleInputChange } from './Controllers/MainMenuPageController';
import './Styles/MainMenuPage.css';

const MainMenu = () =>{
    //.container
    const container = document.createElement('div');
    container.classList.add('page-root');
    container.classList.add('main-menu-container');
    container.id = 'MainMenu';

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
        HandleInputChange();
    })
    //container > .signin-container > button
    const button = document.createElement('button');
    button.textContent = 'Play'
    button.addEventListener("keydown", logKey);

    function logKey(e) {
    log.textContent += ` ${e.code}`;
    }
    button.addEventListener('click', () =>{
        HandlePlayButtonClick();
        /* if(input.value == ''){
            input.classList.add('wrong');
            return;
        }else{
            container.classList.add('leave');
            setTimeout(() => {MainMenuPlay(input.value)}, 300);
        } */
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
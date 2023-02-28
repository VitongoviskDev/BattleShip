import MainMenu from "./DOM/pages/MainMenu"
import Setup from "./DOM/pages/Setup";

function MainMenuPlay(nickname){
    document.body.removeChild(document.body.querySelector(".container"));
    document.body.appendChild(Setup(nickname));
}

export {MainMenuPlay}
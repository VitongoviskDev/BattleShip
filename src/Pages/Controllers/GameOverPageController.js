import MainMenu from "../MainMenuPage"
import { OpenPage } from "./PagesController"
import { ResetGame } from "./ResignFormPageController";

function HandleMainMenuButtonClick(){
    ResetGame();
    OpenPage(MainMenu().id);
}

export {HandleMainMenuButtonClick}
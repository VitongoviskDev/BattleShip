import GamePage from "../GamePage";
import MainMenu from "../MainMenuPage";
import SetupBoard from "../SetupBoardPage";
import { FillBoards } from "./GamePageController";

function OpenPage(page){

    let currentPageContainerId = null;

    if(localStorage.currentPageContainerId){
        currentPageContainerId = GetCurrentPage();
    }

    const currentPage = document.getElementById(currentPageContainerId);
    

    let nickname = JSON.parse(localStorage.nickname);
    setTimeout(() =>{
        if(currentPage){
            document.body.removeChild(currentPage);
        }

        switch(page){
            case 'MainMenu':
                document.body.appendChild(MainMenu());
                SetCurrentPage(MainMenu().id);
                break;
            case 'SetupBoard':
                document.body.appendChild(SetupBoard(nickname));
                SetCurrentPage(SetupBoard().id);
                break;
            case 'Game':
                document.body.appendChild(GamePage(nickname));
                FillBoards(nickname);
                SetCurrentPage(GamePage().id);
                break;
            case 'Gameover':
                break;
        }
    }, 300);

}
function GetCurrentPage(){
    return JSON.parse(localStorage.currentPageContainerId)
};


const SetCurrentPage = (page) => localStorage.currentPageContainerId = JSON.stringify(page);


export {OpenPage, GetCurrentPage}; 
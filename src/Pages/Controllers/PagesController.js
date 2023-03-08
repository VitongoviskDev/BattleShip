import { setMachineGameboard } from "../../Components/Controllers/GameBoardController";
import Player from "../../factory/Player";
import GameOverPage from "../GameoverPage";
import GamePage from "../GamePage";
import MainMenu from "../MainMenuPage";
import ResignForm from "../ResignForm";
import SetupBoard from "../SetupBoardPage";
import { FillBoards } from "./GamePageController";

function OpenPage(page){

    let currentPageContainerId = null;

    if(sessionStorage.currentPageContainerId){
        currentPageContainerId = GetCurrentPage();
    }

    const currentPage = document.getElementById(currentPageContainerId);
    

    let nickname = JSON.parse(sessionStorage.nickname);
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
            case 'GameOver':
                let winner = JSON.parse(sessionStorage.winner);
                document.body.appendChild(GameOverPage(winner));
                SetCurrentPage(GameOverPage().id);
                break;
        }
    }, 300); 

}
function OpenForm(form){
    switch(form){
        case 'Resign':
            document.body.appendChild(ResignForm());
            SetCurrentForm(ResignForm().id)
            break;
    }
}
function CloseForm(){
    const formId = getCurrentForm();
    const form = document.getElementById(formId);
    if(form){
        document.body.removeChild(form);
    }

}
function GetCurrentPage(){
    return JSON.parse(sessionStorage.currentPageContainerId)
};


const SetCurrentPage = (page) => sessionStorage.currentPageContainerId = JSON.stringify(page);
const SetCurrentForm = (form) => sessionStorage.currentFormId = JSON.stringify(form);
const getCurrentForm = () => JSON.parse(sessionStorage.currentFormId);


export {OpenPage, GetCurrentPage, OpenForm, CloseForm}; 
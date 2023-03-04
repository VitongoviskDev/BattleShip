import MainMenu from "../MainMenuPage";
import SetupBoard from "../SetupBoardPage";

function OpenPage(page){

    let currentPageContainerId = null;

    if(localStorage.currentPageContainerId){
        currentPageContainerId = GetCurrentPage();
    }

    const currentPage = document.getElementById(currentPageContainerId);
    
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
                let nickname = JSON.parse(localStorage.nickname);
                document.body.appendChild(SetupBoard(nickname));
                SetCurrentPage(SetupBoard().id);
                break;
            case 'Game':
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
import { getGameboard } from '../../Components/Controllers/GameBoardController';
import Ship from '../../factory/Ship';
import GamePage from '../GamePage';
import { OpenPage } from './PagesController';

const HideSetupPage = (size) =>{
    document.querySelector('.root').classList.add('leave');
}
function HandleSetupPiecesButtonClicked(button, size){
    if(button.classList[0] == 'active'){
        let selected = document.querySelector('.ship-button button.selected');
        if(selected){
            selected.classList.remove('selected');
        }  

        let ship = Ship(size -1, size);
        sessionStorage.selectedShip = JSON.stringify(ship);

        button.classList.add('selected');
    }
}
function HandleSetupPlayButtonClicked(button){
    if(button.classList[0] == 'active'){
        document.querySelector('.page-root').classList.add('leave');
        OpenPage(GamePage().id);
    }
}
function enablePlayButton(){
    const button = document.querySelector('.play-button-container button').classList.add('active');
}
function disablePlayButton(){
    const button = document.querySelector('.play-button-container button').classList.remove('active');
}
function disableShipButton(ship){
    const button = document.querySelector(`#ship-button-${ship.length}`);
    button.classList.remove('active');


    const activeButton = document.querySelectorAll('.ship-button button.active');
    if(activeButton.length > 0){
        let id = `${activeButton[0].id}`;
        let size = id.split('-')[2];
        HandleSetupPiecesButtonClicked(activeButton[0], size);
    }
    
}
function enableShipButton(ship){
    const button = document.querySelector(`#ship-button-${ship.length}`);
    button.classList.add('active');
}
export {HideSetupPage, HandleSetupPiecesButtonClicked, HandleSetupPlayButtonClicked, enablePlayButton, disablePlayButton, disableShipButton ,enableShipButton};
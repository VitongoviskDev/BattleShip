import Ship from '../../factory/Ship';

const HideSetupPage = (size) =>{
    document.querySelector('.root').classList.add('leave');
}
function HandleSetupPiecesButtonClicked(size){
    const ships = JSON.parse(localStorage.playerBoard).ships;
    let id = ships.length > 0 ? ships[ships.length - 1].id + 1 : 0;

    
    let ship = Ship(id, size);
    localStorage.selectedShip = JSON.stringify(ship);
}
export {HideSetupPage, HandleSetupPiecesButtonClicked};
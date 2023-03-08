import Ship from "../../factory/Ship";
import GameBoard from "../../factory/Gameboard";
import { GetCurrentPage, OpenPage } from "../../Pages/Controllers/PagesController";
import { disablePlayButton, disableShipButton, enablePlayButton, enableShipButton } from "../../Pages/Controllers/SetupPageController";
import Player from "../../factory/Player";
import { HandlePlayButtonClick } from "../../Pages/Controllers/MainMenuPageController";
import GameOverPage from '../../Pages/GameoverPage';


function HandleBoardCellClicked(cell){
    const currentPage = GetCurrentPage();
    switch(currentPage){
        case 'SetupBoard':
            addShip(cell);
            break;
        case 'Game':
            attackCell(cell);
            break;
        case 'Gameover':
            break;
    }
}
function HandleBoardCellDoubleClick(cell){
    const currentPage = GetCurrentPage();
    switch(currentPage){
        case 'SetupBoard':    
            removeShip(cell);
            break;
        case 'Game':
            break;
        case 'Gameover':
            break;
    }
}
function HandleBoardCellRightClick(cell){
    console.log(`${cell.id} right clicked`);

    const selectedShip = getSelectedShip();
    selectedShip.direction = selectedShip.direction == 'H' ? 'V' : 'H';

    setSelectedShip(selectedShip);

    HandleBoardCellMouseout();
    HandleBoardCellMouseover(cell);
}
function HandleBoardCellMouseover(cell){
    const currentPage = GetCurrentPage();
    switch(currentPage){
        case 'SetupBoard':    
            setupCellMouseOver(cell);
            break;
        case 'Game':
            break;
        case 'Gameover':
            break;
    }
}
function HandleBoardCellMouseout(){
    const currentPage = GetCurrentPage();
    switch(currentPage){
        case 'SetupBoard':    
            setupCellMouseOut();
            break;
        case 'Game':
            break;
        case 'Gameover':
            break;
    }
}


const addShip = () => {
    const gameBoard = getPlayerGameboard();
    const selectedShip = getSelectedShip();
    const allHoverCorrect = document.querySelectorAll(".cell.hover-correct");
    if(allHoverCorrect.length > 0){
        for (let i = 0; i < allHoverCorrect.length; i++) {
            allHoverCorrect[i].classList.remove('hover-correct');
            allHoverCorrect[i].classList.add('ship');
            
            let x = allHoverCorrect[i].parentNode.id;
            let y = allHoverCorrect[i].id;
            gameBoard.cells[x][y] = selectedShip;
        }
        disableShipButton(selectedShip);

        gameBoard.ships.push(selectedShip);
        if(gameBoard.ships.length == 5){
            enablePlayButton();
            console.log(gameBoard.boardString());
        }
        setPlayerGameBoard(gameBoard);
    }
}
const removeShip = (cell) => {
    console.log(`${cell.id} double clicked`);
    const gameBoard = getPlayerGameboard();

    let x = cell.parentNode.id;
    let y = cell.id;

    const ship = gameBoard.cells[x][y];
    let id = null || ship.id;

    if(id != null){
        const filledCells = gameBoard.removeShip(x, y);
        
        const rows = document.querySelectorAll(".row");
        for (let i = 0; i < filledCells.length; i++) {
            x = filledCells[i].x;
            y = filledCells[i].y;
            rows[x].childNodes[y].classList.remove('ship');
        }
        
        setGameboard(gameBoard);
        HandleBoardCellMouseout();
        HandleBoardCellMouseover(cell)
        enableShipButton(ship);
        disablePlayButton();
    }
}
const setupCellMouseOver = (cell) =>{
    let gameBoard = getPlayerGameboard();

    if(gameBoard.ships.length < 5){
        const rows = document.querySelectorAll(".row");
        const selectedShip = getSelectedShip();
        let x = cell.parentNode.id;
        let y = cell.id;
        let fit = gameBoard.fit(selectedShip, x, y);
        for (let i = 0; i < fit.length; i++) {
            x = fit[i].x;
            y = fit[i].y;
            rows[x].childNodes[y].classList.add(fit.length >= selectedShip.length ? 'hover-correct' : 'hover-wrong');
        }
    }
    
}
const setupCellMouseOut = () =>{
    let all = document.querySelectorAll(".cell.hover-correct");
    for (let i = 0; i < all.length; i++) {
        all[i].classList.remove('hover-correct');
    }

    all = document.querySelectorAll(".cell.hover-wrong");
    for (let i = 0; i < all.length; i++) {
        all[i].classList.remove('hover-wrong');
    }
}

const attackCell = (cell) => {
    const machineGameBoard = getMachineGameboard();
    const playerGameBoard = getPlayerGameboard();

    const x = cell.parentNode.id;
    const y = cell.id;
    
    let gameBoard = cell.parentNode.parentNode.id == 'player-board' ? playerGameBoard : machineGameBoard
    let ships = gameBoard.receiveAttack(x, y);
    if(ships != false){
        gameBoard.ships = ships;
        cell.classList.remove("ship");
        cell.classList.add("attacked");

        if(gameBoard.isAllShipsShunk()){
            let nickname = JSON.parse(localStorage.nickname);
            localStorage.winner = JSON.stringify(cell.parentNode.parentNode.id == 'player-board' ?  'machine' : nickname);
            OpenPage(GameOverPage().id)
        }
        if(cell.parentNode.parentNode.id == 'player-board'){
            setPlayerGameBoard(gameBoard);
        }else{
            setMachineGameboard(gameBoard);
        }
        
    }else{
        cell.classList.add("missed");
    }   

    if(cell.parentNode.parentNode.id == 'machine-board'){
        let machine = Player();
        let play = machine.RandomPlay(playerGameBoard.cells);
        let machineCell = document.querySelectorAll('.row')[play.x].childNodes[play.y];
        console.log(machineCell);
        attackCell(machineCell);
    }
}


function setPlayerGameBoard(board){
    localStorage.playerGameBoard = JSON.stringify(board);
}
function getPlayerGameboard(){
    let boardData = JSON.parse(localStorage.playerGameBoard);
    return GameBoard(boardData.cells, boardData.boardSize, boardData.ships);
}
const setMachineGameboard = (board) =>{
    localStorage.machineGameboard = JSON.stringify(board);
}
const getMachineGameboard = () =>{
    let boardData = JSON.parse(localStorage.machineGameboard);
    return GameBoard(boardData.cells, boardData.boardSize, boardData.ships);
}

const getSelectedShip = () =>{
    let shipData = JSON.parse(localStorage.selectedShip);
    return Ship(shipData.id, shipData.length, shipData.direction, shipData.timesHited, shipData.shunk);
}
const setSelectedShip = (ship) =>{
    localStorage.selectedShip = JSON.stringify(ship);
}


export {HandleBoardCellClicked, HandleBoardCellDoubleClick, HandleBoardCellRightClick, HandleBoardCellMouseover, HandleBoardCellMouseout, getPlayerGameboard, setPlayerGameBoard, getMachineGameboard, setMachineGameboard}
import { setMachineGameboard } from '../Components/Controllers/GameBoardController';
import Gameboard from './Gameboard';
import Ship from './Ship';

const Player = () =>{
    let wins = 0;

    const RandomPlay = (cells) =>{
        while(true){
            let x = Math.round(Math.random() * 9);
            let y = Math.round(Math.random() * 9);
            if(cells[x][y] == 'E' || cells[x][y].id > -1){
                return {x: x, y: y};
            }
        }
    }
    const GenerateBoard = () =>{
        let gameBoard = Gameboard();

        for (let i = 0; i < 5; i++) {
            let dir = Math.random() >= .5 ? 'H' : 'V';
            let ship = Ship(i, i+ 1, dir);
            let play = null;
            while(true){
                play = RandomPlay(gameBoard.cells);
                if(gameBoard.fit(ship, play.x, play.y).length == ship.length){
                    gameBoard.placeShip(ship, play.x, play.y);
                    break;
                }
            }
        }
        console.log(gameBoard.boardString());

        return gameBoard;
    }

    return {wins, RandomPlay, GenerateBoard}
}

export default Player;
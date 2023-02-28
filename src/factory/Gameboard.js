const Gameboard = () =>{
    const boardSize = 10;
    let ships = []
    //E = Empty; ship[object] = ship; M = Missed attack; A = Attacked
    const cells = generateCells();

    const getCells = () => cells;
    function generateCells(){
        let _cells = [];
        for (let i = 0; i < boardSize; i++) {
            _cells.push([]);
        }
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                _cells[i].push('E');
            }
        }
        return _cells;
    }
    const placeShip = (ship, x, y, direction) =>{
        if(fit(ship, x, y, direction)){
            if(direction == 'H'){
                for (let i = y; i < y + ship.size(); i++) {
                    cells[x][i] = ship;
                }
            }else
            {
                for (let i = x; i < x + ship.size(); i++) {
                    cells[i][y] = ship;
                }
            }
            ships.push(ship);
            return true;
        }else{
            return false;
        }
    }
    function fit (ship, x, y, direction){
        if(x < 0 || y < 0){
            return false;
        }
        if(cells[x][y] == 'E'){
            if(direction == 'H'){
                if(y + ship.size() > boardSize){
                    return false;
                }
                for (let i = y; i < y + ship.size(); i++) {
                    if(cells[x][i] != 'E'){
                        return false;
                    }
                }
            }else{
                if(x + ship.size() > boardSize){
                    return false;
                }
                for (let i = x; i < x + ship.size(); i++) {
                    if(cells[i][y] != 'E'){
                        return false;
                    }
                }
            }
        }
        else {
            return false
        };

        return true;
    }
    const boardString = () =>{
        let string = '';
        for (let i = 0; i < boardSize; i++) {
            string += '\n'
            for (let j = 0; j < boardSize; j++) {
                let curCell = cells[i][j];
                if(curCell != 'M' && curCell != 'A' && curCell != 'E'){
                    curCell = curCell.getId();
                }
                string += j == 0 ? `${curCell}` : ` ${curCell}`;
            }
        }
        return string;
    }
    function isAllShipsShunk (){
        for (let i = 0; i < ships.length; i++) {
            if(!ships[i].isShunk()){
                console.log("here");
                return false; 
            }
        }
        return true;
    }
    const receiveAttack = (x, y) => {
        if(x > boardSize || y > boardSize || cells[x][y] == 'M' || cells[x][y] == 'A') return null;
        if(cells[x][y] == 'E'){
            cells[x][y] = 'M'
        }else{
            cells[x][y].hit();
            cells[x][y] = 'A'
        }
    }
    return {getCells, generateCells, placeShip, receiveAttack, isAllShipsShunk, boardString}
}

export default Gameboard;
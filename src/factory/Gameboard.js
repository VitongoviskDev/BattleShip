const Gameboard = (_cells, _boardSize, _ships) =>{
    const boardSize = _boardSize || 10;
    let ships = _ships || [];
    //E = Empty; ship[object] = ship; M = Missed attack; A = Attacked
    const cells = _cells || generateCells();

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
    const placeShip = (ship, x, y) =>{
        if(fit(ship, x, y)){
            if(ship.direction == 'H'){
                for (let i = y; i < parseInt(y) + ship.length; i++) {
                    cells[x][i] = ship;
                }
            }else
            {
                for (let i = x; i < parseInt(x) + ship.length; i++) {
                    cells[i][y] = ship;
                }
            }
            ships.push(ship);
            return true;
        }else{
            return false;
        }
    }
    function removeShip(x, y){
        let cell = cells[x][y];
        let filledCells = [];
        console.log(cell);
        if(cell.id > -1){
            const ship = cell;
            let dir = ship.direction == 'H' ? y : x;
            for (let i = 0; i < ship.length; i++) {
                console.log(i);
                if(ship.direction == 'H'){
                    cells[x][parseInt(y) +i] = 'E';
                    filledCells.push({x:x, y:parseInt(y) +i})
                }else{
                    cells[parseInt(x) + i][y] = 'E';
                    filledCells.push({x:parseInt(x) + i, y:y})
                }
            }
        }
        return filledCells;
    }
    function fit (ship, x, y){
        let validCells = [];
        if(x < 0 || y < 0){
            return [];
        }
        let counter = 0;

        if(ship.direction == 'H'){
            while(y <= boardSize && cells[x][y] == 'E' && counter < ship.length){
                validCells.push({x:x, y:y});
                y++;
                counter++;
            }
        }else{
            while(x < boardSize && cells[x][y] == 'E' && counter < ship.length){
                validCells.push({x:x, y:y});
                x++;
                counter++;
            }
        }

        return validCells;
    }
    const boardString = () =>{
        let string = '';
        for (let i = 0; i < boardSize; i++) {
            string += '\n'
            for (let j = 0; j < boardSize; j++) {
                let curCell = cells[i][j];
                if(curCell != 'M' && curCell != 'A' && curCell != 'E'){
                    curCell = curCell.id;
                }
                string += j == 0 ? `${curCell}` : ` ${curCell}`;
            }
        }
        return string;
    }
    function isAllShipsShunk (){
        for (let i = 0; i < ships.length; i++) {
            if(!ships[i].shunk){
                
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
    return {cells, boardSize, ships, generateCells, fit, placeShip, removeShip, receiveAttack, isAllShipsShunk, boardString}
}

export default Gameboard;
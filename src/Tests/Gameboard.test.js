import Gameboard from "../factory/Gameboard"
import Ship from "../factory/Ship";

let gameboard = Gameboard(8);
let ship1 = Ship(0, 4);
let ship2 = Ship(1, 8);
let ship3 = Ship(2, 9);

afterEach(()=>{
    /* console.log(gameboard.boardString()); */
})

//placing Ship
test('placing ship in negative coords', () => {
    expect(gameboard.placeShip(ship1, -1, -1, 'H')).
    toBe(false);
});
test('placing ship shorter then board horizontaly at top left corner', () => {
    expect(gameboard.placeShip(ship1, 0, 0, 'H')).
    toBe(true);
});
test('placing ship shorter then board verticaly at top left corner', () => {
    expect(gameboard.placeShip(ship1, 0, 0, 'V')).
    toBe(false);
});
test('placing ship shorter then board horizontaly at bottom right corner', () => {
    expect(gameboard.placeShip(ship2, 1, 0, 'H')).
    toBe(true);
});
test('placing ship shorter then board verticaly at bottom right corner', () => {
    expect(gameboard.placeShip(ship2, 1, 0, 'H')).
    toBe(false);
});

//receiving attack
test('attackin filled cell', () => {
    expect(gameboard.getCells()[0][0]).
    toBe(ship1);
});
test('attackin filled cell', () => {
    expect(gameboard.getCells()[0][1]).
    toBe(ship1);
});
test('attackin filled cell', () => {
    expect(gameboard.getCells()[0][2]).
    toBe(ship1);
});
test('attackin filled cell', () => {
    expect(gameboard.getCells()[0][3]).
    toBe(ship1);
});

test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getCells()[0][0]).
    toBe('A');
})
test('receiving attack at attacked spot', () => {
    expect(gameboard.receiveAttack(0, 0)).
    toBe(null);
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(0, 1);
    expect(gameboard.getCells()[0][1]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.getCells()[0][2]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(0, 3);
    expect(gameboard.getCells()[0][3]).
    toBe('A');
})
test('ship shunked', () => {
    expect(ship1.isShunk()).
    toBe(true);
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 0);
    expect(gameboard.getCells()[0][0]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.getCells()[0][1]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 2);
    expect(gameboard.getCells()[0][2]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 3);
    expect(gameboard.getCells()[0][3]).
    toBe('A');
})

test("is all ships shunked", () => {
    expect(gameboard.isAllShipsShunk()).
    toBe(false);
})
test('ship shunked', () => {
    expect(ship2.isShunk()).
    toBe(false);
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 4);
    expect(gameboard.getCells()[1][4]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 5);
    expect(gameboard.getCells()[1][5]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 6);
    expect(gameboard.getCells()[1][6]).
    toBe('A');
})
test('receiving attack at empty spot', () => {
    gameboard.receiveAttack(1, 7);
    expect(gameboard.getCells()[1][7]).
    toBe('A');
})
test("is all ships shunked", () => {
    expect(gameboard.isAllShipsShunk()).
    toBe(true);
})
test('ship shunked', () => {
    expect(ship2.isShunk()).
    toBe(true);
})
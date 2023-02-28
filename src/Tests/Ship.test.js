import Ship from "../factory/Ship";

let ship = Ship(0, 3);
let ship2 = Ship(-1);
test('negative length', ()=>{
    expect(ship2.size()).
    toBe(null);
})
test('length = 0', ()=>{
    expect(ship2.size()).
    toBe(null);
})
test('if ship is not shunk', ()=>{
    expect(ship.isShunk()).
    toBe(false);
})
test('hitting ship first time', ()=>{
    expect(ship.hit()).
    toBe(1);
})
test('hitting second time', ()=>{
    expect(ship.hit()).
    toBe(2);
})
test('hitting third time', ()=>{
    expect(ship.hit()).
    toBe(3);
})
test('if ship is shunk', ()=>{
    expect(ship.isShunk()).
    toBe(true);
})
test('getting size', ()=>{
    expect(ship.size()).
    toBe(3);
})
test('getting id', ()=>{
    expect(ship.getId()).
    toBe(0);
})
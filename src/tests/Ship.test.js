import Ship from "../modules/Ship";

describe('hitting a ship until it is sunk', () => {
    const ship = Ship(2);
    test('first hit', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });

    test('second sinking hit', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
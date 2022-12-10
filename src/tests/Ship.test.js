import Ship from "../modules/Ship";

describe('hitting a ship until it is sunk', () => {
    // Verifies that hit and isSunk method works as expected
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
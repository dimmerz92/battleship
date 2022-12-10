import Ship from "../modules/Ship";

describe('making ships too big or too small', () => {
    test('making a ship too big', () => {
        expect(Ship(5)).toBe("Ship length cannot be greater than 4");
    });

    test('making a ship too small', () => {
        expect(Ship(0)).toBe("Ship length cannot be less than 1");
    });
});

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
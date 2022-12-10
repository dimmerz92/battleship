import Gameboard from "../modules/Gameboard";

const game = Gameboard();

describe('makes an attack and responds with a hit or miss', () => {
    game.placeShip([[0,0],[0,1]]);

    test('first attack misses', () => {
        expect(game.receiveAttack([2,2])).toBe(false);
    });

    test('second attack hits', () => {
        expect(game.receiveAttack([0,0])).toBe(true);
    });
});

describe('check if all ships are sunk', () => {
    test('not all ships sunk', () => {
        expect(game.allSunk()).toBe(false);
    });

    test('all ships sunk: GAME OVER', () => {
        game.receiveAttack([0,1]);
        expect(game.allSunk()).toBe(true);
    });
});
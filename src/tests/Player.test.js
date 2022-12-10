import Player from "../modules/Player"

const player = Player('player');

const enemy = Player('enemy');
enemy.gameboard.placeShip([[0,0]]);

describe('player taking a turn', () => {
    test('no shots fired', () => {
        expect(player.score.misses + player.score.hits).toBe(0);
    })
    test('missing a shot', () => {
        player.takeTurn(enemy, [1,1]);
        expect(player.score.misses).toBe(1);
    });
    test('hitting a shot', () => {
        player.takeTurn(enemy, [0,0]);
        expect(player.score.hits).toBe(1);
    });
});
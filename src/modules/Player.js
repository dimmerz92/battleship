import Gameboard from "./Gameboard";

const Player = (name) => {
    const score = {hits: 0, misses: 0};
    const gameboard = Gameboard();

    const takeTurn = (enemyGameboard, coord) => {
        const result = enemyGameboard.gameboard.receiveAttack(coord);
        result ? score.hits++ : score.misses ++;
    };

    return {name, score, gameboard, takeTurn};
};

export default Player;
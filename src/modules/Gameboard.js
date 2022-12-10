const Gameboard = () => {
    // Initialise a playing field
    const coordinates = {};
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            coordinates[[i,j]] = {ship: false, hit: false};
        };
    };

    // Place a ship on the battlefield
    const ships = [];
    const placeShip = (ship, coords) => {
        ships.push(ship);
        coords.forEach(coord => {
            coordinates[coord].ship = ship;
        });
    };

    // Receives enemy attack and returns a hit or miss
    const receiveAttack = (coord) => {
        const placement = coordinates[coord].ship;
        coordinates[coord].hit = true;
        let hit = false;
        if (placement) {
            placement.hit();
            hit = true;
        };
        return hit;
    };

    // Checks if all ships on the board have been sunk
    const allSunk = () => {
        let gameOver = true;
        ships.forEach(ship => {
            if (!ship.isSunk()) {
                gameOver = false;
            };
        });
        return gameOver;
    };

    return {placeShip, receiveAttack, allSunk};
};

export default Gameboard;
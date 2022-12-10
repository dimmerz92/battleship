const Ship = (length) => {
    if (length > 4) {return "Ship length cannot be greater than 4"};
    if (length < 1) {return "Ship length cannot be less than 1"};

    const hit = () => {
        length--;
    };

    const isSunk = () => {
        return (length === 0 ? true : false);
    };

    return {hit, isSunk};
};

export default Ship;
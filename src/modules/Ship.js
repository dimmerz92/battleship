const Ship = (length) => {
    const hit = () => {
        length--;
    };

    const isSunk = () => {
        return (length === 0 ? true : false);
    };

    return {hit, isSunk};
};

export default Ship;
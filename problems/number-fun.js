returnsThree = () => 3;

reciprocal = (num) => {
    if(typeof num !== 'number') {
        throw TypeError('NaN');
    }
    return 1 / num;
}

module.exports = {
    returnsThree,
    reciprocal
}

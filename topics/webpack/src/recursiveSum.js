const recursiveSum = ([a, ...bs]) => {
    if (bs.length > 1) {
        return a + recursiveSum(bs);
    } else {
        return a;
    }
};


module.exports = recursiveSum;

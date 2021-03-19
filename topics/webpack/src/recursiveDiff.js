const recursiveDiff = ([a, ...bs]) => {
    if (bs.length > 1) {
        return a - recursiveDiff(bs);
    } else {
        return a;
    }
};


export default recursiveDiff;

const recursiveSum = require('./recursiveSum');
import recursiveDiff from "./recursiveDiff";

function main () {
    const sumResult = recursiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const diffResult = recursiveDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(sumResult);
    console.log(diffResult);
}


main();

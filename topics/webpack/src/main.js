const recursiveSum = require('./recursiveSum');
import recursiveDiff from "./recursiveDiff";

import "./styles/main.css";
import "./styles/page.css";

import HackagesLogo from "./imgs/hackages.png";
import WebpackLogo from "./imgs/webpack-logo.png";

function main () {
    const sumResult = recursiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const diffResult = recursiveDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(sumResult);
    console.log(diffResult);
    if (document) {

        document.getElementById('response').innerText = sumResult + ' ' + diffResult;

        const hackagesLogo = new Image();
        hackagesLogo.src = HackagesLogo;
        hackagesLogo.style.position = 'absolute';
        hackagesLogo.style.top = '10px';
        hackagesLogo.style.left = '10px';

        const webpackLogo = new Image();
        webpackLogo.src = WebpackLogo;
        webpackLogo.style.position = 'absolute';
        webpackLogo.style.top = '10px';
        webpackLogo.style.right = '10px';

        document.body.appendChild(webpackLogo);
        document.body.appendChild(hackagesLogo);
    }
}


main();

module.exports = (function () {
    const lines = [];
    let i = 0;
    setInterval(() => {
        console.log(lines[(i++) % lines.length]);
    }, 1000);

    return function (line) {
        lines.push(line)
    }
})();

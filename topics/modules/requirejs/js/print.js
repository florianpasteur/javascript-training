(function () {
    const lines = [];
    let i = 0;
    setInterval(() => {
        document.getElementById('placeholder').innerText = lines[(i++) % lines.length]
    }, 1000);

    return function (line) {
        lines.push(line)
    }
});

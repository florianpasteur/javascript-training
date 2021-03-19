module.exports = (function () {
    const temperaturesGenerators = [
        () => ({value: Math.floor(Math.random() * 95 + 23), unit: 'F'}),
        () => ({value: Math.floor(Math.random() * 40 + -5), unit: 'C'}),
    ];

    return {
        temperature: () => {
            return {
                FR: temperaturesGenerators[Math.floor(Math.random() * 2)],
                BE: temperaturesGenerators[Math.floor(Math.random() * 2)],
                NL: temperaturesGenerators[Math.floor(Math.random() * 2)],
            }
        },
    }
})();

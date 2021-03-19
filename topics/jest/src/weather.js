module.exports = (function () {
    const weatherTypes = [
        'sunny', 'cloudy', 'windy', 'snowy', 'rainy'
    ];

    return {
        weather: () => {
            return {
                FR: weatherTypes[Math.floor(Math.random() * (weatherTypes.length-1))],
                BE: weatherTypes[Math.floor(Math.random() * (weatherTypes.length-1))],
                NL: weatherTypes[Math.floor(Math.random() * (weatherTypes.length-1))],
            }
        },
    }
})();

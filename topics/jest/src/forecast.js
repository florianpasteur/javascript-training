module.exports = function (locationService, weatherService, temperatureService) {


    return {
        forecast: (location) => {
            const locationDetails = location === 'my-position' ? locationService.myPosition() : locationService.findLocation(location);
            const weather = weatherService.weather();
            const temperatures = temperatureService.temperature();


            return {
                location: null,
                weather: null,
                temperatures: {
                    'F': 0,
                    'C': 0,
                }
            }
        },
    }
};

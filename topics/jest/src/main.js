const location = require('./location');
const weather = require('./weather');
const temperature = require('./temperature');
const Forecast = require('./forecast');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const forecast = new Forecast(location, weather, temperature);

rl.question("What is your location (type 'my-location' for auto-location) ? ", function(userLocation) {
    console.log(forecast.forecast(userLocation));
    rl.close();
});

rl.on("close", function() {
    console.log("\nThank using our weather service !");
    process.exit(0);
});

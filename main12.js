//34).  Large Shirts: Default values in make_shirt().
function make_shirt(shirtColor, shirtSize = "Large", shirtText = "I love js") {
    console.log(`The size of the t-shirt is ${shirtSize} and color is ${shirtColor}, Text on the T-Shirt will be ${shirtText}`);
}
make_shirt("Black");
make_shirt("Yellow", "Medium");
make_shirt("Red", "Small", "Hello I am Azan");
//35 : Cities: Describing cities with a function.
function describingCities(cityName, countryName = "Pakistan") {
    console.log(`${cityName} is a city in ${countryName}`);
}
describingCities("Karachi");
describingCities("Lahore");
describingCities("Chicago", "America");
//36) city Names: Formatting city-country pairs.
function describeCity(city, country) {
    console.log(`"${city},${country}"`);
}
describeCity("Karachi", "Pakistan");
describeCity("Lahore", "Pakistan");
describeCity("New York", "America");
export {};

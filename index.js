//keeping kelvin value constant 
const kelvin = 393;
//converting kelvin to celsius
const celsius = kelvin - 273;
//converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// rounde off fahrenheit 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degree Fahrenheit`)
console.log(`The temperature is ${celsius} degree Fahrenheit`)
let newton = celsius * (33/100);
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degree Fahrenheit`)

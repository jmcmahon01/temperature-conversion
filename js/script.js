//Business Logic

function conversion(tempF) {
  return tempF
}

//User Interface Logic (°F - 32) × 5/9

const tempF = parseInt(prompt("Enter degrees in farenheight: "))
const tempC = (tempF - 32) * (5 / 9);

window.alert("The temperature in Celsius is: " + conversion(tempC).toFixed(3));


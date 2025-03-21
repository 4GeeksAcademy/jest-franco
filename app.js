const sum = function(a, b) {
    return a + b;
};


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// esta es mi función que suma dos números
    // declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // retornamos el valor
    return Number(valueInDollar.toFixed(2));
}
const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a yenes
    let valueInYen = (valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    // retornamos el valor
    return Number(valueInYen.toFixed(2));
};

const fromYenToPound = function(valueInYen) {
    // convertimos el valor a libras
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    // retornamos el valor
    return Number(valueInPound.toFixed(2));
};

// solo un registro en consola para nosotros.

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
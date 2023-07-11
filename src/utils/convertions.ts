type tempCelcius = number;
function convertionToCelcius(value: tempCelcius) {
    const celcius: number = value - 273.15;
    return celcius.toFixed(2);
}

type tempFahrenheit = number;
function convertionToFarenheit(value: tempFahrenheit) {
    const farenheit: number = (value - 273.15) * (9 / 5) + 32;
    return farenheit.toFixed(2);
}

type pressurehPa = number;
function pressure(value: pressurehPa) {
    const pressureValue = value * 0.0145;
    return pressureValue.toFixed(2);
}

type VisibilityMetres = number;
function visibilityConvertion(visibility: VisibilityMetres) {
    const value = visibility / 1609;
    return value.toFixed(2);
}

function convertionUnits(tempValue: number, tempChoose: boolean) {
    if (tempChoose) {
        // farenheit = false
        return convertionToCelcius(tempValue);
    } else {
        // farenheit = true
        return convertionToFarenheit(tempValue);
    }
}

export {
    convertionToFarenheit,
    visibilityConvertion,
    convertionToCelcius,
    convertionUnits,
    pressure,
};
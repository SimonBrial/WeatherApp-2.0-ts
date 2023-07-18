type tempCelcius = number;
function convertionToCelcius(value: tempCelcius) {
    const celcius = (value - 32) * (5 / 9);
    return celcius.toFixed(1);
}

type tempFahrenheit = number;
function convertionToFarenheit(value: tempFahrenheit) {
    const farenheit = (value * (9 / 5)) + 32;
    return farenheit.toFixed(1);
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

function getCityAndCode (cityWithCode: string){
    const cityAndcodeSeparate = cityWithCode.split(',');
    return cityAndcodeSeparate;
}

export {
    convertionToFarenheit,
    visibilityConvertion,
    convertionToCelcius,
    convertionUnits,
    getCityAndCode,
    pressure,
};

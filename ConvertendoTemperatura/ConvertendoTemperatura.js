class Temperatura {

    celsius(valor) {
        let fahrenheit = (valor * 9 / 5) + 32;
        let kelvin = valor + 273.15;
        return `${valor}ºC é igual a ${fahrenheit.toFixed(2)}ºF e ${kelvin.toFixed(2)}ºK`
    }

    fahrenheit(valor){
        let celsius = (valor - 32) * 5/9;
        let kelvin = (valor - 32) * 5/9 + 273.15;
        return `${valor}ºF é igual a ${celsius.toFixed(2)}ºC e ${kelvin.toFixed(2)}ºK`
    }

    kelvin(valor){
        let celsius = valor - 273.15;
        let fahrenheit = (valor - 273.15) * 9/5 + 32;
        return `${valor}ºK é igual a ${celsius.toFixed(2)}ºC e ${fahrenheit.toFixed(2)}ºF`
    }

}

module.exports = Temperatura;
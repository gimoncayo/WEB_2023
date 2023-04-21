const Temperatura = () => {

    const celsiusParaFahrenheit = (celsius) => (9 * celsius + 160) /  5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273) * 9 / 5 + 32
        return {celsius, fahrenheit}
    }

    const c = 30
    const f = 67
    const k = 0
    return(
        <div>
            <h1> A temperatura {c} Celsius para Fahrenheit é: {celsiusParaFahrenheit(c)} </h1>
            <h1> A temperatura {f} Fahrenheit para Celsius é: {fahrenheitParaCelsius(f)} </h1>
            <h1> A temperatura {k} Kelvin em Celsius é: {kelvin(k).celsius} </h1>
            <h1> A temperatura {k} Kelvin em Fahrenheit é: {kelvin(k).fahrenheit} </h1>
        </div>
    )
}

export default Temperatura
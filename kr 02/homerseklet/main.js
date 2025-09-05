function calculate() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);

    var fahrenheit = (celsius * 1.8) + 32;
    var kelvin = celsius + 273.15;

    document.getElementById("fahrenheitResult").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvinResult").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
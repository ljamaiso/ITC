function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    switch (conversionType) {
        case "cToF":
            result = (inputValue * 9/5) + 32;
            document.getElementById("resultInput").value = `${inputValue}°C = ${result.toFixed(2)}°F`;
            break;
        case "fToC":
            result = (inputValue - 32) * 5/9;
            document.getElementById("resultInput").value = `${inputValue}°F = ${result.toFixed(2)}°C`;
            break;
        case "mToF":
            result = inputValue * 3.28084;
            document.getElementById("resultInput").value = `${inputValue} meters = ${result.toFixed(2)} feet`;
            break;
        case "fToM":
            result = inputValue / 3.28084;
            document.getElementById("resultInput").value = `${inputValue} feet = ${result.toFixed(2)} meters`;
            break;
        default:
            document.getElementById("resultInput").value = "Invalid conversion type.";
    }

    document.getElementById("resultInput").style.display = "block";
}

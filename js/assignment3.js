// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calculateButton").addEventListener("click", calculateResults);
});

function calculateResults() {
    let n = parseInt(document.getElementById('nnumber').value, 10);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    // Calculate Factorial
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    // Calculate Summation
    let summation = 0;
    for (let j = 1; j <= n; j++) {
        summation += j;
    }

    // Calculate Average
    let average = summation / n;

    // Display results in readonly input fields
    document.getElementById('factorResult').value = factorial;
    document.getElementById('summationResult').value = summation;
    document.getElementById('avgResult').value = average.toFixed(2); // Limit to 2 decimal places for average
}

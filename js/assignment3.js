document.getElementById("calculateButton").addEventListener("click", calculateResults);

function calculateResults() {
    let n = parseInt(document.getElementById('nnumber').value, 10);

    // Check if the input value is valid
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid positive number.");
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

    // Display results
    document.getElementById('factorResult').value = factorial;
    document.getElementById('summationResult').value = summation;
    document.getElementById('avgResult').value = average;
}

document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.querySelector(".button");

    calculateButton.addEventListener("click", calculateResults);
});

function calculateResults() {
    // Retrieve the input value
    const inputField = document.getElementById('nnumber');
    const n = parseInt(inputField.value, 10);

    // Validate input
    if (isNaN(n) || n <= 0) {
        alert("Please enter a positive integer.");
        clearResults(); // Clear previous results if the input is invalid
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
    document.getElementById('avgResult').value = average.toFixed(2);
}

function clearResults() {
    document.getElementById('factorResult').value = '';
    document.getElementById('summationResult').value = '';
    document.getElementById('avgResult').value = '';
}

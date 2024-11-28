// Add an event listener to the input field
document.addEventListener("DOMContentLoaded", () => {
    const tiInput = document.getElementById("ti");

    
    tiInput.addEventListener("input", computeTax);
});

function computeTax() {
    let ti, basictax = 0, brackettax = 0, totaltax = 0;

    
    ti = parseFloat(document.getElementById("ti").value) || 0;

    if (ti < 250000) {
        basictax = 0;
        brackettax = 0;
    } else if (ti >= 250000 && ti < 400000) {
        basictax = 0;
        brackettax = 0.2 * (ti - 250000);
    } else if (ti >= 400000 && ti < 800000) {
        basictax = 30000;
        brackettax = 0.25 * (ti - 400000);
    } else if (ti >= 800000 && ti < 2000000) {
        basictax = 130000;
        brackettax = 0.30 * (ti - 800000);
    } else if (ti >= 2000000 && ti < 8000000) {
        basictax = 490000;
        brackettax = 0.32 * (ti - 2000000);
    } else if (ti >= 8000000) {
        basictax = 2410000;
        brackettax = 0.35 * (ti - 8000000);
    }

    totaltax = basictax + brackettax;

    
    document.getElementById("incometax").value = totaltax.toFixed(0);
}

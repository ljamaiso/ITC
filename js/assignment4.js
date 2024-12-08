let list = []; 

function showList() {
    const tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = ""; 

    list.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.employee}</td>
            <td>${item.daysWorked}</td>
            <td>${item.dailyRate.toFixed(2)}</td>
            <td>${item.deductAmount.toFixed(2)}</td>
            <td>${item.grossPay().toFixed(2)}</td>
            <td>${item.netPay().toFixed(2)}</td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteEmployee(index) {
    
    if (index >= 1 && index <= list.length) {
        list.splice(index - 1, 1);
        showList(); 
    } else {
        alert("Invalid employee number.");
    }
}

function initList() {
    list = []; 
}

document.getElementById("btnaddEmployee").addEventListener("click", () => {
    const employee = document.getElementById("employee").value.trim();
    const daysWorked = parseFloat(document.getElementById("daysWorked").value) || 0;
    const dailyRate = parseFloat(document.getElementById("dayRate").value) || 0;
    const deductAmount = parseFloat(document.getElementById("deduct").value) || 0;

    if (!employee) {
        alert("Employee name is required.");
        return;
    }

    const listItem = {
        employee,
        daysWorked,
        dailyRate,
        deductAmount,
        grossPay() {
            return this.daysWorked * this.dailyRate;
        },
        netPay() {
            return this.grossPay() - this.deductAmount;
        }
    };

    list.push(listItem);
    showList();
});

document.getElementById("btnclearList").addEventListener("click", () => {
    if (confirm("Delete all employee(s) from the list?")) {
        initList();
        showList();
    }
});

document.getElementById("btnDeleteEmployee").addEventListener("click", () => {
    const index = parseInt(document.getElementById("deleteIndex").value, 10);
    deleteEmployee(index);
});

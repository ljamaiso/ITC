        let list = [];
        let confirmCallback = null;

        const modal = document.getElementById("confirmationModal");
        const overlay = document.getElementById("modalOverlay");
        const modalTitle = document.getElementById("modalTitle");
        const modalMessage = document.getElementById("modalMessage");
        const btnConfirm = document.getElementById("btnConfirm");
        const btnCancel = document.getElementById("btnCancel");

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

        function openModal(title, message, callback) {
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            modal.style.display = "block";
            overlay.style.display = "block";
            confirmCallback = callback;
        }

        function closeModal() {
            modal.style.display = "none";
            overlay.style.display = "none";
            confirmCallback = null;
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
            openModal("Clear Employee List", "Are you sure you want to clear all employees?", () => {
                list = [];
                showList();
            });
        });

        document.getElementById("btnDeleteEmployee").addEventListener("click", () => {
            const index = parseInt(document.getElementById("deleteIndex").value, 10);
            if (index >= 1 && index <= list.length) {
                const employeeName = list[index - 1].employee;
                openModal(
                    "Delete Employee",
                    `Are you sure you want to delete employee "${employeeName}"?`,
                    () => {
                        list.splice(index - 1, 1);
                        showList();
                    }
                );
            } else {
                alert("Invalid employee number.");
            }
        });

        btnConfirm.addEventListener("click", () => {
            if (confirmCallback) confirmCallback();
            closeModal();
        });

        btnCancel.addEventListener("click", closeModal);

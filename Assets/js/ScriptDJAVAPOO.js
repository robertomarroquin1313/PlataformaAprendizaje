 document.addEventListener("DOMContentLoaded", function () {
        const checkboxButton = document.getElementById("checkboxButton");
        let isChecked = false;

        checkboxButton.addEventListener("click", function () {
            isChecked = !isChecked;
            if (isChecked) {
                checkboxButton.classList.remove("btn-primary");
                checkboxButton.classList.add("btn-success");
                checkboxButton.textContent = "Hecho";
            } else {
                checkboxButton.classList.remove("btn-success");
                checkboxButton.classList.add("btn-primary");
                checkboxButton.textContent = "Marcar como pendiente";
            }
        });
    });
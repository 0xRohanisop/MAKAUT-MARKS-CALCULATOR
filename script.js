document.getElementById("sgpaButton").addEventListener("click", function() {
    convert("sgpa");
});

document.getElementById("ygpaButton").addEventListener("click", function() {
    convert("ygpa");
});

document.getElementById("resetButton").addEventListener("click", resetForm);

function convert(type) {
    var inputElement = document.getElementById(type);
    var resultDisplay = document.getElementById("result");

    var value = parseFloat(inputElement.value);

    if (isNaN(value) || value < 0 || value > 10) {
        resultDisplay.textContent = "Please enter a valid " + type.toUpperCase() + " between 0 and 10.";
        return;
    }

    var percentage = (value - 0.75) * 10;
    percentage = Math.max(percentage, 0);
    percentage = Math.min(percentage, 100);

    resultDisplay.textContent = "Equivalent Percentage: " + percentage.toFixed(2) + "%";
}

function resetForm() {
    document.getElementById("sgpa").value = "";
    document.getElementById("ygpa").value = "";
    document.getElementById("result").textContent = "";
}

// dgpato percentage

function calculatePercentage() {
    var dgpaInput = document.getElementById("dgpa");
    var resultDisplay = document.getElementById("result");

    var dgpa = parseFloat(dgpaInput.value);

    if (isNaN(dgpa) || dgpa < 0 || dgpa > 10) {
        resultDisplay.textContent = "Please enter a valid DGPA between 0 and 10.";
        return;
    }

    var percentage = (dgpa - 0.75) * 10;
    percentage = Math.max(percentage, 0);
    percentage = Math.min(percentage, 100);

    resultDisplay.textContent = "Equivalent Percentage: " + percentage.toFixed(2) + "%";
}






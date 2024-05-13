var myform = document.getElementById("headerfrom");
var mysubmitButton = document.getElementById("submit");
myform.addEventListener("input", function () {
    // Check if all required fields are filled
    if (myform.checkValidity()) {
        // If all fields are filled, enable the submit button
        mysubmitButton.disabled = false;
        mysubmitButton.style.cursor = "pointer";
    } else {
        // If any required field is empty, disable the submit button
        mysubmitButton.disabled = true;
        mysubmitButton.style.cursor = "not-allowed";
    }
});
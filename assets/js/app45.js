//=============button not allow before fill==========
const myformmobile = document.getElementById("headerfrommobile");
const mysubmitButtonmobile = document.querySelector(".submitheader_from_mobile");
myformmobile.addEventListener("input", function () {
    if (myformmobile.checkValidity()) {
        mysubmitButtonmobile.disabled = false;
        mysubmitButtonmobile.style.cursor = "pointer";
    } else {
        mysubmitButtonmobile.disabled = true;
        mysubmitButtonmobile.style.cursor = "not-allowed";
    }
});
const nameheadermobile = document.getElementById("nameheadermobile");
// const errorname = document.getElementById("errorname");
const lastnameheadermobile = document.getElementById("lastnameheadermobile");
// const errorlastname = document.getElementById("errorlastname");
const numberheadermobile = document.getElementById("numberheadermobile");
// const errornumber = document.getElementById("errornumber");
const emailheadermobile = document.getElementById("emailheadermobile");
// const erroremail = document.getElementById("erroremail");
const submitheadermobile = document.getElementById("submitheadermobile");
const regexbobile = {
    Name: /^[a-zA-Z\s]+$/,
    LastName: /^[a-zA-Z\s]+$/,
    Number: /^\d{10}$/,
    Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
};

submitheadermobile.addEventListener("click", function (event) {
    event.preventDefault();

    //============will do that in future================

    if (!regexbobile.Name.test(nameheadermobile.value)) {
        console.log("Name:", nameheadermobile.value);
    }
    if (!regexbobile.LastName.test(lastnameheadermobile.value)) {
        console.log("Last Name:", lastnameheadermobile.value);
    }
    if (!regexbobile.Number.test(numberheadermobile.value)) {
        console.log("Number:", numberheadermobile.value);
    }
    if (!regexbobile.Email.test(emailheadermobile.value)) {
        console.log("Email:", emailheadermobile.value);
    }

    if (
        regexbobile.Name.test(nameheadermobile.value) &&
        regexbobile.Number.test(numberheadermobile.value) &&
        regexbobile.Email.test(emailheadermobile.value) &&
        regexbobile.LastName.test(lastnameheadermobile.value)
    ) {
        alert("from submit successfully");
        nameheadermobile.value = "";
        numberheadermobile.value = "";
        emailheadermobile.value = "";
        lastnameheadermobile.value = "";
    }
});

// counter time-out
function startCountdown(targetDate) {
    // Function to update the countdown
    const updateCountdown = () => {
        // Get the current date and time
        const currentDate = new Date().getTime();
        // Calculate the remaining time
        let remainingTime = targetDate - currentDate;
        // If the remaining time is less than or equal to 0, reset the countdown for 1 hour
        if (remainingTime <= 0) {
            targetDate = new Date(currentDate + 3600000).getTime(); // 3600000 milliseconds = 1 hour
            remainingTime = targetDate - currentDate;
            // Store the new target date in local storage
            localStorage.setItem("targetDate", targetDate);
        }
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        // Update the HTML elements with the remaining time
        document.getElementById("desktopDays").textContent = days
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopHours").textContent = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopMinutes").textContent = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("desktopSeconds").textContent = seconds
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileDays").textContent = days
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileHours").textContent = hours
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileMintus").textContent = minutes
            .toString()
            .padStart(2, "0");
        document.getElementById("mobileSeconds").textContent = seconds
            .toString()
            .padStart(2, "0");
    };
    // Update the countdown immediately
    updateCountdown();
    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);
}
// Example usage
let targetDate = localStorage.getItem("targetDate");
if (!targetDate) {
    // If target date is not stored, set it to the next hour
    targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 1);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    localStorage.setItem("targetDate", targetDate.getTime());
} else {
    // If target date is stored, parse it from string to number
    targetDate = parseInt(targetDate);
}
startCountdown(targetDate);
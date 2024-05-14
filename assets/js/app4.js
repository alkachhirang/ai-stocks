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



//===================Trading-section==================
const AIFirstName = document.getElementById("AIfirstName");
const errorAIFirstName = document.getElementById("errorAIFirstName");
const AIlastName = document.getElementById("AIlastName");
const errorAILastName = document.getElementById("errorAILastName");
const AIPNumber = document.getElementById("AINumber");
const errorAINumber = document.getElementById("errorAINumber");
const EmailAI = document.getElementById("AIEmail");
const errorAIEmail = document.getElementById("errorAIEmail");
const SubmitForm = document.getElementById("SubmitForm");

const AiStokeregex = {
    firstNameAI: /^[a-zA-Z\s]+$/,
    lastNameAI: /^[a-zA-Z\s]+$/,
    numberAI: /^\d{10}$/,
    emailAI: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
};

SubmitForm.addEventListener("click", function (event) {
    event.preventDefault();

    //============will do that in future================

    // if (!AiStokeregex.firstNameAI.test(AIFirstName.value)) {
    //   AIFirstName.classList.add("border_red");
    // } else {
    //   AIFirstName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.lastNameAI.test(AIlastName.value)) {
    //   AIlastName.classList.add("border_red");
    // } else {
    //   AIlastName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.numberAI.test(AIPNumber.value)) {
    //   AIPNumber.classList.add("border_red");
    // } else {
    //   AIPNumber.classList.remove("border_red");
    // }

    // if (!AiStokeregex.emailAI.test(EmailAI.value)) {
    //   EmailAI.classList.add("border_red");
    // } else {
    //   EmailAI.classList.remove("border_red");
    // }

    if (
        AiStokeregex.firstNameAI.test(AIFirstName.value) &&
        AiStokeregex.lastNameAI.test(AIlastName.value) &&
        AiStokeregex.numberAI.test(AIPNumber.value) &&
        AiStokeregex.emailAI.test(EmailAI.value)
    ) {
        alert("Form submitted successfully");
        AIFirstName.value = "";
        AIlastName.value = "";
        AIPNumber.value = "";
        EmailAI.value = "";
    }
});

SubmitForm.addEventListener("click", function (event) {
    event.preventDefault();

    //============will do that in future================

    // if (!AiStokeregex.firstNameAI.test(AIFirstName.value)) {
    //   AIFirstName.classList.add("border_red");
    // } else {
    //   AIFirstName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.lastNameAI.test(AIlastName.value)) {
    //   AIlastName.classList.add("border_red");
    // } else {
    //   AIlastName.classList.remove("border_red");
    // }

    // if (!AiStokeregex.numberAI.test(AIPNumber.value)) {
    //   AIPNumber.classList.add("border_red");
    // } else {
    //   AIPNumber.classList.remove("border_red");
    // }

    // if (!AiStokeregex.emailAI.test(EmailAI.value)) {
    //   EmailAI.classList.add("border_red");
    // } else {
    //   EmailAI.classList.remove("border_red");
    // }

    if (
        AiStokeregex.firstNameAI.test(AIFirstName.value) &&
        AiStokeregex.lastNameAI.test(AIlastName.value) &&
        AiStokeregex.numberAI.test(AIPNumber.value) &&
        AiStokeregex.emailAI.test(EmailAI.value)
    ) {
        alert("Form submitted successfully");
        AIFirstName.value = "";
        AIlastName.value = "";
        AIPNumber.value = "";
        EmailAI.value = "";
    }
});
const AiStockform = document.getElementById("AIDStockfrom");
const AiStocksubmitButton = document.getElementById("SubmitForm");
AiStockform.addEventListener("input", function () {
    if (AiStockform.checkValidity()) {
        AiStocksubmitButton.disabled = false;
        AiStocksubmitButton.style.cursor = "pointer";
    } else {
        AiStocksubmitButton.disabled = true;
        AiStocksubmitButton.style.cursor = "not-allowed";
    }
});

// year function
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("fullYear").textContent = currentYear;
// preloader;
setTimeout(() => {
    document.getElementById("preloderred").classList.add("d-none");
    document.body.classList.remove("overflow_hidden");
}, 1700);
const TopFirstName = document.getElementById("TopfirstName");
const errorTopFirstName = document.getElementById("errorTopFirstName");
const ToplastName = document.getElementById("ToplastName");
const errorTopLastName = document.getElementById("errorTopLastName");
const TopPNumber = document.getElementById("TopNumber");
const errorTopNumber = document.getElementById("errorTopNumber");
const EmailTop = document.getElementById("TopEmail");
const errorTopEmail = document.getElementById("errorTopEmail");
const TopSubmitForm = document.getElementById("TopSubmitForm");

const TopSectionregex = {
    firstNameTop: /^[a-zA-Z\s]+$/,
    lastNameTop: /^[a-zA-Z\s]+$/,
    numberTop: /^\d{10}$/,
    emailTop: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
};

TopSubmitForm.addEventListener("click", function (event) {
    event.preventDefault();

    let valid = true;

    // if (!TopSectionregex.firstNameTop.test(TopFirstName.value)) {
    //     TopFirstName.classList.add("border_red");
    //     errorTopFirstName.textContent = "Invalid first name";
    //     valid = false;
    // } else {
    //     TopFirstName.classList.remove("border_red");
    //     errorTopFirstName.textContent = "";
    // }

    // if (!TopSectionregex.lastNameTop.test(ToplastName.value)) {
    //     ToplastName.classList.add("border_red");
    //     errorTopLastName.textContent = "Invalid last name";
    //     valid = false;
    // } else {
    //     ToplastName.classList.remove("border_red");
    //     errorTopLastName.textContent = "";
    // }

    // if (!TopSectionregex.numberTop.test(TopPNumber.value)) {
    //     TopPNumber.classList.add("border_red");
    //     errorTopNumber.textContent = "Invalid phone number";
    //     valid = false;
    // } else {
    //     TopPNumber.classList.remove("border_red");
    //     errorTopNumber.textContent = "";
    // }

    // if (!TopSectionregex.emailTop.test(EmailTop.value)) {
    //     EmailTop.classList.add("border_red");
    //     errorTopEmail.textContent = "Invalid email address";
    //     valid = false;
    // } else {
    //     EmailTop.classList.remove("border_red");
    //     errorTopEmail.textContent = "";
    // }

    if (valid) {
        alert("Form submitted successfully");
        TopFirstName.value = "";
        ToplastName.value = "";
        TopPNumber.value = "";
        EmailTop.value = "";
    }
});

const Topform = document.getElementById("Topform");
const TopsubmitButton = document.getElementById("TopSubmitForm");

Topform.addEventListener("input", function () {
    if (Topform.checkValidity()) {
        TopsubmitButton.disabled = false;
        TopsubmitButton.style.cursor = "pointer";
    } else {
        TopsubmitButton.disabled = true;
        TopsubmitButton.style.cursor = "not-allowed";
    }
});

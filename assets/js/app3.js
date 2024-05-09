function countdown(endDate) {
    //  current date and time
    const now = new Date().getTime();

    //difference between the end date and the current date
    const difference = endDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = difference % 1000;
    if (days < 10) {
        days = `0${days}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
}

const endDate = new Date("2024-5-21").getTime();
setInterval(function () {
    const remainingTime = countdown(endDate);
    document.querySelector(
        "#days"
    ).innerHTML = ` ${remainingTime.days}`;
    document.querySelector(
        "#hours"
    ).innerHTML = `  ${remainingTime.hours}`;
    document.querySelector(
        "#minuets"
    ).innerHTML = ` ${remainingTime.minutes}`;
    document.querySelector(
        "#seconds"
    ).innerHTML = ` ${remainingTime.seconds}`;
}, 1000);
const name = document.getElementById('name')
const errorname = document.getElementById('errorname')
const lastname = document.getElementById('lastname')
const errorlastname = document.getElementById('errorlastname')
const number = document.getElementById('number')
const errornumber = document.getElementById('errornumber')
const email = document.getElementById('email')
const erroremail = document.getElementById('erroremail')
const submit = document.getElementById('submit')
const regex = {
    Name: /^[a-zA-Z\s]+$/,
    LastName: /^[a-zA-Z\s]+$/,
    Number: /^\d{10}$/,
    Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

submit.addEventListener(('click'), function (event) {
    event.preventDefault();
    if (!regex.Name.test(name.value)) {
        errorname.innerHTML = "invalid name"
    }
    else {
        errorname.innerHTML = ""
    }
    if (!regex.LastName.test(lastname.value)) {
        errorlastname.innerHTML = "invalid last name"
    }
    else {
        errorlastname.innerHTML = ""
    }
    if (!regex.Number.test(number.value)) {
        errornumber.innerHTML = "invalid number"
    }
    else {
        errornumber.innerHTML = ""
    }
    if (!regex.Email.test(email.value)) {
        erroremail.innerHTML = "invalid email"
    }
    else {
        erroremail.innerHTML = ""
    }

    if (regex.Name.test(name.value) && regex.Number.test(number.value) && regex.Email.test(email.value) && regex.LastName.test(lastname.value)) {
        alert(" from submit successfully")
        name.value = ""
        number.value = ""
        email.value = ""
        lastname.value = ''

    }
})
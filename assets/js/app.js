// cursure not allowed before fill
const form = document.getElementById('headerfrom');
const submitButton = document.querySelector('.submitheaderfrom');
form.addEventListener('input', () => {
  const isFormValid = Array.from(form.elements).every(input => input.validity.valid);
  form.classList.toggle('invalid', !isFormValid);
});

submitButton.addEventListener('mouseover', () => {
  submitButton.style.cursor = form.classList.contains('invalid') ? 'not-allowed' : 'pointer';
});
// trading Take the first step into AI Stock Trading section 
const tradingform = document.getElementById('tradingfrom');
const tradingsubmitButton = document.querySelector('.submittradingfrom');
tradingform.addEventListener('input', () => {
  const isFormValid = Array.from(tradingform.elements).every(input => input.validity.valid);
  tradingform.classList.toggle('invalid', !isFormValid);
});

tradingsubmitButton.addEventListener('mouseover', () => {
  tradingsubmitButton.style.cursor = tradingform.classList.contains('invalid') ? 'not-allowed' : 'pointer';
});

//================header-timeout===============
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
  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const endDate = new Date("2024-5-21").getTime();
setInterval(function () {
  const remainingTime = countdown(endDate);
  document.querySelector("#days").innerHTML = ` ${remainingTime.days}`;
  document.querySelector("#hours").innerHTML = `  ${remainingTime.hours}`;
  document.querySelector("#minuets").innerHTML = ` ${remainingTime.minutes}`;
  document.querySelector("#seconds").innerHTML = ` ${remainingTime.seconds}`;
  document.querySelector("#day").innerHTML = ` ${remainingTime.days}`;
  document.querySelector("#hour").innerHTML = `  ${remainingTime.hours}`;
  document.querySelector("#minuet").innerHTML = ` ${remainingTime.minutes}`;
  document.querySelector("#second").innerHTML = ` ${remainingTime.seconds}`;
}, 1000);

//=============header-form===============
const name = document.getElementById("name");
const errorname = document.getElementById("errorname");
const lastname = document.getElementById("lastname");
const errorlastname = document.getElementById("errorlastname");
const number = document.getElementById("number");
const errornumber = document.getElementById("errornumber");
const email = document.getElementById("email");
const erroremail = document.getElementById("erroremail");
const submit = document.getElementById("submit");
const regex = {
  Name: /^[a-zA-Z\s]+$/,
  LastName: /^[a-zA-Z\s]+$/,
  Number: /^\d{10}$/,
  Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (!regex.Name.test(name.value)) {
    errorname.innerHTML = "invalid name";
  } else {
    errorname.innerHTML = "";
  }
  if (!regex.LastName.test(lastname.value)) {
    errorlastname.innerHTML = "invalid last name";
  } else {
    errorlastname.innerHTML = "";
  }
  if (!regex.Number.test(number.value)) {
    errornumber.innerHTML = "invalid number";
  } else {
    errornumber.innerHTML = "";
  }
  if (!regex.Email.test(email.value)) {
    erroremail.innerHTML = "invalid email";
  } else {
    erroremail.innerHTML = "";
  }

  if (
    regex.Name.test(name.value) &&
    regex.Number.test(number.value) &&
    regex.Email.test(email.value) &&
    regex.LastName.test(lastname.value)
  ) {
    alert(" from submit successfully");
    name.value = "";
    number.value = "";
    email.value = "";
    lastname.value = "";
  }
});

//===================Trading-section==================
const FirstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("errorFirstName");
const lastName = document.getElementById("lastName");
const errorLastName = document.getElementById("errorLastName");
const PNumber = document.getElementById("Number");
const errorNumber = document.getElementById("errorNumber");
const Email = document.getElementById("Email");
const errorEmail = document.getElementById("errorEmail");
const Submit = document.getElementById("Submit");

const tradingregex = {
  firstName: /^[a-zA-Z\s]+$/,
  lastName: /^[a-zA-Z\s]+$/,
  number: /^\d{10}$/,
  email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
};

Submit.addEventListener("click", function (event) {
  event.preventDefault();

  if (!tradingregex.firstName.test(FirstName.value)) {
    FirstName.classList.add("border_red");
  } else {
    FirstName.classList.remove("border_red");
  }

  if (!tradingregex.lastName.test(lastName.value)) {
    lastName.classList.add("border_red");
  } else {
    lastName.classList.remove("border_red");
  }

  if (!tradingregex.number.test(PNumber.value)) {
    PNumber.classList.add("border_red");
  } else {
    PNumber.classList.remove("border_red");
  }

  if (!tradingregex.email.test(Email.value)) {
    Email.classList.add("border_red");
  } else {
    Email.classList.remove("border_red");
  }

  if (
    tradingregex.firstName.test(FirstName.value) &&
    tradingregex.lastName.test(lastName.value) &&
    tradingregex.number.test(PNumber.value) &&
    tradingregex.email.test(Email.value)
  ) {
    alert("Form submitted successfully");
    FirstName.value = "";
    lastName.value = "";
    PNumber.value = "";
    Email.value = "";
  }
});

// year function
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentYear").textContent = currentYear;
// back to top
function backtotop() {
  window.scroll(0, 0);
}
window.addEventListener("scroll", function () {
  let backtotop = document.getElementById("backtotop");
  if (window.scrollY > 250) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
});

// preloader;
const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow_hidden");
}, 1700);

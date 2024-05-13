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
  // if (!regex.Name.test(name.value)) {
  //   errorname.innerHTML = "invalid name";
  // } else {
  //   errorname.innerHTML = "";
  // }
  // if (!regex.LastName.test(lastname.value)) {
  //   errorlastname.innerHTML = "invalid last name";
  // } else {
  //   errorlastname.innerHTML = "";
  // }
  // if (!regex.Number.test(number.value)) {
  //   errornumber.innerHTML = "invalid number";
  // } else {
  //   errornumber.innerHTML = "";
  // }
  // if (!regex.Email.test(email.value)) {
  //   erroremail.innerHTML = "invalid email";
  // } else {
  //   erroremail.innerHTML = "";
  // }

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

//=======================top-section====================
var openButton = document.getElementById("openPopup");
var closeButton = document.getElementById("closePopup");
var popup = document.getElementById("popup");

openButton.onclick = function () {
  popup.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton.onclick = function () {
  popup.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }
};
// stock-2
var openButton2 = document.getElementById("openPopup2");
var closeButton2 = document.getElementById("closePopup2");
var popup2 = document.getElementById("popup2");

openButton2.onclick = function () {
  popup2.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton2.onclick = function () {
  popup2.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup2) {
    popup2.style.display = "none";
    document.body.style.overflow = "";
  }
};
// stock-3
var openButton3 = document.getElementById("openPopup3");
var closeButton3 = document.getElementById("closePopup3");
var popup3 = document.getElementById("popup3");

openButton3.onclick = function () {
  popup3.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton3.onclick = function () {
  popup3.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup3) {
    popup3.style.display = "none";
    document.body.style.overflow = "";
  }
};
// stock-5
var openButton4 = document.getElementById("openPopup4");
var closeButton4 = document.getElementById("closePopup4");
var popup4 = document.getElementById("popup4");

openButton4.onclick = function () {
  popup4.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton4.onclick = function () {
  popup4.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup4) {
    popup4.style.display = "none";
    document.body.style.overflow = "";
  }
};

// stock-5
var openButton5 = document.getElementById("openPopup5");
var closeButton5 = document.getElementById("closePopup5");
var popup5 = document.getElementById("popup5");

openButton5.onclick = function () {
  popup5.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton5.onclick = function () {
  popup5.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup5) {
    popup5.style.display = "none";
    document.body.style.overflow = "";
  }
};

// stock-6
var openButton6 = document.getElementById("openPopup6");
var closeButton6 = document.getElementById("closePopup6");
var popup6 = document.getElementById("popup6");

openButton6.onclick = function () {
  popup6.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton6.onclick = function () {
  popup6.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup6) {
    popup6.style.display = "none";
    document.body.style.overflow = "";
  }
};

// stock-7
var openButton7 = document.getElementById("openPopup7");
var closeButton7 = document.getElementById("closePopup7");
var popup7 = document.getElementById("popup7");

openButton7.onclick = function () {
  popup7.style.display = "block";
  document.body.style.overflow = "hidden";
};

closeButton7.onclick = function () {
  popup7.style.display = "none";
  document.body.style.overflow = "";
};

window.onclick = function (event) {
  if (event.target == popup7) {
    popup7.style.display = "none";
    document.body.style.overflow = "";
  }
};

//=============button not allow before fill==========
const popupForms = document.querySelectorAll(".formpopup_form");
const submitButtons = document.querySelectorAll(".popup-fromsubmisition");

popupForms.forEach((form) => {
  form.addEventListener("input", () => {
    let isValid = true;
    form.querySelectorAll("input, select, textarea").forEach((element) => {
      if (!element.checkValidity()) {
        isValid = false;
        return;
      }
    });
    submitButtons.forEach((submitButton) => {
      submitButton.disabled = !isValid;
      submitButton.style.cursor = isValid ? "pointer" : "not-allowed";
    });
  });
});
const namepopup = document.querySelector(".namepopup");
const lastnamepopup = document.querySelector(".lastnamepopup");
const numberpopup = document.querySelector(".numberpopup");
const emailpopup = document.querySelector(".emailpopup");
const submitpopup = document.querySelector(".submitpopup");
const regexpopup = {
  Name: /^[a-zA-Z\s]+$/,
  LastName: /^[a-zA-Z\s]+$/,
  Number: /^\d{10}$/,
  Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
};

submitpopup.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    regexpopup.Name.test(namepopup.value) &&
    regexpopup.LastName.test(lastnamepopup.value) &&
    regexpopup.Number.test(numberpopup.value) &&
    regexpopup.Email.test(emailpopup.value)
  ) {
    alert(" from submit successfully");
    namepopup.value = "";
    lastnamepopup.value = "";
    numberpopup.value = "";
    emailpopup.value = "";
  }
});


// preloader;
// const preloader = document.getElementById("preloader");
// setTimeout(() => {
//   document.getElementById("preloder").classList.add("d-none");
//   document.body.classList.remove("overflow_hidden");
// }, 1700);

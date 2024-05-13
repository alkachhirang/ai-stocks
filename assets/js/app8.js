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

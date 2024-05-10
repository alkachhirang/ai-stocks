const FirstName = document.getElementById("firstName");
const errorFirstName = document.getElementById("errorFirstName");
const lastName = document.getElementById("lastName");
const errorLastName = document.getElementById("errorLastName");
const PNumber = document.getElementById("Number");
const errorNumber = document.getElementById("errorNumber");
const Email = document.getElementById("Email");
const errorEmail = document.getElementById("errorEmail");
const Submit = document.getElementById("Submit");

const regex = {
  firstName: /^[a-zA-Z\s]+$/,
  lastName: /^[a-zA-Z\s]+$/,
  number: /^\d{10}$/,
  email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
};

Submit.addEventListener("click", function (event) {
  event.preventDefault();

  if (!regex.firstName.test(FirstName.value)) {
    errorFirstName.innerHTML = "Invalid first name";
  } else {
    errorFirstName.innerHTML = "";
  }

  if (!regex.lastName.test(lastName.value)) {
    errorLastName.innerHTML = "Invalid last name";
  } else {
    errorLastName.innerHTML = "";
  }

  if (!regex.number.test(PNumber.value)) {
    errorNumber.innerHTML = "Invalid number";
  } else {
    errorNumber.innerHTML = "";
  }

  if (!regex.email.test(Email.value)) {
    errorEmail.innerHTML = "Invalid email";
  } else {
    errorEmail.innerHTML = "";
  }

  if (
    regex.firstName.test(FirstName.value) &&
    regex.lastName.test(lastName.value) &&
    regex.number.test(PNumber.value) &&
    regex.email.test(Email.value)
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

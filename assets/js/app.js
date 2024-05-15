const myform = document.getElementById("headerfrom");
const mysubmitButton = document.querySelector(".headerfrombutton");
// document.getElementById("Button").disabled = true;
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
const myformtrading = document.getElementById("tradeingsectionfrom");
const mysubmitButtontrading = document.querySelector(".tradingfrombutton");
myformtrading.addEventListener("input", function () {
  console.log('hjghasfdhgfh');
  // Check if all required fields are filled
  if (myformtrading.checkValidity()) {
    // If all fields are filled, enable the submit button
    mysubmitButtontrading.disabled = false;
    mysubmitButtontrading.style.cursor = "pointer";
  } else {
    // If any required field is empty, disable the submit button
    mysubmitButtontrading.disabled = true;
    mysubmitButtontrading.style.cursor = "not-allowed";
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
  popup.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton.onclick = function () {
  popup.style.scale = "0";
  document.body.style.overflow = "";
};

popup.onclick = function (event) {
  if (event.target == popup) {
    popup.style.scale = "0";
    document.body.style.overflow = "";
  }
};
// stock-2
var openButton2 = document.getElementById("openPopup2");
var closeButton2 = document.getElementById("closePopup2");
var popup2 = document.getElementById("popup2");

openButton2.onclick = function () {
  popup2.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton2.onclick = function () {
  popup2.style.scale = "0";
  document.body.style.overflow = "";
};

popup2.onclick = function (event) {
  if (event.target == popup2) {
    popup2.style.scale = "0";
    document.body.style.overflow = "";
  }
};
// stock-3
var openButton3 = document.getElementById("openPopup3");
var closeButton3 = document.getElementById("closePopup3");
var popup3 = document.getElementById("popup3");

openButton3.onclick = function () {
  popup3.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton3.onclick = function () {
  popup3.style.scale = "0";
  document.body.style.overflow = "";
};

popup3.onclick = function (event) {
  if (event.target == popup3) {
    popup3.style.scale = "0";
    document.body.style.overflow = "";
  }
};
// stock-5
var openButton4 = document.getElementById("openPopup4");
var closeButton4 = document.getElementById("closePopup4");
var popup4 = document.getElementById("popup4");

openButton4.onclick = function () {
  popup4.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton4.onclick = function () {
  popup4.style.scale = "0";
  document.body.style.overflow = "";
};

popup4.onclick = function (event) {
  if (event.target == popup4) {
    popup4.style.scale = "0";
    document.body.style.overflow = "";
  }
};

// stock-5
var openButton5 = document.getElementById("openPopup5");
var closeButton5 = document.getElementById("closePopup5");
var popup5 = document.getElementById("popup5");

openButton5.onclick = function () {
  popup5.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton5.onclick = function () {
  popup5.style.scale = "0";
  document.body.style.overflow = "";
};

popup5.onclick = function (event) {
  if (event.target == popup5) {
    popup5.style.scale = "0";
    document.body.style.overflow = "";
  }
};

// stock-6
var openButton6 = document.getElementById("openPopup6");
var closeButton6 = document.getElementById("closePopup6");
var popup6 = document.getElementById("popup6");

openButton6.onclick = function () {
  popup6.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton6.onclick = function () {
  popup6.style.scale = "0";
  document.body.style.overflow = "";
};

popup6.onclick = function (event) {
  if (event.target == popup6) {
    popup6.style.scale = "0";
    document.body.style.overflow = "";
  }
};

// stock-7
var openButton7 = document.getElementById("openPopup7");
var closeButton7 = document.getElementById("closePopup7");
var popup7 = document.getElementById("popup7");

openButton7.onclick = function () {
  popup7.style.scale = "1";
  document.body.style.overflow = "hidden";
};

closeButton7.onclick = function () {
  popup7.style.scale = "0";
  document.body.style.overflow = "";
};

popup7.onclick = function (event) {
  if (event.target == popup7) {
    popup7.style.scale = "0";
    document.body.style.overflow = "";
  }
};

//========================how-it-works========================//
const lottiePlayers = {
  company: {
    element: document.getElementById("company"),
    played: false,
  },
  invest: {
    element: document.getElementById("invest"),
    played: false,
  },
  shares: {
    element: document.getElementById("shares"),
    played: false,
  },
};

let activeButtonIndex = 0; // To keep track of the currently active button index
let timer; // Timer variable
let automaticSwitching = true; // Flag to control automatic button switching

// Function to reset timer and switch to the next button
const resetTimerAndSwitchButton = () => {
  clearTimeout(timer); // Reset the timer
  if (automaticSwitching) {
    activeButtonIndex = (activeButtonIndex + 1) % buttonValues.length; // Increment the active button index cyclically
    changeImageHandler(buttonValues[activeButtonIndex]); // Change the image to the next button
    timer = setTimeout(resetTimerAndSwitchButton, 6000); // Start the timer again
  }
};

// Function to handle button clicks
const changeImageHandler = (value) => {
  // Restart the currently playing animation before starting a new one
  restartCurrentAnimation();

  // If the clicked button is not already active, update the active button index and start automatic switching
  if (activeButtonIndex !== buttonValues.indexOf(value)) {
    clearTimeout(timer); // Clear the timer
    activeButtonIndex = buttonValues.indexOf(value); // Update the active button index
    automaticSwitching = true; // Set automatic switching flag to true
    startAutomaticButtonSwitching(); // Restart automatic button switching
  }

  // Call the changeLottiePlayer function with the clicked button value
  changeLottiePlayer(value);
};

// Function to restart the currently playing animation
const restartCurrentAnimation = () => {
  for (const player of Object.values(lottiePlayers)) {
    if (player.element.playing) {
      player.element.stop(); // Stop the current animation
      player.element.goToAndPlay(0); // Go to the beginning and play again
    }
  }
};

// Define an array of button values
const buttonValues = ["company", "invest", "shares"];

// Event listeners for buttons
buttonValues.forEach((value, index) => {
  const button = document.querySelector(
    `[data-title="${value}"] .trade_shares_btns`
  );
  button.addEventListener("click", () => {
    clearTimeout(timer); // Clear the timer
    activeButtonIndex = index; // Update the active button index
    changeImageHandler(value); // Change image to the clicked button
    automaticSwitching = true; // Set automatic switching flag to true
    startAutomaticButtonSwitching(); // Restart automatic button switching
  });
});
document
  .querySelector(".trade_line_first")
  .classList.add("tradeLinetransitionFirst");
const changeLottiePlayer = (value) => {
  // Hide all Lottie players initially
  for (const player of Object.values(lottiePlayers)) {
    player.element.style.display = "none";
    player.element.loop = false; // Set loop to false for all players
  }

  // Show the clicked Lottie player
  const currentPlayer = lottiePlayers[value];
  currentPlayer.element.style.display = "block";

  // Set loop to true for the active player
  currentPlayer.element.loop = true;

  // Stop the current animation and go to the first frame
  currentPlayer.element.stop();

  // Highlight the clicked button
  const allButtons = document.querySelectorAll(".trade_shares_btns");
  allButtons.forEach((btn) => btn.classList.remove("trade_shares_active_btns"));
  document
    .querySelector(`[data-title="${value}"] .trade_shares_btns`)
    .classList.add("trade_shares_active_btns");

  // Activate dots based on the clicked button
  const allDots = document.querySelectorAll(".timeline_dot");
  allDots.forEach((dot) => dot.classList.remove("active_timeline_dot"));
  if (value === "company") {
    document
      .querySelector("[data-title='company'] .timeline_dot")
      .classList.add("active_timeline_dot");
    document
      .querySelector(".trade_line_first")
      .classList.add("tradeLinetransitionFirst");
    document
      .querySelector(".trade_line_4th")
      .classList.remove("tradeLinetransitionFirst");
    document
      .querySelector(".trade_line_4th")
      .classList.remove("tradeLineSecondAfter");
    document
      .querySelector(".trade_timeline")
      .classList.remove("trade_timeline_gradient");
  } else if (value === "invest") {
    document
      .querySelector("[data-title='company'] .timeline_dot")
      .classList.add("active_timeline_dot");
    document
      .querySelector("[data-title='invest'] .timeline_dot")
      .classList.add("active_timeline_dot");
    document
      .querySelector(".trade_line_first")
      .classList.add("tradeLineSecondAfter");
    document
      .querySelector(".trade_line_4th")
      .classList.add("tradeLinetransitionFirst");
    document
      .querySelector(".trade_line_first")
      .classList.remove("tradeLinetransitionFirst");
    document
      .querySelector(".trade_timeline")
      .classList.remove("trade_timeline_gradient");
  } else if (value === "shares") {
    allDots.forEach((dot) => dot.classList.add("active_timeline_dot"));
    document
      .querySelector(".trade_timeline")
      .classList.add("trade_timeline_gradient");
    document
      .querySelector(".trade_line_first")
      .classList.remove("tradeLinetransitionFirst");
    document
      .querySelector(".trade_line_first")
      .classList.remove("tradeLineSecondAfter");
    document
      .querySelector(".trade_line_4th")
      .classList.remove("tradeLinetransitionFirst");
  } else {
    document
      .querySelector(`[data-title="${value}"] .timeline_dot`)
      .classList.add("active_timeline_dot");
    document
      .querySelector(".trade_line_first")
      .classList.remove("tradeLineSecondAfter");
  }

  // Play the animation
  currentPlayer.element.play();
};

// Event listener for automatic button switching
const startAutomaticButtonSwitching = () => {
  // Start the timer initially
  timer = setTimeout(resetTimerAndSwitchButton, 7000);
};

// Start automatic button switching
startAutomaticButtonSwitching();


// preloader;
const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow_hidden");
}, 1700);


// ------------------micro-popup------------------
function microvalidateForm() {
  event.preventDefault();
  var firstName = document.getElementById('first_name').value.trim();
  var lastName = document.getElementById('last_name').value.trim();
  var email = document.getElementById('user_email').value.trim();
  var phone = document.getElementById('user_phone').value.trim();
  var isValid = true;
  if (isValid) {
    clearForm();
    openPopup();
  }
  return isValid;
}
function openPopup() {
  Swal.fire({
    icon: 'success',
    title: 'Form submitted successfully!',
    showConfirmButton: false,
    timer: 1500
  });
}
function clearForm() {
  document.getElementById('microForm').reset();
}
//=====================popup-js===================//
document
  .getElementById("pop1")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("pop2")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });

document
  .getElementById("pop3")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("pop4")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("pop5")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("pop6")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("pop7")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
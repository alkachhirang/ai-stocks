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

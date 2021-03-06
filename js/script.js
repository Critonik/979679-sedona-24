var link = document.querySelector(".find");
var popup = document.querySelector(".appointment-form");
var appointmentdate = popup.querySelector("[name=appointmentdate]");
var departuredate = popup.querySelector("[name=departuredate]");
var childcount = popup.querySelector("[name=childcount]");
var adultcount = popup.querySelector("[name=adultcount]");
var form = document.querySelector("form");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("adultcount");
  }
catch (err) {
    isStorageSupport = false;
  }

if (storage) {
  adultcount.value = storage;
  }
else {
  appointmentdate.focus();
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("appointment-form-open"))
    {
      popup.classList.add("appointment-form-open");
      appointmentdate.focus();
      popup.classList.remove("appointment-form-error");
    }
    else {
      popup.classList.remove("appointment-form-open");
      popup.classList.remove("appointment-form-error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("appointment-form-open")) {
      popup.classList.remove("appointment-form-open");
      popup.classList.remove("appointment-form-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
    if (!appointmentdate.value || !departuredate.value || !adultcount.value || !childcount.value) {
      evt.preventDefault();
      popup.classList.remove  ("appointment-form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("appointment-form-error");
      console.log("Нужно ввести дату прибытия и отбытия");
    }
    else {
      popup.classList.remove("appointment-form-error");
      if (isStorageSupport) {
        localStorage.setItem("adultcount", adultcount.value);
      }
    }
  });

var link = document.querySelector(".find");
var popup = document.querySelector(".appointment-form");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("appointment-form-close"))
    {
      popup.classList.add("appointment-form-close");
    }
    else {
      popup.classList.remove("appointment-form-close");
    }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("appointment-form-close")) {
      popup.classList.remove("appointment-form-close");
    }
  }
});

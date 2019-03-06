var link = document.querySelector(".find");
var popup = document.querySelector(".appointment-form");
link.addEventListener("click", fuction (evt) {
  evt.preventDefault();
  if (popup.classList.contains("appointment-form-close"))
    {
      popup.classList.remove("appointment-form-close");
    }
    else {
      popup.classList.add("appointment-form-close");
    }
});

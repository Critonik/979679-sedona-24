var link=document.querySelector(".find");var popup=document.querySelector(".appointment-form");var appointmentdate=popup.querySelector("[name=appointmentdate]");var departuredate=popup.querySelector("[name=departuredate]");var childcount=popup.querySelector("[name=childcount]");var adultcount=popup.querySelector("[name=adultcount]");var form=document.querySelector("form");link.addEventListener("click",function(evt){evt.preventDefault();if(!popup.classList.contains("appointment-form-open"))
{popup.classList.add("appointment-form-open");appointmentdate.focus()}
else{popup.classList.remove("appointment-form-open");popup.classList.remove("appointment-form-error")}});window.addEventListener("keydown",function(evt){if(evt.keyCode===27){evt.preventDefault();if(popup.classList.contains("appointment-form-open")){popup.classList.remove("appointment-form-open");popup.classList.remove("appointment-form-error")}}});form.addEventListener("submit",function(evt){evt.preventDefault();if(!appointmentdate.value||!departuredate.value||!adultcount.value||!childcount.value){evt.preventDefault();popup.classList.add("appointment-form-error");popup.offsetWidth=popup.offsetWidth;popup.classList.add("appointment-form-error");console.log("Нужно ввести дату прибытия и отбытия")}
else{popup.classList.remove("appointment-form-error")}})

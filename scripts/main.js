const errMessage = document.getElementById("error-message");
const email = document.getElementById("email-address");
const submit = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const upperContainer = document.getElementById("upper-container");
const lowerContainer = document.getElementById("lower-container");
const imageDesktop = document.getElementById("image-desktop");
const confirmation = document.getElementById("confirmation");

errMessage.style.display = "none";

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value === "" || !email.validity.valid) {
    errMessage.style.display = "block";
  } else {
    upperContainer.style.display = "none";
    lowerContainer.style.display = "none";
    confirmation.style.display = "flex";
  }
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmation.style.display = "none";
  upperContainer.style.display = "flex";
  lowerContainer.style.display = "flex";
});

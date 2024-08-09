const errMessage = document.getElementById("error-message");
const email = document.getElementById("email-address");
const dismissBtn = document.getElementById("dismiss-btn");
const upperContainer = document.getElementById("upper-container");
const lowerContainer = document.getElementById("lower-container");
const confirmation = document.getElementById("confirmation");
const form = document.getElementById("signup-form");

errMessage.style.display = "none";
confirmation.style.display = "none";
upperContainer.style.display = "none"; 

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (email.value === "" || !email.validity.valid) {
    errMessage.style.display = "block";
  } else {
    errMessage.style.display = "none";
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 

    console.log(data);

    // Show confirmation message and hide the form
    upperContainer.style.display = "none";
    lowerContainer.style.display = "none";
    confirmation.style.display = "flex";
  }
}

form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmation.style.display = "none";
  upperContainer.style.display = "none";
  lowerContainer.style.display = "flex";

  if (window.innerWidth <= 1440) {
    upperContainer.style.display ="flex";
  }
  });


if (window.innerWidth <= 1440) {
  confirmation.style.display = "none";
  upperContainer.style.display = "flex";
}

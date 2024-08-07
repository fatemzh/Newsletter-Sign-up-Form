const errMessage = document.getElementById('error-message');
const email = document.getElementById('email-address');
const submit = document.getElementById('submit-btn');

errMessage.style.display = 'none';

submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (email.value==='' || !email.validity.valid) {
        errMessage.style.display = "block";
    }else{
        console.log('ok');
    }
})

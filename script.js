const password = document.querySelector(".password");
const form = document.querySelector(".form");
const passwordError = document.querySelector(".errormsg");

form.addEventListener('submit', (e) => {
    let errorMessages = [];

    if (password.value.length <= 5) {
        errorMessages.push('*password must be 6 characters or more')
        console.log('yo')
    }
    if (password.value === 'password') {
        errorMessages.push("*password can't be password..")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        passwordError.innerText = errorMessages.join(',')
    }
});


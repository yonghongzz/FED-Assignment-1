var emailInput = document.querySelector('.email');

emailInput.addEventListener('input', function () {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var message = document.getElementById('message');

     if (!validRegex.test(emailInput.value)) {
        message.innerHTML = 'Email must be in Regex format!';
     } 
     else {
        message.innerHTML = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementsByClassName('loginbutton')[0];
    loginButton.addEventListener('click', function() {
        alert('Login successfully!');
    });
});

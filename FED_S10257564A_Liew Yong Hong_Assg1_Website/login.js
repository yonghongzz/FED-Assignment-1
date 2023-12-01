/*
 This is the function that ensure the email input by user is in regex format,
 if not, show email must be in regex format message.
 */
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

/*
This is the function that when the user press login button, it will pop out an alert
saying Login successfully
*/
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementsByClassName('loginbutton')[0];
    loginButton.addEventListener('click', function() {
        alert('Login successfully!');
    });
});

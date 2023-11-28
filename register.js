var emailInput = document.querySelector('.email');

emailInput.addEventListener('input', function () {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var message1 = document.getElementById('message1');

     if (!validRegex.test(emailInput.value)) {
        message1.innerHTML = 'Email must be in Regex format!';
     } 
     else {
         message1.innerHTML = '';
    }
});

var pswd1 = document.getElementById('password1');

pswd1.addEventListener('input',function(){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var message2 = document.getElementById('message2');
    if (!lowerCaseLetters.test(pswd1.value)){
        message2.innerHTML = 'Password must contain a LOWER case!';
    }
    else if(!upperCaseLetters.test(pswd1.value)){
        message2.innerHTML = 'Password must contain a UPPER case!';
    }
    else if(!numbers.test(pswd1.value)){
        message2.innerHTML = 'Password must contain a number!';
    }
    else if(pswd1.value.length < 8){
        message2.innerHTML = 'Password must be more than 8 character!';
    }
    else{
        message2.innerHTML = '';
    }
})

var pswd2 = document.getElementById('password2');

pswd2.addEventListener('input',function(){
    if(pswd2.value === pswd1.value){
        message3.innerHTML = '';
    }
    else{
        message3.innerHTML = 'Password must be the same!';
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var registerButton = document.getElementsByClassName('registerbutton')[0];
    registerButton.addEventListener('click', function() {
        alert('Register successfully!');
    });
});

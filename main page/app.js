
const loginInput = document.querySelector('.login');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('button');
const emailInput = document.getElementById('register-popup');
const passwordInputt = document.getElementById('password-popup');
const repasswordInput = document.getElementById('repassword-popup');


loginInput.addEventListener('input', function() {
    if (this.value.length < 5) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});

passwordInput.addEventListener('input', function() {
    if (this.value.length < 8) {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
});

loginButton.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const loginValue = loginInput.value;
    const passwordValue = passwordInput.value;

    if (loginValue.length < 5 || passwordValue.length < 5) {
        alert('ელ-ფოსტა და პაროლი უნდა იყოს 8 სიმბოლოზე მეტი!');
    }       
});

loginInput.addEventListener('input', function() {
    if (loginInput(this.value) === 0) {
        loginButton.style.cursor = 'not-drop';
    } else {
        loginButton.style.cursor = 'pointer';
    }
});
emailInput.addEventListener('input', function() {
    if (this.value.length < 8) {
        this.style.borderColor = 'red'; 
        this.style.borderColor = 'Green'; 
    }
});

passwordInputt.addEventListener('input', function() {
    if (this.value.length < 8) {
        this.style.borderColor = 'red'; 
    } else {
        this.style.borderColor = 'Green'; 
    }
});

repasswordInput.addEventListener('input', function() {
    if (this.value.length < 8) {
        this.style.borderColor = 'red'; 
    } else {
        this.style.borderColor = 'Green'; 
    }
});
function checkPasswords() {
    const passwordValue = passwordInputt.value;
    const repasswordValue = repasswordInput.value;

    if (passwordValue === repasswordValue && passwordValue.length > 0) {
        passwordInputt.style.borderColor = 'green';
        repasswordInput.style.borderColor = 'green';
    } else {
        passwordInputt.style.borderColor = 'red';
        repasswordInput.style.borderColor = 'red';
    }
}
emailInput.addEventListener('input', function() {
    const inputValue = this.value;
    const borderColor = inputValue.includes('@') ? 'green' : 'red';
    this.style.borderColor = borderColor;
});
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="inherit";
})
document.querySelector(".close-popup").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
})

passwordInputt.addEventListener('input', checkPasswords);
repasswordInput.addEventListener('input', checkPasswords);



document.getElementById("var").addEventListener("click", function() {
    let email = document.getElementById("register-popup").value.trim();
    let password = document.getElementById("password-popup").value.trim();
    let repassword = document.getElementById("repassword-popup").value.trim();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("repassword", repassword);
});


let email = localStorage.getItem("email");
let repassword = localStorage.getItem("password");




document.getElementById("next").addEventListener("click", function(event) {
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
        let email = document.querySelector(".login").value.trim();
        let password = document.querySelector(".password").value.trim();

        if (email === savedEmail && password === savedPassword) {
            return true;
        } else {
            alert("არასწორი ელფოსტა ან პაროლი!");
            event.preventDefault(); 
        }
    }
});




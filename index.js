const toy = document.getElementById('logi');
const mood = document.getElementById('password');
const hood = document.getElementById('btnDis');
const back = document.getElementById('back');
const already = document.getElementById('already');
const second = document.getElementById('second');
const forgotPD = document.getElementById('forgotPD');
const third = document.getElementById('third');
const direct = document.getElementById('direct');
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }

});
const rememberToggle = document.getElementById("rememberToggle");

rememberToggle.addEventListener("change", function () {
    if (this.checked) {
        console.log("Remember me ON");
    } else {
        console.log("Remember me OFF");
    }
});

const correctLogin = "Dawson5050";
const correctPassword = "christy224@";

hood.addEventListener("click", (e) => {
    e.preventDefault();

    const loginID = toy.value.trim();
    const password = mood.value.trim();

    if (loginID === "" || password === "") {
        alert("Please enter your Login ID and Password.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    if (loginID === correctLogin && password === correctPassword) {
        direct.style.display = "flex";

        setTimeout(() => {
            direct.style.display = "none"; // Hide spinner
            window.location.href = "index2.html";
        }, 3000);

    } else {
        alert("Invalid Login ID or Password.");
    }
});




already.addEventListener('click', () => {
    third.style.display = 'flex';
    second.style.display = 'none'




})

const bilon = localStorage.getItem('mood');
const lord = localStorage.getItem('toy');



back.addEventListener('click', () => {

    second.style.display = 'flex'
    third.style.display = 'none'
})
window.onload = () => {
    direct.style.display = "none";
};
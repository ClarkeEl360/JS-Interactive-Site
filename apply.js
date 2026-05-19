// Elliot Clarke
// Start Date: 5/11/2026
// Last Update: 5/11/2026
// JS Interactive Site


const form = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");

form.addEventListener("submit", (e)=> {

    var email_check = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    if(name.value === "" || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Email is required";
    }
});
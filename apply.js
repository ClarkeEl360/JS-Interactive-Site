// Elliot Clarke
// Start Date: 5/11/2026
// Last Update: 5/11/2026
// JS Interactive Site


const left_form = document.getElementById("left_form");

const left_name = document.getElementById("left_name");
const left_email = document.getElementById("left_email");

const left_name_error = document.getElementById("left_name_error");
const left_email_error = document.getElementById("left_email_error");



const right_form = document.getElementById("right_form");

const right_name = document.getElementById("right_name");
const right_email = document.getElementById("right_email");

const right_name_error = document.getElementById("right_name_error");
const right_email_error = document.getElementById("right_email_error");


left_form.addEventListener("submit", (e)=> {

    var email_check = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    if(left_name.value === "" || left_name.value == null) {
        e.preventDefault();
        left_name_error.innerHTML = "Name is required";
    }

    if(!left_email.value.match(email_check)){
        e.preventDefault();
        left_email_error.innerHTML = "Email is required";
    }
});

right_form.addEventListener("submit", (e)=> {

    var email_check = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    if(right_name.value === "" || right_name.value == null) {
        e.preventDefault();
        right_name_error.innerHTML = "Name is required";
    }

    if(!right_email.value.match(email_check)){
        e.preventDefault();
        right_email_error.innerHTML = "Email is required";
    }
});
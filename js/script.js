document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

if(name === "" || email === "" || subject === "" || message === ""){

alert("Please fill in all fields.");

return;

}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("✅ Thank you! Your message has been sent successfully.");

form.reset();

});

}

});
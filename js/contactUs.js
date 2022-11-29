console.log("esto si funciona");

const nameJS = document.getElementById("userName");
const nameLabelJS = document.getElementById("userNameLabel");

const emailJS = document.getElementById("userEmail");
const emailLabelJS = document.getElementById("userEmailLabel");

const phoneJS = document.getElementById("userPhone");
const phoneLabelJS = document.getElementById("userPhoneLabel");

const messageJS = document.getElementById("userMessage");
const messageLabelJS = document.getElementById("userMessageLabel");

const submitBtnJS = document.getElementById("submitBtn");

const textToUserJS = document.getElementById("textToUser");  

submitBtnJS.addEventListener("pointerup",(el) =>{
    el.preventDefault();
    let notifications ="";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(nameJS.value === null || nameJS.value.length <= 0 || isNan('nameJS') == true){
        // nameLabelJS.innerHTML = '<label for="name" id="userNameLabel" class="contact-Title">Full Name *</label>';
        // nameJS.style.border = "0.5px solid red";
        alert("Invalid name, please try again") ;
    }else{
        nameLabelJS.innerHTML = '<label for="name" id="userNameLabel" class="contact-Title">Full Name *</label>';
        nameJS.style.border = "0px solid transparent";
    }

    if(!regexEmail.test(emailJS.value)){
        // emailLabelJS.innerHTML = '<label for="email" id="userEmailLabel" class="contact-Title">Email *</label>';
        // emailJS.style.border = "0.5px solid red";
        alert("Invalid email format, please try again");
        nextStep = true
    }else{
        emailLabelJS.innerHTML = '<label for="email" id="userEmailLabel" class="contact-Title">Email *</label>';
        emailJS.style.border = "0px solid transparent";
    }

    if(phoneJS.value[0] !== "+" || phoneJS.value.length < 10 || isNan('phoneJS') == false){
        // phoneLabelJS.innerHTML = '<label for="phone" id="userPhoneLabel" class="contact-Title">Phone *</label>';
        // phoneJS.style.border = "0.5px solid red";
        alert ("Invalid phone format, please try again");
        nextStep = true
    }else{
        phoneLabelJS.innerHTML = '<label for="phone" id="userPhoneLabel" class="contact-Title">Phone *</label>';
        phoneJS.style.border = "0px solid transparent";
    }

    if(messageJS.value.length < 50){
        // messageLabelJS.innerHTML = '<label for="field" id="userMessageLabel" class="contact-Title">Message *</label>';
        // messageJS.style.border = "0.5px solid red";
        alert ("The message must be longer than 50 characters, please try again");

    }else{
        messageLabelJS.innerHTML = '<label for="field" id="userMessageLabel" class="contact-Title">Message *</label>';
        messageJS.style.border = "0px solid transparent";
    }

})
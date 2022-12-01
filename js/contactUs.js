// console.log("esto si funciona");

const nameJS = document.getElementById("userName");
const emailJS = document.getElementById("userEmail");
const phoneJS = document.getElementById("userPhone");
const messageJS = document.getElementById("userMessage");
const errorJS = document.getElementById("error-ContactUs");
errorJS.style.color = 'red';

function sendForm(){
    // console.log("enviando formulario");
    
    // const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const errorMsgs = [];

    if(nameJS.value === null || nameJS.value === "" || nameJS.value.length < 10){
        errorMsgs.push('❌ Invalid name format');
    };

    if(emailJS.value === null || emailJS.value === "" || emailJS.value.length < 15){
        errorMsgs.push('⚠️ Invalid email format');
    };

    if(phoneJS.value[0] !== "+" ){
        errorMsgs.push('☎️ Invalid phone format');
    };

    if(messageJS.value.length < 10 || messageJS.value.length > 100){
        errorMsgs.push('✍ Invalid message format');
    };

    errorJS.innerHTML = errorMsgs.join("<br>");

    if(errorMsgs.length === 1){
        alert("⚠️ Oops! Something went wrong while submitting the form.");
    }

    // let sum = errorMsgs.length;


    // console.log(`hay ${sum} errores`);
    // console.log(`hay ${messageJS.value.length} caracteres`);

    return false; 
}


//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
//         alert("❌⚠️✉ 📞☎️☎☏ ✍ 
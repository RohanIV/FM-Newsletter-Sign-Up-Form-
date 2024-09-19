const validation_text = document.querySelector(".validation-text");
const input = document.querySelector("input");
const button = document.querySelector("button");
const smlAndMedScreen = document.querySelector(".main-container");
const success = document.querySelector(".success-msg-section");
const dismissBtn = document.querySelector(".dismiss-msg");
const email = document.querySelector(".user-email");

button.addEventListener("click", function(e){
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!input.value.match(validRegex)){
         validation_text.style.display = "flex";
         input.style.color = "var(--Tomato)";
         input.style.backgroundColor = "var(--InvalidBg)";
         input.style.border = "1px solid var(--Tomato)";

    }else{
        
        smlAndMedScreen.style.display = "none";
        success.style.display = "flex";
        email.textContent = input.value;
    }
});

dismissBtn.addEventListener("click", function(){
    smlAndMedScreen.style.display = "grid";
    success.style.display = "none";
    input.value = " ";
    resetInputStyles();
   
});
["click", "input"].forEach(e => input.addEventListener(e, function(){
    resetInputStyles();
}));


function resetInputStyles(){
    validation_text.style.display = "none";
    input.style.color = "var(--Black)";
    input.style.backgroundColor = "var(--White)";
    input.style.border = "1px solid hsla(0, 0%, 0%, 0.288)";
}

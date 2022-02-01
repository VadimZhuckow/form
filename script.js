let getEmail = document.querySelector(".form__email");
let lblEmail = document.querySelector(".form__email-label");
let lblPass = document.querySelector(".form__password-label");
let important = document.querySelectorAll(".important");
let imoptant1 = document.querySelector("#important_1");
let important_2 = document.querySelector("#important_2");
let important_3 = document.querySelector("#important_3");
let getPass = document.querySelector(".form__password");
let btn = document.querySelector(".form__button");
let error_email = document.querySelector(".error_email");
let error_password = document.querySelector(".error_password");
let labelEmail = document.querySelector(".form__email-label");
let labelPass = document.querySelector(".form__password-label");
let formCheckbox = document.querySelector(".form__checkbox-mark");
let checkbox = document.querySelector(".form__checkbox");
let checkboxError = document.querySelector(".error_checkbox");


let re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
btn.addEventListener("click", () => {
    if (getEmail.value === "") {
    error_email.style = "opacity:1"; // это текс под инпутом красынй
    getEmail.style = "border-color:red"; // делает красным бордер емаил
    getPass.style = "border-color:red"; // делает красным бордер пароля
    error_password.style = "opacity:1"; // это текст под паролем красный
    lblEmail.style.color = "red";
    formCheckbox.style = "border-color:red";
    checkboxError.style = "opacity:1";
    important.forEach((i) => {
      i.style.color = "red";
    });
  }
  if (getEmail.value !== "") {
    error_email.style = "opacity:0";
    getEmail.style = "border-color:gray";
    imoptant1.style = "color:gray";
    labelEmail.style = "color:gray";
    getPass.style = "border-color:red";
    error_password.style = "opacity:1";
    important_2.style.color = "red";
    labelPass.style.color = "red";
    important_3.style.color = "red";
    formCheckbox.style = "border-color:red";
    checkboxError.style = "opacity:1";
  }
  if (getPass.value !== "") {
    error_password.style = "opacity:0";
    getPass.style = "border-color:gray";
    important_2.style = "gray";
    labelPass.style.color = "gray";
    checkboxError.style = "opacity:1";
  }
  if (document.querySelector(".form__checkbox").checked) {
    formCheckbox.style = "border-color:gray";
    important_3.style.color = "gray";
    checkboxError.style = "opacity:0";
  }
  if (getEmail.value !== re && getEmail.value !== "") {
    error_email.style = "opacity:1";
    error_email.innerHTML = "Email невалидный";
    getEmail.style = "border-color:red";
    imoptant1.style = "color:red";
    labelEmail.style = "color:red";
  }
  if (getEmail.value === re) {
    console.log("все ок");
  }
  if (getPass.value.length < 8 && getPass.value !== "") {
    error_password.style = "opacity:1";
    error_password.innerHTML = "Пароль должен содержать как минимум 8 символов";
    getPass.style = "border-color:red";
    labelPass.style.color = "red";
    important_2.style.color = "red";
  } else {
    console.log("все ок больше 8");
  }
  
});

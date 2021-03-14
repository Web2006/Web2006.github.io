let input_password = document.querySelector("#passw");

function eye(){
    if(input_password.type === "password"){
        input_password.type = "text"
    } else{
        input_password.type = "password"
    }
}

let clear_btn = document.querySelector("Reg");

let nameInp = document.querySelector("#name");
let lastNameInp = document.querySelector("#lastname");
let userNameInp = document.querySelector("#usName")
let phoneInp = document.querySelector("#phone");
let mailInp = document.querySelector("#mail");

let user = document.querySelector("#userName");

let regPopUp = document.querySelector(".reg_popup");

let openRegPopUP = document.querySelector(".page5");

openRegPopUP.addEventListener("click", function(){
    regPopUp.style.display = "block";
})

function clearInp(){

    let userNameArr = []
    userNameArr.push(userNameInp.value);
    userName.innerHTML = "#" + userNameArr[0];
    regPopUp.style.display = "none";

}


let menu_pages = document.querySelector(".pages");
let menu_aside = document.querySelector("aside");
let menuButton = document.querySelector("#open_menu");

menuButton.addEventListener("click",function(){
menu_pages.style.display = "flex";
menu_aside.style.display = "flex";
})

let closeButton = document.querySelector("#close_menu");

closeButton.addEventListener("click",function(){
    menu_pages.style.display = "none";
menu_aside.style.display = "none";
regPopUp.style.display = "none";
})


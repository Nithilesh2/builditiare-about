let cancel = document.querySelector(".btn2");
let button = document.querySelector(".btn");
let ul = document.querySelector(".navbar");



button.addEventListener("click",()=>{
    ul.style.top = "100px";
    ul.style.gap = "50px";
    button.style.left = "-700px"
    cancel.style.left = "40px";
    ul.style.transition = "1s";
    ul.style.height = "450px";
    cancel.style.transition = ".8s";
})

cancel.addEventListener("click",()=>{
    ul.style.top = "-700px";
    button.style.left = "40px";
    cancel.style.left = "-8000px";
    ul.style.gap = "0px";
    ul.style.transition = "1s";
    button.style.transition = ".8s";
    ul.style.height = "0px";
})
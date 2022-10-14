const watch = document.querySelector(".watch");
const returnTo = document.querySelector(".return");

watch.addEventListener("click", ()=>{
    right.style.transform = "translateX(0%)";
});

returnTo.addEventListener("click", ()=>{
    right.style.transform = "translateX(100%)";
});
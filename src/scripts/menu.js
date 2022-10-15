const watch = document.querySelector(".watch");
const returnTo = document.querySelector(".return");
const left = document.querySelector(".left_half");

watch.addEventListener("click", ()=>{
    right.style.display = "flex";
    left.style.display = "none";
});

returnTo.addEventListener("click", ()=>{
    right.style.display = "none";
    left.style.display = "flex";
});
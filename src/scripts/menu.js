const watch = document.querySelector(".watch");
const returnTo = document.querySelector(".return");

watch.addEventListener("click", ()=>{
    right.style.display = "flex";
});

returnTo.addEventListener("click", ()=>{
    right.style.display = "none";
});
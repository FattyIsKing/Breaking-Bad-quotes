const watch = document.querySelector(".watch");
const returnTo = document.querySelector(".return");
const left = document.querySelector(".left_half");

watch.addEventListener("click", ()=>{
    right.style.zIndex = "32";
    left.style.zIndex = "1";
    right.style.visibility = "visible";
    if(wrapperWidth < 700){
        returnTo.style.display = "block";
    } 
});

returnTo.addEventListener("click", ()=>{
    left.style.zIndex = "32";
    right.style.zIndex = "1";
    returnTo.style.display = "none";
});
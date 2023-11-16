let Veg = document.getElementById("veg");
let nonVeg = document.getElementById("non-veg")
function hideVeg(){
    Veg.style.display = "none";
    nonVeg.style.display = "flex";
}
function hideNonVeg(){
    nonVeg.style.display = "none";
    Veg.style.display = "flex";
}
function displayNormal(){
    nonVeg.style.display = "flex";
    Veg.style.display = "flex";
}
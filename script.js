//for appetizers
let Vegs = document.getElementById("vegs");
let nonVegs = document.getElementById("non-vegs");
// nonVegs.style.display = "none";
nonVegs.classList.add("hidden");
// console.log(nonVegs.classList);
function displayVegs(event) {
  var text = event.innerText || event.textContent;
  if (text == "Go To Non-Veg") {
    // Vegs.style.display = "none";
    // console.log("high");
    Vegs.classList.add("hidden");
    nonVegs.classList.remove("hidden");
    // nonVegs.style.display = "flex";
    event.innerHTML = "Go To Veg";
  } else {
    Vegs.classList.remove("hidden");
    nonVegs.classList.add("hidden");
    // Vegs.style.display = "flex";
    // nonVegs.style.display = "none";
    event.innerHTML = "Go To Non-Veg";
  }
}

//for maincourse

let Veg = document.getElementById("veg");
let nonVeg = document.getElementById("non-veg");
// nonVeg.style.display = "none";

nonVeg.classList.add("hidden")

function displayVeg(event) {
  var text = event.innerText || event.textContent;
  if (text == "Go To Non-Veg") {
    // Veg.style.display = "none";
    // nonVeg.style.display = "flex";
    Veg.classList.add("hidden");
    nonVeg.classList.remove("hidden");
    event.innerHTML = "Go To Veg";
  } else {
    // Veg.style.display = "flex";
    // nonVeg.style.display = "none";
    Veg.classList.remove("hidden");
    nonVeg.classList.add("hidden");
    event.innerHTML = "Go To Non-Veg";
  }
}

let menulist = document.querySelector(".menuList");
let menuicon = document.getElementById("menu-icon");
let dropdown = document.querySelector(".dropdown");

menulist.onclick = function () {
  dropdown.classList.toggle("open");
  const isOpen = dropdown.classList.contains("open");
};

let searchi = document.getElementById("iconsearch");
let input = document.querySelector(".tabsearch");
input.classList.remove("open");

searchi.addEventListener('click', () => {
    if(input.classList.contains("open")){
        input.classList.remove("open");
        // searchi.innerHTML = "<i class="material-icons md-12">cancel</i>";
        console.log('print')
    }
    else{
        input.classList.add("open")
        // searchi.innerHTML = "<i class="material-icons md-12">cancel</i>"; 
    }
});

//responsive cart

// let cart = document.getElementById("Cart");

// cart.addEventListener('click',() => {
//     window.open('cart.html','_blank')
// })

// let logo = document.getElementById("goHome");

// logo.addEventListener('click',() => {
//     window.open('index.html','_blank');
// });

let notif = document.getElementById("notification");
let tocart = document.getElementById("addToCart");

notif.style.display = "none";

tocart.addEventListener('click',() => {
    console.log('print')
})

    




// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav div ul li a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset+height){
//             navlinks.forEach(links => {
//                 links.classlist.remove('active');
//                 document.querySelector('header nav ul li a [href*=' + id + ']').classList.add('active');
//             })
//         }
//     })
// }

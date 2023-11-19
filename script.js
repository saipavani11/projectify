//for appetizers
let Vegs = document.getElementById("vegs");
let nonVegs = document.getElementById("non-vegs");
nonVegs.style.display = "none";

function displayVegs(event){
    var text = event.innerText || event.textContent;
    if(text == 'Go To Non-Veg'){
        Vegs.style.display = "none";
        nonVegs.style.display = "flex";
        event.innerHTML = 'Go To Veg';

    }else{
        Vegs.style.display = "flex";
        nonVegs.style.display = "none";
        event.innerHTML = 'Go To Non-Veg';
    }
}

//for maincourse

let Veg = document.getElementById("veg");
let nonVeg = document.getElementById("non-veg");
nonVeg.style.display = "none";

function displayVeg(event){
    var text = event.innerText || event.textContent;
    if(text == 'Go To Non-Veg'){
        Veg.style.display = "none";
        nonVeg.style.display = "flex";
        event.innerHTML = 'Go To Veg';

    }else{
        Veg.style.display = "flex";
        nonVeg.style.display = "none";
        event.innerHTML = 'Go To Non-Veg';
    }
}


// // let sections = document.querySelectorAll('section');
// // let navlinks = document.querySelectorAll('header nav div a');

// // window.onscroll = () => {
// //     sections.forEach(sec => {
// //         let top = window.scrollY;
// //         let offset = sec.offsetTop;
// //         let height = sec.offsetHeight;
// //         let id = sec.getAttribute('id');

// //         if(top >= offset && top < offset+height){
// //             navlinks.forEach(links => {
// //                 links.classlist.remove('active');
// //                 document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
// //             })
// //         }
// //     })
// // }
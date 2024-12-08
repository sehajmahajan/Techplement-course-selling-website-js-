const categoriesMenu = document.querySelector(".categoriesMenu");
const categoriesExpansion = document.querySelector(".categoriesExpansion");

const buy = document.querySelectorAll(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Slider Functionality
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const slidesContainer = document.querySelector(".sliderWrapper");

// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const navMenu = document.querySelector('.nav-menu ul');

// hamburgerMenu.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });



// Show categories expansion when hovering over categories menu
categoriesMenu.addEventListener("mouseenter", () => {
    categoriesExpansion.style.display = "block"; // show the categories expansion
});
categoriesMenu.addEventListener("mouseleave", () => {
    categoriesExpansion.style.display = "none"; // Hide the categories expansion
});

categoriesExpansion.addEventListener("mouseenter", function () {
    categoriesExpansion.style.display = "block"; // Keep visible when hovering inside
});

let currentIndex = 0;

// Function to update slide position
function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Update the transform property to move slides
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function findPosition(obj) {
    let currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

// Event listeners for buttons
rightBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

leftBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

// Initialize slider
showSlide(currentIndex);

// Hide categories expansion when mouse leaves the dropdown
categoriesExpansion.addEventListener("mouseleave", function () {
    categoriesExpansion.style.display = "none"; // Hide the categories expansion
});

buy.forEach(buy =>{
    buy.addEventListener("click",() =>{
        payment.style.display = "flex";
        window.scrollTo(0, findPosition(payment));
});
});

close.addEventListener("click",()=>{
    payment.style.display = "none"
});


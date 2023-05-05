// Typing a name 
let i = 0;
let myName = "Elvira Dolynna";

function typing() {
  if(i < myName.length){
    document.getElementById("name").innerHTML += myName.charAt(i);
    i++;
    setTimeout(typing, 130);
  }
}
typing();

// Mobile menu
const mobileMenuBtn = document.querySelector(".home__hamburger");
const mobileMenu = document.querySelector(".home__mobile-menu");

mobileMenuBtn.addEventListener("click", function() {
  mobileMenuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

mobileMenu.addEventListener("click", function() {
  mobileMenuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

// Remove animation on click 
function arrowClicked() {
  let arrow = document.querySelector(".scroll-down");
  arrow.classList.add("clicked");

}

// Slider for certifications 
var swiper = new Swiper(".certification-swiper", {
  slidesPerView: "auto",
  spaceBetween: 18,
});

// Loader on contact button 
const textArea = document.getElementById("textsend");
const contactButton = document.querySelector(".contacts .send");
const contactButtonLoader = document.querySelector(".contacts .lds-ellipsis");

contactButton.addEventListener("click", function() {
  if(textArea.value === "") { 
    contactButtonLoader.style.display = "none";
  } else { 
    contactButtonLoader.style.display = "inline-block";
    contactButton.style.display = "none";
  }
});
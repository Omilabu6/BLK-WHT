
const fadeUp = document.getElementById('fadeUp');
fadeUp.classList.add('animate__animated', 'animate__fadeInUp');
const fadeLeft = document.getElementById('fadeLeft')

fadeLeft.classList.add('animate__animated', 'animate__fadeInLeft');
const fadeRight = document.getElementById('fadeRight')
fadeRight.classList.add('animate__animated', 'animate__fadeInRight');


  // Select all elements with the class 'SlideUp' that need to be animated
const animateItems = document.querySelectorAll('.fadeIn');

// Define options for the Intersection Observer
const observerOptions = {
    root: null, // Use the browser's viewport as the root (default behavior)
    threshold: 0.2, // Trigger when at least 20% of the element is visible
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
    // 'entries' is an array of elements being observed with their visibility status
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // If the element is in view:
            // 1. Add Animate.css animation classes to the element
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
            // 2. Set opacity to 1 to make the element visible
            entry.target.style.opacity = 1;
        } else {
            // If the element is out of view:
            // 1. Remove the Animate.css animation classes
            entry.target.classList.remove('animate__animated', 'animate__fadeIn');
            // 2. Reset opacity to 0 to hide the element
            entry.target.style.opacity = 0;
        }
    });
}, observerOptions);

// Attach the Intersection Observer to each element in 'animateItems'
animateItems.forEach((item) => {
    // Set initial opacity to 0 (hidden by default)
    item.style.opacity = 0;
    // Observe the element
    observer.observe(item);
});



const SlideUp = document.querySelectorAll('.SlideUp');

// Define options for the Intersection Observer
const SlideUpobserverOptions = {
    root: null, // Use the browser's viewport as the root (default behavior)
    threshold: 0.2, // Trigger when at least 20% of the element is visible
};

// Create a new Intersection Observer instance
const SlideUpobserver = new IntersectionObserver((entries) => {
    // 'entries' is an array of elements being observed with their visibility status
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // If the element is in view:
            // 1. Add Animate.css animation classes to the element
            entry.target.classList.add('animate__animated', 'animate__slideInDown');
            // 2. Set opacity to 1 to make the element visible
            entry.target.style.opacity = 1;
        } else {
            // If the element is out of view:
            // 1. Remove the Animate.css animation classes
            entry.target.classList.remove('animate__animated', 'animate__slideInDown');
            // 2. Reset opacity to 0 to hide the element
            entry.target.style.opacity = 0;
        }
    });
}, observerOptions);

// Attach the Intersection Observer to each element in 'animateItems'
SlideUp.forEach((item) => {
    // Set initial opacity to 0 (hidden by default)
    item.style.opacity = 0;
    // Observe the element
    observer.observe(item);
});

function Shownav(){
  const  Shownav =document.getElementById('Shownav')
  Shownav.style.display = 'block'
  Shownav.classList.add('ComeIn')
}
function Hidenav(){
  const Hidenav =document.getElementById('Shownav')
    Hidenav.style.display = 'none'
}
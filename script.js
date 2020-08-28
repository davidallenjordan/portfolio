// About page, heading and body slide in from left (maybe button too)
// change html to point to mobile image path



// Download Resume Button

// Stretch Goals:
// TypeWriter Effect for Web Developer



// mobile nav.
// on click of li with <a>, reveal (slide?) other li elements

// App Name Space
const app = () => {}


// Mobile Nav Menu
app.mobileNav = () => {
  $('.mobileNav').on('click', () => {
    $('.mobileDropDown').toggleClass('toggleDropDown');
  })
}

// on scroll down, slide in element from left

$(document).ready( () => {
  app.mobileNav();
})
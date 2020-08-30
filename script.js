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

// About Me slide in from left animation, CSS in _animations
app.aboutSlideIn = () => {
  $('#slideFromLeft').addClass('hideBio');

  $(window).scroll( () => {

    const yScrollPosition = window.pageYOffset;
    let scrollPosition = 600;

    if ($(window).width() <= 526) {
      scrollPosition = 300;
    }
    
    if(yScrollPosition > scrollPosition) {
      $('#slideFromLeft').addClass('aboutMeSlideIn')
    }
  })
}

app.toolkitSlideUp = () => {
  $('#toolkitAnimate').addClass('hideToolkit');
  
  $(window).scroll( () => {
    const yScrollPosition = window.pageYOffset;
    let scrollPosition;
    if ($(window).width() >= 995 || $(window).width() <= 526) {
      scrollPosition = 3200;
    } else if ($(window).width() <= 995 && ($(window).width() >= 715)) {
      scrollPosition = 4100;
    } else {
      scrollPosition = 3600;
    }

    if (yScrollPosition > scrollPosition) {
      $('#toolkitAnimate').addClass('toolkitSlideUp');
    }

  })
}


$(document).ready( () => {
  app.mobileNav();
  app.aboutSlideIn();
  app.toolkitSlideUp();
})
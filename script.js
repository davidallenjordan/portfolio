
// App Name Space
const app = () => {}

// Mobile Nav Menu
app.mobileNav = () => {
  $('.mobileNav').on('click', () => {
    $('.mobileDropDown').toggleClass('toggleDropDown');
  })
}

// Type Writer Effect ----->

app.typeWriterEffect = () => {
  const typedTextSpan = document.querySelector('.typedText');
  const cursorSpan = document.querySelector('.cursor');
  
  const textArray = [
    'Web Developer', 
    'Creator', 
    'Problem Solver', 
    'Designer', 
  ];
  const typingDelay = 125;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove('typing');
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      if (cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove('typing');
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay);
    }
  }
  
  setTimeout(type, newTextDelay);
}
// End of Type Writer Effect --->

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
  app.typeWriterEffect();
})
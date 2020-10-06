
// Hello! I will be converting the remaining jQuery here to plain JavaScript soon :)

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
  const elDesktop = 600;
  const elMobile = 300;
  const widthMobile = 526;

  $('#slideFromLeft').addClass('hideBio');

  $(window).scroll( () => {
    const yScrollPosition = window.pageYOffset;
    let scrollPosition = elDesktop;

    if ($(window).width() <= widthMobile) {
      scrollPosition = elMobile;
    }
    
    if(yScrollPosition > scrollPosition) {
      $('#slideFromLeft').addClass('aboutMeSlideIn')
    }
  })
}

app.toolkitSlideUp = () => {
  const widthDesktop = 995;
  const widthBetween = 715;
  const widthMobile = 526;
  const lrgAndSmlScreens = 3200;
  const medScreens = 4100;
  const otherScreens = 3600;

  $('#toolkitAnimate').addClass('hideToolkit');
  
  $(window).scroll( () => {
    const yScrollPosition = window.pageYOffset;
    let scrollPosition;
    if ($(window).width() >= widthDesktop || $(window).width() <= widthMobile) {
      scrollPosition = lrgAndSmlScreens;
    } else if ($(window).width() <= widthDesktop && ($(window).width() >= widthBetween)) {
      scrollPosition = medScreens;
    } else {
      scrollPosition = otherScreens;
    }

    if (yScrollPosition > scrollPosition) {
      $('#toolkitAnimate').addClass('toolkitSlideUp');
    }

  })
}

// Intersection Observer Saving My Life!!
// Projects Slide In
app.projectsAnimation = () => {
  let target = document.querySelectorAll('.projectContainer');
  let options = {
    root: null,
    rootMargin: '-100px',
    threshhold: 1
  };
  let int = 0;

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        target[int].classList.add('projectAnimate');
        int++;

        observer.unobserve(entry.target)
      }
    })
  }, options);
  
  
  target.forEach(thing => {
    observer.observe(thing);
  });
}

$(document).ready( () => {
  app.mobileNav();
  app.aboutSlideIn();
  app.toolkitSlideUp();
  app.typeWriterEffect();
  app.projectsAnimation();
})

// Hello! Thanks for taking a look at my code. I've just finished making my slide animations modular using the intersection observer. I've also converted my jQuery to plain js :)

// App Name Space
const app = () => {}

app.mobileNav = () => {
  const nav = document.querySelector('.mobileNav');
  const navItem = document.querySelectorAll('.dropDownItem');
  
  function dropDown() {
    let int = 0;
    navItem.forEach(el => {
      navItem[int].classList.toggle('toggleDropDown');
      int++
    })
  }
  nav.addEventListener('click', dropDown);
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


// About Me Animation Settings
app.aboutAnimate = () => {
  const target = 'bioContainer';
  const animationCSS = 'aboutReveal';
  const hideCSS = 'aboutHide';
  const hideEl = document.querySelector(`.${target}`);

  hideEl.classList.add(`${hideCSS}`);
  app.elementObserver(target, animationCSS);
}

// Projects Animation Settings
app.projectAnimate = () => {
  const target = 'projectContainer';
  const animationCSS = 'projectReveal';
  const hideCSS = 'projectsHide';
  const hideEl = document.querySelectorAll(`.${target}`);
  let int = 0;

  hideEl.forEach(el => {
    hideEl[int].classList.add(`${hideCSS}`);
    int++
  })

  app.elementObserver(target, animationCSS);
}

// ToolKit Animation Settings
app.toolkitAnimate = () => {
  const target = 'toolkitContainer';
  const animationCSS = 'toolkitReveal';
  const hideCSS = 'toolkitHide';
  const hideEl = document.querySelector(`.${target}`);

  hideEl.classList.add(`${hideCSS}`);
  app.elementObserver(target, animationCSS);
}

// Intersection Observer Saving My Life!!
// Element Observer - Adds class when element intersects viewport
app.elementObserver = (currentTarget, animationClass) => {
  let target = document.querySelectorAll(`.${currentTarget}`);
  let options = {
    root: null,
    rootMargin: '-155px',
    threshhold: 1
  };
  let int = 0;
  
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        target[int].classList.add(`${animationClass}`);
        int++;
        
        observer.unobserve(entry.target)
      }
    })
  }, options);
  
  target.forEach(thing => {
    observer.observe(thing);
  });
}

// Initializes Animations - not necessary but cleaner
app.animationInit = () => {
app.aboutAnimate();
app.projectAnimate();
app.toolkitAnimate();
}

// Document Loaded - Initialize JS
document.addEventListener('DOMContentLoaded', function() {
  app.mobileNav();
  app.typeWriterEffect();
  app.animationInit();
})
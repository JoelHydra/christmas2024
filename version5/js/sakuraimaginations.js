document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next');
    const previousButton = document.querySelector('.previous');
    const slideshow = document.querySelector('.slideshow'); // Select the slideshow container
    const children = slideshow.children;
    let currentPosition = 0; // Start at the first content block
  
    // Next button event listener
    nextButton.addEventListener('click', () => {
      currentPosition = (currentPosition + 1)
      if (currentPosition === 9) {
        currentPosition = 0;
        }
      console.log(currentPosition)
      for (let i = 0; i < children.length; i++) {
        if (i === currentPosition) {
          children[i].classList.add('active'); // Add 'active' to the current position
        } else {
            children[i].classList.remove('active'); // Remove 'active' from other items
        }
      }
    });
  
    // Previous button event listener
    previousButton.addEventListener('click', () => {
      currentPosition = (currentPosition - 1)
      if (currentPosition === -1) {
        currentPosition = 8;
        }
      console.log(currentPosition)
      for (let i = 0; i < children.length; i++) {
        if (i === currentPosition) {
          children[i].classList.add('active'); // Add 'active' to the current position
        } else {
            children[i].classList.remove('active'); // Remove 'active' from other items
        }
      }
    });
});
  
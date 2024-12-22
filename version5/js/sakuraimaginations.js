document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next');
    const previousButton = document.querySelector('.previous');
    const slideshow = document.querySelector('.slideshow');
    const children = slideshow.children;
    let currentPosition = 0;
  
    nextButton.addEventListener('click', () => {
      currentPosition = (currentPosition + 1)
      if (currentPosition === 9) {
        currentPosition = 0;
        }
      console.log(currentPosition)
      for (let i = 0; i < children.length; i++) {
        if (i === currentPosition) {
          children[i].classList.add('active');
        } else {
            children[i].classList.remove('active');
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

    const submit = document.querySelector('.submit');
    const passwordInput = document.querySelector('.password-input');
      const emailInput = document.querySelector('.email-input');

submit.addEventListener('click', () => {
    if (emailInput.value === "demitiri@gmail.com" && passwordInput.value === "Lanehtor384") {
        window.location.href = 'goodending.html';
    } else {
        console.log("incorrect");
    }
});
});
  

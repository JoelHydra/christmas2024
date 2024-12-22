document.addEventListener('DOMContentLoaded', function () {
    // Select the element with the class or ID 'close'
    const close = document.querySelector('.close'); // Adjust selector as needed
    const minimize = document.querySelector('.minimize');
    const link2 = document.querySelector('#notepad-link'); // Adjust selector as needed
    const changed = "The link has been changed!"; // Define the variable
    const notepadImage = document.getElementById('notepad-image');
    const notepadText = document.getElementById('notepad-text');

    // Check if the element exists to avoid runtime errors
    if (close) {
        close.addEventListener('click', () => {
            // Check if the clicked element has the 'close' class
            if (close.classList.contains('close')) {
                link2.href = ""; // Update the link
                notepadApp2.style.display = "none"
                notepadappBar.style.backgroundColor = 'transparent';
                notepadappBar.style.width = '0px';
                notepadappBar.style.height = '0px';
                notepadApp.classList.remove('selected-bg');
                notepadappSelected.classList.remove('selected-border');
                notepadappBar.classList.remove('targeted');
                notepadappBar.classList.remove('active');
                console.log(changed); // Log the message
            }
            if (googlechromeappBar.classList.contains('active')) {
                console.log('Element has the "active" class');
                googlechromeappBar.style.backgroundColor = 'deepskyblue';
                googlechromeappBar.style.width = '15px';
                googlechromeappBar.style.height = '3.5px';
                googlechromeApp.classList.add('selected-bg');
                googlechromeappSelected.classList.add('selected-border');
            } else {
                console.log('Element does not have the "active" class');
            }
        });
    }

    if (minimize) {
        minimize.addEventListener('click', () => {
            if (minimize.classList.contains('minimize')) {
                notepadApp2.style.display = "none"
                notepadappBar.style.backgroundColor = 'rgb(175, 175, 175)';
                notepadappBar.style.width = '6.5px';
                notepadappBar.style.height = '3.5px';
                notepadApp.classList.remove('selected-bg');
                notepadappSelected.classList.remove('selected-border');
                notepadappBar.classList.remove('targeted');
                notepadApp2.style.zIndex = '0';
            }
        });
    }
});


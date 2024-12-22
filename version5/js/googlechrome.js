document.addEventListener('DOMContentLoaded', function () {
    // Select the element with the class or ID 'close'
    const close2 = document.querySelector('.close2'); // Adjust selector as needed
    const minimize2 = document.querySelector('.minimize2');
    const link3 = document.querySelector('#googlechrome-link'); // Adjust selector as needed
    const changed = "The link has been changed!"; // Define the variable
    const sakuraimaginations = document.getElementById('site-search');
    const sakuraimaginationsbody = document.querySelector('.sakura-imaginations-body');

    // Check if the element exists to avoid runtime errors
    if (close2) {
        close2.addEventListener('click', () => {
            // Check if the clicked element has the 'close' class
            if (close2.classList.contains('close2')) {
                link3.href = ""; // Update the link
                googleChrome2.style.display = "none"
                googlechromeappBar.style.backgroundColor = 'transparent';
                googlechromeappBar.style.width = '0px';
                googlechromeappBar.style.height = '0px';
                googlechromeApp.classList.remove('selected-bg');
                googlechromeappSelected.classList.remove('selected-border');
                googlechromeappBar.classList.remove('targeted');
                googlechromeappBar.classList.remove('active');
                console.log(changed); // Log the message
            }
            if (notepadappBar.classList.contains('active')) {
                console.log('Element has the "active" class');
                notepadappBar.style.backgroundColor = 'deepskyblue';
                notepadappBar.style.width = '15px';
                notepadappBar.style.height = '3.5px';
                notepadApp.classList.add('selected-bg');
                notepadappSelected.classList.add('selected-border');
            } else {
                console.log('Element does not have the "active" class');
            }
        });
    }

    if (minimize2) {
        minimize2.addEventListener('click', () => {
            if (minimize2.classList.contains('minimize2')) {
                googlechromeappBar.style.backgroundColor = 'rgb(175, 175, 175)';
                googlechromeappBar.style.width = '6.5px';
                googlechromeappBar.style.height = '3.5px';
                googlechromeApp.classList.remove('selected-bg');
                googlechromeappSelected.classList.remove('selected-border');
                googlechromeappBar.classList.remove('targeted');
                googleChrome2.style.zIndex = '0';
                googleChrome2.style.display = "none";
            }
        });
    }

    sakuraimaginations.addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            const value = sakuraimaginations.value;
            const link4 = document.querySelector('.sakura-imaginations-link')
            const archivescontent = document.querySelector('.archives-content');

            if (value === "https://sakuraimaginationsmoonlitsolutions.com") {
                console.log("The value is equal to 'something'.");
                link4.href = "css/version5(sakura-imaginations).css";
                sakuraimaginationsbody.style.display = "flex";
                archivescontent.style.display = 'none';
            } else {
                console.log("The value is not equal to 'something'.");
                sakuraimaginationsbody.style.display = "none";
            }
        }
    });
});
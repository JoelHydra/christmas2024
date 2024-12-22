document.addEventListener('DOMContentLoaded', function () {
    const close = document.querySelector('.close');
    const minimize = document.querySelector('.minimize');
    const link2 = document.querySelector('#notepad-link');
    const changed = "The link has been changed!";
    const notepadImage = document.getElementById('notepad-image');
    const notepadText = document.getElementById('notepad-text');

    if (close) {
        close.addEventListener('click', () => {
            if (close.classList.contains('close')) {
                notepadApp2.style.display = "none"
                notepadappBar.style.backgroundColor = 'transparent';
                notepadappBar.style.width = '0px';
                notepadappBar.style.height = '0px';
                notepadApp.classList.remove('selected-bg');
                notepadappSelected.classList.remove('selected-border');
                notepadappBar.classList.remove('targeted');
                notepadappBar.classList.remove('active');
                console.log(changed);
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


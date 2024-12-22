const notepadApp = document.querySelector('.notepad-app');
const googlechromeApp = document.querySelector('.google-chrome-app');
const notepadappSelected = notepadApp.children[0];
const notepadappBar = notepadApp.children[2];
const googlechromeappSelected = googlechromeApp.children[0];
const googlechromeappBar = googlechromeApp.children[3];
const notepadApp2 = document.querySelector('.notepad-opened');
const googleChrome2 = document.querySelector('.googlechrome-opened');
const link = document.getElementById('notepad-link');
const link3 = document.getElementById('googlechrome-link');
const link2 = document.querySelector('#notepad-link');

document.addEventListener('DOMContentLoaded', function() {
    notepadApp.addEventListener('click', () => {
        console.log(notepadApp.children)
        notepadappBar.classList.add('active');
        notepadappBar.classList.add('targeted');
        notepadappBar.style.backgroundColor = 'deepskyblue';
        notepadappBar.style.width = '15px';
        notepadappBar.style.height = '3.5px';
        notepadApp.classList.add('selected-bg');
        notepadappSelected.classList.add('selected-border');
        notepadApp2.style.zIndex = '999';
        notepadApp2.style.display = "block"
        if (googlechromeappBar.classList.contains('targeted')) {
            console.log('Element has the "targeted" class');
            googlechromeappBar.style.backgroundColor = 'rgb(175, 175, 175)';
            googlechromeappBar.style.width = '6.5px';
            googlechromeappBar.style.height = '3.5px';
            googlechromeApp.classList.remove('selected-bg');
            googlechromeappSelected.classList.remove('selected-border');
            googlechromeappBar.classList.remove('targeted');
            googleChrome2.style.zIndex = '0';
        } else {
            console.log('Element does not have the "active" class');
        }
    });
    
    googlechromeApp.addEventListener('click', () => {
        googlechromeappBar.classList.add('active');
        googlechromeappBar.classList.add('targeted');
        googlechromeappBar.style.backgroundColor = 'deepskyblue';
        googlechromeappBar.style.width = '15px';
        googlechromeappBar.style.height = '3.5px';
        googlechromeApp.classList.add('selected-bg');
        googlechromeappSelected.classList.add('selected-border');
        link3.href = "css/version5(google-chrome).css";
        googleChrome2.style.display = "block"
        if (googlechromeappBar.classList.contains('targeted')) {
            console.log('Element has the "targeted" class');
            notepadappBar.style.backgroundColor = 'rgb(175, 175, 175)';
            notepadappBar.style.width = '6.5px';
            notepadappBar.style.height = '3.5px';
            notepadApp.classList.remove('selected-bg');
            notepadappSelected.classList.remove('selected-border');
            notepadappBar.classList.remove('targeted');
            notepadApp2.style.zIndex = '0';
        } else {
            console.log('Element does not have the "active" class');
        }
    });
});


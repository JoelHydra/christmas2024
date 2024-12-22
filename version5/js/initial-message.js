document.addEventListener('DOMContentLoaded', function () {
    const goBack = document.querySelector('.go-back');
    const goNext = document.querySelector('.go-next');
    const message999 = document.querySelector('.message-2');
    const message777 = document.querySelector('.message-3');
    const laptopContainer = document.querySelector('.laptop-container');
    
    message999.style.display = "flex"
    message777.style.display = "none";

    goBack.addEventListener('click', () => {
        if (message999.style.display === "flex") {
            console.log("nothing");
        } else if (message777.style.display === "flex") {
            message777.style.display = "none";
            message999.style.display = "flex";
        }
    });

    goNext.addEventListener('click', () => {
        if (message777.style.display === "flex") {
            message777.style.display = "none";
            window.location.href = 'version5.html';
        } else if (message999.style.display === "flex") {
            message777.style.display = "flex";
            message999.style.display = "none";
        }
    });
});
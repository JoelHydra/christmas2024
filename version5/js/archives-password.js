document.addEventListener('DOMContentLoaded', function () {
    const archivespassword = document.querySelector('.archives-password');
    const sakuraimaginationsbody = document.querySelector('.sakura-imaginations-body');
    const sakuraimaginations = document.getElementById('site-search');

    if (!archivespassword || !sakuraimaginationsbody) {
        console.error('Required elements not found in the DOM');
        return;
    }

    archivespassword.addEventListener("keypress", (event2) => {
        const value2 = archivespassword.value;
        const archivescontent = document.querySelector('.archives-content');
        if (event2.key === "Enter") {
            if (value2 === "Julius Caesar") {
                sakuraimaginationsbody.style.display = "none";
                sakuraimaginations.value = "https://sakuraimaginationsmoonlitsolutions/archives.com"
                archivescontent.style.display = "flex";
                console.log("done");
            } else {
                archivespassword.value = "WRONG!";
                setTimeout(() => {
                    archivespassword.value = ""
                }, 2000);
            }
        }
    });
});


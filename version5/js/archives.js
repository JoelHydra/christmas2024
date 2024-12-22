document.addEventListener('DOMContentLoaded', function() {
    const entry1 = document.querySelector('.entry-1');
    const entry2 = document.querySelector('.entry-2');
    const entry3 = document.querySelector('.entry-3');
    const entry4 = document.querySelector('.entry-4');
    const entry5 = document.querySelector('.entry-5');
    const entry6 = document.querySelector('.entry-6');
    const entry7 = document.querySelector('.entry-7');
    const entry8 = document.querySelector('.entry-8');
    const entry9 = document.querySelector('.entry-9');
    const entry10 = document.querySelector('.entry-10');
    const entry11 = document.querySelector('.entry-11');
    const cleansingfirmament = document.querySelector('.cleansing-firmament');
    const securitybreached = document.querySelector('.security-breached');
    const journalentry4 = document.querySelector('.journal-entry-4');
    const journalentry3 = document.querySelector('.journal-entry-3');
    const cleansingsoul = document.querySelector('.cleansing-soul');
    const journalentry2 = document.querySelector('.journal-entry-2');
    const abysimcompendium = document.querySelector('.Abysim-Compendium');
    const insurgance = document.querySelector('.insurgance');
    const journalentry1 = document.querySelector('.journal-entry-1');
    const deorcdimetiriabysim = document.querySelector('.deorc-dimetiri-abysim');
    const falyarothenal = document.querySelector('.Falya-Rothenal');
    const archivesscroll = document.querySelector('.archives-scroll');
    const archivestitle = document.querySelector('.archives-title')
    const archivesdatabase = document.querySelector('.archives-database');
    const archivesback = document.querySelector('.archives-back')
    const archivescontent = document.querySelector('.archives-content');
    

    archivesback.addEventListener('click', function() {
        sakuraimaginationsbody.style.display = "flex";
        sakuraimaginations.value = "https://sakuraimaginationsmoonlitsolutions.com"
        archivescontent.style.display = "none";
    });
    archivestitle.addEventListener('click', function() {
        const entries = archivesdatabase.children;
        for (let i = 0; i < entries.length; i++) {
          entries[i].style.display = 'none';
        }
        archivesscroll.style.display = 'flex';
    });
    entry1.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        cleansingfirmament.style.display = 'flex';
    });
    entry2.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        securitybreached.style.display = 'flex';
    });
    entry3.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        journalentry4.style.display = 'flex';
    });
    entry4.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        journalentry3.style.display = 'flex';
    });
    entry5.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        cleansingsoul.style.display = 'flex';
    });
    entry6.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        journalentry2.style.display = 'flex';
    });
    entry7.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        abysimcompendium.style.display = 'flex';
    });
    entry8.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        insurgance.style.display = 'flex';
    });
    entry9.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        journalentry1.style.display = 'flex';
    });
    entry10.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        deorcdimetiriabysim.style.display = 'flex';
    });
    entry11.addEventListener('click', function() {
        archivesscroll.style.display = 'none';
        falyarothenal.style.display = 'flex';
    });

    const sakuraimaginations = document.getElementById('site-search');
    const sakuraimaginationsbody = document.querySelector('.sakura-imaginations-body');

    sakuraimaginations.addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            const value = sakuraimaginations.value;
            const link4 = document.querySelector('.sakura-imaginations-link')

            if (value === "https://sakuraimaginationsmoonlitsolutions/archives.com") {
                console.log("The value is equal to 'something'.");
                link4.href = "css/version5(sakura-imaginations).css";
                sakuraimaginationsbody.style.display = "none";
                archivescontent.style.display = 'flex';
            } else {
                console.log("The value is not equal to 'something'.");
                archivescontent.style.display = 'none';
            }
        }
    });
});
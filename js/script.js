// file "script.js"
const header = document.querySelector('header');
const navbarLinks = document.querySelectorAll('nav a');

function changeHeaderColor() {
    // ... (kode sebelumnya untuk mengubah warna header)
}

navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah halaman pindah ke anchor link
        const targetSection = document.querySelector(link.getAttribute('href'));
        const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;

        window.scroll({
            top: topOffset,
            behavior: 'smooth'
        });
    });
});

setInterval(changeHeaderColor, 2000); // Ganti warna header setiap 2 detik


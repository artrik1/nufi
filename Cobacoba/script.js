document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const backgroundMusic = document.getElementById('backgroundMusic');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentSlide);

    // Ganti slide setiap 5 detik
    setInterval(nextSlide, 5000);

    // Coba putar musik secara otomatis
    backgroundMusic.play().catch(error => {
        console.log("Autoplay failed:", error);
        // Jika autoplay gagal (misalnya karena kebijakan browser), tambahkan pesan atau tombol untuk memutar musik
        alert("Klik di mana saja di halaman untuk memutar musik!");
        document.body.addEventListener('click', () => {
            backgroundMusic.play();
        }, { once: true });
    });
});

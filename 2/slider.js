document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // İlk slaydı göster
    slides[currentSlide].classList.add('active');

    function showSlide(n) {
        // Mevcut slaydı gizle
        slides[currentSlide].classList.remove('active');
        // Yeni slaydı göster
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Önceki ve sonraki slaytları göstermek için işlevler
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPrevSlide() {
        showSlide(currentSlide - 1);
    }

    // İleri ve geri butonlarını belirleme
    const prevButton = document.createElement('div');
    prevButton.textContent = '❮'; // Önceki işareti
    prevButton.classList.add('prev');
    prevButton.addEventListener('click', showPrevSlide);

    const nextButton = document.createElement('div');
    nextButton.textContent = '❯'; // Sonraki işareti
    nextButton.classList.add('next');
    nextButton.addEventListener('click', showNextSlide);

    // Slider konteynırına butonları ekleme
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);

    // Otomatik slayt geçişi
    setInterval(showNextSlide, 3000); // 3 saniyede bir otomatik geçiş
});

document.addEventListener('DOMContentLoaded', function() {
    // İletişim butonunu seç
    const emirkanContactButton = document.getElementById('emirkan-contact');

    // İletişim butonuna tıklanma olayını dinle
    emirkanContactButton.addEventListener('click', function() {
        // Yönlendirme URL'si (Emirkan'ın Instagram profili)
        const instagramUrl = 'https://www.instagram.com/mertcbci/';

        // Yeni pencerede URL'yi aç
        window.open(instagramUrl, '_blank');
    });
});

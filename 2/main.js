// Fonksiyonu genelleştirilmiş olarak tanımla
const showSocial = (toggleCard, socialCard) => {
    const toggleElements = document.querySelectorAll(`.${toggleCard}`);
    const socialElements = document.querySelectorAll(`.${socialCard}`);

    toggleElements.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            const social = socialElements[index];

            // Eğer animation sınıfı varsa, down-animation sınıfını ekleriz
            if (social.classList.contains('animation')) {
                social.classList.add('down-animation');

                // 1 saniye sonra down-animation sınıfını kaldırırız
                setTimeout(() => {
                    social.classList.remove('down-animation');
                }, 1000);
            }

            // card__social sınıfına sahip div'e animation sınıfını ekleriz
            social.classList.toggle('animation');
        });
    });
};

// Her kart için showSocial fonksiyonunu çağır
showSocial('card__social-toggle', 'card__social');

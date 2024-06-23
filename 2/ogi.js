
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatbox = document.getElementById('chatbox');

    if (userInput.trim() !== '') {
        // Kullanıcının mesajını chatbox'a ekleyelim
        var userMessageElement = document.createElement('p');
        userMessageElement.innerHTML = '<strong>Siz:</strong> ' + userInput;
        chatbox.appendChild(userMessageElement);

        // Chatbox'u en son mesajla aşağı kaydıralım
        chatbox.scrollTop = chatbox.scrollHeight;

        // Chatbot'un yanıtını simüle edelim (Ogi adında basit bir chatbot)
        simulateOgiResponse(userInput);

        // Kullanıcı giriş alanını temizleyelim
        document.getElementById('userInput').value = '';
    }
}

function simulateOgiResponse(userInput) {
    setTimeout(function() {
        var chatbox = document.getElementById('chatbox');

        // Chatbot'un yanıtını chatbox'a ekleyelim
        var botResponseElement = document.createElement('p');
        botResponseElement.innerHTML = '<strong>Ogi:</strong> ';

        // Kullanıcı girişine göre farklı yanıtlar üretelim
        if (userInput.toLowerCase().includes('merhaba') || userInput.toLowerCase().includes('selam')) {
            botResponseElement.innerHTML += 'Merhaba!';
        } else if (userInput.toLowerCase().includes('nasılsın')) {
            botResponseElement.innerHTML += 'Ben bir chatbot olduğum için her zaman iyiyim, teşekkür ederim!';
        } else if (userInput.toLowerCase().includes('indirim')) {
            botResponseElement.innerHTML += 'Şu anda indirimde olan ürünleri görmek için web sitemizi ziyaret edebilirsiniz.';
            botResponseElement.innerHTML += '<br><a href="https://www.eticaretsitemiz.com/indirimler">İndirimleri Görüntüle</a>';

        } else {
            botResponseElement.innerHTML += 'Üzgünüm, şu an için size yardımcı olamıyorum. Sosyal medya hesaplarımızdan bize ulaşabilirsiniz. ';


            var socialMediaLinks = document.createElement('div');
            socialMediaLinks.innerHTML = '' +
                                         '<ul>' +
                                         '<li><a href="https://www.instagram.com/mertcbci/"><i class=""></i>İnstgram -Mert Cebeci </a></li>' +
                                         '<li><a href="https://www.instagram.com/emirkanycbs/"><i class=""></i>İnstgram - Emirkan Yücebaş </a></li>' +
                                         '<li><a href="https://www.instagram.com/denxzzzz/"><i class=></i>İnstgram - Civan Ekinci </a></li>' +
                                         '<li><a href="https://www.instagram.com/efekerem_drdl/"><i class=</i>İnstgram - Efe Kerem Darendeli </a></li>' +
                                         '</ul>';
            chatbox.appendChild(socialMediaLinks);
        }

        chatbox.appendChild(botResponseElement);

        // Chatbox'u en son mesajla aşağı kaydıralım
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000); // 1 saniye sonra Ogi'nin yanıtını simüle edelim
}

// Enter tuşuna basıldığında da sendMessage() fonksiyonunu çağıralım
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

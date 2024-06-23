function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Burada kullanıcı girişi yapılabilir, örneğin:
    if (username === "admin" && password === "123456") {
        alert("Giriş başarılı! Hoş geldiniz, " + username);
        // Kullanıcıyı yönlendirme veya başka işlemler yapılabilir
    } else {
        alert("Kullanıcı adı veya şifre yanlış.");
    }
}

function register() {
    event.preventDefault();
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    // Burada kayıt işlemi yapılabilir, örneğin:
    alert("Kayıt başarılı! Yeni kullanıcı adı: " + newUsername);
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerContainer").style.display = "block";
}

function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerContainer").style.display = "none";
}


//kullanı işlemleri
// Kullanıcı oturumu
let currentUser = null;

// Kullanıcı girişi
function login(username, password) {
    // Burada gerçek giriş işlemini simüle ediyoruz
    if (username === 'user' && password === '1234') {
        currentUser = {
            username: username,
            fullName: 'John Doe'
        };

        // Kullanıcı menüsünü göster
        showUserMenu();
    } else {
        alert('Hatalı kullanıcı adı veya şifre.');
    }
}

// Kullanıcı menüsünü göster
function showUserMenu() {
    const userMenu = document.getElementById('user-menu');
    if (currentUser) {
        userMenu.style.display = 'block';
    }
}

// Kullanıcı çıkışı
function logout() {
    currentUser = null;
    const userMenu = document.getElementById('user-menu');
    userMenu.style.display = 'none';
}

// Bağlantıları dinle
document.getElementById('orders-link').addEventListener('click', function(event) {
    event.preventDefault();
    if (currentUser) {
        alert('Siparişleriniz gösterilecek.');
    }
});

document.getElementById('cards-link').addEventListener('click', function(event) {
    event.preventDefault();
    if (currentUser) {
        alert('Kartlarınız gösterilecek.');
    }
});

document.getElementById('addresses-link').addEventListener('click', function(event) {
    event.preventDefault();
    if (currentUser) {
        alert('Adresleriniz gösterilecek.');
    }
});

document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault();
    logout();
});

// Veritabanı nesnesi
var database = {
    users: [],
    orders: []
};

// Kullanıcı ekleme fonksiyonu
function addUser(username, password, isAdmin = false) {
    var newUser = {
        username: username,
        password: password,
        isAdmin: isAdmin
    };
    database.users.push(newUser);
    saveDatabase(); // Veritabanını kaydet
}

// Kullanıcı doğrulama fonksiyonu
function authenticateUser(username, password) {
    var user = database.users.find(function(user) {
        return user.username === username && user.password === password;
    });
    return user !== undefined;
}

// Veritabanını tarayıcı yerel depolama (localStorage) üzerine kaydetme
function saveDatabase() {
    localStorage.setItem('database', JSON.stringify(database));
}

// Admin kullanıcısını veritabanına ekle
addUser('admin', 'adminpass', true); // Kullanıcı adı: admin, Şifre: adminpass, Admin yetkisi: true

// Sayfa yüklendiğinde veritabanını kontrol etme ve yükleme
window.onload = function() {
    var savedDatabase = localStorage.getItem('database');
    if (savedDatabase) {
        database = JSON.parse(savedDatabase);
    }
};

<?php
$host = "localhost"; // Veritabanı sunucu adresi
$user = "root"; // Veritabanı kullanıcı adı
$password = "YourPassword"; // Veritabanı şifresi
$database = "users"; // Kullanılacak veritabanı adı

// Veritabanı bağlantısını oluştur
$conn = new mysqli($host, $user, $password, $database);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Veritabanına bağlantı sağlanamadı: " . $conn->connect_error);
}

// SQL sorgusunu hazırla ve çalıştır
$sql = "SELECT * FROM `users`;";
$result = $conn->query($sql);

// Sorgu sonucunu kontrol et
if ($result->num_rows > 0) {
    // Veritabanından alınan verileri ekrana yazdır
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " - Ad: " . $row["name"] . " - E-posta: " . $row["email"] . "<br>";
    }
} else {
    echo "0 sonuç";
}

// Bağlantıyı kapat
$conn->close();
?>

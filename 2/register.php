<?php
// config.php dosyasını include et
include('config.php');

// Formdan gelen verileri al
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Şifreyi hashle
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// SQL sorgusunu hazırla
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

// Sorguyu çalıştır ve sonucu kontrol et
if (mysqli_query($conn, $sql)) {
    echo "Kullanıcı başarıyla oluşturuldu.";
} else {
    echo "Hata: " . $sql . "<br>" . mysqli_error($conn);
}

// Veritabanı bağlantısını kapat
mysqli_close($conn);
?>;

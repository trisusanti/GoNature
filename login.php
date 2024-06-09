<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $loginEmail = $_POST['login_email'];
    $loginPassword = $_POST['login_password'];

    if (empty($loginEmail) || empty($loginPassword)) {
        echo 'Harap isi semua kolom';
    } else {
        // Baca data pengguna dari file JSON
        $userData = json_decode(file_get_contents('data_pengguna.json'), true);

        // Cari pengguna dengan email yang sesuai
        $user = array_filter($userData, function ($userData) use ($loginEmail) {
            return isset($userData['email']) && $userData['email']== $loginEmail;
        });

        if ($user) {
            // Verifikasi password
            $hashedPassword = reset($user)['password'];
            if (password_verify($loginPassword, $hashedPassword)) {
                echo 'Login berhasil';
            } else {
                echo 'Email atau password salah';
            }
        } else {
            echo 'Email atau password salah';
        }
    }
} else {
    // Tanggapan jika bukan metode POST
    echo 'Metode tidak valid';
}
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $signupEmail = $_POST['signup_email'];
    $signupPassword = $_POST['signup_password'];
    $confirmPassword = $_POST['confirm_password'];

    if (empty($signupEmail) || empty($signupPassword) || empty($confirmPassword)) {
        echo 'Harap isi semua kolom';
    } elseif ($signupPassword !== $confirmPassword) {
        echo 'Password konfirmasi tidak cocok';
    } else {
        // Baca data pengguna dari file JSON
        $userData = json_decode(file_get_contents('data_pengguna.json'), true);

        // Tambahkan pengguna baru
        $userData[] = [
            'email' => $signupEmail,
            'password' => password_hash($signupPassword, PASSWORD_DEFAULT),
        ];

        // Simpan data ke file JSON
        file_put_contents('data_pengguna.json', json_encode($userData));

        echo 'Pendaftaran berhasil';
    }
} else {
    // Tanggapan jika bukan metode POST
    echo 'Metode tidak valid';
}
?>

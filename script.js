const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  var cardEvent = document.querySelector('.card_event');
  var formContainer = document.querySelector('.form_container');
  var formCloseBtn = document.querySelector('.form_close');
  var home = document.querySelector(".home");
  var signupBtn = document.querySelector("#signup");
  var loginBtn = document.querySelector("#login");
  var pwShowHide = document.querySelectorAll(".pw_hide");

  cardEvent.addEventListener('click', function () {
    // Menampilkan alert SweetAlert2 tanpa tombol "OK"
    Swal.fire({
      icon: 'warning',
      title: 'Anda harus login untuk daftar dan melihat detail event.',
      html: 'Klik <a href="#" id="loginLink">di sini</a> untuk login.',
    });

    // Menambahkan event listener untuk tautan login
    document.getElementById('loginLink').addEventListener('click', function (e) {
      e.preventDefault();
      showFormContainer(); // Menampilkan formulir login setelah menekan tautan pada alert
      Swal.close(); // Menutup alert setelah tautan diklik
    });
  });

  formCloseBtn.addEventListener('click', function () {
    home.classList.remove("show");
  });

  pwShowHide.forEach((icon) => {
    icon.addEventListener('click', function () {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });

  signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showFormContainer();
  });

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showFormContainer();
  });

  function showFormContainer() {
    home.classList.add("show");
    formContainer.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var cardEvent = document.querySelector('.card_event2');
  var formContainer = document.querySelector('.form_container');
  var formCloseBtn = document.querySelector('.form_close');
  var home = document.querySelector(".home");
  var signupBtn = document.querySelector("#signup");
  var loginBtn = document.querySelector("#login");
  var pwShowHide = document.querySelectorAll(".pw_hide");

  cardEvent.addEventListener('click', function () {
    // Menampilkan alert SweetAlert2 tanpa tombol "OK"
    Swal.fire({
      icon: 'warning',
      title: 'Anda harus login untuk daftar dan melihat detail event.',
      html: 'Klik <a href="#" id="loginLink">di sini</a> untuk login.',
    });

    // Menambahkan event listener untuk tautan login
    document.getElementById('loginLink').addEventListener('click', function (e) {
      e.preventDefault();
      showFormContainer(); // Menampilkan formulir login setelah menekan tautan pada alert
      Swal.close(); // Menutup alert setelah tautan diklik
    });
  });

  formCloseBtn.addEventListener('click', function () {
    home.classList.remove("show");
  });

  pwShowHide.forEach((icon) => {
    icon.addEventListener('click', function () {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });

  signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showFormContainer();
  });

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showFormContainer();
  });

  function showFormContainer() {
    home.classList.add("show");
    formContainer.classList.add("active");
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login_form form');
    const signupForm = document.querySelector('.signup_form form');

    // loginForm.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     // Lakukan permintaan login AJAX menggunakan Fetch API
    //     const formData = new FormData(loginForm);

    //     fetch('login.php', {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(response => response.text())
    //     .then(data => {
    //         // Tampilkan pesan respons
    //         // alert(data);
    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Login Berhasil',
    //         text: data,
    //       });

    //         if (data === 'Login berhasil') {
    //             loginForm.reset();
    //             home.classList.remove("show");
    //         } else {
    //         // Jika login gagal, tampilkan pesan error
    //         Swal.fire({
    //           icon: 'error',
    //           title: 'Login Gagallll',
    //           text: data, // Pesan dari server (misalnya, 'Password salah')
    //         });
    //       }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // });
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
        // Lakukan permintaan login AJAX menggunakan Fetch API
      const formData = new FormData(loginForm);

      fetch('login.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data === 'Login berhasil') {
                // Jika login berhasil, tampilkan SweetAlert sukses
          return Swal.fire({
            icon: 'success',
            title: 'Login Berhasil',
            text: data,
          });
        } else {
            throw new Error(data);
        }
      })
      .then((result) => {
        if (result.isConfirmed) {
                // Redirect ke halaman afterLogin.html setelah mengklik "OK"
          window.location.href = 'afterLogin.html';
        }
      })
      .catch(error => {
            // Tangkap error dari login gagal dan tampilkan SweetAlert error
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
                text: error.message, // Gunakan pesan error yang dikirim dari server
        });
      });
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Lakukan permintaan pendaftaran AJAX menggunakan Fetch API
        const formData = new FormData(signupForm);

        fetch('signup.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Tampilkan pesan respons
            alert(data);

            if (data === 'Pendaftaran berhasil') {
                signupForm.reset();
                showLoginForm();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function showLoginForm() {
        // Sembunyikan formulir pendaftaran dan tampilkan formulir login
        document.querySelector('.signup_form').style.display = 'none';
        document.querySelector('.login_form').style.display = 'block';
    }

    function showSignupForm() {
        // Sembunyikan formulir login dan tampilkan formulir pendaftaran
        document.querySelector('.login_form').style.display = 'none';
        document.querySelector('.signup_form').style.display = 'block';
    }

    // Tambahkan event listener untuk tombol Signup di formulir login
    document.getElementById('signup').addEventListener('click', function (e) {
        e.preventDefault();
        showSignupForm()
    });

    // Tambahkan event listener untuk tombol Login di formulir pendaftaran
    document.getElementById('login').addEventListener('click', function (e) {
        e.preventDefault();
        showLoginForm();
    });
});

document.getElementById('menu-icon').addEventListener('click', function () {
  document.querySelector('.nav_items').classList.toggle('show');
});

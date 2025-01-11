const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Kode disini untuk membuat agar ketika diklik hamburger menu nya membuat navigasi aktif
hamburgerMenu.addEventListener('click', ()=> {
    navbarNav.classList.toggle('active');
});

// Di sini untuk agar untuk menutup navbar bisa mengeklik selain hamburger menunya
document.addEventListener('click', (e) =>{
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
});

// Ini untuk kita membuat tanggal berapa berakhir timernya
const end = new Date('01/29/2025 10:01 AM');

// Di sini untuk menginisiasi konversi waktu dari milidetik 
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    const now = new Date();
    let distance = end - now;
    
    // Untuk ketika waktu sekarang sudah melebihi waktu bertandingnya jadi akan di clear jamnya dan menampilkan expired
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.timer-time').innerHTML = 'EXPIRED!';
        return;
    }

    // Menghitung sisa hari yang ada dengan satuan milidetik sehingga perlu dikonversi sesuai yang diinginkan hari, jam, menit dan detik
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.querySelector('.timer-time').innerHTML =
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs remaining`;
}

// Memulai interval penghitung waktu mundur
timer = setInterval(showRemaining, 1000);

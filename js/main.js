const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener('click', ()=> {
    navbarNav.classList.toggle('active');
});

document.addEventListener('click', (e) =>{
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
});

const end = new Date('01/29/2025 10:01 AM');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    const now = new Date();
    let distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.timer-time').innerHTML = 'EXPIRED!';
        return;
    }

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.querySelector('.timer-time').innerHTML =
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
}

// Memulai interval penghitung waktu mundur
timer = setInterval(showRemaining, 1000);

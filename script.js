const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const titleGroup = document.getElementsByClassName('title-group');



//  toggle darklight mode
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
};



// switch theme function
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
};

//event for switch
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}

// intro animation of titleGroup
// function titleAnimation() {
//     setTimeout(() => { (titleGroup[0].style.opacity = 1) }, 1000);
// }

// window.addEventListener('load', titleAnimation);
//using local storage for user's theme preferences
if (typeof (Storage !== undefined)) {
    if (!localStorage.theme) {
        localStorage.theme = 'default';
    }
} else {
    console.log("Browser does not support client-side storage to keep track of scores");
}

//theme switcher event handler
let darkModeSwitch = document.getElementById('darkModeSwitch');
let darkModeIcon = darkModeSwitch.querySelector('i');

let linkTag = document.getElementById('pagestylesheet');

if (localStorage.theme === 'default') {
    linkTag.setAttribute('href', './css/style.css');
    darkModeIcon.classList.add('far');
    darkModeIcon.classList.remove('fas');
}

if (localStorage.theme === 'dark') {
    linkTag.setAttribute('href', './css/darkstyle.css');
    darkModeIcon.classList.remove('far');
    darkModeIcon.classList.add('fas');
}



darkModeSwitch.addEventListener('click', switcher);

function switcher(evt) {

    if (linkTag.getAttribute('href') === './css/style.css') {
        linkTag.setAttribute('href', './css/darkstyle.css');
        darkModeIcon.classList.remove('far');
        darkModeIcon.classList.add('fas');
        localStorage.setItem('theme', 'dark');
    } else {
        linkTag.setAttribute('href', './css/style.css');
        darkModeIcon.classList.add('far');
        darkModeIcon.classList.remove('fas');
        localStorage.setItem('theme', 'default')
    }
}

//filter selector event handler
let filterBtn = document.querySelector('.filter__selector ');
let dropDownList = document.querySelector('.filter__selector > ul');

filterBtn.addEventListener('click', () => {
    if (dropDownList.classList.contains('slideIn')) {
        dropDownList.classList.remove('slideIn');
        dropDownList.classList.add('slideOut');
    } else {
        dropDownList.classList.add('slideIn');
        dropDownList.classList.remove('slideOut');
        dropDownList.classList.remove('d-none');
    }
});
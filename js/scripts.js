//navigation
let menu_button = document.getElementById('menu-button');
let menu_close_button = document.getElementById('close-button');
let navigation = document.getElementById('menu');

//catalog filter menu
let filter_open_button = document.getElementById('filter-open');
let filter_close_button = document.getElementById('filter-close');
let filter_menu = document.getElementById('filter-menu');


//catalog filter option
let option_btns = document.getElementsByClassName("catalog__filter-option");
let option_lists = document.getElementsByClassName("filter-list");

//navigation
menu_button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
})

menu_close_button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
})

//catalog filter
filter_open_button.addEventListener('click', function () {
    filter_menu.classList.add('display-flex');
})

filter_close_button.addEventListener('click', function () {
    filter_menu.classList.remove('display-flex');
})

//filter options
for (let i = 0; i < option_btns.length; i++) {
    let btn = option_btns[i];
    btn.onclick = function () {
        option_lists[i].classList.toggle('display-flex');
    }
}
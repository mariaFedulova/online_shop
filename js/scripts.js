let menu_button = document.getElementById('menu-button');
let menu_close_button = document.getElementById('close-button');
let navigation = document.getElementById('menu');

menu_button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
});

menu_close_button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
})

// function changeItem() {
//     document.getElementById('menu').style.display = 'block';
// }
// function rechangeItem() {
//     document.getElementById('menu').style.display = 'none';
// }
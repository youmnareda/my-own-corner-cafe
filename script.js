// Select the element with the class 'toggle'
const toggleBtn = document.querySelector('.toggle')
// Select the icon element inside the element with the class 'toggle'
const toggleBtnIcon = document.querySelector('.toggle i')
// Select the element with the class 'dropdown-menu'
const dropDownMenu = document.querySelector('.dropdown-menu')

// Attach a click event listener to the 'toggleBtn'
toggleBtn.onclick = function () {
    // Toggle the 'open' class on the 'dropDownMenu' element
    dropDownMenu.classList.toggle('open')
    // Check whether the 'open' class is present in the 'dropDownMenu' class list
    const isOpen = dropDownMenu.classList.contains('open')
    // Set the class of 'toggleBtnIcon' based on whether the dropdown is open or closed
    toggleBtnIcon.classList = isOpen
        ? 'fa fa-remove'// If open, set the class to show a remove icon
        : 'fa fa-bars'// If closed, set the class to show a bars icon
}


// Create a new Swiper instance
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,// Number of slides to show in the view
    spaceBetween: 30,// Space between slides
    loop: true,// Enable loop to create an infinite carousel effect
    // Pagination settings
    pagination: {
        el: ".swiper-pagination",// Element that will serve as the pagination container
        clickable: true, // Enable clickable pagination bullets
    },
     // Navigation settings
    navigation: {
        nextEl: ".swiper-button-next",// Element that will serve as the next navigation button
        prevEl: ".swiper-button-prev",// Element that will serve as the previous navigation button
    },
});


//  home => nav bar
$(document).ready(function () {
    // Show home as default
    $('#Home').show();

    // Handle menu item clicks
    $('.links a').click(function (e) {
        e.preventDefault();

        // Get the target content id
        var target = $(this).data('target');

        // Hide content
        $('.collection').hide();

        // Show target content
        $('#' + target).show();
    });
});

// buttons in home page
$(document).ready(function () {
    // home as default
    $('#Home').show();

    // Handle menu item clicks
    $('button a').click(function (e) {
        e.preventDefault();

        // Get the target content id
        var target = $(this).data('target');

        // Hide content
        $('.collection').hide();

        // Show target content
        $('#' + target).show();
    });
});

/************************************* */
// Getting references to HTML elements by their IDs
const breakfast = document.getElementById("breakfast")
const dessert = document.getElementById("dessert")
const drinks = document.getElementById("drinks")

const button1_1_btn = document.getElementById("button1_1")
const button2_2_btn = document.getElementById("button2_2")
const button3_3_btn = document.getElementById("button3_3")
// Adding click event listeners to buttons

// Event listener for the first button
button1_1_btn.addEventListener('click', ()=>{
    // Hide dessert and drinks, show breakfast
    dessert.classList.remove('active')
    drinks.classList.remove('active')

    breakfast.classList.add('active')
})
// Event listener for the second button
button2_2_btn.addEventListener('click', ()=>{
    // Hide dessert and breakfast, show drinks
    dessert.classList.remove('active')
    breakfast.classList.remove('active')
    
    drinks.classList.add('active')
})
// Event listener for the third button
button3_3_btn.addEventListener('click', ()=>{
    // Hide breakfast and drinks, show dessert
    breakfast.classList.remove('active')
    drinks.classList.remove('active')

    dessert.classList.add('active')
})

// **********

// const breakfast = document.getElementById("breakfast");
// const dessert = document.getElementById("dessert");
// const drinks = document.getElementById("drinks");

// const buttons = {
//   button1_1: breakfast,
//   button2_2: drinks,
//   button3_3: dessert
// };

// function handleButtonClick(buttonId) {
//   for (const id in buttons) {
//     if (id === buttonId) {
//       buttons[id].classList.add('active');
//     } else {
//       buttons[id].classList.remove('active');
//     }
//   }
// }

// document.getElementById("button1_1").addEventListener('click', () => handleButtonClick("button1_1"));
// document.getElementById("button2_2").addEventListener('click', () => handleButtonClick("button2_2"));
// document.getElementById("button3_3").addEventListener('click', () => handleButtonClick("button3_3"));

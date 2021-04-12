"use strict";
/* 
Aegis Common Scripts (scripts used on multiple pages)
Author : Tien Cheng
Last Updated: 1/8/2020
*/


/* Animate Hamburger Icon */
var toggleBtn = document.getElementsByClassName('navbar-toggler')[0];
toggleBtn.addEventListener('click', hamburgerAnimate); // when user clicks on hamburger, toggle it
var hamburgerIcon = document.getElementById('hamburgerIcon');
hamburgerIcon.classList.remove('active'); // if for some reason is already active, make sure it isnt
function hamburgerAnimate() {
    hamburgerIcon.classList.toggle('active');
}

/* Used on Training and Media Page */
/* Function to Filter Cards Based on Category Value of Select Input */
var categoryInput = document.getElementById('filterBox');
var divsToFilter = document.getElementsByClassName('filter'); // collection of cards to filter

function filter() {
    var category = categoryInput.value == 'No' ? null : categoryInput.value; // if no category, set it to null
    for (var i = 0; i < divsToFilter.length; ++i) { // iterate through all cards
        divsToFilter[i].classList.add('d-none'); // hide them
        if (divsToFilter[i].classList.contains(category) || category == null) { // if they match the category, or no category, show
            divsToFilter[i].classList.remove('d-none');
        }
    }
}

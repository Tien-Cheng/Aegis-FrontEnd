"use strict";

/* 
Aegis Consultancy Script
Author : Tien Cheng
Last Updated: 27/7/2020
*/
/* Add event listener for tab buttons*/
var tabButtons = document.getElementsByClassName('tab-link');
var tabDivContent = document.getElementById('tab-header-content');
var tabDiv = document.getElementById('tab-header');

for (let i = 0; i < tabButtons.length; ++i) {
    tabButtons[i].addEventListener('click', openTab);
}
tabButtons[0].click(); // automatically open first tab by firing click event

/* Script for tab header to dynamically change content */
function openTab(evt) {
    var curTab = evt.currentTarget; // extract element that fired event
    var tabID = curTab.getAttribute('id'); // get id
    for (let i = 0; i < tabButtons.length; ++i) {
        tabButtons[i].classList.remove('tab-active'); // make other tabs have unhover effect unless actually hover
    }
    curTab.classList.add('tab-active'); // make active tab always hover effect
    $('#tab-header-content').hide(); // hide element
    var tabHTML = "<h3>" + tabHeadings[tabID] + "</h3>";
    tabHTML += "<p class='mr-md-5'>" + tabDescription[tabID] + "</p>";
    tabDivContent.innerHTML = tabHTML;
    tabDivContent.classList.add('container-fluid', 'p-md-5', 'text-justify');
    tabDiv.style.background = "url('graphics/consultancy/tabImg/" + tabID + ".jpg')" + tabImgPos[tabID];
    $('#tab-header-content').fadeIn('slow'); // then show to smooth transition
}
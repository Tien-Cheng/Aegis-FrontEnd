"use strict";

/* 
Aegis About Script
Author : Tien Cheng
Last Updated: 5/8/2020
*/
/* Add event listener for map markers */
var mapMarkers = document.getElementsByClassName('mapArea');

for (let i = 0; i < mapMarkers.length; ++i) {
    mapMarkers[i].addEventListener('click', loadMapLocationInfo);
}

/* Load Corresponding Map Content */
var infoDiv = document.getElementById('map-info');
var infoDivHTML = "";
function loadMapLocationInfo(evt) {
    for (let i = 0; i < mapMarkers.length; ++i) {
        mapMarkers[i].classList.remove('active'); // add hover effect to current element
    }
    evt.currentTarget.classList.add('active');
    var location = locations[evt.currentTarget.getAttribute('id')];
    $('#map-info').hide(); // use jquery to hide
    infoDivHTML = ""; // create html for that specific location
    infoDivHTML += "<div class='container-xl px-5 px-xl-0'>";
    infoDivHTML += "<h4>" + location['location'] + "</h4>";
    infoDivHTML += "<figure class='figure'><img src='graphics/about/mapPics/" + location['img'] + "' alt='" + location['location'] + "' class='figure-img img-fluid rounded w-50'></figure>";
    infoDivHTML += "<h4>" + location['heading'] + "</h4><p>" + location['description'] + "</p>";
    infoDivHTML += "</div>";
    $('#map-info').fadeIn('medium'); // show element with animated fade in for smoother feeling
    infoDiv.innerHTML = infoDivHTML;

}
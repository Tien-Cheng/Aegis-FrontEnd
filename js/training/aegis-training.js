/* 
Aegis Training Page  Script
Author : Tien Cheng
Last Updated: 10/8/2020
*/
/* Allow user to open modal in new tab using JQuery. When a modal link is opened in a new tab, the id of 
the modal is added on to the url, hence, use this function to show the modal linked to by the additional
id on the url. This function will be used for any page that uses a lot of modals eg. Training page.
*/
$(document).ready(function () { // on page ready
    $(window.location.hash).modal("show"); // extract id of modal from url
});

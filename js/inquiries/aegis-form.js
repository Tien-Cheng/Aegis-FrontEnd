"use strict";
/* 
Aegis Inquiry Page Form Script
Author : Tien Cheng
Last Updated: 10/8/2020
*/
var form = document.getElementById('additional-info');
var formParameters = new URLSearchParams(window.location.search); // form parameters passed by other function, eg. Training page

/* Function Calls */
getUserCountry();
if (formParameters.has('type')) { // if type of form is specified in url, change to that specific form
    changeForm(formParameters.get('type'));
}

/* Get User Country from ip */
function getUserCountry() {
    $.get("https://ipinfo.io?token=6d013cf91d0940", function (response) { // get users country from ip address
        $('select#countryBox option[value="' + response.country + '"]').attr("selected", true); // select option with same country code, and set it as default value for Country input
    }, "jsonp");
}

/* Dynamically Generate form based on Inquiry Type */
function changeForm(type = null) {
    if (type == null) { // if url does not specify type
        dynamicForm(document.getElementById('inquiryBox').value);
    } else {
        document.getElementById('inquiryBox').value = type;
        dynamicForm(type);
    }
}

function dynamicForm(type) {
    form.innerHTML = "";
    form.innerHTML += formHTML[type];
    switch (type) {
        case 'training':
            // dynamically add content here
            dynamicTrainingForm();
            getCourseDates();
            break;
        case 'job':
            // call function to get position name
            dynamicJobForm();
    }
}

function dynamicTrainingForm() {
    var courseName = document.getElementById('courseBox');
    for (const course of Object.values(courseInfo)) {
        // Add all courses available to select list as options
        courseName.innerHTML += '<option value="' + course.id + '">' + course.name + '</option>';
    }
    if (formParameters.has('courseID')) {
        var courseID = formParameters.get('courseID');
        courseName.value = courseInfo[courseID].id; // if course id is provided, default select it as the course
    }
}

function getCourseDates() {
    // Based on chosen course, retreive course dates and add them to the multiple selection menu
    var courseDate = document.getElementById('timingBox');
    var chosenCourse = document.getElementById('courseBox').value; // select id of chosen course
    courseDate.innerHTML = ""; // empty options
    // Add Online Timings
    for (const timing of courseInfo[chosenCourse].onlineDates) {
        courseDate.innerHTML += '<option value="online/' + timing + '">' + 'Online: ' + timing + '</option>';
    }
    // Add Physical Timing
    for (const timing of courseInfo[chosenCourse].physicalDates) {
        courseDate.innerHTML += '<option value="physical/' + timing + '">' + 'Physical: ' + timing + '</option>';
    }
}

function dynamicJobForm() {
    var jobName = document.getElementById('applyPositionBox');
    for (const job of Object.values(jobList)) {
        // Add all jobs available to select list as options
        jobName.innerHTML += '<option value="' + job.id + '">' + job.name + ', ' + job.country + ' (' + job.type + ')' + '</option>';
    }
    if (formParameters.has('positionID')) {
        var positionID = formParameters.get('positionID');
        jobName.value = jobList[positionID].id; // if job id is provided, default select it as the job
    }
}




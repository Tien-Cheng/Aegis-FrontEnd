"use strict";
/* 
Aegis Inquiry Page Form Content
Author : Tien Cheng
Last Updated: 10/8/2020
*/
// formHTML holds the html code for the various types of forms the user can select form, to be dynamically loaded
var formHTML = {
    'media':
        '<h2>Inquiry Information</h2>\
    <div class="row">\
    <div class="col-12 col-md-7">\
        <label for="company-box">Company/Organization*</label>\
        <input type="text" name="company" id="company-box" maxlength="128"\
            placeholder="Company/Organization Name" class="form-control" required>\
    </div>\
    <div class="col-12 col-md-5">\
        <label for="position-box">Position*</label>\
        <input type="text" name="position" id="position-box" maxlength="128"\
            placeholder="Company Position" class="form-control" list="position-list" required>\
        <datalist id="position-list">\
            <option value="President"></option>\
            <option value="Vice President"></option>\
            <option value="CEO"></option>\
            <option value="CFO"></option>\
            <option value="CMO"></option>\
            <option value="COO"></option>\
            <option value="CIO"></option>\
            <option value="CTO"></option>\
            <option value="CHRO"></option>\
            <option value="CDO"></option>\
            <option value="CPO"></option>\
            <option value="CCO"></option>\
            <option value="Head"></option>\
            <option value="Chief"></option>\
            <option value="Manager"></option>\
            <option value="Director"></option>\
            <option value="Specialist"></option>\
            <option value="Executive"></option>\
            <option value="Assistant Manager"></option>\
            <option value="Coordinator"></option>\
            <option value="Secretary"></option>\
        </datalist>\
    </div>\
</div>\
<label for="message-box">What can we do for you?*</label>\
<textarea name="message" id="message-box" class="form-control form-control-lg" required></textarea>',
    'other':
        '<h2>Inquiry Information</h2>\
    <div class="row">\
    <div class="col-12 col-md-7">\
        <label for="company-box">Company/Organization</label>\
        <input type="text" name="company" id="company-box" maxlength="128"\
            placeholder="Company/Organization Name" class="form-control">\
    </div>\
    <div class="col-12 col-md-5">\
        <label for="position-box">Position</label>\
        <input type="text" name="position" id="position-box" maxlength="128"\
            placeholder="Company Position" class="form-control" list="position-list">\
        <datalist id="position-list">\
            <option value="President"></option>\
            <option value="Vice President"></option>\
            <option value="CEO"></option>\
            <option value="CFO"></option>\
            <option value="CMO"></option>\
            <option value="COO"></option>\
            <option value="CIO"></option>\
            <option value="CTO"></option>\
            <option value="CHRO"></option>\
            <option value="CDO"></option>\
            <option value="CPO"></option>\
            <option value="CCO"></option>\
            <option value="Head"></option>\
            <option value="Chief"></option>\
            <option value="Manager"></option>\
            <option value="Director"></option>\
            <option value="Specialist"></option>\
            <option value="Executive"></option>\
            <option value="Assistant Manager"></option>\
            <option value="Coordinator"></option>\
            <option value="Secretary"></option>\
        </datalist>\
    </div>\
</div>\
<label for="message-box">What can we do for you?*</label>\
<textarea name="message" id="message-box" class="form-control form-control-lg" required></textarea>',
    'business':
        '<h2>Inquiry Information</h2>\
        <div class="row">\
        <div class="col-12 col-md-7">\
            <label for="company-box">Company/Organization*</label>\
            <input type="text" name="company" id="company-box" maxlength="128"\
                placeholder="Company/Organization Name" class="form-control" required>\
        </div>\
        <div class="col-12 col-md-5">\
            <label for="position-box">Position*</label>\
            <input type="text" name="position" id="position-box" maxlength="128"\
                placeholder="Company Position" class="form-control" list="position-list" required>\
            <datalist id="position-list">\
                <option value="President"></option>\
                <option value="Vice President"></option>\
                <option value="CEO"></option>\
                <option value="CFO"></option>\
                <option value="CMO"></option>\
                <option value="COO"></option>\
                <option value="CIO"></option>\
                <option value="CTO"></option>\
                <option value="CHRO"></option>\
                <option value="CDO"></option>\
                <option value="CPO"></option>\
                <option value="CCO"></option>\
                <option value="Head"></option>\
                <option value="Chief"></option>\
                <option value="Manager"></option>\
                <option value="Director"></option>\
                <option value="Specialist"></option>\
                <option value="Executive"></option>\
                <option value="Assistant Manager"></option>\
                <option value="Coordinator"></option>\
                <option value="Secretary"></option>\
            </datalist>\
        </div>\
    </div>\
    <label for="message-box">What can we do for you?*</label>\
    <textarea name="message" id="message-box" class="form-control form-control-lg" required></textarea>',
    'training': '                    <div class="row">\
    <div class="col-12 col-lg-8">\
        <h2>Registration Information</h2>\
        <label for="courseBox">Course Name</label>\
        <select onchange="getCourseDates()" name="courseName" id="courseBox" form="inquiries-form" class="custom-select"\
            required>\
            <!-- Get course names from script-->\
        </select>\
        <label for="locationBox">Where will you be taking this course?</label>\
        <select name="trainingLoc" id="locationBox" form="inquiries-form" class="custom-select"\
            required>\
            <option value="SG" selected>Singapore</option>\
            <option value="MY">Kuala Lumpur, Malaysia</option>\
            <option value="IN">New Delhi, India</option>\
            <option value="UK">London, United Kingdom</option>\
            <option value="DE">Munich, Germany</option>\
            <option value="US">Boston, United States</option>\
        </select>\
        <label for="timingBox">Which training dates would be acceptable for you?</label>\
        <select name="timeslot" id="timingBox" form="inquiries-form" class="custom-select" required\
            multiple>\
            <!-- Dynamically Generate based on course -->\
        </select>\
        <div class="custom-control custom-checkbox my-3">\
            <input type="checkbox" id="subsidyBox" name="subsidyEligible" class="custom-control-input">\
            <label for="subsidyBox" class="custom-control-label"> I am eligible for a subsidy.</label>\
        </div>\
        <div class="custom-control custom-checkbox mb-2">\
            <input type="checkbox" id="newsletterBox" name="newsletter" class="custom-control-input">\
            <label for="newsletterBox" class="custom-control-label"> Send me updates on courses, special\
                events,\
                and news.</label>\
        </div>\
    </div>\
    <aside id="register-process-aside" class="col-12 col-lg-4">\
        <div class="container my-5">\
            <p>After filling out the form, we will contact you and...</p>\
            <ul>\
                <li>Confirm your Application</li>\
                <li>Settle Course Fee Payment and Subsidies (if any)</li>\
                <li>Confirm Course Dates</li>\
                <li>Provide a Course Syllabus</li>\
            </ul>\
        </div>\
    </aside>\
</div>',
    'job': '                    <h2>Job Inquiry Information</h2>\
<label for="applyPositionBox">Job Position</label>\
<select name="jobApplyingPosition" id="applyPositionBox" form="inquiries-form" class="form-control"\
    required>\
    <!-- Dynamically Generate-->\
</select>\
<label for="coverLetterBox">Tell us about yourself</label>\
<textarea id="coverLetterBox" name="coverLetter" class="form-control form-control-lg"></textarea>\
<div class="custom-file">\
    <label for="resumeBox" class="custom-file-label">Upload your Resume/CV*</label>\
    <input type="file" id="resumeBox" name="resume" class="custom-file-input" required>\
</div>'}
    ;

/* Info about Training Courses */
var courseInfo = {
    'd-0-m': {
        'id': 'd-0-m',
        'name': 'Introduction to Data Science',
        'onlineDates': ['16-8-2020', '20-8-2020', '26-8-2020', '1-9-2020', '4-9-2020', '2-10-2020', '20-10-2020', '25-10-2020'],
        'physicalDates': ['15-8-2020', '24-8-2020', '5-10-2020', '10-10-2020', '14-10-2020']
    },
    'd-1-m': {
        'id': 'd-1-m',
        'name': 'Introduction to Artificial Intelligence',
        'physicalDates': ['12-9-2020', '24-9-2020', '4-10-2020', '10-10-2020', '14-10-2020'],
        'onlineDates': ['16-8-2020', '20-8-2020', '26-8-2020', '2-9-2020', '4-9-2020', '2-10-2020', '23-10-2020', '25-10-2020']
    },
    'd-2-m': {
        'id': 'd-2-m',
        'name': 'Python for Data Science',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-10-2020', '23-10-2020', '25-10-2020'],
        'physicalDates': ['2-8-2020', '15-8-2020', '4-10-2020', '10-10-2020', '14-10-2020']
    },
    'd-3-m': {
        'id': 'd-3-m',
        'name': 'Data Analytics',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-10-2020', '23-10-2020', '25-10-2020'],
        'physicalDates': ['2-8-2020', '5-8-2020', '15-8-2020', '4-11-2020', '10-11-2020', '14-11-2020']
    },
    'd-4-m': {
        'id': 'd-4-m',
        'name': 'Deep Learning with TensorFlow',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-10-2020', '23-10-2020', '25-10-2020'],
        'physicalDates': ['2-8-2020', '5-8-2020', '15-8-2020', '4-11-2020', '10-11-2020', '14-11-2020']
    },
    'd-5-m': {
        'id': 'd-5-m',
        'name': 'Statistics for Data Science',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-10-2020', '23-10-2020', '25-10-2020'],
        'physicalDates': ['2-8-2020', '5-8-2020', '15-8-2020', '4-11-2020', '10-11-2020', '14-11-2020']
    },
    'd-6-m': {
        'id': 'd-6-m',
        'name': 'Aegis Data Science Bootcamp',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-12-2020', '23-12-2020', '25-12-2020'],
        'physicalDates': ['5-12-2020', '15-12-2020', '4-1-2021', '10-1-2021', '14-1-2021']
    },
    'b-0-m': {
        'id': 'b-0-m',
        'name': 'Data Science for Business Professionals',
        'onlineDates': ['1-9-2020', '14-9-2020', '2-10-2020', '23-10-2020', '25-10-2020'],
        'physicalDates': ['2-8-2020', '5-8-2020', '15-8-2020', '4-11-2020', '10-11-2020', '14-11-2020']
    }

};

/* Info about Jobs */
var jobList = {
    'bc-ft-sg-01': {
        'id': 'bc-ft-sg-01',
        'name': 'Business Consultant',
        'country': 'Singapore',
        'type': 'Full Time'
    },
    'ds-ft-sg-01': {
        'id': 'ds-ft-sg-01',
        'name': 'Data Scientist',
        'country': 'Singapore',
        'type': 'Full Time'
    },
    'da-intern-NYC-01': {
        'id': 'da-intern-NYC-01',
        'name': 'Data Analyst',
        'country': 'NYC, NY, United States',
        'type': 'Internship'
    },
    't-ft-sg-01': {
        'id': 't-ft-sg-01',
        'name': 'Trainer',
        'country': 'Singapore',
        'type': 'Full Time'
    },
    'r-ft-sg-01': {
        'id': 'r-ft-sg-01',
        'name': 'Researcher',
        'country': 'Singapore',
        'type': 'Full Time'
    },
    'ds-ft-sg-02': {
        'id': 'ds-ft-sg-02',
        'name': 'Senior Data Scientist',
        'country': 'Singapore',
        'type': 'Full Time'
    },
    'de-ft-kl-01': {
        'id': 'de-ft-kl-01',
        'name': 'Data Engineer',
        'country': 'Kuala Lumpur, Malaysia',
        'type': 'Full Time'
    },
    'wd-ft-dl-01': {
        'id': 'wd-ft-dl-01',
        'name': 'Full Stack Developer',
        'country': 'Munich, Germany',
        'type': 'Full Time'
    }
};
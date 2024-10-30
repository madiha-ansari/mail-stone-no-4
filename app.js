var form = document.getElementById("resume_form");
var resumeDisplayElement = document.getElementById("resume_display");
// handle form submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("Phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // generate the resume
    var resumeHtml = "\n<h2><b>editable Resume</b></h2>\n<h3>Personal Information</h3>\n<ul>\n    <li><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></li>\n    <li><b>Email: </b>  <span contenteditable=\"true\">").concat(email, "</span></li>\n    <li><b>Phone no : </b> <span contenteditable=\"true\">").concat(phoneNo, "</span></li>\n</ul>\n<h2><b>Education</b></h2>\n<p  contenteditable=\"true\">").concat(education, "</p>\n<h2><b>Experience</b></h2>\n<p contenteditable=\"true\" >").concat(experience, "</p>\n<h2><b>Skills</b></h2>\n<p  contenteditable=\"true\">").concat(skills, "</p>");
    // dispplay the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("The resume display element is missing ");
    }
});

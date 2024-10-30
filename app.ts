var form = document.getElementById("resume_form") as HTMLFormElement;
var resumeDisplayElement = document.getElementById("resume_display") as HTMLDivElement ;

// handle form submit
form.addEventListener("submit", (event : Event) => {
    event.preventDefault()
    // collect input values
    var name = (document.getElementById("name") as HTMLInputElement).value;
    var email = (document.getElementById("email") as HTMLInputElement).value;
    var phoneNo = (document.getElementById("Phone") as HTMLInputElement).value;
    var education = (document.getElementById("Education") as HTMLInputElement).value;
    var experience = (document.getElementById("Experience") as HTMLInputElement).value;
    var skills = (document.getElementById("Skills") as HTMLInputElement).value;

    // generate the resume
    var resumeHtml = `
<h2><b>editable Resume</b></h2>
<h3>Personal Information</h3>
<ul>
    <li><b>Name: </b><span contenteditable="true">${name}</span></li>
    <li><b>Email: </b>  <span contenteditable="true">${email}</span></li>
    <li><b>Phone no : </b> <span contenteditable="true">${phoneNo}</span></li>
</ul>
<h2><b>Education</b></h2>
<p  contenteditable="true">${education}</p>
<h2><b>Experience</b></h2>
<p contenteditable="true" >${experience}</p>
<h2><b>Skills</b></h2>
<p  contenteditable="true">${skills}</p>`;

    // dispplay the generate resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log("The resume display element is missing ");
    }
}
);


const form=document.getElementById("examForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let regno=document.getElementById("regno").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let dob=document.getElementById("dob").value;
let department=document.getElementById("department").value;
let semester=document.getElementById("semester").value;
let subject=document.getElementById("subject").value.trim();
let examDate=document.getElementById("examDate").value;

let gender=document.querySelector('input[name="gender"]:checked');

if(name=="" || regno=="" || email=="" || phone=="" || dob=="" || department=="" || semester=="" || subject=="" || examDate=="")
{
alert("Please fill all fields");
return;
}

if(gender==null){
alert("Select Gender");
return;
}

let phonePattern=/^[0-9]{10}$/;

if(!phonePattern.test(phone)){
alert("Enter valid 10 digit phone number");
return;
}

let student={
Name:name,
RegisterNo:regno,
Email:email,
Phone:phone,
DOB:dob,
Department:department,
Semester:semester,
Subject:subject,
ExamDate:examDate,
Gender:gender.value
};

localStorage.setItem("ExamRegistration",JSON.stringify(student));

alert("Registration Successful!");

form.reset();

});
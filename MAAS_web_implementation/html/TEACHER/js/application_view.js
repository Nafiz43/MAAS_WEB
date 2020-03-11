//var m=
//alert(m);
document.getElementById("App_id").innerHTML=localStorage.getItem("app_id");
document.getElementById("App_name").innerHTML=localStorage.getItem("app_username");
document.getElementById("App_date").innerHTML=localStorage.getItem("app_date");
document.getElementById("App_course").innerHTML=localStorage.getItem("app_course");
document.getElementById("rsn").innerHTML=localStorage.getItem("app_reason");
document.getElementById("anch").href = localStorage.getItem("app_link");
var absent_from =  localStorage.getItem("app_absent_from");
var absent_till =  localStorage.getItem("app_absent_till");
var absent_duration =  localStorage.getItem("app_duration");
var reason=localStorage.getItem("app_reason");
function genarate_pdf() {
	alert('hello');
	var doc = new jsPDF();

doc.text(20, 20, 'Date : '+localStorage.getItem("app_date"));
doc.text(20, 30, 'The Course Coordinator');
doc.text(20, 40, 'CSE-17A,CSE Department');
doc.text(20, 50, 'Military Institute of Science & Technology');
doc.text(20, 60, 'Mirpur Cantonment,Dhaka');
doc.text(20,70, 'Application for leave of absence');
doc.text(20,90, 'Dear sir')

doc.text(20,100, 'I am '+localStorage.getItem("app_username")+', a student of '+localStorage.getItem("app_course")+ ' course kindly want to inform');
doc.text(20,110, 'you that I was absent in class from the last '+absent_duration+' days from '+absent_from+' to-');
doc.text(20,120, +absent_till+' due to '+reason.);
doc.text(20,140, 'Kindly grant me leave for those days. I shall be thankful to you for your kindness.');
doc.text(20,140, 'Yours sincerely,');
doc.text(20,150, localStorage.getItem("app_username"));
doc.text(20,160, 'ID :'+localStorage.getItem("app_id"));


doc.save('document.pdf');
}





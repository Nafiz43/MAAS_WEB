function individual_attendance() {

	var level_term=document.getElementById("level_term");
	var level_term_text=level_term.options[level_term.selectedIndex].text;

	var course=document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;
	var s_id=document.getElementById("s_id").value;

	var content='<br>';
    content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';

	if(level_term_text=='Choose your option' && course_text=='Choose your option' && s_id=='')
	{
		document.getElementById("level_term").style.borderColor = "red";
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("s_id").style.borderColor = "red";

		content=content+'<strong>Fill Out </strong>The Fields! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(level_term_text=='Choose your option')
	{
		document.getElementById("level_term").style.borderColor = "red";
		content=content+'Select <strong>Level/Term!</strong></div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(course_text=='Choose your option')
	{
		document.getElementById("course").style.borderColor = "red";
		content=content+'Select<strong> Course! </strong> </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(s_id=='')
	{
		document.getElementById("s_id").style.borderColor = "red";
		content=content+'Select <strong>ID! </strong> </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else
	{
		content='';
		content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		content=content+'<strong>Data </strong>Found! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	
}
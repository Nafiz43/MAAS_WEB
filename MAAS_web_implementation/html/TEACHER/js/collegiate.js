function collegiate() {
	var course=document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;

	var content='';
    content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';

	var batch=document.getElementById("batch");
	var batch_text=course.options[batch.selectedIndex].text;

	if(course_text=='Choose your option' && batch_text=='Choose your option')
	{
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("batch").style.borderColor = "red";
		content=content+'<strong>Fill Out </strong>The Fields! </div> ';
       document.getElementById("alert_there").innerHTML=content;
	}
	else if(course_text=='Choose your option')
	{
		document.getElementById("course").style.borderColor = "red";
		content=content+'<strong>Select </strong>Course! </div> ';
       document.getElementById("alert_there").innerHTML=content;
	}
	
	else if(batch_text=='Choose your option')
	{
		document.getElementById("batch").style.borderColor = "red";
		content=content+'<strong>Select </strong>Batch! </div> ';
       document.getElementById("alert_there").innerHTML=content;
	}
	else
	{
		alert('hello from collegiate page ');
	}

	
	// body...
}
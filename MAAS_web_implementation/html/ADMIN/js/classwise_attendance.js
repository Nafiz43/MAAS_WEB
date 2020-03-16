function classwise_attendance() {

	var date = document.getElementById("date").value;

	var time=document.getElementById("time");
	var time_text=time.options[time.selectedIndex].text;

	var batch=document.getElementById("batch");
	var batch_text=batch.options[batch.selectedIndex].text;

	var course=document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;

	var content='<br>';
    content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';

	if(date=='' && time_text=='Choose your option' && batch_text=='Choose your option' && course_text=='Choose your option')
	{
		document.getElementById("date").style.borderColor = "red";
		document.getElementById("time").style.borderColor = "red";
		document.getElementById("batch").style.borderColor = "red";
		document.getElementById("course").style.borderColor = "red";
    	content=content+'<strong>Fill Out </strong>The Fields! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(date=='')
	{
		document.getElementById("date").style.borderColor = "red";
		content=content+'Enter <strong>Date!</strong></div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(time_text=='Choose your option')
	{
		document.getElementById("time").style.borderColor = "red";
		content=content+'Select <strong>Time Slot! </strong> </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(batch_text=='Choose your option')
	{
		document.getElementById("batch").style.borderColor = "red";
		content=content+'Select <strong>Batch! </strong></div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else if(course_text=='Choose your option')
	{
		document.getElementById("course").style.borderColor = "red";
		content=content+'Select <strong>Course! </strong> </div> ';
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

function apply_application() {

	var userId=localStorage.getItem("value");
	var username=localStorage.getItem("value_username");
	
	//alert("hello world");
	var date =document.getElementById("date").value;
	
	var course =document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;
	// alert(course_text);
	// alert("till there");
	
	var faculty=document.getElementById("faculty");
	var faculty_text=faculty.options[faculty.selectedIndex].text;

	// alert(faculty_text);
	
	var reason=document.getElementById("rsn").value;
	var document_text =document.getElementById("dcm").value;

	//document.getElementById("al").innerHTML=this;
	var content='<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
	// alert(reason);
	// alert(document_text);
	if (date=='' && course_text=='Choose your option' && faculty_text=='Choose your option' && reason=='') {
		document.getElementById("date").style.borderColor = "red";
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("faculty").style.borderColor = "red";
		document.getElementById("rsn").style.borderColor = "red";
		content=content+' <strong> Fill Out </strong> All The Fields! </div>';
		document.getElementById("alert_there").innerHTML=content;

	}
	else if(course_text=='Choose your option' && faculty_text=='Choose your option' && reason==''){
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("faculty").style.borderColor = "red";
		document.getElementById("rsn").style.borderColor = "red";
		content=content+' <strong> Fill Out </strong> All The Fields! </div>';
		document.getElementById("alert_there").innerHTML=content;

	}
	else if(faculty_text=='Choose your option' && reason==''){
		
		document.getElementById("faculty").style.borderColor = "red";
		document.getElementById("rsn").style.borderColor = "red";
		content=content+' <strong> Fill Out </strong> All The Fields! </div>';
		document.getElementById("alert_there").innerHTML=content;

	}
	// alert(document_text);
	else if (date=='' && course_text=='Choose your option' && faculty_text=='Choose your option') {
		document.getElementById("date").style.borderColor = "red";
		document.getElementById("course").style.borderColor = "red";
		document.getElementById("faculty").style.borderColor = "red";
		content=content+' <strong> Fill Out </strong> All The Fields! </div>';
		document.getElementById("alert_there").innerHTML=content;

	}
	else if (date=='' && course_text=='Choose your option') {
		document.getElementById("date").style.borderColor = "red";
		document.getElementById("course").style.borderColor = "red";
		content=content+' <strong> Fill Out </strong> All The Fields! </div>';
		document.getElementById("alert_there").innerHTML=content;
		

	}
	else if (date=='') {
		document.getElementById("date").style.borderColor = "red";
		content=content+' Enter <strong>Date!  </strong>  </div>';
		document.getElementById("alert_there").innerHTML=content;
		
		//alert("Enter Date");
	}
	else if(course_text=="Choose your option"){
		//alert("");
		document.getElementById("course").style.borderColor = "red";
		content=content+'Enter <strong>Course  </strong>   Name! </div>';
		document.getElementById("alert_there").innerHTML=content;
	}
	else if (faculty_text=="Choose your option") {
		//alert("Enter Faculty Name");
		document.getElementById("faculty").style.borderColor = "red";
		content=content+'Enter <strong>Faculty</strong>   Name! </div>';
		document.getElementById("alert_there").innerHTML=content;
	}
	else if(reason==''){
		//alert("Enter a Reason");
		document.getElementById("rsn").style.borderColor = "red";
		content=content+'Enter <strong>Reason!</strong>   </div>';
		document.getElementById("alert_there").innerHTML=content;
	
	}
	else{
		//alert("hello");

		firebase.database().ref('application/'+faculty_text + '/' +course_text ).push({
			App_ID : userId,
			App_name : username,
			App_date : date,
			App_course : course_text,
			App_faculty : faculty_text,
			App_reason : reason,
			App_link : document_text,
		    App_status: 'Pending'
			 }, function(error) {
		    if (error) {
		    	alert("Failed to Save data");
		      // The write failed...
		    } else {
		    	window.location.href = "apply_application_add.html";
		    	//alert("Successfully Saved");
		      // Data saved successfully!
		    }
		  });
		
		


	}
	
}
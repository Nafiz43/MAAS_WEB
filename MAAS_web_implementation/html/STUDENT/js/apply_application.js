
function apply_application() {
	




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

	// alert(reason);
	// alert(document_text);

	if (date=='') {
		document.getElementById("date").style.borderColor = "red";
		alert("Enter Date");
	}
	else if(course_text=="Choose your option"){
		alert("Enter Course Name");
		document.getElementById("course").style.borderColor = "red";
	}
	else if (faculty_text=="Choose your option") {
		alert("Enter Faculty Name");
		document.getElementById("faculty").style.borderColor = "red";
	}
	else if(reason==''){
		alert("Enter a Reason");
		document.getElementById("rsn").style.borderColor = "red";
	
	}
	else{
		alert("hello");

		firebase.database().ref('application/'+faculty_text).push({
			App_ID : '201714043'
			App_date : date,
			App_course : course_text,
			App_faculty : faculty_text,
			App_reason : reason,
			App_link : document_text,
		    App_status: 'Pending'
			 });
		setTimeout(function(){
		 alert("Successful");
		 location.reload();
		 
		 }, 2000);

			//alert('Successful');

			//
	}
	//alert(date);

	

	

	// //alert(date + course_text + faculty_text + reason + document_text);
	// // // body...
	
}
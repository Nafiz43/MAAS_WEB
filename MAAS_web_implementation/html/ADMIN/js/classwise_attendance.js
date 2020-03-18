document.getElementById("detailed_content").style.visibility = "hidden";
function classwise_attendance() {
	//var teacher=localStorage.getItem("value_username");

	var date = document.getElementById("date").value;

	var time=document.getElementById("time");
	var time_text=time.options[time.selectedIndex].text;

	//for(int )

	var batch=document.getElementById("batch");
	var batch_text=batch.options[batch.selectedIndex].text;

	var course=document.getElementById("course");
	var course_text=course.options[course.selectedIndex].text;

	var content='<br>';
    content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';

      var basic_content=''
    var final_content='';
	var table_content='';
	

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
		basic_content='';
		basic_content=basic_content+'<table class="table table-striped" border="2">';
		basic_content=basic_content+'<br>';
		basic_content=basic_content+'<br>';
		basic_content=basic_content+'<thead class="thead-light">';
		basic_content=basic_content+'<tr>';
		basic_content=basic_content+'<th scope="col">Ser No.</th>';
		basic_content=basic_content+'<th scope="col">Roll No.</th>';
		basic_content=basic_content+'<th scope="col">Name</th>';
		basic_content=basic_content+'<th scope="col">Present</th>';
		basic_content=basic_content+'<th scope="col">Absent</th>';
		basic_content=basic_content+'<th scope="col">Excused</th>';
		basic_content=basic_content+'<th scope="col">Faculty Name</th>';
		//content=content+'<th scope="col">Excused</th>';
		basic_content=basic_content+'  </tr>';
		basic_content=basic_content+' </thead>';
		basic_content=basic_content+'<tbody>';

		var s_id;

		var c=1;
		var present_count=0;
		var absent_count=0;
		//alert(batch_text+course_text);

		var rootRef = firebase.database().ref();
	var urlRef = rootRef.child('Enrolled/'+batch_text+'/'+course_text);
	urlRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {

    	
    	var s_id=child.val().ID;
    	//alert(s_id);

    	var s_present;
    	var s_absent;
    	var s_name;
    	var s_excused;

    	

    	//for getting the name

    	firebase.database().ref('User/'+s_id).once('value').then(function(snapshot) {

    		s_name=snapshot.val().username;
  				
		 // alert(s_name);
		}, function(error) {
		    if (error) {
		    	
		      //alert("coming there");
		    } else {
		    	
		   
		    }
		  });
    	//name fetched

    	var flag1=0;
    	var flag2=0;

    	 var rootRef = firebase.database().ref();
  var urlRef = rootRef.child('attendance/CSE-17A/'+course_text+'/');
  urlRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
    	 
    var teacher=child.key; //teacher name



  		//starts here
    	firebase.database().ref('attendance/'+batch_text+'/'+course_text+'/'+teacher+'/'+date+'/'+time_text+'/'+s_id).once('value').then(function(snapshot) {
  				if (snapshot.exists()) {
  					flag1=1;
  					flag2=1;
  					
					firebase.database().ref('attendance/'+batch_text+'/'+course_text+'/'+teacher+'/'+date+'/'+time_text+'/'+s_id).once('value').then(function(snapshot) {
  					if (snapshot.exists()) {
  					//alert('hello');
  					s_present = snapshot.val().p_status;
  					s_absent=1- s_present;
  					s_excused  = snapshot.val().p_excused;
  					
  					table_content=table_content+'<tr>';

  					table_content=table_content+'<td>'+c+'</td>';
  					
  					table_content=table_content+'<td>'+s_id+'</td>';
  					table_content=table_content+'<td>'+s_name+'</td>';
  					table_content=table_content+'<td><div class="checkbox">';
  					if (s_present==1) {
  						table_content=table_content+'<label><input type="checkbox" checked disabled></label>';
  						present_count=present_count+1;
  					}
  					else
  					{
  						table_content=table_content+'<label><input type="checkbox" disabled></label>';
  						absent_count=absent_count+1;
  					}
  					
					table_content=table_content+'</div>';
					table_content=table_content+'</td>';
					table_content=table_content+'<td><div class="checkbox">';
					if (s_absent==1) {
						table_content=table_content+'<label><input type="checkbox" checked disabled></label>';
					}
					else
					{
						table_content=table_content+'<label><input type="checkbox" disabled></label>';
					}
					
					table_content=table_content+'</div>';
					table_content=table_content+'</td>';
					// content=content+'<td><div class="checkbox">';
					// content=content+'<label><input type="checkbox" value=""></label>';
					// content=content+'</div>';
					// content=content+'</td>';
					table_content=table_content+'<td><div class="checkbox">';
					if (s_excused==1) {
						table_content=table_content+'<label><input type="checkbox" checked disabled></label>';
					}
					else
					{
						table_content=table_content+'<label><input type="checkbox" disabled></label>';
					}
					table_content=table_content+'<td>'+teacher+'</td>';

					table_content=table_content+'</div>';
					table_content=table_content+'</td>';
					table_content=table_content+'</tr>';
  					 
				    // alert(s_id+s_name+" "+s_present);

					 // alert(content);
					 final_content=final_content+'</tbody>';
					final_content=final_content+'</table>';
					
					document.getElementById("table_content").innerHTML=basic_content+table_content+final_content;
					final_content='';
					document.getElementById("detailed_content").style.visibility = "visible";
			    document.getElementById("present").innerHTML = '<h4>'+present_count+'</h4>';
				document.getElementById("absent").innerHTML = '<h4>'+ absent_count +'</h4>';
				document.getElementById("percentage").innerHTML = '<h4>'+ parseFloat((present_count/c)*100 )+'% </h4>';
				c=c+1;
				//alert(c);
				var content='';
		    	content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		 		content=content+'<strong>Data </strong>Found! </div> ';
		        document.getElementById("alert_there").innerHTML=content;
		        flag=1;
					 
				  	
  				}
  				else
  				{
  					var content='';
		    	content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
		 		content=content+'<strong>Data not </strong>Found! </div> ';
		        document.getElementById("alert_there").innerHTML=content;
  				}
  				
		     
		  
		});
				  	
  				}
  				else
  				{
  					flag1=0;
  					flag2=1;
  					content='';
					 content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
					 content=content+'No <strong>Record </strong>Found on this date! </div> ';
			        document.getElementById("alert_there").innerHTML=content;
  					
  				}
  				
		     
		  
		});//ends here


  });
});

	// if (flag2==1 && flag1==0) {
					
	// }
    	//check whether enlisted student is present or not
    	
		//content=content+'<th scope="row">1</th>';
		//alert(batch_text+course_text+teacher+date+slot_text+s_id);
		
  
  	
  });
});

		
	}

}
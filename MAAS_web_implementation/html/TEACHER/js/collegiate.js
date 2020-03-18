document.getElementById("detailed_content").style.visibility = "hidden";
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
	 //  <table class="table table-striped" border="1">
  //   <thead class="thead-light">
  //     <tr>
  //       <th>Ser No.</th>
  //       <th>ID</th>
  //       <th>Name</th>
  //       <th>Total Present</th>
  //       <th>Total Absent</th>
  //       <th>Total Excused</th>
  //       <th>Percentage</th>
  //       <th>Status</th>
        

  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td>1</td>
  //       <td>201714043</td>
  //       <td>Nafiz Imtiaz Khan</td>
  //       <td>20</td>
  //       <td>30</td>
  //       <td>1</td>
  //       <td>10%</td>
  //       <td>Collegiate</td>
  //     </tr>
    
  //   </tbody>
  // </table>

		var c=1;
		content=''
		var basic_content=''
    	var final_content='';
		var table_content='';
		basic_content='';
		basic_content=basic_content+'<table class="table table-striped" border="2">';
	
		basic_content=basic_content+'<thead class="thead-light">';
		basic_content=basic_content+'<tr>';
		basic_content=basic_content+'<th scope="col">Ser No.</th>';
		basic_content=basic_content+'<th scope="col">ID</th>';
		basic_content=basic_content+'<th scope="col">Name</th>';
		basic_content=basic_content+'<th scope="col">Total Present</th>';
		basic_content=basic_content+'<th scope="col">Total Absent</th>';
		basic_content=basic_content+'<th scope="col">Total Excused</th>';
		basic_content=basic_content+'<th scope="col">Percentage</th>';
		basic_content=basic_content+'<th scope="col">Status</th>';
		basic_content=basic_content+'</tr>';
		basic_content=basic_content+' </thead>';
		basic_content=basic_content+'<tbody>';

		table_content=table_content+'<tr>';

  					table_content=table_content+'<td>'+c+'</td>';
  					
  					table_content=table_content+'<td>'+'201714043'+'</td>';
  					table_content=table_content+'<td>'+'Nafiz Imtiaz Khan'+'</td>';  //total present
  					table_content=table_content+'<td>'+'20'+'</td>';  //absent
  					table_content=table_content+'<td>'+'10'+'</td>';  //excused
  					table_content=table_content+'<td>'+'1'+'</td>'; 
  					table_content=table_content+'<td>'+'10%'+'</td>'; 
  					table_content=table_content+'<td>'+'Collegiate'+'</td>'; 
  					
					table_content=table_content+'</td>';
					table_content=table_content+'</tr>';
  					 
					 final_content=final_content+'</tbody>';
					final_content=final_content+'</table>';
					
					document.getElementById("table_content").innerHTML=basic_content+table_content+final_content;
					final_content='';
					document.getElementById("detailed_content").style.visibility = "visible";
					document.getElementById("collegiate").innerHTML = '<h4>'+'10'+'</h4>';
					document.getElementById("noncollegiate").innerHTML = '<h4>'+ '10' +'</h4>';
					document.getElementById("discollegiate").innerHTML = '<h4>'+ '10' +'</h4>';

					c=c+1;
		content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		content=content+'<strong>Data </strong>Found! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}

	
	// body...
}
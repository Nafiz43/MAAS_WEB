function fine() {
	var level_term=document.getElementById("level_term");
	var level_term_text=level_term.options[level_term.selectedIndex].text;
		var content='';
	if (level_term_text=='Choose your option')
	{
		document.getElementById("level_term").style.borderColor = "red";
		content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
		content=content+'Select <strong>Level/Term</strong>! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
	else
	{
		
		var c=1;
		var basic_content=''
    	var final_content='';
		var table_content='';
		basic_content='';
		basic_content=basic_content+'<table class="table table-striped" border="2">';
	
		basic_content=basic_content+'<thead class="thead-light">';
		basic_content=basic_content+'<tr>';
		basic_content=basic_content+'<th scope="col">Ser No.</th>';
		basic_content=basic_content+'<th scope="col">Course Code</th>';
		basic_content=basic_content+'<th scope="col">Total Present</th>';
		basic_content=basic_content+'<th scope="col">Total Absent</th>';
		basic_content=basic_content+'<th scope="col">Total Excused</th>';
		basic_content=basic_content+'<th scope="col">Percentage</th>';
		basic_content=basic_content+'<th scope="col">Status</th>';
		basic_content=basic_content+'<th scope="col">Fine</th>';
		basic_content=basic_content+'<th scope="col">Payment Status</th>';
		basic_content=basic_content+'</tr>';
		basic_content=basic_content+' </thead>';
		basic_content=basic_content+'<tbody>';

		table_content=table_content+'<tr>';

  					table_content=table_content+'<td>'+c+'</td>';
  					
  					table_content=table_content+'<td>'+'CSE-401'+'</td>';
  					table_content=table_content+'<td>'+'50'+'</td>';  //total present
  					table_content=table_content+'<td>'+'10'+'</td>';  //absent
  					table_content=table_content+'<td>'+'20'+'</td>';  //excused
  					table_content=table_content+'<td>'+'10%'+'</td>'; 
  					table_content=table_content+'<td>'+'Collegiate'+'</td>'; 
  					table_content=table_content+'<td>'+'1500'+'</td>'; 
  					table_content=table_content+'<td>'+'DUE'+'</td>'; 
					table_content=table_content+'</td>';
					table_content=table_content+'</tr>';
  					 
					 final_content=final_content+'</tbody>';
					final_content=final_content+'</table>';
					
					document.getElementById("table_content").innerHTML=basic_content+table_content+final_content;
					final_content='';
					c=c+1;	
		content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		content=content+'<strong>Data </strong>Found! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
}
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
		
		content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
		content=content+'<strong>Data </strong>Found! </div> ';
        document.getElementById("alert_there").innerHTML=content;
	}
}
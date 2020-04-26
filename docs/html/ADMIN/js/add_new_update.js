
var load_content='';	
	load_content=load_content+'<div class="form-horizontal">';
	load_content=load_content+'<div class="col-sm-offset-5 col-sm-10">';
	load_content=load_content+'<div  class="lds-roller"><div></div><div></div><div>';
	load_content=load_content+'</div><div></div><div></div><div></div><div></div><div></div></div></div></div>';


function user_search() {



	var s_id=document.getElementById("s_id").value;

  var s_username;
  var s_userpass;
  var s_category;
  var s_mail;
  	if (s_id=='') {
  		content='';
		content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
       
        content=content+'Enter <strong> ID </strong> ! </div>';

         document.getElementById("alert_there").innerHTML=content;

  	}
  	else
  	{
  		 document.getElementById("loader").innerHTML=load_content;
  			firebase.database().ref('User/'+s_id).once('value').then(function(snapshot) {
  				if (snapshot.exists()) {
  					 s_username = snapshot.val().username;
				      s_userpass = snapshot.val().userpass;
				      s_category = snapshot.val().usercategory;
				      s_mail     = snapshot.val().useremail;

				      document.getElementById("id").value = s_id;
					  document.getElementById("name").value = s_username;
					  document.getElementById("pass").value =  s_userpass;
					  document.getElementById("email").value= s_mail;
					  
					  if (s_category=="Student") {
					//  	alert("Student");
					  	document.getElementById("category").selectedIndex = 1;
					  }
					  else if (s_category=="Teacher") {
					  	document.getElementById("category").selectedIndex = 2;
					  }
					   else if (s_category=="Admin") {
					  	document.getElementById("category").selectedIndex = 3;
				  	}
				  	content='<br>';
	   				content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
	   				content=content+'<strong>Data </strong> found! </div> ';
	   				 document.getElementById("alert_there").innerHTML=content;
	   				 document.getElementById("loader").innerHTML='';
  				}
  				else
  				{
  					content='<br>';
	   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
	   				content=content+'<strong>No data </strong>found! </div> ';
   				 	document.getElementById("alert_there").innerHTML=content;
  				}
		     
		  
		}, function(error) {
		    if (error) {
		    	alert("asasasas");
		    	content='<br>';
   				content=content+'<div style="font-size: 16pt" class="alert alert-danger" role="alert">';
   				content=content+'<strong>No data </strong>found! </div> ';
   				 document.getElementById("alert_there").innerHTML=content;
		      // The write failed...
		    } else {
		    	alert('asasas');
		    	content='<br>';
   				content=content+'<div style="font-size: 16pt" class="alert alert-success" role="alert">';
   				content=content+'<strong>Data </strong> found! </div> ';
   				 document.getElementById("alert_there").innerHTML=content;
		   
		    }
		  });
  			
  	}

	//alert(s_id);




	
}

function update_user() {
	//alert("Hello");

// 	ref.child('User').orderByChild('userid').equalTo('201714043').on("value", function(snapshot) {
//     console.log(snapshot.val());
//     snapshot.forEach(function(data) {
//         console.log(data.key);
//     });
// });
	


	// //alert("hello");
	
	    var name=document.getElementById("name").value;
		var id=document.getElementById("id").value;
		var pass=document.getElementById("pass").value;

		var category=document.getElementById("category");
		var category_text=category.options[category.selectedIndex].text;
		var s_mail=document.getElementById("email").value;

	

	if (name=='') {
		alert("Enter a Name");
		document.getElementById("name").style.borderColor = "red";
	}
	else if (id=='') {
		alert("Enter an ID");
		document.getElementById("id").style.borderColor = "red";
	}
	else if (pass=='') {
		alert("Enter a Password");
		document.getElementById("pass").style.borderColor = "red";
	}
	else if (category_text=="Choose your option") {
		alert("Select Category");
		document.getElementById("category").style.borderColor = "red";
	}
	else if(s_mail=='')
	{
		alert("Enter Email");
		document.getElementById("email").style.borderColor = "red";
	}
	else
	{
		// alert("Hello "+name);
		// alert(id);
		// alert(category_text);

		firebase.database().ref('User/'+id).set({
	        username: name,
	   		userpass : pass,
	   		usercategory : category_text,
	   		useremail    : s_mail
			    }, function(error) {
		    if (error) {
		    	alert("Failed to Save data");
		      // The write failed...
		    } else {
		    	alert("Successfully Saved");
		      // Data saved successfully!
		    }
		  });
		
		//setTimeout(function(){ alert("Successful"); }, 2000);

	}

	

	// body...
}



function push_user() {
	//alert("hello");
	var name=document.getElementById("name").value;
	var id=document.getElementById("id").value;
	var pass=document.getElementById("pass").value;

	var category=document.getElementById("category");
	var category_text=category.options[category.selectedIndex].text;

	var content='<br>';
    content=content+'<div class="alert alert-danger alert-dismissible fade in">';
    content=content+'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
    // <strong>Info!</strong> This alert box could indicate a neutral informative change or action.

	

	if (name=='') {
		//alert("Enter a Name");
		document.getElementById("name").style.borderColor = "red";
		 content=content+'Empty <strong>Name</strong> not allowed! </div> ';
         document.getElementById("alert_there").innerHTML=content;
	}
	else if (id=='') {
		//alert("Enter an ID");
		document.getElementById("id").style.borderColor = "red";
		//document.getElementById("name").style.borderColor = "red";
		 content=content+'Empty <strong>UserID</strong> not allowed! </div> ';
         document.getElementById("alert_there").innerHTML=content;
	}
	else if (pass=='') {
		//alert("Enter a Password");
		document.getElementById("pass").style.borderColor = "red";
		 content=content+'Empty User <strong>Password</strong>  not allowed! </div> ';
         document.getElementById("alert_there").innerHTML=content;
	}
	else if (category_text=="Choose your option") {
		//alert("Empty category of user not allowed");
		document.getElementById("category").style.borderColor = "red";
		 content=content+'Empty <strong>Category</strong>  of user not allowed! </div> ';
         document.getElementById("alert_there").innerHTML=content;
	}
	else
	{
		// alert("Hello "+name);
		// alert(id);
		// alert(category_text);
		//alert("Hello");

		// firebase.database().ref('User/'+id).set({
	 //        username: name,
	 //   		userpass : pass,
	 //   		 usercategory: category_text
		// 	    });
		
		// setTimeout(function(){ alert("Successful"); }, 1000);

			firebase.database().ref('User/' + id).set({
		    username: name,
	   		userpass : pass,
	   		usercategory: category_text
		  }, function(error) {
		    if (error) {
		    	alert("Failed to Save data");
		      // The write failed...
		    } else {
		    	alert("Successfully Saved");
		      // Data saved successfully!
		    }
		  });

			
		}

	}


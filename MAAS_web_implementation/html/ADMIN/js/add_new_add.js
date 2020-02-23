


function push_user() {
	//alert("hello");
	var name=document.getElementById("name").value;
	var id=document.getElementById("id").value;
	var pass=document.getElementById("pass").value;

	var category=document.getElementById("category");
	var category_text=category.options[category.selectedIndex].text;

	

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


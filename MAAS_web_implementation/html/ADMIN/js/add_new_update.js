

//var s_id=document.getElementById("s_id").value;

// var name=document.getElementById("name").value;
// 	var id=document.getElementById("id").value;
// 	var pass=document.getElementById("pass").value;

// 	var category=document.getElementById("category");
// 	var category_text=category.options[category.selectedIndex].text;


function user_search() {
	// document.getElementById("foo").value ="43572";

	 // document.getElementById("foo").style.borderColor = "red";



	var s_id=document.getElementById("s_id").value;

  var s_username;
  var s_userpass;
  var s_category;

	//alert(s_id);

	firebase.database().ref('User/'+s_id).once('value').then(function(snapshot) {
      s_username = snapshot.val().username;
      s_userpass = snapshot.val().userpass;
      s_category = snapshot.val().usercategory;
      

      document.getElementById("id").value = s_id;
	  document.getElementById("name").value = s_username;
	  document.getElementById("pass").value =  s_userpass;
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
  

  //var all=snapshot.val();
  //(s_username);
  // ...
});


	// body...
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

		firebase.database().ref('User/'+id).set({
	        username: name,
	   		userpass : pass,
	   		usercategory : category_text
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
var p;
var m;
var n;
var username;
var course_text;
var i=0;




function application_list() {
	
	var content2='';
	var content='<br>';

    username = localStorage.getItem("value_username");
    var course =document.getElementById("course");
	course_text=course.options[course.selectedIndex].text;
	if (course_text=='Choose your option') {
		var content= '<div class="alert alert-danger" role="alert">';
		content = content+ 'Select a course!';
		content = content+'</div>';
		document.getElementById("alert_there").innerHTML=content;
		
	}
	else
	{

	
	var rootRef = firebase.database().ref();
	var urlRef = rootRef.child('application/'+username+'/'+course_text);
	urlRef.once("value", function(snapshot) {
 	snapshot.forEach(function(child) {
  	m=child.val().App_ID;
  	n=child.val().App_date;
  	//i++;
  	//alert(m);
  	//alert(m);
  	 content2 = content2 + '<button id='+m+' onclick=process(this.id) type="button" class="list-group-item list-group-item-action">' + '<strong>'+ m+'</strong>  '+n + '</button>';
  	 document.getElementById("application_li").innerHTML=content2;
    //console.log(child.val().App_ID);
  });
});


	}


}


function process(m) {
	//alert(m);

	var rootRef = firebase.database().ref();
  var urlRef = rootRef.child('application/'+username+'/'+course_text);
  urlRef.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
    //m=child.val().App_ID;
    //n=child.val().App_date;
    if (child.val().App_ID==m) {
      //alert('found');
      var username=child.val().App_name;
        var date=child.val().App_date;
        var reason=child.val().App_reason;
        var link = child.val().App_link;
        var course = child.val().App_course;
        var id=m;
        var absent_from = child.val().App_absent_from;
        var absent_till = child.val().App_absent_till;
        var duration = child.val().App_duration;


        //localStorage.setItem()
      //  alert(username);
      //  alert('from process');
        localStorage.setItem("app_username", username);
        localStorage.setItem("app_date", date);
        localStorage.setItem("app_reason", reason);
        localStorage.setItem("app_link", link);
        localStorage.setItem("app_course", course);
        localStorage.setItem("app_id", id);
        localStorage.setItem("app_absent_from", absent_from);
        localStorage.setItem("app_absent_till", absent_till);
        localStorage.setItem("app_duration", duration);
        
        window.location.replace("application_view.html");

    }
    else
    {
      //alert('error occured');
    }
    
  });
});

	// firebase.database().ref('application/'+username+'/'+course_text).once('value').then(function(snapshot) {
    
 //      p=snapshot.val().App_ID;
 //      if (snapshot.val().App_ID==p) {
 //      	var username=snapshot.val().App_name;
 //      	var date=snapshot.val().App_date;
 //      	var reason=snapshot.val().App_reason;
 //      	var link = snapshot.val().App_link;
 //      	var course = snapshot.val().App_course;
 //      	var id=p;
 //      	//localStorage.setItem()
 //      	alert(username);
 //      	alert('from process');
 //      	localStorage.setItem("app_username", username);
 //      	localStorage.setItem("app_date", date);
 //      	localStorage.setItem("app_reason", reason);
 //      	localStorage.setItem("app_link", link);
 //      	localStorage.setItem("app_course", course);
 //      	localStorage.setItem("app_id", id);
 //      	window.location.replace("application_view.html");

 //      }

  
	// });

}
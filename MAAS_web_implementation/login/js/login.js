   
   var userid;
   function check(form) {
                    var content='<br>';
                    content=content+'<div class="alert alert-danger" role="alert">';
                    var input = $('.validate-input .input100');
        // 
        // content=content+'';
        //           


                 /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                  //alert("Calling");

                  userid=document.getElementById("userid").value;
                  var password=document.getElementById("password").value;
                  localStorage.setItem("value",userid);

                  if (userid=='' && password=='') {
                  	var thisAlert = $(input).parent();
       				$(thisAlert).addClass('alert-validate');
                    content=content+'Empty UserID and Password! </div> ';
                    document.getElementById("alert_there").innerHTML=content;
                    document.getElementById("userid").style.borderColor = "red";
                    document.getElementById("password").style.borderColor = "red";

                  }
                  else if (userid=='') {
                  	var thisAlert = $(input[0]).parent();
       				$(thisAlert).addClass('alert-validate');
                     content=content+'Empty UserID not allowed! </div> ';
                    document.getElementById("alert_there").innerHTML=content;
                    document.getElementById("userid").style.borderColor = "red";
                  }
                  else if (password=='') {
                  	var thisAlert = $(input[1]).parent();
       				$(thisAlert).addClass('alert-validate');
                     content=content+'Empty Password not allowed! </div> ';
                    document.getElementById("alert_there").innerHTML=content;
                    document.getElementById("password").style.borderColor = "red";
                  }
                  else
                  {
                     
                    firebase.database().ref('User/' + userid).once('value').then(function(snapshot) {
                     //alert("hello");

                      var s_userpass = snapshot.val().userpass;
                      //alert('hello');

                      if(s_userpass==password){
                        var s_category=snapshot.val().usercategory;
                        if (s_category=="Admin") {
                             window.close()
                             window.open('../html/ADMIN/Admin_Home.html')

                        }
                        else if(s_category=="Student"){
                            window.close()
                            window.open('../html/STUDENT/student_main.html')
                        }
                        else if(s_category=="Teacher"){
                            window.close()
                            window.open('../html/TEACHER/Teacher_home.html')
                        }

                      }
                      else{
                        content=content+'Invalid Password!! </div> ';
                        document.getElementById("alert_there").innerHTML=content;
                        document.getElementById("userid").style.borderColor = "red";
                        //alert("Error Password or Username")
                      }
                     
                      
                  }).catch(function(error) {
                    content=content+'Invalid UserID!! </div> ';
                    document.getElementById("alert_there").innerHTML=content;
                    document.getElementById("userid").style.borderColor = "red";
  // Uh-oh, an error occurred!
                });






                  } 


                  
                  
                    
                  
            }

  
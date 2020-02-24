   function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                  //alert("Calling");
                  var userid=document.getElementById("userid").value;
                  var password=document.getElementById("password").value;
                  
                  
                    firebase.database().ref('User/' + userid).once('value').then(function(snapshot) {
                     //alert("hello");

                      var s_userpass = snapshot.val().userpass;
                      //alert(s_userpass);

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
                        alert("Error Password or Username")
                      }
                     
                      

                 //      document.getElementById("id").value = s_id;
                    //   document.getElementById("name").value = s_username;
                    //   document.getElementById("pass").value =  s_userpass;
                    //   if (s_category=="Student") {
                    // //   alert("Student");
                    //      document.getElementById("category").selectedIndex = 1;
                    //   }
                    //   else if (s_category=="Teacher") {
                    //      document.getElementById("category").selectedIndex = 2;
                    //   }
                    //    else if (s_category=="Admin") {
                    //      document.getElementById("category").selectedIndex = 3;
                 //     }
                  

                  //var all=snapshot.val();
                  //(s_username);
                  // ...
                });
                   // alert("Error Password or User      name");

                // if(form.username.value == "sumaiya"||"aurchi" && form.pass.value == "sumaiya") {
                //     window.open('../html/STUDENT/student_main.html')/*opens the target page while Id & password matches*/
                // }
                // else if(form.username.value == "nafiz" && form.pass.value == "nafiz") {
                //     window.open('../html/ADMIN/Admin_Home.html')opens the target page while Id & password matches
                // }
                // else if(form.username.value == "jhumu" && form.pass.value == "jhumu") {
                //     window.open('../html/TEACHER/Teacher_home.html')/*opens the target page while Id & password matches*/
                // }
                // else {
                //     alert("Error Password or Username")/*displays error message*/
                // }
            }

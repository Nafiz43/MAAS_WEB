
// Initialize Firebase
var config = {
   apiKey: "AIzaSyCNM0HlObFHsCwM3iZhV8i0Qxwn3mmTYJg",
    authDomain: "maas-fb909.firebaseapp.com",
    databaseURL: "https://maas-fb909.firebaseio.com",
    projectId: "maas-fb909",
    storageBucket: "maas-fb909.appspot.com",
    messagingSenderId: "147741298520",
    appId: "1:147741298520:web:500360dba2aa5dd2d91f2d",
    measurementId: "G-ZFZHDL8MDG"
};
firebase.initializeApp(config);


function Write_d() {
      //  firebase.initializeApp(firebaseConfig);
    
      //alert(p);
      firebase.database().ref('U').push({
        username: 'Na',
        email: '0ac'
       });
      alert('Successfully uploaded');
      return true;

    // body...
  }

function function_name(argument) {
	firebase.database().ref('U/').once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val().username;
    alert(childKey);

    // ...
  });
	// body...
}

function Read_d() {
	firebase.database().ref('U/').once('value').then(function(snapshot) {
  var username = ( snapshot.val().username);
  //var all=snapshot.val();
  alert(username);
  // ...
});
	// body...
}

function calculate() {
	//alert('Hello');
	var l1t1c = parseFloat(document.getElementById("l1t1c").value);
	var l1t1 = parseFloat(document.getElementById("l1t1").value);

	var l1t2c = parseFloat(document.getElementById("l1t2c").value);
	var l1t2 = parseFloat(document.getElementById("l1t2").value);

	var l2t1c = parseFloat(document.getElementById("l2t1c").value);
	var l2t1 = parseFloat(document.getElementById("l2t1").value);

	var l2t2c = parseFloat(document.getElementById("l2t2c").value);
	var l2t2 = parseFloat(document.getElementById("l2t2").value);

	var l3t1c = parseFloat(document.getElementById("l3t1c").value);
	var l3t1 = parseFloat(document.getElementById("l3t1").value);

	var l3t2c = parseFloat(document.getElementById("l3t2c").value);
	var l3t2 = parseFloat(document.getElementById("l3t2").value);

	var l4t1c = parseFloat(document.getElementById("l4t1c").value);
	var l4t1 = parseFloat(document.getElementById("l4t1").value);

	var l4t2c = parseFloat(document.getElementById("l4t2c").value);
	var l4t2 = parseFloat(document.getElementById("l4t2").value);

	var p=(l1t1*l1t1c)+(l1t2*l1t2c)+(l2t1*l2t1c)+(l2t2*l2t2c)+(l3t1*l3t1c)+(l3t2*l3t2c)+(l4t1*l4t1c)+(l4t2*l4t2c);
	var q=(l1t1c+l1t2c+l2t1c+l2t2c+l3t1c+l3t2c+l4t1c+l4t2c);
	var res=p/q;
	document.getElementById("final").innerHTML=res;
	

	alert(res);




	
	//parse 
	// body...
}
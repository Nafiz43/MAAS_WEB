
function delete_user() {
	//alert("Hello");
	var id=document.getElementById("id").value;
	let userRef = firebase.database().ref('User/' + id);
    userRef.remove();
    alert("Successfully Removed");

	// body...
}
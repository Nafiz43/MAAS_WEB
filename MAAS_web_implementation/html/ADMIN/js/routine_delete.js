function delete_routine() {
	var classroom = document.getElementById("classroom").value;

	var classroom=document.getElementById("classroom");
	var classroom_text=classroom.options[classroom.selectedIndex].text;

	//alert(classroom_text);

	let userRef = firebase.database().ref('Routine/' + classroom_text);
    userRef.remove();

    alert("Successfully Removed");

	
	// body...
}
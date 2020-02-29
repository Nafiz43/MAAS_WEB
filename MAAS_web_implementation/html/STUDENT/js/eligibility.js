function test() {
	//alert('Hello');

	var p=localStorage.getItem("value");
	alert(p);
	// 	var p=document.getElementById("userid").value;
	// alert(p);


	

	var content='';
	content=content+ '<tr >';
    content=content+ '<td>SADD Sessional</td>';
    content=content+  '<td>CSE-402</td>';
    content=content+    '<td>LAB</td>';
    content=content+    '<td>NON-COLLEGIATE</td>';
    content=content+  '</tr>';
	$('#table').append(content);
	alert("ll");
	
	// body...
}
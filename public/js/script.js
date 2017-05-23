function loginLoad(){
	document.getElementById('title-container').style.opacity = "1";
	console.log("yay!");
}
function assignmentLoad(){
	document.getElementById('assign-container').style.transform = "translateY(0px)";
	document.getElementById('title-container').style.transform = "translateY(0px)";
	console.log("yay!");
}
function assignmentTransition(){
	document.getElementById('assign-container').style.transform = "translateY(700px)";
	document.getElementById('title-container').style.transform = "translateY(700px)";
	
	setTimeout(function(){
		window.location.href = "energyvampire.html";
	}, 700);

}
function vampireLoad(){
		document.getElementById('title-container').style.opacity = "1";
		document.getElementById('banner-container').style.opacity = "1";

}
function showGraphs(){
	$('#myChart').show();
}

// Animation functions
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
	document.getElementById('assign-container').style.transform = "translateY(100vh)";
	document.getElementById('title-container').style.transform = "translateY(100vh)";
	
	setTimeout(function(){
		window.location.href = "energyvampire.html";
	}, 700);

}
function vampireLoad(){
		document.getElementById('title-container').style.opacity = "1";

}
function showGraphs(){
	$('#myChart').show();
}



//Puts values chosen into an array listed below

var value_array = [];

// value_array[0] = TV
// value_array[1] = Tablet
// value_array[2] = Video Game Console
// value_array[3] = Lamp

// value_array[4] = Toaster
// value_array[5] = Microwave
// value_array[6] = Coffee Maker

// value_array[7] = Laptop
// value_array[8] = Cellphone Charger
// value_array[9] = Computer (Desktop)
// value_array[10] = Printer

$(document).ready(function () {
	$('.form-control').change(function(){
	    value_array = $('.form-control').find('option:selected').map(function(){return $(this).val();});
	});
});

//scroll to results page
function resultsPage(){
	console.log("clicked");
	$('#results-container').css('display', 'inherit');
	$('body').animate({
        scrollTop: $("#results-container").offset().top
    }, 1000);
}
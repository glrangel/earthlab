
var value_array = [];
var energy_array = [];

var TV_CONST = 1; //values to multiply by
var TABLET_CONST = 1;
var CONSOLE_CONST = 1;
var LAMP_CONST = 1;

var TOASTER_CONST = 1;
var MICROWAVE_CONST = 1;
var COFFEE_CONST = 1;

var LAPTOP_CONST = 1;
var CELLPHONE_CONST = 1;
var COMPUTER_CONST = 1;
var PRINTER_CONST = 1;


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

function initializeArray(){
	console.log("printing...2");
	for(i = 0;i<11;i++){
		value_array[i] = 0;
	}
}

$(document).ready(function () {
	initializeArray();
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
    printItems();
    calculateItems();
}

function printItems(){
	console.log("printing...");
	for(i = 0;i<value_array.length;i++){
		console.log(value_array[i]);
	}
}

function calculateItems(){

	//ex. energy array[0] = the number of TV's * caluclated stuff from spreadsheet LIESE CAN YOU DO STUFF HERE?? -------------
	
	energy_array[0] = value_array[0] * TV_CONST;		 //TV
	energy_array[1] = value_array[1] * TABLET_CONST;  //Tablet
	energy_array[2] = value_array[2] * CONSOLE_CONST; //Video Game Console
	energy_array[3] = value_array[3] * LAMP_CONST; 	 //Lamp

	energy_array[4] = value_array[4] * TOASTER_CONST;   //Toaster
	energy_array[5] = value_array[5] * MICROWAVE_CONST; //Microwave
	energy_array[6] = value_array[6] * COFFEE_CONST;    //Coffee Maker

	energy_array[7] = value_array[7] * LAPTOP_CONST; 	//Laptop
	energy_array[8] = value_array[8] * CELLPHONE_CONST;  //Cellphone Charger
	energy_array[9] = value_array[9] * COMPUTER_CONST;   //Computer (Desktop)
	energy_array[10] = value_array[10] * PRINTER_CONST;   //Printer

	$('#results-container p:nth-child(2)').text("TV: " + value_array[0]);
	$('#results-container p:nth-child(3)').text("Tablet: " + value_array[1]);
	$('#results-container p:nth-child(4)').text("Video Game Console: " + value_array[2]);
	$('#results-container p:nth-child(5)').text("Lamp: " + value_array[3]);

	$('#results-container p:nth-child(6)').text("Toaster: " + value_array[4]);
	$('#results-container p:nth-child(7)').text("Microwave Oven: " + value_array[5]);
	$('#results-container p:nth-child(8)').text("Coffee Maker: " + value_array[6]);

	$('#results-container p:nth-child(9)').text("Laptop: " + value_array[7]);
	$('#results-container p:nth-child(10)').text("Cellphone Charger: " + value_array[8]);
	$('#results-container p:nth-child(11)').text("Computer (Desktop): " + value_array[9]);
	$('#results-container p:nth-child(12)').text("Printer: " + value_array[10]);

}


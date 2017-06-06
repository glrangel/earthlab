// Values below were calculated from SDGE database
var NUM_OF_ITEMS = 11;
//-------COST SAVINGS------//
var TV_SAVEDMON = 10.26; //values to multiply by
var TABLET_SAVEDMON = 1;
var CONSOLE_SAVEDMON = 1.73;
var LAMP_SAVEDMON = 0.20;

var TOASTER_SAVEDMON = 1.80;
var MICROWAVE_SAVEDMON = 8.54;
var COFFEE_SAVEDMON = 1.71;

var LAPTOP_SAVEDMON = 15.24;
var CELLPHONE_SAVEDMON = 0.44;
var COMPUTER_SAVEDMON = 4.86;
var PRINTER_SAVEDMON = 3.25;

//-----ENERGY SAVINGS-------//
var TV_SAVEDENER = 51.18; 
var TABLET_SAVEDENER = 1;
var CONSOLE_SAVEDENER = 8.63;
var LAMP_SAVEDENER = 1;

var TOASTER_SAVEDENER = 9;
var MICROWAVE_SAVEDENER = 8.54;
var COFFEE_SAVEDENER = 9.74;

var LAPTOP_SAVEDENER = 76.04;
var CELLPHONE_SAVEDENER = 2.22;
var COMPUTER_SAVEDENER = 24.26;
var PRINTER_SAVEDENER = 16.23;


//above values put into array
var money_const_array = 
[TV_SAVEDMON,TABLET_SAVEDMON,CONSOLE_SAVEDMON,LAMP_SAVEDMON,
TOASTER_SAVEDMON,MICROWAVE_SAVEDMON,COFFEE_SAVEDMON,
LAPTOP_SAVEDMON,CELLPHONE_SAVEDMON,COMPUTER_SAVEDMON, PRINTER_SAVEDMON];

var energy_const_array = [TV_SAVEDENER,TABLET_SAVEDENER,CONSOLE_SAVEDENER,LAMP_SAVEDENER,
TOASTER_SAVEDENER,MICROWAVE_SAVEDENER,COFFEE_SAVEDENER,
LAPTOP_SAVEDENER,CELLPHONE_SAVEDENER,COMPUTER_SAVEDENER, PRINTER_SAVEDENER];

var value_array = [];
var energysavings_array = [];
var moneysavings_array = [];
var item_array =["TV","Tablet","Video Game Console","Lamp","Toaster",
	"Microwave Oven","Coffee Maker","Laptop","Cellpone Charger","Computer (Desktop)","Printer"];


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



/* Puts values chosen into an array listed below
*
*	value_array[0] = TV
* 	value_array[1] = Tablet
* 	value_array[2] = Video Game Console
* 	value_array[3] = Lamp
*
* 	value_array[4] = Toaster
* 	value_array[5] = Microwave
* 	value_array[6] = Coffee Maker
*
* 	value_array[7] = Laptop
* 	value_array[8] = Cellphone Charger
* 	value_array[9] = Computer (Desktop)
* 	value_array[10] = Printer
*/
$(document).ready(function () {
	initializeArray();
	$('.form-control').change(function(){
	    value_array = $('.form-control').find('option:selected').map(function(){return $(this).val();});
	});
});

function initializeArray(){
	console.log("Initializing array...");
	for(i = 0;i<NUM_OF_ITEMS;i++){
		value_array[i] = 0;
	}
	console.log("Array successfully initialized!");

}

//scroll to results page
function resultsPage(){
	$('#results-container').css('display', 'inherit');
	$('body').animate({
        scrollTop: $("#results-container").offset().top
    }, 1000);
    // printItems();
    calculateItems();
}

//debug function
// function printItems(){
// 	console.log("printing...");
// 	for(i = 0;i<value_array.length;i++){
// 		console.log(value_array[i]);
// 	}
// }

//Calculating functions
function moneyAndEnergySaved(){
	for(var i = 0; i<value_array.length; i++){
		if(i == 1) //skip tablet because values are not that accurate
			continue;
		else{
			moneysavings_array[i] = value_array[i] * money_const_array[i];
			energysavings_array[i] = value_array[i] * energy_const_array[i];
		}

	}
}
function populateGraphs(){
	//print all items
	for(var i = 0; i<value_array.length; i++){
		$('#results-container p:nth-child(' + (i+2) + ')')
			.text(item_array[i] + ": " + value_array[i] + " Money saved: " + moneysavings_array[i]+ " Energy saved: " + energysavings_array[i]);
	}


}
function calculateItems(){
	moneyAndEnergySaved();	
	populateGraphs();
}


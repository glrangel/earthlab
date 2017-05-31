
var value_array = [];
var energysavings_array = [];
var moneysavings_array = [];

//-------COST SAVINGS------//
var TV_SAVEDMON = 10.26; //values to multiply by
//var TABLET_SAVEDMON = 1;
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
//var TABLET_SAVEDMON = 1;
var CONSOLE_SAVEDENER = 8.63;
var LAMP_SAVEDENER = 1;

var TOASTER_SAVEDENER = 9;
var MICROWAVE_SAVEDENER = 8.54;
var COFFEE_SAVEDENER = 9.74;

var LAPTOP_SAVEDENER = 76.04;
var CELLPHONE_SAVEDENER = 2.22;
var COMPUTER_SAVEDENER = 24.26;
var PRINTER_SAVEDENER = 16.23;


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
	
	moneysavings_array[0] = value_array[0] * TV_SAVEDMON;		 //TV
	moneysavings_array[1] = value_array[1] * TABLET_SAVEDMON;  //Tablet
	moneysavings_array[2] = value_array[2] * CONSOLE_SAVEDMON; //Video Game Console
	moneysavings_array[3] = value_array[3] * LAMP_SAVEDMON; 	 //Lamp

	moneysavings_array[4] = value_array[4] * TOASTER_SAVEDMON;   //Toaster
	moneysavings_array[5] = value_array[5] * MICROWAVE_SAVEDMON; //Microwave
	moneysavings_array[6] = value_array[6] * COFFEE_SAVEDMON;    //Coffee Maker

	moneysavings_array[7] = value_array[7] * LAPTOP_SAVEDMON; 	//Laptop
	moneysavings_array[8] = value_array[8] * CELLPHONE_SAVEDMON;  //Cellphone Charger
	moneysavings_array[9] = value_array[9] * COMPUTER_SAVEDMON;   //Computer (Desktop)
	moneysavings_array[10] = value_array[10] * PRINTER_SAVEDMON;   //Printer

	energysavings_array[0] = value_array[0] * TV_SAVEDMON;		 //TV
	energysavings_array[1] = value_array[1] * TABLET_SAVEDMON;  //Tablet
	energysavings_array[2] = value_array[2] * CONSOLE_SAVEDMON; //Video Game Console
	energysavings_array[3] = value_array[3] * LAMP_SAVEDMON; 	 //Lamp

	energysavings_array[4] = value_array[4] * TOASTER_SAVEDMON;   //Toaster
	energysavings_array[5] = value_array[5] * MICROWAVE_SAVEDMON; //Microwave
	energysavings_array[6] = value_array[6] * COFFEE_SAVEDMON;    //Coffee Maker

	energysavings_array[7] = value_array[7] * LAPTOP_SAVEDMON; 	//Laptop
	energysavings_array[8] = value_array[8] * CELLPHONE_SAVEDMON;  //Cellphone Charger
	energysavings_array[9] = value_array[9] * COMPUTER_SAVEDMON;   //Computer (Desktop)
	energysavings_array[10] = value_array[10] * PRINTER_SAVEDMON;   //Printer

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

	//-----------display yearly energy saved------------//
	$('#results-container p:nth-child(13)').text("Energy saved for TV: " + energysavings_array[0]);
	//$('#results-container p:nth-child(3)').text("Energy saved for Tablet: " + value_array[1]);
	$('#results-container p:nth-child(14)').text("Energy saved for Video Game Console: " + energysavings_array[2]);
	$('#results-container p:nth-child(15)').text("Energy saved for Lamp: " + energysavings_array[3]);

	$('#results-container p:nth-child(16)').text("Energy saved for Toaster: " + energysavings_array[4]);
	$('#results-container p:nth-child(17)').text("Energy saved for Microwave Oven: " + energysavings_array[5]);
	$('#results-container p:nth-child(18)').text("Energy saved for Coffee Maker: " + energysavings_array[6]);

	$('#results-container p:nth-child(19)').text("Energy saved for Laptop: " + energysavings_array[7]);
	$('#results-container p:nth-child(20)').text("Energy saved for Cellphone Charger: " + energysavings_array[8]);
	$('#results-container p:nth-child(21)').text("Energy saved for Computer (Desktop): " + energysavings_array[9]);
	$('#results-container p:nth-child(22)').text("Energy saved for Printer: " + energysavings_array[10]);

	//---------display yearly money saved-------------//
	//-----------display energy saved------------//
	$('#results-container p:nth-child(23)').text("Money saved for TV: " + moneysavings_array[0]);
	//$('#results-container p:nth-child(3)').text("Energy saved for Tablet: " + value_array[1]);
	$('#results-container p:nth-child(24)').text("Money saved for Video Game Console: " + moneysavings_array[2]);
	$('#results-container p:nth-child(25)').text("Money saved for Lamp: " + moneysavings_array[3]);

	$('#results-container p:nth-child(26)').text("Money saved for Toaster: " + moneysavings_array[4]);
	$('#results-container p:nth-child(27)').text("Money saved for Microwave Oven: " + moneysavings_array[5]);
	$('#results-container p:nth-child(28)').text("Money saved for Coffee Maker: " + moneysavings_array[6]);

	$('#results-container p:nth-child(29)').text("Money saved for Laptop: " + moneysavings_array[7]);
	$('#results-container p:nth-child(30)').text("Money saved for Cellphone Charger: " + moneysavings_array[8]);
	$('#results-container p:nth-child(31)').text("Money saved for Computer (Desktop): " + moneysavings_array[9]);
	$('#results-container p:nth-child(32)').text("Money saved for Printer: " + moneysavings_array[10]);

}


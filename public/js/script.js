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

var value_array = []; //number of items that the user has
var energysavings_array = [];
var moneysavings_array = [];
var item_array =["TV","Tablet","Video Game Console","Lamp","Toaster",
	"Microwave Oven","Coffee Maker","Laptop","Cellpone Charger","Computer (Desktop)","Printer"];

function itemObj(name,value){
	this.name = name;
	this.value = value;
}

// Animation functions
function loginLoad(){
	document.getElementById('title-container').style.opacity = "1";
	document.getElementById('enter-button').style.opacity = "1";
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
	$('#submit').css('display','none'); //hide button
	$('#results-container').css('display', 'flex');
	$('body').animate({
        scrollTop: $("#results-container").offset().top
    }, 1000);
    calculateItems();
    //hide submit button
}
function calculateItems(){
	moneyAndEnergySaved();	
	populateGraphs();
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
		moneysavings_array[i] = new itemObj(item_array[i], (value_array[i] * money_const_array[i]));
		energysavings_array[i] = new itemObj(item_array[i], (value_array[i] * energy_const_array[i]));
	}
	moneysavings_array.sort(compare);
	energysavings_array.sort(compare);
	calcTotalMoneyAndEnergySaved();
}
function calcTotalMoneyAndEnergySaved(){
	var totalMoney = 0,totalEnergy = 0,numOfTrees = 0;
	for(var i = 0; i< NUM_OF_ITEMS;i++){
		totalMoney += (moneysavings_array[i].value);
		totalEnergy += (energysavings_array[i].value);
	}

	//https://www.epa.gov/sites/production/files/2015-12/documents/emission-factors_nov_2015.pdf
	//average in california 650.31 lbs CO2 / MWH average of all sources of energy (fossil fuels, solar, etc.)
	//650.31 lbs CO2 / MWH  1 MWH / 1000 kWh = 0.65031 lbs CO2 / kWh
	
	//https://www.fueleconomy.gov/feg/contentIncludes/co2_inc.htm
	//1 gallon of gas burns to 20 pounds of CO2

	//https://www.epa.gov/fueleconomy/trends-report
	//average MPG in usa in 2015 is 24.8 mpg
 
	numOfTrees = Math.round((totalEnergy * 0.65031) / 20);//totalEnergy / 1;
	var mpg = 24.8;
	//assign html elements, bolded and changed color to standout
	$('#money-saved').html("Money Saved Per Year: <br><b style='color:rgba(50,250,100,1);'>$" + totalMoney.toFixed(2) +"</b>");
	$('#energy-saved').html("Energy Saved Per Year: <br><b style='color:rgba(50,250,100,1);'>" + totalEnergy.toFixed(2) + " kWh</b>");
	//display number of trees saved based on totalEnergy value
	$('#tree-paragraph').html("That is about the same amount energy required to burn " + " <br><b style='color:rgba(50,250,100,1);'>" 
		+ numOfTrees + " gallons of gas</b>!<br> That's like driving <br><b style='color:rgba(50,250,100,1);'>" 
		+ numOfTrees * mpg + "</b> miles!");

	//show correct number of trees saved
	for(var i = 0; i < numOfTrees  ; i++){
		// $('#tree-paragraph').after('<img class="tree-images" src="images/happy_tree.png">');
	}
}

function displayValues(){
	for(var i = 0; i<value_array.length; i++){
		console.log(item_array[i] + ": " + value_array[i] + " Money saved: " 
			+ moneysavings_array[i]+ " Energy saved: " + energysavings_array[i]);
	}
}

function populateGraphs(){
	//print all items
	// displayValues();
	populateMoneyGraph(); //function is in graphs.js
	populateEnergyGraph(); //function is in graphs.js
	$('#myChart').css('display','block');
	$('#myChart2').css('display','block');

}

function compare(a,b) {
  if (a.value > b.value)
    return -1;
  if (a.value < b.value)
    return 1;
  return 0;
}

function refresh(){
	//destroys old charts to ensure the glitching overlay bug does not occur
	myDoughnutChart2.destroy();
	myDoughnutChart1.destroy(); 
	$('body').animate({
        scrollTop: $("#title-container").offset().top
    }, 1000);
    $('.selectpicker').each(function(){this.selectedIndex = 0;})
    $('#results-container').css('display', 'none'); //hide container
	$('#submit').css('display','inline'); //hide button
	//show submit butotn
}



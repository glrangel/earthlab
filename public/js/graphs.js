var option = {
responsive: true,
};
var data = [
{
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "TV"
},
{
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
},
{
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}
]
// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext('2d');
var myDoughnutChart = new Chart(ctx).Doughnut(data,option);


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
var options = {
responsive: true,
};
data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
    ]
};
// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});

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
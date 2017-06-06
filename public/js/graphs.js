function populateMoneyGraph(){
    var options = {
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    };
    data = {
        datasets: [{
            data: moneysavings_array,
            backgroundColor: [
            "#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6",
            "#DD4477","#66AA00","#B82E2E","#316395"]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
        "TV","Tablet","Video Game Console","Lamp","Toaster",
        "Microwave Oven","Coffee Maker","Laptop","Cellpone Charger","Computer (Desktop)","Printer"
        ],
    };
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';

    var myDoughnutChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

// function populateMoneyGraph(){
//     var options = {
//         legend: {
//             labels: {
//                 fontColor: 'white'
//             }
//         }
//     };
//     data = {
//         datasets: [{
//             data: energysavings_array,
//             backgroundColor: [
//             "#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6",
//             "#DD4477","#66AA00","#B82E2E","#316395"]
//         }],

//         // These labels appear in the legend and in the tooltips when hovering different arcs
//         labels: [
//         "TV","Tablet","Video Game Console","Lamp","Toaster",
//         "Microwave Oven","Coffee Maker","Laptop","Cellpone Charger","Computer (Desktop)","Printer"
//         ],
//     };
//     // Get the context of the canvas element we want to select
//     var ctx = document.getElementById("myChart").getContext('2d');
//     Chart.defaults.global.defaultFontColor = 'white';

//     var myDoughnutChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: data,
//         options: options
//     });
// }

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
var myDoughnutChart1;
var myDoughnutChart2;

function populateMoneyGraph(){
    var options = {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Money Saved ($)'
              }
            }],            
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Item'
              },
              ticks: {
                  autoSkip: false,
                  maxRotation: 30,
                  minRotation: 30
                }
            }]
        }
    };
    var data = 
    {
      labels: [
            moneysavings_array[0].name,
            moneysavings_array[1].name,
            moneysavings_array[2].name,
            moneysavings_array[3].name,
            moneysavings_array[4].name,
            moneysavings_array[5].name,
            moneysavings_array[6].name,
            moneysavings_array[7].name,
            moneysavings_array[8].name,
            moneysavings_array[9].name,
            moneysavings_array[10].name],
      datasets: [
        {
          label: "Money Saved",
          backgroundColor: ["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6",
            "#DD4477","#66AA00","#B82E2E","#316395"],
          data: [
            moneysavings_array[0].value,
            moneysavings_array[1].value,
            moneysavings_array[2].value,
            moneysavings_array[3].value,
            moneysavings_array[4].value,
            moneysavings_array[5].value,
            moneysavings_array[6].value,
            moneysavings_array[7].value,
            moneysavings_array[8].value,
            moneysavings_array[9].value,
            moneysavings_array[10].value]
        }
      ]
    };
    
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';

    myDoughnutChart1 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}


function populateEnergyGraph(){
    var options = {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Energy Saved (KWh)'
              }
            }],            
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Item'
              },
              ticks: {
                  autoSkip: false,
                  maxRotation: 30,
                  minRotation: 30
                }
            }]
        }
    };
    var data = 
    {
      labels: [
            energysavings_array[0].name,
            energysavings_array[1].name,
            energysavings_array[2].name,
            energysavings_array[3].name,
            energysavings_array[4].name,
            energysavings_array[5].name,
            energysavings_array[6].name,
            energysavings_array[7].name,
            energysavings_array[8].name,
            energysavings_array[9].name,
            energysavings_array[10].name],
      datasets: [
        {
          label: "Energy Saved",
          backgroundColor: ["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6",
            "#DD4477","#66AA00","#B82E2E","#316395"],
          data: [
            energysavings_array[0].value,
            energysavings_array[1].value,
            energysavings_array[2].value,
            energysavings_array[3].value,
            energysavings_array[4].value,
            energysavings_array[5].value,
            energysavings_array[6].value,
            energysavings_array[7].value,
            energysavings_array[8].value,
            energysavings_array[9].value,
            energysavings_array[10].value]
        }
      ]
    };
    
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart2").getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';
    
    myDoughnutChart2 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}



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
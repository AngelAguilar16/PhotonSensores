var particle = new Particle();
var temp = 0;
var volt = 0;
var token;

function variables(){
    particle.login({username: 'USERNAME', password: 'PASSWORD'}).then(
    function(data) {
        token = data.body.access_token;
        var devicesPr = particle.listDevices({ auth: token });
        devicesPr.then(
            function(devices){
            console.log('Devices: ', devices);
                particle.getVariable({ deviceId: 'DEVICEID', name: 'VARIABLE', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
                    temp = data.body.result;
                    console.log("Temp: " + data.body.result);
                    document.getElementById("temp").innerHTML = "Temp: " + data.body.result;
                }, 
                function(err) {
                    console.log('An error occurred while getting attrs:', err);
                });
                particle.getVariable({ deviceId: 'DEVICEID', name: 'VARIABLE', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
                    volt = data.body.result;
                    console.log("Volt: " + data.body.result);
                    document.getElementById("volt").innerHTML = "Volt: " + data.body.result;
                }, 
                function(err) {
                    console.log('An error occurred while getting attrs:', err);
                });
            },
            function(err) {
            console.log('List devices call failed: ', err);
            }
        );
    },
    function (err) {
        console.log('Could not log in.', err);
    }
    );
}
//setInterval(variables, 1000);

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChartTemp);
google.charts.setOnLoadCallback(drawChartVolt);

function drawChartTemp() {
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temperatura', 40],
  ]);
  var options = {
    width: 500, height: 220,
    redFrom: 40, redTo: 50,
    yellowFrom:30, yellowTo: 40,
    minorTicks: 3, max: 50, min: 0
  };
  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  chart.draw(data, options);
  setInterval(function() {
    data.setValue(0, 1, temp); 
    chart.draw(data, options); 
    }, 1000);
}

function drawChartVolt() {
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Voltaje', 5],
  ]);
  var options = {
    width: 500, height: 220,
    redFrom: 4, redTo: 5,
    yellowFrom:3, yellowTo: 4,
    minorTicks: 1, max: 5, min: 0
  };
  var chart = new google.visualization.Gauge(document.getElementById('chart_div2'));
  chart.draw(data, options);
  setInterval(function() {
    data.setValue(0, 1, volt); 
    chart.draw(data, options); 
    }, 1000);
}
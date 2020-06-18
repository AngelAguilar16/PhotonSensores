var temp;
var volt;
function variables(){
    var particle = new Particle();
    var token;

    particle.login({username: 'sgarcia44@ucol.mx', password: 'kakaroto26485'}).then(
    function(data) {
        token = data.body.access_token;
        var devicesPr = particle.listDevices({ auth: token });
        devicesPr.then(
            function(devices){
            console.log('Devices: ', devices);
                particle.getVariable({ deviceId: '350024000947373336323230', name: 'temp', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
                    console.log("Temp: " + data.body.result);
                    document.getElementById("temp").innerHTML = "Temp: " + data.body.result;
                }, 
                function(err) {
                    console.log('An error occurred while getting attrs:', err);
                });
                particle.getVariable({ deviceId: '350024000947373336323230', name: 'volt', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
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



window.feed = function(callback) {
    var particle = new Particle();
    var token;

    particle.login({username: 'sgarcia44@ucol.mx', password: 'kakaroto26485'}).then(
    function(data) {
        token = data.body.access_token;
        var devicesPr = particle.listDevices({ auth: token });
        devicesPr.then(
            function(devices){
            console.log('Devices: ', devices);
                particle.getVariable({ deviceId: '350024000947373336323230', name: 'temp', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
                    temp = data.body.result;
                    console.log("Temp: " + temp);
                    var tick = {};
                    tick.plot0 = data.body.result;
                    callback(JSON.stringify(tick));
                    document.getElementById("temp").innerHTML = "Temp: " + temp;
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
  };


  window.feed = function(callback) {
    var particle = new Particle();
    var token;

    particle.login({username: 'sgarcia44@ucol.mx', password: 'kakaroto26485'}).then(
    function(data) {
        token = data.body.access_token;
        var devicesPr = particle.listDevices({ auth: token });
        devicesPr.then(
            function(devices){
            console.log('Devices: ', devices);
                particle.getVariable({ deviceId: '350024000947373336323230', name: 'volt', auth: token }).then(function(data) {
                    console.log('Device variable retrieved successfully:', data);
                    volt = data.body.result;
                    console.log("Volt: " + temp);
                    var teck = {};
                    teck.plot0 = data.body.result;
                    callback(JSON.stringify(teck));
                    document.getElementById("temp").innerHTML = "Volt: " + volt;
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
  };

  
   
  var myConfig = {
    type: "gauge",
    globals: {
      fontSize: 10
    },
    plotarea: {
      marginTop: 10
    },
    plot: {
      size: '100%',
      valueBox: {
        placement: 'center',
        text: '%v', //default
        fontSize: 15,
        rules: [{
            rule: '%v >= 20',
            text: '%v<br>EXCELLENT'
          },
          {
            rule: '%v < 30 && %v > 25',
            text: '%v<br>Good'
          },
          {
            rule: '%v < 35 && %v > 25',
            text: '%v<br>Fair'
          },
          {
            rule: '%v >  35',
            text: '%v<br>Bad'
          }
        ]
      }
    },
    tooltip: {
      borderRadius: 5
    },
    scaleR: {
      aperture: 180,
      minValue: 10,
      maxValue: 50,
      step: 5,
      center: {
        visible: false
      },
      tick: {
        visible: false
      },
      item: {
        offsetR: 0,
        rules: [{
          rule: '%i == 9',
          offsetX: 15
        }]
      },
      labels: ['10', '15', '20', '25', '30', '35', '45', '50'],
      ring: {
        size: 50,
        rules: [{
            rule: '%v <= 20',
            backgroundColor: '#E53935'
          },
          {
            rule: '%v > 30 && %v < 35',
            backgroundColor: '#EF5350'
          },
          {
            rule: '%v >= 35 && %v < 25',
            backgroundColor: '#FFA726'
          },
          {
            rule: '%v >= 35',
            backgroundColor: '#29B6F6'
          }
        ]
      }
    },
    refresh: {
      type: "feed",
      transport: "js",
      url: "feed()",
      interval: 1500,
      resetTimeout: 1000
    },
    series: [{
      values: [temp], // starting value
      backgroundColor: 'black',
      indicator: [10, 10, 10, 10, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900
      },
    }]
  };
   
  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: 300,
    width: '100%'
  });


  var myConfig2 = {
    type: "gauge",
    globals: {
      fontSize: 10
    },
    plotarea: {
      marginTop: 10
    },
    plot: {
      size: '100%',
      valueBox: {
        placement: 'center',
        text: '%v', //default
        fontSize: 15,
        rules: [{
            rule: '%v >= 20',
            text: '%v<br>EXCELLENT'
          },
          {
            rule: '%v < 30 && %v > 25',
            text: '%v<br>Good'
          },
          {
            rule: '%v < 35 && %v > 25',
            text: '%v<br>Fair'
          },
          {
            rule: '%v >  35',
            text: '%v<br>Bad'
          }
        ]
      }
    },
    tooltip: {
      borderRadius: 5
    },
    scaleR: {
      aperture: 180,
      minValue: 10,
      maxValue: 50,
      step: 5,
      center: {
        visible: false
      },
      tick: {
        visible: false
      },
      item: {
        offsetR: 0,
        rules: [{
          rule: '%i == 9',
          offsetX: 15
        }]
      },
      labels: ['10', '15', '20', '25', '30', '35', '45', '50'],
      ring: {
        size: 50,
        rules: [{
            rule: '%v <= 20',
            backgroundColor: '#E53935'
          },
          {
            rule: '%v > 30 && %v < 35',
            backgroundColor: '#EF5350'
          },
          {
            rule: '%v >= 35 && %v < 25',
            backgroundColor: '#FFA726'
          },
          {
            rule: '%v >= 35',
            backgroundColor: '#29B6F6'
          }
        ]
      }
    },
    refresh: {
      type: "feed",
      transport: "js",
      url: "feed()",
      interval: 1500,
      resetTimeout: 1000
    },
    series: [{
      values: [volt], // starting value
      backgroundColor: 'black',
      indicator: [10, 10, 10, 10, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 900
      },
    }]
  };
   
  zingchart.render({
    id: 'myChart2',
    data: myConfig2,
    height: 300,
    width: '100%'
  });



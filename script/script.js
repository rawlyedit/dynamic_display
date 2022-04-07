      const html = document.documentElement;
      const body = document.body;
      const menuLinks = document.querySelectorAll(".admin-menu a");
      const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
      const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
      const switchInput = document.querySelector(".switch input");
      const switchLabel = document.querySelector(".switch label");
      const switchLabelText = switchLabel.querySelector("span:last-child");
      const collapsedClass = "collapsed";
      const lightModeClass = "light-mode";
      

      /*TOGGLE HEADER STATE*/
      collapseBtn.addEventListener("click", function () {
        body.classList.toggle(collapsedClass);
        this.getAttribute("aria-expanded") == "true"
          ? this.setAttribute("aria-expanded", "false")
          : this.setAttribute("aria-expanded", "true");
        this.getAttribute("aria-label") == "collapse menu"
          ? this.setAttribute("aria-label", "expand menu")
          : this.setAttribute("aria-label", "collapse menu");
      });
      /*SHOW TOOLTIP ON MENU LINK HOVER*/
      for (const link of menuLinks) {
        link.addEventListener("mouseenter", function () {
          if (
            body.classList.contains(collapsedClass) &&
            window.matchMedia("(min-width: 768px)").matches
          ) {
            const tooltip = this.querySelector("span").textContent;
            this.setAttribute("title", tooltip);
          } else {
            this.removeAttribute("title");
          }
        });
      }

      /*TOGGLE LIGHT/DARK MODE*/
      if (localStorage.getItem("dark-mode") === "false") {
        html.classList.add(lightModeClass);
        switchInput.checked = false;
        switchLabelText.textContent = "Light";
      }

      switchInput.addEventListener("input", function () {
        html.classList.toggle(lightModeClass);
        if (html.classList.contains(lightModeClass)) {
          switchLabelText.textContent = "Light";
          localStorage.setItem("dark-mode", "false");
        } else {
          switchLabelText.textContent = "Dark";
          localStorage.setItem("dark-mode", "true");
        }
      });

      var total = 0;
      var avg = 0;
      var i = 1;
      var diff = 0;
      var variance = 0;
      var deviation = 0;
      const hide = document.querySelector(".graph");

      // Process-1
      function start_1() {
        avg = 0;
        total = 0;
        diff = 0;
        variance = 0;
        deviation = 0;
        i = 1;
        hide.classList.remove("hidden");
        window.onload = process_1();
      }
      document.getElementById('g1').addEventListener('click', function() {
        start_1();
        document.getElementById('no_1').style.display = 'block';
        document.getElementById('no_2').style.display = 'block';
        document.getElementById('no_3').style.display = 'block';
        document.getElementById('no_4').style.display = 'none';
        document.getElementById('no_5').style.display = 'none';
        document.getElementById('no_6').style.display = 'none';
        document.getElementById('no_7').style.display = 'none';
        document.getElementById('no_8').style.display = 'none';
        document.getElementById('no_9').style.display = 'none';
        document.getElementById('no_10').style.display = 'none';
        document.getElementById('no_11').style.display = 'none';
        document.getElementById('no_12').style.display = 'none';
        document.getElementById('no_13').style.display = 'none';
        document.getElementById('no_14').style.display = 'none';
        document.getElementById('no_15').style.display = 'none';
        document.getElementById('no_16').style.display = 'none';
        document.getElementById('no_17').style.display = 'none';
        document.getElementById('no_18').style.display = 'none';
        document.getElementById('no_19').style.display = 'none';
        document.getElementById('no_20').style.display = 'none';
        document.getElementById('no_21').style.display = 'none';
        document.getElementById('no_22').style.display = 'none';
        document.getElementById('no_23').style.display = 'none';
        document.getElementById('no_24').style.display = 'none';
        document.getElementById('no_25').style.display = 'none';
        document.getElementById('no_26').style.display = 'none';
        document.getElementById('no_27').style.display = 'none';
      });
      function process_1() {
        var dataPoints = [];
        var chart;
        $.getJSON("http://192.168.0.109:8080/g1", function (data) {
          $.each(data, function (key, value) {
            dataPoints.push({ x: value[0], y: parseInt(value[1]) });
          });
          chart = new CanvasJS.Chart("chartContainer", {
            title: {
              text: "Process-1",
              fontFamily: "SansSerif",
            },
            data: [
              {
                type: "line",
                dataPoints: dataPoints,
              },
            ],
          });
          chart.render();
          updateChart();
        });
        function updateChart() {
          $.getJSON("http://192.168.0.109:8080/u1", function (data) {
            $.each(data, function (key, value) {
              dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1]),
              });
              total += parseInt(value[1]);
              avg = total / i;
              document.getElementById("channel_1").innerHTML = avg.toFixed(2);
              diff += Math.pow((parseInt(value[1])-avg),2);
              variance = diff / i;
              document.getElementById("channel_2").innerHTML = variance.toFixed(2);
              deviation = Math.sqrt(variance);
              document.getElementById("channel_3").innerHTML = deviation.toFixed(2);
              i++;
            });
            chart.render();
            setTimeout(function () {
              updateChart();
            }, 1000);
          });
        }
      }
      
      // Process-2
      function start_2() {
      avg = 0;
      total = 0;
      i = 1;
      diff = 0;
      variance = 0;
      deviation = 0;
        hide.classList.remove('hidden');
        window.onload = process_2();
      }
      document.getElementById('g2').addEventListener('click', function() {
        start_2();
        document.getElementById('no_1').style.display = 'block';
        document.getElementById('no_2').style.display = 'block';
        document.getElementById('no_3').style.display = 'block';
        document.getElementById('no_4').style.display = 'none';
        document.getElementById('no_5').style.display = 'none';
        document.getElementById('no_6').style.display = 'none';
        document.getElementById('no_7').style.display = 'none';
        document.getElementById('no_8').style.display = 'none';
        document.getElementById('no_9').style.display = 'none';
        document.getElementById('no_10').style.display = 'none';
        document.getElementById('no_11').style.display = 'none';
        document.getElementById('no_12').style.display = 'none';
        document.getElementById('no_13').style.display = 'none';
        document.getElementById('no_14').style.display = 'none';
        document.getElementById('no_15').style.display = 'none';
        document.getElementById('no_16').style.display = 'none';
        document.getElementById('no_17').style.display = 'none';
        document.getElementById('no_18').style.display = 'none';
        document.getElementById('no_19').style.display = 'none';
        document.getElementById('no_20').style.display = 'none';
        document.getElementById('no_21').style.display = 'none';
        document.getElementById('no_22').style.display = 'none';
        document.getElementById('no_23').style.display = 'none';
        document.getElementById('no_24').style.display = 'none';
        document.getElementById('no_25').style.display = 'none';
        document.getElementById('no_26').style.display = 'none';
        document.getElementById('no_27').style.display = 'none';
      });
      function process_2() {
        var dataPoints = [];
        var chart;
        $.getJSON('http://192.168.0.109:8080/g2', function (data) {
          $.each(data, function (key, value) {
            dataPoints.push({ x: value[0], y: parseInt(value[1]) });
          });
          chart = new CanvasJS.Chart('chartContainer', {
            title: {
              text: 'Process-2',
              fontFamily: "SansSerif",
            },
            data: [
              {
                type: 'line',
                dataPoints: dataPoints,
              },
            ],
          });
          chart.render();
          updateChart();
        });
        function updateChart() {
          $.getJSON('http://192.168.0.109:8080/u2', function (data) {
            $.each(data, function (key, value) {
              dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1]),
              });
              total += parseInt(value[1]);
              avg = total / i;
              document.getElementById("channel_1").innerHTML = avg.toFixed(2);
              diff += Math.pow((parseInt(value[1])-avg),2);
              variance = diff / i;
              document.getElementById("channel_2").innerHTML = variance.toFixed(2);
              deviation = Math.sqrt(variance);
              document.getElementById("channel_3").innerHTML = deviation.toFixed(2);
              i++;
            });
            chart.render();
            setTimeout(function () {
              updateChart();
            }, 1000);
          });
        }
      }
      
            // Process-3
      function start_3() {
      total = 0;
      avg = 0;
      i = 1;
      diff = 0;
      variance = 0;
      deviation = 0;
        hide.classList.remove('hidden');
        window.onload = process_3();
      }
      document.getElementById('g3').addEventListener('click', function() {
        start_3();
        document.getElementById('no_1').style.display = 'block';
        document.getElementById('no_2').style.display = 'block';
        document.getElementById('no_3').style.display = 'block';
        document.getElementById('no_4').style.display = 'none';
        document.getElementById('no_5').style.display = 'none';
        document.getElementById('no_6').style.display = 'none';
        document.getElementById('no_7').style.display = 'none';
        document.getElementById('no_8').style.display = 'none';
        document.getElementById('no_9').style.display = 'none';
        document.getElementById('no_10').style.display = 'none';
        document.getElementById('no_11').style.display = 'none';
        document.getElementById('no_12').style.display = 'none';
        document.getElementById('no_13').style.display = 'none';
        document.getElementById('no_14').style.display = 'none';
        document.getElementById('no_15').style.display = 'none';
        document.getElementById('no_16').style.display = 'none';
        document.getElementById('no_17').style.display = 'none';
        document.getElementById('no_18').style.display = 'none';
        document.getElementById('no_19').style.display = 'none';
        document.getElementById('no_20').style.display = 'none';
        document.getElementById('no_21').style.display = 'none';
        document.getElementById('no_22').style.display = 'none';
        document.getElementById('no_23').style.display = 'none';
        document.getElementById('no_24').style.display = 'none';
        document.getElementById('no_25').style.display = 'none';
        document.getElementById('no_26').style.display = 'none';
        document.getElementById('no_27').style.display = 'none';
      });
      function process_3() {
        var dataPoints = [];
        var chart;
        $.getJSON('http://192.168.0.109:8080/g3', function (data) {
          $.each(data, function (key, value) {
            dataPoints.push({ x: value[0], y: parseInt(value[1]) });
          });
          chart = new CanvasJS.Chart('chartContainer', {
            title: {
              text: 'Process-3',
              fontFamily: "SansSerif",
            },
            data: [
              {
                type: 'line',
                dataPoints: dataPoints,
              },
            ],
          });
          chart.render();
          updateChart();
        });
        function updateChart() {
          $.getJSON('http://192.168.0.109:8080/u3', function (data) {
            $.each(data, function (key, value) {
              dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1]),
              });
              total += parseInt(value[1]);
              avg = total / i;
              document.getElementById("channel_1").innerHTML = avg.toFixed(2);
              diff += Math.pow((parseInt(value[1])-avg),2);
              variance = diff / i;
              document.getElementById("channel_2").innerHTML = variance.toFixed(2);
              deviation = Math.sqrt(variance);
              document.getElementById("channel_3").innerHTML = deviation.toFixed(2);
              i++;
            });
            chart.render();
            setTimeout(function () {
              updateChart();
            }, 1000);
          });
        }
      }
      
            // Process-4
      function start_4() {
      total = 0;
      avg = 0;
      i = 1;
      diff = 0;
      variance = 0;
      deviation = 0;
        hide.classList.remove('hidden');
        window.onload = process_4();
      }
      document.getElementById('g4').addEventListener('click', function() {
        start_4();
        document.getElementById('no_1').style.display = 'block';
        document.getElementById('no_2').style.display = 'block';
        document.getElementById('no_3').style.display = 'block';
        document.getElementById('no_4').style.display = 'none';
        document.getElementById('no_5').style.display = 'none';
        document.getElementById('no_6').style.display = 'none';
        document.getElementById('no_7').style.display = 'none';
        document.getElementById('no_8').style.display = 'none';
        document.getElementById('no_9').style.display = 'none';
        document.getElementById('no_10').style.display = 'none';
        document.getElementById('no_11').style.display = 'none';
        document.getElementById('no_12').style.display = 'none';
        document.getElementById('no_13').style.display = 'none';
        document.getElementById('no_14').style.display = 'none';
        document.getElementById('no_15').style.display = 'none';
        document.getElementById('no_16').style.display = 'none';
        document.getElementById('no_17').style.display = 'none';
        document.getElementById('no_18').style.display = 'none';
        document.getElementById('no_19').style.display = 'none';
        document.getElementById('no_20').style.display = 'none';
        document.getElementById('no_21').style.display = 'none';
        document.getElementById('no_22').style.display = 'none';
        document.getElementById('no_23').style.display = 'none';
        document.getElementById('no_24').style.display = 'none';
        document.getElementById('no_25').style.display = 'none';
        document.getElementById('no_26').style.display = 'none';
        document.getElementById('no_27').style.display = 'none';
      });
      function process_4() {
        var dataPoints = [];
        var chart;
        $.getJSON('http://192.168.0.109:8080/g4', function (data) {
          $.each(data, function (key, value) {
            dataPoints.push({ x: value[0], y: parseInt(value[1]) });
          });
          chart = new CanvasJS.Chart('chartContainer', {
            title: {
              text: 'Process-4',
              fontFamily: "SansSerif",
            },
            data: [
              {
                type: 'column',
                dataPoints: dataPoints,
              },
            ],
          });
          chart.render();
          updateChart();
        });
        function updateChart() {
          $.getJSON('http://192.168.0.109:8080/u4', function (data) {
            $.each(data, function (key, value) {
              dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1]),
              });
              total += parseInt(value[1]);
              avg = total / i;
              document.getElementById("channel_1").innerHTML = avg.toFixed(2);
              diff += Math.pow((parseInt(value[1])-avg),2);
              variance = diff / i;
              document.getElementById("channel_2").innerHTML = variance.toFixed(2);
              deviation = Math.sqrt(variance);
              document.getElementById("channel_3").innerHTML = deviation.toFixed(2);
              i++;
            });
            chart.render();
            setTimeout(function () {
              updateChart();
            }, 1000);
          });
        }
      }
      
      // Process-5
      function start_5() {
      total = 0;
      value = 0;
      avg = 0;
      i = 1;
      j = 0;
      a = 1;
      b = 2;
      c = 3;
      diff = 0;
      variance = 0;
      deviation = 0;
        hide.classList.add('hidden');
        window.onload = process_5();
      }
      document.getElementById('g5').addEventListener('click', function() {
        start_5();
        document.getElementById('no_1').style.display = 'none';
        document.getElementById('no_2').style.display = 'none';
        document.getElementById('no_3').style.display = 'none';
        document.getElementById('no_4').style.display = 'block';
        document.getElementById('no_5').style.display = 'block';
        document.getElementById('no_6').style.display = 'block';
        document.getElementById('no_7').style.display = 'block';
        document.getElementById('no_8').style.display = 'block';
        document.getElementById('no_9').style.display = 'block';
        document.getElementById('no_10').style.display = 'block';
        document.getElementById('no_11').style.display = 'block';
        document.getElementById('no_12').style.display = 'block';
        document.getElementById('no_13').style.display = 'block';
        document.getElementById('no_14').style.display = 'block';
        document.getElementById('no_15').style.display = 'block';
        document.getElementById('no_16').style.display = 'block';
        document.getElementById('no_17').style.display = 'block';
        document.getElementById('no_18').style.display = 'block';
        document.getElementById('no_19').style.display = 'block';
        document.getElementById('no_20').style.display = 'block';
        document.getElementById('no_21').style.display = 'block';
        document.getElementById('no_22').style.display = 'block';
        document.getElementById('no_23').style.display = 'block';
        document.getElementById('no_24').style.display = 'block';
        document.getElementById('no_25').style.display = 'block';
        document.getElementById('no_26').style.display = 'block';
        document.getElementById('no_27').style.display = 'block';
      });
      function process_5() {
        var dataPoints = [];
        var chart;
        $.getJSON("http://192.168.0.109:8080/generate");
                chart = new CanvasJS.Chart("chartContainer",{
            title: {
              text: 'Process-5',
              fontFamily: "SansSerif",
            },
            axisX: {
              minimum: 0,
            },
                        data: [{
                                type: "column",
                                dataPoints : [
                                { x: 0, y: 0},
                                { x: 1, y: 0},
                                { x: 2, y: 0},
                                { x: 3, y: 0},
                                { x: 4, y: 0},
                                ],
                        }]
                });

        function calcultaion(p1) {
              total += p1;
              avg = total / i;
              document.getElementById("num_"+a).innerHTML = avg.toFixed(2);
              diff += Math.pow(p1-avg,2);
              variance = diff / i;
              document.getElementById("num_"+b).innerHTML = variance.toFixed(2);
              deviation = Math.sqrt(variance);
              document.getElementById("num_"+c).innerHTML = deviation.toFixed(2);
              i++;
              a === 22 ? a = 1 : a += 3;
              b === 23 ? b = 2 : b += 3;
              c === 24 ? c = 3 : c += 3;
              console.log(a);
              console.log(b);
              console.log(c);
        }
        function updateChart() {
        var dps = chart.options.data[0].dataPoints;
        $.getJSON("http://192.168.0.109:8080/update", function(data) {
                $.each(data, function(index, value) {
                        dps[value[0]] = { x: value[0], y: value[1]};
              value = parseInt(value[1]);
              calcultaion(value);
                });

        });
                chart.render();
        };
                setInterval(function(){updateChart()}, 1000);
      }

      document.getElementById('exit').addEventListener('click', function () {
        // hide.classList.add('hidden');
        $.get('http://192.168.0.109:8080/exited')
      });
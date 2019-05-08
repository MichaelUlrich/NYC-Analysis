var RED = 'rgba(255, 99, 132, 0.2)' ,
    RED_SLD = 'rgba(255, 99, 132, 0.6)' ,
    RED_OUT = 'rgba(255, 99, 132, 1)' ,
    BLUE = 'rgba(54, 162, 235, 0.2)' ,
    BLUE_SLD = 'rgba(54, 162, 235, 0.6)' ,
    BLUE_OUT = 'rgba(54, 162, 235, 1)' ,
    YELLOW = 'rgba(255, 250, 125, 0.2)' ,
    YELLOW_SLD = 'rgba(255, 250, 125, 0.6)' ,
    YELLOW_OUT = 'rgba(255, 250, 125, 1)'
    CYAN = 'rgba(75, 192, 192, 0.2)' ,
    CYAN_SLD = 'rgba(75, 192, 192, 0.6)' ,
    CYAN_OUT = 'rgba(75, 192, 192, 1)' ,
    ORANGE = 'rgba(255, 159, 64, 0.2)' ,
    ORANGE_SLD = 'rgba(255, 159, 64, 0.6)' ,
    ORANGE_OUT = 'rgba(255, 159, 64, 1)' ,
    PURPLE = 'rgba(153, 102, 255, 0.2)',
    PURPLE_SLD = 'rgba(153, 102, 255, 0.6)',
    PURPLE_OUT = 'rgba(153, 102, 255, 1)',
    GREEN_SLD = 'rgba(0, 230, 64, 0.6)',
    GREEN_OUT = 'rgba(0, 230, 64, 1)',
    GRAY_SLD = 'rgba(103, 128, 159, 0.6)',
    GRAY_OUT = 'rgba(103, 128, 159, 1)',
    PINK_SLD = 'rgba(219, 10, 91, 0.6)',
    PINK_OUT = 'rgba(219, 10, 91, 1)',
    DARK_YLW_SLD = 'rgba(244, 208, 63, 0.6)'
    DARK_YLW_OUT = 'rgba(244, 208, 63, 1)'
    BLACK_SLD = 'rgba(46, 49, 49, 0.6)',
    BLACK_OUT = 'rgba(46, 49, 49, 1)';

  //Testing functions #####################
  function drawBarGraph() {
    var myChart = document.getElementById('myCanvas').getContext('2d');
    window.testChart = new Chart(myChart, {
      type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['High School', 'Middle School', 'Elementary'],
        datasets:[{
          label:'White',
          data:[685, 320, 15],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD],//, BLUE_SLD, YELLOW_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          fill: true,
          data:[3230, 900, 136],//, 70],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Black',
          data:[4802, 1120, 136],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[279,70, 4],
          backgroundColor:[CYAN_SLD, CYAN_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
            display:true,
            text:'Student Removals from School by Race',
            fontSize:25
          },
        legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
        layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
        tooltips:{
            enabled:true
          }
      }
    });
  }
  function drawPieGraph() {
    var myChart = document.getElementById('myCanvas').getContext('2d');
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      window.testChart.destroy(); //Clear window
    }
      window.testChart = new Chart(myChart, {
      type:'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['White', 'Hispanic', 'Black', 'Asian'],
          datasets:[{
            label:'High School',
            data:[
              685,
              3230,
              4802,
              279
            ],
            //backgroundColor:'green'
            backgroundColor:[
              RED_SLD, //red
              BLUE_SLD, //blue
              YELLOW_SLD, //yellow
              CYAN_SLD, //cyan
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Middle School',
            fill: true,
            data:[
              320,
              900,
              1120,
              70
            ],
            //backgroundColor:'green'
            backgroundColor:[
              RED_SLD, //red
              BLUE_SLD, //blue
              YELLOW_SLD, //yellow
              CYAN_SLD, //cyan
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
            }, {
            label:'Elementary School',
            data:[
              15,
              94,
              136,
              4
            ],
            //backgroundColor:'green'
            backgroundColor:[
              RED_SLD, //red
              BLUE_SLD, //blue
              YELLOW_SLD, //yellow
              CYAN_SLD, //cyan
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          fontSize:25,
          fontSize:'Lato',
          title:{
            display:true,
            text:'Student Removals from School by Race',
            fontSize:25
          },
          legend:{
            position:'right',
            fillStyle: 'none',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25
            }
          },
          layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
          tooltips:{
            enabled:true
          }
        }
      });
    }
  function drawHospitalGraph() {
    //if(window.testChart && window.testChart !== null){ //Check if window is being used
    //  window.testChart.destroy(); //clear window
    //}
    var myChart = document.getElementById('myCanvas2').getContext('2d');
    window.testChar = new Chart(myChart, {
      type: 'polarArea',
      data:{
        labels:['Clean', 'Communication', 'Quck Care', 'Patient Control',
        'Properly Explain', 'Shared Info', 'Overall Rating', 'Would Reccomend'],
        datasets:[{
          label:'Harlem Hospital Center',
          data:[61, 64, 48, 57, 57, 51, 42, 54],
          backgroundColor:[YELLOW],
          borderColor:[YELLOW_OUT]
        }, {
            label:'Coney Island',
            data:[64, 68, 57, 64, 52, 79, 56, 54],
            backgroundColor:[BLUE],
            borderColor:[BLUE_OUT]
        }, {
          label:'Bellevue Hosptial',
          data:[56, 63, 49, 55, 54, 80, 58, 64],
          backgroundColor:[RED],
          borderColor:[RED_OUT]
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
          display:true,
          text:'Hospital Surverys for NYC Hospitals',
          fontSize:25
        },
        legend:{
          position:'right',
          fillStyle: 'none',
          fontColor:'black',
          font:'Lato',
          fontSize:25
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:50
        },
        scale:{
          ticks:{
            min:0,
            max:100,
            stepSize:10,
            fontSize:10,
            font:'Lato'
          },
          pointLabels: {
            fontSize:16,
            padding:10
          }
        }
      }
    });
  }
  function drawLineGraph() {
    //if(window.testChart && window.testChart !== null){ //Check if window is being used
    //  window.testChart.destroy(); //clear window
    //}
      var myChart = document.getElementById('myCanvas3').getContext('2d');
      window.testChart = new Chart(myChart, {
        type:'line',
        data:{
          labels:['2006', '2007', '2008', '2009', '2010', '2011'],
          datasets:[{
            label:'Black Mean Score',
            data:[644, 654, 661, 669, 669, 670],
            backgroundColor:[BLUE],
            borderColor:[BLUE_OUT]
          }, {
            label:'Hispanic Mean Score',
            data:[647, 657, 664, 673, 673, 673],
            backgroundColor:[YELLOW],
            borderColor:[YELLOW_OUT]
          }, {
            label:'White Mean Score',
            data:[676, 684, 690, 696, 695, 695],
            backgroundColor:[PURPLE],
            borderColor:[PURPLE_OUT]
          }, {
            label:'Asian Mean Score',
            data:[687, 695, 700, 705, 703, 702],
            backgroundColor:[RED],
            borderColor:[RED_OUT]
          }]
        },
        options:{
          title:{
            display:true,
            text:'Mean NYS Math Scores from 2006-2011',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position:'right',
            fillStyle: 'none',
            fontColor:'black',
            font:'Lato',
            fontSize:25
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
  }
  //#######################################
  function redrawGraphs() {
    //.desstroy() not working so I added to remove flickering when redrawing charts
    var chart1 = document.getElementById("column1"),
        chart2 = document.getElementById("column2"),
        chart3 = document.getElementById("column3"),
        chart4 = document.getElementById("column4");
        //Clear each element
        chart1.innerHTML = "";
        chart2.innerHTML = "";
        chart3.innerHTML = "";
        chart4.innerHTML = "";
        //Redraw element
        chart1.innerHTML = '<canvas id="myCanvas" class="canvas" width="200" height="100"></canvas>';
        chart2.innerHTML = '<canvas id="myCanvas2" class="canvas" width="200" height="100"></canvas>';
        chart3.innerHTML = '<canvas id="myCanvas3" class="canvas" width="200" height="100"></canvas>';
        chart4.innerHTML = '<canvas id="myCanvas4" class="canvas" width="200" height="100"></canvas>';
  } //Done
  //Education###############################
  function studentRemovals() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart  = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    var newChart = new Chart(myChart, {
      type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['High School', 'Middle School', 'Elementary'],
        datasets:[{
          label:'White',
          data:[685, 320, 15],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD],//, BLUE_SLD, YELLOW_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          fill: true,
          data:[3230, 900, 136],//, 70],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Black',
          data:[4802, 1120, 136],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[279,70, 4],
          backgroundColor:[CYAN_SLD, CYAN_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
            display:true,
            text:'Total Student Removals from School by Race and School',
            fontSize:25
          },
        legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
        layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
        tooltips:{
            enabled:true
          }
      }
    });
    window.testChart = new Chart(myChart2, {
      type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['High School'],
        datasets:[{
          label:'White',
          data:[685],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD],//, BLUE_SLD, YELLOW_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          fill: true,
          data:[3230],//, 70],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Black',
          data:[4802],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[279],
          backgroundColor:[CYAN_SLD, CYAN_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
            display:true,
            text:'Student Removals from High School by Race and School',
            fontSize:25
          },
        legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
        layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
        tooltips:{
            enabled:true
          }
      }
    });
    window.testChart = new Chart(myChart3, {
      type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Middle School'],
        datasets:[{
          label:'White',
          data:[320],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD],//, BLUE_SLD, YELLOW_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          fill: true,
          data:[900],//, 70],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Black',
          data:[1120],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[70],
          backgroundColor:[CYAN_SLD, CYAN_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
            display:true,
            text:'Student Removals from Middle School by Race and School',
            fontSize:25
          },
        legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
        layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
        tooltips:{
            enabled:true
          }
      }
    });
    window.testChart = new Chart(myChart4, {
      type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Elementary Schoo'],
        datasets:[{
          label:'White',
          data:[15],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD],//, BLUE_SLD, YELLOW_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          fill: true,
          data:[136],//, 70],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Black',
          data:[136],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[4],
          backgroundColor:[CYAN_SLD, CYAN_SLD, CYAN_SLD],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        fontSize:25,
        fontSize:'Lato',
        title:{
            display:true,
            text:'Student Removals from Elementary School by Race and School',
            fontSize:25
          },
        legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
        layout:{
            padding: {
              left:0,
              right:0,
              bottom:0,
              top:0
            }
          },
        tooltips:{
            enabled:true
          }
      }
    });} //Done
  function testResults() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
      var myChart = document.getElementById('myCanvas').getContext('2d');
      var myChart2 = document.getElementById('myCanvas2').getContext('2d');
      var myChart3 = document.getElementById('myCanvas3').getContext('2d');
      var myChart4 = document.getElementById('myCanvas4').getContext('2d');
      window.testChart = new Chart(myChart, {
        type:'line',
        data:{
          labels:['2006', '2007', '2008', '2009', '2010', '2011'],
          datasets:[{
            label:'Black Mean Score',
            data:[644, 654, 661, 669, 669, 670],
            backgroundColor:[BLUE],
            fill:false,
            borderColor:[BLUE_OUT],
          }, {
            label:'Hispanic Mean Score',
            data:[647, 657, 664, 673, 673, 673],
            backgroundColor:[YELLOW],
            fill:false,
            borderColor:[YELLOW_OUT],
          }, {
            label:'White Mean Score',
            data:[676, 684, 690, 696, 695, 695],
            backgroundColor:[PURPLE],
            fill:false,
            borderColor:[PURPLE_OUT],
          }, {
            label:'Asian Mean Score',
            data:[687, 695, 700, 705, 703, 702],
            backgroundColor:[RED],
            fill:false,
            borderColor:[RED_OUT],
          }]
        },
        options:{
          background:false,
          title:{
            display:true,
            text:'Mean NYS Math Scores from 2006-2011',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          },
          fill:false
        },
      });
      window.testChart = new Chart(myChart2, {
        type:'line',
        data:{
          labels:['2006', '2007', '2008', '2009', '2010', '2011'],
          datasets:[{
            label:'Black Mean Score',
            data:[641, 645, 650, 656, 656, 656],
            backgroundColor:[BLUE],
            fill:false,
            borderColor:[BLUE_OUT]
          }, {
            label:'Hispanic Mean Score',
            data:[642, 643, 648, 656, 656 ,656],
            backgroundColor:[YELLOW],
            fill:false,
            borderColor:[YELLOW_OUT]
          }, {
            label:'White Mean Score',
            data:[670, 671, 672, 676, 675, 671],
            backgroundColor:[PURPLE],
            fill:false,
            borderColor:[PURPLE_OUT]
          }, {
            label:'Asian Mean Score',
            data:[672,669,670,676,674,669],
            backgroundColor:[RED],
            fill:false,
            borderColor:[RED_OUT]
          }]
        },
        options:{
          title:{
            display:true,
            text:'Mean NYS English/Language Arts Scores from 2006-2011',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position:'right',
            fillStyle: BLUE_OUT,
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart3, {
        type:'bar',
        data:{
          labels:['Level 1(%)', 'Level 2(%)', 'Level 3(%)', 'Level 4(%)'],
          datasets:[{
            label:'Black',
            data:[12.6, 32.7, 43.5, 11],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic',
            data:[11.1, 30.1, 45.5, 15.3],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White',
            data:[3.8, 14, 45.8, 36.3],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian',
            data:[2.5,9.1,40.9,47.4],
            backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'NYS Math Levels from 2006-2011',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green',
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }
        },
      });
      window.testChart = new Chart(myChart4, {
        type:'bar',
        data:{
          labels:['Level 1(%)', 'Level 2(%)', 'Level 3(%)', 'Level 4(%)'],
          datasets:[{
            label:'Black',
            data:[11.2, 43.7, 43.6, 2.5],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic',
            data:[12.5, 43.8, 41.5, 2.4],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White',
            data:[4.1, 22.9, 61.1, 11.8],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian',
            data:[4.3,22.3,61.1,12],
            backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'NYS English/Language Arts Levels from 2006-2011',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });} //Done
  function studentDemographics() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
      var myChart = document.getElementById('myCanvas').getContext('2d');
      var myChart2 = document.getElementById('myCanvas2').getContext('2d');
      var myChart3 = document.getElementById('myCanvas3').getContext('2d');
      var myChart4 = document.getElementById('myCanvas4').getContext('2d');
      window.testChart = new Chart(myChart, {
        type:'bar',
        data:{
          labels:['Pre-K Students Race (%)'],
          datasets:[{
            label:'Black (%)',
            data:[26],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic (%)',
            data:[36.9],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White (%)',
            data:[18.6],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian (%)',
            data:[15.4],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Pre-K Enrollment By Race',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart2, {
        type:'bar',
        data:{
          labels:['Pre-K Students Race'],
          datasets:[{
            label:'Black',
            data:[47913],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic',
            data:[79439],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White',
            data:[38020],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian',
            data:[34527],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Total Students in Pre-K',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart3, {
        type:'bar',
        data:{
          labels:['Elementary School', 'Middle School', 'High School'],
          datasets:[{
            label:'Black (%)',
            data:[27, 27, 27],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic (%)',
            data:[40.3, 40.3, 40.3],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White (%)',
            data:[14.8, 14.8, 14.8],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian (%)',
            data:[15.6, 15.6, 15.6],
            backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Kindergarten to High School Enrollment by Race',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart4, {
        type:'bar',
        data:{
          labels:['Elementary School', 'Middle School', 'High School'],
          datasets:[{
            label:'Black',
            data:[169887, 108780, 80389],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic',
            data:[253263, 162166, 119842],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White',
            data:[92779, 59407, 43902],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian',
            data:[97795, 62619, 46276],
            backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Total Students in Kindergarten to High School',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });} //Done
  function disciplineReport() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
      var myChart = document.getElementById('myCanvas').getContext('2d');
      var myChart2 = document.getElementById('myCanvas2').getContext('2d');
      var myChart3 = document.getElementById('myCanvas3').getContext('2d');
      var myChart4 = document.getElementById('myCanvas4').getContext('2d');
      window.testChart = new Chart(myChart, {
        type:'bar',
        data:{
          labels:['Students Removal Precentage'],
          datasets:[{
            label:'Black',
            data:[5154],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic ',
            data:[4477],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White ',
            data:[1035],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian ',
            data:[484],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Student Classroom Removal by Race',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart2, {
        type:'bar',
        data:{
          labels:['Principal Involvement Precentage'],
          datasets:[{
            label:'Black',
            data:[11565],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic',
            data:[10023],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White',
            data:[2313],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian',
            data:[1356],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Students Sent to Principal',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },
      });
      window.testChart = new Chart(myChart3, {
        type:'bar',
        data:{
          labels:['Superintendent Involvement Precentage'],
          datasets:[{
            label:'Black ',
            data:[4964],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic ',
            data:[3562],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White ',
            data:[553],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian ',
            data:[320],
            backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Students Sent to Superintendent',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              BorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'

          }
        },});
      window.testChart = new Chart(myChart4, {
        type:'bar',
        data:{
          labels:['Black', 'Hispanic', 'White', 'Asian'],
          datasets:[{
            label:'Classroom Removal',
            data:[5154, 4477, 1035, 484],
            backgroundColor:[PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Principal Involvement',
            data:[11565, 10023, 2313, 1356],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Superintendent Involvement',
            data:[4964, 3562, 553, 320],
            backgroundColor:[CYAN_SLD,CYAN_SLD, CYAN_SLD, CYAN_SLD],
            borderColor:[CYAN_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
        },
        options:{
          title:{
            display:true,
            text:'Total Students Disciplines',
            fontSize:25,
            fontFamily:'Lato'
          },
          legend:{
            position: 'right',
            labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              strokeStyle:RED_OUT
            }
          },
          labels:{
              fontColor:'black',
              font:'Lato',
              fontSize:25,
              pointBackgroudColor:'Black',
              pointBorderColor:'Black',
              pointBorderWidth:10,
              pointHoverBorderColor:'green'
          },
          scales: {
            xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
          }

        },
      });
  }
  //Health ################################
  function nycLead() {
    if(window.testChart && window.testChart !== null) { //Check if window is being used
      redrawGraphs(); //Clear window
    }

    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    var bronxAvg = [7890/69800, 6747/70000, 4651/70100, 2302/70100, 1661/66800, 1579/65300, 1431/63400, 1032/61700, 117/59000],
      brooklnAvg = [9331/108300, 7669/111900, 7139/117500, 6260/119800, 4625/113700, 3887/111800, 3490/109300, 3023/108800, 2812/103800],
      manhattanAvg = [2673/43900, 1747/43300, 1406/45100, 1150/44700, 765/42700, 717/41100, 627/38400, 477/37500, 357/35800],
      queensAvg = [5452/89700, 4199/90700, 4089/92200, 3130/92900, 2269/90600, 1954/89900, 2024/89400, 1708/89500, 1525/87400],
      statenIslAvg = [710/16000, 609/15600, 441/15900, 374/15400, 302/14700, 300/14700, 278/14000, 191/13700, 227/12900];
    var i;
    for(i = 0; i < 9; i++ ) {
      bronxAvg[i] = bronxAvg[i]* 100;
      bronxAvg[i] = bronxAvg[i].toFixed(2);
      brooklnAvg[i] = brooklnAvg[i] * 100;
      brooklnAvg[i] = brooklnAvg[i].toFixed(2);
      manhattanAvg[i] = manhattanAvg[i] * 100;
      manhattanAvg[i] = manhattanAvg[i].toFixed(2);
      queensAvg[i] = queensAvg[i] * 100;
      queensAvg[i] = queensAvg[i].toFixed(2);
      statenIslAvg[i] = statenIslAvg[i] * 100;
      statenIslAvg[i] = statenIslAvg[i].toFixed(2);
    }
    window.testChart = new Chart(myChart, {
      type:'line',
      data:{
        labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        datasets:[{
          label:'Bronx',
          data:[17500, 18000, 17700, 19400, 19000, 18500, 17800, 17300, 17100],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_SLD],
          fill:false,

        }, {
          label:'Brooklyn',
          data:[29700, 30500, 29600, 34300, 34500, 34200, 33100, 33400, 32300],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          fill:false,
        }, {
          label:'Manhattan',
          data:[14700, 15000, 14300, 15900, 15600, 15000, 14800, 14200, 13500],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false,
        }, {
          label:'Queens',
          data:[21400, 21700, 21400, 23800, 22900, 22700, 22500, 22500, 22000],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          fill:false,
        }, {
          label:'Staten Island',
          data:[4400, 4500, 4300, 4900, 4800, 4600, 4600, 4400, 4400],
          backgroundColor:[GREEN_SLD],
          borderColor:[GREEN_OUT],
          fill:false,
        }]
      },
      options:{
        title:{
          display:true,
          text:'Children Under 3 Tested For Lead by Borough From 2008-2016',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'line',
      type:'line',
      data:{
        labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        datasets:[
          {
            label:'Average For NYC',
            data:[80, 81, 81, 83, 83, 83, 83, 81, 81],
            backgroundColor:[BLACK_SLD],
            borderColor:[BLACK_OUT],
            fill:false
          }, {
          label:'Bronx',
          data:[86, 87, 87, 88, 87, 87, 87, 86, 86],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_SLD],
          fill:false,
        }, {
          label:'Brooklyn',
          data:[78, 80, 80, 82, 83, 83, 81, 79, 80],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          fill:false,
        }, {
          label:'Manhattan',
          data:[76, 78, 77, 79, 79, 77, 78, 75, 74],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false,
        }, {
          label:'Queens',
          data:[80, 82, 82, 83, 84, 84, 84, 83, 82],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          fill:false,
        }, {
          label:'Staten Island',
          data:[80, 81, 81, 84, 84, 82, 83, 84, 83],
          backgroundColor:[GREEN_SLD],
          borderColor:[GREEN_OUT],
          fill:false,
        }]
      },
      options:{
        title:{
          display:true,
          text:'Precentage of Children Under 3 Tested By Borough From 2008-2016',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'line',
      type:'line',
      data:{
        labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        datasets:[
        {
          label:'Bronx',
          data:[7890, 6747, 4651, 2302, 1661, 1579, 1431, 1032, 117],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_SLD],
          fill:false,
        }, {
          label:'Brooklyn',
          data:[9331, 7669, 7139, 6260, 4625, 3887, 3490, 3023, 2812],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          fill:false,
        }, {
          label:'Manhattan',
          data:[2673, 1747, 1406, 1150, 765, 717, 627, 477, 357],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false,
        }, {
          label:'Queens',
          data:[5452, 4199, 4089, 3130, 2269, 1954, 2024, 1708, 1525],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          fill:false,
        }, {
          label:'Staten Island',
          data:[710, 609, 441, 374, 302, 300, 278, 191, 227],
          backgroundColor:[GREEN_SLD],
          borderColor:[GREEN_OUT],
          fill:false,
        }]
      },
      options:{
        title:{
          display:true,
          text:'Children Under 6 With Elevated Lead Levels From 2008-2016',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart4, {
      type:'line',
      data:{
        labels:['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        datasets:[
        {
          label:'Bronx',
          data:bronxAvg,
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_SLD],
          fill:false,
        }, {
          label:'Brooklyn',
          data:brooklnAvg,
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          fill:false,
        }, {
          label:'Manhattan',
          data:manhattanAvg,
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false,
        }, {
          label:'Queens',
          data:queensAvg,
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          fill:false,
        }, {
          label:'Staten Island',
          data:statenIslAvg,
          backgroundColor:[GREEN_SLD],
          borderColor:[GREEN_OUT],
          fill:false,
        }]
    },
        options:{
        scales:{
            yAxes:[{
              ticks: {
                min:0,
                max:12,
                stepSize:1
            }
          }]
        },
        title:{
          display:true,
          text:'Precentage of Children Under 6 With Elevated Lead Levels by Borough From 2008-2016',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        }
      },
    });
} //Done
  function hivDiagnoses() {
    if(window.testChart && window.testChart !== null) { //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Total Diagnoses'],
        datasets:[{
          label:'Black',
          data:[5548],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[4019],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[2328],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[413],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'HIV Diagnoses by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Boroughs'],
        datasets:[{
          label:'Brooklyn',
          data:[3436],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Queens',
          data:[1972],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Bronx',
          data:[2421],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Manhattan',
          data:[3811],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Staten Island',
          data:[188],
          backgroundColor:[ORANGE_SLD],
          borderColor:[ORANGE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'HIV Diagnoses by Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'line',
      data:{
        labels:['2010', '2011', '2012', '2013'],
        datasets:[{
          label:'Black',
          data:[1576, 1466, 1315, 1191],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_SLD],
          fill:false,

        }, {
          label:'Hispanic',
          data:[1035, 1045, 984, 955],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          fill:false,
        }, {
          label:'White',
          data:[632, 605, 574, 517],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false,
        }, {
          label:'Asian',
          data:[94, 102, 104, 113],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          fill:false,
        }]
      },
      options:{
        title:{
          display:true,
          text:'HIV Diagnoses Over Time',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Total Diagnoses per Race'],
        datasets:[{
          label:'Black',
          data:[4543],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[2757],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[1197],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[192],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Total AIDS Diagnoses by Races',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });} //Done
  function hospitals() {
    if(window.testChart && window.testChart !== null) { //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Boroughs'],
        datasets:[{
          label:'Brooklyn',
          data:[26],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Queens',
          data:[11],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Bronx',
          data:[14],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Manhattan',
          data:[24],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Staten Island',
          data:[3],
          backgroundColor:[ORANGE_SLD],
          borderColor:[ORANGE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Hospitals Per Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Hospitals'],
        datasets:[{
          label:'BELLEVUE HOSPITAL CENTER',
          data:[56],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'CONEY ISLAND HOSPITAL',
          data:[56],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'ELMHURST HOSPITAL CENTER',
          data:[52],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'HARLEM HOSPITAL CENTER',
          data:[42],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'JACOBI MEDICAL CENTER',
          data:[50],
          backgroundColor:[ORANGE_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'KINGS COUNTY HOSPITAL CENTER',
          data:[59],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
          data:[51],
          backgroundColor:[CYAN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'METROPOLITAN HOSPITAL CENTER',
          data:[58],
          backgroundColor:[GREEN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'NORTH CENTRAL BRONX HOSPITAL',
          data:[58],
          backgroundColor:[GRAY_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'QUEENS HOSPITAL CENTER',
          data:[58],
          backgroundColor:[PINK_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
          data:[54],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Major Hospitals Overall Approval Rating',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          display:false,
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        },
        scales:{
          yAxes:[{
            ticks:{
              min:35
            }
          }]
        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Hospitals'],
        datasets:[{
          label:'BELLEVUE HOSPITAL CENTER',
          data:[56],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'CONEY ISLAND HOSPITAL',
          data:[64],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'ELMHURST HOSPITAL CENTER',
          data:[57],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'HARLEM HOSPITAL CENTER',
          data:[61],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'JACOBI MEDICAL CENTER',
          data:[63],
          backgroundColor:[ORANGE_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },  {
          label:'KINGS COUNTY HOSPITAL CENTER',
          data:[73],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
          data:[65],
          backgroundColor:[CYAN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'METROPOLITAN HOSPITAL CENTER',
          data:[63],
          backgroundColor:[GREEN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'NORTH CENTRAL BRONX HOSPITAL',
          data:[62],
          backgroundColor:[GRAY_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'QUEENS HOSPITAL CENTER',
          data:[68],
          backgroundColor:[PINK_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
          data:[65],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Major Hospital Cleanliness Ratings',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          display:false,
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales:{
          yAxes:[{
            ticks:{
              min:35
            }
          }]
        }
      },
    });
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Hospitals'],
        datasets:[{
          label:'BELLEVUE HOSPITAL CENTER',
          data:[63],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'CONEY ISLAND HOSPITAL',
          data:[68],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'ELMHURST HOSPITAL CENTER',
          data:[57],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'HARLEM HOSPITAL CENTER',
          data:[64],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'JACOBI MEDICAL CENTER',
          data:[63],
          backgroundColor:[ORANGE_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        },  {
          label:'KINGS COUNTY HOSPITAL CENTER',
          data:[67],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
          data:[66],
          backgroundColor:[CYAN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'METROPOLITAN HOSPITAL CENTER',
          data:[62],
          backgroundColor:[GREEN_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'NORTH CENTRAL BRONX HOSPITAL',
          data:[67],
          backgroundColor:[GRAY_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'QUEENS HOSPITAL CENTER',
          data:[63],
          backgroundColor:[PINK_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
          data:[68],
          backgroundColor:[DARK_YLW_SLD],
          borderColor:[RED_OUT],borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Major Hosptial Communication Surveys',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          display:false,
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales:{
          yAxes:[{
            ticks:{
              min:35
            }
          }]
        }
      },
    });} //Done
  function nycDeaths() {
    if(window.testChart && window.testChart !== null) { //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    var whiteInfantMortality = (796/392893)*100,
        asianInfantMortality = (402/196433)*100,
        blackInfantMortality = (1392/255177)*100,
        hispanicInfantMortality = (1181/375856)*100;

    whiteInfantMortality = whiteInfantMortality.toFixed(2);
    asianInfantMortality = asianInfantMortality.toFixed(2);
    blackInfantMortality = blackInfantMortality.toFixed(2);
    hispanicInfantMortality = hispanicInfantMortality.toFixed(2);

    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Total Deceased By Race'],
        datasets:[{
          label:'Black',
          data:[111116+28417],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[95449],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[48714+206487],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[34685],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Total Deceased By Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Heart Disease', 'Malignant Neoplasm', 'Non-Specific Causes', 'Influenza and Pneumonia'],
        datasets:[{
          label:'Black',
          data:[44008, 33756, 27536, 5104],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[26737, 22316, 21683, 4140],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[94414, 65018, 43320, 11488],
          backgroundColor:[PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[9750, 10358, 6230, 1730],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Leading Causes of Death by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Neonatal', 'Post Neonatal', 'Infant'],
        datasets:[{
          label:'Black ',
          data:[1392, 883, 2225],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[1181, 621, 1802],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[796, 961, 380],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[402, 186, 588],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Infant Mortality By Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            BorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },});
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Infant Mortality Rates By Race'],
        datasets:[{
          label:'Black (%) ',
          data:[blackInfantMortality],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic (%) ',
          data:[hispanicInfantMortality],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White (%)',
          data:[whiteInfantMortality],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian (%) ',
          data:[asianInfantMortality],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Infant Mortality Rates By Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales:{
          yAxes:[{
            ticks: {
              min:0,
              max:1.0,
              step:0.1
            }
          }]
        }
      },
    }); } //Done
  //Crime ##################################
  function prisonAdmissions() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');

    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Race'],
        datasets:[{
          label:'Black',
          data:[142729],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White/Hispanic',
          data:[112612],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[4727],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Total Inmates Discharged from 2014-2019',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },}); //Discharged
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Race'],
        datasets:[{
          label:'Black',
          data:[19419],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White/Hispanic',
          data:[15369],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[5386],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Total Inamtes Admitted from 2014-2019',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },}); //Admitted
    window.testChart = new Chart(myChart3, {
      type:'line',
      data:{
        labels:['2014', '2015', '2016', '2017', '2018', '2019'],
        datasets:[
          {
            label:'Black',
            data:[38704, 34151, 31822, 28521, 39585, 3324],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            fill:false
          }, {
            label:'White/Hispanic',
            data:[29506, 26376, 25458, 23915, 17166, 3776],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            fill:false
          }, {
            label:'Asian ',
            data:[1403, 1094, 957, 891, 683, 144],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            fill:false
          }]
    },
      options:{
        title:{
          display:true,
          text:'Inamte Discharges By Year From 2014 - 2019',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            BorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },}); //Discharged by year
    window.testChart = new Chart(myChart4, {
      type:'line',
      data:{
        labels:['2014', '2015', '2016', '2017', '2018', '2019'],
        datasets:[{
          label:'Black',
          data:[38674, 26300, 31395, 21468, 10734, 2361],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          fill:false
        }, {
          label:'White/Hispanic',
          data:[28821, 34041, 25174, 25529, 8858, 1996],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          fill:false
        }, {
          label:'Asian ',
          data:[1038, 927, 1108, 994, 543, 122],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          fill:false
        }]
    },
      options:{
        title:{
          display:true,
          text:'Inamte Admissions By Year From 2014 - 2019',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //tacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });}//Done
  function prisonDemographics() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Students Removal Precentage'],
        datasets:[{
          label:'Black',
          data:[4265],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[2363],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[908],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[139],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Current Inmates by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Age'],
        datasets:[{
          label:'Black',
          data:[35],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[36],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[38],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[35],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        scales:{
          yAxes: [{
            ticks: {
                min: 20,
                max: 40,
                stepSize: 5
            }
          }]
        },
        title:{
          display:true,
          text:'Average Age of Inamtes By Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Maximum', 'Medium', 'Minimum'],
        datasets:[{
          label:'Black ',
          data:[1352, 1700, 1153],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[594, 970, 779],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[152, 355, 392],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[22, 55, 62],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Inmates by Race and Security Type',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            BorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },});
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Black', 'Hispanic', 'White', 'Asian'],
        datasets:[{
          label:'Female',
          data:[240, 133, 102, 11],
          backgroundColor:[PINK_SLD, PINK_SLD, PINK_SLD, PINK_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Male',
          data:[4026, 2231, 807, 129],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Inmates by Race and Gender',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      },
    });} //Done
  function arrestHistory() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    window.testChart = new Chart(myChart,
      {
      type:'bar',
      data:{
        labels:['Total Crimes by Race'],
        datasets:[{
            label:'Black',
            data:[167186],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic ',
            data:[97547],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White ',
            data:[55398],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian ',
            data:[12319],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
      },
      options:{
        title:{
          display:true,
          text:'Total Crimes by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Non-Violent Crimes'],
        datasets:[{
          label:'Black',
          data:[8060],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[5559],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[3045],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[784],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Non-Violent Crimes',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Violent Crimes'],
        datasets:[{
          label:'Black ',
          data:[99907],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[55218],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[32120],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[49944],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Violent Crimes by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            BorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },});
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island' ],
        datasets:[{
          label:'Black ',
          data:[34239, 65824, 34041, 27587, 4952],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[32485, 20752, 22197, 18879, 2996],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[4024, 17384, 12619, 12784, 8523],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[708, 2230, 2204, 6896, 261],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Crimes by Borough and Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }

      },
    }); //Stacked
  } //Done
  function victimDemographics() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Total Victims by Race'],
        datasets:[{
            label:'Black',
            data:[247630],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic ',
            data:[199696],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White ',
            data:[195202],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian ',
            data:[52117],
            backgroundColor:[RED_SLD],
            borderColor:[RED_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }]
      },
      options:{
        title:{
          display:true,
          text:'Total Victims by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Non-Violent Crimes'],
        datasets:[{
          label:'Black',
          data:[12732],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[8936],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[8502],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[2081],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Non-Violent Crime Victims',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Violent Crime Victims'],
        datasets:[{
          label:'Black ',
          data:[186012],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[154076],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[146823],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[41108],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Violent Crimes by Victim Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            BorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },});
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island' ],
        datasets:[{
          label:'Black ',
          data:[113, 293, 169, 328, 19],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[134, 194, 210, 529, 35],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[51, 345, 494, 504, 82],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[270, 998, 834, 4542, 84],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Victims by Borough and Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }

      },
    }); } //Done
  //Geographics ############################
  function publicHouse() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    //public housing by Borough
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island' ],
        datasets:[{
          label:'Public Housing',
          data:[705, 3471, 1933, , 871],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Total Housing',
          data:[, , , 1239, ],
          backgroundColor:[GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
          hidden:true

        }]
      },
      options:{
        title:{
          display:true,
          text:'Public Housing by Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });
    //section 8 housing by Borough
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island' ],
        datasets:[{
          label:'Section 8',
          data:[19, 49, 32, ,3],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        } , /*{
          label:'Total Housing',
          data:[724, 3520, 1965, 1239, 874],
          backgroundColor:[GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }*/]
      },
      options:{
        title:{
          display:true,
          text:'Section 8 Housing by Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });
    //public housing by Race
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Public Housing'],
        datasets:[{
          label:'Black',
          data:[77384],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[76438],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[8219],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[8085],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Public Housing by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    //seciton 8 housing by race
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Section 8 Housing'],
        datasets:[{
          label:'Black',
          data:[2272],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[1117],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[103],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[30],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Section 8 Housing by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
  } //done
  function familyHousing() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    //total families in house
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Total Families'],
        datasets:[{
          label:'Black',
          data:[79656],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[77555],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[8322],
          backgroundColor:[PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[8115],
          backgroundColor:[RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Families in All Public Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });
    //female led public housing by Race & male led sectin 8 housing by Race
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Black', 'Hispanic', 'White', 'Asian'],
        datasets:[{
          label:'Female',
          data:[62552, 59578, 5214, 3625],
          backgroundColor:[PINK_SLD, PINK_SLD, PINK_SLD, PINK_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Male',
          data:[14832, 16860, 3005, 4460],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Female and Male Led Households in Public Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }

      },
    });
    //female led sectin 8 housing by Race & male led led public housing by Race
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Black', 'Hispanic', 'White', 'Asian'],
        datasets:[{
          label:'Female',
          data:[1848, 915, 50, 14],
          backgroundColor:[PINK_SLD, PINK_SLD, PINK_SLD, PINK_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Male',
          data:[424, 202, 53, 16],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Female and Male Led Households in Section 8 Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }

      },
    });
    //family size by race and section 8 house & family size by race and public housing
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Public Housing', 'Section 8'],
        datasets:[{
          label:'Black',
          data:[2.3, 2.7],
          backgroundColor:[BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[2.3, 2.8],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[1.9, 2.1],
          backgroundColor:[PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[2.5, 2.2],
          backgroundColor:[RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Family Sizes by Race in Public and Section 8 Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });

  } //done
  function housingTimeframe() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    //all families average time in public housing/section8
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Years in Housing'],
        datasets:[{
          label:'Public Housing',
          data:[22.3],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Section 8 Housing',
          data:[5],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Time in Public and Section 8 Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    //average time by Race
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Public Housing', 'Section 8'],
        datasets:[{
          label:'Black ',
          data:[24.8, 4.9],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic ',
          data:[20.6, 5],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White ',
          data:[22.9, 6],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian ',
          data:[14.3, 5.8],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Time in Public Housing by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
          //  stacked: true
          }]
        }

      },
    });
    //average time by Borough
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Public Housing', 'Section 8'],
        datasets:[{
          label:'Bronx',
          data:[20.9, 4.8],
          backgroundColor:[BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Brooklyn',
          data:[21.5, 4.9],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Manhattan',
          data:[25.2, 5.4],
          backgroundColor:[PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Queens',
          data:[0],
          backgroundColor:[RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
          hidden: true
        }, {
          label:'Staten Island',
          data:[16.9, 4.7],
          backgroundColor:[GREEN_SLD, GREEN_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Time in Public Housing by Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    //average time by race and borough
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'],
        datasets:[{
          label:'Black',
          data:[24.4, 22.9, 27.4, 23.8, 17.5],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[18, 18.9, 25, 16.8, 14.6],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[24.1, 21.8, 23.1, 26.2, 19.4],
          backgroundColor:[PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[17.3, 7.5, 16.9, 12.3, 8.7],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Time in Public Housing by Borough and Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
  }
  function housingIncome() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      redrawGraphs(); //Clear window
    }
    var myChart = document.getElementById('myCanvas').getContext('2d');
    var myChart2 = document.getElementById('myCanvas2').getContext('2d');
    var myChart3 = document.getElementById('myCanvas3').getContext('2d');
    var myChart4 = document.getElementById('myCanvas4').getContext('2d');
    //average income
    window.testChart = new Chart(myChart, {
      type:'bar',
      data:{
        labels:['Average Income in USD'],
        datasets:[{
          label:'Public Housing',
          data:[23820],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Section 8 Housing',
          data:[16529],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Income in Public and Section 8 Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    //average rent
    window.testChart = new Chart(myChart2, {
      type:'bar',
      data:{
        labels:['Average Rent in USD'],
        datasets:[{
          label:'Public Housing',
          data:[486],
          backgroundColor:[BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Section 8 Housing',
          data:[378],
          backgroundColor:[YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Rent in Public and Section 8 Housing',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    })
    //average rent by Race
    window.testChart = new Chart(myChart3, {
      type:'bar',
      data:{
        labels:['Rent', 'Income'],
        datasets:[{
          label:'Black',
          data:[507, 24985],
          backgroundColor:[BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Hispanic',
          data:[465, 22560],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'White',
          data:[433, 21204],
          backgroundColor:[PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Asian',
          data:[488, 24203],
          backgroundColor:[RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Rent and Income by Race',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'

        }
      },
    });
    //average rent by bourough
    window.testChart = new Chart(myChart4, {
      type:'bar',
      data:{
        labels:['Rent', 'Income'],
        datasets:[{
          label:'Bronx ',
          data:[466, 22347],
          backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
          borderColor:[BLUE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Brooklyn ',
          data:[483, 23609],
          backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
          borderColor:[YELLOW_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Manhattan ',
          data:[497, 24639],
          backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
          borderColor:[PURPLE_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Queens',
          data:[497, 24884],
          backgroundColor:[RED_SLD, RED_SLD, RED_SLD, RED_SLD, RED_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }, {
          label:'Staten Island',
          data:[442, 21302],
          backgroundColor:[GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD, GREEN_SLD],
          borderColor:[RED_OUT],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Average Rent and Income by Borough',
          fontSize:25,
          fontFamily:'Lato'
        },
        legend:{
          position: 'right',
          labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            strokeStyle:RED_OUT
          }
        },
        labels:{
            fontColor:'black',
            font:'Lato',
            fontSize:25,
            pointBackgroudColor:'Black',
            pointBorderColor:'Black',
            pointBorderWidth:10,
            pointHoverBorderColor:'green'
        },
        scales: {
          xAxes: [{
            //stacked: true,
          }],
          yAxes: [{
            //stacked: true
          }]
        }

      },
    });
  }

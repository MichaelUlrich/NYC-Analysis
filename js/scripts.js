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
    PURPLE_OUT = 'rgba(153, 102, 255, 1)' ;
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
  //Education###############################
  function studentRemovals() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      window.testChart.update(); //Clear window
      //Function to re-draw HTML?
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
    });
  }
  function testResults() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      window.testChart.update(); //Clear window
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
            borderColor:[BLUE_OUT],
          }, {
            label:'Hispanic Mean Score',
            data:[647, 657, 664, 673, 673, 673],
            backgroundColor:[YELLOW],
            borderColor:[YELLOW_OUT],
          }, {
            label:'White Mean Score',
            data:[676, 684, 690, 696, 695, 695],
            backgroundColor:[PURPLE],
            borderColor:[PURPLE_OUT],
          }, {
            label:'Asian Mean Score',
            data:[687, 695, 700, 705, 703, 702],
            backgroundColor:[RED],
            borderColor:[RED_OUT],
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
      window.testChart = new Chart(myChart2, {
        type:'line',
        data:{
          labels:['2006', '2007', '2008', '2009', '2010', '2011'],
          datasets:[{
            label:'Black Mean Score',
            data:[641, 645, 650, 656, 656, 656],
            backgroundColor:[BLUE],
            borderColor:[BLUE_OUT]
          }, {
            label:'Hispanic Mean Score',
            data:[642, 643, 648, 656, 656 ,656],
            backgroundColor:[YELLOW],
            borderColor:[YELLOW_OUT]
          }, {
            label:'White Mean Score',
            data:[670, 671, 672, 676, 675, 671],
            backgroundColor:[PURPLE],
            borderColor:[PURPLE_OUT]
          }, {
            label:'Asian Mean Score',
            data:[672,669,670,676,674,669],
            backgroundColor:[RED],
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
  function studentDemographics() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      window.testChart.update(); //Clear window
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
  function disciplineReport() {
    if(window.testChart && window.testChart !== null){ //Check if window is being used
      window.testChart.update(); //Clear window
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
            label:'Black (%)',
            data:[5154],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic (%)',
            data:[4477],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White (%)',
            data:[1035],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian (%)',
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
      window.testChart = new Chart(myChart2, {
        type:'bar',
        data:{
          labels:['Principal Involvement Precentage'],
          datasets:[{
            label:'Black(%)',
            data:[11565],
            backgroundColor:[BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic(%)',
            data:[10023],
            backgroundColor:[YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White(%)',
            data:[2313],
            backgroundColor:[PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian(%)',
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
      window.testChart = new Chart(myChart3, {
        type:'bar',
        data:{
          labels:['Superintdent Involvement Precentage'],
          datasets:[{
            label:'Black (%)',
            data:[4964],
            backgroundColor:[BLUE_SLD, BLUE_SLD, BLUE_SLD, BLUE_SLD],
            borderColor:[BLUE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Hispanic (%)',
            data:[3562],
            backgroundColor:[YELLOW_SLD, YELLOW_SLD, YELLOW_SLD, YELLOW_SLD],
            borderColor:[YELLOW_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'White (%)',
            data:[553],
            backgroundColor:[PURPLE_SLD,PURPLE_SLD, PURPLE_SLD, PURPLE_SLD],
            borderColor:[PURPLE_OUT],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBorderColor:'#000'
          }, {
            label:'Asian (%)',
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
            text:'Students Sent to Superintdent',
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
            label:'Superintdent Involvement',
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
  function nycLead() {}
  function hivDiagnoses() {}
  function hospitals() {}
  function nycDeaths() {}
  //Crime ##################################
  function prisonAdmissions() {}
  function prisonDemographics() {}
  function arrestHistory() {}
  function victimDemographics() {}
  //Geographics ############################
  function publicHouse() {}
  function familyHousing() {}
  function housingTimeframe() {}
  function housingIncome() {}

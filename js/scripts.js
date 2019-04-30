<script>
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
  function drawBarGraph() {
    //if(window.testChart && window.testChart !== null){ //Check if window is being used
    //  window.testChart.destroy(); //clear window
    //}
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
    } //Depreciated
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
</script>

function clearGraphs() {
  /*
  * Clear all graphs prior to rendering, to remove and already existing graphs
  */
  console.log("clearing graphs");
  document.getElementById('myCanvas').innerHTML = "";
  document.getElementById('myCanvas2').innerHTML = "";
  document.getElementById('myCanvas3').innerHTML = "";
  document.getElementById('myCanvas4').innerHTML = "";
}
function drawSummarys(summary1, summary2, summary3, summary4) {
  /*
  * Draw summarys for each graph upon render
  */
    document.getElementById('card1').innerHTML = summary1;
    document.getElementById('card2').innerHTML = summary2;
    document.getElementById('card3').innerHTML = summary3;
    document.getElementById('card4').innerHTML = summary4;

  }
/*
* Education Graphs
*/
function studentRemovals() {
  /*
  * Graph Types:  Total Removals - Grouped Bar Chart
  *               Elem., High., Midd. - Bar Chart
  *
  */
  /*
  * Graph 1 -  Total Removals
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Student removals (Suspensions) from school broken down by race for High School, Middle School, and Elementary School",
      summary2 = "Student removals from all New York City High Schools",
      summary3 = "Student removals from all New York City Middle Schools",
      summary4 = "Student removals from all New York City Elementary Schools";
  drawSummarys(summary1, summary2, summary3, summary4);
  var svg = d3.select("#myCanvas3")
  .append("svg")
  .attr("width", 600) //set width
  .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },
  g = svg.append("g").attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.1);

  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
      .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{
    "Race": "White",
    "High School": 685,
    "Middle School": 320,
    "Elementary": 15
  }, {
    "Race": "Hispanic",
    "High School": 3230,
    "Middle School": 900,
    "Elementary": 136
  }, {
    "Race": "Black",
    "High School": 4802,
    "Middle School": 1120,
    "Elementary": 136
  }, {
    "Race": "Asian",
    "High School": 279,
    "Middle School": 70,
    "Elementary": 4
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.Race; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Race;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.Race) + ",0)"; })
   .selectAll("rect")
   .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })
   .enter().append("rect")
     .attr("x", function(d) { return x1(d.key); })
     .attr("y", function(d) { return y(d.value); })
     .attr("width", x1.bandwidth())
     .attr("height", function(d) { return height - y(d.value); })
     .attr("fill", function(d) { return z(d.key); })
    .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", function(d) {
       var xPosition = d3.mouse(this)[0] - 40;
       var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking

       tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
       tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
     });

 g.append("g")
     .attr("class", "axis")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x0));

 g.append("g")
     .attr("class", "y axis")
     .call(d3.axisLeft(y).ticks(null, "s"))
   .append("text")
     .attr("x", 2)
     .attr("y", y(y.ticks().pop()) + 0.5)
     .attr("dy", "0.32em")
     .attr("fill", "#000")
     .attr("font-weight", "bold")
     .attr("text-anchor", "start")
     .text("Population");

 var legend = g.append("g")
     .attr("font-family", "sans-serif")
     .attr("font-size", 10)
     .attr("text-anchor", "end")
     .selectAll("g")
     .data(keys.slice().reverse())
     .enter().append("g")
     .attr("transform", function(d, i) { return "translate(100," + i * 20 + ")"; }); //position of legend
 legend.append("rect")
     .attr("x", width - 17)
     .attr("width", 15)
     .attr("height", 15)
     .attr("fill", z)
     .attr("stroke", z)
     .attr("stroke-width",2)
     .on("click",function(d) { update(d) });
 legend.append("text")
     .attr("x", width - 24)
     .attr("y", 9.5)
     .attr("dy", "0.32em")
     .text(function(d) { return d; });

     var tooltip = svg.append("g")
       .attr("class", "tooltip")
       .style("display", "none");

     tooltip.append("rect")
       .attr("width", 140)
       .attr("height", 40)
       .attr("fill", "grey")
       .style("opacity", .4);

     tooltip.append("text")
       .attr("x", 70)
       .attr("dy", "1.2em")
       .style("text-anchor", "middle")
       .attr("font-size", "12px")
       .attr("font-weight", "bold");

 ////
 //// Update and transition on click:
 ////
var filtered = [];
 function update(d) {
   //
   // Update the array to filter the chart by:
   //
   // add the clicked key if not included:
   if (filtered.indexOf(d) == -1) {
    filtered.push(d);
     // if all bars are un-checked, reset:
     if(filtered.length == keys.length) filtered = [];
   }
   // otherwise remove it:
   else {
     filtered.splice(filtered.indexOf(d), 1);
   }
   //
   // Update the scales for each group(/states)'s items:
   //
   var newKeys = [];
   keys.forEach(function(d) {
     if (filtered.indexOf(d) == -1 ) {
       newKeys.push(d);
     }
   })
   x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
   y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();

   // update the y axis:
           svg.select(".y")
           .transition()
           .call(d3.axisLeft(y).ticks(null, "s"))
           .duration(500);


   //
   // Filter out the bands that need to be hidden:
   //
   var bars = svg.selectAll(".bar").selectAll("rect")
     .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

  bars.filter(function(d) {
        return filtered.indexOf(d.key) > -1;
     })
     .transition()
     .attr("x", function(d) {
       return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
     })
     .attr("height",0)
     .attr("width",0)
     .attr("y", function(d) { return height; })
     .duration(500);

   //
   // Adjust the remaining bars:
   //
   bars.filter(function(d) {
       return filtered.indexOf(d.key) == -1;
     })
     .transition()
     .attr("x", function(d) { return x1(d.key); })
     .attr("y", function(d) { return y(d.value); })
     .attr("height", function(d) { return height - y(d.value); })
     .attr("width", x1.bandwidth())
     .attr("fill", function(d) { return z(d.key); })
     .duration(500);


   // update legend:
   legend.selectAll("rect")
     .transition()
     .attr("fill",function(d) {
       if (filtered.length) {
         if (filtered.indexOf(d) == -1) {
           return z(d);
         }
          else {
           return "white";
         }
       }
       else {
        return z(d);
       }
     })
     .duration(100);
   }
  /*var filtered = [];
  function update(d) {
    console.log("update called")
     //
     // Update the array to filter the chart by:
     //

     // add the clicked key if not included:
     if (filtered.indexOf(d) == -1) {
      filtered.push(d);
       // if all bars are un-checked, reset:
       if(filtered.length == keys.length) filtered = [];
     }
     // otherwise remove it:
     else {
       filtered.splice(filtered.indexOf(d), 1);
     }

     //
     // Update the scales for each group(/states)'s items:
     //
     var newKeys = [];
     keys.forEach(function(d) {
       if (filtered.indexOf(d) == -1 ) {
         newKeys.push(d);
       }
     })
     x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
     y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();
     //console.log(newKeys) //check remaining k
     // update the y axis:
    svg.select(".y")
      .transition()
      .call(d3.axisLeft(y).ticks(null, "s"))
      .duration(500);
     //
     // Filter out the bands that need to be hidden:
     //
    var bars = svg.selectAll(".bar").selectAll("rect")
       .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

    bars.filter(function(d) {
          return filtered.indexOf(d.key) > -1;
       })
       .transition()
       .attr("x", function(d) {
         return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
       })
       .attr("height",0)
       .attr("width",0)
       .attr("y", function(d) { return height; })
       .duration(500);

     //
     // Adjust the remaining bars:
     //
     bars.filter(function(d) {
         return filtered.indexOf(d.key) == -1;
       })
       .transition()
       .attr("x", function(d) { return x1(d.key); })
       .attr("y", function(d) { return y(d.value); })
       .attr("height", function(d) { return height - y(d.value); })
       .attr("width", x1.bandwidth())
       .attr("fill", function(d) { return z(d.key); })
       .duration(500);
     // update legend:
     legend.selectAll("rect")
       .transition()
       .attr("fill",function(d) {
         if (filtered.length) {
           if (filtered.indexOf(d) == -1) {
             return z(d);
           }
            else {
             return "white";
           }
         }
         else {
          return z(d);
         }
       })
       .duration(100);
     }*/ /*interactive legend */
/*
* Graph 2 - Highschool Removals
*/
sample = [
  {
    race: 'Black',
    value: 4802,
    color: '#000000'
  },
  {
    race: 'Hispanic',
    value: 3230,
    color: '#00a2ee'
  },
  {
    race: 'White',
    value: 685,
    color: '#fbcb39'
  },
  {
    race: 'Asian',
    value: 279,
    color: '#007bc8'
  }
  ];
var svgContainer = d3.select('#container');
var margin = 60;
var width = 600 - margin;
var height = 300 - margin;
var svg = d3.select('#myCanvas2')
  .append("svg")
  .attr("width", 800) //set width
  .attr("height", 360);
var chart = svg.append('g')
  .attr('transform', `translate(${margin}, ${margin})`);
var xScale = d3.scaleBand()
.range([0, width])
  .domain(sample.map((s) => s.race))
  .padding(0.5)
var yScale = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 5000]);
var makeYLines = () => d3.axisLeft()
  .scale(yScale)

chart.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));
chart.append('g')
  .call(d3.axisLeft(yScale));
chart.append('g')
  .attr('class', 'grid')
  .call(makeYLines()
    .tickSize(-width, 0, 0)
    .tickFormat('')
  )
  var barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')
  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.race))
    .attr('y', (g) => yScale(g.value))
    .attr('height', (g) => height - yScale(g.value))
    .attr('width', xScale.bandwidth())
  /*  .on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (a) => xScale(a.language) - 5)
        .attr('width', xScale.bandwidth() + 10)
  var y = yScale(actual.value)
      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)
      barGroups.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.value) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          var divergence = (a.value - actual.value).toFixed(1)
          let text = ''
          if (divergence > 0) text += '+'
          text += `${divergence}`
          return idx !== i ? text : '';
        })
    })
    .on('mouseleave', function () {
      d3.selectAll('.value')
        .attr('opacity', 1)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('x', (a) => xScale(a.language))
        .attr('width', xScale.bandwidth())
      chart.selectAll('#limit').remove()
      chart.selectAll('.divergence').remove()
    })*/
  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}`)
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', 10)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Removals')
  svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Race')
  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Student Removals from High School by Race and School')
/*
* Graph 3 - Middle School
*/
  sample = [
    {
      race: 'Black',
      value: 1120,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 900,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 320,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 70,
      color: '#007bc8'
    }
    ];
  svgContainer = d3.select('#container');
  margin = 60;
  width = 600 - margin;
  height = 300 - margin;
  svg = d3.select('#myCanvas3')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 1200]);
  makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
  barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')
  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.race))
    .attr('y', (g) => yScale(g.value))
    .attr('height', (g) => height - yScale(g.value))
    .attr('width', xScale.bandwidth())
    /*.on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (a) => xScale(a.language) - 5)
        .attr('width', xScale.bandwidth() + 10)
      y = yScale(actual.value)
      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)
      barGroups.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.value) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          var divergence = (a.value - actual.value).toFixed(1)
          let text = ''
          if (divergence > 0) text += '+'
          text += `${divergence}`
          return idx !== i ? text : '';
        })
    })
    .on('mouseleave', function () {
      d3.selectAll('.value')
        .attr('opacity', 1)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('x', (a) => xScale(a.language))
        .attr('width', xScale.bandwidth())
      chart.selectAll('#limit').remove()
      chart.selectAll('.divergence').remove()
    })*/
  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}`)
  svg.append('text') //Y-axis label
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Removals')
  svg.append('text') //X-asix label
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Race')
  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Student Removals from Middle School by Race and School')

/*
* Graph 4 - Elementary School Removals
*/
  sample = [
    {
      race: 'Black',
      value: 136,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 136,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 15,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 4,
      color: '#007bc8'
    }
    ];
  svgContainer = d3.select('#container');
  margin = 60;
  width = 600 - margin;
  height = 300 - margin;
  svg = d3.select('#myCanvas4')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 150]);
  makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
  barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')
  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.race))
    .attr('y', (g) => yScale(g.value))
    .attr('height', (g) => height - yScale(g.value))
    .attr('width', xScale.bandwidth())
  /*  .on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (a) => xScale(a.language) - 5)
        .attr('width', xScale.bandwidth() + 10)
      y = yScale(actual.value)
      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y)
      barGroups.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.value) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          var divergence = (a.value - actual.value).toFixed(1)
          let text = ''
          if (divergence > 0) text += '+'
          text += `${divergence}`
          return idx !== i ? text : '';
        })
    })
    .on('mouseleave', function () {
      d3.selectAll('.value')
        .attr('opacity', 1)
      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('x', (a) => xScale(a.language))
        .attr('width', xScale.bandwidth())
      chart.selectAll('#limit').remove()
      chart.selectAll('.divergence').remove()
    })*/ //Hover over to show difference between each bar
  barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}`)
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Removals')
  svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Race')
  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Student Removals from Elementary School by Race and School')

}
function testResults() {
  /*
  * Graph Types:  Mean Math/English Scores - Multi-Line Chart
  *               Math/English Placement Levels - Grouped Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  console.log(isEmpty);
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Student Math Section Scores on New York State standardized testing",
    summary2 = "Student English Section Scores on New York State standardized testing",
    summary3 = "Mean test results for NYC standaize testing on Mathematics by race and placments from Level 1 to Level 4. Students Placing in Level 1 and Level 2 are considered below proficient.  Level 3 and 4 considered proficient and above proficient",
    summary4 = "Mean test results for NYC standaize testing on English by race and placments from Level 1 to Level 4. Students Placing in Level 1 and Level 2 are considered below proficient.  Level 3 and 4 considered proficient and above proficient";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 -  Mean Math
  */
  var data = [
    {
      name: "Black Mean Score",
      values: [
        {date: "2006", score: "644"},
        {date: "2007", score: "654"},
        {date: "2008", score: "661"},
        {date: "2009", score: "669"},
        {date: "2010", score: "669"},
        {date: "2011", score: "670"}
      ]
    } ,
    {
      name: "Hispanic Mean Score",
      values: [
        {date: "2006", score: "647"},
        {date: "2007", score: "657"},
        {date: "2008", score: "664"},
        {date: "2009", score: "673"},
        {date: "2010", score: "673"},
        {date: "2011", score: "673"}
      ]
    },
    {
      name: "White Mean Score",
      values: [
        {date: "2006", score: "676"},
        {date: "2007", score: "684"},
        {date: "2008", score: "690"},
        {date: "2009", score: "696"},
        {date: "2010", score: "695"},
        {date: "2011", score: "695"}
      ]
    },
    {
      name: "Asian Mean Score",
      values: [
        {date: "2006", score: "687"},
        {date: "2007", score: "695"},
        {date: "2008", score: "700"},
        {date: "2009", score: "705"},
        {date: "2010", score: "703"},
        {date: "2011", score: "701"}
      ]
    }
  ];

  var width = 500;
  var height = 300;
  var margin = 50;
  var duration = 250;

  var lineOpacity = "0.25";
  var lineOpacityHover = "0.85";
  var otherLinesOpacityHover = "0.1";
  var lineStroke = "1.5px";
  var lineStrokeHover = "2.5px";

  var circleOpacity = '0.85';
  var circleOpacityOnLineHover = "0.25"
  var circleRadius = 3;
  var circleRadiusHover = 6;
  var legendRectSize = 25; // defines the size of the colored squares in legend
  var legendSpacing = 6; // defines spacing between squares

  // define color scale
  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  /* Format Data */
  var parseDate = d3.timeParse("%Y");
  data.forEach(function(d) {
    d.values.forEach(function(d) {
      //console.log(d.date);
      d.date = parseDate(d.date);
      d.score = +d.score;
    });
  });

  /* Scale */
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width-margin]);

  var yScale = d3.scaleLinear()
    .domain([600, 750])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG */
  var svg = d3.select("#myCanvas").append("svg")
    .attr("width", (width+margin)+"px")
    .attr("height", (height+margin)+"px")
    .append('g')
    .attr("transform", `translate(${margin}, ${margin})`);

  /* Add line into SVG */
  var line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.score));

  var lines = svg.append('g')
    .attr('class', 'lines');

  lines.selectAll('.line-group')
    .data(data).enter()
    .append('g')
    .attr('class', 'line-group')
    .on("mouseover", function(d, i) {
        svg.append("text")
          .attr("class", "title-text")
          .style("fill", color(i))
          .text(d.name)
          .attr("text-anchor", "middle")
          .attr("x", (width-margin)/2)
          .attr("y", 5);
      })
    .on("mouseout", function(d) {
        svg.select(".title-text").remove();
      })
    .append('path')
    .attr('class', 'line')
    .attr('d', d => line(d.values))
    .style('stroke', (d, i) => color(i))
    .style('opacity', lineOpacity)
    .on("mouseover", function(d) {
        d3.selectAll('.line')
  					.style('opacity', otherLinesOpacityHover);
        d3.selectAll('.circle')
  					.style('opacity', circleOpacityOnLineHover);
        d3.select(this)
          .style('opacity', lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
    .on("mouseout", function(d) {
        d3.selectAll(".line")
  					.style('opacity', lineOpacity);
        d3.selectAll('.circle')
  					.style('opacity', circleOpacity);
        d3.select(this)
          .style("stroke-width", lineStroke)
          .style("cursor", "none");
      });
  /* Add circles in the line */
  lines.selectAll("circle-group")
    .data(data).enter()
    .append("g")
    .style("fill", (d, i) => color(i))
    .selectAll("circle")
    .data(d => d.values).enter()
    .append("g")
    .attr("class", "circle")
    .on("mouseover", function(d) {
        d3.select(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .text(`${d.score}`)
          .attr("x", d => xScale(d.date) + 5)
          .attr("y", d => yScale(d.score) - 10);
      })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text").remove();
      })
    .append("circle")
    .attr("cx", d => xScale(d.date))
    .attr("cy", d => yScale(d.score))
    .attr("r", circleRadius)
    .style('opacity', circleOpacity)
    .on("mouseover", function(d) {
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("r", circleRadiusHover);
        })
      .on("mouseout", function(d) {
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("r", circleRadius);
        });


  /* Add Axis into SVG */
  var xAxis = d3.axisBottom(xScale).ticks(5);
  var yAxis = d3.axisLeft(yScale).ticks(5);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height-margin})`)
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append('text')
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("Total values");
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Mean NYS Math Scores From 2006 - 2011')
  /*
  * Graph 2 -  Mean English
  */
  var data = [
    {
      name: "Black Mean Score",
      values: [
        {date: "2006", score: "641"},
        {date: "2007", score: "645"},
        {date: "2008", score: "650"},
        {date: "2009", score: "656"},
        {date: "2010", score: "656"},
        {date: "2011", score: "656"}
      ]
    } ,
    {
      name: "Hispanic Mean Score",
      values: [
        {date: "2006", score: "642"},
        {date: "2007", score: "643"},
        {date: "2008", score: "648"},
        {date: "2009", score: "656"},
        {date: "2010", score: "656"},
        {date: "2011", score: "656"}
      ]
    },
    {
      name: "White Mean Score",
      values: [
        {date: "2006", score: "670"},
        {date: "2007", score: "671"},
        {date: "2008", score: "672"},
        {date: "2009", score: "676"},
        {date: "2010", score: "675"},
        {date: "2011", score: "671"}
      ]
    },
    {
      name: "Asian Mean Score",
      values: [
        {date: "2006", score: "672"},
        {date: "2007", score: "669"},
        {date: "2008", score: "670"},
        {date: "2009", score: "676"},
        {date: "2010", score: "674"},
        {date: "2011", score: "669"}
      ]
    }
  ];

  var width = 500;
  var height = 300;
  var margin = 50;
  var duration = 250;

  var lineOpacity = "0.25";
  var lineOpacityHover = "0.85";
  var otherLinesOpacityHover = "0.1";
  var lineStroke = "1.5px";
  var lineStrokeHover = "2.5px";

  var circleOpacity = '0.85';
  var circleOpacityOnLineHover = "0.25"
  var circleRadius = 3;
  var circleRadiusHover = 6;
  var legendRectSize = 25; // defines the size of the colored squares in legend
  var legendSpacing = 6; // defines spacing between squares

  // define color scale
  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  /* Format Data */
  var parseDate = d3.timeParse("%Y");
  data.forEach(function(d) {
    d.values.forEach(function(d) {
      //console.log(d.date);
      d.date = parseDate(d.date);
      d.score = +d.score;
    });
  });

  /* Scale */
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width-margin]);

  var yScale = d3.scaleLinear()
    .domain([630, 690])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG */
  var svg = d3.select("#myCanvas").append("svg")
    .attr("width", (width+margin)+"px")
    .attr("height", (height+margin)+"px")
    .append('g')
    .attr("transform", `translate(${margin}, ${margin})`);

  /* Add line into SVG */
  var line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.score));

  var lines = svg.append('g')
    .attr('class', 'lines');

  lines.selectAll('.line-group')
    .data(data).enter()
    .append('g')
    .attr('class', 'line-group')
    .on("mouseover", function(d, i) {
        svg.append("text")
          .attr("class", "title-text")
          .style("fill", color(i))
          .text(d.name)
          .attr("text-anchor", "middle")
          .attr("x", (width-margin)/2)
          .attr("y", 5);
      })
    .on("mouseout", function(d) {
        svg.select(".title-text").remove();
      })
    .append('path')
    .attr('class', 'line')
    .attr('d', d => line(d.values))
    .style('stroke', (d, i) => color(i))
    .style('opacity', lineOpacity)
    .on("mouseover", function(d) {
        d3.selectAll('.line')
  					.style('opacity', otherLinesOpacityHover);
        d3.selectAll('.circle')
  					.style('opacity', circleOpacityOnLineHover);
        d3.select(this)
          .style('opacity', lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
    .on("mouseout", function(d) {
        d3.selectAll(".line")
  					.style('opacity', lineOpacity);
        d3.selectAll('.circle')
  					.style('opacity', circleOpacity);
        d3.select(this)
          .style("stroke-width", lineStroke)
          .style("cursor", "none");
      });
  /* Add circles in the line */
  lines.selectAll("circle-group")
    .data(data).enter()
    .append("g")
    .style("fill", (d, i) => color(i))
    .selectAll("circle")
    .data(d => d.values).enter()
    .append("g")
    .attr("class", "circle")
    .on("mouseover", function(d) {
        d3.select(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .text(`${d.score}`)
          .attr("x", d => xScale(d.date) + 5)
          .attr("y", d => yScale(d.score) - 10);
      })
    .on("mouseout", function(d) {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text").remove();
      })
    .append("circle")
    .attr("cx", d => xScale(d.date))
    .attr("cy", d => yScale(d.score))
    .attr("r", circleRadius)
    .style('opacity', circleOpacity)
    .on("mouseover", function(d) {
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("r", circleRadiusHover);
        })
      .on("mouseout", function(d) {
          d3.select(this)
            .transition()
            .duration(duration)
            .attr("r", circleRadius);
        });


  /* Add Axis into SVG */
  var xAxis = d3.axisBottom(xScale).ticks(5);
  var yAxis = d3.axisLeft(yScale).ticks(5);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height-margin})`)
    .call(xAxis);

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append('text')
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .text("Total values");
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Mean NYS English Scores From 2006 - 2011')
  /*
  * Graph 3 -  Math Levels
  */
  var svg = d3.select("#myCanvas3")
  .append("svg")
  .attr("width", 600) //set width
  .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },

  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
    .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{
    "Race": "Black",
    "Level 1(%)": 12.6,
    "Level 2(%)',": 32.7,
    "Level 3(%)": 43.5,
    "Level 4(%)": 11
  }, {
    "Race": "Hispanic",
    "Level 1(%)": 11.1,
    "Level 2(%)',": 30.1,
    "Level 3(%)": 45.5,
    "Level 4(%)": 15.3
  }, {
    "Race": "White",
    "Level 1(%)": 3.8,
    "Level 2(%)',": 14,
    "Level 3(%)": 45.8,
    "Level 4(%)": 36.3
  }, {
    "Race": "Asian",
    "Level 1(%)": 2.5,
    "Level 2(%)',": 9.1,
    "Level 3(%)": 40.9,
    "Level 4(%)": 47.4
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Race;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);

  g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Race); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.Race;
        var ageRange = d.data;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width + 65)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2)
    //.on("click",function(d) { update(d) }); /*for interactive legend*/

  legend.append("text")
    .attr("x", width + 60)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
    // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
      .attr("class", "tooltip")
      //.style("display", "none");
  tooltip.append("rect")
      .attr("width", 140)
      .attr("height", 40)
      .attr("fill", "grey")
      .style("opacity", .4);
  tooltip.append("text")
      .attr("x", 70)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
  /*
  * Graph 4 -  English Levels
  */
  var svg = d3.select("#myCanvas4")
  .append("svg")
  .attr("width", 600) //set width
  .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },
  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
    .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{
    "Race": "Black",
    "Level 1(%)": 11.2,
    "Level 2(%)',": 43.7,
    "Level 3(%)": 43.6,
    "Level 4(%)": 2.5
  }, {
    "Race": "Hispanic",
    "Level 1(%)": 12.5,
    "Level 2(%)',": 43.8,
    "Level 3(%)": 41.5,
    "Level 4(%)": 2.4
  }, {
    "Race": "White",
    "Level 1(%)": 4.1,
    "Level 2(%)',": 22.9,
    "Level 3(%)": 61.1,
    "Level 4(%)": 11.8
  }, {
    "Race": "Asian",
    "Level 1(%)": 4.3,
    "Level 2(%)',": 22.3,
    "Level 3(%)": 61.1,
    "Level 4(%)": 12
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Race;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);

  g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Race); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.Race;
        var ageRange = d.data;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width + 65)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2)
    //.on("click",function(d) { update(d) }); /*for interactive legend*/

  legend.append("text")
    .attr("x", width + 60)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
    // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
      .attr("class", "tooltip")
      //.style("display", "none");
  tooltip.append("rect")
      .attr("width", 140)
      .attr("height", 40)
      .attr("fill", "grey")
      .style("opacity", .4);
  tooltip.append("text")
      .attr("x", 70)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
}
function studentDemographics() {
  /*
  * Graph Types:  Pre-K Enrollment / Total Pre-K Students - Bar Chart
  *               Kindergarten to H.S. Enrollment / Race - Grouped Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  console.log(isEmpty);
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Racial demographics of children enrolled in New York City's Pre-School programs by precetage",
      summary2 = "Racial demographics of children enrolled in New York City's Pre-School programs by total students enrolled",
      summary3 = "Racial demographics of children enrolled in New York City's Elementary, Middle, and High School's by precetage",
      summary4 = "Racial demographics of children enrolled in New York City's Elementary, Middle, and High School's by total students enrolled";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 -  Pre-K Enrollment
  */
  var sample = [
    {
      race: 'Black (%)',
      value: 26,
      color: '#000000'
    },
    {
      race: 'Hispanic (%)',
      value: 36.9,
      color: '#00a2ee'
    },
    {
      race: 'White (%)',
      value: 18.6,
      color: '#fbcb39'
    },
    {
      race: 'Asian (%)',
      value: 15.4,
      color: '#007bc8'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
    var barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')
    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.race))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
    /*  .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.language) - 5)
          .attr('width', xScale.bandwidth() + 10)
    var y = yScale(actual.value)
        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            var divergence = (a.value - actual.value).toFixed(1)
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`
            return idx !== i ? text : '';
          })
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.language))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}`)
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Enrollment (%)')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Race')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Pre-K Enrollment By Race')

  /*
  * Graph 2 -  Total Pre-K Students
  */
  sample = [
    {
      race: 'Black',
      value: 47913,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 79439,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 38020,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 34527,
      color: '#007bc8'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas2')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 80000]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
    var barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')
    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.race))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
    /*  .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.language) - 5)
          .attr('width', xScale.bandwidth() + 10)
    var y = yScale(actual.value)
        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            var divergence = (a.value - actual.value).toFixed(1)
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`
            return idx !== i ? text : '';
          })
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.language))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}`)
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Students')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Race')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Total Students in Pre-K')

  /*
  * Graph 3 -  Kindergarten to H.S. Enrollment % by Race
  */
  var svg = d3.select("#myCanvas3")
    .append("svg")
    .attr("width", 600) //set width
    .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },

  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
    .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{ //Nees to be flipped
    "School": "Elementary School",
    "Black (%)": 27,
    "Hispanic (%)": 40.3,
    "White (%)": 14.8,
    "Asian (%)": 15.6
  }, {
    "School": "Middle School",
    "Black (%)": 27,
    "Hispanic (%)": 40.3,
    "White (%)": 14.8,
    "Asian (%)": 15.6
  }, {
    "School": "High School",
    "Black (%)": 27,
    "Hispanic (%)": 40.3,
    "White (%)": 14.8,
    "Asian (%)": 15.6
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "School")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.School;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);

  g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.School); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.School;
        var ageRange = d.data;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width + 65)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2)
    //.on("click",function(d) { update(d) }); /*for interactive legend*/

  legend.append("text")
    .attr("x", width + 60)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
    // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
      .attr("class", "tooltip")
      //.style("display", "none");
  tooltip.append("rect")
      .attr("width", 140)
      .attr("height", 40)
      .attr("fill", "grey")
      .style("opacity", .4);
  tooltip.append("text")
      .attr("x", 70)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
  /*var filtered = [];
  function update(d) {
    console.log("update called")
     //
     // Update the array to filter the chart by:
     //

     // add the clicked key if not included:
     if (filtered.indexOf(d) == -1) {
      filtered.push(d);
       // if all bars are un-checked, reset:
       if(filtered.length == keys.length) filtered = [];
     }
     // otherwise remove it:
     else {
       filtered.splice(filtered.indexOf(d), 1);
     }

     //
     // Update the scales for each group(/states)'s items:
     //
     var newKeys = [];
     keys.forEach(function(d) {
       if (filtered.indexOf(d) == -1 ) {
         newKeys.push(d);
       }
     })
     x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
     y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();
     //console.log(newKeys) //check remaining k
     // update the y axis:
    svg.select(".y")
      .transition()
      .call(d3.axisLeft(y).ticks(null, "s"))
      .duration(500);
     //
     // Filter out the bands that need to be hidden:
     //
    var bars = svg.selectAll(".bar").selectAll("rect")
       .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

    bars.filter(function(d) {
          return filtered.indexOf(d.key) > -1;
       })
       .transition()
       .attr("x", function(d) {
         return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
       })
       .attr("height",0)
       .attr("width",0)
       .attr("y", function(d) { return height; })
       .duration(500);

     //
     // Adjust the remaining bars:
     //
     bars.filter(function(d) {
         return filtered.indexOf(d.key) == -1;
       })
       .transition()
       .attr("x", function(d) { return x1(d.key); })
       .attr("y", function(d) { return y(d.value); })
       .attr("height", function(d) { return height - y(d.value); })
       .attr("width", x1.bandwidth())
       .attr("fill", function(d) { return z(d.key); })
       .duration(500);
     // update legend:
     legend.selectAll("rect")
       .transition()
       .attr("fill",function(d) {
         if (filtered.length) {
           if (filtered.indexOf(d) == -1) {
             return z(d);
           }
            else {
             return "white";
           }
         }
         else {
          return z(d);
         }
       })
       .duration(100);
     }*/ /*interactive legend */

  /*
  * Graph 4 -  Kindergarten to H.S. Enrollment Total by Race
  */
  var svg = d3.select("#myCanvas4")
    .append("svg")
    .attr("width", 600) //set width
    .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },

  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
    .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{
  "Race": "Black",
  "Elementary School": 169887,
  "Middle School": 108780,
  "High School": 80389
}, {
  "Race": "Hispanic",
  "Elementary School": 253263,
  "Middle School": 162166,
  "High School": 119842
}, {
  "Race": "White",
  "Elementary School": 92779,
  "Middle School": 59407,
  "High School": 43902
}, {
  "Race": "Asian",
  "Elementary School": 97795,
  "Middle School": 62619,
  "High School": 46276
}];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Race;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);

  g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Race); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.Race;
        var ageRange = d.data;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2)
    //.on("click",function(d) { update(d) }); /*for interactive legend*/

  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
    // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
      .attr("class", "tooltip")
      //.style("display", "none");
  tooltip.append("rect")
      .attr("width", 140)
      .attr("height", 40)
      .attr("fill", "grey")
      .style("opacity", .4);
  tooltip.append("text")
      .attr("x", 70)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
  /*var filtered = [];
  function update(d) {
    console.log("update called")
     //
     // Update the array to filter the chart by:
     //

     // add the clicked key if not included:
     if (filtered.indexOf(d) == -1) {
      filtered.push(d);
       // if all bars are un-checked, reset:
       if(filtered.length == keys.length) filtered = [];
     }
     // otherwise remove it:
     else {
       filtered.splice(filtered.indexOf(d), 1);
     }

     //
     // Update the scales for each group(/states)'s items:
     //
     var newKeys = [];
     keys.forEach(function(d) {
       if (filtered.indexOf(d) == -1 ) {
         newKeys.push(d);
       }
     })
     x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
     y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();
     //console.log(newKeys) //check remaining k
     // update the y axis:
    svg.select(".y")
      .transition()
      .call(d3.axisLeft(y).ticks(null, "s"))
      .duration(500);
     //
     // Filter out the bands that need to be hidden:
     //
    var bars = svg.selectAll(".bar").selectAll("rect")
       .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

    bars.filter(function(d) {
          return filtered.indexOf(d.key) > -1;
       })
       .transition()
       .attr("x", function(d) {
         return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
       })
       .attr("height",0)
       .attr("width",0)
       .attr("y", function(d) { return height; })
       .duration(500);

     //
     // Adjust the remaining bars:
     //
     bars.filter(function(d) {
         return filtered.indexOf(d.key) == -1;
       })
       .transition()
       .attr("x", function(d) { return x1(d.key); })
       .attr("y", function(d) { return y(d.value); })
       .attr("height", function(d) { return height - y(d.value); })
       .attr("width", x1.bandwidth())
       .attr("fill", function(d) { return z(d.key); })
       .duration(500);
     // update legend:
     legend.selectAll("rect")
       .transition()
       .attr("fill",function(d) {
         if (filtered.length) {
           if (filtered.indexOf(d) == -1) {
             return z(d);
           }
            else {
             return "white";
           }
         }
         else {
          return z(d);
         }
       })
       .duration(100);
     }*/ /*interactive legend */
}
function disciplineReport() {
  /*
  * Graph Types:  Principal / Removal / Superintendent - Bar Chart
  *               Total Disciplines - Stacked Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Total disciplines of students removed from class by race",
        summary2 = "Total disciplines of students sent to principal by race",
        summary3 = "Total disciplines of students that required Superintendent involvement by race",
        summary4 = "Total of all disciplines by race and type of disciplines";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 -  Removal
  */
  var sample  = [{
    race: 'Black',
    value: 5154,
    color: '#000000'
  },
  {
    race: 'Hispanic',
    value: 4477,
    color: '#00a2ee'
  },
  {
    race: 'White',
    value: 1035,
    color: '#fbcb39'
  },
  {
    race: 'Asian',
    value: 484,
    color: '#007bc8'
  }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 5500]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
    var barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')
    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.race))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
    /*  .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.language) - 5)
          .attr('width', xScale.bandwidth() + 10)
    var y = yScale(actual.value)
        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            var divergence = (a.value - actual.value).toFixed(1)
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`
            return idx !== i ? text : '';
          })
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.language))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}`)
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Removals')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Race')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Student Classroom Removal by Race')

  /*
  * Graph 2 -  Principal
  */
  var sample = [
    {
      race: 'Black',
      value: 11565,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 10023,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 2313,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 1356,
      color: '#007bc8'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas2')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 12000]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
    var barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')
    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.race))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
    /*  .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.language) - 5)
          .attr('width', xScale.bandwidth() + 10)
    var y = yScale(actual.value)
        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            var divergence = (a.value - actual.value).toFixed(1)
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`
            return idx !== i ? text : '';
          })
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.language))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}`)
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Removals')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Race')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Students Sent to Principal')

  /*
  * Graph 3 -  Superintendent
  */
  sample = [
    {
      race: 'Black',
      value: 4964,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 3562,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 553,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 320,
      color: '#007bc8'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas3')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 5000]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));
  chart.append('g')
    .call(d3.axisLeft(yScale));
  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
    )
    var barGroups = chart.selectAll()
      .data(sample)
      .enter()
      .append('g')
    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.race))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', xScale.bandwidth())
    /*  .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
          .attr('opacity', 0)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (a) => xScale(a.language) - 5)
          .attr('width', xScale.bandwidth() + 10)
    var y = yScale(actual.value)
        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
          .attr('y', (a) => yScale(a.value) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((a, idx) => {
            var divergence = (a.value - actual.value).toFixed(1)
            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`
            return idx !== i ? text : '';
          })
      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1)
        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.language))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')
      .text((a) => `${a.value}`)
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Removals')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Race')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Students Sent to Superintendent')

  /*
  * Graph 4 -  Total Disciplines
  */
  var svg = d3.select("#myCanvas4")
    .append("svg")
    .attr("width", 600) //set width
    .attr("height", 350),
  width = 400,
  height = 300;
  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
  },

  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1);
  // The scale for spacing each group's bar:
  var x1 = d3.scaleBand()
    .padding(0.05);
  var x = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.05)
    .align(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  var z = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var data = [{
    "Race": "Black",
    "Classroom Removal": 5154,
    "Principal Involvement": 11565,
    "Superintendent Involvement": 4964,
  }, {
    "Race": "Hispanic",
    "Classroom Removal": 4477,
    "Principal Involvement": 10023,
    "Superintendent Involvement": 3562,
  }, {
    "Race": "White",
    "Classroom Removal": 1035,
    "Principal Involvement": 2313,
    "Superintendent Involvement": 553,
  }, {
    "Race": "Asian",
    "Classroom Removal": 484,
    "Principal Involvement": 1356,
    "Superintendent Involvement": 320,
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Race;
  }));
  y.domain([0, d3.max(data, function(d) {
    return d.total;
  })]).nice();
  z.domain(keys);

  g.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Race); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.Race;
        var ageRange = d.data;
        tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
        tooltip.select("text").text(d[1]-d[0]); //Gives value of each bar in the stack //Ending of tooltip
      });

  g.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  g.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).ticks(null, "s"))
    .append("text")
    .attr("x", 2)
    .attr("y", y(y.ticks().pop()) + 0.5)
    .attr("dy", "0.32em")
    .attr("fill", "#000")
    .attr("font-weight", "bold")
    .attr("text-anchor", "start")
    .text("Population");

  var legend = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend.append("rect")
    .attr("x", width - 19)
    .attr("width", 19)
    .attr("height", 19)
    .attr("fill", z)
    .attr("stroke", z)
    .attr("stroke-width",2)
    //.on("click",function(d) { update(d) }); /*for interactive legend*/

  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9.5)
    .attr("dy", "0.32em")
    .text(function(d) {
      return d;
    });
    // Prep the tooltip bits, initial display is hidden
  var tooltip = svg.append("g")
      .attr("class", "tooltip")
      //.style("display", "none");
  tooltip.append("rect")
      .attr("width", 140)
      .attr("height", 40)
      .attr("fill", "grey")
      .style("opacity", .4);
  tooltip.append("text")
      .attr("x", 70)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
  /*var filtered = [];
  function update(d) {
    console.log("update called")
     //
     // Update the array to filter the chart by:
     //

     // add the clicked key if not included:
     if (filtered.indexOf(d) == -1) {
      filtered.push(d);
       // if all bars are un-checked, reset:
       if(filtered.length == keys.length) filtered = [];
     }
     // otherwise remove it:
     else {
       filtered.splice(filtered.indexOf(d), 1);
     }

     //
     // Update the scales for each group(/states)'s items:
     //
     var newKeys = [];
     keys.forEach(function(d) {
       if (filtered.indexOf(d) == -1 ) {
         newKeys.push(d);
       }
     })
     x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
     y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();
     //console.log(newKeys) //check remaining k
     // update the y axis:
    svg.select(".y")
      .transition()
      .call(d3.axisLeft(y).ticks(null, "s"))
      .duration(500);
     //
     // Filter out the bands that need to be hidden:
     //
    var bars = svg.selectAll(".bar").selectAll("rect")
       .data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

    bars.filter(function(d) {
          return filtered.indexOf(d.key) > -1;
       })
       .transition()
       .attr("x", function(d) {
         return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;
       })
       .attr("height",0)
       .attr("width",0)
       .attr("y", function(d) { return height; })
       .duration(500);

     //
     // Adjust the remaining bars:
     //
     bars.filter(function(d) {
         return filtered.indexOf(d.key) == -1;
       })
       .transition()
       .attr("x", function(d) { return x1(d.key); })
       .attr("y", function(d) { return y(d.value); })
       .attr("height", function(d) { return height - y(d.value); })
       .attr("width", x1.bandwidth())
       .attr("fill", function(d) { return z(d.key); })
       .duration(500);
     // update legend:
     legend.selectAll("rect")
       .transition()
       .attr("fill",function(d) {
         if (filtered.length) {
           if (filtered.indexOf(d) == -1) {
             return z(d);
           }
            else {
             return "white";
           }
         }
         else {
          return z(d);
         }
       })
       .duration(100);
     }*/ /*interactive legend */
}

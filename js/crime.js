function clearGraphs() {
  /*
  * Clear all graphs prior to rendering, to remove and already existing graphs
  */
  //console.log("clearing graphs");
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
* Crime Graphs
*/
function prisonAdmissions() {
  /*
  * Graph Types:  Total Inamtes Discharged / Admitted - Bar Chart
  *               Total Inamtes Discharged / Admitted Over Time - Line Chart
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
  var summary1 = "Total number of inmates dischared from New York City prisons from 2014 - 2019.  White and Hispanic were recorded in a single variable",
      summary2 = "Total number of inmates admitted from New York City prisons from 2014 - 2019.  White and Hispanic were recorded in a single variable",
      summary3 = "Inmates dischares from New York City prisons over a time of 2014 - 2019.  White and Hispanic were recorded in a single variable",
      summary4 = "Inmates admissions from New York City prisons over a time of 2014 - 2019.  White and Hispanic were recorded in a single variable";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Total Inamtes Discharged
  */
  var sample = [
      {
        race: 'Black',
        value: 142729,
        color: '#000000'
      },
      {
        race: 'White/Hispanic',
        value: 112612,
        color: '#00a2ee'
      },
      {
        race: 'Asian',
        value: 4727,
        color: '#fbcb39'
      }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 150000]);
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
      .attr('y', margin / 4.8)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Inmates')
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
      .text('Total Inmates Discharged from 2014 - 2019')
  /*
  * Graph 2 - Total Inamtes Admitted
  */
  sample = [
    {
      race: 'Black',
      value: 19419,
      color: '#000000'
    },
    {
      race: 'White/Hispanic',
      value: 15369,
      color: '#00a2ee'
    },
    {
      race: 'Asian',
      value: 5386,
      color: '#fbcb39'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas2')
  .append("svg")
  .attr("width", 800) //set width
  .attr("height", 400);
var chart = svg.append('g')
  .attr('transform', `translate(${margin}, ${margin})`);
var xScale = d3.scaleBand()
.range([0, width])
  .domain(sample.map((s) => s.race))
  .padding(0.5)
var yScale = d3.scaleLinear()
  .range([height, 0])
  .domain([0, 25000]);
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
    .attr('y', margin / 4.8)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Inmates')
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
    .text('Total Inmates Admitted from 2014 - 2019')
  /*
  * Graph 3 - Total Inamtes Discharged Over Time
  */
  var data = [
    {
      name: "Black",
      values: [
        {date: "2014", price: "38704"},
        {date: "2015", price: "34151"},
        {date: "2016", price: "31822"},
        {date: "2017", price: "28521"},
        {date: "2018", price: "39585"},
        {date: "2019", price: "3324"}
      ]
    } ,
    {
      name: "White/Hispanic",
      values: [
        {date: "2014", price: "29506"},
        {date: "2015", price: "26376"},
        {date: "2016", price: "25458"},
        {date: "2017", price: "23915"},
        {date: "2018", price: "17166"},
        {date: "2019", price: "3776"}
      ]
    },
    {
      name: "Asian",
      values: [
        {date: "2014", price: "1403"},
        {date: "2015", price: "1094"},
        {date: "2016", price: "957"},
        {date: "2017", price: "891"},
        {date: "2018", price: "683"},
        {date: "2019", price: "144"}
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
      d.price = +d.price;
    });
  });

  /* Scale */
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width-margin]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data[0].values, d => d.price)])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG */
  var svg = d3.select("#myCanvas3").append("svg")
    .attr("width", (width+margin)+"px")
    .attr("height", (height+margin)+"px")
    .append('g')
    .attr("transform", `translate(${margin}, ${margin})`);

  /* Add line into SVG */
  var line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.price));

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
          .text(`${d.price}`)
          .attr("x", d => xScale(d.date) + 5)
          .attr("y", d => yScale(d.price) - 10);
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
    .attr("cy", d => yScale(d.price))
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
    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 4.8)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Love meter (%)')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Languages')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', 200)
      .attr('y', -25)
      .attr('text-anchor', 'middle')
      .text('Inamtes Discharged by Year from 2014 - 2019')
  /*
  * Graph 4 - Total Inamtes Admitted Over Time
  */
  data = [
    {
      name: "Black",
      values: [
        {date: "2014", price: "38674"},
        {date: "2015", price: "26300"},
        {date: "2016", price: "31395"},
        {date: "2017", price: "21468"},
        {date: "2018", price: "10734"},
        {date: "2019", price: "2361"}
      ]
    } ,
    {
      name: "White/Hispanic",
      values: [
        {date: "2014", price: "28821"},
        {date: "2015", price: "34041"},
        {date: "2016", price: "25174"},
        {date: "2017", price: "25529"},
        {date: "2018", price: "8858"},
        {date: "2019", price: "1996"}
      ]
    },
    {
      name: "Asian",
      values: [
        {date: "2014", price: "1038"},
        {date: "2015", price: "927"},
        {date: "2016", price: "1108"},
        {date: "2017", price: "994"},
        {date: "2018", price: "543"},
        {date: "2019", price: "122"}
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
      d.price = +d.price;
    });
  });

  /* Scale */
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width-margin]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data[0].values, d => d.price)])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG */
  var svg = d3.select("#myCanvas4").append("svg")
    .attr("width", (width+margin)+"px")
    .attr("height", (height+margin)+"px")
    .append('g')
    .attr("transform", `translate(${margin}, ${margin})`);

  /* Add line into SVG */
  var line = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.price));

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
          .text(`${d.price}`)
          .attr("x", d => xScale(d.date) + 5)
          .attr("y", d => yScale(d.price) - 10);
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
    .attr("cy", d => yScale(d.price))
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
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append('text')
      .attr("y", 15)
      .attr("transform", "rotate(-90)")
      .attr("fill", "#000")
      .text("Total values");
      svg
        .append('text')
        .attr('class', 'label')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 4.8)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Love meter (%)')
      svg.append('text')
        .attr('class', 'label')
        .attr('x', width / 2 + margin)
        .attr('y', height + margin * 1.7)
        .attr('text-anchor', 'middle')
        .text('Languages')
      svg.append('text')
        .attr('class', 'title')
        .attr('x', 200)
        .attr('y', -25)
        .attr('text-anchor', 'middle')
        .text('Inamte Admissions by Year From 2014 - 2019')
}
function prisonDemographics() {
  /*
  * Graph Types:  Current Inmates by Race / Average Age - Bar Chart
  *               Inamtes by Race and Security - Grouped Bar Chart
  *               Inmates by Race and Gender - Stacked Bar Chart
  *
  */
  var summary1 = "Total number of inmates in New York City prisons by race",
    summary2 = "Average of age per race of inmates in New York City Prisons",
    summary3 = "Total number of inmates in Maximum, Medium, and Minimum security prisons by race",
    summary4 = "";
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  console.log(isEmpty);
  if(!isEmpty) {
    clearGraphs();
  }
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Current Inmate
  */
  var sample = [
      {
        race: 'Black',
        value: 4265,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 2363,
        color: '#00a2ee'
      },
      {
        race: 'Asian',
        value: 139,
        color: '#fbcb39'
      },{
        race: 'White',
        value: 908,
        color: '#fbcb39'
      }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 4500]);
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
      .text('Inmates')
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
      .text('Current Inmates by Race')

  /*
  * Graph 2 - Average Age by Race
  */
  sample = [
      {
        race: 'Black',
        value: 35,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 36,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 38,
        color: '#fbcb39'
      },{
        race: 'Asian',
        value: 35,
        color: '#fbcb39'
      }
    ]
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas2')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 400);
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
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Age')
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
      .text('Average Age of Inmates by Race')
  /*
  * Graph 3 - Race and Security Type
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
    "Race": "Black",
    "Minimum": 1153,
    "Medium": 1700,
    "Maximum": 1352
  }, {
    "Race": "White",
    "Minimum": 392,
    "Medium": 355,
    "Maximum": 152
  }, {
    "Race": "Hispanic",
    "Minimum": 779,
    "Medium": 970,
    "Maximum": 597
  }, {
    "Race": "Asian",
    "Minimum": 62,
    "Medium": 55,
    "Maximum": 22
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
  /*
  * Graph 4 - Race and Gender
  */
/*  var svg = d3.select("#myCanvas4")
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
    "State": "VT",
    "Under 5 Years": 32635,
    "5 to 13 Years": 62538,
    "14 to 17 Years": 33757,
    "18 to 24 Years": 61679,
    "25 to 44 Years": 155419,
    "45 to 64 Years": 188593,
    "65 Years and Over": 86649
  }, {
    "State": "VA",
    "Under 5 Years": 522672,
    "5 to 13 Years": 887525,
    "14 to 17 Years": 413004,
    "18 to 24 Years": 768475,
    "25 to 44 Years": 2203286,
    "45 to 64 Years": 2033550,
    "65 Years and Over": 940577
  }, {
    "State": "WA",
    "Under 5 Years": 433119,
    "5 to 13 Years": 750274,
    "14 to 17 Years": 357782,
    "18 to 24 Years": 610378,
    "25 to 44 Years": 1850983,
    "45 to 64 Years": 1762811,
    "65 Years and Over": 783877
  }, {
    "State": "WV",
    "Under 5 Years": 105435,
    "5 to 13 Years": 189649,
    "14 to 17 Years": 91074,
    "18 to 24 Years": 157989,
    "25 to 44 Years": 470749,
    "45 to 64 Years": 514505,
    "65 Years and Over": 285067
  }, {
    "State": "WI",
    "Under 5 Years": 362277,
    "5 to 13 Years": 640286,
    "14 to 17 Years": 311849,
    "18 to 24 Years": 553914,
    "25 to 44 Years": 1487457,
    "45 to 64 Years": 1522038,
    "65 Years and Over": 750146
  }, {
    "State": "WY",
    "Under 5 Years": 38253,
    "5 to 13 Years": 60890,
    "14 to 17 Years": 29314,
    "18 to 24 Years": 53980,
    "25 to 44 Years": 137338,
    "45 to 64 Years": 147279,
    "65 Years and Over": 65614
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "State")
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
    return d.State;
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
        .attr("x", function(d) { return x(d.data.State); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
      .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
      .on("mouseout", function() { tooltip.style("display", "none"); })
      .on("mousemove", function(d) {
        var xPosition = d3.mouse(this)[0] - 10;
        var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
        var state = d.data.State;
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
    //.on("click",function(d) { update(d) }); for interactive legend

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

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });*/
}
function arrestHistory() {
  /*
  * Graph Types:  Total by Race / Non-Violent / Violent - Bar Chart
  *               Crimes by Borough & Race - Stacked Bar Chart
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
  var summary1 = "Total crimes commited in New York City by race of the offender",
  summary2 = "Total Non-Violent crimes in New York City by the race of the offender",
  summary3 = "Total Violent crimes in New York City by the race of the offender",
  summary4 = "Total crimes in New York City by the race of the offender from each borough";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Violent Victims
  */
  var sample = [
      {
        race: 'Black',
        value: 99907,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 55218,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 32120,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 49944,
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
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100000]);
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
      .text('Crimes')
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
      .text('Violent Crimes by Race')
  /*
  * Graph 2 - Non - Violent Crimes by Race
  */
  sample = [
    {
      language: 'Black',
      value: 8060,
      color: '#000000'
    },
    {
      language: 'Hispanic',
      value: 5559,
      color: '#00a2ee'
    },
    {
      language: 'White',
      value: 3045,
      color: '#fbcb39'
    },
    {
      language: 'Asian',
      value: 784,
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
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.language))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 8500]);
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
      .attr('x', (g) => xScale(g.language))
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
      .attr('x', (a) => xScale(a.language) + xScale.bandwidth() / 2)
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
      .text('Crimes')
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
      .text('Non-Violent Crimes')
  /*
  * Graph 3 - By Brought and RAce
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
  //console.log("width: " + width);
  //console.log("height: " + height);

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
    "Bronx": 34239,
    "Brooklyn": 65824,
    "Manhattan": 34041,
    "Queens": 27587,
    "Staten Island": 4952
  }, {
    "Race": "Hispanic",
    "Bronx": 32485,
    "Brooklyn": 20752,
    "Manhattan": 22197,
    "Queens": 18879,
    "Staten Island": 2996
  }, {
    "Race": "White",
    "Bronx": 4024,
    "Brooklyn": 17384,
    "Manhattan": 12619,
    "Queens": 12784,
    "Staten Island": 8523
  }, {
    "Race": "White",
    "Bronx": 708,
    "Brooklyn": 2230,
    "Manhattan": 2204,
    "Queens": 6896,
    "Staten Island": 261
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

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
  /*
  * Graph 4 - Total Victims
  */
  sample = [
    {
      race: 'Black',
      value: 167186,
      color: '#000000'
    },
    {
      race: 'Hispanic',
      value: 97547,
      color: '#00a2ee'
    },
    {
      race: 'White',
      value: 55398,
      color: '#fbcb39'
    },
    {
      race: 'Asian',
      value: 12319,
      color: '#007bc8'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas4')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 170000]);
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
      .attr('y', 10
    )
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Crimes')
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
      .text('Total Crimes by Race')
}
function victimDemographics() {
  /*
  * Graph Types:  Victim by Race / Non-Violent / Violent - Bar Chart
  *               Victims by Borough & Race - Stacked Bar Chart
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
  var summary1 = "Total victims of crimes commited in New York City by race of the victim",
      summary2 = "Total victims of Non-Violent crimes in New York City by the race of the victim",
      summary3 = "Total victims of Violent crimes in New York City by the race of the victim",
      summary4 = "Total victims of crimes in New York City by the race of the victim from each borough";
      drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Non-Violent Victims
  */
  var sample = [
        {
          race: 'Black',
          value: 12732,
          color: '#000000'
        },
        {
          race: 'Hispanic',
          value: 8936,
          color: '#00a2ee'
        },
        {
          race: 'White',
          value: 8502,
          color: '#fbcb39'
        },
        {
          race: 'Asian',
          value: 2081,
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
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 13000]);
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
      .text('Victims')
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
      .text('Non-Violent Crime Victims')

  /*
  * Graph 2 - Violent Crimes by Race
  */
  sample = [ {
          race: 'Black',
          value: 186012,
          color: '#000000'
        },
        {
          race: 'Hispanic',
          value: 154076,
          color: '#00a2ee'
        },
        {
          race: 'White',
          value: 146823,
          color: '#fbcb39'
        },
        {
          race: 'Asian',
          value: 41108,
          color: '#007bc8'
        }];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas2')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 200000]);
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
      .text('Victims')
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
      .text('Violent Crimes by Victim Race')
  /*
  * Graph 3 - Total Crimes
  */

  var sample = [
        {
          race: 'Black',
          value: 247630,
          color: '#000000'
        },
        {
          race: 'Hispanic',
          value: 199696,
          color: '#00a2ee'
        },
        {
          race: 'White',
          value: 195202,
          color: '#fbcb39'
        },
        {
          race: 'Asian',
          value: 52117,
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
    .attr("height", 400);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 250000]);
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
      .text('Victims')
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
      .text('Total Victims by Race')

  /*
  * Graph 4 - Total Victims
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
  //console.log("width: " + width);
  //console.log("height: " + height);

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
    "Bronx": 52540,
    "Brooklyn": 105738,
    "Manhattan": 39626,
    "Queens": 42917,
    "Staten Island": 5984
  }, {
    "Race": "Hispanic",
    "Bronx": 69488,
    "Brooklyn": 42077,
    "Manhattan": 41176,
    "Queens": 40999,
    "Staten Island": 5529
  }, {
    "Race": "White",
    "Bronx": 14031,
    "Brooklyn": 59685,
    "Manhattan": 57080,
    "Queens": 41497,
    "Staten Island": 22711
  }, {
    "Race": "Asian",
    "Bronx": 3126,
    "Brooklyn": 10623,
    "Manhattan": 11312,
    "Queens": 25961,
    "Staten Island": 1026
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

  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });
}

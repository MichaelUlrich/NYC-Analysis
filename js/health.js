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
* Health Graphs
*/
function nycLead() {
  /*
  * Graph Types:  All - Line Charts
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  console.log(isEmpty);
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Children under the age of three tested for lead from 2008 - 2016 by each borough of New York City by total volume of children",
      summary2 = "Children under the age of three tested for lead from 2008 - 2016 by each borough of New York City by precetage of children",
      summary3 = "Children under the age of six tested positive for elevated lead levels from 2008 - 2016 by each borough of New York City by volume of children.  Elevated levels ranging from five micrograms per deciliter to fifteen micrograms per deciliter",
      summary4 = "";
  drawSummarys(summary1, summary2,summary3, summary4);
  /*
  * Graph 1 - Total Under 3 Tested for Lead
  */
  var data = [
    {
      name: "Bronx",
      values: [
        {date: "2008", price: "17500"},
        {date: "2009", price: "18000"},
        {date: "2010", price: "17700"},
        {date: "2011", price: "19400"},
        {date: "2012", price: "19000"},
        {date: "2013", price: "18500"},
        {date: "2014", price: "17800"},
        {date: "2015", price: "17300"},
        {date: "2016", price: "17100"}
      ]
    } ,
    {
      name: "Brooklyn",
      values: [
        {date: "2008", price: "29700"},
        {date: "2009", price: "30500"},
        {date: "2010", price: "29600"},
        {date: "2011", price: "34300"},
        {date: "2012", price: "34500"},
        {date: "2013", price: "34200"},
        {date: "2014", price: "33100"},
        {date: "2015", price: "33400"},
        {date: "2016", price: "32300"}
      ]
    },
    {
      name: "Manhattan",
      values: [
        {date: "2008", price: "14700"},
        {date: "2009", price: "15000"},
        {date: "2010", price: "14300"},
        {date: "2011", price: "15900"},
        {date: "2012", price: "15600"},
        {date: "2013", price: "15000"},
        {date: "2014", price: "14800"},
        {date: "2015", price: "14200"},
        {date: "2016", price: "13500"}
      ]
    }, {
      name: "Queens",
      values: [
        {date: "2008", price: "21400"},
        {date: "2009", price: "21700"},
        {date: "2010", price: "21400"},
        {date: "2011", price: "23800"},
        {date: "2012", price: "22900"},
        {date: "2013", price: "22700"},
        {date: "2014", price: "22500"},
        {date: "2015", price: "22500"},
        {date: "2016", price: "22000"}
      ]
    }, {
      name: "Staten Island",
      values: [
        {date: "2008", price: "4400"},
        {date: "2009", price: "4500"},
        {date: "2010", price: "4300"},
        {date: "2011", price: "4900"},
        {date: "2012", price: "4800"},
        {date: "2013", price: "4600"},
        {date: "2014", price: "4600"},
        {date: "2015", price: "4400"},
        {date: "2016", price: "4400"}
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
    .domain([0, 35000])
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
          //.attr("y", d => yScale(d.price) - 10);
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
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Total Children Under Age 3 Tested For Lead From 2008 - 2016')
  /*
  * Graph 2 - Precentage Under 3 Tested
  */
  data = [
    {
      name: "Bronx",
      values: [
        {date: "2008", price: "86"},
        {date: "2009", price: "87"},
        {date: "2010", price: "87"},
        {date: "2011", price: "88"},
        {date: "2012", price: "87"},
        {date: "2013", price: "87"},
        {date: "2014", price: "87"},
        {date: "2015", price: "86"},
        {date: "2016", price: "86"}
      ]
    } ,
    {
      name: "Brooklyn",
      values: [
        {date: "2008", price: "78"},
        {date: "2009", price: "80"},
        {date: "2010", price: "80"},
        {date: "2011", price: "82"},
        {date: "2012", price: "83"},
        {date: "2013", price: "83"},
        {date: "2014", price: "81"},
        {date: "2015", price: "79"},
        {date: "2016", price: "80"}
      ]
    },
    {
      name: "Manhattan",
      values: [
        {date: "2008", price: "76"},
        {date: "2009", price: "78"},
        {date: "2010", price: "77"},
        {date: "2011", price: "79"},
        {date: "2012", price: "79"},
        {date: "2013", price: "77"},
        {date: "2014", price: "78"},
        {date: "2015", price: "75"},
        {date: "2016", price: "74"}
      ]
    }, {
      name: "Queens",
      values: [
        {date: "2008", price: "80"},
        {date: "2009", price: "82"},
        {date: "2010", price: "82"},
        {date: "2011", price: "83"},
        {date: "2012", price: "84"},
        {date: "2013", price: "84"},
        {date: "2014", price: "84"},
        {date: "2015", price: "83"},
        {date: "2016", price: "82"}
      ]
    }, {
      name: "Staten Island",
      values: [
        {date: "2008", price: "80"},
        {date: "2009", price: "81"},
        {date: "2010", price: "81"},
        {date: "2011", price: "84"},
        {date: "2012", price: "84"},
        {date: "2013", price: "82"},
        {date: "2014", price: "83"},
        {date: "2015", price: "84"},
        {date: "2016", price: "83"}
      ]
    }, {
      name: "NYC Average",
      values: [
        {date: "2008", price: "80"},
        {date: "2009", price: "81"},
        {date: "2010", price: "81"},
        {date: "2011", price: "83"},
        {date: "2012", price: "83"},
        {date: "2013", price: "83"},
        {date: "2014", price: "83"},
        {date: "2015", price: "81"},
        {date: "2016", price: "81"}
    ]}
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
    .domain([70, 90])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG */
  var svg = d3.select("#myCanvas2").append("svg")
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
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Precentage of Children Under Age 3 Tested For Lead From 2008 - 2016')
  /*
  * Graph 3 - Total Children Under 6 with Elevated Lead
  */
  data = [
    {
      name: "Bronx",
      values: [
        {date: "2008", price: "7890"},
        {date: "2009", price: "6747"},
        {date: "2010", price: "4651"},
        {date: "2011", price: "2302"},
        {date: "2012", price: "1661"},
        {date: "2013", price: "1579"},
        {date: "2014", price: "1431"},
        {date: "2015", price: "1032"},
        {date: "2016", price: "1117"}
      ]
    } ,
    {
      name: "Brooklyn",
      values: [
        {date: "2008", price: "9331"},
        {date: "2009", price: "7669"},
        {date: "2010", price: "7139"},
        {date: "2011", price: "6260"},
        {date: "2012", price: "4625"},
        {date: "2013", price: "3887"},
        {date: "2014", price: "3490"},
        {date: "2015", price: "3023"},
        {date: "2016", price: "2812"}
      ]
    },
    {
      name: "Manhattan",
      values: [
        {date: "2008", price: "2673"},
        {date: "2009", price: "1747"},
        {date: "2010", price: "1406"},
        {date: "2011", price: "1150"},
        {date: "2012", price: "765"},
        {date: "2013", price: "717"},
        {date: "2014", price: "627"},
        {date: "2015", price: "477"},
        {date: "2016", price: "357"}
      ]
    }, {
      name: "Queens",
      values: [
        {date: "2008", price: "5452"},
        {date: "2009", price: "4199"},
        {date: "2010", price: "4089"},
        {date: "2011", price: "3130"},
        {date: "2012", price: "2269"},
        {date: "2013", price: "1954"},
        {date: "2014", price: "2024"},
        {date: "2015", price: "1708"},
        {date: "2016", price: "1525"}
      ]
    }, {
      name: "Staten Island",
      values: [
        {date: "2008", price: "710"},
        {date: "2009", price: "609"},
        {date: "2010", price: "441"},
        {date: "2011", price: "374"},
        {date: "2012", price: "302"},
        {date: "2013", price: "300"},
        {date: "2014", price: "278"},
        {date: "2015", price: "191"},
        {date: "2016", price: "227"}
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
    .domain([0, 10000])
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
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Children Under Age 6 Tested Positive for Elevated Lead From 2008 - 2016')
  /*
  * Graph 4 - Precentage Children Under 6 with Elevated Lead
  */
  /*data = [
    {
      name: "USA",
      values: [
        {date: "2000", price: "100"},
        {date: "2001", price: "110"},
        {date: "2002", price: "40"},
        {date: "2003", price: "241"},
        {date: "2004", price: "101"},
        {date: "2005", price: "90"},
        {date: "2006", price: "04"},
        {date: "2007", price: "35"},
        {date: "2008", price: "21"},
        {date: "2009", price: "201"}
      ]
    } ,
    {
      name: "Canada",
      values: [
        {date: "2000", price: "200"},
        {date: "2001", price: "40"},
        {date: "2002", price: "33"},
        {date: "2003", price: "21"},
        {date: "2004", price: "51"},
        {date: "2005", price: "190"},
        {date: "2006", price: "150"},
        {date: "2007", price: "85"},
        {date: "2008", price: "221"},
        {date: "2009", price: "101"}
      ]
    },
    {
      name: "Maxico",
      values: [
        {date: "2000", price: "50"},
        {date: "2001", price: "10"},
        {date: "2002", price: "5"},
        {date: "2003", price: "71"},
        {date: "2004", price: "20"},
        {date: "2005", price: "9"},
        {date: "2006", price: "220"},
        {date: "2007", price: "235"},
        {date: "2008", price: "61"},
        {date: "2009", price: "10"}
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

  /* Format Data */ /*
  var parseDate = d3.timeParse("%Y");
  data.forEach(function(d) {
    d.values.forEach(function(d) {
      //console.log(d.date);
      d.date = parseDate(d.date);
      d.price = +d.price;
    });
  });

  /* Scale *//*
  var xScale = d3.scaleTime()
    .domain(d3.extent(data[0].values, d => d.date))
    .range([0, width-margin]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data[0].values, d => d.price)])
    .range([height-margin, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);
  /* Add SVG *//*
  var svg = d3.select("#myCanvas4").append("svg")
    .attr("width", (width+margin)+"px")
    .attr("height", (height+margin)+"px")
    .append('g')
    .attr("transform", `translate(${margin}, ${margin})`);

  /* Add line into SVG *//*
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
  /* Add circles in the line *//*
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


  /* Add Axis into SVG *//*
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
    .text("Total values");*/
}
function hivDiagnoses() {
  /*
  * Graph Types:  Diagnoses by Race / by Borough / Total - Bar Chart
  *               Diagnoses over time - Line Chart
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
  var summary1 = "Total HIV diagnoses in New York City by indiviual race",
      summary2 = "Total HIV diagnoses in New York City by each bourough",
      summary3 = "Total HIV diagnoses in New York City by race over a timeframe from 2010 - 2013",
      summary4 = "Total AIDS diagnoses in New York City by indiviual race";
    drawSummarys(summary1, summary2,summary3, summary4);
  /*
  * Graph 1 - HIV Diagnoses by Race
  */
  sample = [
      {
        race: 'Black',
        value: 5548,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 4019,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 2328,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 413,
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
    .domain([400, 5600]);
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
          .attr('x', (a) => xScale(a.borough) - 5)
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
      .attr('x', -(height / 2) - 50)
      .attr('y', 10)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Diagnoses')
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
      .text('HIV Diagnoses by Race')
  /*
  * Graph 2 - HIV Diagnoses by Borough
  */
  sample = [
      {
        borough: 'Brooklyn',
        value: 3436,
        color: '#000000'
      },
      {
        borough: 'Queens',
        value: 1972,
        color: '#00a2ee'
      },
      {
        borough: 'Bronx',
        value: 2421,
        color: '#fbcb39'
      },
      {
        borough: 'Manhattan',
        value: 3811,
        color: '#007bc8'
      },
      {
        borough: 'Staten Island',
        value: 188,
        color: '#65cedb'
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
    .domain(sample.map((s) => s.borough))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([180, 4000]);
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
      .attr('x', (g) => xScale(g.borough))
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
      .attr('x', (a) => xScale(a.borough) + xScale.bandwidth() / 2)
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
      .text('Diagnoses')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Borough')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('HIV Diagnoses by Borough')
  /*
  * Graph 3 - HIV Diagnoses over Time
  */
  var data = [
    {
      name: "Black",
      values: [
        {date: "2010", price: "1576"},
        {date: "2011", price: "1466"},
        {date: "2012", price: "1315"},
        {date: "2013", price: "1191"}
      ]
    },
    {
      name: "Hispanic",
      values: [
        {date: "2010", price: "1035"},
        {date: "2011", price: "1045"},
        {date: "2012", price: "984"},
        {date: "2013", price: "955"}
      ]
    },
    {
      name: "White",
      values: [
        {date: "2010", price: "632"},
        {date: "2011", price: "605"},
        {date: "2012", price: "574"},
        {date: "2013", price: "517"}
      ]
    },
    {
      name: "Asian",
      values: [
        {date: "2010", price: "94"},
        {date: "2011", price: "102"},
        {date: "2012", price: "104"},
        {date: "2013", price: "113"}
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
          .attr("x", d => xScale(d.date) - 50)
          .attr("y", d => yScale(d.price) - 100);
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
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 240)
    .attr('y', -20)
    .attr('text-anchor', 'middle')
    .text('Total HIV Diagnoses Over 2010 - 2013')
  /*
  * Graph 4 - Total AIDS Diagnoses
  */
  sample = [
      {
        race: 'Black',
        value: 4543,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 2757,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 1197,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 192,
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
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 4750]);
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
          .attr('x', (a) => xScale(a.race) - 5)
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
          .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.race))
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
      .text('Diagnoses')
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
      .text('Total AIDS Diagnoses by Races')
}
function hospitals() {
  /*
  * Graph Types:  All - Bar Chart
  *
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
  var summary1 = "Total number of hospitals for each borough of New York City",
      summary2 = "Precentage of patients who rated the hospital 9 or higher on a scale of (1 - 10) on Overall Approval",
      summary3 = "Precentage of patients who rated the hospital 9 or higher on a scale of (1 - 10) on Overall Cleanliness",
      summary4 = "Precentage of patients who rated the hospital 9 or higher on a scale of (1 - 10) on Overall Communication to Patients";
    drawSummarys(summary1, summary2,summary3, summary4);
  /*
  * Graph 1 - Hospitals per Borough
  */
  var sample = [
      {
        borough: 'Brooklyn',
        value: 26,
        color: '#000000'
      },
      {
        borough: 'Queens',
        value: 11,
        color: '#00a2ee'
      },
      {
        borough: 'Bronx',
        value: 14,
        color: '#fbcb39'
      },
      {
        borough: 'Manhattan',
        value: 24,
        color: '#007bc8'
      },
      {
        borough: 'Staten Island',
        value: 3,
        color: '#65cedb'
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
    .domain(sample.map((s) => s.borough))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 30]);
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
      .attr('x', (g) => xScale(g.borough))
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
          .attr('x', (a) => xScale(a.borough) - 5)
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
          .attr('x', (a) => xScale(a.borough) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.borough))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.borough) + xScale.bandwidth() / 2)
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
      .text('Hospitals')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Boroughs')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Hospitals Per Borough')
  /*
  * Graph 2 - Major Hospitals Overall Rating
  */
  sample = [
      {
        hospital: 'BELLEVUE HOSPITAL CENTER',
        value: 56,
        color: '#000000'
      },
      {
        hospital: 'CONEY ISLAND HOSPITAL',
        value: 56,
        color: '#00a2ee'
      },
      {
        hospital: 'ELMHURST HOSPITAL CENTER',
        value: 52,
        color: '#fbcb39'
      },
      {
        hospital: 'HARLEM HOSPITAL CENTER',
        value: 42,
        color: '#007bc8'
      },
      {
        hospital: 'JACOBI MEDICAL CENTER',
        value: 50,
        color: '#65cedb'
      },
      {
        hospital: 'KINGS COUNTY HOSPITAL CENTER',
        value: 59,
        color: '#ff6e52'
      },
      {
        hospital: 'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
        value: 51,
        color: '#ff6e52'
      },
      {
        hospital: 'METROPOLITAN HOSPITAL CENTER',
        value: 58,
        color: '#ff6e52'
      },
      {
        hospital: 'NORTH CENTRAL BRONX HOSPITAL',
        value: 58,
        color: '#ff6e52'
      },
      {
        hospital: 'QUEENS HOSPITAL CENTER',
        value: 58,
        color: '#ff6e52'
      },
      {
        hospital: 'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
        value: 54,
        color: '#ff6e52'
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
    .domain(sample.map((s) => s.hospital))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    //.call(d3.axisBottom(xScale)); /*Names of hospitals are too long.  Requires hovering tootltip*/
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
      .attr('x', (g) => xScale(g.hospital))
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
          .attr('x', (a) => xScale(a.hospital) - 5)
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
          .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.hospital))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
      .text('Approval (%)')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Hospitals')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Major Hospitals Overall Approval Rating')
  /*
  * Graph 3 - Major Hospitals Cleanliness Rating
  */
  sample = [
      {
        hospital: 'BELLEVUE HOSPITAL CENTER',
        value: 56,
        color: '#000000'
      },
      {
        hospital: 'CONEY ISLAND HOSPITAL',
        value: 64,
        color: '#00a2ee'
      },
      {
        hospital: 'ELMHURST HOSPITAL CENTER',
        value: 57,
        color: '#fbcb39'
      },
      {
        hospital: 'HARLEM HOSPITAL CENTER',
        value: 61,
        color: '#007bc8'
      },
      {
        hospital: 'JACOBI MEDICAL CENTER',
        value: 63,
        color: '#65cedb'
      },
      {
        hospital: 'KINGS COUNTY HOSPITAL CENTER',
        value: 73,
        color: '#ff6e52'
      },
      {
        hospital: 'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
        value: 65,
        color: '#ff6e52'
      },
      {
        hospital: 'METROPOLITAN HOSPITAL CENTER',
        value: 63,
        color: '#ff6e52'
      },
      {
        hospital: 'NORTH CENTRAL BRONX HOSPITAL',
        value: 62,
        color: '#ff6e52'
      },
      {
        hospital: 'QUEENS HOSPITAL CENTER',
        value: 68,
        color: '#ff6e52'
      },
      {
        hospital: 'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
        value: 65,
        color: '#ff6e52'
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
    .domain(sample.map((s) => s.hospital))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    //.call(d3.axisBottom(xScale));
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
      .attr('x', (g) => xScale(g.hospital))
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
          .attr('x', (a) => xScale(a.hospital) - 5)
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
          .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.hospital))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
      .text('Approval (%)')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Hospitals')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Major Hospital Cleanliness Ratings')
  /*
  * Graph 4 - Major Hospitals Communiaction Rating
  */
  sample = [
    {
      hospital: 'BELLEVUE HOSPITAL CENTER',
      value: 63,
      color: '#000000'
    },
    {
      hospital: 'CONEY ISLAND HOSPITAL',
      value: 68,
      color: '#00a2ee'
    },
    {
      hospital: 'ELMHURST HOSPITAL CENTER',
      value: 57,
      color: '#fbcb39'
    },
    {
      hospital: 'HARLEM HOSPITAL CENTER',
      value: 64,
      color: '#007bc8'
    },
    {
      hospital: 'JACOBI MEDICAL CENTER',
      value: 63,
      color: '#65cedb'
    },
    {
      hospital: 'KINGS COUNTY HOSPITAL CENTER',
      value: 67,
      color: '#ff6e52'
    },
    {
      hospital: 'LINCOLN MEDICAL & MENTAL HEALTH CENTER',
      value: 66,
      color: '#ff6e52'
    },
    {
      hospital: 'METROPOLITAN HOSPITAL CENTER',
      value: 62,
      color: '#ff6e52'
    },
    {
      hospital: 'NORTH CENTRAL BRONX HOSPITAL',
      value: 67,
      color: '#ff6e52'
    },
    {
      hospital: 'QUEENS HOSPITAL CENTER',
      value: 63,
      color: '#ff6e52'
    },
    {
      hospital: 'WOODHULL MEDICAL AND MENTAL HEALTH CENTER',
      value: 68,
      color: '#ff6e52'
    }
    ];
  var svgContainer = d3.select('#container');
  var margin = 60;
  var width = 600 - margin;
  var height = 300 - margin;
  var svg = d3.select('#myCanvas4')
    .append("svg")
    .attr("width", 800) //set width
    .attr("height", 360);
  var chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
  var xScale = d3.scaleBand()
  .range([0, width])
    .domain(sample.map((s) => s.hospital))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  var makeYLines = () => d3.axisLeft()
    .scale(yScale)

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    //.call(d3.axisBottom(xScale));
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
      .attr('x', (g) => xScale(g.hospital))
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
          .attr('x', (a) => xScale(a.hospital) - 5)
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
          .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.hospital))
          .attr('width', xScale.bandwidth())
        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
      })*/
    barGroups
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.hospital) + xScale.bandwidth() / 2)
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
      .text('Approval (%)')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Hospitals')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Major Hosptial Communication Surveys')

}
function nycDeaths() {
  /*
  * Graph Types:  Total Deceased / Infant Mortality in Precentage - Bar Chart
  *               Leading Causes / Infant Mortality in Volume - Grouped Bar Chart
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
  var summary1 = "Total deceased of New York City from 2007 - 2016 by race",
      summary2 = "Four most common causes of death among New York City residents by race.  Non-Specific causes contains all natural and unidentified caues of death.  Malignant Neoplasm contains all forms of malignant tumors",
      summary3 = "Total infant deaths in New York City from 2007 - 2016 by race and child's stage of development. Neonatal - Premature to Newborn.  Post Neonatal - Newborn to 2/3 months old.  Infant - 2/3 months to 2 years old",
      summary4 = "Total infant deaths in New York City from 2007 - 2016 by precetage of total deaths per race";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Total Deceased by Race
  */
  var sample = [
      {
        race: 'Black',
        value: 139533,
        color: '#00a2ee'
      },
      {
        race: 'Hispanic',
        value: 95449,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 255201,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 34685,
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
    .domain(sample.map((s) => s.race))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 260000]);
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
          .attr('x', (a) => xScale(a.race) - 5)
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
          .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.race))
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
      .text('Total Deceased')
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
      .text('Total Deceased By Race from 2007 - 2016')
  /*
  * Graph 2 - Leading Causes by Race
  */
  var svg = d3.select("#myCanvas2")
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
    "race": "Black",
    "Heart Disease": 44008,
    "Malignant Neoplasm": 33756,
    "Non-Specific Causes": 27536,
    "Influenza and Pneumonia": 5104
  }, {
    "race": "Hispanic",
    "Heart Disease": 26737,
    "Malignant Neoplasm": 22316,
    "Non-Specific Causes": 21683,
    "Influenza and Pneumonia": 4140
  }, {
    "race": "White",
    "Heart Disease": 94414,
    "Malignant Neoplasm": 65018,
    "Non-Specific Causes": 43320,
    "Influenza and Pneumonia": 11488
  }, {
    "race": "Asian",
    "Heart Disease": 9750,
    "Malignant Neoplasm": 10358,
    "Non-Specific Causes": 6230,
    "Influenza and Pneumonia": 1730
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.race; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.race;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.race) + ",0)"; })
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
   // Update the scales for each group(/races)'s items:
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
  * Graph 3 - Infant Mortality by Race
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
    "race": "Black",
    "Neonatal": 1392,
    "Post Neonatal": 883,
    "Infant": 2225
  }, {
    "race": "Hispanic",
    "Neonatal": 1181,
    "Post Neonatal": 621,
    "Infant": 1802
  }, {
    "race": "White",
    "Neonatal": 796,
    "Post Neonatal": 961,
    "Infant": 380
  }, {
    "race": "Asian",
    "Neonatal": 402,
    "Post Neonatal": 186,
    "Infant": 588
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "race")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.race; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.race;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.race) + ",0)"; })
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
   // Update the scales for each group(/races)'s items:
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
  * Graph 4 - Infant Mortality by Race (%)
  */
  var whiteInfantMortality = (796/392893)*100,
      asianInfantMortality = (402/196433)*100,
      blackInfantMortality = (1392/255177)*100,
      hispanicInfantMortality = (1181/375856)*100;
  whiteInfantMortality = whiteInfantMortality.toFixed(2);
  asianInfantMortality = asianInfantMortality.toFixed(2);
  blackInfantMortality = blackInfantMortality.toFixed(2);
  hispanicInfantMortality = hispanicInfantMortality.toFixed(2);
  sample = [
      {
        race: 'Black',
        value: blackInfantMortality,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: hispanicInfantMortality,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: whiteInfantMortality,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: asianInfantMortality,
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
    .domain([0, 1]);
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
          .attr('x', (a) => xScale(a.race) - 5)
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
          .attr('x', (a) => xScale(a.race) + xScale.bandwidth() / 2)
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
          .attr('x', (a) => xScale(a.race))
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
      .text('Mortality (%)')
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
      .text('Infant Mortality Rates By Race')

}

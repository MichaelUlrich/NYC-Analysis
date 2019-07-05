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
* Housing Demographics Graphs
*/
function publicHouse() {
  var summary1 = "Total public housing complexes in each New York City Borough.  Public Housing consists of standard low income housing projects across all of New York City Data for Queens on did not provide a breakdwon for each type of house, only total of all public housing projects",
      summary2 = "Total Section 8 housing complexes in each New York City Borough.  Section 8 housing is a special form of housing projects for extremely low income (Below 50% the median income of the area) Data for Queens on did not provide a breakdwon for each type of house, only total of all public housing projects",
      summary3 = "New York City citizens living in public housing complexes by race",
      summary4 = "New York City citizens living in Section 8 housing complexes by race";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph Types:  All - Bar Chart
  *
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  /*
  * Graph 1 - Public Housing by Borough
  */
  var sample = [
      {
        borough: 'Bronx',
        value: 705,
        color: '#000000'
      },
      {
        borough: 'Brooklyn',
        value: 3471,
        color: '#00a2ee'
      },
      {
        borough: 'Manhattan',
        value: 1933,
        color: '#fbcb39'
      },
      {
        borough: 'Queens',
        value: 0,
        color: '#007bc8'
      },
      {
        borough: 'Staten Island',
        value: 871,
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
    .domain([0, 4000]);
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
      .text('Housing Projects')
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
      .text('Public Housing by Borough')
  /*
  * Graph 2 - Section 8 by Borough
  */
  sample = [
    {
      borough: 'Bronx',
      value: 19,
      color: '#000000'
    },
    {
      borough: 'Brooklyn',
      value: 49,
      color: '#00a2ee'
    },
    {
      borough: 'Manhattan',
      value: 32,
      color: '#fbcb39'
    },
    {
      borough: 'Queens',
      value: 0,
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
    .domain([0, 55]);
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
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Housing Projects')
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
      .text('Section 8 Housing by Borough')
  /*
  * Graph 3 - Public Housing by Race
  */
  sample = [
      {
        race: 'Black',
        value: 77384,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 76438,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 8219,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 8085.0,
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
    .domain([0, 78000]);
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
      .text('Citizens')
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
      .text('Public Housing by Race')
  /*
  * Graph 4 - Section 8 Housing by Race
  */
  sample = [
      {
        race: 'Black',
        value: 2272,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 1117,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 103,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 30,
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
    .domain([0, 2300]);
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
      .text('Citizens')
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
      .text('Section 8 Housing by Race')
}
function familyHousing() {
  /*
  * Graph Types:  Families in Public Housing - Bar Chart
  *               Gender of Houseold Lead Public Housing / Section 8  - Stacked Bar Chart
  *               Family Size - Grouped Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Total families in New York City public housing projects by race",
      summary2 = "Families in Public Housing by race and the gender of the head of household",
      summary3 = "Families in Section 8 Housing by race and the gender of the head of household",
      summary4 = "Average families per race in Public Housing and Section 8 Housing projects";
  drawSummarys(summary1, summary2, summary3, summary4);
  /*
  * Graph 1 - Families in Public Housing by Race
  */
  var sample = [
      {
        race: 'Black',
        value: 79656,
        color: '#000000'
      },
      {
        race: 'Hispanic',
        value: 77555,
        color: '#00a2ee'
      },
      {
        race: 'White',
        value: 8322,
        color: '#fbcb39'
      },
      {
        race: 'Asian',
        value: 8115,
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
      .text('Families')
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
      .text('Families in All Public Housing')
  /*
  * Graph 2 - Female/Male Led Households in Public Housing
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
      "Gender": "Female",
      "Black": 62552,
      "Hispanic": 59578,
      "White": 5214,
      "Asian": 3625
    }, {
      "Gender": "Male",
      "Black": 14832,
      "Hispanic": 16860,
      "White": 3005,
      "Asian": 4460
    }];

    // fix pre-processing
    var keys = [];
    for (key in data[0]){
      if (key != "Gender")
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
      return d.Gender;
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
          .attr("x", function(d) { return x(d.data.Gender); })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .attr("width", x.bandwidth())
        .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 10;
          var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
          var state = d.data.Gender;
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
    });
  /*
  * Graph 3 - Female/Male Led Households in Section 8
  */
  svg = d3.select("#myCanvas3")
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
      "Gender": "Female",
      "Black": 1848,
      "Hispanic": 915,
      "White": 50,
      "Asian": 14
    }, {
      "Gender": "Male",
      "Black": 424,
      "Hispanic": 202,
      "White": 53,
      "Asian": 16
    }];

    // fix pre-processing
    var keys = [];
    for (key in data[0]){
      if (key != "Gender")
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
      return d.Gender;
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
          .attr("x", function(d) { return x(d.data.Gender); })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .attr("width", x.bandwidth())
        .on("mouseover", function() { tooltip.style("display", null); }) //Begining of tooltip
        .on("mouseout", function() { tooltip.style("display", "none"); })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 10;
          var yPosition = d3.mouse(this)[1] - 25; //tooltip will appear above pointer instead of blocking
          var state = d.data.Gender;
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
    });
  /*
  * Graph 4 - Average Family Size in Public/Section 8 Housing
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
    "Gender": "Female",
    "Black": 1848,
    "Hispanic": 915,
    "White": 50,
    "Asian": 14
  }, {
    "Gender": "Male",
    "Black": 424,
    "Hispanic": 202,
    "White": 53,
    "Asian": 16
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Gender")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.Gender; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Gender;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.Gender) + ",0)"; })
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
}
function housingTimeframe() {
  /*
  * Graph Types:  Time in Housing Projects - Bar Chart
  *               Time by Race / by Borough / by Borough and Race - Grouped Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Average time spent in housing project before relocating to non-low income housing for both Public Housing and Section 8 in years ",
      summary2 = "Average time spent in housing project before relocating to non-low income housing for both Public Housing and Section 8 by the race of tenants in years ",
      summary3 = "Average time spent in housing project before relocating to non-low income housing for both Public Housing and Section 8 per borough of New York City.  Data for queens did not provide a break down for each type of public housing, averaged data for all housing projects",
      summary4 = "Average time spent in housing project before relocating to non-low income housing for both Public Housing and Section 8 by the race of tenants and the borough of the tenants";
    drawSummarys(summary1, summary2,summary3, summary4);
  /*
  * Graph 1 - Time in Housing Projects
  */
  var sample = [
      {
        Project: 'Years in Public Housing',
        value: 22.3,
        color: '#000000'
      },
      {
        Project: 'Years in Section 8 Housing',
        value: 5,
        color: '#00a2ee'
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
    .domain(sample.map((s) => s.Project))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 25]);
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
      .attr('x', (g) => xScale(g.Project))
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
      .attr('x', (a) => xScale(a.Project) + xScale.bandwidth() / 2)
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
      .text('Years')
    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Housing Project')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Average Time in Public and Section 8 Housing')
  /*
  * Graph 2 - Time by Race
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
    "Project": "Years in Public Housing",
    "Black": 24.8,
    "Hispanic": 20.6,
    "White": 22.9,
    "Asian": 14.3
  }, {
    "Project": "Years in Section 8",
    "Black": 4.9,
    "Hispanic": 5,
    "White": 6,
    "Asian": 5.8
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Project")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.Project; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Project;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.Project) + ",0)"; })
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
  * Graph 3 - Time by Borough
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
    "Project": "Years in Public Housing",
    "Bronx": 20.9,
    "Brooklyn": 21.5,
    "Manhattan": 25.2,
    "Queens": 0,
    "Staten Island": 16.9
  }, {
    "Project": "Years in Section 8",
    "Bronx": 4.8,
    "Brooklyn": 4.9,
    "Manhattan": 5.4,
    "Queens": 0,
    "Staten Island": 4.7
  }];

  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Project")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.Project; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Project;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.Project) + ",0)"; })
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
  * Graph 4 - Time by Borough and Race
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
    "Borough": "Bronx",
    "Black": 24.4,
    "Hispanic": 18,
    "White": 24.1,
    "Asian": 17.3,
  }, {
    "Borough": "Brooklyn",
    "Black": 22.9,
    "Hispanic": 18.9,
    "White": 21.8,
    "Asian": 7.5,
  } , {
    "Borough": "Manhattan",
    "Black": 27.4,
    "Hispanic": 25,
    "White": 23.1,
    "Asian": 16.9,
  }, {
    "Borough": "Queens",
    "Black": 23.8,
    "Hispanic": 16.8,
    "White": 26.2,
    "Asian": 12.3,
  }, {
    "Borough": "Staten Island",
    "Black": 17.5,
    "Hispanic": 14.6,
    "White": 19.4,
    "Asian": 8.7,

  }];



  // fix pre-processing
  var keys = [];
  for (key in data[0]){
    if (key != "Borough")
      keys.push(key);
  }
  data.forEach(function(d){
    d.total = 0;
    keys.forEach(function(k){
      d.total += d[k];
    })
  });

  x0.domain(data.map(function(d) { return d.Borough; }));
  x1.domain(keys).rangeRound([0, x0.bandwidth()]);

  var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
  max_y += max_y * .10; // add an extra 10% to max
  y.domain([0, max_y]); // set y domain

  data.sort(function(a, b) {
    return b.total - a.total;
  });
  x.domain(data.map(function(d) {
    return d.Borough;
  }));

  z.domain(keys);

  g.append("g")
   .selectAll("g")
   .data(data)
   .enter().append("g")
   .attr("class","bar")
   .attr("transform", function(d) { return "translate(" + x0(d.Borough) + ",0)"; })
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
}
function housingIncome() {
  /*
  * Graph Types:  Average Income / Rent by Housing Project - Bar Chart
  *               Average Income & Rent by Housing Project by Borough & Race- Stacked Bar Chart
  *
  */
  var isEmpty = document.getElementById('myCanvas').innerHTML === "" &&
                document.getElementById('myCanvas2').innerHTML === "" &&
                document.getElementById('myCanvas3').innerHTML === "" &&
                document.getElementById('myCanvas4').innerHTML === "";
  if(!isEmpty) {
    clearGraphs();
  }
  var summary1 = "Average income of resident on Public Housing and Project 8 Housing.  The current average income for all New York City bouroughs is around $57,800",
      summary2 = "Average rent for a resident in Public Housing and Project 8 Housing.  The current average rent for all New York City bouroughs is around $3,500",
      summary3 = "Average rent and income of residents in Public Housing and Seciton 8 Housing by race of the resident",
      summary4 = "Average rent and income of residents in Public Housing and Seciton 8 Housing by the bourough of the housing complex";
    drawSummarys(summary1, summary2,summary3, summary4);
  /*
  * Graph 1 - Average Income in Public Housing
  */

  var sample = [
      {
        project: 'Average Public Housing Income (USD)',
        value: 23820,
        color: '#000000'
      },
      {
        project: 'Average Section 8 Housing Income (USD)',
        value: 16529,
        color: '#00a2ee'
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
    .domain(sample.map((s) => s.project))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 24000]);
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
      .attr('x', (g) => xScale(g.project))
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
      .attr('x', (a) => xScale(a.project) + xScale.bandwidth() / 2)
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
      .text('Price (USD $)')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Average Income in Public and Section 8 Housing')

  /*
  * Graph 2 - Average Rent in Public Housing
  */
  sample = [
    {
      project: 'Average Public Housing Rent (USD)',
      value: 486,
      color: '#000000'
    },
    {
      project: 'Average Section 8 Housing Rent (USD)',
      value: 378,
      color: '#00a2ee'
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
    .domain(sample.map((s) => s.project))
    .padding(0.5)
  var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 500]);
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
      .attr('x', (g) => xScale(g.project))
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
      .attr('x', (a) => xScale(a.project) + xScale.bandwidth() / 2)
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
      .text('Price (USD $)')
    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Average Rent in Public and Section 8 Housing')

  /*
  * Graph 3 - Average Income & Rent by Housing Project by Race
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
      "label": "Rent (USD - $)",
      "Black": 507,
      "Hispanic": 465,
      "White": 433,
      "Asian": 488
    }, {
      "label": "Income (USD - $)",
      "Black": 24985,
      "Hispanic": 22560,
      "White": 21204,
      "Asian": 24203
    }];

    // fix pre-processing
    var keys = [];
    for (key in data[0]){
      if (key != "label")
        keys.push(key);
    }
    data.forEach(function(d){
      d.total = 0;
      keys.forEach(function(k){
        d.total += d[k];
      })
    });

    x0.domain(data.map(function(d) { return d.label; }));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);

    var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
    max_y += max_y * .10; // add an extra 10% to max
    y.domain([0, max_y]); // set y domain

    data.sort(function(a, b) {
      return b.total - a.total;
    });
    x.domain(data.map(function(d) {
      return d.label;
    }));

    z.domain(keys);

    g.append("g")
     .selectAll("g")
     .data(data)
     .enter().append("g")
     .attr("class","bar")
     .attr("transform", function(d) { return "translate(" + x0(d.label) + ",0)"; })
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
  * Graph 4 - Average Income & Rent by Housing Project by Borough
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
        "label": "Rent (USD - $)",
        "Bronx": 466,
        "Brooklyn": 483,
        "Manhattan": 497,
        "Queens": 497,
        "Staten Island": 442
      }, {
        "label": "Income (USD - $)",
        "Bronx": 22347,
        "Brooklyn": 23609,
        "Manhattan": 24639,
        "Queens": 24884,
        "Staten Island": 21302
      }];

    // fix pre-processing
    var keys = [];
    for (key in data[0]){
      if (key != "label")
        keys.push(key);
    }
    data.forEach(function(d){
      d.total = 0;
      keys.forEach(function(k){
        d.total += d[k];
      })
    });

    x0.domain(data.map(function(d) { return d.label; }));
    x1.domain(keys).rangeRound([0, x0.bandwidth()]);

    var max_y = d3.max(data, function(d) { return d3.max(keys, function(key) { return d[key]; }); });
    max_y += max_y * .10; // add an extra 10% to max
    y.domain([0, max_y]); // set y domain

    data.sort(function(a, b) {
      return b.total - a.total;
    });
    x.domain(data.map(function(d) {
      return d.label;
    }));

    z.domain(keys);

    g.append("g")
     .selectAll("g")
     .data(data)
     .enter().append("g")
     .attr("class","bar")
     .attr("transform", function(d) { return "translate(" + x0(d.label) + ",0)"; })
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
}

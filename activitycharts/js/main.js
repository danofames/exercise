
var hours_per_week_data = [
    {
        label: '2013-01-01',
        hours: 23
    },
    {
        label: '2013-01-08',
        hours: 13
    },
    {
        label: '2013-01-15',
        hours: 33
    },
];

var chart_height = 520;
var bar_width = 20;

var hours_data = hours_per_week_data.map(function(d) { return d.hours; });

var y = d3.scale.linear()
    .domain([0, d3.max(hours_data)])
    .range([chart_height, 0]);

var chart = d3.select("#chart-hours-per-week")
    .attr('height', chart_height)
    .attr('width', bar_width * hours_per_week_data.length);

var bars = chart.selectAll('g')
    .data(hours_per_week_data)
  .enter().append('g')
    .attr('transform', function(d, i) { return "translate(" + (i * bar_width) + ", 0)"; });


bars.append('rect')
    .attr('y', function(d) { return y(d.hours); })
    .attr('height', function(d) { return chart_height - y(d.hours); })
    .attr('width', bar_width - 1);

bars.append('text')
    .attr('x', bar_width / 2)
    .attr('y', function(d) { return y(d.hours) + 3;})
    .attr("dy", ".75em")
    .text(function (d) { return d.hours; });

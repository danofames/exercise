

var chart_height = 520;
var chart_width = 800;
var bar_width = 20;

var y = d3.scale.linear()
    .range([chart_height, 0]);

var chart = d3.select("#chart-hours-per-week")
    .attr('height', chart_height)
    .attr('width', chart_width);

d3.tsv('data/2013weeklyhours.tsv', type, function(error, data) {

    y.domain([0, d3.max(data, function(d) { return d.hours; })]);

    var bar_width = chart_width / data.length;

    var bars = chart.selectAll('g')
        .data(data)
      .enter().append('g')
        .attr('transform', function(d, i) { return "translate(" + (i * bar_width) + ", 0)"; });

    bars.append('rect')
        .attr('y', function(d) { return y(d.hours); })
        .attr('height', function(d) { return chart_height - y(d.hours); })
        .attr('width', bar_width - 1);

    bars.append('text')
        .attr('x', bar_width / 2)
        .attr('y', function(d) { return y(d.hours) + 3;})
        .attr("dy", ".75em");

});

function type(d) {
    d.hours = +d.hours;
    return d;
}
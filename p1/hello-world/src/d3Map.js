var svg = d3.select("svg");

var projection = d3.geoMercator().scale(75);
var pathGenerator = d3.geoPath().projection(projection);

var rawData;
var countries;

d3.json("world-50m.json", function (error, data) {
	rawData = data;
	
	console.log("Code in the call-back function is only executed when the data file loads.");
	
	countries = topojson.feature(rawData, rawData.objects.countries);
	showMap();
});

var interestingPoints = [[-76.5, 42], [0,0]];

function showMap() {
	// Create or modify paths for each country
	
	projection.fitExtent([[0,0], [svg.attr("width"), svg.attr("height")]], countries);
	pathGenerator = d3.geoPath().projection(projection);
	
	var paths = svg.selectAll("path.country").data(countries.features);
	paths.enter().append("path").attr("class", "country")
	.merge(paths)
	.transition().duration(1000)
	.attr("d", function(country) {
		return pathGenerator(country);
	});
	
	var circles = svg.selectAll("circles").data(interestingPoints);
	circles.enter().append("circle").attr("r", 3)
	.merge(circles)
	.attr("cx", function (d) { return projection(d)[0]; })
	.attr("cy", function (d) { return projection(d)[1]; })
	
}


console.log("Code after the d3.json() call is executed immediately.");


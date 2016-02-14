// Settings
var key = "1e0N4HlljoN53muAk02r3wpxiBUNc7LuZA7Md1ByQpjc",  // key for demo spreadsheet
    query = "&tqx=out:csv",                       // query returns the first sheet as CSV
    csvUrl = "https://spreadsheets.google.com/tq?key=" + key + query;  // CORS-enabled server

d3.csv(csvUrl, function(error, data) {

    function getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	var randomData = data[getRandomArbitrary(1, 12)]

	console.log(randomData)

	d3.select(".video")
		.style("background-image", function() { return "url(" + randomData.video + ")" })

	d3.select(".tags")
		.text(function() { return randomData.tags })

	d3.select(".location span")
		.text(function() { return randomData.city })

	d3.select(".location small")
		.text(function() { return randomData.country })

	d3.select(".matrix").selectAll(".videos")
		.data(data)
		.enter().append("div")
		.attr("class", "videos").append("img")
			.attr("class", "video")
			.attr("src", function(d) { return d.video })
});

var jsonText = "";

document.querySelector("#city").addEventListener("change", function(event){
	findTemperature();
});

function findTemperature(){
	var city = document.querySelector("#city").value;				
	var URL = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=" + "\"" + city + "\"" + ")&format=json";
	var httpreq = new XMLHttpRequest();
	httpreq.open("GET",URL,false);
	httpreq.send();
	jsonText = JSON.parse(httpreq.responseText);
	document.querySelector(".result").innerHTML = jsonText.query.results.channel.title;
	document.querySelector("#sunrise").innerHTML = jsonText.query.results.channel.astronomy.sunrise;
	document.querySelector("#sunset").innerHTML = jsonText.query.results.channel.astronomy.sunset;
	document.querySelector("#lat").innerHTML = jsonText.query.results.channel.item.lat;
	document.querySelector("#long").innerHTML = jsonText.query.results.channel.item.long;
	document.querySelector("#temperature").innerHTML = jsonText.query.results.channel.item.condition.temp;
	document.querySelector("#caption").innerHTML = jsonText.query.results.channel.item.title;					
}

const imagesLengthMinusoOne = images.length - 1;
var x = -1;

function displayNextImage() {
	x = (x === imagesLengthMinusoOne) ? 0 : x + 1;
	document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
	x = (x <= 0) ? imagesLengthMinusoOne : x - 1;
	document.getElementById("img").src = images[x];
}

function startTimer() {
	setInterval(displayNextImage, 3000);
}

document.querySelector('#color').addEventListener("change", function(){
	let target = document.querySelector('#color');
	let data = target.value;
    let color = theme[data];
	document.body.style.background = color[0];
	document.querySelector("header").style.backgroundColor = color[1];
	document.querySelector("footer").style.backgroundColor = color[1];
	document.querySelector("title").style.color = color[2];
});

function findTemperature(){

	var city = document.querySelector("#city").value;				
	URL = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=" + "\"" + city + "\"" + ")&format=json";

	var httpreq = new XMLHttpRequest();
	httpreq.open("GET",URL,false);
	httpreq.send();
	console.log( httpreq.responseText);

	var jsonText = JSON.parse(httpreq.responseText);
	document.querySelector("p#result").innerHTML = jsonText.query.results.channel.title;
	document.querySelector("#sunrise").innerHTML = jsonText.query.results.channel.astronomy.sunrise;
	document.querySelector("#sunset").innerHTML = jsonText.query.results.channel.astronomy.sunset;
	document.querySelector("#lat").innerHTML = jsonText.query.results.channel.item.lat;
	document.querySelector("#long").innerHTML = jsonText.query.results.channel.item.long;
	document.querySelector("#temperature").innerHTML = jsonText.query.results.channel.item.condition.temp;
	document.querySelector("#caption").innerHTML = jsonText.query.results.channel.item.condition.date;				
}

function displayNextImage() {
	x = (x === images.length - 1) ? 0 : x + 1;
	document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
	x = (x <= 0) ? images.length - 1 : x - 1;
	document.getElementById("img").src = images[x];
}

function startTimer() {
	setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "images1.jpg";
images[1] = "images2.jpg";
images[2] = "images3.jpg";
images[3] = "images4.jpg";
images[4] = "images5.jpg";
images[5] = "images6.jpg";
images[6] = "images7.jpg";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2*Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
	grad.addColorStop(0, '#333');
	grad.addColorStop(0.5, 'white');
	grad.addColorStop(1, '#333');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius*0.1;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
	ctx.fillStyle = '#333';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius*0.15 + "px arial";
	ctx.textBaseline="middle";
	ctx.textAlign="center";
	for(num = 1; num < 13; num++){
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.85);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius*0.85);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius){
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour=hour%12;
	hour=(hour*Math.PI/6)+
	(minute*Math.PI/(6*60))+
	(second*Math.PI/(360*60));
	drawHand(ctx, hour, radius*0.5, radius*0.07);
	//minute
	minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
	drawHand(ctx, minute, radius*0.8, radius*0.07);
	// second
	second=(second*Math.PI/30);
	drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

function changeBackground(color) {
	var color = document.querySelector("#color").value;	
	document.body.style.background = color.split(",")[0];
	document.getElementById("header").style.backgroundColor = color.split(",")[1];
	document.getElementById("footer").style.backgroundColor = color.split(",")[1];
	document.getElementById("title").style.color = color.split(",")[2];
}
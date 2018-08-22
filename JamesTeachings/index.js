
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

function getStringWidth(str) {

    var span = document.createElement("span");
    span.innerText = str;
    span.style.visibility = "hidden";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(span);
    var textWidth = span.offsetWidth;
    body.removeChild(span);

    return textWidth;
}

function getAnimationRule(animationName) {
    var KEYFRAME_RULE = window.CSSRule.WEBKIT_KEYFRAMES_RULE ||
        window.CSSRule.MOZ_KEYFRAMES_RULE ||
        window.CSSRule.KEYFRAMES_RULE;

    var stylesheets = document.styleSheets;
    for (var i = 0 ; i < stylesheets.length ; i++) {
        var rules = stylesheets[i].cssRules;
        for (var j = 0 ; j < rules.length ; j++) {
            var rule = rules[j];
            if (rule.type == KEYFRAME_RULE && rule.name == "marquee") {
                return rule;
            }
        }
    }
}

function updateMarqueeAmplitude(element) {

    var animationName = "marquee";
    var marqueeRule = getAnimationRule(animationName);
    if (null == marqueeRule) {
        return;
    }

    // remove the old animation (if any)
    element.style.webkitAnimationName = "none";

    var textWidth = getStringWidth(element.innerText);

    // update the values of our keyframe animation
    marqueeRule.deleteRule("0%");
    marqueeRule.deleteRule("100%");
    marqueeRule.insertRule('0% { text-indent: ' + element.offsetWidth + 'px; }');
    marqueeRule.insertRule('100% { text-indent: ' + -textWidth + 'px; }');

    // re-assign the animation (to make it run)
    element.style.webkitAnimationName = animationName;
}

updateMarqueeAmplitude(document.querySelector(".marquee"));

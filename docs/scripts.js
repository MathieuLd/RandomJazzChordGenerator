var paramValues = {
	number:10,
	root:[0,1,2,3,4,5,6,7,8,9,10,11],
	quality:[0,1,2,3]
}

var domElements = {
	number:"",
	root:[],
	quality:[]
}

function Chord() {
	this.root = 0;
	this.quality = 0;
	this.name = "";
}

function randomInt(val){
	return Math.floor(Math.random() * val);
}


Chord.prototype.createName = function () {
	this.name = "";
	switch(this.root){
		case 0:
			this.name += "C";
			break;
		case 1:
			if (randomInt(2) == 0){
				this.name += "C#";
			}else{
				this.name += "Db";
			}
			break;
		case 2:
			this.name += "D";
			break;
		case 3:
			if (randomInt(2) == 0){
				this.name += "D#";
			}else{
				this.name += "Eb";
			}
			break;
		case 4:
			this.name += "E";
			break;
		case 5:
			this.name += "F";
			break;
		case 6:
			if (randomInt(2) == 0){
				this.name += "F#";
			}else{
				this.name += "Gb";
			}
			break;
		case 7:
			this.name += "G";
			break;
		case 8:
			if (randomInt(2) == 0){
				this.name += "G#";
			}else{
				this.name += "Ab";
			}
			break;
		case 9:
			this.name += "A";
			break;
		case 10:
			if (randomInt(2) == 0){
				this.name += "A#";
			}else{
				this.name += "Bb";
			}
			break;
		case 11:
			this.name += "B";
			break;			
	}
	switch(this.quality){
		case 0:
			this.name += " maj7";
			break;
		case 1:
			this.name += " min7";
			break;
		case 2:
			this.name += " 7";
			break;
		case 3:
			this.name += " dim7";
			break;
	}
}

var randomChords = [];

function fillDomElements(){
	domElements.number = document.getElementById("chordNbr");
	var rootCheckboxs = Array.prototype.slice.call(document.getElementById("root").getElementsByTagName("input"));
	for (var i=0; i<rootCheckboxs.length; i++){
		domElements.root.push(rootCheckboxs[i]);
	}
	var qualityCheckboxs = Array.prototype.slice.call(document.getElementById("quality").getElementsByTagName("input"));
	for (var i=0; i<qualityCheckboxs.length; i++){
		domElements.quality.push(qualityCheckboxs[i]);
	}
}

function clearDomElementsValues(){
	domElements.number.value = "";
	for (var i=0; i<domElements.root.length; i++){
		domElements.root[i].checked = false;
	}	
	for (var i=0; i<domElements.quality.length; i++){
		domElements.quality[i].checked = false;
	}
}

function loadParamValues2DomElementsValues(){
	clearDomElementsValues();
	
	domElements.number.value = paramValues.number;
	for (var i=0; i<paramValues.root.length; i++){
		domElements.root[paramValues.root[i]].checked = true;
	}
	for (var i=0; i<paramValues.quality.length; i++){
		domElements.quality[paramValues.quality[i]].checked = true;
	}
}

function url2ParamValues(urlParams){
	for(var pair of urlParams.entries()) {
		if (pair[0] == "number"){
			paramValues.number = pair[1];
		}else if (pair[0] == "root"){
			paramValues.root = JSON.parse("[" + pair[1] + "]");
		}else if (pair[0] == "quality"){
			paramValues.quality = JSON.parse("[" + pair[1] + "]");
		}
	}
}

function loadUrlParams(urlParams){
	url2ParamValues(urlParams);
	loadParamValues2DomElementsValues();
	generateRandomChords();
}

function printRandomChords(){
	var result = document.getElementById("result");
	var resultString = "";
	for(var i=0; i<randomChords.length; i++){
		var randomChord = randomChords[i];
		resultString += "  /  " + randomChord.name;
	}
	result.innerHTML = resultString;
}


function generateRandomChords() {	
	randomChords = [];
	for(var i=0; i<paramValues.number; i++){
		var chord = new Chord();
		chord.root = paramValues.root[randomInt(paramValues.root.length)];
		chord.quality = paramValues.quality[randomInt(paramValues.quality.length)];
		chord.createName();
		randomChords.push(chord);
	}
	printRandomChords();
}

function domElementsValues2ParamValues(){
	paramValues.number = domElements.number.value;
	paramValues.root = [];
	for (var i=0; i<domElements.root.length; i++){
		if (domElements.root[i].checked){
			paramValues.root.push(i);
		}
	}
	paramValues.quality = []
	for (var i=0; i<domElements.quality.length; i++){
		if (domElements.quality[i].checked){
			paramValues.quality.push(i);
		}
	}
}

function paramValues2Url(){
	var currentUrlNoParam = window.location.href.split('?')[0];
	var newUrl = currentUrlNoParam + '?';
	
	newUrl += 'number=' + paramValues.number + '&';
	newUrl += 'root=' + paramValues.root.toString() + '&';
	newUrl += 'quality=' + paramValues.quality.toString();
	
	return newUrl;
}

function generateRandomChordsButtonTrigger() {
	domElementsValues2ParamValues();
	var newUrl = paramValues2Url();
	window.location.replace(newUrl);
}

function loadDefaultParams(){
	loadParamValues2DomElementsValues();
}



function onBodyLoad(){
	fillDomElements();
	console.log(domElements);console.log(paramValues);
	const queryString = window.location.search;
	if (queryString === ""){
		loadDefaultParams();
	}else{
		const urlParams = new URLSearchParams(queryString);
		loadUrlParams(urlParams);
	}
}
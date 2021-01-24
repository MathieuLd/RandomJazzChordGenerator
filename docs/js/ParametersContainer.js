function ParametersContainer(number = 10, root = [0,1,2,3,4,5,6,7,8,9,10,11], quality = [0,1,2,3,4]) {
	// Property
	this.number = number;
	this.root = root;
	this.quality = quality;
	
	// Methodes
	this.setParametersFromUrlParameters = function(urlParametersStr) {
		const urlParameters = new URLSearchParams(urlParametersStr);
		let parameterName;
		let parameterValue;
		for(let parameterPair of urlParameters.entries()) {
			parameterName = parameterPair[0];
			parameterValue = parameterPair[1];
			if (parameterName == "number"){
				this.number = parameterValue;
			}else if (parameterName == "root"){
				this.root = JSON.parse("[" + parameterValue + "]");
			}else if (parameterName == "quality"){
				this.quality = JSON.parse("[" + parameterValue + "]");
			}
		}
	}
	
	this.getUrl = function() {
		let currentUrlwithoutParameters = window.location.href.split('?')[0];
		let newUrl = currentUrlwithoutParameters + '?';
		newUrl += 'number=' + this.number + '&';
		newUrl += 'root=' + this.root.toString() + '&';
		newUrl += 'quality=' + this.quality.toString();
		return newUrl;
	}
	
	this.setParametersFromDomElements = function(domElementsContainer) {
		this.number = domElementsContainer.number.value;
		this.root = [];
		for (let i=0; i<domElementsContainer.root.length; i++){
			if (domElementsContainer.root[i].checked){
				this.root.push(i);
			}
		}
		this.quality = []
		for (let i=0; i<domElementsContainer.quality.length; i++){
			if (domElementsContainer.quality[i].checked){
				this.quality.push(i);
			}
		}
	}
	
	this.setDom = function(domElementsContainer) {
		domElementsContainer.clearCurrentValues();
		
		domElementsContainer.number.value = this.number;
		for (let i=0; i<this.root.length; i++){
			domElementsContainer.root[this.root[i]].checked = true;
		}
		for (let i=0; i<this.quality.length; i++){
			domElementsContainer.quality[this.quality[i]].checked = true;
		}
	}
	
	this.setDefaultParameters = function() {
		this.number = 10;
		this.root = [0,1,2,3,4,5,6,7,8,9,10,11];
		this.quality = [0,1,2,3,4];
	}
	
	this.generateRandomChordArray = function() {
		let randomChordArray = [];
		for(let i=0; i<this.number; i++){
			let chord = new Chord();
			chord.root = this.root[randomInt(this.root.length)];
			chord.quality = this.quality[randomInt(this.quality.length)];
			chord.setNameFromParameters();
			randomChordArray.push(chord);
		}
		return randomChordArray;
	}
}
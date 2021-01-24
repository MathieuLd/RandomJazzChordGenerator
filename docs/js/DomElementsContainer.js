function DomElementsContainer() {
	// Property
	this.number;
	this.root = [];
	this.quality = [];
	this.result;
	
	// Methodes
	this.initialize = function() {
		this.number = document.getElementById("chordNbr");
		let rootCheckboxs = Array.prototype.slice.call(document.getElementById("root").getElementsByTagName("input"));
		for (let i=0; i<rootCheckboxs.length; i++){
			this.root.push(rootCheckboxs[i]);
		}
		let qualityCheckboxs = Array.prototype.slice.call(document.getElementById("quality").getElementsByTagName("input"));
		for (let i=0; i<qualityCheckboxs.length; i++){
			this.quality.push(qualityCheckboxs[i]);
		}
		this.result = document.getElementById("result");
	}
	
	this.clearCurrentValues = function() {
		this.number.value = "";
		for (let i=0; i<this.root.length; i++){
			this.root[i].checked = false;
		}	
		for (let i=0; i<this.quality.length; i++){
			this.quality[i].checked = false;
		}
	}
	
	this.showChordArray = function(chordArray) {
		let resultString = "";
		let chordName;
		for(let i=0; i<chordArray.length; i++){
			chordName = chordArray[i].name;
			resultString += "  /  " + chordName;
		}
		this.result.innerHTML = resultString;
	}
}
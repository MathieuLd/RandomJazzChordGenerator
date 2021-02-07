function DomElementsContainer() {
	// Property
	this.number;
	this.root = [];
	this.quality = [];
    this.suspension = [];
    this.extention = [];
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
        let suspensionCheckboxsChoice = Array.prototype.slice.call(document.getElementById("suspension").getElementsByClassName("checkboxValueInput")); // A renomer plus tard pck pas que checkbox
        this.suspension.push(suspensionCheckboxsChoice);
        let suspensionLocalParam = Array.prototype.slice.call(document.getElementById("suspension").getElementsByClassName("localParamInput"));
        this.suspension.push(suspensionLocalParam);
        
        let extentionCheckboxsChoice = Array.prototype.slice.call(document.getElementById("extention").getElementsByClassName("checkboxValueInput")); // A renomer plus tard pck pas que checkbox
        this.extention.push(extentionCheckboxsChoice);
        let extentionLocalParam = Array.prototype.slice.call(document.getElementById("extention").getElementsByClassName("localParamInput"));
        this.extention.push(extentionLocalParam); 
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
        for (let i=0; i<this.suspension[0].length; i++){
			this.suspension[0][i].checked = false;
		}
        for (let i=0; i<this.suspension[1].length; i++){
			this.suspension[1][i].value = 0;
		}
        for (let i=0; i<this.extention[0].length; i++){
			this.extention[0][i].checked = false;
		}
        for (let i=0; i<this.extention[1].length; i++){
			this.extention[1][i].value = 0;
		}
	}
	
	this.showChordArray = function(chordArray) {
		let resultString = "";
		let chordName;
        resultString += chordArray[0].name;
		for(let i=1; i<chordArray.length; i++){
			chordName = chordArray[i].name;
			resultString += "  /  " + chordName;
		}
		this.result.innerHTML = resultString;
	}
}
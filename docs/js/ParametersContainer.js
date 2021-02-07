function ParametersContainer(number = 10, root = [0,1,2,3,4,5,6,7,8,9,10,11], quality = [0,1,2,3,4,5], suspension = [[0,1],[10]], extention = [[0,1,2],[10]]) {
	// Property
	this.number = number;
	this.root = root;
	this.quality = quality;
    this.suspension = suspension;
	this.extention = extention;
	
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
			}else if (parameterName == "suspension"){
                let suspensionParameters = parameterValue.split("|");
				this.suspension[0] = JSON.parse("[" + suspensionParameters[0] + "]");
                this.suspension[1] = JSON.parse("[" + suspensionParameters[1] + "]");
			}else if (parameterName == "extention"){
                let extentionParameters = parameterValue.split("|");
				this.extention[0] = JSON.parse("[" + extentionParameters[0] + "]");
                this.extention[1] = JSON.parse("[" + extentionParameters[1] + "]");
			}
		}
	}
	
	this.getUrl = function() {
		let currentUrlwithoutParameters = window.location.href.split('?')[0];
		let newUrl = currentUrlwithoutParameters + '?';
		newUrl += 'number=' + this.number + '&';
		newUrl += 'root=' + this.root.toString() + '&';
		newUrl += 'quality=' + this.quality.toString() + '&';
        newUrl += 'suspension=' + this.suspension[0].toString();
        newUrl += '|' + this.suspension[1].toString() + '&';
        newUrl += 'extention=' + this.extention[0].toString();
        newUrl += '|' + this.extention[1].toString();
    
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
		this.quality = [];
		for (let i=0; i<domElementsContainer.quality.length; i++){
			if (domElementsContainer.quality[i].checked){
				this.quality.push(i);
			}
		}
        
        this.suspension = [];
        let suspensionCheckboxValue = [];
		for (let i=0; i<domElementsContainer.suspension[0].length; i++){
			if (domElementsContainer.suspension[0][i].checked){
				suspensionCheckboxValue.push(i);
			}
		}
        this.suspension.push(suspensionCheckboxValue);
        let suspensionLocalParam = [];
        for (let i=0; i<domElementsContainer.suspension[1].length; i++){
			suspensionLocalParam.push(domElementsContainer.suspension[1][i].value);
		}
        this.suspension.push(suspensionLocalParam);
        
        this.extention = [];
        let extentionCheckboxValue = [];
		for (let i=0; i<domElementsContainer.extention[0].length; i++){
			if (domElementsContainer.extention[0][i].checked){
				extentionCheckboxValue.push(i);
			}
		}
        this.extention.push(extentionCheckboxValue);
        let extentionLocalParam = [];
        for (let i=0; i<domElementsContainer.extention[1].length; i++){
			extentionLocalParam.push(domElementsContainer.extention[1][i].value);
		}
        this.extention.push(extentionLocalParam);
        
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
        for (let i=0; i<this.suspension[0].length; i++){
			domElementsContainer.suspension[0][this.suspension[0][i]].checked = true;
		}
        for (let i=0; i<this.suspension[1].length; i++){
			domElementsContainer.suspension[1][i].value = this.suspension[1][i];
		}
        for (let i=0; i<this.extention[0].length; i++){
			domElementsContainer.extention[0][this.extention[0][i]].checked = true;
		}
        for (let i=0; i<this.extention[1].length; i++){
			domElementsContainer.extention[1][i].value = this.extention[1][i];
		}
	}
	
	this.setDefaultParameters = function() {
		this.number = 10;
		this.root = [0,1,2,3,4,5,6,7,8,9,10,11];
		this.quality = [0,1,2,3,4];
        this.suspension = [[0,1],[10]];
        this.extention =[[0,1,2],[10]];
	}
	
	this.generateRandomChordArray = function() {
		let randomChordArray = [];
		for(let i=0; i<this.number; i++){
			let chord = new Chord();
			chord.root = this.root[randomInt(this.root.length)];
			chord.quality = this.quality[randomInt(this.quality.length)];
            if(this.suspension.length == 0 || (chord.quality != 0 && chord.quality != 2) || randomInt(101) >= this.suspension[1][0]){
                chord.suspension = -1;
            }else{
                chord.suspension = this.suspension[0][randomInt(this.suspension[0].length)];  
            }
            if(this.extention.length == 0 || (chord.quality == 4 || chord.quality == 5)){
                chord.extention = -1;
            }else if(randomInt(101) >= this.extention[1][0]){
                chord.extention = 0;
            }else{
                chord.extention = this.extention[0][randomInt(this.extention[0].length)]+1;  
            }
			chord.setNameFromParameters();
			randomChordArray.push(chord);
		}
		return randomChordArray;
	}
}
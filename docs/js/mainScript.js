let domElementsContainer = new DomElementsContainer();
let parametersContainer = new ParametersContainer();

function generateButtonTrigger() {
	parametersContainer.setParametersFromDomElements(domElementsContainer);
	let newUrl = parametersContainer.getUrl();
	window.location.replace(newUrl);
}

function resetButtonTrigger() {
	let currentUrlWithoutParameters = window.location.href.split('?')[0];
	window.location.replace(currentUrlWithoutParameters);
}

function loadDefaultParameters() {
	parametersContainer.setDom(domElementsContainer);
}

function loadUrlParameters(urlParametersStr){
	parametersContainer.setParametersFromUrlParameters(urlParametersStr);
	parametersContainer.setDom(domElementsContainer);
	let newRandomChordArray = parametersContainer.generateRandomChordArray();
	domElementsContainer.showChordArray(newRandomChordArray);
}

function onBodyLoad(){
	domElementsContainer.initialize();
	const urlParametersStr = window.location.search;
	if (urlParametersStr === ""){
		loadDefaultParameters();
	}else{
		loadUrlParameters(urlParametersStr);
	}
}
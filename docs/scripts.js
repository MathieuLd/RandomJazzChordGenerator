function onBodyLoad(){
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	console.log(urlParams);
	for(var value of urlParams.values()) {
		console.log(value);
	}
}

function generateRandomChords() {
	alert("Hello! I am an alert box!");
}
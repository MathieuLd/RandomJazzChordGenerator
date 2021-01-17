function onBodyLoad(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const param = URLSearchParams.values()
	console.log(queryString);
	console.log(param);
}

function generateRandomChords() {
	alert("Hello! I am an alert box!");
}
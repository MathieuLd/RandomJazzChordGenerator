function onBodyLoad(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const num = urlParams.get('num')
	console.log(queryString);
	console.log(num);
}

function generateRandomChords() {
	alert("Hello! I am an alert box!");
}
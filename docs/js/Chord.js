function Chord(root = 0, quality = 0, name = "") {
	
	// Property
	this.root = root;
	this.quality = quality;
	this.name = name;
	
	// Methodes
	this.setNameFromParameters = function() {
		this.name = "";
		switch(this.root){
			case 0:
				this.name += "C";
				break;
			case 1:
				this.name += (randomInt(2) ? "C#" : "Db");
				break;
			case 2:
				this.name += "D";
				break;
			case 3:
				this.name += (randomInt(2) ? "D#" : "Eb");
				break;
			case 4:
				this.name += "E";
				break;
			case 5:
				this.name += "F";
				break;
			case 6:
				this.name += (randomInt(2) ? "F#" : "Gb");
				break;
			case 7:
				this.name += "G";
				break;
			case 8:
				this.name += (randomInt(2) ? "G#" : "Ab");
				break;
			case 9:
				this.name += "A";
				break;
			case 10:
				this.name += (randomInt(2) ? "A#" : "Bb");
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
				this.name += " min7(b5)";
				break;
			case 4:
				this.name += " dim7";
				break;
		}
	}
}
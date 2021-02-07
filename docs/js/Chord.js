function Chord(root = 0, quality = 0, suspension = -1, extention = -1, alteration = [], name = "") {
	
	// Property
	this.root = root;
	this.quality = quality;
    this.suspension = suspension;
    this.extention = extention;
    this.alteration = alteration;
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
				this.name += (randomInt(2) ? "M" : "Δ");
				break;
			case 1:
				this.name += (randomInt(2) ? "m" : "-");
				break;
			case 2:
				this.name += "";
				break;
			case 3:
				if(randomInt(2)){
                    this.name += "m";
                    if(this.alteration[0] =! 0){this.alteration.unshift(0);}
                }else{
                    this.name += "∅";
                }
				break;
			case 4:
				this.name += (randomInt(2) ? "dim7" : "o7");
				break;
            case 5:
				this.name += (randomInt(2) ? "m(Maj7)" : "mM7");
				break;
		}
        switch(this.extention){
			case 0:
				this.name += "7";
				break;
			case 1:
				this.name += "9";
				break;
			case 2:
				this.name += "11";
				break;
			case 3:
				this.name += "13";
				break;
		}
        if(this.alteration.length != 0){
            this.name += "(";
            for(let i=0; i<this.alteration.length; i++){
                switch(this.alteration[i]){
                    case 0:
                        this.name += "b5";
                        break;
                    case 1:
                        this.name += "#5";
                        break;    
                }
            }
            this.name += ")";
        }
        switch(this.suspension){
			case 0:
				this.name += "sus2";
				break;
			case 1:
				this.name += "sus4";
				break;
		}
	}
}
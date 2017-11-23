var green = 4000;
var red = 5000;
var blue = 2000;

function aliens(x,y,z) {
	if ((x + y + z) == 10000) {
		if (x >= 5000) {
		return "Mother of God, not the green ones";
		}
		else if (y + x === 8000) {
			return "DOOOOOM!";
		}	
		 else if (x + z <= 3000) {
		 	return "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY";
		 }
		 else {
		 	return "We will fight!";
		 }
	    else {
		return "We screwed"
	}
		 

	}

}
var output = aliens(green, red, blue);
console.log(output);
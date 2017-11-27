var green = 4000;
var red = 5000;
var blue = 1000;

function aliens(x,y,z) {
	if ((x + y + z) == 10000) {
		if (x >= 4000) {
			return "Mother of God, not the green ones";
		}
		if (y + x === 3000) {
			return "DOOOOOM!";
		}	
		if (x + z <= 3000) {
		 	return "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY";
		 }
		else {
		 	return "We will fight!";
		 }
		
	}else { 
		return "We screwed";	 
	}
	

}
var output = aliens(green, red, blue);
console.log(output);
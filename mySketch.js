let coolors = ["#ffbe0b", "#fb5607", "#ff006e","#8338ec", "#3a86ff"];
let colorIndex = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(230);
 angleMode(DEGREES);
}
	function mouseDragged() {
	
}
function mouseClicked() {
	colorIndex = colorIndex + 1;
  colorIndex = colorIndex % 5;
	console.log(colorIndex);
}

function DrawA() {
	//D
 push();
	fill(coolors[1]);
	translate(0-140, 40-40);
	myAlphabetD();
 pop();
	
	//R
		push();
		 translate(80-140, 20-40);
		 myAlphabetR();
		pop();

	//A
	push();
	 translate(140-140, 0-40);
	 myAlphabetA();
  pop();
	
	//W
	push();
	 translate(240-140, 10-40)
	 myAlphabetW()
	pop();
}

function draw() {
 noStroke();

	push();
	 translate(width/2, height/2)
	 DrawA();
	pop();
	
	//브러시
		push();
	   fill(coolors[colorIndex]);
		 translate(mouseX, mouseY);
		 ellipse(0, 0, 20, 20);
		pop();	

	
	
}



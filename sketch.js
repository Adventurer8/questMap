let img; // Declare variable 'img'.

function setup () {
    createCanvas(1280, 650);
    background(0);
	t=1;

	// img = createImage(1280, 650);
  	img = createGraphics(1280, 650);

  	time=0;
  	x=300;
  	y=300;
  	dx=2*random() - 1;
  	dy=2*random() - 1;
  	ddx=0;
  	ddy=0;
  	dt=5;
  	stroke(255,200);
  	strokeWeight(2);
  	rectMode(CENTER);
  	ellipseMode(CENTER);


  	////	Карта	//////////////////////
  	map = [];
  	map[0] = new block(200,200, 300, 200);
  	map[1] = new block(300,200, 500, 100);
  	//////////////////////////////////////
}

let map;

let t;
let time;
let x,y;
let dx,dy;
let ddx, ddy;
let dt;
let R = 6;

function draw () {

	background(50);

	

	fill(200, 220, 210);
	noStroke();
	// rect(200,200,50,300);

	for(let i in map)
		map[i].show();

	// img.loadPixels();
	// for (let x = 0; x < img.width; x++) {
 //    	for (let y = 0; y < img.height; y++) {
 //    		let r = sqrt((x - mouseX)**2 + (y - mouseY)**2) | 0;
 //    	  	//let a = map(y, 0, img.height, 0, 255);
 //      		img.set(x, y, [0, 0, 0, r]);
 //    	}
 //  	}
 //  	img.updatePixels();

 //  	image(img, 0,0);


 	img.background(0);
 	img.erase();
 	img.noStroke();
 	img.fill(255, 50);
 	for(let i = 0; i<5; i++) {
 		img.ellipse(mouseX, mouseY, (R+sin(frameCount/20)/10-i)*50);
 	}
 	img.noErase();

 	if(random(400)>=5)	//	выспышки освещения
 		image(img, 0, 0);



 	stroke(0);
 	fill(250, 130, 15, 255*((frameCount %50)>25));
 	ellipse(x,y,20/*+10*sin(frameCount/10)/5*/);
	

	if(keyIsDown(37)) {	// <
		x--;
		let bool = false;
		for(let i in map) bool |= map[i].in(x, y);
			print(bool);
		if(!bool) x++;
	}
	if(keyIsDown(38)) {	// ^
		y--;
		let bool = false;
		for(let i in map) bool |= map[i].in(x, y);
		if(!bool) y++;
	}
	if(keyIsDown(39)) {	// >
		x++;
		let bool = false;
		for(let i in map) bool |= map[i].in(x, y);
		if(!bool) x--;
	}
	if(keyIsDown(40)) {	// v
		y++;
		let bool = false;
		for(let i in map) bool |= map[i].in(x, y);
		if(!bool) y--;
	}
	

}

class block {
	constructor(x, y, a, b) {
		this.x = x;
		this.y = y;
		this.a = a;
		this.b = b;
	}

	show() {
		rect(this.x, this.y, this.a, this.b);
	}

	in(x, y) {
		let dx = (x - this.x) / this.a;
		let dy = (y - this.y) / this.b;
		if(abs(dx + dy) + abs(dx - dy) <= 1) return true
			else return false;
	}
}

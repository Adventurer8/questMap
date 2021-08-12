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
}

let t;
let time;
let x,y;
let dx,dy;
let ddx, ddy;
let dt;
let R = 200;

function draw () {

	background(50);

	

	fill(150);
	noStroke();
	rect(200,200,50,300);
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
 	for(let i = 0; i<4; i++) {
 		img.ellipse(mouseX, mouseY, (6-i)*50);
 	}
 	img.noErase();

 	image(img, 0, 0);



 	fill(127, 30, 15, 127*(1 + sin(frameCount/10)));
 	ellipse(x,y,20);
	/*if(keyCode == 17) return 0;

	line(x, y, x+=dx, y+=dy);

	d = dist(300,300,x,y);
	dx+= d*d/100000 * ((600+time)*random() - x)/d;
	dy+= d*d/100000 * (600*random() - y)/d;
	
	dx+= ddx/1000;
	dy+= ddy/1000;

	if(random()*10 > dt) {
		dt = random()*10;
		ddx = (random()*2 - 1)+0.5;
		ddy = (random()*2 - 1);
	}
	if(dx+dy>8) {
		dx*=0.9;
		dy*=0.9;
		ddx*=0.9;
		ddy*=0.9;
	}*/


	if(keyIsDown(37)) {	// <
		x--;
	}
	if(keyIsDown(38)) {	// ^
		y--;
	}
	if(keyIsDown(39)) {	// >
		x++;
	}
	if(keyIsDown(40)) {	// v
		y++;
	}
	// if((x-100)**2 + (y-100)**2 < 100) R=300;
	// ellipse(100,100,10);

	// print("ddx = ", round(ddx,3), "  ddy = ", round(ddy,3));


 //  	background(0);
  	
 //  	ellipseMode(CENTER);
	// for(let i=0;i<250;i++){
	// 	noFill();
	// 	stroke(250-t,255-i);
	// 	ellipse(500,300,20+i+t,20+i+t);
	// }
	// fill(150,250,150);
	// stroke(255);
	// ellipse(500,300,20+255+10*sin(t/100),20+255+10*sin(t/100));
	// t+=10;
	// if(t>width/9*2){t=1;}


	// stroke

 //  	image(img, 90, 80);
 //  	image(img, mouseX - img.width / 2, mouseY - img.height / 2);

}
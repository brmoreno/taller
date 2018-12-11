var particulas = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	for (i = 0; i <200; i++){
		c = color(random(255),random(255),random(255));
		particulas.push(new Particula(random(width),random(height),random(-1,1),random(-1,1),random(10,50),c));
	}
}

function draw() {
	background(255);	
	for (i = 0 ; i<particulas.length; i++){
		particulas[i].mover();
		particulas[i].display();
	}
}

function Particula(x_, y_, dx_, dy_,t_,c_){
	this.x = x_;
	this.y = y_;
	this.dx = dx_;
	this.dy = dy_;
	this.t = t_;
	this.c = c_;
	
	this.display = function (){
		noStroke();
		fill(this.c);
		ellipse(this.x,this.y,this.t,this.t);
	}
	
	this.mover = function(){
		this.x += this.dx;
		this.y += this.dy;
		if (this.x <= 0|| this.x>width){
			this.dx *= -1;
		}
		if (this.y <= 0 || this.y>height){
			this.dy *= -1;
		}
	}	
}

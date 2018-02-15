var canvas = document.getElementById('mycanvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.background = "url(img/image.jpg)";

var c = canvas.getContext('2d');

var colorArray = ['#EF6270', '#734052', '#213443', '#F4EAC8', '#F15F60'];
var numCircles = 6200;


var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('resize', 
	function(event) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		init();
	})
canvas.addEventListener('mousemove', 
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
	})

// class like object
function Circle(x, y, r, dx, dy) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.dx = dx;
	this.dy = dy;
	this.maxRadius = 20 + 50 * Math.random()
	this.minRadius = Math.random() * 4 + 2
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]


	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		c.fillStyle = this.color;
		// c.lineWidth = 3;
		// c.fillStyle = 'rgba(255, 255, 196, .6)';
		c.fill();
		// c.stroke();
	}

	this.update = function() {
		if (this.x + this.r > canvas.width || this.x - this.r < 0) {
			this.dx = -this.dx;
			this.dy = 2*(Math.random() - 0.5);
		}
		if (this.y + this.r > canvas.height || this.y - this.r < 0) {
			this.dy = -this.dy;
			this.dx = 2*(Math.random() - 0.5);
		}
		this.x += this.dx;
		this.y += this.dy;

		if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
			if (this.r + 2 < this.maxRadius && this.x>this.r+2 && canvas.width - this.x > this.r+2
				&& this.y>this.r+2 && canvas.height - this.y > this.r+2) {
				this.r += Math.floor(1+ 3*Math.random());
			}
		} else if(this.r > this.minRadius) {
			this.r -= 1;
		}

		this.draw();
	}
}

var circles = [];
function init() {
	circles = [];
	for (let i=0; i<numCircles; i++) {
		var radius = 6;
		var x = radius + Math.random()*(innerWidth - 2*radius);
		var y = radius + Math.random()*(innerHeight - 2*radius);
		var dx = 1*(-1+2*Math.random());
		var dy = 1*(-1+2*Math.random());
		circles.push(new Circle(x, y, radius, dx, dy));
	}
}

init()

animate = function() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height); // clear previous frame 
	for (let i=0; i<circles.length; i++) {
		circles[i].update();
	}
}
animate();
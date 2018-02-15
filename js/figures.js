var canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
// some of the basic drawings
// line
c.beginPath();
c.moveTo(100, 200); // start point
c.lineTo(200, 400); // end point or intermediate point
c.lineTo(300, 34);
c.strokeStyle = 'rgba(255, 0, 0, .8)'; // fill color to stroke. It also could be #ff0000 or rgb(255, 0, 0) or red
c.stroke(); // drawing function


// Rectangle
c.fillStyle = 'rgba(0, 255, 0, .5)'; // fill color to stroke. Note it applies to all rect goes after if there isn't another fillStyle
c.fillRect(100, 100, 100, 100); // create rectangle with (x0, y0, width, height)
c.fillRect(100, 200, 50, 50); // another rect with same color
c.fillStyle = 'rgba(0, 0, 255, .8)';
c.fillRect(200, 100, 50, 50);

// Arc / circle
// c.arc(x: int, y: int, r: int, startAngle: Float(radians), endAngle: Float(radians), drawCounterClockwise: bool)
// to prevent continuing drawing lines we have to start new path
for (var i=0; i<400; i++) {
	var y = window.innerHeight*Math.random(); // return pseudorandom number from [0, 1)
	var x = window.innerWidth*Math.random();
	var color = Math.floor(100 + 100*Math.random());
	color = color.toString(16);
	c.beginPath();
	c.arc(x, y, 20, 0, 2 * Math.PI, true);
	c.strokeStyle = 'rgba('+color+', '+color+', '+color+', .9)'
	c.stroke();
}
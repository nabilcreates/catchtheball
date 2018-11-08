var e = {
	x: 0,
	y: 0,
	d: 10,
}

var cursor = {
    x: null,
    y: null,
    d: 10,
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
	checkForIntersect()
	
	e.x += random(0,2)
	e.y += random(0,2)
	
	ellipse(e.x,e.y,e.d)
    
    cursor.x = mouseX;
    cursor.y = mouseY;
    cursor.d = 20;
    ellipse(cursor.x,cursor.y,cursor.d)
}

function checkForIntersect(){
	if(dist(cursor.x, cursor.y, e.x ,e.y) <= e.d){
        console.log('hit')
        console.log(score)
	}
}
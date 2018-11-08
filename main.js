var score = 0;

var e = {
	x: 50,
	y: 30,
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
	
	e.x += random(0,9)
	e.y += random(0,9)
	
    ellipse(e.x,e.y,e.d)

    cursor.x = mouseX;
    cursor.y = mouseY;
    cursor.d = 20;
    ellipse(cursor.x,cursor.y,cursor.d)

    checkOutOfCanvas()
}

function checkForIntersect(){
	if(dist(cursor.x, cursor.y, e.x ,e.y) <= e.d){
        console.log('hit')

        score++
        console.log(score)

        e.x = 50;
        e.y = 30;
	}
}

function checkOutOfCanvas(){
    if(e.x > width || e.y > height){
        console.log('out')
    }
}
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

var speed = 1;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    // DISPLAY SCORE
    fill(255)
    text('Score: ' + score, 10, 30);

    // RUN FUNCTIONS (BELOW)
    checkForIntersect()
    checkOutOfCanvas()

    // MAKE E.X AND E.Y RANDOM (SO IT MOVES RANDOMLY)
    e.x += random(0, speed)
    e.y += random(0, speed)

    // DRAW THE ELLIPSE
    ellipse(e.x, e.y, e.d)

    // DRAW CURSOR
    cursor.x = mouseX;
    cursor.y = mouseY;
    cursor.d = 20;
    ellipse(cursor.x, cursor.y, cursor.d)

}

function checkForIntersect() {
    // CHECK IF THE BALL INTERSECTS WITH THE CURSOR
    if (dist(cursor.x, cursor.y, e.x, e.y) <= e.d) {

        // IF YES, CONSOLE LOG HIT
        console.log('hit')

        // ADD THE SCORE
        score++

        // E.X AND E.Y FO TO RANDOM LOCATION
        e.x = random(width)
        e.y = random(height)
    }
}

function checkOutOfCanvas() {

    //  IF E.X GOES OVER WIDTH OR E.Y GOES OVER HEIHGT
    if (e.x > width || e.y > height) {

        // THEN CONSOLE LOG OUT
        console.log('out')

        // E.X AND E.Y GO TO RANDOM LOCATION
        e.x = random(width)
        e.y = random(height)

        // SCORE = 0
        score = 0;
    }
}
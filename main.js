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

// SPEED IS THE SAME AS DIFFICULTY
var speed = 2;
var level = 'BEGINNER'

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);

    // DISPLAY SCORE
    fill(255)
    text('Score: ' + score, 10, 30);
    text('Difficulty: ' + level, 10, 50);


    // RUN FUNCTIONS (BELOW)
    checkForIntersect()
    checkOutOfCanvas()
    checkLevel()

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

        // E.X AND E.Y FO TO RANDOM LOCATION (Minus 200 because sometimes it will spawn at the end of the canvas)
        e.x = random(width - 200)
        e.y = random(height - 200)
    }
}

function checkOutOfCanvas() {

    //  IF E.X GOES OVER WIDTH OR E.Y GOES OVER HEIHGT
    if (e.x > width || e.y > height) {

        // THEN CONSOLE LOG OUT
        console.log('out')

        // E.X AND E.Y GO TO RANDOM LOCATION (Minus 200 because sometimes it will spawn at the end of the canvas)
        e.x = random(width - 200)
        e.y = random(height - 200)

        // SCORE = 0
        score = 0;
    }
}

// INCREASES THE SPEED (DIFICULTY ACCORDING TO SCORE)
function checkLevel(){

    switch(score){

        case 0:
        speed = 1;
        level = "BEGINNER"
        break;
        
        case 5:
        speed = 2;
        level = "MMHMM..."
        break;

        case 7:
        speed = 3;
        level = "shiiiiiiit..."
        break;
        
        case 10:
        speed = 5;
        level = "DAAAAAAAAAAAAAAAMN"
        break;

        case 15:
        speed = 9;
        level = "HOLDING UP GOOD?"
        break;
    }
    
}
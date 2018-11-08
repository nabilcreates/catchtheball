var score = 0;

var e = {
    x: 50,
    y: 30,
    d: 50,
}

var cursor = {
    x: null,
    y: null,
    sx: 50,
    sy: 50,
}

// SPEED IS THE SAME AS DIFFICULTY
var speed = 2;
var difficulty = 'BEGINNER'

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);

    // DISPLAY SCORE
    fill(255)
    text('Score: ' + score, 10, 30);
    text('Difficulty: ' + difficulty, 10, 50);


    // RUN FUNCTIONS (BELOW)
    checkForIntersect()
    checkOutOfCanvas()
    checkLevel()

    // RUN THE MOVE FUNCTION
    move()

    // DRAW THE ELLIPSE
    ellipse(e.x, e.y, e.d)

    // DRAW CURSOR
    cursor.x = mouseX;
    cursor.y = mouseY;
    cursor.sx = 20;
    cursor.sy = 20;

    // MINUS CURSOR.SX/2 IS BECAUSE IT DISPLAYS THAT THE CURSOR POINTER IS ON THE TOP LEFT, SO WE MINUS IT MY THE WIDTH / 2 SO THAT THE CURSOR WILL DISPLAY IN THE CENTER (SAME FOR CURSOR.SY)
    rect(cursor.x - cursor.sx/2, cursor.y - cursor.sy/2, cursor.sx, cursor.sy)

}

function checkForIntersect() {
    // CHECK IF THE BALL INTERSECTS WITH THE CURSOR
    if (dist(cursor.x, cursor.y, e.x, e.y) <= e.d / 2) {

        // IF YES, CONSOLE LOG HIT
        console.log('hit')

        // ADD THE SCORE
        score++

        // RUN THE SPAWN FUNCTION
        spawn()

    }
}

function checkOutOfCanvas() {

    //  IF E.X GOES OVER WIDTH OR E.Y GOES OVER HEIHGT
    if (e.x > width || e.y > height) {

        // THEN CONSOLE LOG OUT
        console.log('out')

        // RUN THE SPAWN FUNCTION
        spawn()

        // SCORE = 0
        score = 0;
    }
}

// INCREASES THE SPEED (DIFICULTY ACCORDING TO SCORE)
function checkLevel() {

    switch (score) {

        case 0:
            speed = 1;
            difficulty = "BEGINNER"
            break;

        case 5:
            speed = 2;
            difficulty = "MMHMM..."
            break;

        case 7:
            speed = 3;
            difficulty = "shiiiiiiit..."
            break;

        case 10:
            speed = 5;
            difficulty = "DAAAAAAAAAAAAAAAMN"
            break;

        case 15:
            speed = 9;
            difficulty = "HOLDING UP GOOD?"
            break;
    }

}

function spawn() {
    e.x = random(width - 200)
    e.y = random(height - 200)
}

function move() {

    // MAKE E.X AND E.Y RANDOM (SO IT MOVES RANDOMLY TO THE RIGHT)
    e.x += random(0, speed)
    e.y += random(0, speed)
}
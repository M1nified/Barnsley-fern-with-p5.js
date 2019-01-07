const
    scale = 60,
    width = 700,
    height = 700;

let
    lastX = 0,
    lastY = 0,
    ppf = 1000,
    fps = 30;

function setup() {
    createCanvas(width, height);
    rect(0, 0, width - 1, height - 1);
    frameRate(fps)
}

function draw() {
    function step() {
        const rand = random();
        let x, y, c = color(0, 0, 0);
        if (rand <= .01) {
            x = 0;
            y = .16 * lastY;
            c = color(255, 0, 0); //red
        } else if (rand <= .08) {
            x = .2 * lastX - .26 * lastY;
            y = .23 * lastX + .22 * lastY + 1.6;
            c = color(0, 255, 0); // green
        } else if (rand <= .15) {
            x = -.15 * lastX + .28 * lastY;
            y = .26 * lastX + .24 * lastY + .44;
            c = color(0, 0, 255); // blue
        } else {
            x = .85 * lastX + .04 * lastY;
            y = -.04 * lastX + .85 * lastY + 1.6;
        }
        fill(c);
        stroke(c)
        point(x * scale, y * scale);
        lastX = x;
        lastY = y;
    }
    translate(350, 30)
    for (let i = 0; i < ppf; i++) {
        step();
    }
}

function reset() {
    lastX = 0;
    lastY = 0;
}

function keyPressed() {
    if (key === 'r') {
        reset();
        clear();
        noFill();
        resetMatrix();
        stroke(color(0));
        rect(0, 0, width - 1, height - 1);
    }
}

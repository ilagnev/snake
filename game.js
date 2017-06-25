var z = 20;
var snake;
var food;

function setup() {
	createCanvas(window.innerWidth || 600, window.innerHeight || 400);
	frameRate(10);
	snake = new Snake();
	food = new Food();
}

function draw() {
	background(51);
	snake.update();
	snake.show();
	food.show();
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			snake.move(0, -1);
			break;
		case DOWN_ARROW:
			snake.move(0, 1);
			break;
		case RIGHT_ARROW:
			snake.move(1, 0);
			break;
		case LEFT_ARROW:
			snake.move(-1, 0);
			break;
	}
}
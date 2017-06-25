var z = 30;
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

	if (snake.selfEated()) {
		console.log("game over");
		snake.reborn();
	}

	if (snake.eat(food)) {
		console.log("food eaten");
		snake.increase();
		food = new Food();
	}

	snake.show();
	food.show();
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			snake.moveTo(0, -1);
			break;
		case DOWN_ARROW:
			snake.moveTo(0, 1);
			break;
		case RIGHT_ARROW:
			snake.moveTo(1, 0);
			break;
		case LEFT_ARROW:
			snake.moveTo(-1, 0);
			break;
	}
}
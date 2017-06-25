var z = 30;
var snake;
var food;
var gameStopped = false;

function setup() {
	createCanvas(window.innerWidth || 600, window.innerHeight || 400);
	frameRate(10);
	snake = new Snake();
	food = new Food();
}

function draw() {
	snake.update();

	if (snake.selfEated()) {
		background(100, 50, 50);
		snake.show();
		food.show();

		gameOver();
		return;
	}

	if (snake.eat(food)) {
		console.log("food eaten");
		snake.increase();
		food = new Food();
	}

	background(51);
	snake.show();
	food.show();
}

function keyPressed() {
	if (gameStopped) {
		snake.reborn();
		food = new Food();
		gameStopped = false;
		loop();
	}

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

function gameOver() {
	console.log("game over");
	
	textSize(32);
	var msg = 'Game Over';
	var score = 'Your Score is ' + snake.tail.length;
	var press = 'Press any key to start again';
	msgWidth = textWidth(msg);
	scoreWidth = textWidth(score);
	pressWidth = textWidth(press);
	fill(255);
	text(msg, (width - msgWidth)/2, height/2 - 40);
	text(score, (width - scoreWidth)/2, height/2);
	text(press, (width - pressWidth)/2, height/2 + 40);

	gameStopped = true;
	noLoop();
}
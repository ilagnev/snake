function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;

	this.update = function() {
		this.x += this.xSpeed * z;
		this.y += this.ySpeed * z;

		if (this.x > window.innerWidth) {
			this.x = 0;
		} else if (this.y > window.innerHeight) {
			this.y = 0;
		} else if (this.x < 0) {
			this.x = floor(window.innerWidth / z) * z;
		} else if (this.y < 0) {
			this.y = floor(window.innerHeight / z) * z;
		}
	}

	this.show = function () {
		fill(255);
		rect(this.x, this.y, z, z);
	}

	this.moveTo = function(xDirection, yDirection) {
		this.xSpeed = xDirection;
		this.ySpeed = yDirection;
	}

	this.eat = function(food) {
		return dist(this.x, this.y, food.x, food.y) < 1;
	}
}
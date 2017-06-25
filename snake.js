function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;
	this.tail = [];

	this.update = function() {
		// save previous position to the tail if tail exists
		if (this.tail.length > 0) {
			// move previous tail positions
			for (var i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
			this.tail[this.tail.length-1] = {x:this.x, y:this.y};
		}

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
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, z, z);
		}
		rect(this.x, this.y, z, z);
	}

	this.moveTo = function(xDirection, yDirection) {
		this.xSpeed = xDirection;
		this.ySpeed = yDirection;
	}

	this.eat = function(food) {
		return dist(this.x, this.y, food.x, food.y) < 1;
	}

	this.increase = function() {
		this.tail.push({x:this.x, y:this.y});
	}
}
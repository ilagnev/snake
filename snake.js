function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = 1;
	this.ySpeed = 0;

	this.update = function() {
		this.x += this.xSpeed * z;
		this.y += this.ySpeed * z;
	}

	this.show = function () {
		fill(255);
		rect(this.x, this.y, z, z);
	}

	this.move = function(xDirection, yDirection) {
		this.xSpeed = xDirection;
		this.ySpeed = yDirection;
	}
}
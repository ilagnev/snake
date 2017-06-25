function Food(snakeTail) {

	this.x = floor(random(floor(window.innerWidth / z))) * z;
	this.y = floor(random(floor(window.innerHeight / z))) * z;

	this.show = function() {
		fill(208, 8, 8);
		rect(this.x, this.y, z, z);
	}
}
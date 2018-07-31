;
var i = 10;
var func = function() {
	var i = 10;
	if(i < 20) {
		throw new Error("Error");
	}
};
try {
	func();
} catch(e) {
	console.log(Math.pow(i, 2));
} finally {
	console.log("it's all");
};

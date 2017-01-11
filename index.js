var sound = new Howl({
	src: ['snd/la-3.mp3'],
	key: [0, 1]
});

var circles = [];
function onKeyDown(e){
	sound.play();
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var newCircle = new Path.Circle(point,100);
	newCircle.fillColor = 'blue';
	circles.push(newCircle);
}

function onFrame(e){
	for(var i=0 ; i< circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
}
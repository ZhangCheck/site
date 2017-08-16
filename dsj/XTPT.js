(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6,6.2).lineTo(-6.4,5.5).curveTo(-5.6,5.6,-5.2,5.5).curveTo(-4.8,5.4,-4.8,5.1).lineTo(-4.8,2).lineTo(-5.7,2.6).lineTo(-6.5,3.1).lineTo(-6.6,2.3).lineTo(-6.8,1.6).lineTo(-5.8,1.3).lineTo(-4.8,0.8).lineTo(-4.8,-2.2).lineTo(-5.9,-2.2).lineTo(-6.7,-2.1).lineTo(-6.7,-3.3).lineTo(-5.9,-3.2).lineTo(-4.8,-3.2).lineTo(-4.9,-4.7).lineTo(-4.9,-5.9).lineTo(-5,-6.7).lineTo(-4.3,-6.6).lineTo(-3.7,-6.6).curveTo(-3.6,-6.6,-3.5,-6.6).curveTo(-3.5,-6.6,-3.4,-6.5).curveTo(-3.4,-6.5,-3.3,-6.5).curveTo(-3.3,-6.5,-3.3,-6.5).curveTo(-3.3,-6.4,-3.3,-6.4).curveTo(-3.3,-6.4,-3.3,-6.3).curveTo(-3.3,-6.3,-3.4,-6.3).curveTo(-3.4,-6.2,-3.5,-6.2).lineTo(-3.7,-5.9).lineTo(-3.7,-5.6).lineTo(-3.7,-3.2).lineTo(-2.9,-3.2).lineTo(-2.3,-3.3).lineTo(-2.3,-2.1).lineTo(-2.9,-2.1).lineTo(-3.7,-2.2).lineTo(-3.7,0.3).lineTo(-3.1,-0.1).lineTo(-2.4,-0.5).lineTo(-2.4,0.2).lineTo(-2.2,0.7).lineTo(-2.9,1).lineTo(-3.7,1.4).lineTo(-3.7,5.5).lineTo(-3.8,6.2).curveTo(-3.9,6.5,-4.4,6.6).lineTo(-5.8,6.9).lineTo(-6,6.2).closePath().moveTo(-2.2,6.2).lineTo(-2.7,5.7).curveTo(-1.5,5.3,-0.7,4.9).curveTo(0.1,4.4,0.5,3.8).curveTo(1,3.2,1.2,2.3).lineTo(-0.5,2.3).lineTo(-1.5,2.3).lineTo(-2.5,2.4).lineTo(-2.5,1.3).lineTo(-1.9,1.4).lineTo(-1.4,1.4).lineTo(-1.4,-1.5).lineTo(-1.4,-2.2).lineTo(-1.4,-2.7).lineTo(-0.6,-2.6).lineTo(0.4,-2.6).lineTo(2.1,-2.6).lineTo(3.1,-4.4).lineTo(0.6,-4.4).lineTo(0,-3.4).lineTo(-0.6,-2.7).lineTo(-1.1,-3).lineTo(-1.6,-3.3).curveTo(-1.1,-3.7,-0.7,-4.4).curveTo(-0.2,-5,0.1,-5.7).curveTo(0.4,-6.4,0.5,-6.9).lineTo(1.2,-6.7).lineTo(1.9,-6.5).lineTo(2.1,-6.3).lineTo(1.9,-6.2).lineTo(1.6,-5.9).lineTo(1.1,-5.3).lineTo(2.6,-5.3).lineTo(3.4,-5.3).lineTo(4.4,-5.4).lineTo(5,-5.4).lineTo(3.3,-2.6).lineTo(4.4,-2.6).lineTo(5.1,-2.6).lineTo(5.6,-2.7).lineTo(5.6,-2.2).lineTo(5.6,-1.5).lineTo(5.6,1.4).lineTo(6.1,1.3).lineTo(6.6,1.3).lineTo(6.6,2.4).lineTo(5.9,2.3).lineTo(5.3,2.3).lineTo(4.6,2.3).lineTo(3,2.3).curveTo(3.4,3.2,3.8,3.8).curveTo(4.3,4.4,5,4.8).curveTo(5.7,5.1,6.8,5.4).lineTo(6.3,6.1).lineTo(6,6.7).curveTo(4.6,6.3,3.7,5.3).curveTo(2.8,4.3,2.3,2.8).curveTo(2.1,3.4,1.6,4.2).curveTo(1.1,4.9,0.3,5.6).curveTo(-0.5,6.3,-1.8,6.8).lineTo(-2.2,6.2).closePath().moveTo(2.7,-0.9).lineTo(2.6,0.2).lineTo(2.5,1.4).lineTo(4.5,1.4).lineTo(4.5,-1.7).lineTo(2.7,-1.7).lineTo(2.7,-0.9).closePath().moveTo(-0.3,1.4).lineTo(1.4,1.4).lineTo(1.5,-0).lineTo(1.5,-1.7).lineTo(-0.3,-1.7).closePath();
	this.shape.setTransform(187.5,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,6.2).lineTo(-6.5,5.5).curveTo(-4.9,5.4,-3.5,4.9).curveTo(-2.1,4.3,-1,3.6).lineTo(-1.7,2.7).lineTo(-2.4,1.7).lineTo(-3,0.2).lineTo(-1.8,-0.2).curveTo(-1.4,0.8,-0.9,1.5).curveTo(-0.5,2.3,-0,2.8).curveTo(0.7,2.1,1.2,1.3).curveTo(1.7,0.5,2,-0.4).lineTo(2.8,0.1).lineTo(3.3,0.3).curveTo(3.4,0.3,3.5,0.3).curveTo(3.5,0.3,3.5,0.4).curveTo(3.6,0.4,3.6,0.4).curveTo(3.6,0.4,3.6,0.4).lineTo(3.3,0.7).lineTo(3.1,0.9).lineTo(2.9,1.2).lineTo(2.1,2.3).lineTo(1,3.6).lineTo(2.3,4.4).curveTo(3.1,4.7,4.1,4.9).lineTo(6.5,5.2).lineTo(5.9,6.1).lineTo(5.6,6.9).curveTo(3.7,6.4,2.4,5.8).curveTo(1.1,5.2,-0,4.5).lineTo(-1.4,5.5).curveTo(-2.1,5.9,-3.2,6.3).lineTo(-5.4,7).lineTo(-5.9,6.2).closePath().moveTo(-5.6,0.7).lineTo(-6.1,0.3).curveTo(-4.9,-0.4,-4,-1.3).curveTo(-2.9,-2.1,-2.4,-3.1).lineTo(-1.8,-2.6).lineTo(-1.2,-2.3).curveTo(-1.1,-2.3,-1,-2.2).curveTo(-1,-2.2,-0.9,-2.2).curveTo(-0.9,-2.2,-0.9,-2.1).curveTo(-0.9,-2.1,-0.9,-2.1).lineTo(-1.3,-1.9).lineTo(-1.5,-1.7).lineTo(-2.1,-1.3).lineTo(-3.6,0.1).lineTo(-5.1,1.2).curveTo(-5.2,0.8,-5.6,0.7).closePath().moveTo(3.5,-0.7).lineTo(1.7,-2.2).lineTo(2.6,-3).lineTo(4.5,-1.6).lineTo(6.3,-0.1).lineTo(5.2,1).curveTo(4.4,0,3.5,-0.7).closePath().moveTo(-6,-4.7).lineTo(-3.9,-4.7).lineTo(0.3,-4.6).lineTo(4,-4.7).lineTo(6.4,-4.7).lineTo(6.4,-3.4).lineTo(4,-3.5).lineTo(0.2,-3.5).lineTo(-3.8,-3.5).lineTo(-6,-3.4).closePath().moveTo(-0.6,-5.6).lineTo(-1,-6.5).lineTo(0.5,-7).lineTo(0.9,-6.1).lineTo(1.2,-5.2).lineTo(-0.4,-4.9).lineTo(-0.6,-5.6).closePath();
	this.shape_1.setTransform(172.5,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,6).curveTo(-1.9,5.7,-2.2,5.3).lineTo(-1,5.4).curveTo(-1,5.4,-0.9,5.4).curveTo(-0.8,5.4,-0.8,5.3).curveTo(-0.7,5.3,-0.7,5.3).curveTo(-0.6,5.3,-0.6,5.2).curveTo(-0.6,5.2,-0.5,5.1).curveTo(-0.5,5.1,-0.5,5).curveTo(-0.5,5,-0.5,4.9).curveTo(-0.5,4.9,-0.5,4.8).lineTo(-0.5,3.9).lineTo(-2.7,3.9).lineTo(-4.8,3.9).lineTo(-6.4,4).lineTo(-6.4,2.7).lineTo(-4.8,2.8).lineTo(-2.7,2.8).lineTo(-0.5,2.8).lineTo(-0.5,2).lineTo(2.1,1.1).lineTo(-3.2,1.1).lineTo(-5.5,1.1).lineTo(-5.5,0.2).lineTo(-4.5,0.2).lineTo(-2.8,0.2).lineTo(-0.8,0.3).lineTo(0.9,0.2).lineTo(2.7,0.2).lineTo(4,0.2).lineTo(4.9,0.2).lineTo(4.9,1.4).lineTo(3.8,1.5).lineTo(3,1.7).lineTo(0.8,2.5).lineTo(0.8,2.8).lineTo(3.9,2.8).lineTo(6.4,2.7).lineTo(6.4,4).lineTo(3.9,3.9).lineTo(0.8,3.9).lineTo(0.8,5.4).curveTo(0.8,5.8,0.7,6.1).curveTo(0.5,6.4,-0,6.5).curveTo(-0.5,6.7,-1.7,6.9).lineTo(-1.8,6).closePath().moveTo(3.4,-0.5).lineTo(1.9,-0.6).lineTo(0.1,-0.6).lineTo(-1.8,-0.6).lineTo(-3.3,-0.5).lineTo(-4.4,-0.5).lineTo(-4.4,-1.2).lineTo(-4.4,-2).lineTo(-4.4,-2.8).lineTo(-4.4,-3.6).lineTo(-3.3,-3.5).lineTo(-1.8,-3.5).lineTo(0.1,-3.5).lineTo(1.9,-3.5).lineTo(3.4,-3.5).lineTo(4.6,-3.6).lineTo(4.5,-2.8).lineTo(4.5,-2).lineTo(4.5,-1.2).lineTo(4.6,-0.5).lineTo(3.4,-0.5).closePath().moveTo(-3.2,-1.5).lineTo(3.3,-1.5).lineTo(3.3,-2.5).lineTo(-3.2,-2.5).closePath().moveTo(4.5,-4.3).lineTo(2.5,-4.4).lineTo(-0,-4.4).lineTo(-2.6,-4.4).lineTo(-4.6,-4.3).lineTo(-6.3,-4.2).lineTo(-6.3,-5.5).lineTo(-3.8,-5.4).lineTo(-0.6,-5.4).lineTo(-0.8,-6).lineTo(-1,-6.7).lineTo(0.6,-6.9).lineTo(0.8,-6.1).lineTo(0.9,-5.4).lineTo(3.8,-5.4).lineTo(6.2,-5.5).lineTo(6.2,-4.2).lineTo(4.5,-4.3).closePath();
	this.shape_2.setTransform(157.5,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,6.5).lineTo(-6.5,6).curveTo(-5.6,5.7,-4.6,5.1).lineTo(-2.9,3.9).curveTo(-2.3,3.3,-1.9,2.8).lineTo(-1.3,3.3).lineTo(-0.8,3.6).lineTo(-0.4,3.8).lineTo(-0.7,3.9).lineTo(-1.1,4.1).lineTo(-1.8,4.7).lineTo(-2.7,5.3).lineTo(-4,6.2).lineTo(-5.5,7).lineTo(-5.9,6.5).closePath().moveTo(3.3,5.2).curveTo(2.2,4.4,1,3.7).lineTo(1.8,2.8).lineTo(4.2,4.2).lineTo(6.3,5.6).lineTo(5.2,6.9).curveTo(4.3,6,3.3,5.2).closePath().moveTo(3.8,1.9).lineTo(0,1.9).lineTo(-3.8,1.9).lineTo(-6.6,2.1).lineTo(-6.6,0.7).lineTo(-4.8,0.8).lineTo(-2.8,0.8).lineTo(-2.8,-2.7).lineTo(-4.3,-2.7).lineTo(-5.7,-2.6).lineTo(-5.7,-3.9).lineTo(-4.3,-3.8).lineTo(-2.8,-3.8).lineTo(-2.8,-4.4).lineTo(-2.8,-5.9).lineTo(-2.8,-6.7).lineTo(-2.1,-6.6).lineTo(-1.3,-6.6).lineTo(-1.1,-6.5).lineTo(-1.2,-6.4).curveTo(-1.3,-6.4,-1.3,-6.3).curveTo(-1.3,-6.3,-1.4,-6.3).curveTo(-1.4,-6.3,-1.4,-6.2).curveTo(-1.4,-6.2,-1.4,-6.1).lineTo(-1.5,-5.5).lineTo(-1.5,-3.8).lineTo(1.6,-3.8).lineTo(1.6,-4.6).lineTo(1.5,-6.2).lineTo(1.5,-7).lineTo(2.2,-6.9).lineTo(2.9,-6.9).lineTo(3.2,-6.8).lineTo(3.1,-6.7).curveTo(3,-6.7,3,-6.6).curveTo(3,-6.6,2.9,-6.6).curveTo(2.9,-6.5,2.9,-6.5).curveTo(2.9,-6.4,2.9,-6.4).lineTo(2.8,-5.8).lineTo(2.8,-3.8).lineTo(4.5,-3.8).lineTo(6,-3.9).lineTo(6,-2.6).lineTo(4.5,-2.7).lineTo(2.8,-2.7).lineTo(2.8,0.8).lineTo(4.9,0.8).lineTo(6.6,0.7).lineTo(6.6,2.1).lineTo(3.8,1.9).closePath().moveTo(-1.5,0.8).lineTo(1.6,0.8).lineTo(1.6,-2.7).lineTo(-1.5,-2.7).closePath();
	this.shape_3.setTransform(142.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6,5.9).curveTo(-6,5.6,-6.4,5.1).curveTo(-5.4,5.3,-5,5.1).curveTo(-4.6,5,-4.6,4.7).lineTo(-4.6,1.3).lineTo(-5.5,1.9).lineTo(-6.4,2.4).lineTo(-6.4,1.6).lineTo(-6.6,0.8).lineTo(-5.6,0.5).lineTo(-4.6,0.2).lineTo(-4.6,-2.3).lineTo(-5.6,-2.2).lineTo(-6.4,-2.1).lineTo(-6.4,-3.4).lineTo(-5.6,-3.3).lineTo(-4.6,-3.3).lineTo(-4.6,-4.8).lineTo(-4.6,-5.6).lineTo(-4.7,-6.2).lineTo(-4.8,-6.7).lineTo(-4.1,-6.6).lineTo(-3.5,-6.6).curveTo(-3.4,-6.6,-3.3,-6.6).curveTo(-3.3,-6.6,-3.2,-6.5).curveTo(-3.2,-6.5,-3.1,-6.5).curveTo(-3.1,-6.5,-3.1,-6.5).curveTo(-3.1,-6.4,-3.1,-6.4).curveTo(-3.1,-6.4,-3.1,-6.3).curveTo(-3.1,-6.3,-3.2,-6.3).curveTo(-3.2,-6.2,-3.3,-6.2).lineTo(-3.5,-5.9).lineTo(-3.6,-5.6).lineTo(-3.6,-3.3).lineTo(-2.8,-3.3).lineTo(-2.4,-3.4).lineTo(-2.4,-2.1).lineTo(-2.8,-2.2).lineTo(-3.6,-2.3).lineTo(-3.6,-0.2).lineTo(-2.9,-0.5).lineTo(-2.2,-0.8).lineTo(-2.2,-0.2).lineTo(-2.1,0.4).lineTo(-2.8,0.6).lineTo(-3.6,0.9).lineTo(-3.6,4.9).lineTo(-3.7,5.8).curveTo(-3.8,6.1,-4.3,6.3).lineTo(-5.8,6.7).curveTo(-5.8,6.3,-6,5.9).closePath().moveTo(0,6.6).lineTo(0.1,5.9).lineTo(0.1,5.1).lineTo(0.1,2.9).lineTo(0.1,2.2).lineTo(0,1.6).lineTo(0.5,1.7).lineTo(1.2,1.7).lineTo(2.3,1.8).lineTo(2.3,0.1).lineTo(0.8,0.2).lineTo(-0.2,0.3).lineTo(-0.2,-0.9).lineTo(0.8,-0.8).lineTo(2.3,-0.8).lineTo(2.3,-2.4).lineTo(-0.4,-2.4).lineTo(-0.5,0.5).curveTo(-0.6,1.7,-0.8,2.7).curveTo(-1,3.7,-1.3,4.5).lineTo(-2.2,6.4).lineTo(-2.7,6.1).lineTo(-3.5,6).curveTo(-2.8,5.1,-2.5,4.3).curveTo(-2,3.4,-1.8,2.4).curveTo(-1.6,1.4,-1.6,0.1).lineTo(-1.6,-1.6).lineTo(-1.6,-3.7).lineTo(-1.7,-6).lineTo(-1,-5.9).lineTo(0,-5.9).lineTo(2,-5.9).lineTo(4,-5.9).lineTo(5.3,-5.9).lineTo(6,-6).lineTo(5.9,-5.1).lineTo(5.9,-4.1).lineTo(5.9,-3.2).lineTo(6,-2.3).lineTo(4.9,-2.4).lineTo(3.4,-2.4).lineTo(3.4,-0.8).lineTo(5.3,-0.8).lineTo(6.6,-0.9).lineTo(6.6,0.3).lineTo(5.3,0.2).lineTo(3.4,0.1).lineTo(3.4,1.8).lineTo(4.6,1.7).lineTo(5.4,1.7).lineTo(5.9,1.6).lineTo(5.9,2.2).lineTo(5.8,2.9).lineTo(5.8,4.9).lineTo(5.9,5.7).lineTo(6,6.4).lineTo(4.6,6.4).lineTo(4.6,5.8).lineTo(1.2,5.8).lineTo(1.2,6.6).closePath().moveTo(1.2,4.8).lineTo(4.6,4.8).lineTo(4.6,2.6).lineTo(1.2,2.6).closePath().moveTo(-0.4,-3.4).lineTo(4.7,-3.4).lineTo(4.7,-4.9).lineTo(-0.4,-4.9).closePath();
	this.shape_4.setTransform(127.4,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.4,6.1).lineTo(-1,5.5).lineTo(0.4,5.1).curveTo(1.1,4.8,1.7,4.3).curveTo(2.3,4,2.7,3.4).curveTo(2.3,2.5,2.1,1.5).curveTo(1.8,0.4,1.8,-1.2).lineTo(1.3,-0.3).lineTo(0.7,0.4).lineTo(0.4,-0.1).lineTo(0,-0.4).curveTo(0.6,-1.2,1.1,-2.2).curveTo(1.5,-3.3,1.8,-4.4).curveTo(2.2,-5.6,2.2,-6.6).lineTo(3,-6.4).lineTo(3.8,-6.3).lineTo(4,-6.2).curveTo(4,-6.2,3.9,-6.1).curveTo(3.9,-6.1,3.9,-6.1).curveTo(3.9,-6.1,3.8,-6.1).curveTo(3.8,-6,3.7,-6).lineTo(3.6,-5.8).lineTo(3.4,-5.3).lineTo(3,-4.2).lineTo(4.7,-4.2).lineTo(5.9,-4.2).lineTo(6.6,-4.3).lineTo(6.6,-3.1).lineTo(5.6,-3.1).lineTo(5.2,-0.3).curveTo(5.1,0.9,4.8,1.8).curveTo(4.4,2.7,4.1,3.4).curveTo(4.5,3.9,5.1,4.2).curveTo(5.8,4.6,6.8,4.9).curveTo(6.5,5.2,6.3,5.6).lineTo(6,6.3).lineTo(4.8,5.6).lineTo(4,5).lineTo(3.4,4.3).curveTo(2.8,4.9,2.1,5.5).curveTo(1.2,6.1,0,6.6).lineTo(-0.4,6.1).closePath().moveTo(2.3,-2.2).lineTo(1.8,-1.2).lineTo(2.8,-1.2).lineTo(2.9,0.7).curveTo(3,1.7,3.3,2.3).curveTo(3.7,1.4,4.1,0).curveTo(4.4,-1.3,4.4,-3.2).lineTo(2.7,-3.2).lineTo(2.3,-2.2).closePath().moveTo(-6.1,5.8).lineTo(-6.7,5.2).curveTo(-5.3,5.2,-4.2,5).curveTo(-3.2,4.8,-2.4,4.2).lineTo(-3.7,3.9).lineTo(-5.1,3.6).lineTo(-4.6,2.7).lineTo(-4.2,1.8).lineTo(-5.4,1.9).lineTo(-6.3,1.9).lineTo(-6.3,0.9).lineTo(-5.2,0.9).lineTo(-3.9,1).lineTo(-3.7,0.4).lineTo(-3.5,-0.3).lineTo(-2.9,-0.1).lineTo(-2.3,0).lineTo(-2,0.1).lineTo(-2.2,0.3).lineTo(-2.4,0.6).lineTo(-2.7,1).lineTo(-0.7,1).lineTo(-0.2,0.9).lineTo(0.4,0.9).lineTo(-0.2,2.5).lineTo(-0.7,3.7).lineTo(-0.1,4).lineTo(0.6,4.2).lineTo(0.2,4.7).lineTo(-0.1,5.2).lineTo(-0.6,4.9).lineTo(-1.3,4.6).curveTo(-2,5.2,-3,5.7).curveTo(-4,6.1,-5.7,6.4).lineTo(-6.1,5.8).closePath().moveTo(-3.7,3.1).lineTo(-2.7,3.3).lineTo(-1.7,3.4).lineTo(-1.3,2.7).lineTo(-1.1,1.8).lineTo(-3.1,1.8).closePath().moveTo(-6.1,-0.1).lineTo(-6.8,-0.5).curveTo(-6,-0.9,-5.1,-1.4).curveTo(-4.4,-2.1,-3.9,-2.8).lineTo(-5.1,-2.8).lineTo(-6.1,-2.7).lineTo(-6.1,-3.8).lineTo(-4.9,-3.7).lineTo(-3.1,-3.7).lineTo(-3.1,-5).lineTo(-3.2,-5.8).lineTo(-3.3,-6.6).lineTo(-2.7,-6.6).lineTo(-2,-6.6).curveTo(-1.9,-6.6,-1.9,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.7,-6.4,-1.7,-6.4).curveTo(-1.7,-6.4,-1.8,-6.4).curveTo(-1.8,-6.3,-1.8,-6.3).curveTo(-1.8,-6.3,-1.9,-6.3).lineTo(-2.1,-6.2).lineTo(-2.1,-5.8).lineTo(-2.1,-3.7).lineTo(-0.5,-3.7).lineTo(0.7,-3.8).lineTo(0.7,-2.7).lineTo(-0.4,-2.8).lineTo(-2.1,-2.8).lineTo(-2.1,-1.5).lineTo(-2,-0.4).lineTo(-3.2,-0.4).lineTo(-3.2,-1.4).lineTo(-3.1,-2.6).lineTo(-3.9,-1.4).lineTo(-4.7,-0.5).lineTo(-5.7,0.4).lineTo(-6.1,-0.1).closePath().moveTo(-1,-1).lineTo(-1.7,-1.7).lineTo(-1,-2.3).lineTo(-0.2,-1.7).lineTo(0.4,-1.1).lineTo(-0.4,-0.3).lineTo(-1,-1).closePath().moveTo(-0.9,-4.2).lineTo(-1.5,-4.3).lineTo(-1.1,-5.1).lineTo(-0.8,-6).lineTo(-0.2,-5.8).lineTo(0.5,-5.7).lineTo(0.6,-5.7).lineTo(0.5,-5.5).lineTo(0.1,-5.1).lineTo(-0.4,-4.1).lineTo(-0.9,-4.2).closePath().moveTo(-5.3,-4.9).lineTo(-5.5,-5.7).lineTo(-4.2,-5.9).lineTo(-4.1,-5.1).lineTo(-4,-4.4).lineTo(-5.2,-4.2).lineTo(-5.3,-4.9).closePath();
	this.shape_5.setTransform(112.4,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.3,6.9).lineTo(-3.2,5.5).lineTo(-3.2,4.3).lineTo(-3.2,0.2).curveTo(-3.5,1.3,-4.1,2.2).curveTo(-4.6,3.3,-5.5,4.5).lineTo(-6,3.9).lineTo(-6.5,3.4).curveTo(-5.5,2.3,-4.7,1.1).curveTo(-3.9,-0.1,-3.4,-1.5).lineTo(-4.7,-1.5).lineTo(-5.4,-1.4).lineTo(-6,-1.4).lineTo(-6,-2.6).lineTo(-5.4,-2.5).lineTo(-4.6,-2.5).lineTo(-3.2,-2.5).lineTo(-3.2,-4.8).lineTo(-4.4,-4.6).lineTo(-5.4,-4.5).lineTo(-5.6,-5.1).curveTo(-5.7,-5.4,-6,-5.6).curveTo(-5.1,-5.6,-4.3,-5.8).lineTo(-2.6,-6.1).lineTo(-1.5,-6.4).lineTo(-0.7,-6.9).lineTo(-0.4,-6.2).lineTo(0.1,-5.6).lineTo(0.3,-5.3).curveTo(0.3,-5.3,0.3,-5.3).curveTo(0.3,-5.2,0.2,-5.2).curveTo(0.2,-5.2,0.2,-5.2).curveTo(0.1,-5.2,0.1,-5.3).lineTo(-0.4,-5.3).lineTo(-1,-5.3).lineTo(-1.9,-5.1).lineTo(-1.9,-2.5).lineTo(-0.7,-2.5).lineTo(0.3,-2.6).lineTo(0.3,-1.4).lineTo(-0.7,-1.4).lineTo(-1.9,-1.5).lineTo(-1.9,4.3).lineTo(-1.9,5.5).lineTo(-1.8,6.9).closePath().moveTo(0.9,5.2).lineTo(1,4.4).lineTo(1,3.8).lineTo(1,3.1).lineTo(1,-4.1).lineTo(1,-4.7).lineTo(1,-5.2).lineTo(2,-5.2).lineTo(2.8,-5.2).lineTo(3.7,-5.2).lineTo(4.6,-5.2).lineTo(5.5,-5.2).lineTo(6.5,-5.2).lineTo(6.4,-4.7).lineTo(6.4,-4.1).lineTo(6.4,2.8).lineTo(6.4,3.8).lineTo(6.5,4.8).lineTo(5.2,4.8).lineTo(5.2,3.5).lineTo(2.2,3.5).lineTo(2.2,5.2).closePath().moveTo(2.2,2.5).lineTo(5.2,2.5).lineTo(5.2,-4.1).lineTo(2.2,-4.1).closePath().moveTo(-1.1,1.7).lineTo(-1.9,0.6).lineTo(-1,-0.1).lineTo(-0.2,1).lineTo(0.5,2).lineTo(-0.5,2.8).lineTo(-1.1,1.7).closePath();
	this.shape_6.setTransform(97.1,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3,5.6).lineTo(2.5,4.8).lineTo(3.7,4.9).curveTo(4.1,4.9,4.2,4.7).lineTo(4.3,4.2).lineTo(4.3,-5.1).lineTo(-4.1,-5.1).lineTo(-4.1,6).lineTo(-5.6,6).lineTo(-5.4,3.7).lineTo(-5.3,1.2).lineTo(-5.3,-3.4).lineTo(-5.4,-4.6).lineTo(-5.4,-5.7).lineTo(-5.4,-6.5).lineTo(-4.3,-6.4).lineTo(-2.6,-6.3).lineTo(0.1,-6.3).lineTo(2.8,-6.3).lineTo(4.5,-6.4).lineTo(5.6,-6.5).lineTo(5.5,-5.7).lineTo(5.5,-4.6).lineTo(5.5,-3.4).lineTo(5.5,4.5).lineTo(5.5,5.4).curveTo(5.4,5.8,5.2,6).lineTo(4.5,6.2).lineTo(3.2,6.5).lineTo(3,5.6).closePath().moveTo(1.9,3.3).lineTo(1,3.3).lineTo(0,3.3).lineTo(-0.9,3.3).lineTo(-1.8,3.3).lineTo(-2.5,3.3).lineTo(-2.5,2.4).lineTo(-2.5,1.2).lineTo(-2.5,-0).lineTo(-2.5,-0.9).lineTo(-1.8,-0.9).lineTo(-0.9,-0.9).lineTo(0,-0.9).lineTo(1.5,-0.9).lineTo(2.6,-0.9).lineTo(2.5,-0).lineTo(2.5,1.2).lineTo(2.5,2.4).lineTo(2.6,3.4).lineTo(1.9,3.3).closePath().moveTo(-1.3,2.2).lineTo(1.3,2.2).lineTo(1.3,0.1).lineTo(-1.3,0.1).closePath().moveTo(2,-2.4).lineTo(0,-2.4).lineTo(-1.9,-2.4).lineTo(-3.3,-2.3).lineTo(-3.3,-3.7).lineTo(-1.9,-3.6).lineTo(0,-3.5).lineTo(2,-3.6).lineTo(3.3,-3.7).lineTo(3.3,-2.3).lineTo(2,-2.4).closePath();
	this.shape_7.setTransform(82.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.4,6.9).lineTo(-5.3,5.8).lineTo(-5.2,4.5).lineTo(-5.2,-1.7).lineTo(-6.2,-1.6).lineTo(-7,-1.6).lineTo(-7,-2.8).lineTo(-6.2,-2.7).lineTo(-5.2,-2.7).lineTo(-5.2,-4.3).lineTo(-5.3,-5.3).lineTo(-5.3,-6.1).lineTo(-5.4,-6.6).lineTo(-4.7,-6.5).lineTo(-4,-6.4).lineTo(-3.7,-6.4).lineTo(-3.9,-6.1).lineTo(-4,-5.8).lineTo(-4.1,-5.3).lineTo(-4.1,-2.7).lineTo(-3.1,-2.7).lineTo(-2.4,-2.8).lineTo(-2.4,-1.6).lineTo(-3.1,-1.6).lineTo(-4.1,-1.7).lineTo(-4.1,4.5).lineTo(-4,5.8).lineTo(-4,6.9).closePath().moveTo(-2.5,6.4).lineTo(-3.2,5.9).curveTo(-2.1,5.2,-1.3,4).curveTo(-0.5,2.9,-0.2,1.5).lineTo(0,0.2).lineTo(0.2,-1.4).lineTo(0.3,-2.9).lineTo(-1,-2.9).lineTo(-1.9,-2.8).lineTo(-1.9,-4.2).lineTo(-1,-4.1).lineTo(0.3,-4).lineTo(0.3,-5.2).lineTo(0.2,-6.2).lineTo(0.1,-6.9).lineTo(0.9,-6.8).lineTo(1.8,-6.8).lineTo(1.9,-6.7).lineTo(1.8,-6.5).lineTo(1.7,-6.1).lineTo(1.6,-5.3).lineTo(1.5,-4).lineTo(3.6,-4.1).lineTo(4.7,-4.2).lineTo(4.6,-3.4).lineTo(4.6,-2.4).lineTo(4.4,2.5).curveTo(4.3,3.8,4.2,4.6).curveTo(4.1,5.3,3.8,5.7).curveTo(3.5,6.1,3,6.3).lineTo(1.8,6.5).lineTo(1.5,5.8).lineTo(1,4.9).lineTo(2.1,5).curveTo(2.5,5,2.7,4.8).curveTo(2.9,4.5,3,3.9).lineTo(3.1,2.3).lineTo(3.4,-3).lineTo(1.5,-3).lineTo(1.3,-0.5).lineTo(1.1,1.3).curveTo(0.9,2.4,0.5,3.4).curveTo(0,4.4,-0.6,5.3).curveTo(-1.3,6.1,-2,6.7).lineTo(-2.5,6.4).closePath().moveTo(-2.5,2.5).lineTo(-3.1,2.4).lineTo(-2.6,1.4).lineTo(-2.3,0.3).curveTo(-2.1,-0.3,-2.2,-0.7).lineTo(-1.7,-0.6).lineTo(-1.2,-0.5).lineTo(-0.9,-0.5).lineTo(-0.8,-0.4).lineTo(-0.9,-0.3).lineTo(-1.3,0.6).lineTo(-1.9,2.7).lineTo(-2.5,2.5).closePath().moveTo(5.5,1.6).lineTo(5.1,0.6).lineTo(4.7,-0.1).lineTo(5.6,-0.7).lineTo(6.1,0.1).lineTo(6.6,1).lineTo(7,1.9).lineTo(5.8,2.4).lineTo(5.5,1.6).closePath();
	this.shape_8.setTransform(67.6,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.6,6.3).curveTo(-5.8,6,-6.1,5.7).curveTo(-4.7,5.6,-3.8,5.2).curveTo(-2.8,4.9,-2.2,4.4).curveTo(-1.6,3.8,-1.3,3).lineTo(-2.7,3).lineTo(-3.8,3).lineTo(-4.7,3.1).lineTo(-4.7,1.8).lineTo(-3.8,1.8).lineTo(-2.7,1.9).lineTo(-1,1.9).lineTo(-1,1).lineTo(-1,0).lineTo(-0.1,0.2).lineTo(0.7,0.3).lineTo(0.8,0.3).lineTo(0.7,0.5).lineTo(0.4,0.9).lineTo(0.2,1.9).lineTo(2.4,1.9).lineTo(3.8,1.8).lineTo(4.8,1.8).lineTo(4.6,4.4).curveTo(4.5,5.3,4.2,5.8).curveTo(3.9,6.4,3.3,6.6).curveTo(2.7,6.8,1.6,6.9).lineTo(1.3,6.1).lineTo(0.7,5.4).curveTo(2,5.5,2.6,5.3).curveTo(3.2,5.1,3.3,4.4).lineTo(3.4,3).lineTo(-0,3).curveTo(-0.3,4,-0.8,4.7).curveTo(-1.4,5.4,-2.5,6).curveTo(-3.5,6.5,-5.2,7.1).lineTo(-5.6,6.3).closePath().moveTo(-6.4,0.8).lineTo(-6.8,0.2).curveTo(-5,-0,-3.4,-0.5).curveTo(-1.8,-1,-0.6,-1.6).curveTo(-1.2,-2.1,-1.7,-2.7).lineTo(-2.6,-3.9).lineTo(-3.5,-2.7).lineTo(-4.4,-1.6).lineTo(-5,-2).curveTo(-5.3,-2.2,-5.7,-2.2).curveTo(-5,-2.7,-4.4,-3.5).curveTo(-3.8,-4.2,-3.3,-5.1).curveTo(-2.9,-6.1,-2.6,-7.1).lineTo(-1.8,-6.7).lineTo(-0.9,-6.5).curveTo(-0.9,-6.5,-0.8,-6.4).curveTo(-0.8,-6.4,-0.8,-6.4).curveTo(-0.8,-6.4,-0.7,-6.4).curveTo(-0.7,-6.3,-0.7,-6.3).curveTo(-0.7,-6.3,-0.7,-6.3).curveTo(-0.8,-6.3,-0.8,-6.2).curveTo(-0.8,-6.2,-0.8,-6.2).curveTo(-0.9,-6.2,-0.9,-6.2).lineTo(-1.3,-6).lineTo(-1.8,-5.3).lineTo(1.1,-5.3).lineTo(2.5,-5.3).lineTo(3.8,-5.4).lineTo(4.7,-5.4).curveTo(4.2,-4.3,3.3,-3.3).curveTo(2.4,-2.3,1.4,-1.6).curveTo(2.4,-1.1,3.7,-0.8).curveTo(5.1,-0.6,6.8,-0.4).lineTo(6.6,0).lineTo(6.4,0.6).lineTo(6.2,1.1).curveTo(4.3,0.7,2.9,0.3).curveTo(1.4,-0.2,0.3,-0.9).curveTo(-0.8,-0.3,-1.9,0.2).lineTo(-4,0.9).lineTo(-6.3,1.4).lineTo(-6.4,0.8).closePath().moveTo(-0.7,-3.1).lineTo(0.3,-2.2).lineTo(1.5,-3.2).lineTo(2.6,-4.3).lineTo(-1.7,-4.3).lineTo(-0.7,-3.1).closePath();
	this.shape_9.setTransform(52.6,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.5,6.2).lineTo(3.3,6.1).lineTo(-0.1,6.1).lineTo(-3.3,6.1).lineTo(-5.3,6.2).lineTo(-6.5,6.3).lineTo(-6.5,4.8).lineTo(-4.7,4.9).lineTo(-2.3,5).lineTo(-2.3,-4.2).lineTo(-2.3,-5.3).lineTo(-2.4,-6.3).lineTo(-1.6,-6.2).lineTo(-0.8,-6.2).lineTo(-0.6,-6.1).lineTo(-0.7,-5.9).lineTo(-0.9,-5.7).lineTo(-1,-5.4).lineTo(-1,5).lineTo(0.8,5).lineTo(0.8,-4.1).lineTo(0.7,-5.2).lineTo(0.6,-6.3).lineTo(1.3,-6.2).lineTo(2.1,-6.2).curveTo(2.2,-6.2,2.2,-6.2).curveTo(2.3,-6.2,2.3,-6.2).curveTo(2.3,-6.1,2.3,-6.1).curveTo(2.3,-6.1,2.3,-6.1).lineTo(2.2,-5.9).lineTo(2,-5.7).lineTo(2,-5.4).lineTo(2,5).lineTo(4.8,4.9).lineTo(6.5,4.8).lineTo(6.5,6.3).lineTo(5.5,6.2).closePath().moveTo(-4.8,0.7).lineTo(-5.4,-1.2).lineTo(-6.2,-2.8).lineTo(-4.9,-3.4).lineTo(-4.3,-1.6).lineTo(-3.6,0.3).lineTo(-2.8,2.1).lineTo(-4.4,2.6).lineTo(-4.8,0.7).closePath().moveTo(3.3,2.2).lineTo(2.7,2.2).lineTo(3.3,0.5).lineTo(3.9,-1.6).lineTo(4.4,-3.7).lineTo(5.1,-3.4).lineTo(6,-3.2).lineTo(6.2,-3.2).lineTo(6,-3).lineTo(5.7,-2.7).lineTo(5.5,-2).lineTo(5.2,-1.3).lineTo(4.5,0.9).lineTo(3.9,2.5).lineTo(3.3,2.2).closePath();
	this.shape_10.setTransform(37.6,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.6,5.8).curveTo(2.4,5.3,2,5).lineTo(3.6,5.1).curveTo(4.1,5,4.3,4.8).curveTo(4.5,4.5,4.5,4.1).lineTo(4.8,-3).lineTo(1.6,-3).lineTo(1.1,-1.7).lineTo(0.5,-0.6).lineTo(-0.1,-1).lineTo(-0.6,-1.3).curveTo(0,-2.1,0.5,-3.5).curveTo(1,-4.8,1.3,-6.7).lineTo(2.1,-6.5).lineTo(2.9,-6.4).curveTo(3,-6.4,3,-6.4).curveTo(3.1,-6.4,3.1,-6.4).curveTo(3.1,-6.4,3.1,-6.4).curveTo(3.1,-6.4,3.1,-6.3).lineTo(2.9,-6).curveTo(2.8,-5.9,2.5,-5.4).lineTo(2,-4.2).lineTo(4.5,-4.2).lineTo(5.4,-4.2).lineTo(6.2,-4.3).lineTo(6.1,-3.6).lineTo(6.1,-2.8).lineTo(5.7,4.8).curveTo(5.7,5.3,5.5,5.7).curveTo(5.2,6.1,4.6,6.3).curveTo(3.9,6.6,2.8,6.7).lineTo(2.6,5.8).closePath().moveTo(-6.2,6.2).lineTo(-6.1,5.4).lineTo(-6.1,4.7).lineTo(-6.1,4).lineTo(-6.1,-2.7).lineTo(-6.1,-3.5).lineTo(-6.2,-4.1).lineTo(-5.4,-4.1).lineTo(-4.6,-4).lineTo(-4.4,-5.4).lineTo(-4.3,-6.7).lineTo(-3.5,-6.5).lineTo(-2.7,-6.5).curveTo(-2.6,-6.5,-2.6,-6.5).curveTo(-2.5,-6.5,-2.5,-6.4).curveTo(-2.5,-6.4,-2.5,-6.4).curveTo(-2.5,-6.4,-2.5,-6.4).lineTo(-2.6,-6.1).lineTo(-2.8,-5.8).lineTo(-3.1,-5.2).lineTo(-3.4,-4).lineTo(-1.9,-4).lineTo(-0.7,-4.1).lineTo(-0.8,-3.4).lineTo(-0.8,-2.7).lineTo(-0.8,3.9).lineTo(-0.8,4.6).lineTo(-0.8,5.3).lineTo(-0.7,6).lineTo(-2.1,6).lineTo(-2.1,4.7).lineTo(-4.8,4.7).lineTo(-4.8,6.2).closePath().moveTo(-4.8,3.7).lineTo(-2.1,3.7).lineTo(-2.1,0.7).lineTo(-4.8,0.7).closePath().moveTo(-4.8,-0.3).lineTo(-2.1,-0.3).lineTo(-2.1,-3).lineTo(-4.8,-3).closePath().moveTo(1.6,1.6).lineTo(1.2,0.6).lineTo(0.7,-0.3).lineTo(1.9,-0.8).lineTo(2.5,0.6).lineTo(3.3,1.9).lineTo(2,2.5).lineTo(1.6,1.6).closePath();
	this.shape_11.setTransform(22.5,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.3,6.1).lineTo(3,5.3).curveTo(3.8,5.5,4.1,5.4).curveTo(4.2,5.4,4.3,5.4).curveTo(4.3,5.4,4.4,5.4).curveTo(4.4,5.4,4.5,5.3).curveTo(4.5,5.3,4.6,5.3).lineTo(4.6,4.7).lineTo(4.6,-4.9).lineTo(1.2,-4.9).lineTo(0.1,-4.9).lineTo(-0.9,-4.8).lineTo(-0.9,-6.1).lineTo(0.8,-6.1).lineTo(2.5,-6).lineTo(4.3,-6.1).lineTo(5.9,-6.1).lineTo(5.8,-5.7).lineTo(5.8,-5.2).lineTo(5.8,-4.3).lineTo(5.8,5.2).lineTo(5.8,6).curveTo(5.8,6.3,5.6,6.4).lineTo(4.8,6.7).lineTo(3.5,6.9).lineTo(3.3,6.1).closePath().moveTo(-5.9,6.7).lineTo(-5.8,5.5).lineTo(-5.8,4.1).lineTo(-5.8,-2.2).lineTo(-5.8,-3.2).lineTo(-5.9,-4).lineTo(-5.2,-3.9).lineTo(-4.6,-3.9).curveTo(-4.5,-3.9,-4.5,-3.9).curveTo(-4.4,-3.9,-4.4,-3.9).curveTo(-4.3,-3.9,-4.3,-3.9).curveTo(-4.3,-3.8,-4.3,-3.8).lineTo(-4.4,-3.5).lineTo(-4.5,-3.3).lineTo(-4.5,-3.1).lineTo(-4.5,6.7).closePath().moveTo(2.2,4).lineTo(1.4,4).lineTo(0.1,4).lineTo(-1.3,4).lineTo(-2.1,4).lineTo(-2.7,4).lineTo(-2.6,3.6).lineTo(-2.6,2.9).lineTo(-2.6,-1.8).lineTo(-2.6,-2.4).lineTo(-2.7,-2.9).lineTo(-2.1,-2.8).lineTo(-1.3,-2.8).lineTo(0.1,-2.8).lineTo(1.4,-2.8).lineTo(2.2,-2.8).lineTo(2.9,-2.9).lineTo(2.8,-2.4).lineTo(2.8,-1.8).lineTo(2.8,2.9).lineTo(2.8,3.6).lineTo(2.9,4).lineTo(2.2,4).closePath().moveTo(-1.5,2.9).lineTo(1.6,2.9).lineTo(1.6,1).lineTo(-1.5,1).closePath().moveTo(-1.5,0).lineTo(1.6,0).lineTo(1.6,-1.8).lineTo(-1.5,-1.8).closePath().moveTo(-3.9,-5.2).lineTo(-4.6,-6.2).lineTo(-3.4,-6.9).lineTo(-2.6,-5.8).lineTo(-2,-4.8).lineTo(-3.3,-4).lineTo(-3.9,-5.2).closePath();
	this.shape_12.setTransform(7.4,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.8,6.8).lineTo(1.9,5.5).lineTo(2,4.1).lineTo(2,2).lineTo(-0.4,2).lineTo(-2.1,2.2).lineTo(-2.1,0.8).lineTo(-0.4,0.9).lineTo(2,0.9).lineTo(2,-2.1).lineTo(-0.5,-2.1).lineTo(-0.9,-1.1).lineTo(-1.3,-0.1).lineTo(-2,-0.3).lineTo(-2.6,-0.5).curveTo(-2,-1.5,-1.5,-2.9).curveTo(-1,-4.4,-0.8,-6).lineTo(-0.1,-5.7).lineTo(0.6,-5.5).lineTo(0.7,-5.4).lineTo(0.6,-5.3).lineTo(0.4,-4.8).lineTo(0.2,-4.2).lineTo(-0.2,-3.2).lineTo(2,-3.2).lineTo(2,-4.5).lineTo(1.9,-5.9).lineTo(1.8,-6.8).lineTo(2.5,-6.8).lineTo(3.3,-6.8).curveTo(3.4,-6.8,3.4,-6.8).curveTo(3.5,-6.8,3.5,-6.8).curveTo(3.6,-6.8,3.6,-6.7).curveTo(3.6,-6.7,3.6,-6.7).curveTo(3.6,-6.7,3.6,-6.6).curveTo(3.6,-6.6,3.6,-6.6).curveTo(3.6,-6.5,3.5,-6.5).curveTo(3.5,-6.4,3.4,-6.4).lineTo(3.2,-6.1).lineTo(3.2,-5.3).lineTo(3.2,-3.2).lineTo(5,-3.2).lineTo(6.3,-3.3).lineTo(6.3,-1.9).lineTo(5,-2).lineTo(3.2,-2.1).lineTo(3.2,0.9).lineTo(5.3,0.9).lineTo(6.8,0.8).lineTo(6.8,2.2).lineTo(5.3,2).lineTo(3.2,2).lineTo(3.2,4.1).lineTo(3.2,4.9).lineTo(3.3,5.9).lineTo(3.3,6.8).closePath().moveTo(-4.7,6.8).lineTo(-4.6,5.8).lineTo(-4.5,4.6).lineTo(-4.5,3.5).lineTo(-4.5,-1.8).lineTo(-5.1,-0.8).lineTo(-5.9,0.5).lineTo(-6.4,-0).lineTo(-6.8,-0.6).lineTo(-5.7,-2).lineTo(-4.8,-3.8).lineTo(-4.1,-5.3).lineTo(-3.7,-6.8).lineTo(-3,-6.4).lineTo(-2.2,-6.3).curveTo(-2.2,-6.2,-2.1,-6.2).curveTo(-2.1,-6.2,-2.1,-6.2).curveTo(-2,-6.2,-2,-6.1).curveTo(-2,-6.1,-2,-6.1).lineTo(-2.3,-5.8).lineTo(-2.6,-5.4).lineTo(-3.3,-4).lineTo(-3.3,6.8).closePath();
	this.shape_13.setTransform(-7.7,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(6.1,6.4).lineTo(4.7,6.3).lineTo(2.2,6.3).lineTo(0.1,6.4).lineTo(-1.3,6.4).lineTo(-2,6.4).lineTo(-2,5.1).lineTo(-1.4,5.2).lineTo(-0.7,5.2).lineTo(-0.7,-4.3).lineTo(-0.7,-5.2).lineTo(-0.7,-5.9).lineTo(0.1,-5.8).lineTo(1.2,-5.8).lineTo(2.4,-5.8).lineTo(3.6,-5.8).lineTo(4.8,-5.8).lineTo(5.6,-5.9).lineTo(5.6,-5.2).lineTo(5.5,-4.3).lineTo(5.5,5.2).lineTo(6.2,5.2).lineTo(6.7,5.1).lineTo(6.7,6.4).lineTo(6.1,6.4).closePath().moveTo(0.5,5.2).lineTo(4.3,5.2).lineTo(4.3,2.4).lineTo(0.5,2.4).closePath().moveTo(0.5,1.4).lineTo(4.3,1.4).lineTo(4.3,-1).lineTo(0.5,-1).closePath().moveTo(0.5,-2.1).lineTo(4.3,-2.1).lineTo(4.3,-4.8).lineTo(0.5,-4.8).closePath().moveTo(-6.6,5.6).lineTo(-6.8,4.8).lineTo(-5.9,4.7).lineTo(-4.6,4.5).lineTo(-3.1,4.1).lineTo(-1.8,3.8).lineTo(-1.9,4.4).lineTo(-1.9,4.9).lineTo(-4.1,5.5).lineTo(-5.5,5.9).lineTo(-6.5,6.4).lineTo(-6.6,5.6).closePath().moveTo(-6.3,2.4).lineTo(-6.5,2).curveTo(-5.9,1.6,-5.3,0.9).curveTo(-4.6,0.2,-3.9,-1.1).lineTo(-5.2,-0.9).lineTo(-5.9,-0.8).lineTo(-6.4,-0.7).lineTo(-6.5,-1.4).lineTo(-6.7,-1.9).curveTo(-6.1,-2.2,-5.6,-3.4).curveTo(-4.9,-4.5,-4.2,-6.4).lineTo(-3.5,-6).lineTo(-3,-5.8).lineTo(-2.7,-5.7).lineTo(-2.9,-5.5).lineTo(-3.1,-5.4).lineTo(-3.4,-4.9).lineTo(-4.1,-3.8).lineTo(-5.5,-1.7).lineTo(-3.3,-1.9).lineTo(-3,-2.6).lineTo(-2.6,-3.4).lineTo(-2.4,-4.1).lineTo(-1.7,-3.7).lineTo(-1.2,-3.5).lineTo(-1.1,-3.4).lineTo(-1.2,-3.2).lineTo(-1.4,-3.1).lineTo(-1.8,-2.5).lineTo(-2.8,-1).lineTo(-4.6,1.8).lineTo(-3.2,1.6).lineTo(-1.9,1.4).lineTo(-2,2).lineTo(-2,2.6).lineTo(-4.8,2.8).lineTo(-5.6,2.9).lineTo(-6.1,3).lineTo(-6.3,2.4).closePath();
	this.shape_14.setTransform(-22.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.8,5.8).lineTo(-3.4,5.4).curveTo(-2.6,5,-1.9,4.6).curveTo(-1.2,4.1,-0.6,3.6).curveTo(-0,3,0.3,2.4).lineTo(0.9,1.2).lineTo(1.3,-0).lineTo(1.5,-1.9).lineTo(1.5,-2.8).lineTo(1.5,-3.7).lineTo(1.5,-4.3).lineTo(2,-4.2).lineTo(2.5,-4.2).lineTo(2.9,-4.2).lineTo(3,-4.1).lineTo(2.9,-4).lineTo(2.8,-3.8).lineTo(2.8,-3.4).lineTo(2.6,-2.5).lineTo(2.5,-0.9).lineTo(2.2,0.4).lineTo(1.8,1.8).lineTo(1.1,3.1).lineTo(0.3,4.3).lineTo(-0.9,5.4).lineTo(-2.2,6.4).lineTo(-2.8,5.8).closePath().moveTo(2.8,5.9).curveTo(2.4,5.9,2.3,5.5).curveTo(2.1,5.1,2.2,4.5).lineTo(2.2,1).lineTo(2.6,1).lineTo(3,1.1).lineTo(3.3,1.1).lineTo(3.5,1.1).lineTo(3.4,1.2).lineTo(3.3,1.4).lineTo(3.3,1.6).lineTo(3.3,4.1).lineTo(3.3,4.7).curveTo(3.3,4.7,3.4,4.7).curveTo(3.4,4.7,3.4,4.8).curveTo(3.4,4.8,3.5,4.8).curveTo(3.5,4.8,3.6,4.8).lineTo(4.2,4.9).lineTo(5,4.8).curveTo(5.2,4.7,5.4,4.4).curveTo(5.5,4,5.6,3.3).lineTo(6.2,3.8).lineTo(6.8,4).lineTo(6.5,5.1).curveTo(6.3,5.6,6.1,5.7).curveTo(5.8,5.9,5.4,6).lineTo(4.1,6).lineTo(2.8,5.9).closePath().moveTo(-6.6,4.1).lineTo(-6.8,3.3).lineTo(-5.9,3.3).lineTo(-4.8,3.1).lineTo(-4.8,-0.6).lineTo(-5.7,-0.6).lineTo(-6.4,-0.5).lineTo(-6.4,-1.7).lineTo(-5.7,-1.7).lineTo(-4.8,-1.6).lineTo(-4.8,-4.7).lineTo(-5.8,-4.6).lineTo(-6.6,-4.6).lineTo(-6.6,-5.9).lineTo(-5.4,-5.8).lineTo(-3.9,-5.8).lineTo(-2.6,-5.8).lineTo(-1.6,-5.9).lineTo(-1.6,-4.6).lineTo(-2.5,-4.6).lineTo(-3.6,-4.7).lineTo(-3.6,-1.6).lineTo(-2.6,-1.7).lineTo(-1.8,-1.7).lineTo(-1.8,-0.5).lineTo(-2.6,-0.6).lineTo(-3.6,-0.6).lineTo(-3.6,2.9).lineTo(-2.5,2.5).lineTo(-1.5,2.2).lineTo(-1.6,2.6).lineTo(-1.6,3).lineTo(-1.6,3.4).curveTo(-3.2,3.7,-4.5,4.1).curveTo(-5.7,4.5,-6.5,4.9).lineTo(-6.6,4.1).closePath().moveTo(-1.2,1.2).lineTo(-1.1,0.2).lineTo(-1.1,-1.2).lineTo(-1.1,-5.1).lineTo(-1.1,-5.9).lineTo(-1.1,-6.3).lineTo(0.1,-6.3).lineTo(2.2,-6.2).lineTo(3.7,-6.2).lineTo(4.8,-6.3).lineTo(5.5,-6.3).lineTo(5.5,-5.9).lineTo(5.5,-5.1).lineTo(5.5,-1.3).lineTo(5.5,0.1).lineTo(5.6,1.1).lineTo(4.3,1.1).lineTo(4.3,-5.2).lineTo(0.1,-5.2).lineTo(0.1,1.2).closePath();
	this.shape_15.setTransform(-37.5,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.5,6.2).lineTo(-6.2,5.6).curveTo(-4.5,5.3,-3.3,4.9).curveTo(-2.1,4.4,-1.5,3.9).curveTo(-0.7,3.2,-0.2,2.5).lineTo(-3.7,2.5).lineTo(-6.3,2.6).lineTo(-6.3,1.2).lineTo(-4.6,1.3).lineTo(-2.5,1.3).lineTo(0.1,1.3).lineTo(0.3,0.2).lineTo(0.3,-1.2).lineTo(0.4,-2.5).lineTo(0.3,-3.4).lineTo(1.2,-3.3).lineTo(1.9,-3.3).lineTo(2.1,-3.3).lineTo(2,-3.1).lineTo(1.8,-2.8).lineTo(1.8,-2.2).lineTo(1.7,-1).lineTo(1.6,0.3).lineTo(1.5,1.3).lineTo(4.2,1.3).lineTo(6.3,1.2).lineTo(6.3,2.7).lineTo(4,2.5).lineTo(1.1,2.5).curveTo(0.6,3.9,-0.9,5).curveTo(-2.4,6.1,-5.1,7).lineTo(-5.5,6.2).closePath().moveTo(3,5.4).lineTo(1,4.2).lineTo(1.8,3.2).lineTo(3.3,4).lineTo(4.6,4.8).lineTo(6.1,5.6).lineTo(5.1,6.8).lineTo(3,5.4).closePath().moveTo(-3.6,0.3).lineTo(-4.8,-0.3).lineTo(-3.9,-1.2).lineTo(-2.7,-0.4).lineTo(-1.5,0.3).lineTo(-2.6,1.1).lineTo(-3.6,0.3).closePath().moveTo(-2.2,-1.5).lineTo(-3.5,-2.3).lineTo(-2.7,-3.1).lineTo(-1.5,-2.4).lineTo(-0.3,-1.7).lineTo(-1.1,-0.6).lineTo(-2.2,-1.5).closePath().moveTo(-5.9,-2.3).lineTo(-5.9,-5.3).lineTo(-5.1,-5.3).lineTo(-3.9,-5.2).lineTo(-2.5,-5.2).lineTo(-0.3,-5.2).lineTo(-0.6,-6).lineTo(-0.8,-6.7).lineTo(0.8,-7).lineTo(1,-6.1).lineTo(1.3,-5.2).lineTo(3.6,-5.2).lineTo(4.9,-5.3).lineTo(6,-5.3).lineTo(6,-2.4).lineTo(4.6,-2.4).lineTo(4.6,-4.1).lineTo(-4.6,-4.1).lineTo(-4.6,-2.3).closePath();
	this.shape_16.setTransform(-52.7,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.1,0.8).lineTo(-0.8,-0.5).lineTo(-0.6,-1.7).lineTo(1.4,-1.9).lineTo(1,-0.6).lineTo(0.4,0.7).lineTo(-0.1,1.7).lineTo(-1.4,1.9).lineTo(-1.1,0.8).closePath();
	this.shape_17.setTransform(-72.7,4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.2,5.7).lineTo(-5.1,4.6).lineTo(-5.1,3.4).lineTo(-5.1,-4.4).lineTo(-5.1,-5.1).lineTo(-5.2,-5.7).lineTo(-4.7,-5.7).lineTo(-3.8,-5.6).lineTo(-2.3,-5.6).lineTo(0,-5.6).lineTo(2.4,-5.6).lineTo(3.9,-5.6).lineTo(4.7,-5.7).lineTo(5.2,-5.7).lineTo(5.2,-5.1).lineTo(5.1,-4.4).lineTo(5.1,3.2).lineTo(5.2,4.4).lineTo(5.2,5.5).lineTo(3.7,5.5).lineTo(3.7,4.3).lineTo(-3.7,4.3).lineTo(-3.7,5.7).closePath().moveTo(-3.7,3.1).lineTo(3.7,3.1).lineTo(3.7,-4.4).lineTo(-3.7,-4.4).closePath();
	this.shape_18.setTransform(-82.6,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.2,6).lineTo(2.5,5.1).curveTo(1.7,5.7,0.6,6.1).curveTo(-0.5,6.5,-1.9,6.7).lineTo(-2.2,6.2).lineTo(-2.6,5.6).curveTo(-1.3,5.5,-0.3,5.3).curveTo(0.7,5,1.4,4.5).lineTo(0.3,4).lineTo(-0.9,3.6).lineTo(-0.5,3).lineTo(-0.2,2.6).lineTo(0.1,2).lineTo(-0.8,2).lineTo(-1.5,2).lineTo(-2.2,2.1).lineTo(-2.2,0.8).lineTo(-1.4,0.9).lineTo(-0.6,0.9).lineTo(0.6,0.9).lineTo(0.9,0.1).lineTo(1,-0.4).lineTo(1.6,-0.2).lineTo(2.2,-0).curveTo(2.2,-0,2.3,-0).curveTo(2.3,-0,2.3,0).curveTo(2.3,0,2.4,0).curveTo(2.4,0.1,2.4,0.1).curveTo(2.4,0.1,2.4,0.1).curveTo(2.4,0.2,2.3,0.2).curveTo(2.3,0.2,2.3,0.3).curveTo(2.2,0.3,2.2,0.3).lineTo(2.1,0.5).lineTo(1.8,0.9).lineTo(3.8,0.9).lineTo(5.1,0.9).lineTo(6,0.9).lineTo(6.8,0.8).lineTo(6.8,2.1).lineTo(6.1,2).lineTo(5.5,2).lineTo(4.6,2).lineTo(4.1,3.2).curveTo(3.8,3.8,3.3,4.3).lineTo(5,5).lineTo(6.4,5.7).lineTo(5.9,6.2).lineTo(5.5,6.9).lineTo(4.2,6).closePath().moveTo(0.6,3.2).lineTo(1.4,3.5).lineTo(2.3,3.8).curveTo(2.7,3.4,2.9,3).lineTo(3.4,2).lineTo(1.2,2).closePath().moveTo(-5.8,6.1).lineTo(-6.1,5.4).lineTo(-5.1,5.4).curveTo(-5,5.4,-5,5.3).curveTo(-4.9,5.3,-4.9,5.3).curveTo(-4.8,5.3,-4.8,5.2).curveTo(-4.8,5.2,-4.8,5.1).lineTo(-4.7,4.6).lineTo(-4.7,1.6).lineTo(-5.6,2).lineTo(-6.3,2.5).lineTo(-6.5,1.7).lineTo(-6.8,1).lineTo(-5.8,0.7).lineTo(-4.7,0.2).lineTo(-4.7,-2.7).lineTo(-5.8,-2.7).lineTo(-6.6,-2.7).lineTo(-6.6,-3.9).lineTo(-5.8,-3.8).lineTo(-4.7,-3.8).lineTo(-4.7,-5.6).lineTo(-4.8,-6.6).lineTo(-4,-6.5).lineTo(-3.4,-6.5).curveTo(-3.3,-6.5,-3.3,-6.5).curveTo(-3.2,-6.5,-3.2,-6.5).curveTo(-3.1,-6.4,-3.1,-6.4).curveTo(-3.1,-6.4,-3.1,-6.4).lineTo(-3.3,-6.1).lineTo(-3.5,-5.8).lineTo(-3.5,-5.5).lineTo(-3.5,-3.8).lineTo(-2.6,-3.8).lineTo(-2,-3.9).lineTo(-2,-2.7).lineTo(-2.6,-2.7).lineTo(-3.5,-2.7).lineTo(-3.5,-0.3).lineTo(-2.9,-0.7).lineTo(-2.3,-1).lineTo(-2.2,-0.5).lineTo(-2.1,0.1).lineTo(-2.7,0.5).lineTo(-3.5,0.9).lineTo(-3.5,5).curveTo(-3.5,5.7,-3.6,6).curveTo(-3.8,6.3,-4.2,6.5).lineTo(-5.7,6.8).lineTo(-5.8,6.1).closePath().moveTo(5.6,-0.5).lineTo(4.4,-0.6).lineTo(2.4,-0.6).lineTo(0.4,-0.6).lineTo(-0.7,-0.5).lineTo(-1.6,-0.5).lineTo(-1.6,-1.7).lineTo(-0.8,-1.6).lineTo(0,-1.6).lineTo(1.2,-1.6).lineTo(2.6,-1.6).lineTo(3.1,-2.8).lineTo(3.5,-4).lineTo(4.1,-3.7).lineTo(4.8,-3.5).lineTo(4.9,-3.4).lineTo(4.9,-3.3).lineTo(4.4,-2.8).lineTo(3.7,-1.6).lineTo(4.8,-1.6).lineTo(5.7,-1.6).lineTo(6.4,-1.7).lineTo(6.4,-0.5).lineTo(5.6,-0.5).closePath().moveTo(0.1,-2.4).lineTo(-0.3,-3.1).lineTo(0.9,-3.7).lineTo(1.2,-3).lineTo(1.6,-2.4).lineTo(0.4,-1.8).lineTo(0.1,-2.4).closePath().moveTo(5.6,-4.2).lineTo(4.4,-4.2).lineTo(2.4,-4.2).lineTo(0.5,-4.2).lineTo(-0.7,-4.2).lineTo(-1.5,-4.1).lineTo(-1.5,-5.3).lineTo(-0.8,-5.3).lineTo(0.3,-5.3).lineTo(1.9,-5.2).lineTo(1.8,-5.9).lineTo(1.6,-6.6).lineTo(2.9,-6.9).lineTo(3.1,-6.1).lineTo(3.3,-5.2).lineTo(4.7,-5.3).lineTo(5.7,-5.3).lineTo(6.4,-5.3).lineTo(6.4,-4.1).lineTo(5.6,-4.2).closePath();
	this.shape_19.setTransform(-97.7,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.6,5.8).curveTo(2.4,5.3,2,5).lineTo(3.6,5.1).curveTo(4.1,5,4.3,4.8).curveTo(4.5,4.5,4.5,4.1).lineTo(4.8,-3).lineTo(1.6,-3).lineTo(1.1,-1.7).lineTo(0.5,-0.6).lineTo(-0.1,-1).lineTo(-0.6,-1.3).curveTo(0,-2.1,0.5,-3.5).curveTo(1,-4.8,1.3,-6.7).lineTo(2.1,-6.5).lineTo(2.9,-6.4).curveTo(3,-6.4,3,-6.4).curveTo(3.1,-6.4,3.1,-6.4).curveTo(3.1,-6.4,3.1,-6.4).curveTo(3.1,-6.4,3.1,-6.3).lineTo(2.9,-6).curveTo(2.8,-5.9,2.5,-5.4).lineTo(2,-4.2).lineTo(4.5,-4.2).lineTo(5.4,-4.2).lineTo(6.2,-4.3).lineTo(6.1,-3.6).lineTo(6.1,-2.8).lineTo(5.7,4.8).curveTo(5.7,5.3,5.5,5.7).curveTo(5.2,6.1,4.6,6.3).curveTo(3.9,6.6,2.8,6.7).lineTo(2.6,5.8).closePath().moveTo(-6.2,6.2).lineTo(-6.1,5.4).lineTo(-6.1,4.7).lineTo(-6.1,4).lineTo(-6.1,-2.7).lineTo(-6.1,-3.5).lineTo(-6.2,-4.1).lineTo(-5.4,-4.1).lineTo(-4.6,-4).lineTo(-4.4,-5.4).lineTo(-4.3,-6.7).lineTo(-3.5,-6.5).lineTo(-2.7,-6.5).curveTo(-2.6,-6.5,-2.6,-6.5).curveTo(-2.5,-6.5,-2.5,-6.4).curveTo(-2.5,-6.4,-2.5,-6.4).curveTo(-2.5,-6.4,-2.5,-6.4).lineTo(-2.6,-6.1).lineTo(-2.8,-5.8).lineTo(-3.1,-5.2).lineTo(-3.4,-4).lineTo(-1.9,-4).lineTo(-0.7,-4.1).lineTo(-0.8,-3.4).lineTo(-0.8,-2.7).lineTo(-0.8,3.9).lineTo(-0.8,4.6).lineTo(-0.8,5.3).lineTo(-0.7,6).lineTo(-2.1,6).lineTo(-2.1,4.7).lineTo(-4.8,4.7).lineTo(-4.8,6.2).closePath().moveTo(-4.8,3.7).lineTo(-2.1,3.7).lineTo(-2.1,0.7).lineTo(-4.8,0.7).closePath().moveTo(-4.8,-0.3).lineTo(-2.1,-0.3).lineTo(-2.1,-3).lineTo(-4.8,-3).closePath().moveTo(1.6,1.6).lineTo(1.2,0.6).lineTo(0.7,-0.3).lineTo(1.9,-0.8).lineTo(2.5,0.6).lineTo(3.3,1.9).lineTo(2,2.5).lineTo(1.6,1.6).closePath();
	this.shape_20.setTransform(-112.5,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.6,6.8).lineTo(-4.5,5.6).lineTo(-4.4,4.4).lineTo(-4.4,-1.3).lineTo(-5.2,-0.3).lineTo(-5.8,0.6).lineTo(-6.2,0.1).lineTo(-6.8,-0.4).lineTo(-6,-1.2).lineTo(-5.2,-2.3).lineTo(-4.6,-3.4).lineTo(-4.1,-4.6).lineTo(-3.7,-5.9).lineTo(-3.5,-6.8).lineTo(-2.8,-6.5).lineTo(-2.1,-6.3).curveTo(-2,-6.3,-1.9,-6.3).curveTo(-1.9,-6.3,-1.8,-6.2).curveTo(-1.8,-6.2,-1.7,-6.2).curveTo(-1.7,-6.1,-1.7,-6.1).curveTo(-1.7,-6.1,-1.7,-6).curveTo(-1.7,-6,-1.7,-6).curveTo(-1.8,-5.9,-1.8,-5.9).curveTo(-1.9,-5.8,-1.9,-5.8).lineTo(-2.2,-5.6).lineTo(-2.5,-5).lineTo(-3.2,-3.5).lineTo(-3.2,6.8).closePath().moveTo(1.5,6.5).curveTo(0.9,6.4,0.6,6.3).curveTo(0.3,6.1,0.2,5.8).lineTo(0.2,5.1).lineTo(0.2,2.3).lineTo(-0.7,2.9).lineTo(-1.6,3.6).lineTo(-2,3).lineTo(-2.7,2.4).lineTo(-1.4,1.9).lineTo(0.2,0.8).lineTo(0.2,-4.8).lineTo(0.2,-5.9).lineTo(0.1,-6.7).lineTo(0.6,-6.6).lineTo(1.2,-6.6).lineTo(1.7,-6.6).lineTo(1.9,-6.4).curveTo(1.9,-6.4,1.9,-6.4).curveTo(1.9,-6.4,1.9,-6.3).curveTo(1.9,-6.3,1.8,-6.3).curveTo(1.8,-6.2,1.8,-6.2).lineTo(1.5,-5.9).lineTo(1.4,-5.5).lineTo(1.4,-0.4).curveTo(2.3,-1.1,3,-2.2).curveTo(3.8,-3.1,4.6,-4.5).lineTo(5.3,-4).lineTo(6,-3.6).lineTo(6.2,-3.4).lineTo(6,-3.3).lineTo(5.7,-3.1).lineTo(5.3,-2.7).lineTo(4.9,-2.4).lineTo(3.1,-0.4).lineTo(1.4,1.2).lineTo(1.4,4.5).lineTo(1.5,5).curveTo(1.7,5.2,2,5.3).lineTo(3.1,5.4).lineTo(4.3,5.3).curveTo(4.7,5.1,4.9,4.7).curveTo(5.2,4.2,5.3,3.2).lineTo(5.9,3.8).lineTo(6.7,4.2).lineTo(6.3,5.6).curveTo(6,6,5.7,6.3).curveTo(5.4,6.4,4.7,6.5).lineTo(3.1,6.5).lineTo(1.5,6.5).closePath();
	this.shape_21.setTransform(-127.6,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,6.8).lineTo(-1.8,6.1).lineTo(-1.8,5.1).lineTo(-1.8,3.7).lineTo(-1.8,-1.4).lineTo(-2.3,-0.6).lineTo(-2.9,0.2).lineTo(-3.3,-0.2).lineTo(-3.8,-0.7).lineTo(-2.7,-2.2).curveTo(-2.1,-3,-1.7,-3.8).lineTo(-1.2,-5.4).lineTo(-0.9,-6.9).lineTo(-0.1,-6.5).lineTo(0.6,-6.4).curveTo(0.6,-6.4,0.7,-6.4).curveTo(0.7,-6.4,0.8,-6.4).curveTo(0.8,-6.4,0.8,-6.3).curveTo(0.8,-6.3,0.8,-6.3).lineTo(0.6,-6).lineTo(0.4,-5.8).lineTo(0.1,-5.3).lineTo(-0.4,-4.2).lineTo(2.8,-4.2).lineTo(4.7,-4.2).lineTo(5.7,-4.3).lineTo(6.3,-4.3).lineTo(6.3,-3).lineTo(5.8,-3.1).lineTo(4.8,-3.1).lineTo(3.2,-3.1).lineTo(3.2,-1.3).lineTo(4.6,-1.4).lineTo(5.4,-1.4).lineTo(5.8,-1.4).lineTo(5.8,-0.1).lineTo(5.4,-0.2).lineTo(4.6,-0.2).lineTo(3.2,-0.2).lineTo(3.2,1.5).lineTo(4.6,1.4).lineTo(5.4,1.4).lineTo(5.8,1.4).lineTo(5.8,2.7).lineTo(5.4,2.6).lineTo(4.6,2.6).lineTo(3.2,2.6).lineTo(3.2,4.5).lineTo(5,4.5).lineTo(6.1,4.5).lineTo(6.6,4.4).lineTo(6.6,5.6).lineTo(6.1,5.6).lineTo(5,5.6).lineTo(3.2,5.6).lineTo(-0.6,5.6).lineTo(-0.6,6.8).closePath().moveTo(-0.6,4.5).lineTo(2,4.5).lineTo(2,2.6).lineTo(-0.6,2.6).closePath().moveTo(-0.6,1.5).lineTo(2,1.5).lineTo(2,-0.2).lineTo(-0.6,-0.2).closePath().moveTo(-0.6,-1.3).lineTo(2,-1.3).lineTo(2,-3.1).lineTo(-0.6,-3.1).closePath().moveTo(-5.9,4.7).lineTo(-6.6,4.2).lineTo(-5.9,3.4).lineTo(-5.3,2.2).lineTo(-5,1.6).lineTo(-4.7,0.8).lineTo(-4.3,-0.1).lineTo(-3.9,0.5).lineTo(-3.3,0.9).lineTo(-3.6,1.4).lineTo(-3.9,2).lineTo(-4.3,3).lineTo(-4.8,4.1).lineTo(-5.1,5.3).lineTo(-5.9,4.7).closePath().moveTo(-5.2,-3.5).lineTo(-6.3,-4.6).lineTo(-5.1,-5.5).lineTo(-4.6,-4.7).lineTo(-3.9,-4).lineTo(-3.3,-3.3).lineTo(-4.4,-2.3).lineTo(-5.2,-3.5).closePath().moveTo(2.3,-5.5).lineTo(1.9,-6.3).lineTo(3.2,-6.7).lineTo(3.5,-5.8).lineTo(3.9,-4.9).lineTo(2.5,-4.5).lineTo(2.3,-5.5).closePath();
	this.shape_22.setTransform(-142.7,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FEFEFE").beginStroke().moveTo(0.7,6.3).lineTo(0.4,5.9).lineTo(0.1,5.4).curveTo(1,5.6,1.3,5.4).curveTo(1.7,5.3,1.7,4.9).lineTo(1.7,-1.2).lineTo(-0,-1.1).lineTo(-1.4,-1.1).lineTo(-1.4,-2.3).lineTo(0.3,-2.3).lineTo(2.6,-2.2).lineTo(4.8,-2.3).lineTo(6.5,-2.3).lineTo(6.5,-1.1).lineTo(5,-1.1).lineTo(2.9,-1.2).lineTo(2.9,5.4).curveTo(3,5.8,2.8,6).curveTo(2.7,6.3,2.2,6.5).curveTo(1.8,6.7,0.8,6.8).lineTo(0.7,6.3).closePath().moveTo(-4.7,6.7).lineTo(-4.6,5.2).lineTo(-4.5,3.9).lineTo(-4.5,-0.6).lineTo(-5,1.1).lineTo(-5.5,2.4).lineTo(-6.1,3.5).lineTo(-6.5,2.9).lineTo(-7,2.2).curveTo(-6.5,1.8,-6.1,1).lineTo(-5.3,-0.6).lineTo(-4.6,-2.4).lineTo(-5.8,-2.4).lineTo(-6.7,-2.3).lineTo(-6.7,-3.7).lineTo(-5.8,-3.6).lineTo(-4.5,-3.5).lineTo(-4.6,-5.6).lineTo(-4.7,-6.8).lineTo(-4,-6.8).lineTo(-3.4,-6.8).curveTo(-3.3,-6.8,-3.3,-6.8).curveTo(-3.2,-6.8,-3.2,-6.8).curveTo(-3.1,-6.8,-3.1,-6.8).curveTo(-3.1,-6.8,-3.1,-6.7).curveTo(-3.1,-6.7,-3.1,-6.7).curveTo(-3.1,-6.7,-3.1,-6.6).curveTo(-3.1,-6.6,-3.1,-6.5).curveTo(-3.2,-6.5,-3.2,-6.5).lineTo(-3.4,-6.3).lineTo(-3.4,-6).lineTo(-3.4,-3.5).lineTo(-2.3,-3.6).lineTo(-1.4,-3.7).lineTo(-1.4,-2.3).lineTo(-2.3,-2.4).lineTo(-3.4,-2.4).lineTo(-3.4,3.9).lineTo(-3.4,5.2).lineTo(-3.3,6.7).closePath().moveTo(-1.8,5.2).lineTo(-2.6,5.1).curveTo(-1.7,4,-1.1,2.9).curveTo(-0.6,1.7,-0.4,0.5).lineTo(0.4,0.8).lineTo(1,1.1).curveTo(1.1,1.1,1.1,1.1).curveTo(1.1,1.1,1.2,1.1).curveTo(1.2,1.1,1.2,1.2).curveTo(1.2,1.2,1.2,1.2).curveTo(1.2,1.2,1.2,1.3).curveTo(1.2,1.3,1.1,1.3).curveTo(1.1,1.3,1.1,1.4).curveTo(1,1.4,1,1.4).lineTo(0.7,1.7).lineTo(0.2,2.6).lineTo(-0.5,4).lineTo(-1.2,5.6).lineTo(-1.8,5.2).closePath().moveTo(5.2,3.3).lineTo(4.5,2.2).lineTo(3.7,1.1).lineTo(4.6,0.4).lineTo(5.8,2.1).lineTo(7,3.9).lineTo(5.8,4.8).lineTo(5.2,3.3).closePath().moveTo(-2.7,0.8).lineTo(-3.3,-0.1).lineTo(-2.3,-0.6).lineTo(-1.7,0.5).lineTo(-1.2,1.4).lineTo(-2.3,2).lineTo(-2.7,0.8).closePath().moveTo(4.3,-4.7).lineTo(2.5,-4.7).lineTo(0.6,-4.7).lineTo(-0.7,-4.6).lineTo(-0.7,-5.9).lineTo(0.6,-5.8).lineTo(2.5,-5.8).lineTo(4.3,-5.8).lineTo(5.6,-5.9).lineTo(5.6,-4.6).lineTo(4.3,-4.7).closePath();
	this.shape_23.setTransform(-157.6,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.1,6.5).lineTo(-2.9,6.1).curveTo(-2.3,5.8,-1.7,5.1).lineTo(-0.6,3.9).lineTo(0.2,2.7).lineTo(0.9,3.1).lineTo(1.5,3.3).curveTo(1.6,3.3,1.7,3.3).curveTo(1.7,3.3,1.7,3.4).curveTo(1.8,3.4,1.8,3.4).curveTo(1.8,3.4,1.8,3.4).curveTo(1.8,3.5,1.8,3.5).curveTo(1.7,3.5,1.7,3.6).curveTo(1.7,3.6,1.6,3.6).curveTo(1.6,3.7,1.5,3.7).lineTo(1.1,4).lineTo(0.2,4.9).lineTo(-1.6,6.9).curveTo(-1.7,6.7,-2.1,6.5).closePath().moveTo(-4.9,6.8).lineTo(-4.8,5.9).lineTo(-4.7,4.8).lineTo(-4.7,3.6).lineTo(-4.7,-1.3).lineTo(-5.3,-0.2).lineTo(-6,0.8).lineTo(-6.4,0.3).lineTo(-7,-0.1).lineTo(-6.2,-1.2).lineTo(-5.4,-2.4).curveTo(-5,-3,-4.7,-3.8).lineTo(-4.3,-4.8).lineTo(-4,-5.9).lineTo(-3.8,-6.9).lineTo(-3.1,-6.6).lineTo(-2.3,-6.4).curveTo(-2.3,-6.4,-2.2,-6.4).curveTo(-2.2,-6.4,-2.1,-6.3).curveTo(-2.1,-6.3,-2.1,-6.3).curveTo(-2.1,-6.3,-2.1,-6.3).lineTo(-2.3,-5.9).lineTo(-2.6,-5.5).lineTo(-3,-4.8).lineTo(-3.5,-3.9).lineTo(-3.5,6.8).closePath().moveTo(4.9,5.7).lineTo(3.9,4.5).lineTo(3,3.5).lineTo(4,2.8).lineTo(5,3.8).lineTo(5.9,4.7).lineTo(6.9,5.7).lineTo(5.7,6.8).lineTo(4.9,5.7).closePath().moveTo(4.9,2.2).lineTo(2.2,2.1).lineTo(-0.5,2.2).lineTo(-2.5,2.3).lineTo(-2.5,0.9).lineTo(-1.4,1).lineTo(-0.2,1).lineTo(-0.2,-2.3).lineTo(-1.2,-2.3).lineTo(-2.1,-2.2).lineTo(-2.1,-3.6).lineTo(-1.2,-3.4).lineTo(-0.2,-3.4).lineTo(-0.2,-4.5).lineTo(-0.2,-5.7).lineTo(-0.2,-6.4).lineTo(-0.2,-6.8).lineTo(0.4,-6.7).lineTo(1.1,-6.7).lineTo(1.3,-6.7).lineTo(1.2,-6.5).lineTo(1,-6.2).lineTo(1,-5.6).lineTo(1,-3.4).lineTo(3.1,-3.4).lineTo(3.1,-4.5).lineTo(3.1,-6).lineTo(3.1,-6.8).lineTo(3.7,-6.7).lineTo(4.4,-6.7).curveTo(4.5,-6.7,4.5,-6.7).curveTo(4.6,-6.7,4.6,-6.7).curveTo(4.6,-6.7,4.6,-6.7).curveTo(4.6,-6.7,4.6,-6.7).lineTo(4.5,-6.5).lineTo(4.3,-6.2).lineTo(4.3,-5.6).lineTo(4.3,-3.4).lineTo(5.5,-3.4).lineTo(6.5,-3.6).lineTo(6.5,-2.2).lineTo(5.5,-2.3).lineTo(4.3,-2.3).lineTo(4.3,1).lineTo(5.7,1).lineTo(7,0.9).lineTo(7,2.3).lineTo(4.9,2.2).closePath().moveTo(1,1).lineTo(3.1,1).lineTo(3.1,-2.3).lineTo(1,-2.3).closePath();
	this.shape_24.setTransform(-172.7,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,5.9).lineTo(-6.4,5.1).lineTo(-5.4,5.2).curveTo(-5.3,5.2,-5.2,5.1).curveTo(-5.2,5.1,-5.1,5.1).curveTo(-5.1,5.1,-5,5).curveTo(-5,5,-4.9,5).lineTo(-4.8,4.5).lineTo(-4.8,1.6).lineTo(-5.6,2).lineTo(-6.5,2.5).lineTo(-6.5,1.8).lineTo(-6.7,1).lineTo(-5.7,0.7).lineTo(-4.8,0.4).lineTo(-4.8,-2.5).lineTo(-5.9,-2.4).lineTo(-6.7,-2.3).lineTo(-6.7,-3.6).lineTo(-5.9,-3.5).lineTo(-4.8,-3.5).lineTo(-4.9,-5.5).lineTo(-5,-6.6).lineTo(-4.3,-6.5).lineTo(-3.7,-6.5).curveTo(-3.6,-6.5,-3.5,-6.5).curveTo(-3.4,-6.5,-3.4,-6.4).curveTo(-3.3,-6.4,-3.3,-6.4).curveTo(-3.3,-6.4,-3.2,-6.4).curveTo(-3.2,-6.3,-3.2,-6.3).curveTo(-3.2,-6.3,-3.3,-6.2).curveTo(-3.3,-6.2,-3.3,-6.2).curveTo(-3.4,-6.1,-3.5,-6.1).lineTo(-3.7,-5.9).lineTo(-3.7,-5.6).lineTo(-3.7,-3.5).lineTo(-2.8,-3.5).lineTo(-2,-3.6).lineTo(-2,-2.3).lineTo(-2.8,-2.4).lineTo(-3.7,-2.4).lineTo(-3.7,-0.1).lineTo(-3,-0.5).lineTo(-2.3,-0.9).lineTo(-2.2,-0.2).lineTo(-2.1,0.4).lineTo(-2.9,0.7).lineTo(-3.7,1).lineTo(-3.7,5).lineTo(-3.8,5.7).curveTo(-4,6,-4.4,6.2).curveTo(-4.9,6.4,-5.8,6.6).lineTo(-5.9,5.9).closePath().moveTo(-2.6,6).lineTo(-3.2,5.8).curveTo(-2.7,5.4,-2.2,4.8).curveTo(-1.9,4.1,-1.6,3.3).lineTo(-1,1.5).lineTo(-0.3,1.7).lineTo(0.2,1.8).lineTo(0.4,1.8).lineTo(0.3,2).lineTo(0,2.3).lineTo(-0.2,3).curveTo(0.2,3.6,0.7,4).curveTo(1.1,4.4,1.6,4.7).lineTo(1.6,0.8).lineTo(-0.2,0.8).lineTo(-1.6,0.9).lineTo(-1.6,-0.3).lineTo(0.1,-0.3).lineTo(2.5,-0.2).lineTo(4.9,-0.3).lineTo(6.5,-0.3).lineTo(6.5,0.9).lineTo(5,0.8).lineTo(2.8,0.8).lineTo(2.8,2.2).lineTo(4.2,2.2).lineTo(5.1,2.2).lineTo(5.6,2.1).lineTo(5.6,3.4).lineTo(4.7,3.3).lineTo(2.8,3.2).lineTo(2.8,4.9).lineTo(4.1,5).lineTo(5.5,5.1).lineTo(6.8,5).lineTo(6.4,5.7).lineTo(6.2,6.4).lineTo(4.6,6.4).lineTo(3.4,6.3).lineTo(2.3,6).curveTo(1.3,5.8,0.6,5.3).curveTo(-0.1,4.9,-0.6,4.2).curveTo(-0.9,5,-1.2,5.5).lineTo(-2,6.4).lineTo(-2.6,6).closePath().moveTo(4.9,-1.1).lineTo(3.8,-1.2).lineTo(2.2,-1.2).lineTo(0.5,-1.2).lineTo(-0.5,-1.2).lineTo(-1.2,-1.1).lineTo(-1.1,-1.7).lineTo(-1.1,-2.5).lineTo(-1.1,-4.9).lineTo(-1.1,-5.8).lineTo(-1.2,-6.3).lineTo(-0.5,-6.3).lineTo(0.5,-6.2).lineTo(2.2,-6.2).lineTo(3.8,-6.2).lineTo(4.9,-6.3).lineTo(5.5,-6.3).lineTo(5.4,-5.6).lineTo(5.4,-4.9).lineTo(5.4,-2.5).lineTo(5.4,-2).lineTo(5.4,-1.5).lineTo(5.5,-1.1).lineTo(4.9,-1.1).closePath().moveTo(0.1,-2.1).lineTo(4.2,-2.1).lineTo(4.2,-3.3).lineTo(0.1,-3.3).closePath().moveTo(0.1,-4.2).lineTo(4.2,-4.2).lineTo(4.2,-5.2).lineTo(0.1,-5.2).closePath();
	this.shape_25.setTransform(-187.5,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-11.3,394.2,22.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#2FEAF1").beginStroke().moveTo(35,1.1).curveTo(34.5,0.6,34.5,-0).curveTo(34.5,-0.6,35,-1).curveTo(35.4,-1.5,36,-1.5).curveTo(36.6,-1.5,37,-1).curveTo(37.5,-0.6,37.5,-0).curveTo(37.5,0.6,37,1.1).curveTo(36.6,1.5,36,1.5).curveTo(35.4,1.5,35,1.1).closePath().moveTo(27,1.1).curveTo(26.5,0.6,26.5,-0).curveTo(26.5,-0.6,27,-1).curveTo(27.4,-1.5,28,-1.5).curveTo(28.6,-1.5,29,-1).curveTo(29.5,-0.6,29.5,-0).curveTo(29.5,0.6,29,1.1).curveTo(28.6,1.5,28,1.5).curveTo(27.4,1.5,27,1.1).closePath().moveTo(18.9,1.1).curveTo(18.5,0.6,18.5,-0).curveTo(18.5,-0.6,18.9,-1).curveTo(19.4,-1.5,20,-1.5).curveTo(20.6,-1.5,21,-1).curveTo(21.5,-0.6,21.5,-0).curveTo(21.5,0.6,21,1.1).curveTo(20.6,1.5,20,1.5).curveTo(19.4,1.5,18.9,1.1).closePath().moveTo(10.9,1.1).curveTo(10.5,0.6,10.5,-0).curveTo(10.5,-0.6,10.9,-1).curveTo(11.4,-1.5,12,-1.5).curveTo(12.6,-1.5,13.1,-1).curveTo(13.5,-0.6,13.5,-0).curveTo(13.5,0.6,13.1,1.1).curveTo(12.6,1.5,12,1.5).curveTo(11.4,1.5,10.9,1.1).closePath().moveTo(2.9,1.1).curveTo(2.5,0.6,2.5,-0).curveTo(2.5,-0.6,2.9,-1).curveTo(3.4,-1.5,4,-1.5).curveTo(4.6,-1.5,5.1,-1).curveTo(5.5,-0.6,5.5,-0).curveTo(5.5,0.6,5.1,1.1).curveTo(4.6,1.5,4,1.5).curveTo(3.4,1.5,2.9,1.1).closePath().moveTo(-5.1,1.1).curveTo(-5.5,0.6,-5.5,-0).curveTo(-5.5,-0.6,-5.1,-1).curveTo(-4.6,-1.5,-4,-1.5).curveTo(-3.4,-1.5,-2.9,-1).curveTo(-2.5,-0.6,-2.5,-0).curveTo(-2.5,0.6,-2.9,1.1).curveTo(-3.4,1.5,-4,1.5).curveTo(-4.6,1.5,-5.1,1.1).closePath().moveTo(-13,1.1).curveTo(-13.5,0.6,-13.5,-0).curveTo(-13.5,-0.6,-13,-1).curveTo(-12.6,-1.5,-12,-1.5).curveTo(-11.4,-1.5,-10.9,-1).curveTo(-10.5,-0.6,-10.5,-0).curveTo(-10.5,0.6,-10.9,1.1).curveTo(-11.4,1.5,-12,1.5).curveTo(-12.6,1.5,-13,1.1).closePath().moveTo(-21,1.1).curveTo(-21.5,0.6,-21.5,-0).curveTo(-21.5,-0.6,-21,-1).curveTo(-20.6,-1.5,-20,-1.5).curveTo(-19.4,-1.5,-19,-1).curveTo(-18.5,-0.6,-18.5,-0).curveTo(-18.5,0.6,-19,1.1).curveTo(-19.4,1.5,-20,1.5).curveTo(-20.6,1.5,-21,1.1).closePath().moveTo(-29,1.1).curveTo(-29.5,0.6,-29.5,-0).curveTo(-29.5,-0.6,-29,-1).curveTo(-28.6,-1.5,-28,-1.5).curveTo(-27.4,-1.5,-27,-1).curveTo(-26.5,-0.6,-26.5,-0).curveTo(-26.5,0.6,-27,1.1).curveTo(-27.4,1.5,-28,1.5).curveTo(-28.6,1.5,-29,1.1).closePath().moveTo(-37,1.1).curveTo(-37.5,0.6,-37.5,-0).curveTo(-37.5,-0.6,-37,-1).curveTo(-36.6,-1.5,-36,-1.5).curveTo(-35.4,-1.5,-35,-1).curveTo(-34.5,-0.6,-34.5,-0).curveTo(-34.5,0.6,-35,1.1).curveTo(-35.4,1.5,-36,1.5).curveTo(-36.6,1.5,-37,1.1).closePath();
	this.shape.setTransform(-2.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-1.5,75,3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(113,212,255,0.627)").setStrokeStyle(2,1,1).moveTo(-119.2,-58.1).lineTo(124.9,-58.3).curveTo(133.1,-58.3,136.2,-50).lineTo(171.7,43.2).curveTo(173.3,47.4,173.5,50.3).curveTo(173.8,57.6,165.9,57.6).lineTo(-166.2,58.3).curveTo(-173.5,58.3,-173.5,52.3).curveTo(-173.5,49,-171.3,43.9).lineTo(-131,-49.8).curveTo(-127.5,-58.1,-119.2,-58.1).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(66,66,66,0.067)").beginStroke().moveTo(-173.5,52.3).curveTo(-173.5,49,-171.3,43.9).lineTo(-131,-49.8).curveTo(-127.5,-58.1,-119.2,-58.1).lineTo(124.9,-58.3).curveTo(133.1,-58.3,136.2,-50).lineTo(171.7,43.2).curveTo(173.3,47.4,173.5,50.3).curveTo(173.8,57.6,165.9,57.6).lineTo(-166.2,58.3).lineTo(-166.3,58.3).curveTo(-173.5,58.3,-173.5,52.3).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-59.2,349,118.6);


(lib.skip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.6)").beginStroke().moveTo(6.1,8.1).lineTo(6.1,7.1).lineTo(-7.5,7.1).lineTo(-7.5,-4.9).lineTo(-6.2,-4.9).lineTo(-6.2,6).lineTo(6.1,6).lineTo(6.1,-4.9).lineTo(7.5,-4.9).lineTo(7.5,8.1).closePath().moveTo(-4.3,4.4).lineTo(-4.3,-5.3).lineTo(4.2,-5.3).lineTo(4.2,4.2).lineTo(3,4.2).lineTo(3,3.4).lineTo(-3,3.4).lineTo(-3,4.4).closePath().moveTo(0.6,2.2).lineTo(3,2.2).lineTo(3,-0.3).lineTo(0.6,-0.3).closePath().moveTo(-3,2.2).lineTo(-0.6,2.2).lineTo(-0.6,-0.3).lineTo(-3,-0.3).closePath().moveTo(0.6,-1.5).lineTo(3,-1.5).lineTo(3,-4.1).lineTo(0.6,-4.1).closePath().moveTo(-3,-1.5).lineTo(-0.6,-1.5).lineTo(-0.6,-4.1).lineTo(-3,-4.1).closePath().moveTo(-8.5,-6.9).lineTo(-8.5,-8.1).lineTo(8.5,-8.1).lineTo(8.5,-6.9).closePath();
	this.shape.setTransform(26,-3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(255,255,255,0.6)").beginStroke().moveTo(-1.6,7.5).curveTo(2,4.3,2.2,-2.2).lineTo(2.2,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-5).lineTo(2.2,-5).lineTo(2.2,-8.7).lineTo(3.7,-8.7).lineTo(3.7,-5).lineTo(8.4,-5).lineTo(8.1,5.7).curveTo(7.8,8.1,5.8,8.1).lineTo(3.3,8.1).lineTo(3.1,6.6).lineTo(5.3,6.8).curveTo(6.6,6.7,6.6,5.2).curveTo(6.9,0.9,6.9,-3.8).lineTo(3.7,-3.8).lineTo(3.6,-2.2).curveTo(3.5,4.7,-0.6,8.7).lineTo(-1.6,7.5).closePath().moveTo(-1.7,5.7).lineTo(-7.8,6.3).lineTo(-8.4,4.9).curveTo(-7.7,4.4,-7.1,3.4).curveTo(-6.3,1.7,-5.3,-1).lineTo(-8.4,-1).lineTo(-8.4,-2.2).lineTo(0.2,-2.2).lineTo(0.2,-1).lineTo(-3.9,-1).curveTo(-5.4,2.8,-6.5,4.9).lineTo(-2.2,4.4).lineTo(-3.4,1.5).lineTo(-2.2,1).curveTo(-1,3.4,-0.2,5.8).lineTo(-1.5,6.3).lineTo(-1.7,5.7).closePath().moveTo(-7.6,-5.9).lineTo(-7.6,-7.2).lineTo(-0.6,-7.2).lineTo(-0.6,-5.9).closePath();
	this.shape_1.setTransform(7.8,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(255,255,255,0.6)").beginStroke().moveTo(-8.7,6.9).lineTo(-6.5,5).lineTo(-6.5,-1.1).lineTo(-8.6,-1.1).lineTo(-8.6,-2.3).lineTo(-5.2,-2.3).lineTo(-5.2,5.3).curveTo(-3.9,6.9,-1.3,6.9).lineTo(3.4,7).lineTo(8.7,6.8).lineTo(8.2,8.2).lineTo(3,8.3).lineTo(-1.5,8.2).curveTo(-4.5,8.2,-5.9,6.1).curveTo(-6.4,6.6,-8,8.4).closePath().moveTo(0.6,5.8).lineTo(0.3,4.2).lineTo(3,4.3).curveTo(4.1,4.3,4,3.1).lineTo(4,-3.8).lineTo(-3.5,-3.8).lineTo(-3.5,-5).lineTo(4,-5).lineTo(4,-8.4).lineTo(5.5,-8.4).lineTo(5.5,-5).lineTo(8.5,-5).lineTo(8.5,-3.8).lineTo(5.5,-3.8).lineTo(5.5,3.5).curveTo(5.5,5.8,3.3,5.8).lineTo(0.6,5.8).closePath().moveTo(-2.8,-1.7).lineTo(-1.7,-2.4).lineTo(1.2,1.4).lineTo(-0,2.2).curveTo(-1.4,0.1,-2.8,-1.7).closePath().moveTo(-8,-7.6).lineTo(-6.9,-8.4).curveTo(-5.7,-7,-4.4,-5.1).lineTo(-5.6,-4.2).curveTo(-6.8,-6.1,-8,-7.6).closePath();
	this.shape_2.setTransform(-10,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(255,255,255,0.6)").beginStroke().moveTo(-3.1,7.5).curveTo(0.1,5.6,0.3,1.5).lineTo(-2,3.6).lineTo(-3,2.5).curveTo(-1.4,1.4,0.4,-0.2).lineTo(0.4,-8.6).lineTo(1.7,-8.6).lineTo(1.7,-1).curveTo(1.7,2,1.2,4.1).curveTo(0.5,6.9,-2.2,8.7).lineTo(-3.1,7.5).closePath().moveTo(3.4,5.8).lineTo(3.4,-8.7).lineTo(4.7,-8.7).lineTo(4.7,-0.4).curveTo(6.6,0.7,8.3,1.8).lineTo(7.4,3).lineTo(4.7,1.1).lineTo(4.7,5.7).curveTo(4.7,6.9,5.6,6.8).lineTo(6.3,6.8).curveTo(7.2,6.8,7.3,5.8).lineTo(7.6,3.8).lineTo(8.8,4.3).lineTo(8.6,6.2).curveTo(8.3,8.1,6.5,8.1).lineTo(5.4,8.1).lineTo(5.3,8.1).curveTo(3.3,8.1,3.4,5.8).closePath().moveTo(-8.8,5.9).lineTo(-7.9,5.8).lineTo(-7.9,-0.7).lineTo(-6.7,-0.7).lineTo(-6.7,5.6).lineTo(-5.4,5.4).lineTo(-5.4,-2.5).lineTo(-6.4,-2.5).lineTo(-6.4,-1.9).lineTo(-7.5,-1.9).lineTo(-7.5,-7.9).lineTo(-2.7,-7.9).lineTo(-2.7,-2.5).lineTo(-4.2,-2.5).lineTo(-4.2,0.2).lineTo(-2.3,0.2).lineTo(-2.3,1.3).lineTo(-4.2,1.3).lineTo(-4.2,5.2).lineTo(-2.3,4.9).lineTo(-2.2,6.1).lineTo(-8.5,7.2).closePath().moveTo(-6.4,-3.5).lineTo(-3.8,-3.5).lineTo(-3.8,-6.8).lineTo(-6.4,-6.8).closePath().moveTo(5,-2.6).curveTo(6.1,-4.2,6.9,-6.1).lineTo(8.1,-5.5).curveTo(7.2,-3.6,6.1,-1.9).closePath().moveTo(-2.4,-5.5).lineTo(-1.3,-6.1).curveTo(-0.4,-4.3,0.3,-2.6).lineTo(-1,-2).curveTo(-1.6,-3.9,-2.4,-5.5).closePath();
	this.shape_3.setTransform(-28,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(255,255,255,0.761)").beginStroke().moveTo(6.1,8.1).lineTo(6.1,7.1).lineTo(-7.5,7.1).lineTo(-7.5,-4.9).lineTo(-6.2,-4.9).lineTo(-6.2,6).lineTo(6.1,6).lineTo(6.1,-4.9).lineTo(7.5,-4.9).lineTo(7.5,8.1).closePath().moveTo(-4.3,4.4).lineTo(-4.3,-5.3).lineTo(4.2,-5.3).lineTo(4.2,4.2).lineTo(3,4.2).lineTo(3,3.4).lineTo(-3,3.4).lineTo(-3,4.4).closePath().moveTo(0.6,2.2).lineTo(3,2.2).lineTo(3,-0.3).lineTo(0.6,-0.3).closePath().moveTo(-3,2.2).lineTo(-0.6,2.2).lineTo(-0.6,-0.3).lineTo(-3,-0.3).closePath().moveTo(0.6,-1.5).lineTo(3,-1.5).lineTo(3,-4.1).lineTo(0.6,-4.1).closePath().moveTo(-3,-1.5).lineTo(-0.6,-1.5).lineTo(-0.6,-4.1).lineTo(-3,-4.1).closePath().moveTo(-8.5,-6.9).lineTo(-8.5,-8.1).lineTo(8.5,-8.1).lineTo(8.5,-6.9).closePath();
	this.shape_4.setTransform(26,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(255,255,255,0.761)").beginStroke().moveTo(-1.6,7.5).curveTo(2,4.3,2.2,-2.2).lineTo(2.2,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-5).lineTo(2.2,-5).lineTo(2.2,-8.7).lineTo(3.7,-8.7).lineTo(3.7,-5).lineTo(8.4,-5).lineTo(8.1,5.7).curveTo(7.8,8.1,5.8,8.1).lineTo(3.3,8.1).lineTo(3.1,6.6).lineTo(5.3,6.8).curveTo(6.6,6.7,6.6,5.2).curveTo(6.9,0.9,6.9,-3.8).lineTo(3.7,-3.8).lineTo(3.6,-2.2).curveTo(3.5,4.7,-0.6,8.7).lineTo(-1.6,7.5).closePath().moveTo(-1.7,5.7).lineTo(-7.8,6.3).lineTo(-8.4,4.9).curveTo(-7.7,4.4,-7.1,3.4).curveTo(-6.3,1.7,-5.3,-1).lineTo(-8.4,-1).lineTo(-8.4,-2.2).lineTo(0.2,-2.2).lineTo(0.2,-1).lineTo(-3.9,-1).curveTo(-5.4,2.8,-6.5,4.9).lineTo(-2.2,4.4).lineTo(-3.4,1.5).lineTo(-2.2,1).curveTo(-1,3.4,-0.2,5.8).lineTo(-1.5,6.3).lineTo(-1.7,5.7).closePath().moveTo(-7.6,-5.9).lineTo(-7.6,-7.2).lineTo(-0.6,-7.2).lineTo(-0.6,-5.9).closePath();
	this.shape_5.setTransform(7.8,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,255,255,0.761)").beginStroke().moveTo(-8.7,6.9).lineTo(-6.5,5).lineTo(-6.5,-1.1).lineTo(-8.6,-1.1).lineTo(-8.6,-2.3).lineTo(-5.2,-2.3).lineTo(-5.2,5.3).curveTo(-3.9,6.9,-1.3,6.9).lineTo(3.4,7).lineTo(8.7,6.8).lineTo(8.2,8.2).lineTo(3,8.3).lineTo(-1.5,8.2).curveTo(-4.5,8.2,-5.9,6.1).curveTo(-6.4,6.6,-8,8.4).closePath().moveTo(0.6,5.8).lineTo(0.3,4.2).lineTo(3,4.3).curveTo(4.1,4.3,4,3.1).lineTo(4,-3.8).lineTo(-3.5,-3.8).lineTo(-3.5,-5).lineTo(4,-5).lineTo(4,-8.4).lineTo(5.5,-8.4).lineTo(5.5,-5).lineTo(8.5,-5).lineTo(8.5,-3.8).lineTo(5.5,-3.8).lineTo(5.5,3.5).curveTo(5.5,5.8,3.3,5.8).lineTo(0.6,5.8).closePath().moveTo(-2.8,-1.7).lineTo(-1.7,-2.4).lineTo(1.2,1.4).lineTo(-0,2.2).curveTo(-1.4,0.1,-2.8,-1.7).closePath().moveTo(-8,-7.6).lineTo(-6.9,-8.4).curveTo(-5.7,-7,-4.4,-5.1).lineTo(-5.6,-4.2).curveTo(-6.8,-6.1,-8,-7.6).closePath();
	this.shape_6.setTransform(-10,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,255,255,0.761)").beginStroke().moveTo(-3.1,7.5).curveTo(0.1,5.6,0.3,1.5).lineTo(-2,3.6).lineTo(-3,2.5).curveTo(-1.4,1.4,0.4,-0.2).lineTo(0.4,-8.6).lineTo(1.7,-8.6).lineTo(1.7,-1).curveTo(1.7,2,1.2,4.1).curveTo(0.5,6.9,-2.2,8.7).lineTo(-3.1,7.5).closePath().moveTo(3.4,5.8).lineTo(3.4,-8.7).lineTo(4.7,-8.7).lineTo(4.7,-0.4).curveTo(6.6,0.7,8.3,1.8).lineTo(7.4,3).lineTo(4.7,1.1).lineTo(4.7,5.7).curveTo(4.7,6.9,5.6,6.8).lineTo(6.3,6.8).curveTo(7.2,6.8,7.3,5.8).lineTo(7.6,3.8).lineTo(8.8,4.3).lineTo(8.6,6.2).curveTo(8.3,8.1,6.5,8.1).lineTo(5.4,8.1).lineTo(5.3,8.1).curveTo(3.3,8.1,3.4,5.8).closePath().moveTo(-8.8,5.9).lineTo(-7.9,5.8).lineTo(-7.9,-0.7).lineTo(-6.7,-0.7).lineTo(-6.7,5.6).lineTo(-5.4,5.4).lineTo(-5.4,-2.5).lineTo(-6.4,-2.5).lineTo(-6.4,-1.9).lineTo(-7.5,-1.9).lineTo(-7.5,-7.9).lineTo(-2.7,-7.9).lineTo(-2.7,-2.5).lineTo(-4.2,-2.5).lineTo(-4.2,0.2).lineTo(-2.3,0.2).lineTo(-2.3,1.3).lineTo(-4.2,1.3).lineTo(-4.2,5.2).lineTo(-2.3,4.9).lineTo(-2.2,6.1).lineTo(-8.5,7.2).closePath().moveTo(-6.4,-3.5).lineTo(-3.8,-3.5).lineTo(-3.8,-6.8).lineTo(-6.4,-6.8).closePath().moveTo(5,-2.6).curveTo(6.1,-4.2,6.9,-6.1).lineTo(8.1,-5.5).curveTo(7.2,-3.6,6.1,-1.9).closePath().moveTo(-2.4,-5.5).lineTo(-1.3,-6.1).curveTo(-0.4,-4.3,0.3,-2.6).lineTo(-1,-2).curveTo(-1.6,-3.9,-2.4,-5.5).closePath();
	this.shape_7.setTransform(-28,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(66,66,66,0.008)").beginStroke().moveTo(-46.7,12).curveTo(-52,12,-52,6.7).lineTo(-52,-6.7).curveTo(-52,-12,-46.7,-12).lineTo(46.7,-12).curveTo(52,-12,52,-6.7).lineTo(52,6.7).curveTo(52,12,46.7,12).closePath();
	this.shape_8.setTransform(-0.9,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-18.6,104,27.8);


(lib.rectTopIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(44,181,255,0.067)").beginStroke("rgba(93,191,233,0.988)").setStrokeStyle(3,1,1).drawRoundRect(-67.4,-45.45,134.8,90.9,11.1);
	this.shape.setTransform(-0.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-46,137.8,93.9);


(lib.rectBottomIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(44,181,255,0.067)").beginStroke("rgba(93,191,233,0.988)").setStrokeStyle(3,1,1).drawRoundRect(-97.35,-22.9,194.7,45.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,-24.4,197.6,48.8);


(lib.rect5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.1,7.4).curveTo(0.7,4.3,0.7,-0).curveTo(0.7,-4.3,-2.1,-7.4).lineTo(-0.7,-7.4).curveTo(2.1,-4.4,2.1,-0).curveTo(2.1,4.4,-0.7,7.4).closePath();
	this.shape.setTransform(179,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.6,7.6).lineTo(-0.7,6.3).lineTo(1.5,6.4).curveTo(2.7,6.4,2.7,5.5).lineTo(2.7,3.6).lineTo(-7.1,3.6).lineTo(-7.1,2.5).lineTo(2.7,2.5).lineTo(2.7,1.3).lineTo(3.9,1.3).lineTo(3.9,2.5).lineTo(7.3,2.5).lineTo(7.3,3.6).lineTo(3.9,3.6).lineTo(3.9,5.7).curveTo(3.9,7.6,1.9,7.6).lineTo(-0.6,7.6).closePath().moveTo(-4.2,4.5).lineTo(-3.3,3.7).lineTo(-1.2,5.7).lineTo(-2.1,6.5).lineTo(-4.2,4.5).closePath().moveTo(-7.7,1).lineTo(-7.7,-0).lineTo(-0.6,-0).lineTo(-0.6,-1.6).lineTo(-6.6,-1.6).lineTo(-6.6,-2.6).lineTo(-0.6,-2.6).lineTo(-0.6,-3.8).lineTo(0.5,-3.8).lineTo(0.5,-2.6).lineTo(6.7,-2.6).lineTo(6.7,-1.6).lineTo(0.5,-1.6).lineTo(0.5,-0).lineTo(7.7,-0).lineTo(7.7,1).closePath().moveTo(2.7,-4.5).lineTo(3.4,-5).lineTo(4.9,-3.6).lineTo(3.9,-2.9).lineTo(2.7,-4.5).closePath().moveTo(-4.2,-4.5).lineTo(-3.4,-5).lineTo(-2,-3.6).lineTo(-2.9,-2.9).lineTo(-4.2,-4.5).closePath().moveTo(-7.8,-3.8).curveTo(-5.8,-5.3,-4.7,-7.6).lineTo(-3.3,-7.6).lineTo(-4.1,-6.2).lineTo(0.4,-6.2).lineTo(0.4,-5.2).lineTo(-4.9,-5.2).curveTo(-5.7,-4,-7,-2.9).lineTo(-7.8,-3.8).closePath().moveTo(-0.2,-4.3).curveTo(1.2,-5.8,2,-7.6).lineTo(3.3,-7.6).lineTo(2.6,-6.2).lineTo(7.6,-6.2).lineTo(7.6,-5.2).lineTo(2,-5.2).curveTo(1.5,-4.4,0.9,-3.7).lineTo(-0.2,-4.3).closePath();
	this.shape_1.setTransform(163.5,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.8,7.7).lineTo(-2.8,1.8).lineTo(-5,1.8).lineTo(-5,6.5).lineTo(-6.2,6.5).lineTo(-6.2,0.8).lineTo(-2.8,0.8).lineTo(-2.8,-1).lineTo(-7.3,-1).lineTo(-7.3,-2).lineTo(-2.8,-2).lineTo(-2.8,-4.1).lineTo(-5.2,-4.1).lineTo(-6.1,-2.4).lineTo(-7.1,-3).curveTo(-5.9,-4.9,-5.4,-7.1).lineTo(-4.3,-6.7).lineTo(-4.7,-5.2).lineTo(-2.8,-5.2).lineTo(-2.8,-7.6).lineTo(-1.6,-7.6).lineTo(-1.6,-5.2).lineTo(1.8,-5.2).lineTo(1.8,-4.1).lineTo(-1.6,-4.1).lineTo(-1.6,-2).lineTo(2.5,-2).lineTo(2.5,-1).lineTo(-1.6,-1).lineTo(-1.6,0.8).lineTo(1.8,0.8).lineTo(1.8,4.5).curveTo(1.8,6.2,0.3,6.2).lineTo(-1,6.2).lineTo(-1.2,5.1).lineTo(-0,5.1).curveTo(0.7,5.2,0.7,4.3).lineTo(0.7,1.8).lineTo(-1.6,1.8).lineTo(-1.6,7.7).closePath().moveTo(3.4,7.3).lineTo(3.1,6).lineTo(5.1,6.1).curveTo(6.1,6.1,6.1,5).lineTo(6.1,-7.6).lineTo(7.3,-7.6).lineTo(7.3,5.2).curveTo(7.3,7.4,5.5,7.3).lineTo(3.4,7.3).closePath().moveTo(3,3.5).lineTo(3,-6.2).lineTo(4.3,-6.2).lineTo(4.3,3.5).closePath();
	this.shape_2.setTransform(147.1,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.4,7.7).lineTo(-7.6,6.3).lineTo(-6.2,6.4).curveTo(-5.5,6.4,-5.5,5.7).lineTo(-5.5,1.6).lineTo(-7.5,2.1).lineTo(-7.8,0.8).lineTo(-5.5,0.2).lineTo(-5.5,-3.4).lineTo(-7.6,-3.4).lineTo(-7.6,-4.5).lineTo(-5.5,-4.5).lineTo(-5.5,-7.5).lineTo(-4.3,-7.5).lineTo(-4.3,-4.5).lineTo(-2.7,-4.5).lineTo(-2.7,-3.4).lineTo(-4.3,-3.4).lineTo(-4.3,-0.1).lineTo(-2.8,-0.5).lineTo(-2.6,0.7).lineTo(-4.3,1.2).lineTo(-4.3,6).curveTo(-4.3,7.6,-5.8,7.7).lineTo(-7.4,7.7).closePath().moveTo(-2.9,7.2).lineTo(-2.9,6).lineTo(1.9,6).lineTo(1.9,2.1).lineTo(-1.9,2.1).lineTo(-1.9,1).lineTo(7,1).lineTo(7,2.1).lineTo(3.2,2.1).lineTo(3.2,6).lineTo(7.8,6).lineTo(7.8,7.2).closePath().moveTo(3.3,-2.1).lineTo(4.2,-3).lineTo(7.7,-0.2).lineTo(6.8,0.8).curveTo(5.4,-0.6,3.3,-2.1).closePath().moveTo(-2.5,-0.1).curveTo(-0.6,-1.5,0.9,-3).lineTo(1.8,-2.1).lineTo(-1.6,0.8).closePath().moveTo(6.1,-2.4).lineTo(6.1,-4).lineTo(-0.9,-4).lineTo(-0.9,-2.4).lineTo(-2.1,-2.4).lineTo(-2.1,-5.2).lineTo(2.4,-5.2).lineTo(1.1,-7).lineTo(2.1,-7.6).lineTo(3.6,-5.7).lineTo(2.8,-5.2).lineTo(7.3,-5.2).lineTo(7.3,-2.4).closePath();
	this.shape_3.setTransform(131.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.3,7.6).lineTo(2,6.4).lineTo(4.6,6.5).curveTo(5.7,6.5,5.7,5.2).lineTo(5.7,-5.5).lineTo(-2,-5.5).lineTo(-2,-6.7).lineTo(6.9,-6.7).lineTo(6.9,5.4).curveTo(6.9,7.7,4.8,7.7).lineTo(2.3,7.6).closePath().moveTo(-6.9,7.7).lineTo(-6.9,-4.6).lineTo(-5.7,-4.6).lineTo(-5.7,7.7).closePath().moveTo(-3.4,4.4).lineTo(-3.4,-2.8).lineTo(3.3,-2.8).lineTo(3.3,3.5).lineTo(-2.2,3.5).lineTo(-2.2,4.4).closePath().moveTo(-2.2,2.3).lineTo(2.1,2.3).lineTo(2.1,-1.6).lineTo(-2.2,-1.6).closePath().moveTo(-6.2,-6.9).lineTo(-5.3,-7.7).lineTo(-3,-5.4).lineTo(-4,-4.5).lineTo(-6.2,-6.9).closePath();
	this.shape_4.setTransform(115.5,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.5,6.8).curveTo(-1.7,5.1,-1.1,3.2).curveTo(-0.6,1.9,-0.5,-1.3).lineTo(-0.5,-3.9).lineTo(-2.9,-3.9).lineTo(-2.9,-5).lineTo(2.2,-5).curveTo(1.7,-6.1,1.1,-7.2).lineTo(2.1,-7.8).lineTo(3.4,-5.6).lineTo(2.3,-5).lineTo(7.7,-5).lineTo(7.7,-3.9).lineTo(0.7,-3.9).lineTo(0.7,-1.5).lineTo(6.6,-1.5).lineTo(6.3,5.1).curveTo(6,7.2,4,7.2).lineTo(1.5,7.2).lineTo(1.2,5.7).curveTo(2.7,5.9,3.9,5.9).curveTo(4.9,5.9,5,4.8).curveTo(5.2,2.9,5.3,-0.4).lineTo(0.7,-0.4).curveTo(0.7,2.3,0.1,3.8).curveTo(-0.6,5.8,-2.5,7.7).curveTo(-3,7.2,-3.5,6.8).closePath().moveTo(-6.2,5.3).curveTo(-5.7,4.7,-5.7,3.8).lineTo(-5.7,-1.3).lineTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(-4.4,-2.4).lineTo(-4.4,3.9).lineTo(-2.2,2.1).lineTo(-2.1,3.6).lineTo(-4.7,5.5).lineTo(-5.4,6.3).closePath().moveTo(-7,-6.7).lineTo(-6.1,-7.5).lineTo(-3.7,-4.9).lineTo(-4.8,-4).lineTo(-7,-6.7).closePath();
	this.shape_5.setTransform(99.6,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,-1).lineTo(-1.1,-1.8).curveTo(0.8,-0.3,1.9,0.8).lineTo(1,1.8).curveTo(-0.4,0.4,-1.9,-1).closePath();
	this.shape_6.setTransform(78.4,29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.8,7).lineTo(-2.8,5.9).lineTo(2,5.9).lineTo(2,3.7).lineTo(-1.9,3.7).lineTo(-1.9,2.6).lineTo(2,2.6).lineTo(2,0.5).lineTo(-0.5,0.5).lineTo(-0.5,1.1).lineTo(-1.7,1.1).lineTo(-1.7,-7).lineTo(6.9,-7).lineTo(6.9,1.1).lineTo(5.7,1.1).lineTo(5.7,0.5).lineTo(3.2,0.5).lineTo(3.2,2.6).lineTo(7.2,2.6).lineTo(7.2,3.7).lineTo(3.2,3.7).lineTo(3.2,5.9).lineTo(7.9,5.9).lineTo(7.9,7).closePath().moveTo(3.2,-0.6).lineTo(5.7,-0.6).lineTo(5.7,-2.7).lineTo(3.2,-2.7).closePath().moveTo(-0.5,-0.6).lineTo(2,-0.6).lineTo(2,-2.7).lineTo(-0.5,-2.7).closePath().moveTo(3.2,-3.7).lineTo(5.7,-3.7).lineTo(5.7,-5.9).lineTo(3.2,-5.9).closePath().moveTo(-0.5,-3.7).lineTo(2,-3.7).lineTo(2,-5.9).lineTo(-0.5,-5.9).closePath().moveTo(-7.9,5).lineTo(-5.5,4.4).lineTo(-5.5,-0.3).lineTo(-7.4,-0.3).lineTo(-7.4,-1.4).lineTo(-5.5,-1.4).lineTo(-5.5,-5.3).lineTo(-7.6,-5.3).lineTo(-7.6,-6.4).lineTo(-2.3,-6.4).lineTo(-2.3,-5.3).lineTo(-4.4,-5.3).lineTo(-4.4,-1.4).lineTo(-2.4,-1.4).lineTo(-2.4,-0.3).lineTo(-4.4,-0.3).lineTo(-4.4,4.1).lineTo(-2.4,3.5).lineTo(-2.2,4.7).lineTo(-7.4,6.3).closePath();
	this.shape_7.setTransform(67.5,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.4,7.7).lineTo(4.4,7.1).lineTo(-4.2,7.1).lineTo(-4.2,7.7).lineTo(-5.3,7.7).lineTo(-5.3,-1).lineTo(4.3,-1).lineTo(4.3,2.8).lineTo(3.1,2.8).lineTo(3.1,2.5).lineTo(-4.2,2.5).lineTo(-4.2,3.6).lineTo(5.6,3.6).lineTo(5.6,7.7).closePath().moveTo(-4.2,6.1).lineTo(4.4,6.1).lineTo(4.4,4.5).lineTo(-4.2,4.5).closePath().moveTo(-4.2,1.5).lineTo(3.1,1.5).lineTo(3.1,0).lineTo(-4.2,0).closePath().moveTo(-7.1,-0.7).lineTo(-7.1,-3.1).lineTo(-0.5,-3.1).lineTo(-1.1,-4.2).lineTo(-0,-4.7).lineTo(0.9,-3.1).lineTo(7.1,-3.1).lineTo(7.1,-0.7).lineTo(5.9,-0.7).lineTo(5.9,-2.1).lineTo(-5.9,-2.1).lineTo(-5.9,-0.7).closePath().moveTo(2.9,-4.8).lineTo(3.5,-5.3).lineTo(2.2,-5.3).lineTo(1.2,-3.9).lineTo(0.3,-4.7).curveTo(1.4,-5.9,2.1,-7.7).lineTo(3.5,-7.7).lineTo(2.8,-6.3).lineTo(7.7,-6.3).lineTo(7.7,-5.3).lineTo(3.8,-5.3).lineTo(5,-3.9).lineTo(4.1,-3.2).lineTo(2.9,-4.8).closePath().moveTo(-4.3,-4.8).lineTo(-3.6,-5.3).lineTo(-5,-5.3).curveTo(-5.8,-4.1,-7,-3.2).lineTo(-7.8,-4.1).curveTo(-5.9,-5.5,-4.8,-7.7).lineTo(-3.4,-7.7).lineTo(-4.3,-6.3).lineTo(0.3,-6.3).lineTo(0.3,-5.3).lineTo(-3.4,-5.3).lineTo(-2.1,-3.9).lineTo(-3.1,-3.2).lineTo(-4.3,-4.8).closePath();
	this.shape_8.setTransform(51.5,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.3,6.5).curveTo(-0,5,1.7,3.2).curveTo(-0.6,0.3,-1.2,-5.5).lineTo(-2.1,-5.5).lineTo(-2.1,-6.7).lineTo(6.7,-6.7).lineTo(6.7,-5.5).curveTo(5.9,-0.1,3.4,3.2).curveTo(5.1,4.9,7.9,6).lineTo(6.8,7.3).curveTo(4.1,5.9,2.6,4.2).curveTo(0.7,6.1,-2.5,7.7).lineTo(-3.3,6.5).closePath().moveTo(2.6,2.3).curveTo(4.7,-0.6,5.4,-5.5).lineTo(0,-5.5).curveTo(0.5,-0.5,2.6,2.3).closePath().moveTo(-5.3,7.7).lineTo(-5.3,-0.9).curveTo(-6.1,1.7,-7.3,3.5).lineTo(-7.9,2.2).curveTo(-6.3,-0.3,-5.4,-3.3).lineTo(-7.7,-3.3).lineTo(-7.7,-4.4).lineTo(-5.3,-4.4).lineTo(-5.3,-7.7).lineTo(-4.1,-7.7).lineTo(-4.1,-4.4).lineTo(-1.8,-4.4).lineTo(-1.8,-3.3).lineTo(-4.1,-3.3).lineTo(-4.1,-1.2).lineTo(-3.4,-1.9).curveTo(-2,-0.5,-1.1,0.5).lineTo(-2,1.4).curveTo(-3.1,0,-4.1,-1).lineTo(-4.1,7.7).closePath();
	this.shape_9.setTransform(35.5,23.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.9,6.6).curveTo(-0.8,6.1,1.2,5).curveTo(-0.4,3.5,-1.1,1.4).lineTo(-2.1,1.4).lineTo(-2.1,0.3).lineTo(6.1,0.3).lineTo(6.1,1.4).curveTo(5.1,3.5,3.2,5).curveTo(5.1,6.1,7.8,6.4).lineTo(6.9,7.7).curveTo(4.1,7.1,2.2,5.8).curveTo(-0,7.1,-3.1,7.8).lineTo(-3.9,6.6).closePath().moveTo(2.2,4.3).curveTo(3.8,3.1,4.7,1.4).lineTo(0.1,1.4).curveTo(0.8,3.2,2.2,4.3).closePath().moveTo(-7.5,7.5).lineTo(-7.7,6.2).lineTo(-6.4,6.2).curveTo(-5.9,6.2,-5.9,5.7).lineTo(-5.9,1.3).lineTo(-7.7,2.2).lineTo(-7.9,0.8).lineTo(-5.9,-0.1).lineTo(-5.9,-3.6).lineTo(-7.8,-3.6).lineTo(-7.8,-4.7).lineTo(-5.9,-4.7).lineTo(-5.9,-7.7).lineTo(-4.7,-7.7).lineTo(-4.7,-4.7).lineTo(-3,-4.7).lineTo(-3,-3.6).lineTo(-4.7,-3.6).lineTo(-4.7,-0.6).lineTo(-3.2,-1.4).lineTo(-3.1,-0.2).lineTo(-4.7,0.6).lineTo(-4.7,5.9).curveTo(-4.7,7.5,-6.2,7.5).lineTo(-7.5,7.5).closePath().moveTo(6.2,-0.2).lineTo(6.2,-1.5).lineTo(-1.5,-1.5).lineTo(-1.5,-0.2).lineTo(-2.6,-0.2).lineTo(-2.6,-2.6).lineTo(4,-2.6).curveTo(4.9,-4.1,5.6,-5.6).lineTo(6.8,-5).lineTo(5.3,-2.6).lineTo(7.4,-2.6).lineTo(7.4,-0.2).closePath().moveTo(-1.9,-4.8).lineTo(-0.9,-5.3).lineTo(0.3,-3.2).lineTo(-0.7,-2.7).lineTo(-1.9,-4.8).closePath().moveTo(1.2,-5.1).lineTo(2.2,-5.5).lineTo(3.3,-3.4).lineTo(2.2,-2.9).curveTo(1.8,-4,1.2,-5.1).closePath().moveTo(-2.5,-6.6).curveTo(2.7,-6.8,7,-7.2).lineTo(7.3,-6).lineTo(-2.4,-5.5).lineTo(-2.5,-6.6).closePath();
	this.shape_10.setTransform(19.6,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,-1).lineTo(-1.1,-1.8).curveTo(0.8,-0.3,1.9,0.8).lineTo(1,1.8).curveTo(-0.4,0.4,-1.9,-1).closePath();
	this.shape_11.setTransform(-1.6,29.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.6,6.4).curveTo(0.9,4,0.9,0.4).lineTo(0.9,-0.6).lineTo(-1.1,-0.6).lineTo(-1.1,4.9).curveTo(-1.1,6.5,-2.6,6.5).lineTo(-4.2,6.5).lineTo(-4.4,5.3).lineTo(-3,5.4).curveTo(-2.3,5.4,-2.3,4.7).lineTo(-2.3,-0.6).lineTo(-5,-0.6).lineTo(-5,0.6).curveTo(-5,4.7,-6.8,7.3).lineTo(-7.7,6.4).curveTo(-6.2,4.1,-6.1,0.7).lineTo(-6.1,-0.6).lineTo(-7.7,-0.6).lineTo(-7.7,-1.7).lineTo(-6.1,-1.7).lineTo(-6.1,-7.3).lineTo(-1.1,-7.3).lineTo(-1.1,-1.7).lineTo(0.9,-1.7).lineTo(0.9,-7.3).lineTo(6,-7.3).lineTo(6,-1.7).lineTo(7.7,-1.7).lineTo(7.7,-0.6).lineTo(6,-0.6).lineTo(6,5.4).curveTo(6,7,4.6,7).lineTo(2.5,7).lineTo(2.3,5.8).lineTo(4.1,5.9).curveTo(4.9,5.9,4.8,5.2).lineTo(4.8,-0.6).lineTo(2.1,-0.6).lineTo(2.1,0.4).curveTo(2.1,4.5,0.3,7.3).lineTo(-0.6,6.4).closePath().moveTo(2.1,-1.7).lineTo(4.8,-1.7).lineTo(4.8,-6.2).lineTo(2.1,-6.2).closePath().moveTo(-5,-1.7).lineTo(-2.3,-1.7).lineTo(-2.3,-6.2).lineTo(-5,-6.2).closePath();
	this.shape_12.setTransform(-12.5,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.5,7.2).curveTo(-6.5,4.5,-5.6,1.2).lineTo(-4.3,1.7).lineTo(-6.1,7.7).closePath().moveTo(-3.9,6.8).lineTo(-3.9,5.7).lineTo(1.4,5.7).lineTo(1.4,1.2).lineTo(-2.7,1.2).lineTo(-2.7,0.1).lineTo(1.4,0.1).lineTo(1.4,-3.8).lineTo(-3.1,-3.8).lineTo(-3.1,-5).lineTo(1.8,-5).lineTo(0.4,-7).lineTo(1.4,-7.7).curveTo(2.4,-6.5,3.1,-5.6).lineTo(2.1,-5).lineTo(7.3,-5).lineTo(7.3,-3.8).lineTo(2.7,-3.8).lineTo(2.7,0.1).lineTo(6.8,0.1).lineTo(6.8,1.2).lineTo(2.7,1.2).lineTo(2.7,5.7).lineTo(7.8,5.7).lineTo(7.8,6.8).closePath().moveTo(-7.7,-2.4).lineTo(-6.9,-3.3).lineTo(-4.2,-1.2).lineTo(-5.1,-0.2).curveTo(-6.8,-1.7,-7.7,-2.4).closePath().moveTo(-7.2,-6.6).lineTo(-6.4,-7.4).curveTo(-4.9,-6.2,-3.7,-5.1).lineTo(-4.6,-4.1).lineTo(-7.2,-6.6).closePath();
	this.shape_13.setTransform(-28.5,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,6.7).curveTo(-3.6,4,-3.3,-0.6).lineTo(-3.1,-3.8).lineTo(-7.4,-3.8).lineTo(-7.4,-5).lineTo(0.2,-5).lineTo(-1.1,-7.2).lineTo(0.1,-7.8).lineTo(1.4,-5.6).lineTo(0.3,-5).lineTo(7.7,-5).lineTo(7.7,-3.8).lineTo(-1.8,-3.8).lineTo(-1.9,-1.4).lineTo(5.7,-1.4).lineTo(5.2,4.5).curveTo(5.1,7.3,2.5,7.3).lineTo(-0.7,7.2).lineTo(-0.9,5.7).curveTo(1.1,6,2.3,6).curveTo(3.8,6,3.9,4.3).lineTo(4.2,-0.2).lineTo(-2,-0.2).curveTo(-2.4,4.9,-6.7,7.8).lineTo(-7.7,6.7).closePath();
	this.shape_14.setTransform(-44.6,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.5,7.6).lineTo(-3.8,6.1).lineTo(-1.8,6.3).curveTo(-0.7,6.3,-0.7,5.2).lineTo(-0.7,2.2).lineTo(-7.1,5.6).lineTo(-7.7,4.4).curveTo(-4.5,2.8,-0.7,0.7).lineTo(-0.7,-3.7).lineTo(-7.5,-3.7).lineTo(-7.5,-4.8).lineTo(-0.7,-4.8).lineTo(-0.7,-7.6).lineTo(0.7,-7.6).lineTo(0.7,-4.8).lineTo(7.5,-4.8).lineTo(7.5,-3.7).lineTo(0.7,-3.7).lineTo(0.7,-2.7).curveTo(1.4,-1,2.5,0.5).curveTo(4.1,-0.9,5.5,-2.7).lineTo(6.6,-1.7).curveTo(4.7,0.2,3.2,1.5).curveTo(5.1,3.6,7.7,5).lineTo(6.8,6.1).curveTo(2.8,3.8,0.7,-0.2).lineTo(0.7,5.6).curveTo(0.7,7.6,-1.4,7.6).lineTo(-3.5,7.6).closePath().moveTo(-6.2,-1.9).lineTo(-5.2,-2.8).curveTo(-4,-1.5,-2.7,0).lineTo(-3.7,0.9).curveTo(-4.8,-0.5,-6.2,-1.9).closePath().moveTo(2.1,-6.8).lineTo(2.8,-7.6).curveTo(4.3,-6.7,5.2,-5.9).lineTo(4.4,-5).lineTo(2.1,-6.8).closePath();
	this.shape_15.setTransform(-60.4,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.3,7.7).lineTo(-2.3,-0.3).lineTo(6.4,-0.3).lineTo(6.4,5.8).curveTo(6.4,7.5,4.7,7.5).lineTo(2.3,7.5).lineTo(2.1,6.4).lineTo(4.3,6.5).curveTo(5.2,6.4,5.2,5.7).lineTo(5.2,4.9).lineTo(-1.1,4.9).lineTo(-1.1,7.7).closePath().moveTo(-1.1,3.9).lineTo(5.2,3.9).lineTo(5.2,2.8).lineTo(-1.1,2.8).closePath().moveTo(-1.1,1.9).lineTo(5.2,1.9).lineTo(5.2,0.7).lineTo(-1.1,0.7).closePath().moveTo(-6.4,6.2).curveTo(-5.8,5.7,-5.8,4.8).lineTo(-5.8,-1.1).lineTo(-7.7,-1.1).lineTo(-7.7,-2.3).lineTo(-4.6,-2.3).lineTo(-4.6,5).lineTo(-2.9,3.8).lineTo(-2.8,5.2).curveTo(-4.5,6.3,-5.6,7.2).closePath().moveTo(-3.6,-1.2).lineTo(-3.6,-2.2).lineTo(1.4,-2.2).lineTo(1.4,-3.3).lineTo(-2.6,-3.3).lineTo(-2.6,-4.2).lineTo(1.4,-4.2).lineTo(1.4,-5.3).lineTo(-3.1,-5.3).lineTo(-3.1,-6.3).lineTo(1.4,-6.3).lineTo(1.4,-7.7).lineTo(2.7,-7.7).lineTo(2.7,-6.3).lineTo(7.4,-6.3).lineTo(7.4,-5.3).lineTo(2.7,-5.3).lineTo(2.7,-4.2).lineTo(7,-4.2).lineTo(7,-3.3).lineTo(2.7,-3.3).lineTo(2.7,-2.2).lineTo(7.7,-2.2).lineTo(7.7,-1.2).closePath().moveTo(-6.9,-6.3).lineTo(-6,-7.1).lineTo(-3.7,-4.8).lineTo(-4.8,-3.9).curveTo(-5.9,-5.3,-6.9,-6.3).closePath();
	this.shape_16.setTransform(-76.5,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,-1).lineTo(-1.1,-1.8).curveTo(0.8,-0.3,1.9,0.8).lineTo(1,1.8).curveTo(-0.4,0.4,-1.9,-1).closePath();
	this.shape_17.setTransform(-97.6,29.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,6.7).curveTo(-3.6,4,-3.3,-0.6).lineTo(-3.1,-3.8).lineTo(-7.4,-3.8).lineTo(-7.4,-5).lineTo(0.1,-5).lineTo(-1.1,-7.2).lineTo(0.1,-7.8).lineTo(1.5,-5.6).lineTo(0.3,-5).lineTo(7.7,-5).lineTo(7.7,-3.8).lineTo(-1.8,-3.8).lineTo(-1.9,-1.4).lineTo(5.7,-1.4).lineTo(5.2,4.5).curveTo(5,7.3,2.5,7.3).lineTo(-0.7,7.2).lineTo(-0.9,5.7).curveTo(1,6,2.3,6).curveTo(3.7,6,3.9,4.3).lineTo(4.2,-0.2).lineTo(-2,-0.2).curveTo(-2.4,4.9,-6.7,7.8).lineTo(-7.7,6.7).closePath();
	this.shape_18.setTransform(-108.6,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.7,6.8).curveTo(-1.7,5.3,0.1,2.9).lineTo(1.1,3.7).curveTo(-0.7,5.9,-2.7,7.7).curveTo(-3.1,7.2,-3.7,6.8).closePath().moveTo(-5.6,7.7).lineTo(-5.6,-1.2).curveTo(-6.5,0.2,-7.3,1.2).lineTo(-7.9,-0.2).curveTo(-5.4,-3.5,-4,-7.7).lineTo(-2.8,-7.3).curveTo(-3.6,-5.2,-4.4,-3.4).lineTo(-4.4,7.7).closePath().moveTo(3,3.7).lineTo(3.9,2.9).curveTo(6.4,5.2,7.8,6.7).lineTo(6.8,7.6).curveTo(5.2,5.8,3,3.7).closePath().moveTo(-3.5,2.4).lineTo(-3.5,1.3).lineTo(-0.9,1.3).lineTo(-0.9,-3).lineTo(-2.9,-3).lineTo(-2.9,-4.1).lineTo(-0.9,-4.1).lineTo(-0.9,-7.6).lineTo(0.4,-7.6).lineTo(0.4,-4.1).lineTo(3.7,-4.1).lineTo(3.7,-7.6).lineTo(5.1,-7.6).lineTo(5.1,-4.1).lineTo(7.3,-4.1).lineTo(7.3,-3).lineTo(5.1,-3).lineTo(5.1,1.3).lineTo(7.9,1.3).lineTo(7.9,2.4).closePath().moveTo(0.4,1.3).lineTo(3.7,1.3).lineTo(3.7,-3).lineTo(0.4,-3).closePath();
	this.shape_19.setTransform(-124.6,23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4,6.9).curveTo(-1.8,5.1,-1.5,1.6).lineTo(-0.4,1.6).curveTo(-0.5,2.7,-0.7,3.7).curveTo(0.3,5.2,1.9,5.7).lineTo(1.9,1).lineTo(-3,1).lineTo(-3,0).lineTo(7.6,0).lineTo(7.6,1).lineTo(3.1,1).lineTo(3.1,2.8).lineTo(7,2.8).lineTo(7,3.8).lineTo(3.1,3.8).lineTo(3.1,6).curveTo(4.2,6.1,7.8,6).lineTo(7.4,7.1).lineTo(3.5,7.1).curveTo(0.4,7,-1.1,4.9).curveTo(-1.8,6.5,-3,7.7).lineTo(-4,6.9).closePath().moveTo(-7.6,7.4).lineTo(-7.8,6.1).lineTo(-6.3,6.2).curveTo(-5.8,6.2,-5.8,5.7).lineTo(-5.8,0.9).lineTo(-7.6,1.9).lineTo(-7.8,0.5).lineTo(-5.8,-0.4).lineTo(-5.8,-3.7).lineTo(-7.6,-3.7).lineTo(-7.6,-4.8).lineTo(-5.8,-4.8).lineTo(-5.8,-7.7).lineTo(-4.6,-7.7).lineTo(-4.6,-4.8).lineTo(-2.6,-4.8).lineTo(-2.6,-3.7).lineTo(-4.6,-3.7).lineTo(-4.6,-1).lineTo(-2.8,-1.9).lineTo(-2.7,-0.7).lineTo(-4.6,0.3).lineTo(-4.6,5.8).curveTo(-4.6,7.3,-5.8,7.4).lineTo(-6.9,7.4).lineTo(-7.6,7.4).closePath().moveTo(5.1,-0.9).lineTo(5.1,-1.4).lineTo(-0.4,-1.4).lineTo(-0.4,-0.9).lineTo(-1.6,-0.9).lineTo(-1.6,-7.1).lineTo(6.2,-7.1).lineTo(6.2,-0.9).closePath().moveTo(-0.4,-2.4).lineTo(5.1,-2.4).lineTo(5.1,-3.7).lineTo(-0.4,-3.7).closePath().moveTo(-0.4,-4.7).lineTo(5.1,-4.7).lineTo(5.1,-6.1).lineTo(-0.4,-6.1).closePath();
	this.shape_20.setTransform(-140.5,23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.5,6.8).curveTo(-3.1,5.4,-2.2,2.4).lineTo(-6.6,2.4).lineTo(-6.6,1.3).lineTo(-2,1.3).lineTo(-1.8,-0.4).lineTo(-0.6,-0.4).lineTo(-0.7,1.3).lineTo(5.6,1.3).lineTo(5.2,5.2).curveTo(5,7.4,2.7,7.4).lineTo(-0.1,7.4).lineTo(-0.4,6.1).lineTo(2.6,6.3).curveTo(4,6.2,4.1,4.9).lineTo(4.3,2.4).lineTo(-0.9,2.4).curveTo(-1.7,6.2,-6.8,7.9).lineTo(-7.5,6.8).closePath().moveTo(-7.9,-0.4).curveTo(-4,-1,-1.1,-2.1).curveTo(-2.9,-3.2,-4,-4.7).curveTo(-5.2,-3.3,-6.7,-2).lineTo(-7.5,-2.9).curveTo(-4.6,-5.2,-3.3,-7.9).lineTo(-2.1,-7.4).lineTo(-2.8,-6.2).lineTo(5.7,-6.2).lineTo(5.7,-5.2).curveTo(4.2,-3.4,1.6,-2.1).curveTo(4.3,-1.1,7.9,-0.9).lineTo(7,0.4).curveTo(3,-0.1,0.2,-1.4).curveTo(-2.9,-0.1,-7.3,0.7).lineTo(-7.9,-0.4).closePath().moveTo(0.3,-2.7).curveTo(2.5,-3.8,3.9,-5.2).lineTo(-3,-5.2).curveTo(-1.8,-3.7,0.3,-2.7).closePath();
	this.shape_21.setTransform(-156.5,23.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.6,5).curveTo(2.5,6.2,0.8,7.1).lineTo(0.2,6).curveTo(1.8,5.2,2.9,4.1).curveTo(1.4,2.2,0.9,-0.6).lineTo(0.1,-0.6).lineTo(0.1,7.2).lineTo(-1,7.2).lineTo(-1,-7.2).lineTo(6.6,-7.2).lineTo(6.5,-5.2).curveTo(6.4,-2.8,4,-2.8).lineTo(2,-2.9).lineTo(1.8,-4.1).lineTo(3.9,-3.9).curveTo(5.3,-3.9,5.4,-5.2).lineTo(5.4,-6.1).lineTo(0.1,-6.1).lineTo(0.1,-1.6).lineTo(6.7,-1.6).lineTo(6.7,-0.7).curveTo(6.1,2.1,4.5,4.1).curveTo(5.8,5.4,7.8,6.1).lineTo(6.9,7.2).curveTo(5,6.3,3.6,5).closePath().moveTo(3.6,3.2).curveTo(4.9,1.6,5.5,-0.6).lineTo(1.9,-0.6).curveTo(2.4,1.7,3.6,3.2).closePath().moveTo(-7.8,6.3).curveTo(-6.7,4.7,-6.8,1.8).lineTo(-6.8,-7.2).lineTo(-2.4,-7.2).lineTo(-2.4,5.4).curveTo(-2.4,7,-3.8,7).lineTo(-5.3,6.9).lineTo(-5.4,5.8).lineTo(-4.1,6).curveTo(-3.5,6,-3.5,5.3).lineTo(-3.5,1.7).lineTo(-5.6,1.7).curveTo(-5.6,5.3,-7,7.2).lineTo(-7.8,6.3).closePath().moveTo(-5.6,0.8).lineTo(-3.5,0.8).lineTo(-3.5,-2.3).lineTo(-5.6,-2.3).closePath().moveTo(-5.6,-3.2).lineTo(-3.5,-3.2).lineTo(-3.5,-6.2).lineTo(-5.6,-6.2).closePath();
	this.shape_22.setTransform(-172.4,24);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FEFEFE").beginStroke().moveTo(0.7,7.4).curveTo(-2.1,4.4,-2.1,0.1).curveTo(-2.1,-4.3,0.7,-7.4).lineTo(2.1,-7.4).curveTo(-0.7,-4.3,-0.7,0).curveTo(-0.7,4.3,2.1,7.4).closePath();
	this.shape_23.setTransform(-188,24.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.3,6.1).curveTo(0.2,7.3,-2.2,8).lineTo(-2.8,6.8).lineTo(-8.3,7.8).lineTo(-8.8,5.3).lineTo(-2.3,4.4).lineTo(-2.4,5.6).curveTo(-0.3,5,1.4,4.1).curveTo(1,2.8,0.8,1.1).lineTo(-2.2,1.4).lineTo(-2.5,-0.7).lineTo(0.5,-1.1).lineTo(0.4,-2.8).lineTo(-1.9,-2.6).lineTo(-2,-3.6).curveTo(-3.7,-0.6,-5.2,1.3).lineTo(-2.5,0.9).lineTo(-2.7,3.1).curveTo(-6.5,3.5,-7.8,3.9).lineTo(-8.4,2).curveTo(-7.3,0.9,-6,-1.2).lineTo(-8.1,-0.9).lineTo(-8.8,-2.9).curveTo(-7.3,-4.7,-5.6,-8.6).lineTo(-3.4,-7.8).curveTo(-4.9,-5.1,-6.2,-3.1).lineTo(-4.7,-3.2).lineTo(-3.7,-4.9).lineTo(-2,-4.1).lineTo(-2.1,-4.8).lineTo(0.3,-4.9).lineTo(0.2,-8.6).lineTo(2.5,-8.6).lineTo(2.6,-5.2).lineTo(5.7,-5.5).lineTo(3.3,-7.2).lineTo(4.4,-8.6).curveTo(5.8,-7.9,7.2,-6.9).lineTo(6.2,-5.6).lineTo(7.9,-5.7).lineTo(8.1,-3.6).lineTo(2.7,-3.1).lineTo(2.9,-1.3).lineTo(8.3,-2).lineTo(8.6,0.1).lineTo(6.4,0.4).lineTo(8,1.6).curveTo(6.3,3.5,4.3,4.9).curveTo(5.1,6,5.7,6).curveTo(6,6,6.2,5.6).curveTo(6.4,5.1,6.7,3.3).lineTo(8.8,4.4).curveTo(8.1,7.1,7.5,7.9).curveTo(6.8,8.6,5.9,8.6).curveTo(3.7,8.6,2.3,6.1).closePath().moveTo(3.1,0.8).lineTo(3.5,2.7).curveTo(5,1.7,6.2,0.4).closePath();
	this.shape_24.setTransform(61.5,-22.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2,8.6).curveTo(-4.7,8.6,-4.7,6.1).lineTo(-4.7,2.3).lineTo(-2.3,2.3).lineTo(-2.3,5.4).curveTo(-2.3,6.3,-1.2,6.3).lineTo(1.4,6.3).curveTo(2,6.3,2.4,6.1).curveTo(2.8,5.9,2.9,5.4).lineTo(3.2,3.9).lineTo(5.5,5.1).curveTo(4.8,7.6,4,8.1).curveTo(3.1,8.6,2,8.6).closePath().moveTo(-8.8,6.7).curveTo(-7.8,4.7,-7.1,2.5).lineTo(-5,3.2).curveTo(-5.8,5.7,-6.7,7.7).closePath().moveTo(4.9,3.3).lineTo(7.1,2.5).lineTo(8.8,6.7).lineTo(6.5,7.6).curveTo(5.8,5.3,4.9,3.3).closePath().moveTo(-1.7,2.4).lineTo(-0.6,1.4).lineTo(-6.5,1.4).lineTo(-6.5,-5.7).lineTo(-3.5,-5.7).lineTo(-4.8,-7.7).lineTo(-2.7,-8.6).lineTo(-0.9,-6.2).lineTo(-2.1,-5.7).lineTo(0.8,-5.7).lineTo(2.7,-8.5).lineTo(5.4,-8).lineTo(3.6,-5.7).lineTo(6.5,-5.7).lineTo(6.5,1.4).lineTo(0.4,1.4).lineTo(2.5,3.5).lineTo(0.7,5.1).lineTo(-1.7,2.4).closePath().moveTo(-3.9,-0.8).lineTo(3.9,-0.8).lineTo(3.9,-3.6).lineTo(-3.9,-3.6).closePath();
	this.shape_25.setTransform(43.5,-22.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,8.6).curveTo(-4.5,8.5,-4.5,6.3).lineTo(-4.5,3.4).lineTo(-2.1,3.4).lineTo(-2.1,5.7).curveTo(-2.1,6.6,-0.9,6.6).lineTo(1.1,6.6).curveTo(2.1,6.6,2.5,6.2).curveTo(2.8,5.9,3,4.3).curveTo(4.5,5.2,5.4,5.5).curveTo(4.7,7.6,3.9,8).curveTo(3.2,8.5,2,8.6).closePath().moveTo(-8.8,7).curveTo(-7.8,5.2,-7.2,3.2).lineTo(-5,3.9).lineTo(-6.7,8).closePath().moveTo(4.7,3.7).lineTo(6.6,2.7).lineTo(8.8,6.4).lineTo(6.6,7.6).curveTo(5.8,5.6,4.7,3.7).closePath().moveTo(-1.3,3.3).lineTo(-0.2,2.6).lineTo(-7,2.6).lineTo(-7,-7.1).lineTo(-1.9,-7.1).lineTo(-1.5,-8.5).lineTo(1.5,-8.3).lineTo(1,-7.1).lineTo(7.1,-7.1).lineTo(7.1,2.6).lineTo(1,2.6).lineTo(2.5,4.5).lineTo(0.5,5.9).curveTo(-0,4.8,-1.3,3.3).closePath().moveTo(-4.7,0.8).lineTo(4.7,0.8).lineTo(4.7,-0.2).lineTo(-4.7,-0.2).closePath().moveTo(-4.7,-1.8).lineTo(4.7,-1.8).lineTo(4.7,-2.8).lineTo(-4.7,-2.8).closePath().moveTo(-4.7,-4.3).lineTo(4.7,-4.3).lineTo(4.7,-5.3).lineTo(-4.7,-5.3).closePath();
	this.shape_26.setTransform(25.5,-22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.3,8.7).lineTo(5.3,7.8).lineTo(-0.4,7.8).lineTo(-0.4,8.7).lineTo(-2.9,8.7).lineTo(-2.9,1.9).lineTo(7.7,1.9).lineTo(7.7,8.7).closePath().moveTo(-0.4,5.7).lineTo(5.3,5.7).lineTo(5.3,4).lineTo(-0.4,4).closePath().moveTo(-6.9,8.7).lineTo(-6.9,1).lineTo(-8.2,3).curveTo(-8.3,1.6,-8.7,-0.2).curveTo(-7.1,-3.3,-5.7,-8.6).lineTo(-3.3,-8).lineTo(-4.7,-4).lineTo(-4.7,8.7).closePath().moveTo(-2.9,1).lineTo(-2.9,-0.8).lineTo(7.7,-0.8).lineTo(7.7,1).closePath().moveTo(-2.9,-1.7).lineTo(-2.9,-3.6).lineTo(7.7,-3.6).lineTo(7.7,-1.7).closePath().moveTo(-3.6,-4.6).lineTo(-3.6,-6.6).lineTo(1.2,-6.6).lineTo(0.5,-8.2).lineTo(3.1,-8.7).curveTo(3.5,-7.9,4,-6.6).lineTo(8.7,-6.6).lineTo(8.7,-4.6).closePath();
	this.shape_27.setTransform(7.5,-22.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,6.7).curveTo(-4.7,5.7,-3.3,3.6).lineTo(-8.1,3.6).lineTo(-8.1,1.4).lineTo(-2.6,1.4).lineTo(-2.3,-0.2).lineTo(0.2,-0.2).lineTo(-0.1,1.4).lineTo(7.4,1.4).lineTo(7.1,5.5).curveTo(7,6.5,6.5,7.1).curveTo(6,7.8,5.1,8.1).curveTo(4.2,8.4,1.7,8.4).lineTo(-0.2,8.4).curveTo(-0.3,7.4,-0.7,6).lineTo(2.7,6.1).curveTo(3.4,6.2,3.9,5.9).curveTo(4.3,5.7,4.4,5.3).lineTo(4.5,3.6).lineTo(-0.6,3.6).curveTo(-1.9,7.3,-7.1,8.7).lineTo(-8.7,6.7).closePath().moveTo(-8.7,-1.5).curveTo(-5.4,-1.8,-2.8,-2.4).curveTo(-4,-3.2,-4.9,-4.1).curveTo(-6,-3.3,-7.1,-2.5).lineTo(-8.6,-4.3).curveTo(-5.1,-6.3,-3.5,-8.7).lineTo(-0.8,-8.7).lineTo(-1.9,-7.2).lineTo(7.3,-7.2).lineTo(7.3,-5.3).curveTo(5.6,-3.7,3.2,-2.4).curveTo(5.7,-1.9,8.7,-1.9).lineTo(7.8,0.5).curveTo(3.3,0.1,0.1,-1.2).curveTo(-3.3,0.1,-7.7,0.7).lineTo(-8.7,-1.5).closePath().moveTo(0.2,-3.4).curveTo(2.2,-4.2,3.8,-5.2).lineTo(-3.1,-5.2).curveTo(-1.7,-4.2,0.2,-3.4).closePath();
	this.shape_28.setTransform(-10.5,-22.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.2,8.8).lineTo(4.2,8.3).lineTo(-4.2,8.3).lineTo(-4.2,8.8).lineTo(-6.5,8.8).lineTo(-6.5,5.2).lineTo(6.4,5.2).lineTo(6.4,8.8).closePath().moveTo(-4.2,7).lineTo(4.2,7).lineTo(4.2,6.2).lineTo(-4.2,6.2).closePath().moveTo(-6.5,4.4).lineTo(-6.5,3.5).lineTo(6.4,3.5).lineTo(6.4,4.4).closePath().moveTo(-6.5,2.8).lineTo(-6.5,1.9).lineTo(6.4,1.9).lineTo(6.4,2.8).closePath().moveTo(-8.4,1.2).lineTo(-8.4,-0.2).lineTo(-0.4,-0.2).lineTo(-0.6,-0.9).curveTo(-1.1,-0.7,-1.7,-0.7).lineTo(-3.1,-0.7).lineTo(-3.2,-1.2).lineTo(-5.6,-1.2).lineTo(-5.6,-0.9).lineTo(-7,-0.9).lineTo(-7,-3.1).lineTo(-7.6,-2.3).lineTo(-8.6,-3.6).curveTo(-7.5,-4.8,-6.8,-6.3).lineTo(-6.3,-6.3).lineTo(-6.3,-6.6).lineTo(-8.4,-6.6).lineTo(-8.4,-8).lineTo(-6.3,-8).lineTo(-6.3,-8.8).lineTo(-4.4,-8.8).lineTo(-4.4,-8).lineTo(-2.9,-8).lineTo(-2.9,-8.8).lineTo(-0.9,-8.8).lineTo(-0.9,-8).lineTo(1.4,-8).lineTo(1.4,-6.6).lineTo(-0.9,-6.6).lineTo(-0.9,-6.1).lineTo(-2.9,-6.1).lineTo(-2.9,-6.6).lineTo(-4.4,-6.6).lineTo(-4.4,-6.2).lineTo(-5,-6.2).lineTo(-5.2,-5.8).lineTo(0.5,-5.8).lineTo(0.4,-2.5).curveTo(0.4,-1.8,0,-1.3).lineTo(1.3,-1.4).lineTo(1.5,-0.2).lineTo(8.6,-0.2).lineTo(8.6,1.2).closePath().moveTo(-6.4,-3.9).lineTo(-2.3,-3.9).lineTo(-2.3,-2.1).lineTo(-2,-2.1).curveTo(-1.5,-2.1,-1.4,-2.7).lineTo(-1.3,-4.5).lineTo(-5.9,-4.5).lineTo(-6.4,-3.9).closePath().moveTo(-5.6,-2.3).lineTo(-3.8,-2.3).lineTo(-3.8,-2.8).lineTo(-5.6,-2.8).closePath().moveTo(0.9,-2.1).curveTo(2.3,-2.6,3.3,-3.2).lineTo(2.4,-4.5).lineTo(1.7,-3.5).lineTo(0.6,-5.1).curveTo(2,-6.7,2.5,-8.8).lineTo(4.5,-8.7).lineTo(4.1,-7.5).lineTo(8.6,-7.5).lineTo(8.6,-5.9).lineTo(7.5,-5.9).curveTo(7.1,-4.3,6,-3.2).curveTo(7.2,-2.6,8.7,-2.3).lineTo(7.6,-0.6).curveTo(5.9,-1.2,4.8,-1.9).curveTo(3.6,-1,2.1,-0.6).lineTo(0.9,-2.1).closePath().moveTo(4.6,-4.2).curveTo(5.4,-4.9,5.8,-5.9).lineTo(3.4,-5.9).curveTo(4,-4.8,4.6,-4.2).closePath();
	this.shape_29.setTransform(-28.5,-22.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5,6.8).lineTo(-5,-6.8).lineTo(-0.2,-6.8).curveTo(2.1,-6.8,3.3,-6).curveTo(4.5,-5.1,4.5,-3.6).curveTo(4.5,-2.5,3.7,-1.7).curveTo(3,-0.8,1.8,-0.6).lineTo(1.8,-0.5).curveTo(3.3,-0.3,4.1,0.5).curveTo(5,1.5,5,2.8).curveTo(5,4.6,3.7,5.7).curveTo(2.4,6.8,0.1,6.8).closePath().moveTo(-2.1,4.6).lineTo(-0.4,4.6).curveTo(0.7,4.7,1.3,4.1).curveTo(2,3.6,2,2.7).curveTo(2,1.9,1.3,1.4).curveTo(0.7,0.9,-0.4,0.9).lineTo(-2.1,0.9).closePath().moveTo(-2.1,-1.3).lineTo(-0.7,-1.3).curveTo(0.3,-1.3,0.8,-1.7).curveTo(1.4,-2.2,1.4,-3.1).curveTo(1.4,-4.6,-0.9,-4.6).lineTo(-2.1,-4.6).closePath();
	this.shape_30.setTransform(-43.2,-23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.5,6.3).lineTo(-4.5,3.4).curveTo(-2.9,4.8,-0.8,4.7).curveTo(0.3,4.7,1,4.4).curveTo(1.5,3.9,1.5,3.3).curveTo(1.6,2.7,1.1,2.2).curveTo(0.6,1.8,-1.4,0.9).curveTo(-4.6,-0.5,-4.6,-3.1).curveTo(-4.6,-5,-3.2,-6).curveTo(-1.7,-7.1,0.6,-7.1).curveTo(2.7,-7,4,-6.5).lineTo(4,-3.8).curveTo(2.6,-4.8,0.8,-4.7).curveTo(-0.2,-4.7,-0.9,-4.4).curveTo(-1.5,-4,-1.6,-3.3).curveTo(-1.5,-2.8,-1.1,-2.3).curveTo(-0.7,-1.8,1.1,-1.1).curveTo(3.1,-0.3,3.8,0.7).curveTo(4.6,1.7,4.6,3).curveTo(4.6,5,3.2,6).curveTo(1.8,7.1,-0.7,7.1).curveTo(-3,7.1,-4.5,6.3).closePath();
	this.shape_31.setTransform(-55.1,-23.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.9,6.8).lineTo(-4.9,-6.8).lineTo(-0.2,-6.8).curveTo(4.9,-6.8,4.9,-2.5).curveTo(4.9,-0.4,3.3,0.9).curveTo(1.8,2.1,-0.5,2).lineTo(-2,2).lineTo(-2,6.8).closePath().moveTo(-2,-0.1).lineTo(-0.7,-0.1).curveTo(1.9,-0.2,1.9,-2.4).curveTo(1.9,-4.6,-0.7,-4.5).lineTo(-2,-4.5).closePath();
	this.shape_32.setTransform(-66,-23.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,1,1).moveTo(358.4,39.8).curveTo(354.8,38.5,352.1,28.3).curveTo(349.1,16.6,349.1,0).curveTo(349.1,-16.5,352.1,-28.3).curveTo(355.1,-39.9,359.4,-40).lineTo(359.5,-40).curveTo(363.9,-40,366.9,-28.3).curveTo(370,-16.5,370,0).curveTo(370,16.6,366.9,28.3).curveTo(363.9,40,359.5,40).curveTo(359,40,358.4,39.8).lineTo(-358.4,39.8).curveTo(-359,40,-359.5,40).curveTo(-363.9,40,-366.9,28.3).curveTo(-370,16.6,-370,0).curveTo(-370,-16.5,-366.9,-28.3).curveTo(-363.9,-39.7,-359.7,-40).lineTo(-359.4,-40).curveTo(-355.2,-39.9,-352.1,-28.3).curveTo(-349.1,-16.5,-349.1,0).curveTo(-349.1,16.6,-352.1,28.3).curveTo(-354.8,38.5,-358.4,39.8).moveTo(-359.4,-40).lineTo(359.4,-40);
	this.shape_33.setTransform(0.6,-0.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginLinearGradientFill(["rgba(44,181,255,0.349)","rgba(29,96,130,0.549)","rgba(25,74,98,0.6)","rgba(29,100,137,0.537)","rgba(44,181,255,0.349)","rgba(21,85,124,0.533)","rgba(21,85,124,0.533)"],[0.035,0.259,0.502,0.749,0.969,1,1],-0.1,-40.8,-0.1,40.8).beginStroke().moveTo(-358.4,39.9).curveTo(-354.8,38.6,-352.1,28.3).curveTo(-349.1,16.6,-349.1,0.1).curveTo(-349.1,-16.5,-352.1,-28.2).curveTo(-355.2,-39.8,-359.4,-39.9).lineTo(359.4,-39.9).curveTo(355.1,-39.8,352.1,-28.2).curveTo(349.1,-16.5,349.1,0.1).curveTo(349.1,16.6,352.1,28.3).curveTo(354.8,38.6,358.4,39.9).closePath();
	this.shape_34.setTransform(0.6,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370.3,-41.3,742,82);


(lib.code01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#5ABCE4").beginStroke().moveTo(598.5,1.5).curveTo(597.8,1.5,597.4,1).curveTo(597,0.6,597,0).curveTo(597,-0.6,597.4,-1.1).curveTo(597.8,-1.5,598.5,-1.5).lineTo(601.5,-1.5).curveTo(602.2,-1.5,602.6,-1.1).curveTo(603,-0.6,603.1,0).curveTo(603,0.6,602.6,1).curveTo(602.2,1.5,601.5,1.5).closePath().moveTo(586.4,1.5).curveTo(585.8,1.5,585.4,1).curveTo(585,0.6,585,0).curveTo(585,-0.6,585.4,-1.1).curveTo(585.8,-1.5,586.4,-1.5).lineTo(592.5,-1.5).curveTo(593.1,-1.5,593.5,-1.1).curveTo(593.9,-0.6,594,0).curveTo(593.9,0.6,593.5,1).curveTo(593.1,1.5,592.5,1.5).closePath().moveTo(574.5,1.5).curveTo(573.8,1.5,573.4,1).curveTo(573,0.6,572.9,0).curveTo(573,-0.6,573.4,-1.1).curveTo(573.8,-1.5,574.5,-1.5).lineTo(580.5,-1.5).curveTo(581.1,-1.5,581.5,-1.1).curveTo(581.9,-0.6,581.9,0).curveTo(581.9,0.6,581.5,1).curveTo(581.1,1.5,580.5,1.5).closePath().moveTo(562.5,1.5).curveTo(561.8,1.5,561.4,1).curveTo(561,0.6,561,0).curveTo(561,-0.6,561.4,-1.1).curveTo(561.8,-1.5,562.5,-1.5).lineTo(568.4,-1.5).curveTo(569.1,-1.5,569.5,-1.1).curveTo(569.9,-0.6,570,0).curveTo(569.9,0.6,569.5,1).curveTo(569.1,1.5,568.4,1.5).closePath().moveTo(550.4,1.5).curveTo(549.8,1.5,549.4,1).curveTo(549,0.6,549,0).curveTo(549,-0.6,549.4,-1.1).curveTo(549.8,-1.5,550.4,-1.5).lineTo(556.5,-1.5).curveTo(557.1,-1.5,557.5,-1.1).curveTo(557.9,-0.6,558,0).curveTo(557.9,0.6,557.5,1).curveTo(557.1,1.5,556.5,1.5).closePath().moveTo(538.5,1.5).curveTo(537.8,1.5,537.4,1).curveTo(537,0.6,536.9,0).curveTo(537,-0.6,537.4,-1.1).curveTo(537.8,-1.5,538.5,-1.5).lineTo(544.5,-1.5).curveTo(545.1,-1.5,545.5,-1.1).curveTo(545.9,-0.6,545.9,0).curveTo(545.9,0.6,545.5,1).curveTo(545.1,1.5,544.5,1.5).closePath().moveTo(526.5,1.5).curveTo(525.8,1.5,525.4,1).curveTo(525,0.6,525,0).curveTo(525,-0.6,525.4,-1.1).curveTo(525.8,-1.5,526.5,-1.5).lineTo(532.4,-1.5).curveTo(533.1,-1.5,533.5,-1.1).curveTo(533.9,-0.6,534,0).curveTo(533.9,0.6,533.5,1).curveTo(533.1,1.5,532.4,1.5).closePath().moveTo(514.4,1.5).curveTo(513.8,1.5,513.4,1).curveTo(513,0.6,513,0).curveTo(513,-0.6,513.4,-1.1).curveTo(513.8,-1.5,514.4,-1.5).lineTo(520.5,-1.5).curveTo(521.1,-1.5,521.5,-1.1).curveTo(521.9,-0.6,522,0).curveTo(521.9,0.6,521.5,1).curveTo(521.1,1.5,520.5,1.5).closePath().moveTo(502.5,1.5).curveTo(501.8,1.5,501.4,1).curveTo(501,0.6,500.9,0).curveTo(501,-0.6,501.4,-1.1).curveTo(501.8,-1.5,502.5,-1.5).lineTo(508.5,-1.5).curveTo(509.1,-1.5,509.5,-1.1).curveTo(509.9,-0.6,509.9,0).curveTo(509.9,0.6,509.5,1).curveTo(509.1,1.5,508.5,1.5).closePath().moveTo(490.5,1.5).curveTo(489.8,1.5,489.4,1).curveTo(489,0.6,489,0).curveTo(489,-0.6,489.4,-1.1).curveTo(489.8,-1.5,490.5,-1.5).lineTo(496.4,-1.5).curveTo(497.1,-1.5,497.5,-1.1).curveTo(497.9,-0.6,498,0).curveTo(497.9,0.6,497.5,1).curveTo(497.1,1.5,496.4,1.5).closePath().moveTo(478.4,1.5).curveTo(477.8,1.5,477.4,1).curveTo(477,0.6,477,0).curveTo(477,-0.6,477.4,-1.1).curveTo(477.8,-1.5,478.4,-1.5).lineTo(484.5,-1.5).curveTo(485.1,-1.5,485.5,-1.1).curveTo(485.9,-0.6,486,0).curveTo(485.9,0.6,485.5,1).curveTo(485.1,1.5,484.5,1.5).closePath().moveTo(466.5,1.5).curveTo(465.8,1.5,465.4,1).curveTo(465,0.6,464.9,0).curveTo(465,-0.6,465.4,-1.1).curveTo(465.8,-1.5,466.5,-1.5).lineTo(472.5,-1.5).curveTo(473.1,-1.5,473.5,-1.1).curveTo(473.9,-0.6,473.9,0).curveTo(473.9,0.6,473.5,1).curveTo(473.1,1.5,472.5,1.5).closePath().moveTo(454.5,1.5).curveTo(453.8,1.5,453.4,1).curveTo(453,0.6,453,0).curveTo(453,-0.6,453.4,-1.1).curveTo(453.8,-1.5,454.5,-1.5).lineTo(460.4,-1.5).curveTo(461.1,-1.5,461.5,-1.1).curveTo(461.9,-0.6,462,0).curveTo(461.9,0.6,461.5,1).curveTo(461.1,1.5,460.4,1.5).closePath().moveTo(442.4,1.5).curveTo(441.8,1.5,441.4,1).curveTo(441,0.6,441,0).curveTo(441,-0.6,441.4,-1.1).curveTo(441.8,-1.5,442.4,-1.5).lineTo(448.5,-1.5).curveTo(449.1,-1.5,449.5,-1.1).curveTo(449.9,-0.6,450,0).curveTo(449.9,0.6,449.5,1).curveTo(449.1,1.5,448.5,1.5).closePath().moveTo(430.5,1.5).curveTo(429.8,1.5,429.4,1).curveTo(429,0.6,428.9,0).curveTo(429,-0.6,429.4,-1.1).curveTo(429.8,-1.5,430.5,-1.5).lineTo(436.5,-1.5).curveTo(437.1,-1.5,437.5,-1.1).curveTo(437.9,-0.6,437.9,0).curveTo(437.9,0.6,437.5,1).curveTo(437.1,1.5,436.5,1.5).closePath().moveTo(418.5,1.5).curveTo(417.8,1.5,417.4,1).curveTo(417,0.6,417,0).curveTo(417,-0.6,417.4,-1.1).curveTo(417.8,-1.5,418.5,-1.5).lineTo(424.4,-1.5).curveTo(425.1,-1.5,425.5,-1.1).curveTo(425.9,-0.6,426,0).curveTo(425.9,0.6,425.5,1).curveTo(425.1,1.5,424.4,1.5).closePath().moveTo(406.4,1.5).curveTo(405.8,1.5,405.4,1).curveTo(405,0.6,405,0).curveTo(405,-0.6,405.4,-1.1).curveTo(405.8,-1.5,406.4,-1.5).lineTo(412.5,-1.5).curveTo(413.1,-1.5,413.5,-1.1).curveTo(413.9,-0.6,414,0).curveTo(413.9,0.6,413.5,1).curveTo(413.1,1.5,412.5,1.5).closePath().moveTo(394.5,1.5).curveTo(393.8,1.5,393.4,1).curveTo(393,0.6,392.9,0).curveTo(393,-0.6,393.4,-1.1).curveTo(393.8,-1.5,394.5,-1.5).lineTo(400.5,-1.5).curveTo(401.1,-1.5,401.5,-1.1).curveTo(401.9,-0.6,401.9,0).curveTo(401.9,0.6,401.5,1).curveTo(401.1,1.5,400.5,1.5).closePath().moveTo(382.5,1.5).curveTo(381.8,1.5,381.4,1).curveTo(381,0.6,381,0).curveTo(381,-0.6,381.4,-1.1).curveTo(381.8,-1.5,382.5,-1.5).lineTo(388.4,-1.5).curveTo(389.1,-1.5,389.5,-1.1).curveTo(389.9,-0.6,390,0).curveTo(389.9,0.6,389.5,1).curveTo(389.1,1.5,388.4,1.5).closePath().moveTo(370.4,1.5).curveTo(369.8,1.5,369.4,1).curveTo(369,0.6,369,0).curveTo(369,-0.6,369.4,-1.1).curveTo(369.8,-1.5,370.4,-1.5).lineTo(376.5,-1.5).curveTo(377.1,-1.5,377.5,-1.1).curveTo(377.9,-0.6,378,0).curveTo(377.9,0.6,377.5,1).curveTo(377.1,1.5,376.5,1.5).closePath().moveTo(358.5,1.5).curveTo(357.8,1.5,357.4,1).curveTo(357,0.6,356.9,0).curveTo(357,-0.6,357.4,-1.1).curveTo(357.8,-1.5,358.5,-1.5).lineTo(364.5,-1.5).curveTo(365.1,-1.5,365.5,-1.1).curveTo(365.9,-0.6,365.9,0).curveTo(365.9,0.6,365.5,1).curveTo(365.1,1.5,364.5,1.5).closePath().moveTo(346.5,1.5).curveTo(345.8,1.5,345.4,1).curveTo(345,0.6,345,0).curveTo(345,-0.6,345.4,-1.1).curveTo(345.8,-1.5,346.5,-1.5).lineTo(352.4,-1.5).curveTo(353.1,-1.5,353.5,-1.1).curveTo(353.9,-0.6,354,0).curveTo(353.9,0.6,353.5,1).curveTo(353.1,1.5,352.4,1.5).closePath().moveTo(334.4,1.5).curveTo(333.8,1.5,333.4,1).curveTo(333,0.6,333,0).curveTo(333,-0.6,333.4,-1.1).curveTo(333.8,-1.5,334.4,-1.5).lineTo(340.5,-1.5).curveTo(341.1,-1.5,341.5,-1.1).curveTo(341.9,-0.6,342,0).curveTo(341.9,0.6,341.5,1).curveTo(341.1,1.5,340.5,1.5).closePath().moveTo(322.5,1.5).curveTo(321.8,1.5,321.4,1).curveTo(321,0.6,320.9,0).curveTo(321,-0.6,321.4,-1.1).curveTo(321.8,-1.5,322.5,-1.5).lineTo(328.5,-1.5).curveTo(329.1,-1.5,329.5,-1.1).curveTo(329.9,-0.6,329.9,0).curveTo(329.9,0.6,329.5,1).curveTo(329.1,1.5,328.5,1.5).closePath().moveTo(310.5,1.5).curveTo(309.8,1.5,309.4,1).curveTo(309,0.6,309,0).curveTo(309,-0.6,309.4,-1.1).curveTo(309.8,-1.5,310.5,-1.5).lineTo(316.4,-1.5).curveTo(317.1,-1.5,317.5,-1.1).curveTo(317.9,-0.6,318,0).curveTo(317.9,0.6,317.5,1).curveTo(317.1,1.5,316.4,1.5).closePath().moveTo(298.4,1.5).curveTo(297.8,1.5,297.4,1).curveTo(297,0.6,297,0).curveTo(297,-0.6,297.4,-1.1).curveTo(297.8,-1.5,298.4,-1.5).lineTo(304.5,-1.5).curveTo(305.1,-1.5,305.5,-1.1).curveTo(305.9,-0.6,306,0).curveTo(305.9,0.6,305.5,1).curveTo(305.1,1.5,304.5,1.5).closePath().moveTo(286.5,1.5).curveTo(285.8,1.5,285.4,1).curveTo(285,0.6,284.9,0).curveTo(285,-0.6,285.4,-1.1).curveTo(285.8,-1.5,286.5,-1.5).lineTo(292.5,-1.5).curveTo(293.1,-1.5,293.5,-1.1).curveTo(293.9,-0.6,293.9,0).curveTo(293.9,0.6,293.5,1).curveTo(293.1,1.5,292.5,1.5).closePath().moveTo(274.5,1.5).curveTo(273.8,1.5,273.4,1).curveTo(273,0.6,273,0).curveTo(273,-0.6,273.4,-1.1).curveTo(273.8,-1.5,274.5,-1.5).lineTo(280.4,-1.5).curveTo(281.1,-1.5,281.5,-1.1).curveTo(281.9,-0.6,282,0).curveTo(281.9,0.6,281.5,1).curveTo(281.1,1.5,280.4,1.5).closePath().moveTo(262.4,1.5).curveTo(261.8,1.5,261.4,1).curveTo(261,0.6,261,0).curveTo(261,-0.6,261.4,-1.1).curveTo(261.8,-1.5,262.4,-1.5).lineTo(268.5,-1.5).curveTo(269.1,-1.5,269.5,-1.1).curveTo(269.9,-0.6,270,0).curveTo(269.9,0.6,269.5,1).curveTo(269.1,1.5,268.5,1.5).closePath().moveTo(250.5,1.5).curveTo(249.8,1.5,249.4,1).curveTo(249,0.6,248.9,0).curveTo(249,-0.6,249.4,-1.1).curveTo(249.8,-1.5,250.5,-1.5).lineTo(256.5,-1.5).curveTo(257.1,-1.5,257.5,-1.1).curveTo(257.9,-0.6,257.9,0).curveTo(257.9,0.6,257.5,1).curveTo(257.1,1.5,256.5,1.5).closePath().moveTo(238.5,1.5).curveTo(237.8,1.5,237.4,1).curveTo(237,0.6,237,0).curveTo(237,-0.6,237.4,-1.1).curveTo(237.8,-1.5,238.5,-1.5).lineTo(244.4,-1.5).curveTo(245.1,-1.5,245.5,-1.1).curveTo(245.9,-0.6,246,0).curveTo(245.9,0.6,245.5,1).curveTo(245.1,1.5,244.4,1.5).closePath().moveTo(226.4,1.5).curveTo(225.8,1.5,225.4,1).curveTo(225,0.6,225,0).curveTo(225,-0.6,225.4,-1.1).curveTo(225.8,-1.5,226.4,-1.5).lineTo(232.5,-1.5).curveTo(233.1,-1.5,233.5,-1.1).curveTo(233.9,-0.6,234,0).curveTo(233.9,0.6,233.5,1).curveTo(233.1,1.5,232.5,1.5).closePath().moveTo(214.5,1.5).curveTo(213.8,1.5,213.4,1).curveTo(213,0.6,212.9,0).curveTo(213,-0.6,213.4,-1.1).curveTo(213.8,-1.5,214.5,-1.5).lineTo(220.5,-1.5).curveTo(221.1,-1.5,221.5,-1.1).curveTo(221.9,-0.6,221.9,0).curveTo(221.9,0.6,221.5,1).curveTo(221.1,1.5,220.5,1.5).closePath().moveTo(202.5,1.5).curveTo(201.8,1.5,201.4,1).curveTo(201,0.6,201,0).curveTo(201,-0.6,201.4,-1.1).curveTo(201.8,-1.5,202.5,-1.5).lineTo(208.4,-1.5).curveTo(209.1,-1.5,209.5,-1.1).curveTo(209.9,-0.6,210,0).curveTo(209.9,0.6,209.5,1).curveTo(209.1,1.5,208.4,1.5).closePath().moveTo(190.4,1.5).curveTo(189.8,1.5,189.4,1).curveTo(189,0.6,189,0).curveTo(189,-0.6,189.4,-1.1).curveTo(189.8,-1.5,190.4,-1.5).lineTo(196.5,-1.5).curveTo(197.1,-1.5,197.5,-1.1).curveTo(197.9,-0.6,198,0).curveTo(197.9,0.6,197.5,1).curveTo(197.1,1.5,196.5,1.5).closePath().moveTo(178.5,1.5).curveTo(177.8,1.5,177.4,1).curveTo(177,0.6,176.9,0).curveTo(177,-0.6,177.4,-1.1).curveTo(177.8,-1.5,178.5,-1.5).lineTo(184.5,-1.5).curveTo(185.1,-1.5,185.5,-1.1).curveTo(185.9,-0.6,185.9,0).curveTo(185.9,0.6,185.5,1).curveTo(185.1,1.5,184.5,1.5).closePath().moveTo(166.5,1.5).curveTo(165.8,1.5,165.4,1).curveTo(165,0.6,165,0).curveTo(165,-0.6,165.4,-1.1).curveTo(165.8,-1.5,166.5,-1.5).lineTo(172.4,-1.5).curveTo(173.1,-1.5,173.5,-1.1).curveTo(173.9,-0.6,174,0).curveTo(173.9,0.6,173.5,1).curveTo(173.1,1.5,172.4,1.5).closePath().moveTo(154.4,1.5).curveTo(153.8,1.5,153.4,1).curveTo(153,0.6,153,0).curveTo(153,-0.6,153.4,-1.1).curveTo(153.8,-1.5,154.4,-1.5).lineTo(160.5,-1.5).curveTo(161.1,-1.5,161.5,-1.1).curveTo(161.9,-0.6,162,0).curveTo(161.9,0.6,161.5,1).curveTo(161.1,1.5,160.5,1.5).closePath().moveTo(142.5,1.5).curveTo(141.8,1.5,141.4,1).curveTo(141,0.6,140.9,0).curveTo(141,-0.6,141.4,-1.1).curveTo(141.8,-1.5,142.5,-1.5).lineTo(148.5,-1.5).curveTo(149.1,-1.5,149.5,-1.1).curveTo(149.9,-0.6,149.9,0).curveTo(149.9,0.6,149.5,1).curveTo(149.1,1.5,148.5,1.5).closePath().moveTo(130.5,1.5).curveTo(129.8,1.5,129.4,1).curveTo(129,0.6,129,0).curveTo(129,-0.6,129.4,-1.1).curveTo(129.8,-1.5,130.5,-1.5).lineTo(136.4,-1.5).curveTo(137.1,-1.5,137.5,-1.1).curveTo(137.9,-0.6,138,0).curveTo(137.9,0.6,137.5,1).curveTo(137.1,1.5,136.4,1.5).closePath().moveTo(118.4,1.5).curveTo(117.8,1.5,117.4,1).curveTo(117,0.6,117,0).curveTo(117,-0.6,117.4,-1.1).curveTo(117.8,-1.5,118.4,-1.5).lineTo(124.5,-1.5).curveTo(125.1,-1.5,125.5,-1.1).curveTo(125.9,-0.6,126,0).curveTo(125.9,0.6,125.5,1).curveTo(125.1,1.5,124.5,1.5).closePath().moveTo(106.5,1.5).curveTo(105.8,1.5,105.4,1).curveTo(105,0.6,104.9,0).curveTo(105,-0.6,105.4,-1.1).curveTo(105.8,-1.5,106.5,-1.5).lineTo(112.5,-1.5).curveTo(113.1,-1.5,113.5,-1.1).curveTo(113.9,-0.6,113.9,0).curveTo(113.9,0.6,113.5,1).curveTo(113.1,1.5,112.5,1.5).closePath().moveTo(94.5,1.5).curveTo(93.8,1.5,93.4,1).curveTo(93,0.6,93,0).curveTo(93,-0.6,93.4,-1.1).curveTo(93.8,-1.5,94.5,-1.5).lineTo(100.4,-1.5).curveTo(101.1,-1.5,101.5,-1.1).curveTo(101.9,-0.6,102,0).curveTo(101.9,0.6,101.5,1).curveTo(101.1,1.5,100.4,1.5).closePath().moveTo(82.4,1.5).curveTo(81.8,1.5,81.4,1).curveTo(81,0.6,81,0).curveTo(81,-0.6,81.4,-1.1).curveTo(81.8,-1.5,82.4,-1.5).lineTo(88.5,-1.5).curveTo(89.1,-1.5,89.5,-1.1).curveTo(89.9,-0.6,90,0).curveTo(89.9,0.6,89.5,1).curveTo(89.1,1.5,88.5,1.5).closePath().moveTo(70.5,1.5).curveTo(69.8,1.5,69.4,1).curveTo(69,0.6,68.9,0).curveTo(69,-0.6,69.4,-1.1).curveTo(69.8,-1.5,70.5,-1.5).lineTo(76.5,-1.5).curveTo(77.1,-1.5,77.5,-1.1).curveTo(77.9,-0.6,77.9,0).curveTo(77.9,0.6,77.5,1).curveTo(77.1,1.5,76.5,1.5).closePath().moveTo(58.5,1.5).curveTo(57.8,1.5,57.4,1).curveTo(57,0.6,57,0).curveTo(57,-0.6,57.4,-1.1).curveTo(57.8,-1.5,58.5,-1.5).lineTo(64.4,-1.5).curveTo(65.1,-1.5,65.5,-1.1).curveTo(65.9,-0.6,66,0).curveTo(65.9,0.6,65.5,1).curveTo(65.1,1.5,64.4,1.5).closePath().moveTo(46.4,1.5).curveTo(45.8,1.5,45.4,1).curveTo(45,0.6,45,0).curveTo(45,-0.6,45.4,-1.1).curveTo(45.8,-1.5,46.4,-1.5).lineTo(52.5,-1.5).curveTo(53.1,-1.5,53.5,-1.1).curveTo(53.9,-0.6,54,0).curveTo(53.9,0.6,53.5,1).curveTo(53.1,1.5,52.5,1.5).closePath().moveTo(34.5,1.5).curveTo(33.8,1.5,33.4,1).curveTo(33,0.6,32.9,0).curveTo(33,-0.6,33.4,-1.1).curveTo(33.8,-1.5,34.5,-1.5).lineTo(40.5,-1.5).curveTo(41.1,-1.5,41.5,-1.1).curveTo(41.9,-0.6,41.9,0).curveTo(41.9,0.6,41.5,1).curveTo(41.1,1.5,40.5,1.5).closePath().moveTo(22.5,1.5).curveTo(21.8,1.5,21.4,1).curveTo(21,0.6,21,0).curveTo(21,-0.6,21.4,-1.1).curveTo(21.8,-1.5,22.5,-1.5).lineTo(28.4,-1.5).curveTo(29.1,-1.5,29.5,-1.1).curveTo(29.9,-0.6,30,0).curveTo(29.9,0.6,29.5,1).curveTo(29.1,1.5,28.4,1.5).closePath().moveTo(10.4,1.5).curveTo(9.8,1.5,9.4,1).curveTo(9,0.6,9,0).curveTo(9,-0.6,9.4,-1.1).curveTo(9.8,-1.5,10.4,-1.5).lineTo(16.5,-1.5).curveTo(17.1,-1.5,17.5,-1.1).curveTo(17.9,-0.6,18,0).curveTo(17.9,0.6,17.5,1).curveTo(17.1,1.5,16.5,1.5).closePath().moveTo(-1.5,1.5).curveTo(-2.2,1.5,-2.6,1).curveTo(-3,0.6,-3.1,0).curveTo(-3,-0.6,-2.6,-1.1).curveTo(-2.2,-1.5,-1.5,-1.5).lineTo(4.5,-1.5).curveTo(5.1,-1.5,5.5,-1.1).curveTo(5.9,-0.6,5.9,0).curveTo(5.9,0.6,5.5,1).curveTo(5.1,1.5,4.5,1.5).closePath().moveTo(-13.5,1.5).curveTo(-14.2,1.5,-14.6,1).curveTo(-15,0.6,-15,0).curveTo(-15,-0.6,-14.6,-1.1).curveTo(-14.2,-1.5,-13.5,-1.5).lineTo(-7.6,-1.5).curveTo(-6.9,-1.5,-6.5,-1.1).curveTo(-6.1,-0.6,-6,0).curveTo(-6.1,0.6,-6.5,1).curveTo(-6.9,1.5,-7.6,1.5).closePath().moveTo(-25.6,1.5).curveTo(-26.2,1.5,-26.6,1).curveTo(-27,0.6,-27,0).curveTo(-27,-0.6,-26.6,-1.1).curveTo(-26.2,-1.5,-25.6,-1.5).lineTo(-19.5,-1.5).curveTo(-18.9,-1.5,-18.5,-1.1).curveTo(-18.1,-0.6,-18,0).curveTo(-18.1,0.6,-18.5,1).curveTo(-18.9,1.5,-19.5,1.5).closePath().moveTo(-37.5,1.5).curveTo(-38.2,1.5,-38.6,1).curveTo(-39,0.6,-39.1,0).curveTo(-39,-0.6,-38.6,-1.1).curveTo(-38.2,-1.5,-37.5,-1.5).lineTo(-31.5,-1.5).curveTo(-30.9,-1.5,-30.5,-1.1).curveTo(-30.1,-0.6,-30.1,0).curveTo(-30.1,0.6,-30.5,1).curveTo(-30.9,1.5,-31.5,1.5).closePath().moveTo(-49.5,1.5).curveTo(-50.2,1.5,-50.6,1).curveTo(-51,0.6,-51,0).curveTo(-51,-0.6,-50.6,-1.1).curveTo(-50.2,-1.5,-49.5,-1.5).lineTo(-43.6,-1.5).curveTo(-42.9,-1.5,-42.5,-1.1).curveTo(-42.1,-0.6,-42,0).curveTo(-42.1,0.6,-42.5,1).curveTo(-42.9,1.5,-43.6,1.5).closePath().moveTo(-61.6,1.5).curveTo(-62.2,1.5,-62.6,1).curveTo(-63,0.6,-63,0).curveTo(-63,-0.6,-62.6,-1.1).curveTo(-62.2,-1.5,-61.6,-1.5).lineTo(-55.5,-1.5).curveTo(-54.9,-1.5,-54.5,-1.1).curveTo(-54.1,-0.6,-54,0).curveTo(-54.1,0.6,-54.5,1).curveTo(-54.9,1.5,-55.5,1.5).closePath().moveTo(-73.5,1.5).curveTo(-74.2,1.5,-74.6,1).curveTo(-75,0.6,-75.1,0).curveTo(-75,-0.6,-74.6,-1.1).curveTo(-74.2,-1.5,-73.5,-1.5).lineTo(-67.5,-1.5).curveTo(-66.9,-1.5,-66.5,-1.1).curveTo(-66.1,-0.6,-66.1,0).curveTo(-66.1,0.6,-66.5,1).curveTo(-66.9,1.5,-67.5,1.5).closePath().moveTo(-85.5,1.5).curveTo(-86.2,1.5,-86.6,1).curveTo(-87,0.6,-87,0).curveTo(-87,-0.6,-86.6,-1.1).curveTo(-86.2,-1.5,-85.5,-1.5).lineTo(-79.6,-1.5).curveTo(-78.9,-1.5,-78.5,-1.1).curveTo(-78.1,-0.6,-78,0).curveTo(-78.1,0.6,-78.5,1).curveTo(-78.9,1.5,-79.6,1.5).closePath().moveTo(-97.6,1.5).curveTo(-98.2,1.5,-98.6,1).curveTo(-99,0.6,-99,0).curveTo(-99,-0.6,-98.6,-1.1).curveTo(-98.2,-1.5,-97.6,-1.5).lineTo(-91.5,-1.5).curveTo(-90.9,-1.5,-90.5,-1.1).curveTo(-90.1,-0.6,-90,0).curveTo(-90.1,0.6,-90.5,1).curveTo(-90.9,1.5,-91.5,1.5).closePath().moveTo(-109.5,1.5).curveTo(-110.2,1.5,-110.6,1).curveTo(-111,0.6,-111.1,0).curveTo(-111,-0.6,-110.6,-1.1).curveTo(-110.2,-1.5,-109.5,-1.5).lineTo(-103.5,-1.5).curveTo(-102.9,-1.5,-102.5,-1.1).curveTo(-102.1,-0.6,-102.1,0).curveTo(-102.1,0.6,-102.5,1).curveTo(-102.9,1.5,-103.5,1.5).closePath().moveTo(-121.5,1.5).curveTo(-122.2,1.5,-122.6,1).curveTo(-123,0.6,-123,0).curveTo(-123,-0.6,-122.6,-1.1).curveTo(-122.2,-1.5,-121.5,-1.5).lineTo(-115.6,-1.5).curveTo(-114.9,-1.5,-114.5,-1.1).curveTo(-114.1,-0.6,-114,0).curveTo(-114.1,0.6,-114.5,1).curveTo(-114.9,1.5,-115.6,1.5).closePath().moveTo(-133.6,1.5).curveTo(-134.2,1.5,-134.6,1).curveTo(-135,0.6,-135,0).curveTo(-135,-0.6,-134.6,-1.1).curveTo(-134.2,-1.5,-133.6,-1.5).lineTo(-127.5,-1.5).curveTo(-126.9,-1.5,-126.5,-1.1).curveTo(-126.1,-0.6,-126,0).curveTo(-126.1,0.6,-126.5,1).curveTo(-126.9,1.5,-127.5,1.5).closePath().moveTo(-145.5,1.5).curveTo(-146.2,1.5,-146.6,1).curveTo(-147,0.6,-147.1,0).curveTo(-147,-0.6,-146.6,-1.1).curveTo(-146.2,-1.5,-145.5,-1.5).lineTo(-139.5,-1.5).curveTo(-138.9,-1.5,-138.5,-1.1).curveTo(-138.1,-0.6,-138.1,0).curveTo(-138.1,0.6,-138.5,1).curveTo(-138.9,1.5,-139.5,1.5).closePath().moveTo(-157.5,1.5).curveTo(-158.2,1.5,-158.6,1).curveTo(-159,0.6,-159,0).curveTo(-159,-0.6,-158.6,-1.1).curveTo(-158.2,-1.5,-157.5,-1.5).lineTo(-151.6,-1.5).curveTo(-150.9,-1.5,-150.5,-1.1).curveTo(-150.1,-0.6,-150,0).curveTo(-150.1,0.6,-150.5,1).curveTo(-150.9,1.5,-151.6,1.5).closePath().moveTo(-169.6,1.5).curveTo(-170.2,1.5,-170.6,1).curveTo(-171,0.6,-171,0).curveTo(-171,-0.6,-170.6,-1.1).curveTo(-170.2,-1.5,-169.6,-1.5).lineTo(-163.5,-1.5).curveTo(-162.9,-1.5,-162.5,-1.1).curveTo(-162.1,-0.6,-162,0).curveTo(-162.1,0.6,-162.5,1).curveTo(-162.9,1.5,-163.5,1.5).closePath().moveTo(-181.5,1.5).curveTo(-182.2,1.5,-182.6,1).curveTo(-183,0.6,-183.1,0).curveTo(-183,-0.6,-182.6,-1.1).curveTo(-182.2,-1.5,-181.5,-1.5).lineTo(-175.5,-1.5).curveTo(-174.9,-1.5,-174.5,-1.1).curveTo(-174.1,-0.6,-174.1,0).curveTo(-174.1,0.6,-174.5,1).curveTo(-174.9,1.5,-175.5,1.5).closePath().moveTo(-193.5,1.5).curveTo(-194.2,1.5,-194.6,1).curveTo(-195,0.6,-195,0).curveTo(-195,-0.6,-194.6,-1.1).curveTo(-194.2,-1.5,-193.5,-1.5).lineTo(-187.6,-1.5).curveTo(-186.9,-1.5,-186.5,-1.1).curveTo(-186.1,-0.6,-186,0).curveTo(-186.1,0.6,-186.5,1).curveTo(-186.9,1.5,-187.6,1.5).closePath().moveTo(-205.6,1.5).curveTo(-206.2,1.5,-206.6,1).curveTo(-207,0.6,-207,0).curveTo(-207,-0.6,-206.6,-1.1).curveTo(-206.2,-1.5,-205.6,-1.5).lineTo(-199.5,-1.5).curveTo(-198.9,-1.5,-198.5,-1.1).curveTo(-198.1,-0.6,-198,0).curveTo(-198.1,0.6,-198.5,1).curveTo(-198.9,1.5,-199.5,1.5).closePath().moveTo(-217.5,1.5).curveTo(-218.2,1.5,-218.6,1).curveTo(-219,0.6,-219.1,0).curveTo(-219,-0.6,-218.6,-1.1).curveTo(-218.2,-1.5,-217.5,-1.5).lineTo(-211.5,-1.5).curveTo(-210.9,-1.5,-210.5,-1.1).curveTo(-210.1,-0.6,-210.1,0).curveTo(-210.1,0.6,-210.5,1).curveTo(-210.9,1.5,-211.5,1.5).closePath().moveTo(-229.5,1.5).curveTo(-230.2,1.5,-230.6,1).curveTo(-231,0.6,-231,0).curveTo(-231,-0.6,-230.6,-1.1).curveTo(-230.2,-1.5,-229.5,-1.5).lineTo(-223.6,-1.5).curveTo(-222.9,-1.5,-222.5,-1.1).curveTo(-222.1,-0.6,-222,0).curveTo(-222.1,0.6,-222.5,1).curveTo(-222.9,1.5,-223.6,1.5).closePath().moveTo(-241.6,1.5).curveTo(-242.2,1.5,-242.6,1).curveTo(-243,0.6,-243,0).curveTo(-243,-0.6,-242.6,-1.1).curveTo(-242.2,-1.5,-241.6,-1.5).lineTo(-235.5,-1.5).curveTo(-234.9,-1.5,-234.5,-1.1).curveTo(-234.1,-0.6,-234,0).curveTo(-234.1,0.6,-234.5,1).curveTo(-234.9,1.5,-235.5,1.5).closePath().moveTo(-253.5,1.5).curveTo(-254.2,1.5,-254.6,1).curveTo(-255,0.6,-255.1,0).curveTo(-255,-0.6,-254.6,-1.1).curveTo(-254.2,-1.5,-253.5,-1.5).lineTo(-247.5,-1.5).curveTo(-246.9,-1.5,-246.5,-1.1).curveTo(-246.1,-0.6,-246.1,0).curveTo(-246.1,0.6,-246.5,1).curveTo(-246.9,1.5,-247.5,1.5).closePath().moveTo(-265.5,1.5).curveTo(-266.2,1.5,-266.6,1).curveTo(-267,0.6,-267,0).curveTo(-267,-0.6,-266.6,-1.1).curveTo(-266.2,-1.5,-265.5,-1.5).lineTo(-259.6,-1.5).curveTo(-258.9,-1.5,-258.5,-1.1).curveTo(-258.1,-0.6,-258,0).curveTo(-258.1,0.6,-258.5,1).curveTo(-258.9,1.5,-259.6,1.5).closePath().moveTo(-277.6,1.5).curveTo(-278.2,1.5,-278.6,1).curveTo(-279,0.6,-279,0).curveTo(-279,-0.6,-278.6,-1.1).curveTo(-278.2,-1.5,-277.6,-1.5).lineTo(-271.5,-1.5).curveTo(-270.9,-1.5,-270.5,-1.1).curveTo(-270.1,-0.6,-270,0).curveTo(-270.1,0.6,-270.5,1).curveTo(-270.9,1.5,-271.5,1.5).closePath().moveTo(-289.5,1.5).curveTo(-290.2,1.5,-290.6,1).curveTo(-291,0.6,-291.1,0).curveTo(-291,-0.6,-290.6,-1.1).curveTo(-290.2,-1.5,-289.5,-1.5).lineTo(-283.5,-1.5).curveTo(-282.9,-1.5,-282.5,-1.1).curveTo(-282.1,-0.6,-282.1,0).curveTo(-282.1,0.6,-282.5,1).curveTo(-282.9,1.5,-283.5,1.5).closePath().moveTo(-301.5,1.5).curveTo(-302.2,1.5,-302.6,1).curveTo(-303,0.6,-303,0).curveTo(-303,-0.6,-302.6,-1.1).curveTo(-302.2,-1.5,-301.5,-1.5).lineTo(-295.6,-1.5).curveTo(-294.9,-1.5,-294.5,-1.1).curveTo(-294.1,-0.6,-294,0).curveTo(-294.1,0.6,-294.5,1).curveTo(-294.9,1.5,-295.6,1.5).closePath().moveTo(-313.6,1.5).curveTo(-314.2,1.5,-314.6,1).curveTo(-315,0.6,-315,0).curveTo(-315,-0.6,-314.6,-1.1).curveTo(-314.2,-1.5,-313.6,-1.5).lineTo(-307.5,-1.5).curveTo(-306.9,-1.5,-306.5,-1.1).curveTo(-306.1,-0.6,-306,0).curveTo(-306.1,0.6,-306.5,1).curveTo(-306.9,1.5,-307.5,1.5).closePath().moveTo(-325.5,1.5).curveTo(-326.2,1.5,-326.6,1).curveTo(-327,0.6,-327.1,0).curveTo(-327,-0.6,-326.6,-1.1).curveTo(-326.2,-1.5,-325.5,-1.5).lineTo(-319.5,-1.5).curveTo(-318.9,-1.5,-318.5,-1.1).curveTo(-318.1,-0.6,-318.1,0).curveTo(-318.1,0.6,-318.5,1).curveTo(-318.9,1.5,-319.5,1.5).closePath().moveTo(-337.5,1.5).curveTo(-338.2,1.5,-338.6,1).curveTo(-339,0.6,-339,0).curveTo(-339,-0.6,-338.6,-1.1).curveTo(-338.2,-1.5,-337.5,-1.5).lineTo(-331.6,-1.5).curveTo(-330.9,-1.5,-330.5,-1.1).curveTo(-330.1,-0.6,-330,0).curveTo(-330.1,0.6,-330.5,1).curveTo(-330.9,1.5,-331.6,1.5).closePath().moveTo(-349.6,1.5).curveTo(-350.2,1.5,-350.6,1).curveTo(-351,0.6,-351,0).curveTo(-351,-0.6,-350.6,-1.1).curveTo(-350.2,-1.5,-349.6,-1.5).lineTo(-343.5,-1.5).curveTo(-342.9,-1.5,-342.5,-1.1).curveTo(-342.1,-0.6,-342,0).curveTo(-342.1,0.6,-342.5,1).curveTo(-342.9,1.5,-343.5,1.5).closePath().moveTo(-361.5,1.5).curveTo(-362.2,1.5,-362.6,1).curveTo(-363,0.6,-363.1,0).curveTo(-363,-0.6,-362.6,-1.1).curveTo(-362.2,-1.5,-361.5,-1.5).lineTo(-355.5,-1.5).curveTo(-354.9,-1.5,-354.5,-1.1).curveTo(-354.1,-0.6,-354.1,0).curveTo(-354.1,0.6,-354.5,1).curveTo(-354.9,1.5,-355.5,1.5).closePath().moveTo(-373.5,1.5).curveTo(-374.2,1.5,-374.6,1).curveTo(-375,0.6,-375,0).curveTo(-375,-0.6,-374.6,-1.1).curveTo(-374.2,-1.5,-373.5,-1.5).lineTo(-367.6,-1.5).curveTo(-366.9,-1.5,-366.5,-1.1).curveTo(-366.1,-0.6,-366,0).curveTo(-366.1,0.6,-366.5,1).curveTo(-366.9,1.5,-367.6,1.5).closePath().moveTo(-385.6,1.5).curveTo(-386.2,1.5,-386.6,1).curveTo(-387,0.6,-387,0).curveTo(-387,-0.6,-386.6,-1.1).curveTo(-386.2,-1.5,-385.6,-1.5).lineTo(-379.5,-1.5).curveTo(-378.9,-1.5,-378.5,-1.1).curveTo(-378.1,-0.6,-378,0).curveTo(-378.1,0.6,-378.5,1).curveTo(-378.9,1.5,-379.5,1.5).closePath().moveTo(-397.5,1.5).curveTo(-398.2,1.5,-398.6,1).curveTo(-399,0.6,-399.1,0).curveTo(-399,-0.6,-398.6,-1.1).curveTo(-398.2,-1.5,-397.5,-1.5).lineTo(-391.5,-1.5).curveTo(-390.9,-1.5,-390.5,-1.1).curveTo(-390.1,-0.6,-390.1,0).curveTo(-390.1,0.6,-390.5,1).curveTo(-390.9,1.5,-391.5,1.5).closePath().moveTo(-409.5,1.5).curveTo(-410.2,1.5,-410.6,1).curveTo(-411,0.6,-411,0).curveTo(-411,-0.6,-410.6,-1.1).curveTo(-410.2,-1.5,-409.5,-1.5).lineTo(-403.6,-1.5).curveTo(-402.9,-1.5,-402.5,-1.1).curveTo(-402.1,-0.6,-402,0).curveTo(-402.1,0.6,-402.5,1).curveTo(-402.9,1.5,-403.6,1.5).closePath().moveTo(-421.6,1.5).curveTo(-422.2,1.5,-422.6,1).curveTo(-423,0.6,-423,0).curveTo(-423,-0.6,-422.6,-1.1).curveTo(-422.2,-1.5,-421.6,-1.5).lineTo(-415.5,-1.5).curveTo(-414.9,-1.5,-414.5,-1.1).curveTo(-414.1,-0.6,-414,0).curveTo(-414.1,0.6,-414.5,1).curveTo(-414.9,1.5,-415.5,1.5).closePath().moveTo(-433.5,1.5).curveTo(-434.2,1.5,-434.6,1).curveTo(-435,0.6,-435.1,0).curveTo(-435,-0.6,-434.6,-1.1).curveTo(-434.2,-1.5,-433.5,-1.5).lineTo(-427.5,-1.5).curveTo(-426.9,-1.5,-426.5,-1.1).curveTo(-426.1,-0.6,-426.1,0).curveTo(-426.1,0.6,-426.5,1).curveTo(-426.9,1.5,-427.5,1.5).closePath().moveTo(-445.5,1.5).curveTo(-446.2,1.5,-446.6,1).curveTo(-447,0.6,-447,0).curveTo(-447,-0.6,-446.6,-1.1).curveTo(-446.2,-1.5,-445.5,-1.5).lineTo(-439.6,-1.5).curveTo(-438.9,-1.5,-438.5,-1.1).curveTo(-438.1,-0.6,-438,0).curveTo(-438.1,0.6,-438.5,1).curveTo(-438.9,1.5,-439.6,1.5).closePath().moveTo(-457.6,1.5).curveTo(-458.2,1.5,-458.6,1).curveTo(-459,0.6,-459,0).curveTo(-459,-0.6,-458.6,-1.1).curveTo(-458.2,-1.5,-457.6,-1.5).lineTo(-451.5,-1.5).curveTo(-450.9,-1.5,-450.5,-1.1).curveTo(-450.1,-0.6,-450,0).curveTo(-450.1,0.6,-450.5,1).curveTo(-450.9,1.5,-451.5,1.5).closePath().moveTo(-469.5,1.5).curveTo(-470.2,1.5,-470.6,1).curveTo(-471,0.6,-471.1,0).curveTo(-471,-0.6,-470.6,-1.1).curveTo(-470.2,-1.5,-469.5,-1.5).lineTo(-463.5,-1.5).curveTo(-462.9,-1.5,-462.5,-1.1).curveTo(-462.1,-0.6,-462.1,0).curveTo(-462.1,0.6,-462.5,1).curveTo(-462.9,1.5,-463.5,1.5).closePath().moveTo(-481.5,1.5).curveTo(-482.2,1.5,-482.6,1).curveTo(-483,0.6,-483,0).curveTo(-483,-0.6,-482.6,-1.1).curveTo(-482.2,-1.5,-481.5,-1.5).lineTo(-475.6,-1.5).curveTo(-474.9,-1.5,-474.5,-1.1).curveTo(-474.1,-0.6,-474,0).curveTo(-474.1,0.6,-474.5,1).curveTo(-474.9,1.5,-475.6,1.5).closePath().moveTo(-493.6,1.5).curveTo(-494.2,1.5,-494.6,1).curveTo(-495,0.6,-495,0).curveTo(-495,-0.6,-494.6,-1.1).curveTo(-494.2,-1.5,-493.6,-1.5).lineTo(-487.5,-1.5).curveTo(-486.9,-1.5,-486.5,-1.1).curveTo(-486.1,-0.6,-486,0).curveTo(-486.1,0.6,-486.5,1).curveTo(-486.9,1.5,-487.5,1.5).closePath().moveTo(-505.5,1.5).curveTo(-506.2,1.5,-506.6,1).curveTo(-507,0.6,-507.1,0).curveTo(-507,-0.6,-506.6,-1.1).curveTo(-506.2,-1.5,-505.5,-1.5).lineTo(-499.5,-1.5).curveTo(-498.9,-1.5,-498.5,-1.1).curveTo(-498.1,-0.6,-498.1,0).curveTo(-498.1,0.6,-498.5,1).curveTo(-498.9,1.5,-499.5,1.5).closePath().moveTo(-517.5,1.5).curveTo(-518.2,1.5,-518.6,1).curveTo(-519,0.6,-519,0).curveTo(-519,-0.6,-518.6,-1.1).curveTo(-518.2,-1.5,-517.5,-1.5).lineTo(-511.6,-1.5).curveTo(-510.9,-1.5,-510.5,-1.1).curveTo(-510.1,-0.6,-510,0).curveTo(-510.1,0.6,-510.5,1).curveTo(-510.9,1.5,-511.6,1.5).closePath().moveTo(-529.6,1.5).curveTo(-530.2,1.5,-530.6,1).curveTo(-531,0.6,-531,0).curveTo(-531,-0.6,-530.6,-1.1).curveTo(-530.2,-1.5,-529.6,-1.5).lineTo(-523.5,-1.5).curveTo(-522.9,-1.5,-522.5,-1.1).curveTo(-522.1,-0.6,-522,0).curveTo(-522.1,0.6,-522.5,1).curveTo(-522.9,1.5,-523.5,1.5).closePath().moveTo(-541.5,1.5).curveTo(-542.2,1.5,-542.6,1).curveTo(-543,0.6,-543.1,0).curveTo(-543,-0.6,-542.6,-1.1).curveTo(-542.2,-1.5,-541.5,-1.5).lineTo(-535.5,-1.5).curveTo(-534.9,-1.5,-534.5,-1.1).curveTo(-534.1,-0.6,-534.1,0).curveTo(-534.1,0.6,-534.5,1).curveTo(-534.9,1.5,-535.5,1.5).closePath().moveTo(-553.5,1.5).curveTo(-554.2,1.5,-554.6,1).curveTo(-555,0.6,-555,0).curveTo(-555,-0.6,-554.6,-1.1).curveTo(-554.2,-1.5,-553.5,-1.5).lineTo(-547.6,-1.5).curveTo(-546.9,-1.5,-546.5,-1.1).curveTo(-546.1,-0.6,-546,0).curveTo(-546.1,0.6,-546.5,1).curveTo(-546.9,1.5,-547.6,1.5).closePath().moveTo(-565.6,1.5).curveTo(-566.2,1.5,-566.6,1).curveTo(-567,0.6,-567,0).curveTo(-567,-0.6,-566.6,-1.1).curveTo(-566.2,-1.5,-565.6,-1.5).lineTo(-559.5,-1.5).curveTo(-558.9,-1.5,-558.5,-1.1).curveTo(-558.1,-0.6,-558,0).curveTo(-558.1,0.6,-558.5,1).curveTo(-558.9,1.5,-559.5,1.5).closePath().moveTo(-577.5,1.5).curveTo(-578.2,1.5,-578.6,1).curveTo(-579,0.6,-579.1,0).curveTo(-579,-0.6,-578.6,-1.1).curveTo(-578.2,-1.5,-577.5,-1.5).lineTo(-571.5,-1.5).curveTo(-570.9,-1.5,-570.5,-1.1).curveTo(-570.1,-0.6,-570.1,0).curveTo(-570.1,0.6,-570.5,1).curveTo(-570.9,1.5,-571.5,1.5).closePath().moveTo(-589.5,1.5).curveTo(-590.2,1.5,-590.6,1).curveTo(-591,0.6,-591,0).curveTo(-591,-0.6,-590.6,-1.1).curveTo(-590.2,-1.5,-589.5,-1.5).lineTo(-583.6,-1.5).curveTo(-582.9,-1.5,-582.5,-1.1).curveTo(-582.1,-0.6,-582,0).curveTo(-582.1,0.6,-582.5,1).curveTo(-582.9,1.5,-583.6,1.5).closePath().moveTo(-601.6,1.5).curveTo(-602.2,1.5,-602.6,1).curveTo(-603,0.6,-603,0).curveTo(-603,-0.6,-602.6,-1.1).curveTo(-602.2,-1.5,-601.6,-1.5).lineTo(-595.5,-1.5).curveTo(-594.9,-1.5,-594.5,-1.1).curveTo(-594.1,-0.6,-594,0).curveTo(-594.1,0.6,-594.5,1).curveTo(-594.9,1.5,-595.5,1.5).closePath();
	this.shape.setTransform(606.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#5ABCE4").beginStroke().moveTo(598.5,1.5).curveTo(597.8,1.5,597.4,1).curveTo(597,0.6,597,0).curveTo(597,-0.6,597.4,-1.1).curveTo(597.8,-1.5,598.5,-1.5).lineTo(601.5,-1.5).curveTo(602.2,-1.5,602.6,-1.1).curveTo(603,-0.6,603.1,0).curveTo(603,0.6,602.6,1).curveTo(602.2,1.5,601.5,1.5).closePath().moveTo(586.4,1.5).curveTo(585.8,1.5,585.4,1).curveTo(585,0.6,585,0).curveTo(585,-0.6,585.4,-1.1).curveTo(585.8,-1.5,586.4,-1.5).lineTo(592.5,-1.5).curveTo(593.1,-1.5,593.5,-1.1).curveTo(593.9,-0.6,594,0).curveTo(593.9,0.6,593.5,1).curveTo(593.1,1.5,592.5,1.5).closePath().moveTo(574.5,1.5).curveTo(573.8,1.5,573.4,1).curveTo(573,0.6,572.9,0).curveTo(573,-0.6,573.4,-1.1).curveTo(573.8,-1.5,574.5,-1.5).lineTo(580.5,-1.5).curveTo(581.1,-1.5,581.5,-1.1).curveTo(581.9,-0.6,581.9,0).curveTo(581.9,0.6,581.5,1).curveTo(581.1,1.5,580.5,1.5).closePath().moveTo(562.5,1.5).curveTo(561.8,1.5,561.4,1).curveTo(561,0.6,561,0).curveTo(561,-0.6,561.4,-1.1).curveTo(561.8,-1.5,562.5,-1.5).lineTo(568.4,-1.5).curveTo(569.1,-1.5,569.5,-1.1).curveTo(569.9,-0.6,570,0).curveTo(569.9,0.6,569.5,1).curveTo(569.1,1.5,568.4,1.5).closePath().moveTo(550.4,1.5).curveTo(549.8,1.5,549.4,1).curveTo(549,0.6,549,0).curveTo(549,-0.6,549.4,-1.1).curveTo(549.8,-1.5,550.4,-1.5).lineTo(556.5,-1.5).curveTo(557.1,-1.5,557.5,-1.1).curveTo(557.9,-0.6,558,0).curveTo(557.9,0.6,557.5,1).curveTo(557.1,1.5,556.5,1.5).closePath().moveTo(538.5,1.5).curveTo(537.8,1.5,537.4,1).curveTo(537,0.6,536.9,0).curveTo(537,-0.6,537.4,-1.1).curveTo(537.8,-1.5,538.5,-1.5).lineTo(544.5,-1.5).curveTo(545.1,-1.5,545.5,-1.1).curveTo(545.9,-0.6,545.9,0).curveTo(545.9,0.6,545.5,1).curveTo(545.1,1.5,544.5,1.5).closePath().moveTo(526.5,1.5).curveTo(525.8,1.5,525.4,1).curveTo(525,0.6,525,0).curveTo(525,-0.6,525.4,-1.1).curveTo(525.8,-1.5,526.5,-1.5).lineTo(532.4,-1.5).curveTo(533.1,-1.5,533.5,-1.1).curveTo(533.9,-0.6,534,0).curveTo(533.9,0.6,533.5,1).curveTo(533.1,1.5,532.4,1.5).closePath().moveTo(514.4,1.5).curveTo(513.8,1.5,513.4,1).curveTo(513,0.6,513,0).curveTo(513,-0.6,513.4,-1.1).curveTo(513.8,-1.5,514.4,-1.5).lineTo(520.5,-1.5).curveTo(521.1,-1.5,521.5,-1.1).curveTo(521.9,-0.6,522,0).curveTo(521.9,0.6,521.5,1).curveTo(521.1,1.5,520.5,1.5).closePath().moveTo(502.5,1.5).curveTo(501.8,1.5,501.4,1).curveTo(501,0.6,500.9,0).curveTo(501,-0.6,501.4,-1.1).curveTo(501.8,-1.5,502.5,-1.5).lineTo(508.5,-1.5).curveTo(509.1,-1.5,509.5,-1.1).curveTo(509.9,-0.6,509.9,0).curveTo(509.9,0.6,509.5,1).curveTo(509.1,1.5,508.5,1.5).closePath().moveTo(490.5,1.5).curveTo(489.8,1.5,489.4,1).curveTo(489,0.6,489,0).curveTo(489,-0.6,489.4,-1.1).curveTo(489.8,-1.5,490.5,-1.5).lineTo(496.4,-1.5).curveTo(497.1,-1.5,497.5,-1.1).curveTo(497.9,-0.6,498,0).curveTo(497.9,0.6,497.5,1).curveTo(497.1,1.5,496.4,1.5).closePath().moveTo(478.4,1.5).curveTo(477.8,1.5,477.4,1).curveTo(477,0.6,477,0).curveTo(477,-0.6,477.4,-1.1).curveTo(477.8,-1.5,478.4,-1.5).lineTo(484.5,-1.5).curveTo(485.1,-1.5,485.5,-1.1).curveTo(485.9,-0.6,486,0).curveTo(485.9,0.6,485.5,1).curveTo(485.1,1.5,484.5,1.5).closePath().moveTo(466.5,1.5).curveTo(465.8,1.5,465.4,1).curveTo(465,0.6,464.9,0).curveTo(465,-0.6,465.4,-1.1).curveTo(465.8,-1.5,466.5,-1.5).lineTo(472.5,-1.5).curveTo(473.1,-1.5,473.5,-1.1).curveTo(473.9,-0.6,473.9,0).curveTo(473.9,0.6,473.5,1).curveTo(473.1,1.5,472.5,1.5).closePath().moveTo(454.5,1.5).curveTo(453.8,1.5,453.4,1).curveTo(453,0.6,453,0).curveTo(453,-0.6,453.4,-1.1).curveTo(453.8,-1.5,454.5,-1.5).lineTo(460.4,-1.5).curveTo(461.1,-1.5,461.5,-1.1).curveTo(461.9,-0.6,462,0).curveTo(461.9,0.6,461.5,1).curveTo(461.1,1.5,460.4,1.5).closePath().moveTo(442.4,1.5).curveTo(441.8,1.5,441.4,1).curveTo(441,0.6,441,0).curveTo(441,-0.6,441.4,-1.1).curveTo(441.8,-1.5,442.4,-1.5).lineTo(448.5,-1.5).curveTo(449.1,-1.5,449.5,-1.1).curveTo(449.9,-0.6,450,0).curveTo(449.9,0.6,449.5,1).curveTo(449.1,1.5,448.5,1.5).closePath().moveTo(430.5,1.5).curveTo(429.8,1.5,429.4,1).curveTo(429,0.6,428.9,0).curveTo(429,-0.6,429.4,-1.1).curveTo(429.8,-1.5,430.5,-1.5).lineTo(436.5,-1.5).curveTo(437.1,-1.5,437.5,-1.1).curveTo(437.9,-0.6,437.9,0).curveTo(437.9,0.6,437.5,1).curveTo(437.1,1.5,436.5,1.5).closePath().moveTo(418.5,1.5).curveTo(417.8,1.5,417.4,1).curveTo(417,0.6,417,0).curveTo(417,-0.6,417.4,-1.1).curveTo(417.8,-1.5,418.5,-1.5).lineTo(424.4,-1.5).curveTo(425.1,-1.5,425.5,-1.1).curveTo(425.9,-0.6,426,0).curveTo(425.9,0.6,425.5,1).curveTo(425.1,1.5,424.4,1.5).closePath().moveTo(406.4,1.5).curveTo(405.8,1.5,405.4,1).curveTo(405,0.6,405,0).curveTo(405,-0.6,405.4,-1.1).curveTo(405.8,-1.5,406.4,-1.5).lineTo(412.5,-1.5).curveTo(413.1,-1.5,413.5,-1.1).curveTo(413.9,-0.6,414,0).curveTo(413.9,0.6,413.5,1).curveTo(413.1,1.5,412.5,1.5).closePath().moveTo(394.5,1.5).curveTo(393.8,1.5,393.4,1).curveTo(393,0.6,392.9,0).curveTo(393,-0.6,393.4,-1.1).curveTo(393.8,-1.5,394.5,-1.5).lineTo(400.5,-1.5).curveTo(401.1,-1.5,401.5,-1.1).curveTo(401.9,-0.6,401.9,0).curveTo(401.9,0.6,401.5,1).curveTo(401.1,1.5,400.5,1.5).closePath().moveTo(382.5,1.5).curveTo(381.8,1.5,381.4,1).curveTo(381,0.6,381,0).curveTo(381,-0.6,381.4,-1.1).curveTo(381.8,-1.5,382.5,-1.5).lineTo(388.4,-1.5).curveTo(389.1,-1.5,389.5,-1.1).curveTo(389.9,-0.6,390,0).curveTo(389.9,0.6,389.5,1).curveTo(389.1,1.5,388.4,1.5).closePath().moveTo(370.4,1.5).curveTo(369.8,1.5,369.4,1).curveTo(369,0.6,369,0).curveTo(369,-0.6,369.4,-1.1).curveTo(369.8,-1.5,370.4,-1.5).lineTo(376.5,-1.5).curveTo(377.1,-1.5,377.5,-1.1).curveTo(377.9,-0.6,378,0).curveTo(377.9,0.6,377.5,1).curveTo(377.1,1.5,376.5,1.5).closePath().moveTo(358.5,1.5).curveTo(357.8,1.5,357.4,1).curveTo(357,0.6,356.9,0).curveTo(357,-0.6,357.4,-1.1).curveTo(357.8,-1.5,358.5,-1.5).lineTo(364.5,-1.5).curveTo(365.1,-1.5,365.5,-1.1).curveTo(365.9,-0.6,365.9,0).curveTo(365.9,0.6,365.5,1).curveTo(365.1,1.5,364.5,1.5).closePath().moveTo(346.5,1.5).curveTo(345.8,1.5,345.4,1).curveTo(345,0.6,345,0).curveTo(345,-0.6,345.4,-1.1).curveTo(345.8,-1.5,346.5,-1.5).lineTo(352.4,-1.5).curveTo(353.1,-1.5,353.5,-1.1).curveTo(353.9,-0.6,354,0).curveTo(353.9,0.6,353.5,1).curveTo(353.1,1.5,352.4,1.5).closePath().moveTo(334.4,1.5).curveTo(333.8,1.5,333.4,1).curveTo(333,0.6,333,0).curveTo(333,-0.6,333.4,-1.1).curveTo(333.8,-1.5,334.4,-1.5).lineTo(340.5,-1.5).curveTo(341.1,-1.5,341.5,-1.1).curveTo(341.9,-0.6,342,0).curveTo(341.9,0.6,341.5,1).curveTo(341.1,1.5,340.5,1.5).closePath().moveTo(322.5,1.5).curveTo(321.8,1.5,321.4,1).curveTo(321,0.6,320.9,0).curveTo(321,-0.6,321.4,-1.1).curveTo(321.8,-1.5,322.5,-1.5).lineTo(328.5,-1.5).curveTo(329.1,-1.5,329.5,-1.1).curveTo(329.9,-0.6,329.9,0).curveTo(329.9,0.6,329.5,1).curveTo(329.1,1.5,328.5,1.5).closePath().moveTo(310.5,1.5).curveTo(309.8,1.5,309.4,1).curveTo(309,0.6,309,0).curveTo(309,-0.6,309.4,-1.1).curveTo(309.8,-1.5,310.5,-1.5).lineTo(316.4,-1.5).curveTo(317.1,-1.5,317.5,-1.1).curveTo(317.9,-0.6,318,0).curveTo(317.9,0.6,317.5,1).curveTo(317.1,1.5,316.4,1.5).closePath().moveTo(298.4,1.5).curveTo(297.8,1.5,297.4,1).curveTo(297,0.6,297,0).curveTo(297,-0.6,297.4,-1.1).curveTo(297.8,-1.5,298.4,-1.5).lineTo(304.5,-1.5).curveTo(305.1,-1.5,305.5,-1.1).curveTo(305.9,-0.6,306,0).curveTo(305.9,0.6,305.5,1).curveTo(305.1,1.5,304.5,1.5).closePath().moveTo(286.5,1.5).curveTo(285.8,1.5,285.4,1).curveTo(285,0.6,284.9,0).curveTo(285,-0.6,285.4,-1.1).curveTo(285.8,-1.5,286.5,-1.5).lineTo(292.5,-1.5).curveTo(293.1,-1.5,293.5,-1.1).curveTo(293.9,-0.6,293.9,0).curveTo(293.9,0.6,293.5,1).curveTo(293.1,1.5,292.5,1.5).closePath().moveTo(274.5,1.5).curveTo(273.8,1.5,273.4,1).curveTo(273,0.6,273,0).curveTo(273,-0.6,273.4,-1.1).curveTo(273.8,-1.5,274.5,-1.5).lineTo(280.4,-1.5).curveTo(281.1,-1.5,281.5,-1.1).curveTo(281.9,-0.6,282,0).curveTo(281.9,0.6,281.5,1).curveTo(281.1,1.5,280.4,1.5).closePath().moveTo(262.4,1.5).curveTo(261.8,1.5,261.4,1).curveTo(261,0.6,261,0).curveTo(261,-0.6,261.4,-1.1).curveTo(261.8,-1.5,262.4,-1.5).lineTo(268.5,-1.5).curveTo(269.1,-1.5,269.5,-1.1).curveTo(269.9,-0.6,270,0).curveTo(269.9,0.6,269.5,1).curveTo(269.1,1.5,268.5,1.5).closePath().moveTo(250.5,1.5).curveTo(249.8,1.5,249.4,1).curveTo(249,0.6,248.9,0).curveTo(249,-0.6,249.4,-1.1).curveTo(249.8,-1.5,250.5,-1.5).lineTo(256.5,-1.5).curveTo(257.1,-1.5,257.5,-1.1).curveTo(257.9,-0.6,257.9,0).curveTo(257.9,0.6,257.5,1).curveTo(257.1,1.5,256.5,1.5).closePath().moveTo(238.5,1.5).curveTo(237.8,1.5,237.4,1).curveTo(237,0.6,237,0).curveTo(237,-0.6,237.4,-1.1).curveTo(237.8,-1.5,238.5,-1.5).lineTo(244.4,-1.5).curveTo(245.1,-1.5,245.5,-1.1).curveTo(245.9,-0.6,246,0).curveTo(245.9,0.6,245.5,1).curveTo(245.1,1.5,244.4,1.5).closePath().moveTo(226.4,1.5).curveTo(225.8,1.5,225.4,1).curveTo(225,0.6,225,0).curveTo(225,-0.6,225.4,-1.1).curveTo(225.8,-1.5,226.4,-1.5).lineTo(232.5,-1.5).curveTo(233.1,-1.5,233.5,-1.1).curveTo(233.9,-0.6,234,0).curveTo(233.9,0.6,233.5,1).curveTo(233.1,1.5,232.5,1.5).closePath().moveTo(214.5,1.5).curveTo(213.8,1.5,213.4,1).curveTo(213,0.6,212.9,0).curveTo(213,-0.6,213.4,-1.1).curveTo(213.8,-1.5,214.5,-1.5).lineTo(220.5,-1.5).curveTo(221.1,-1.5,221.5,-1.1).curveTo(221.9,-0.6,221.9,0).curveTo(221.9,0.6,221.5,1).curveTo(221.1,1.5,220.5,1.5).closePath().moveTo(202.5,1.5).curveTo(201.8,1.5,201.4,1).curveTo(201,0.6,201,0).curveTo(201,-0.6,201.4,-1.1).curveTo(201.8,-1.5,202.5,-1.5).lineTo(208.4,-1.5).curveTo(209.1,-1.5,209.5,-1.1).curveTo(209.9,-0.6,210,0).curveTo(209.9,0.6,209.5,1).curveTo(209.1,1.5,208.4,1.5).closePath().moveTo(190.4,1.5).curveTo(189.8,1.5,189.4,1).curveTo(189,0.6,189,0).curveTo(189,-0.6,189.4,-1.1).curveTo(189.8,-1.5,190.4,-1.5).lineTo(196.5,-1.5).curveTo(197.1,-1.5,197.5,-1.1).curveTo(197.9,-0.6,198,0).curveTo(197.9,0.6,197.5,1).curveTo(197.1,1.5,196.5,1.5).closePath().moveTo(178.5,1.5).curveTo(177.8,1.5,177.4,1).curveTo(177,0.6,176.9,0).curveTo(177,-0.6,177.4,-1.1).curveTo(177.8,-1.5,178.5,-1.5).lineTo(184.5,-1.5).curveTo(185.1,-1.5,185.5,-1.1).curveTo(185.9,-0.6,185.9,0).curveTo(185.9,0.6,185.5,1).curveTo(185.1,1.5,184.5,1.5).closePath().moveTo(166.5,1.5).curveTo(165.8,1.5,165.4,1).curveTo(165,0.6,165,0).curveTo(165,-0.6,165.4,-1.1).curveTo(165.8,-1.5,166.5,-1.5).lineTo(172.4,-1.5).curveTo(173.1,-1.5,173.5,-1.1).curveTo(173.9,-0.6,174,0).curveTo(173.9,0.6,173.5,1).curveTo(173.1,1.5,172.4,1.5).closePath().moveTo(154.4,1.5).curveTo(153.8,1.5,153.4,1).curveTo(153,0.6,153,0).curveTo(153,-0.6,153.4,-1.1).curveTo(153.8,-1.5,154.4,-1.5).lineTo(160.5,-1.5).curveTo(161.1,-1.5,161.5,-1.1).curveTo(161.9,-0.6,162,0).curveTo(161.9,0.6,161.5,1).curveTo(161.1,1.5,160.5,1.5).closePath().moveTo(142.5,1.5).curveTo(141.8,1.5,141.4,1).curveTo(141,0.6,140.9,0).curveTo(141,-0.6,141.4,-1.1).curveTo(141.8,-1.5,142.5,-1.5).lineTo(148.5,-1.5).curveTo(149.1,-1.5,149.5,-1.1).curveTo(149.9,-0.6,149.9,0).curveTo(149.9,0.6,149.5,1).curveTo(149.1,1.5,148.5,1.5).closePath().moveTo(130.5,1.5).curveTo(129.8,1.5,129.4,1).curveTo(129,0.6,129,0).curveTo(129,-0.6,129.4,-1.1).curveTo(129.8,-1.5,130.5,-1.5).lineTo(136.4,-1.5).curveTo(137.1,-1.5,137.5,-1.1).curveTo(137.9,-0.6,138,0).curveTo(137.9,0.6,137.5,1).curveTo(137.1,1.5,136.4,1.5).closePath().moveTo(118.4,1.5).curveTo(117.8,1.5,117.4,1).curveTo(117,0.6,117,0).curveTo(117,-0.6,117.4,-1.1).curveTo(117.8,-1.5,118.4,-1.5).lineTo(124.5,-1.5).curveTo(125.1,-1.5,125.5,-1.1).curveTo(125.9,-0.6,126,0).curveTo(125.9,0.6,125.5,1).curveTo(125.1,1.5,124.5,1.5).closePath().moveTo(106.5,1.5).curveTo(105.8,1.5,105.4,1).curveTo(105,0.6,104.9,0).curveTo(105,-0.6,105.4,-1.1).curveTo(105.8,-1.5,106.5,-1.5).lineTo(112.5,-1.5).curveTo(113.1,-1.5,113.5,-1.1).curveTo(113.9,-0.6,113.9,0).curveTo(113.9,0.6,113.5,1).curveTo(113.1,1.5,112.5,1.5).closePath().moveTo(94.5,1.5).curveTo(93.8,1.5,93.4,1).curveTo(93,0.6,93,0).curveTo(93,-0.6,93.4,-1.1).curveTo(93.8,-1.5,94.5,-1.5).lineTo(100.4,-1.5).curveTo(101.1,-1.5,101.5,-1.1).curveTo(101.9,-0.6,102,0).curveTo(101.9,0.6,101.5,1).curveTo(101.1,1.5,100.4,1.5).closePath().moveTo(82.4,1.5).curveTo(81.8,1.5,81.4,1).curveTo(81,0.6,81,0).curveTo(81,-0.6,81.4,-1.1).curveTo(81.8,-1.5,82.4,-1.5).lineTo(88.5,-1.5).curveTo(89.1,-1.5,89.5,-1.1).curveTo(89.9,-0.6,90,0).curveTo(89.9,0.6,89.5,1).curveTo(89.1,1.5,88.5,1.5).closePath().moveTo(70.5,1.5).curveTo(69.8,1.5,69.4,1).curveTo(69,0.6,68.9,0).curveTo(69,-0.6,69.4,-1.1).curveTo(69.8,-1.5,70.5,-1.5).lineTo(76.5,-1.5).curveTo(77.1,-1.5,77.5,-1.1).curveTo(77.9,-0.6,77.9,0).curveTo(77.9,0.6,77.5,1).curveTo(77.1,1.5,76.5,1.5).closePath().moveTo(58.5,1.5).curveTo(57.8,1.5,57.4,1).curveTo(57,0.6,57,0).curveTo(57,-0.6,57.4,-1.1).curveTo(57.8,-1.5,58.5,-1.5).lineTo(64.4,-1.5).curveTo(65.1,-1.5,65.5,-1.1).curveTo(65.9,-0.6,66,0).curveTo(65.9,0.6,65.5,1).curveTo(65.1,1.5,64.4,1.5).closePath().moveTo(46.4,1.5).curveTo(45.8,1.5,45.4,1).curveTo(45,0.6,45,0).curveTo(45,-0.6,45.4,-1.1).curveTo(45.8,-1.5,46.4,-1.5).lineTo(52.5,-1.5).curveTo(53.1,-1.5,53.5,-1.1).curveTo(53.9,-0.6,54,0).curveTo(53.9,0.6,53.5,1).curveTo(53.1,1.5,52.5,1.5).closePath().moveTo(34.5,1.5).curveTo(33.8,1.5,33.4,1).curveTo(33,0.6,32.9,0).curveTo(33,-0.6,33.4,-1.1).curveTo(33.8,-1.5,34.5,-1.5).lineTo(40.5,-1.5).curveTo(41.1,-1.5,41.5,-1.1).curveTo(41.9,-0.6,41.9,0).curveTo(41.9,0.6,41.5,1).curveTo(41.1,1.5,40.5,1.5).closePath().moveTo(22.5,1.5).curveTo(21.8,1.5,21.4,1).curveTo(21,0.6,21,0).curveTo(21,-0.6,21.4,-1.1).curveTo(21.8,-1.5,22.5,-1.5).lineTo(28.4,-1.5).curveTo(29.1,-1.5,29.5,-1.1).curveTo(29.9,-0.6,30,0).curveTo(29.9,0.6,29.5,1).curveTo(29.1,1.5,28.4,1.5).closePath().moveTo(10.4,1.5).curveTo(9.8,1.5,9.4,1).curveTo(9,0.6,9,0).curveTo(9,-0.6,9.4,-1.1).curveTo(9.8,-1.5,10.4,-1.5).lineTo(16.5,-1.5).curveTo(17.1,-1.5,17.5,-1.1).curveTo(17.9,-0.6,18,0).curveTo(17.9,0.6,17.5,1).curveTo(17.1,1.5,16.5,1.5).closePath().moveTo(-1.5,1.5).curveTo(-2.2,1.5,-2.6,1).curveTo(-3,0.6,-3.1,0).curveTo(-3,-0.6,-2.6,-1.1).curveTo(-2.2,-1.5,-1.5,-1.5).lineTo(4.5,-1.5).curveTo(5.1,-1.5,5.5,-1.1).curveTo(5.9,-0.6,5.9,0).curveTo(5.9,0.6,5.5,1).curveTo(5.1,1.5,4.5,1.5).closePath().moveTo(-13.5,1.5).curveTo(-14.2,1.5,-14.6,1).curveTo(-15,0.6,-15,0).curveTo(-15,-0.6,-14.6,-1.1).curveTo(-14.2,-1.5,-13.5,-1.5).lineTo(-7.6,-1.5).curveTo(-6.9,-1.5,-6.5,-1.1).curveTo(-6.1,-0.6,-6,0).curveTo(-6.1,0.6,-6.5,1).curveTo(-6.9,1.5,-7.6,1.5).closePath().moveTo(-25.6,1.5).curveTo(-26.2,1.5,-26.6,1).curveTo(-27,0.6,-27,0).curveTo(-27,-0.6,-26.6,-1.1).curveTo(-26.2,-1.5,-25.6,-1.5).lineTo(-19.5,-1.5).curveTo(-18.9,-1.5,-18.5,-1.1).curveTo(-18.1,-0.6,-18,0).curveTo(-18.1,0.6,-18.5,1).curveTo(-18.9,1.5,-19.5,1.5).closePath().moveTo(-37.5,1.5).curveTo(-38.2,1.5,-38.6,1).curveTo(-39,0.6,-39.1,0).curveTo(-39,-0.6,-38.6,-1.1).curveTo(-38.2,-1.5,-37.5,-1.5).lineTo(-31.5,-1.5).curveTo(-30.9,-1.5,-30.5,-1.1).curveTo(-30.1,-0.6,-30.1,0).curveTo(-30.1,0.6,-30.5,1).curveTo(-30.9,1.5,-31.5,1.5).closePath().moveTo(-49.5,1.5).curveTo(-50.2,1.5,-50.6,1).curveTo(-51,0.6,-51,0).curveTo(-51,-0.6,-50.6,-1.1).curveTo(-50.2,-1.5,-49.5,-1.5).lineTo(-43.6,-1.5).curveTo(-42.9,-1.5,-42.5,-1.1).curveTo(-42.1,-0.6,-42,0).curveTo(-42.1,0.6,-42.5,1).curveTo(-42.9,1.5,-43.6,1.5).closePath().moveTo(-61.6,1.5).curveTo(-62.2,1.5,-62.6,1).curveTo(-63,0.6,-63,0).curveTo(-63,-0.6,-62.6,-1.1).curveTo(-62.2,-1.5,-61.6,-1.5).lineTo(-55.5,-1.5).curveTo(-54.9,-1.5,-54.5,-1.1).curveTo(-54.1,-0.6,-54,0).curveTo(-54.1,0.6,-54.5,1).curveTo(-54.9,1.5,-55.5,1.5).closePath().moveTo(-73.5,1.5).curveTo(-74.2,1.5,-74.6,1).curveTo(-75,0.6,-75.1,0).curveTo(-75,-0.6,-74.6,-1.1).curveTo(-74.2,-1.5,-73.5,-1.5).lineTo(-67.5,-1.5).curveTo(-66.9,-1.5,-66.5,-1.1).curveTo(-66.1,-0.6,-66.1,0).curveTo(-66.1,0.6,-66.5,1).curveTo(-66.9,1.5,-67.5,1.5).closePath().moveTo(-85.5,1.5).curveTo(-86.2,1.5,-86.6,1).curveTo(-87,0.6,-87,0).curveTo(-87,-0.6,-86.6,-1.1).curveTo(-86.2,-1.5,-85.5,-1.5).lineTo(-79.6,-1.5).curveTo(-78.9,-1.5,-78.5,-1.1).curveTo(-78.1,-0.6,-78,0).curveTo(-78.1,0.6,-78.5,1).curveTo(-78.9,1.5,-79.6,1.5).closePath().moveTo(-97.6,1.5).curveTo(-98.2,1.5,-98.6,1).curveTo(-99,0.6,-99,0).curveTo(-99,-0.6,-98.6,-1.1).curveTo(-98.2,-1.5,-97.6,-1.5).lineTo(-91.5,-1.5).curveTo(-90.9,-1.5,-90.5,-1.1).curveTo(-90.1,-0.6,-90,0).curveTo(-90.1,0.6,-90.5,1).curveTo(-90.9,1.5,-91.5,1.5).closePath().moveTo(-109.5,1.5).curveTo(-110.2,1.5,-110.6,1).curveTo(-111,0.6,-111.1,0).curveTo(-111,-0.6,-110.6,-1.1).curveTo(-110.2,-1.5,-109.5,-1.5).lineTo(-103.5,-1.5).curveTo(-102.9,-1.5,-102.5,-1.1).curveTo(-102.1,-0.6,-102.1,0).curveTo(-102.1,0.6,-102.5,1).curveTo(-102.9,1.5,-103.5,1.5).closePath().moveTo(-121.5,1.5).curveTo(-122.2,1.5,-122.6,1).curveTo(-123,0.6,-123,0).curveTo(-123,-0.6,-122.6,-1.1).curveTo(-122.2,-1.5,-121.5,-1.5).lineTo(-115.6,-1.5).curveTo(-114.9,-1.5,-114.5,-1.1).curveTo(-114.1,-0.6,-114,0).curveTo(-114.1,0.6,-114.5,1).curveTo(-114.9,1.5,-115.6,1.5).closePath().moveTo(-133.6,1.5).curveTo(-134.2,1.5,-134.6,1).curveTo(-135,0.6,-135,0).curveTo(-135,-0.6,-134.6,-1.1).curveTo(-134.2,-1.5,-133.6,-1.5).lineTo(-127.5,-1.5).curveTo(-126.9,-1.5,-126.5,-1.1).curveTo(-126.1,-0.6,-126,0).curveTo(-126.1,0.6,-126.5,1).curveTo(-126.9,1.5,-127.5,1.5).closePath().moveTo(-145.5,1.5).curveTo(-146.2,1.5,-146.6,1).curveTo(-147,0.6,-147.1,0).curveTo(-147,-0.6,-146.6,-1.1).curveTo(-146.2,-1.5,-145.5,-1.5).lineTo(-139.5,-1.5).curveTo(-138.9,-1.5,-138.5,-1.1).curveTo(-138.1,-0.6,-138.1,0).curveTo(-138.1,0.6,-138.5,1).curveTo(-138.9,1.5,-139.5,1.5).closePath().moveTo(-157.5,1.5).curveTo(-158.2,1.5,-158.6,1).curveTo(-159,0.6,-159,0).curveTo(-159,-0.6,-158.6,-1.1).curveTo(-158.2,-1.5,-157.5,-1.5).lineTo(-151.6,-1.5).curveTo(-150.9,-1.5,-150.5,-1.1).curveTo(-150.1,-0.6,-150,0).curveTo(-150.1,0.6,-150.5,1).curveTo(-150.9,1.5,-151.6,1.5).closePath().moveTo(-169.6,1.5).curveTo(-170.2,1.5,-170.6,1).curveTo(-171,0.6,-171,0).curveTo(-171,-0.6,-170.6,-1.1).curveTo(-170.2,-1.5,-169.6,-1.5).lineTo(-163.5,-1.5).curveTo(-162.9,-1.5,-162.5,-1.1).curveTo(-162.1,-0.6,-162,0).curveTo(-162.1,0.6,-162.5,1).curveTo(-162.9,1.5,-163.5,1.5).closePath().moveTo(-181.5,1.5).curveTo(-182.2,1.5,-182.6,1).curveTo(-183,0.6,-183.1,0).curveTo(-183,-0.6,-182.6,-1.1).curveTo(-182.2,-1.5,-181.5,-1.5).lineTo(-175.5,-1.5).curveTo(-174.9,-1.5,-174.5,-1.1).curveTo(-174.1,-0.6,-174.1,0).curveTo(-174.1,0.6,-174.5,1).curveTo(-174.9,1.5,-175.5,1.5).closePath().moveTo(-193.5,1.5).curveTo(-194.2,1.5,-194.6,1).curveTo(-195,0.6,-195,0).curveTo(-195,-0.6,-194.6,-1.1).curveTo(-194.2,-1.5,-193.5,-1.5).lineTo(-187.6,-1.5).curveTo(-186.9,-1.5,-186.5,-1.1).curveTo(-186.1,-0.6,-186,0).curveTo(-186.1,0.6,-186.5,1).curveTo(-186.9,1.5,-187.6,1.5).closePath().moveTo(-205.6,1.5).curveTo(-206.2,1.5,-206.6,1).curveTo(-207,0.6,-207,0).curveTo(-207,-0.6,-206.6,-1.1).curveTo(-206.2,-1.5,-205.6,-1.5).lineTo(-199.5,-1.5).curveTo(-198.9,-1.5,-198.5,-1.1).curveTo(-198.1,-0.6,-198,0).curveTo(-198.1,0.6,-198.5,1).curveTo(-198.9,1.5,-199.5,1.5).closePath().moveTo(-217.5,1.5).curveTo(-218.2,1.5,-218.6,1).curveTo(-219,0.6,-219.1,0).curveTo(-219,-0.6,-218.6,-1.1).curveTo(-218.2,-1.5,-217.5,-1.5).lineTo(-211.5,-1.5).curveTo(-210.9,-1.5,-210.5,-1.1).curveTo(-210.1,-0.6,-210.1,0).curveTo(-210.1,0.6,-210.5,1).curveTo(-210.9,1.5,-211.5,1.5).closePath().moveTo(-229.5,1.5).curveTo(-230.2,1.5,-230.6,1).curveTo(-231,0.6,-231,0).curveTo(-231,-0.6,-230.6,-1.1).curveTo(-230.2,-1.5,-229.5,-1.5).lineTo(-223.6,-1.5).curveTo(-222.9,-1.5,-222.5,-1.1).curveTo(-222.1,-0.6,-222,0).curveTo(-222.1,0.6,-222.5,1).curveTo(-222.9,1.5,-223.6,1.5).closePath().moveTo(-241.6,1.5).curveTo(-242.2,1.5,-242.6,1).curveTo(-243,0.6,-243,0).curveTo(-243,-0.6,-242.6,-1.1).curveTo(-242.2,-1.5,-241.6,-1.5).lineTo(-235.5,-1.5).curveTo(-234.9,-1.5,-234.5,-1.1).curveTo(-234.1,-0.6,-234,0).curveTo(-234.1,0.6,-234.5,1).curveTo(-234.9,1.5,-235.5,1.5).closePath().moveTo(-253.5,1.5).curveTo(-254.2,1.5,-254.6,1).curveTo(-255,0.6,-255.1,0).curveTo(-255,-0.6,-254.6,-1.1).curveTo(-254.2,-1.5,-253.5,-1.5).lineTo(-247.5,-1.5).curveTo(-246.9,-1.5,-246.5,-1.1).curveTo(-246.1,-0.6,-246.1,0).curveTo(-246.1,0.6,-246.5,1).curveTo(-246.9,1.5,-247.5,1.5).closePath().moveTo(-265.5,1.5).curveTo(-266.2,1.5,-266.6,1).curveTo(-267,0.6,-267,0).curveTo(-267,-0.6,-266.6,-1.1).curveTo(-266.2,-1.5,-265.5,-1.5).lineTo(-259.6,-1.5).curveTo(-258.9,-1.5,-258.5,-1.1).curveTo(-258.1,-0.6,-258,0).curveTo(-258.1,0.6,-258.5,1).curveTo(-258.9,1.5,-259.6,1.5).closePath().moveTo(-277.6,1.5).curveTo(-278.2,1.5,-278.6,1).curveTo(-279,0.6,-279,0).curveTo(-279,-0.6,-278.6,-1.1).curveTo(-278.2,-1.5,-277.6,-1.5).lineTo(-271.5,-1.5).curveTo(-270.9,-1.5,-270.5,-1.1).curveTo(-270.1,-0.6,-270,0).curveTo(-270.1,0.6,-270.5,1).curveTo(-270.9,1.5,-271.5,1.5).closePath().moveTo(-289.5,1.5).curveTo(-290.2,1.5,-290.6,1).curveTo(-291,0.6,-291.1,0).curveTo(-291,-0.6,-290.6,-1.1).curveTo(-290.2,-1.5,-289.5,-1.5).lineTo(-283.5,-1.5).curveTo(-282.9,-1.5,-282.5,-1.1).curveTo(-282.1,-0.6,-282.1,0).curveTo(-282.1,0.6,-282.5,1).curveTo(-282.9,1.5,-283.5,1.5).closePath().moveTo(-301.5,1.5).curveTo(-302.2,1.5,-302.6,1).curveTo(-303,0.6,-303,0).curveTo(-303,-0.6,-302.6,-1.1).curveTo(-302.2,-1.5,-301.5,-1.5).lineTo(-295.6,-1.5).curveTo(-294.9,-1.5,-294.5,-1.1).curveTo(-294.1,-0.6,-294,0).curveTo(-294.1,0.6,-294.5,1).curveTo(-294.9,1.5,-295.6,1.5).closePath().moveTo(-313.6,1.5).curveTo(-314.2,1.5,-314.6,1).curveTo(-315,0.6,-315,0).curveTo(-315,-0.6,-314.6,-1.1).curveTo(-314.2,-1.5,-313.6,-1.5).lineTo(-307.5,-1.5).curveTo(-306.9,-1.5,-306.5,-1.1).curveTo(-306.1,-0.6,-306,0).curveTo(-306.1,0.6,-306.5,1).curveTo(-306.9,1.5,-307.5,1.5).closePath().moveTo(-325.5,1.5).curveTo(-326.2,1.5,-326.6,1).curveTo(-327,0.6,-327.1,0).curveTo(-327,-0.6,-326.6,-1.1).curveTo(-326.2,-1.5,-325.5,-1.5).lineTo(-319.5,-1.5).curveTo(-318.9,-1.5,-318.5,-1.1).curveTo(-318.1,-0.6,-318.1,0).curveTo(-318.1,0.6,-318.5,1).curveTo(-318.9,1.5,-319.5,1.5).closePath().moveTo(-337.5,1.5).curveTo(-338.2,1.5,-338.6,1).curveTo(-339,0.6,-339,0).curveTo(-339,-0.6,-338.6,-1.1).curveTo(-338.2,-1.5,-337.5,-1.5).lineTo(-331.6,-1.5).curveTo(-330.9,-1.5,-330.5,-1.1).curveTo(-330.1,-0.6,-330,0).curveTo(-330.1,0.6,-330.5,1).curveTo(-330.9,1.5,-331.6,1.5).closePath().moveTo(-349.6,1.5).curveTo(-350.2,1.5,-350.6,1).curveTo(-351,0.6,-351,0).curveTo(-351,-0.6,-350.6,-1.1).curveTo(-350.2,-1.5,-349.6,-1.5).lineTo(-343.5,-1.5).curveTo(-342.9,-1.5,-342.5,-1.1).curveTo(-342.1,-0.6,-342,0).curveTo(-342.1,0.6,-342.5,1).curveTo(-342.9,1.5,-343.5,1.5).closePath().moveTo(-361.5,1.5).curveTo(-362.2,1.5,-362.6,1).curveTo(-363,0.6,-363.1,0).curveTo(-363,-0.6,-362.6,-1.1).curveTo(-362.2,-1.5,-361.5,-1.5).lineTo(-355.5,-1.5).curveTo(-354.9,-1.5,-354.5,-1.1).curveTo(-354.1,-0.6,-354.1,0).curveTo(-354.1,0.6,-354.5,1).curveTo(-354.9,1.5,-355.5,1.5).closePath().moveTo(-373.5,1.5).curveTo(-374.2,1.5,-374.6,1).curveTo(-375,0.6,-375,0).curveTo(-375,-0.6,-374.6,-1.1).curveTo(-374.2,-1.5,-373.5,-1.5).lineTo(-367.6,-1.5).curveTo(-366.9,-1.5,-366.5,-1.1).curveTo(-366.1,-0.6,-366,0).curveTo(-366.1,0.6,-366.5,1).curveTo(-366.9,1.5,-367.6,1.5).closePath().moveTo(-385.6,1.5).curveTo(-386.2,1.5,-386.6,1).curveTo(-387,0.6,-387,0).curveTo(-387,-0.6,-386.6,-1.1).curveTo(-386.2,-1.5,-385.6,-1.5).lineTo(-379.5,-1.5).curveTo(-378.9,-1.5,-378.5,-1.1).curveTo(-378.1,-0.6,-378,0).curveTo(-378.1,0.6,-378.5,1).curveTo(-378.9,1.5,-379.5,1.5).closePath().moveTo(-397.5,1.5).curveTo(-398.2,1.5,-398.6,1).curveTo(-399,0.6,-399.1,0).curveTo(-399,-0.6,-398.6,-1.1).curveTo(-398.2,-1.5,-397.5,-1.5).lineTo(-391.5,-1.5).curveTo(-390.9,-1.5,-390.5,-1.1).curveTo(-390.1,-0.6,-390.1,0).curveTo(-390.1,0.6,-390.5,1).curveTo(-390.9,1.5,-391.5,1.5).closePath().moveTo(-409.5,1.5).curveTo(-410.2,1.5,-410.6,1).curveTo(-411,0.6,-411,0).curveTo(-411,-0.6,-410.6,-1.1).curveTo(-410.2,-1.5,-409.5,-1.5).lineTo(-403.6,-1.5).curveTo(-402.9,-1.5,-402.5,-1.1).curveTo(-402.1,-0.6,-402,0).curveTo(-402.1,0.6,-402.5,1).curveTo(-402.9,1.5,-403.6,1.5).closePath().moveTo(-421.6,1.5).curveTo(-422.2,1.5,-422.6,1).curveTo(-423,0.6,-423,0).curveTo(-423,-0.6,-422.6,-1.1).curveTo(-422.2,-1.5,-421.6,-1.5).lineTo(-415.5,-1.5).curveTo(-414.9,-1.5,-414.5,-1.1).curveTo(-414.1,-0.6,-414,0).curveTo(-414.1,0.6,-414.5,1).curveTo(-414.9,1.5,-415.5,1.5).closePath().moveTo(-433.5,1.5).curveTo(-434.2,1.5,-434.6,1).curveTo(-435,0.6,-435.1,0).curveTo(-435,-0.6,-434.6,-1.1).curveTo(-434.2,-1.5,-433.5,-1.5).lineTo(-427.5,-1.5).curveTo(-426.9,-1.5,-426.5,-1.1).curveTo(-426.1,-0.6,-426.1,0).curveTo(-426.1,0.6,-426.5,1).curveTo(-426.9,1.5,-427.5,1.5).closePath().moveTo(-445.5,1.5).curveTo(-446.2,1.5,-446.6,1).curveTo(-447,0.6,-447,0).curveTo(-447,-0.6,-446.6,-1.1).curveTo(-446.2,-1.5,-445.5,-1.5).lineTo(-439.6,-1.5).curveTo(-438.9,-1.5,-438.5,-1.1).curveTo(-438.1,-0.6,-438,0).curveTo(-438.1,0.6,-438.5,1).curveTo(-438.9,1.5,-439.6,1.5).closePath().moveTo(-457.6,1.5).curveTo(-458.2,1.5,-458.6,1).curveTo(-459,0.6,-459,0).curveTo(-459,-0.6,-458.6,-1.1).curveTo(-458.2,-1.5,-457.6,-1.5).lineTo(-451.5,-1.5).curveTo(-450.9,-1.5,-450.5,-1.1).curveTo(-450.1,-0.6,-450,0).curveTo(-450.1,0.6,-450.5,1).curveTo(-450.9,1.5,-451.5,1.5).closePath().moveTo(-469.5,1.5).curveTo(-470.2,1.5,-470.6,1).curveTo(-471,0.6,-471.1,0).curveTo(-471,-0.6,-470.6,-1.1).curveTo(-470.2,-1.5,-469.5,-1.5).lineTo(-463.5,-1.5).curveTo(-462.9,-1.5,-462.5,-1.1).curveTo(-462.1,-0.6,-462.1,0).curveTo(-462.1,0.6,-462.5,1).curveTo(-462.9,1.5,-463.5,1.5).closePath().moveTo(-481.5,1.5).curveTo(-482.2,1.5,-482.6,1).curveTo(-483,0.6,-483,0).curveTo(-483,-0.6,-482.6,-1.1).curveTo(-482.2,-1.5,-481.5,-1.5).lineTo(-475.6,-1.5).curveTo(-474.9,-1.5,-474.5,-1.1).curveTo(-474.1,-0.6,-474,0).curveTo(-474.1,0.6,-474.5,1).curveTo(-474.9,1.5,-475.6,1.5).closePath().moveTo(-493.6,1.5).curveTo(-494.2,1.5,-494.6,1).curveTo(-495,0.6,-495,0).curveTo(-495,-0.6,-494.6,-1.1).curveTo(-494.2,-1.5,-493.6,-1.5).lineTo(-487.5,-1.5).curveTo(-486.9,-1.5,-486.5,-1.1).curveTo(-486.1,-0.6,-486,0).curveTo(-486.1,0.6,-486.5,1).curveTo(-486.9,1.5,-487.5,1.5).closePath().moveTo(-505.5,1.5).curveTo(-506.2,1.5,-506.6,1).curveTo(-507,0.6,-507.1,0).curveTo(-507,-0.6,-506.6,-1.1).curveTo(-506.2,-1.5,-505.5,-1.5).lineTo(-499.5,-1.5).curveTo(-498.9,-1.5,-498.5,-1.1).curveTo(-498.1,-0.6,-498.1,0).curveTo(-498.1,0.6,-498.5,1).curveTo(-498.9,1.5,-499.5,1.5).closePath().moveTo(-517.5,1.5).curveTo(-518.2,1.5,-518.6,1).curveTo(-519,0.6,-519,0).curveTo(-519,-0.6,-518.6,-1.1).curveTo(-518.2,-1.5,-517.5,-1.5).lineTo(-511.6,-1.5).curveTo(-510.9,-1.5,-510.5,-1.1).curveTo(-510.1,-0.6,-510,0).curveTo(-510.1,0.6,-510.5,1).curveTo(-510.9,1.5,-511.6,1.5).closePath().moveTo(-529.6,1.5).curveTo(-530.2,1.5,-530.6,1).curveTo(-531,0.6,-531,0).curveTo(-531,-0.6,-530.6,-1.1).curveTo(-530.2,-1.5,-529.6,-1.5).lineTo(-523.5,-1.5).curveTo(-522.9,-1.5,-522.5,-1.1).curveTo(-522.1,-0.6,-522,0).curveTo(-522.1,0.6,-522.5,1).curveTo(-522.9,1.5,-523.5,1.5).closePath().moveTo(-541.5,1.5).curveTo(-542.2,1.5,-542.6,1).curveTo(-543,0.6,-543.1,0).curveTo(-543,-0.6,-542.6,-1.1).curveTo(-542.2,-1.5,-541.5,-1.5).lineTo(-535.5,-1.5).curveTo(-534.9,-1.5,-534.5,-1.1).curveTo(-534.1,-0.6,-534.1,0).curveTo(-534.1,0.6,-534.5,1).curveTo(-534.9,1.5,-535.5,1.5).closePath().moveTo(-553.5,1.5).curveTo(-554.2,1.5,-554.6,1).curveTo(-555,0.6,-555,0).curveTo(-555,-0.6,-554.6,-1.1).curveTo(-554.2,-1.5,-553.5,-1.5).lineTo(-547.6,-1.5).curveTo(-546.9,-1.5,-546.5,-1.1).curveTo(-546.1,-0.6,-546,0).curveTo(-546.1,0.6,-546.5,1).curveTo(-546.9,1.5,-547.6,1.5).closePath().moveTo(-565.6,1.5).curveTo(-566.2,1.5,-566.6,1).curveTo(-567,0.6,-567,0).curveTo(-567,-0.6,-566.6,-1.1).curveTo(-566.2,-1.5,-565.6,-1.5).lineTo(-559.5,-1.5).curveTo(-558.9,-1.5,-558.5,-1.1).curveTo(-558.1,-0.6,-558,0).curveTo(-558.1,0.6,-558.5,1).curveTo(-558.9,1.5,-559.5,1.5).closePath().moveTo(-577.5,1.5).curveTo(-578.2,1.5,-578.6,1).curveTo(-579,0.6,-579.1,0).curveTo(-579,-0.6,-578.6,-1.1).curveTo(-578.2,-1.5,-577.5,-1.5).lineTo(-571.5,-1.5).curveTo(-570.9,-1.5,-570.5,-1.1).curveTo(-570.1,-0.6,-570.1,0).curveTo(-570.1,0.6,-570.5,1).curveTo(-570.9,1.5,-571.5,1.5).closePath().moveTo(-589.5,1.5).curveTo(-590.2,1.5,-590.6,1).curveTo(-591,0.6,-591,0).curveTo(-591,-0.6,-590.6,-1.1).curveTo(-590.2,-1.5,-589.5,-1.5).lineTo(-583.6,-1.5).curveTo(-582.9,-1.5,-582.5,-1.1).curveTo(-582.1,-0.6,-582,0).curveTo(-582.1,0.6,-582.5,1).curveTo(-582.9,1.5,-583.6,1.5).closePath().moveTo(-601.6,1.5).curveTo(-602.2,1.5,-602.6,1).curveTo(-603,0.6,-603,0).curveTo(-603,-0.6,-602.6,-1.1).curveTo(-602.2,-1.5,-601.6,-1.5).lineTo(-595.5,-1.5).curveTo(-594.9,-1.5,-594.5,-1.1).curveTo(-594.1,-0.6,-594,0).curveTo(-594.1,0.6,-594.5,1).curveTo(-594.9,1.5,-595.5,1.5).closePath();
	this.shape_1.setTransform(606.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_2.setTransform(1208.9,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_3.setTransform(1192.8,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_4.setTransform(1176.9,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_5.setTransform(1160.8,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_6.setTransform(1144.9,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_7.setTransform(1128.8,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_8.setTransform(1112.9,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_9.setTransform(1096.8,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_10.setTransform(1080.9,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_11.setTransform(1064.8,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_12.setTransform(1048.9,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_13.setTransform(1032.8,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_14.setTransform(1016.9,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_15.setTransform(1000.8,11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_16.setTransform(984.9,10.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_17.setTransform(968.8,11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_18.setTransform(952.9,10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_19.setTransform(936.8,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_20.setTransform(920.9,10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_21.setTransform(904.8,11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_22.setTransform(888.9,10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_23.setTransform(872.8,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_24.setTransform(856.9,10.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_25.setTransform(840.8,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_26.setTransform(824.9,10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_27.setTransform(808.8,11.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_28.setTransform(792.9,10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_29.setTransform(776.8,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_30.setTransform(760.9,10.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_31.setTransform(744.8,11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_32.setTransform(728.9,10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_33.setTransform(712.8,11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_34.setTransform(696.9,10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_35.setTransform(680.8,11.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_36.setTransform(664.9,10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_37.setTransform(648.8,11.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_38.setTransform(632.9,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_39.setTransform(616.8,11.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_40.setTransform(600.9,10.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_41.setTransform(584.8,11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_42.setTransform(568.9,10.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_43.setTransform(552.8,11.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_44.setTransform(536.9,10.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_45.setTransform(520.8,11.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_46.setTransform(504.9,10.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_47.setTransform(488.8,11.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_48.setTransform(472.9,10.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_49.setTransform(456.8,11.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_50.setTransform(440.9,10.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_51.setTransform(424.8,11.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_52.setTransform(408.9,10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_53.setTransform(392.8,11.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_54.setTransform(376.9,10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_55.setTransform(360.8,11.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_56.setTransform(344.9,10.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_57.setTransform(328.8,11.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_58.setTransform(312.9,10.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_59.setTransform(296.8,11.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_60.setTransform(280.9,10.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_61.setTransform(264.8,11.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_62.setTransform(248.9,10.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_63.setTransform(232.8,11.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,-0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_64.setTransform(216.9,10.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_65.setTransform(200.8,11.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_66.setTransform(184.9,10.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_67.setTransform(168.8,11.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.5,-3,-2.5,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.6,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_68.setTransform(152.9,10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_69.setTransform(136.8,11.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.5,-3,-2.6,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3.1,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_70.setTransform(120.9,10.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_71.setTransform(104.8,11.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.3,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.7,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.6,-2.2,-3.5,-1.5).closePath();
	this.shape_72.setTransform(88.9,10.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.6,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_73.setTransform(72.8,11.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,3.1).curveTo(-4.2,2.7,-4.9,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.1,-1.5).curveTo(-4.8,-2.2,-4.2,-2.6).curveTo(-3.4,-3,-2.5,-3.3).curveTo(-1.6,-3.5,-0,-3.5).curveTo(1.9,-3.5,3,-3.1).curveTo(4.2,-2.8,4.8,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,-0,3.5).curveTo(-1.9,3.5,-3.1,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,-0,2.1).curveTo(2.6,2.1,3.6,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.6,-2.2,-0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_74.setTransform(56.9,10.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-4,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_75.setTransform(40.8,11.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3,3.1).curveTo(-4.2,2.7,-4.8,1.9).curveTo(-5.5,1.2,-5.5,0).curveTo(-5.5,-0.9,-5.2,-1.5).curveTo(-4.8,-2.2,-4.1,-2.6).curveTo(-3.4,-3,-2.6,-3.3).curveTo(-1.6,-3.5,0,-3.5).curveTo(1.9,-3.5,3.1,-3.1).curveTo(4.2,-2.8,4.9,-2).curveTo(5.5,-1.2,5.5,0).curveTo(5.5,1.5,4.4,2.4).curveTo(3,3.5,0,3.5).curveTo(-1.9,3.5,-3,3.1).closePath().moveTo(-3.5,-1.5).curveTo(-4.4,-1,-4.4,0).curveTo(-4.4,0.9,-3.6,1.4).curveTo(-2.7,2.1,0,2.1).curveTo(2.6,2.1,3.5,1.5).curveTo(4.4,0.9,4.4,0).curveTo(4.4,-1,3.5,-1.5).curveTo(2.7,-2.2,0,-2.2).curveTo(-2.7,-2.2,-3.5,-1.5).closePath();
	this.shape_76.setTransform(24.9,10.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,2).curveTo(-3.2,0.9,-3.9,0.1).curveTo(-4.7,-0.8,-5.4,-1.1).lineTo(-5.4,-2).lineTo(5.4,-2).lineTo(5.4,-0.6).lineTo(-3,-0.6).curveTo(-2.5,-0.2,-2.1,0.6).lineTo(-1.4,2).closePath();
	this.shape_77.setTransform(8.8,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.5,1220.8,23.8);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(39.9,14.2).curveTo(37.7,14.2,36.8,12.9).curveTo(36.4,12.3,36.4,10.5).lineTo(36.4,4.2).curveTo(36.4,0.9,39.9,0.9).lineTo(62.3,0.9).curveTo(64.3,0.9,65.1,1.6).curveTo(65.8,2.1,65.9,2.8).lineTo(66,4.2).lineTo(66,11.1).curveTo(66.1,12.4,65.5,13.1).curveTo(65,13.8,64,14).curveTo(63.6,14.2,62.6,14.2).closePath().moveTo(39.5,4.9).lineTo(39.5,10.2).curveTo(39.5,11,40.6,11).lineTo(62,11).curveTo(62.6,11,62.9,10.7).curveTo(63,10.5,63,9.9).lineTo(63,5).curveTo(63,4,62,4).lineTo(40.5,4).curveTo(39.5,4,39.5,4.9).closePath().moveTo(15.7,14.2).lineTo(15.7,5.7).lineTo(1.9,5.7).lineTo(1.9,2.6).lineTo(15.7,2.6).lineTo(15.7,-11.1).lineTo(1.9,-11.1).lineTo(1.9,-14.1).lineTo(32.6,-14.1).lineTo(32.6,-11.1).lineTo(18.8,-11.1).lineTo(18.8,2.6).lineTo(32.6,2.6).lineTo(32.6,5.7).lineTo(18.8,5.7).lineTo(18.8,14.2).closePath().moveTo(-63,14.2).lineTo(-63,-3.9).lineTo(-66.4,-3.9).lineTo(-66.4,-7).lineTo(-63,-7).lineTo(-63,-14.1).lineTo(-59.9,-14.1).lineTo(-59.9,-7).lineTo(-56.5,-7).lineTo(-56.5,-3.9).lineTo(-59.9,-3.9).lineTo(-59.9,14.2).closePath().moveTo(-8.8,14.1).lineTo(-8.8,11.1).lineTo(-6.5,11.1).curveTo(-5.7,11.1,-5.1,10.5).curveTo(-4.6,10,-4.5,9.2).lineTo(-4.5,-8.8).curveTo(-4.6,-10,-5.3,-10.5).curveTo(-5.9,-10.9,-7.1,-10.9).lineTo(-26.4,-10.9).curveTo(-27.8,-10.9,-28.3,-10.4).curveTo(-29,-9.9,-28.9,-8.8).lineTo(-28.9,14.1).lineTo(-32,14.1).lineTo(-32,-9.3).curveTo(-32,-11.6,-30.8,-12.7).curveTo(-29.5,-14,-27.4,-14).lineTo(-6.4,-14).curveTo(-4.1,-14,-2.8,-12.9).curveTo(-1.5,-11.7,-1.5,-9.6).lineTo(-1.5,9.5).curveTo(-1.5,11.3,-2.1,12.3).curveTo(-3,13.5,-4.3,13.9).curveTo(-4.9,14.1,-6.7,14.1).closePath().moveTo(-47.2,14.1).lineTo(-47.2,11).lineTo(-45,11).curveTo(-44.3,11,-44.1,10.8).curveTo(-43.8,10.5,-43.8,10).lineTo(-43.8,-6.9).curveTo(-43.8,-7.7,-44.1,-7.9).curveTo(-44.3,-8.2,-45,-8.2).lineTo(-47.2,-8.2).lineTo(-47.8,-0.2).curveTo(-48.2,5.2,-50.1,9).curveTo(-51.5,12,-53.7,13.3).curveTo(-54.4,13.7,-55.8,14.1).lineTo(-55.8,11).curveTo(-53.7,9.8,-52.5,6.7).curveTo(-51.2,3.7,-50.9,-0.6).lineTo(-50.3,-8.2).lineTo(-55.5,-8.2).lineTo(-55.5,-11.3).lineTo(-50.1,-11.3).lineTo(-49.8,-14.2).lineTo(-46.7,-14.2).lineTo(-46.9,-11.3).lineTo(-44.4,-11.3).curveTo(-42.9,-11.3,-42.3,-10.9).curveTo(-41.3,-10.4,-40.9,-9.5).curveTo(-40.7,-9,-40.7,-7.7).lineTo(-40.7,11.1).curveTo(-40.7,12.3,-41.3,13).curveTo(-42.2,14.1,-43.7,14.1).closePath().moveTo(-38.6,11.2).curveTo(-39.4,10.2,-39.4,8.5).lineTo(-39.4,-8.2).lineTo(-36.3,-8.2).lineTo(-36.3,8.6).curveTo(-36.3,9.5,-35.6,9.5).lineTo(-35.6,12.6).curveTo(-37.4,12.5,-38.6,11.2).closePath().moveTo(-23.1,10.9).curveTo(-25.3,10.9,-26,10.3).curveTo(-26.9,9.7,-27,8.8).curveTo(-27.2,8.3,-27.2,7.1).lineTo(-27.2,0.6).curveTo(-27.2,-1.2,-26.4,-2).curveTo(-25.6,-2.9,-23.6,-2.9).lineTo(-10.2,-2.9).curveTo(-8.4,-2.9,-7.5,-2.2).curveTo(-6.6,-1.5,-6.5,-0.3).lineTo(-6.5,7.7).curveTo(-6.5,9,-7.1,9.7).curveTo(-7.9,10.9,-9.6,10.9).closePath().moveTo(-23.8,0.5).curveTo(-24.1,0.7,-24.1,1.4).lineTo(-24.1,6.7).curveTo(-24.1,7.3,-23.6,7.6).curveTo(-23.5,7.7,-22.7,7.7).lineTo(-10.7,7.7).curveTo(-9.6,7.7,-9.6,6.7).lineTo(-9.6,1.6).curveTo(-9.6,0.6,-10,0.4).curveTo(-10.2,0.2,-11.3,0.2).lineTo(-22.7,0.2).curveTo(-23.5,0.2,-23.8,0.5).closePath().moveTo(-57.8,4.7).curveTo(-56.4,3.4,-55.7,1.2).curveTo(-55.4,0.1,-55.1,-2.6).lineTo(-54.9,-5.3).lineTo(-52,-5.3).lineTo(-52.4,-0.4).curveTo(-52.9,2.8,-54.3,5.1).curveTo(-55.6,7.3,-57.8,8.2).closePath().moveTo(24.2,-1.8).curveTo(25.6,-2,26,-2.6).curveTo(26.5,-3.3,26.7,-5).lineTo(27.1,-9.5).lineTo(30.3,-9.5).lineTo(29.7,-4.5).curveTo(29.5,-2.6,29.1,-1.7).curveTo(28.4,-0.2,26.7,0.7).curveTo(25.6,1.2,24.2,1.2).closePath().moveTo(6.4,-0.4).curveTo(5.2,-1.7,5,-3.8).lineTo(4.4,-9.5).lineTo(7.4,-9.5).lineTo(7.9,-5.3).curveTo(8.1,-3.1,8.7,-2.5).curveTo(9.2,-1.9,10.2,-1.8).lineTo(10.2,1.2).curveTo(7.9,1.1,6.4,-0.4).closePath().moveTo(40.6,-1.7).curveTo(38.1,-1.7,37.1,-2.4).curveTo(35.9,-3.3,36,-4.8).curveTo(36,-5.7,36.4,-7).lineTo(38.9,-14).lineTo(42.5,-14).lineTo(39.7,-6.6).lineTo(39.6,-5.8).curveTo(39.6,-4.8,41.1,-4.8).lineTo(61.2,-4.8).curveTo(63.2,-4.8,63.1,-6.3).lineTo(63,-7).lineTo(61.8,-10.9).lineTo(64.9,-10.9).lineTo(65.7,-8.4).curveTo(66.4,-6.1,66.4,-5.4).curveTo(66.4,-3.6,64.6,-2.5).curveTo(63.2,-1.7,60.5,-1.7).closePath().moveTo(-27.2,-5.1).lineTo(-27.2,-8.2).lineTo(-6.5,-8.2).lineTo(-6.5,-5.1).closePath();
	this.shape.setTransform(67.6,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,1,132.8,28.4);


(lib.vect3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(42,311.9).curveTo(42.6,307.1,44.8,296.6).curveTo(46.7,287.2,49.4,275.3).curveTo(51.9,264.2,54.4,255.1).curveTo(56.9,245.8,58.3,242.3).curveTo(61.9,233.1,70.3,222.5).curveTo(72.3,220.6,80.3,211.1).lineTo(99.8,188.4).curveTo(109.5,177.2,125.7,159).curveTo(138,145.1,154.1,126.7).curveTo(191.6,84.5,230,41.6).lineTo(305.1,108.3).curveTo(256.5,163.4,229.2,194.1).curveTo(216,209.3,200.9,226.4).curveTo(188.1,240.8,175,255.1).lineTo(155.8,276).curveTo(148.4,284.2,147,285.6).curveTo(140.6,294.1,129.2,299.8).curveTo(124.3,303.3,114.3,307.6).curveTo(104.9,311.6,93.4,316.1).curveTo(81.7,320.6,72.8,323.6).curveTo(63.2,326.7,58.3,327.5).curveTo(55.4,328,53.1,328).curveTo(40.2,328,42,311.9).closePath().moveTo(-268.7,295.5).curveTo(-287.2,295.5,-303.5,288.8).curveTo(-319.7,282.1,-331.8,270).curveTo(-343.8,258.1,-350.6,241.6).curveTo(-357.4,225.3,-357.4,206.2).lineTo(-357.4,-238.6).curveTo(-357.4,-257.1,-350.6,-273.4).curveTo(-343.9,-289.7,-331.8,-301.8).curveTo(-319.7,-313.8,-303.5,-320.9).curveTo(-287.1,-328,-268.7,-328).lineTo(266.1,-328).curveTo(284.5,-328,300.9,-320.9).curveTo(317.1,-313.8,329.3,-301.8).curveTo(341.3,-289.8,348.4,-273.4).curveTo(355.5,-257,355.5,-238.6).lineTo(355.5,-108.1).lineTo(266.1,-107.4).curveTo(264.7,-125.2,252.3,-137.5).curveTo(240,-149.9,221.4,-149.9).lineTo(-223.3,-149.9).curveTo(-242.5,-149.9,-255.6,-136.8).curveTo(-268.7,-123.7,-268.7,-105.3).lineTo(-268.7,161.5).curveTo(-268.7,179.9,-255.6,193).curveTo(-242.5,206.2,-223.3,206.2).lineTo(-46.7,206.2).lineTo(-46.7,295.5).closePath().moveTo(257.6,11.8).curveTo(261.3,7.5,267.5,1.5).curveTo(273.3,-3.9,277.5,-8.1).curveTo(287.5,-18,298.8,-16.9).curveTo(310.1,-15.9,317.9,-12.3).curveTo(326.3,-8.8,336.4,0.8).curveTo(346.3,10.4,352,21.7).curveTo(356.2,28.1,357.3,38).curveTo(358.3,48,349.8,57.9).curveTo(342.1,67.7,337.1,72.8).lineTo(331.4,78.5).closePath();
	this.shape.setTransform(18.5,17,0.052,0.052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,37,34);


(lib.vect2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(66.6,380.2).curveTo(31.3,370,0,350.6).curveTo(-31.3,369.9,-66.6,380.1).curveTo(-103,390.7,-141.2,390.7).curveTo(-195.8,390.7,-245.7,369.6).curveTo(-293.8,349.2,-331,312.1).curveTo(-368.1,274.9,-388.5,226.8).curveTo(-409.6,176.9,-409.6,122.3).curveTo(-409.6,46.8,-370.5,-17.3).curveTo(-332.4,-79.6,-268.2,-114.3).lineTo(-268.4,-122.3).curveTo(-268.4,-176.9,-247.3,-226.7).curveTo(-227,-274.9,-189.8,-312).curveTo(-152.6,-349.2,-104.5,-369.6).curveTo(-54.6,-390.7,0,-390.7).curveTo(54.6,-390.7,104.5,-369.6).curveTo(152.7,-349.2,189.8,-312).curveTo(227,-274.9,247.3,-226.7).curveTo(268.5,-176.8,268.5,-122.2).curveTo(268.5,-118.2,268.3,-114.2).curveTo(332.5,-79.6,370.5,-17.3).curveTo(409.6,46.8,409.6,122.3).curveTo(409.6,176.9,388.5,226.8).curveTo(368.1,274.9,331,312.1).curveTo(293.8,349.2,245.7,369.6).curveTo(195.8,390.7,141.2,390.7).curveTo(102.9,390.7,66.6,380.2).closePath().moveTo(212.1,42.4).curveTo(177.1,87.3,127.1,114.3).curveTo(127.3,118.3,127.3,122.3).curveTo(127.3,178.6,104.9,229.8).curveTo(83.2,279.2,44,316.6).curveTo(49.7,319.5,56.6,322.5).curveTo(97.2,339.5,141.2,339.5).curveTo(185.2,339.5,225.8,322.5).curveTo(264.8,305.9,294.8,275.9).curveTo(325,245.6,341.3,206.8).curveTo(358.3,166.4,358.3,122.3).curveTo(358.3,78,341.3,37.7).curveTo(324.7,-1.3,294.7,-31.3).curveTo(279,-47,260.9,-59).curveTo(247.4,-3.2,212.1,42.4).closePath().moveTo(-294.8,-31.3).curveTo(-324.8,-1.3,-341.3,37.7).curveTo(-358.4,78.3,-358.4,122.3).curveTo(-358.4,166.3,-341.3,206.8).curveTo(-324.8,245.7,-294.8,275.9).curveTo(-264.8,305.9,-225.8,322.5).curveTo(-185.2,339.5,-141.2,339.5).curveTo(-97.2,339.5,-56.6,322.5).curveTo(-49.6,319.4,-44.1,316.6).curveTo(-83.3,279.2,-105,229.8).curveTo(-127.4,178.6,-127.4,122.3).lineTo(-127.2,114.3).curveTo(-177.2,87.3,-212.1,42.4).curveTo(-247.5,-3.2,-261,-59).curveTo(-279.3,-46.8,-294.8,-31.3).closePath().moveTo(-59,206.8).curveTo(-42.5,245.9,-12.5,275.9).curveTo(-7.2,281.1,0,287.4).curveTo(7.5,280.9,12.5,275.9).curveTo(42.5,245.9,59,206.8).curveTo(73.5,172.6,75.7,135.4).curveTo(38.9,146.2,0,146.2).curveTo(-38.9,146.2,-75.7,135.4).curveTo(-73.5,172.6,-59,206.8).closePath().moveTo(-12.5,-31.3).curveTo(-42.4,-1.5,-59,37.7).curveTo(-68.2,59.1,-72.5,82.6).curveTo(-37.6,95,0,95).curveTo(37.6,95,72.5,82.6).curveTo(68.2,59.1,59,37.7).curveTo(42.5,-1.3,12.5,-31.3).curveTo(6.8,-37.1,0,-42.8).curveTo(-6.3,-37.4,-12.5,-31.3).closePath().moveTo(-213.6,-82.5).curveTo(-209.3,-59.1,-200.2,-37.6).curveTo(-183.7,1.3,-153.6,31.4).curveTo(-138.1,46.9,-119.8,59.1).curveTo(-110.7,21.2,-91.1,-12.5).curveTo(-71.8,-45.6,-43.9,-72).curveTo(-51,-75.5,-56.6,-77.9).curveTo(-97,-94.9,-141.1,-94.9).curveTo(-178.8,-94.9,-213.6,-82.5).closePath().moveTo(56.6,-77.9).curveTo(49.7,-75,44,-72.1).curveTo(71.8,-45.6,91.1,-12.5).curveTo(110.7,21.2,119.8,59).curveTo(138,47,153.7,31.3).curveTo(183.7,1.3,200.2,-37.7).curveTo(209.4,-59.1,213.7,-82.6).curveTo(178.8,-95,141.2,-95).curveTo(97,-95,56.6,-77.9).closePath().moveTo(-66.6,-135.7).curveTo(-31.4,-125.5,-0.1,-106.1).curveTo(31.3,-125.5,66.5,-135.6).curveTo(102.9,-146.2,141.1,-146.2).curveTo(180,-146.2,216.8,-135.4).curveTo(214.7,-172.5,200.2,-206.8).curveTo(183.7,-245.9,153.6,-275.9).curveTo(123.6,-305.9,84.6,-322.5).curveTo(44,-339.5,0,-339.5).curveTo(-44.1,-339.5,-84.6,-322.4).curveTo(-123.5,-305.9,-153.6,-275.8).curveTo(-183.7,-245.7,-200.2,-206.7).curveTo(-214.5,-172.9,-217,-135.4).curveTo(-180.2,-146.2,-141.3,-146.2).curveTo(-103,-146.2,-66.6,-135.7).closePath();
	this.shape.setTransform(26.7,25.5,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.5,51);


(lib.vect1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-325.8,335.9).curveTo(-339.3,335.9,-348.9,326.4).curveTo(-358.4,316.9,-358.4,303.4).lineTo(-358.4,-184).curveTo(-358.4,-197.5,-348.9,-207).curveTo(-339.3,-216.5,-325.8,-216.5).lineTo(-119.3,-216.5).curveTo(-118,-242.2,-107.5,-264.6).curveTo(-97.4,-286.2,-80,-302.4).curveTo(-62.8,-318.4,-40.5,-327.1).curveTo(-17.8,-335.9,7.4,-335.9).curveTo(32.5,-335.9,55.3,-327.1).curveTo(77.5,-318.4,94.8,-302.4).curveTo(112.2,-286.2,122.3,-264.6).curveTo(132.8,-242.2,134.1,-216.5).lineTo(325.7,-216.5).curveTo(339.3,-216.5,348.8,-207).curveTo(358.4,-197.5,358.4,-184).lineTo(358.4,303.4).curveTo(358.4,316.9,348.9,326.4).curveTo(339.3,335.9,325.8,335.9).closePath().moveTo(-297.6,276.8).lineTo(298.6,276.8).lineTo(298.6,22.3).lineTo(108.7,22.3).lineTo(108.7,72.6).lineTo(108.8,72.6).lineTo(108.8,115.3).lineTo(-91.2,115.3).lineTo(-91.2,72.7).lineTo(-91.2,72.7).lineTo(-91.2,22.3).lineTo(-297.6,22.3).closePath().moveTo(-44.7,74.3).lineTo(59.4,74.3).lineTo(59.4,22.3).lineTo(-44.7,22.3).closePath().moveTo(-294.4,-44.8).lineTo(297.6,-44.8).lineTo(297.6,-163.2).lineTo(-294.4,-163.2).closePath().moveTo(77.6,-216.6).curveTo(75.7,-249.3,56.3,-266.8).curveTo(37.1,-284,3.9,-284).curveTo(-29.3,-284,-48.4,-266.8).curveTo(-67.9,-249.3,-69.7,-216.6).lineTo(77.6,-216.6).lineTo(77.6,-216.6).closePath();
	this.shape.setTransform(14,13.4,0.042,0.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-0.7,30.1,28.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.9,5.8).lineTo(4,5.9).lineTo(4.9,5.9).curveTo(5.2,5.8,5.4,5.6).curveTo(5.6,5.2,5.6,4.8).lineTo(5.6,-6.1).lineTo(-5.6,-6.1).lineTo(-5.6,8.3).lineTo(-7.9,8.3).lineTo(-7.9,-8.3).lineTo(7.9,-8.3).lineTo(7.9,5.2).curveTo(7.9,6.7,7.3,7.5).curveTo(6.5,8.2,5.3,8.3).lineTo(2.4,8.3).lineTo(1.9,5.8).closePath().moveTo(-4.1,6).lineTo(-4.1,-1.3).lineTo(4,-1.3).lineTo(4,4.8).lineTo(-1.9,4.8).lineTo(-1.9,6).closePath().moveTo(-1.9,2.9).lineTo(1.7,2.9).lineTo(1.7,0.7).lineTo(-1.9,0.7).closePath().moveTo(-4.7,-2.6).lineTo(-4.7,-4.6).lineTo(4.7,-4.6).lineTo(4.7,-2.6).closePath();
	this.shape.setTransform(26.1,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.3,6.8).curveTo(-0.2,3.5,-0.1,-3.4).lineTo(-3,-3.4).lineTo(-3,-5.7).lineTo(-0,-5.7).lineTo(-0,-8.7).lineTo(2.4,-8.7).lineTo(2.3,-5.7).lineTo(6.8,-5.7).lineTo(6.7,-1.6).lineTo(8.7,0).lineTo(8.2,2.9).lineTo(6.7,1.3).lineTo(6.6,5.2).curveTo(6.6,6.6,5.9,7.4).curveTo(5.3,8.1,4.3,8.2).lineTo(1.4,8.3).lineTo(0.8,5.9).lineTo(2.5,6).curveTo(3.8,6,4.1,5.4).curveTo(4.3,4.8,4.4,-3.4).lineTo(2.3,-3.4).curveTo(2.1,4.7,-2.4,8.7).lineTo(-4.3,6.8).closePath().moveTo(-7.2,8.5).lineTo(-7.2,-1.9).lineTo(-8.7,-1.9).lineTo(-8.7,-4).lineTo(-7.2,-4).lineTo(-7.2,-8.6).lineTo(-5,-8.6).lineTo(-5,-4).lineTo(-3.5,-4).lineTo(-3.5,-1.9).lineTo(-5,-1.9).lineTo(-5,8.5).closePath().moveTo(-4.4,2.2).curveTo(-3.5,0,-2.8,-2.3).lineTo(-0.9,-1.9).curveTo(-1.6,0.6,-2.4,2.9).lineTo(-4.4,2.2).closePath();
	this.shape_1.setTransform(8.2,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,6.7).curveTo(-4.7,5.7,-3.3,3.6).lineTo(-8.1,3.6).lineTo(-8.1,1.4).lineTo(-2.6,1.4).lineTo(-2.3,-0.2).lineTo(0.2,-0.2).lineTo(-0.1,1.4).lineTo(7.4,1.4).lineTo(7.1,5.5).curveTo(7,6.5,6.5,7.1).curveTo(6,7.8,5.1,8.1).curveTo(4.2,8.4,1.7,8.4).lineTo(-0.2,8.4).curveTo(-0.3,7.4,-0.7,6).lineTo(2.7,6.1).curveTo(3.4,6.2,3.9,5.9).curveTo(4.3,5.7,4.4,5.3).lineTo(4.5,3.6).lineTo(-0.6,3.6).curveTo(-1.9,7.3,-7.1,8.7).lineTo(-8.7,6.7).closePath().moveTo(-8.7,-1.5).curveTo(-5.4,-1.8,-2.8,-2.4).curveTo(-4,-3.2,-4.9,-4.1).curveTo(-6,-3.3,-7.1,-2.5).lineTo(-8.6,-4.3).curveTo(-5.1,-6.3,-3.5,-8.7).lineTo(-0.8,-8.7).lineTo(-1.9,-7.2).lineTo(7.3,-7.2).lineTo(7.3,-5.3).curveTo(5.6,-3.7,3.2,-2.4).curveTo(5.7,-1.9,8.7,-1.9).lineTo(7.8,0.5).curveTo(3.3,0.1,0.1,-1.2).curveTo(-3.3,0.1,-7.7,0.7).lineTo(-8.7,-1.5).closePath().moveTo(0.2,-3.4).curveTo(2.2,-4.2,3.8,-5.2).lineTo(-3.1,-5.2).curveTo(-1.7,-4.2,0.2,-3.4).closePath();
	this.shape_2.setTransform(-9.9,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,8.1).lineTo(-8.7,5.7).lineTo(-3.7,5.7).lineTo(-3.7,2.2).lineTo(-5.7,3.1).curveTo(-7.1,-1.1,-8.6,-4.4).lineTo(-6.5,-5.4).curveTo(-4.9,-2,-3.7,1.2).lineTo(-3.7,-8.1).lineTo(-1.1,-8.1).lineTo(-1.1,5.7).lineTo(1.1,5.7).lineTo(1.1,-8.1).lineTo(3.6,-8.1).lineTo(3.6,1.4).curveTo(5.1,-1.4,6.4,-5.2).lineTo(8.7,-4.2).curveTo(7.4,-0.9,5.5,3.1).lineTo(3.6,2.1).lineTo(3.6,5.7).lineTo(8.7,5.7).lineTo(8.7,8.1).closePath();
	this.shape_3.setTransform(-27.9,30.7);

	this.instance = new lib.vect2();
	this.instance.setTransform(-0.4,-15.7,1,1,0,0,0,26.5,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#1EB6C2","rgba(66,187,188,0)"],[0.086,0.933],0,0,0,0,0,45.1).beginStroke().moveTo(-31.5,31.5).curveTo(-44.5,18.5,-44.5,-0).curveTo(-44.5,-18.4,-31.5,-31.5).curveTo(-18.5,-44.5,0,-44.5).curveTo(18.4,-44.5,31.4,-31.5).curveTo(44.5,-18.4,44.5,-0).curveTo(44.5,18.5,31.4,31.5).curveTo(18.4,44.5,0,44.5).curveTo(-18.5,44.5,-31.5,31.5).closePath();
	this.shape_4.setTransform(0.5,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("#75D6FF").setStrokeStyle(6,1,1).moveTo(60.8,0).curveTo(60.8,25.2,43,43).curveTo(25.2,60.9,-0,60.9).curveTo(-25.2,60.9,-43.1,43).curveTo(-60.9,25.2,-60.9,0).curveTo(-60.9,-25.2,-43.1,-43.1).curveTo(-25.2,-60.9,-0,-60.9).curveTo(25.2,-60.9,43,-43.1).curveTo(60.8,-25.2,60.8,0).closePath();

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(34,111,127,0.667)").beginStroke().moveTo(-43,43).curveTo(-60.9,25.2,-60.8,-0).curveTo(-60.9,-25.2,-43,-43.1).curveTo(-25.2,-60.8,0,-60.9).curveTo(25.2,-60.8,43,-43.1).curveTo(60.8,-25.2,60.8,-0).curveTo(60.8,25.2,43,43).curveTo(25.2,60.8,0,60.8).curveTo(-25.2,60.8,-43,43).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,-63.8,127.7,127.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vect3();
	this.instance.setTransform(-1.6,-16.1,1,1,0,0,0,18.5,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.2,7.9).lineTo(-3.2,6.6).lineTo(2.3,6.6).lineTo(2.3,4.1).lineTo(-2.2,4.1).lineTo(-2.2,2.9).lineTo(2.3,2.9).lineTo(2.3,0.6).lineTo(-0.5,0.6).lineTo(-0.5,1.2).lineTo(-1.8,1.2).lineTo(-1.8,-7.9).lineTo(7.7,-7.9).lineTo(7.7,1.2).lineTo(6.4,1.2).lineTo(6.4,0.6).lineTo(3.6,0.6).lineTo(3.6,2.9).lineTo(8.1,2.9).lineTo(8.1,4.1).lineTo(3.6,4.1).lineTo(3.6,6.6).lineTo(8.8,6.6).lineTo(8.8,7.9).closePath().moveTo(3.6,-0.6).lineTo(6.4,-0.6).lineTo(6.4,-3.1).lineTo(3.6,-3.1).closePath().moveTo(-0.5,-0.6).lineTo(2.3,-0.6).lineTo(2.3,-3.1).lineTo(-0.5,-3.1).closePath().moveTo(3.6,-4.2).lineTo(6.4,-4.2).lineTo(6.4,-6.7).lineTo(3.6,-6.7).closePath().moveTo(-0.5,-4.2).lineTo(2.3,-4.2).lineTo(2.3,-6.7).lineTo(-0.5,-6.7).closePath().moveTo(-8.8,5.6).lineTo(-6.2,5).lineTo(-6.2,-0.4).lineTo(-8.4,-0.4).lineTo(-8.4,-1.6).lineTo(-6.2,-1.6).lineTo(-6.2,-6).lineTo(-8.6,-6).lineTo(-8.6,-7.2).lineTo(-2.5,-7.2).lineTo(-2.5,-6).lineTo(-4.9,-6).lineTo(-4.9,-1.6).lineTo(-2.6,-1.6).lineTo(-2.6,-0.4).lineTo(-4.9,-0.4).lineTo(-4.9,4.6).lineTo(-2.6,4).lineTo(-2.4,5.3).lineTo(-8.3,7).closePath();
	this.shape.setTransform(26.8,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.4,7.4).curveTo(-4.9,5.1,-3.9,3).curveTo(-2.9,1.1,-2.7,-3.9).lineTo(-7.7,-3.9).lineTo(-7.7,-5.4).lineTo(-2.6,-5.4).lineTo(-2.5,-8.6).lineTo(-1,-8.6).lineTo(-1.1,-5.4).lineTo(5.4,-5.4).lineTo(5.1,4.6).curveTo(4.8,8.1,2,8.1).lineTo(-1.3,8).lineTo(-1.6,6.4).curveTo(0.3,6.6,1.8,6.6).curveTo(3.5,6.5,3.6,4.3).lineTo(3.9,-3.9).lineTo(-1.2,-3.9).curveTo(-1.5,1.5,-2.6,3.8).curveTo(-3.8,6.2,-7.5,8.6).lineTo(-8.4,7.4).closePath().moveTo(-8.7,2.8).curveTo(-7.3,0.4,-6.3,-2.4).lineTo(-4.9,-1.9).curveTo(-6,0.8,-7.4,3.4).lineTo(-8.7,2.8).closePath().moveTo(5.6,-1.9).lineTo(6.9,-2.3).lineTo(8.7,2.4).lineTo(7.3,2.9).curveTo(6.6,0.6,5.6,-1.9).closePath();
	this.shape_1.setTransform(8.9,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.5,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.4,2.7).lineTo(-7.4,1.5).lineTo(-2.2,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.9,1.5).lineTo(6.2,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.7,8.4,3,8.4).lineTo(-0.2,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,3,7).curveTo(4.5,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1.1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.5,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.3,-2.4).curveTo(-3.2,-3.6,-4.5,-5.3).curveTo(-5.9,-3.7,-7.5,-2.3).lineTo(-8.5,-3.2).curveTo(-5.2,-5.8,-3.7,-8.8).lineTo(-2.3,-8.3).lineTo(-3.1,-7).lineTo(6.3,-7).lineTo(6.3,-5.8).curveTo(4.7,-3.8,1.8,-2.4).curveTo(4.9,-1.3,8.9,-1).lineTo(7.9,0.4).curveTo(3.4,-0.2,0.3,-1.6).curveTo(-3.3,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.3,-3.1).curveTo(2.8,-4.2,4.4,-5.8).lineTo(-3.4,-5.8).curveTo(-2,-4.2,0.3,-3.1).closePath();
	this.shape_2.setTransform(-9.1,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,7.9).lineTo(-8.7,6.6).lineTo(-3,6.6).lineTo(-3,-7.9).lineTo(-1.6,-7.9).lineTo(-1.6,6.6).lineTo(1.5,6.6).lineTo(1.5,-7.9).lineTo(3,-7.9).lineTo(3,6.6).lineTo(8.7,6.6).lineTo(8.7,7.9).closePath().moveTo(3.6,2.9).curveTo(5.4,-0.8,6.6,-4.3).lineTo(8,-3.7).curveTo(6.4,0.5,4.9,3.5).closePath().moveTo(-7.9,-3.9).lineTo(-6.7,-4.4).curveTo(-5.2,-1.1,-3.9,2.8).lineTo(-5.3,3.4).curveTo(-6.5,-0.3,-7.9,-3.9).closePath();
	this.shape_3.setTransform(-27.1,19.7);

	this.instance_1 = new lib.rectTopIn("synched",0);
	this.instance_1.setTransform(-0.1,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-50.9,137.8,93.9);


(lib.rect8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.6,7.5).curveTo(-1.2,4.8,-1.2,-0.2).lineTo(-1.2,-7.3).curveTo(3.1,-7.3,7.5,-8.1).lineTo(8,-6.8).curveTo(4.2,-6.2,0.1,-6).lineTo(0.1,-2.2).lineTo(8.8,-2.2).lineTo(8.8,-0.9).lineTo(5.4,-0.9).lineTo(5.4,8.5).lineTo(4.1,8.5).lineTo(4.1,-0.9).lineTo(0.1,-0.9).lineTo(0.1,-0.2).curveTo(0.1,5.5,-2.8,8.6).lineTo(-3.6,7.5).closePath().moveTo(-6,8.5).lineTo(-6,-0.5).curveTo(-6.8,2.1,-8.1,3.9).lineTo(-8.8,2.3).curveTo(-6.9,-0.4,-6,-3.9).lineTo(-8.5,-3.9).lineTo(-8.5,-5.1).lineTo(-6,-5.1).lineTo(-6,-8.6).lineTo(-4.7,-8.6).lineTo(-4.7,-5.1).lineTo(-2.2,-5.1).lineTo(-2.2,-3.9).lineTo(-4.7,-3.9).lineTo(-4.7,-1.9).lineTo(-4,-2.4).curveTo(-2.5,-0.5,-1.7,0.6).lineTo(-2.8,1.4).curveTo(-3.6,0.2,-4.7,-1.3).lineTo(-4.7,8.5).closePath();
	this.shape.setTransform(27.5,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.3,7.6).curveTo(-5.5,6.5,-4.2,4.4).curveTo(-3.2,2.9,-3.1,0.4).lineTo(-6.4,0.4).lineTo(-6.4,-0.9).lineTo(5.2,-0.9).curveTo(5.1,2.1,5,5).curveTo(4.7,8.2,1.8,8.2).lineTo(-1.1,8.1).lineTo(-1.4,6.7).lineTo(1.6,6.9).curveTo(3.4,6.9,3.6,4.8).lineTo(3.7,0.4).lineTo(-1.7,0.4).curveTo(-1.8,3.3,-2.8,5.1).curveTo(-4.2,7.5,-7.3,8.7).lineTo(-8.3,7.6).closePath().moveTo(-8.9,-1.5).curveTo(-5.2,-4.1,-2.7,-8.4).lineTo(-1.4,-7.8).curveTo(-4.1,-3.1,-7.9,-0.3).curveTo(-8.2,-0.8,-8.9,-1.5).closePath().moveTo(0.8,-8.2).lineTo(2,-8.7).curveTo(4,-4.1,8.9,-1.7).curveTo(8,-0.9,7.7,-0.3).curveTo(2.9,-3.2,0.8,-8.2).closePath();
	this.shape_1.setTransform(9.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.7,7.5).curveTo(-2.6,4.8,-2.6,-0.8).lineTo(-2.6,-7.7).lineTo(7.8,-7.7).lineTo(7.8,-2.6).lineTo(6.5,-2.6).lineTo(6.5,-3.1).lineTo(-1.3,-3.1).lineTo(-1.3,-0.9).lineTo(2.8,-0.9).lineTo(2.8,-2.8).lineTo(4.1,-2.8).lineTo(4.1,-0.9).lineTo(8.7,-0.9).lineTo(8.7,0.2).lineTo(4.1,0.2).lineTo(4.1,2.5).lineTo(7.7,2.5).lineTo(7.7,8.4).lineTo(6.4,8.4).lineTo(6.4,7.4).lineTo(0.4,7.4).lineTo(0.4,8.4).lineTo(-0.9,8.4).lineTo(-0.9,2.5).lineTo(2.8,2.5).lineTo(2.8,0.2).lineTo(-1.3,0.2).curveTo(-1.5,5.7,-3.8,8.6).lineTo(-4.7,7.5).closePath().moveTo(0.4,6.3).lineTo(6.4,6.3).lineTo(6.4,3.7).lineTo(0.4,3.7).closePath().moveTo(-1.3,-4.3).lineTo(6.5,-4.3).lineTo(6.5,-6.5).lineTo(-1.3,-6.5).closePath().moveTo(-8.3,8.3).lineTo(-8.5,6.9).lineTo(-7.1,7).curveTo(-6.3,7,-6.3,6.1).lineTo(-6.3,1.4).lineTo(-8.5,2.2).lineTo(-8.7,0.7).lineTo(-6.3,0.1).lineTo(-6.3,-4).lineTo(-8.5,-4).lineTo(-8.5,-5.3).lineTo(-6.3,-5.3).lineTo(-6.3,-8.6).lineTo(-5,-8.6).lineTo(-5,-5.3).lineTo(-3.1,-5.3).lineTo(-3.1,-4).lineTo(-5,-4).lineTo(-5,-0.4).lineTo(-3.4,-0.9).lineTo(-3.3,0.4).lineTo(-5,1).lineTo(-5,6.4).curveTo(-5,8.3,-6.7,8.3).lineTo(-7.4,8.4).lineTo(-8.3,8.3).closePath();
	this.shape_2.setTransform(-8.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,7.6).curveTo(1.9,6,3.5,4).curveTo(2.1,1.5,1.6,-1.7).lineTo(0.9,-0.5).lineTo(-0,-1.6).curveTo(2,-4.6,2.7,-8.8).lineTo(4.1,-8.6).curveTo(3.7,-6.8,3.2,-5.4).lineTo(8.6,-5.4).lineTo(8.6,-4.2).lineTo(7.5,-4.2).curveTo(7.1,1,5.2,4).curveTo(6.7,6,8.9,7.2).lineTo(7.9,8.6).curveTo(5.8,7.2,4.3,5.3).curveTo(2.7,7.3,0.5,8.8).curveTo(0.1,8.2,-0.5,7.6).closePath().moveTo(2.6,-3.7).curveTo(2.9,0,4.4,2.7).curveTo(5.8,0.1,6.1,-4.2).lineTo(2.8,-4.2).lineTo(2.6,-3.7).closePath().moveTo(-8.9,7.4).curveTo(-6.4,6.9,-4.5,5.8).lineTo(-7.7,4.2).lineTo(-6.6,2.6).lineTo(-8.7,2.6).lineTo(-8.7,1.4).lineTo(-6,1.4).lineTo(-5.2,-0).lineTo(-4,0.4).lineTo(-4.5,1.4).lineTo(-0.2,1.4).lineTo(-0.2,2.5).curveTo(-0.9,4.3,-2.2,5.5).lineTo(-0.3,6.4).lineTo(-1,7.6).lineTo(-3.3,6.4).curveTo(-5.3,7.8,-8.3,8.7).lineTo(-8.9,7.4).closePath().moveTo(-6,3.8).lineTo(-3.4,5).curveTo(-2.2,3.9,-1.5,2.6).lineTo(-5.2,2.6).lineTo(-6,3.8).closePath().moveTo(-8.8,-0.6).curveTo(-6.7,-1.8,-4.8,-3.5).lineTo(-8.5,-3.5).lineTo(-8.5,-4.6).lineTo(-4.4,-4.6).lineTo(-4.4,-8.6).lineTo(-3.1,-8.6).lineTo(-3.1,-4.6).lineTo(0.3,-4.6).lineTo(0.3,-3.5).lineTo(-3.1,-3.5).lineTo(-3.1,-2.5).lineTo(-2.5,-3).lineTo(0.2,-0.9).lineTo(-0.6,0).lineTo(-3.1,-2).lineTo(-3.1,-0).lineTo(-4.4,-0).lineTo(-4.4,-2.5).curveTo(-6,-0.8,-8.1,0.5).lineTo(-8.8,-0.6).closePath().moveTo(-2.3,-5.9).lineTo(-0.5,-8.1).lineTo(0.6,-7.4).lineTo(-1.4,-5.1).lineTo(-2.3,-5.9).closePath().moveTo(-8,-7.4).lineTo(-7,-8.1).lineTo(-5.3,-6).lineTo(-6.5,-5.3).lineTo(-8,-7.4).closePath();
	this.shape_3.setTransform(-26.4,0.9);

	this.instance = new lib.rectBottomIn("synched",0);
	this.instance.setTransform(0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-24.5,197.7,48.8);


(lib.rect7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2,8.6).lineTo(2,-1.3).lineTo(-3.1,-1.3).lineTo(-3.1,-2.6).lineTo(2,-2.6).lineTo(2,-8.6).lineTo(3.5,-8.6).lineTo(3.5,-2.6).lineTo(8.7,-2.6).lineTo(8.7,-1.3).lineTo(3.5,-1.3).lineTo(3.5,8.6).closePath().moveTo(-6.9,7.1).curveTo(-6.2,6.7,-6.2,5.5).lineTo(-6.2,-1.4).lineTo(-8.7,-1.4).lineTo(-8.7,-2.7).lineTo(-4.8,-2.7).lineTo(-4.8,5.9).lineTo(-1.5,3.7).lineTo(-1.3,5.3).lineTo(-6,8.4).closePath().moveTo(-8,-7.5).lineTo(-7,-8.4).lineTo(-4.2,-5.5).lineTo(-5.4,-4.5).curveTo(-6.5,-5.9,-8,-7.5).closePath();
	this.shape.setTransform(27.5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.5,7.6).curveTo(-2,6.5,-1,4.9).curveTo(-0.3,3.5,-0.2,0.3).lineTo(-0.9,0.4).lineTo(-2.4,0.6).lineTo(-2.9,-0.7).curveTo(-2.2,-1.1,-1.8,-1.6).curveTo(-0.4,-3.2,0.8,-5.1).lineTo(-3.1,-5.1).lineTo(-3.1,-6.3).lineTo(2.5,-6.3).lineTo(1.2,-8).lineTo(2.5,-8.8).lineTo(3.9,-6.8).lineTo(3.1,-6.3).lineTo(8.4,-6.3).lineTo(8.4,-5.1).lineTo(1.3,-5.1).lineTo(2.3,-4.6).lineTo(-0.6,-1).lineTo(5.5,-1.3).lineTo(4.2,-3.2).lineTo(5.3,-3.9).curveTo(6.8,-1.9,8.3,0.6).lineTo(7.1,1.4).lineTo(6.2,-0).lineTo(4.5,0.1).lineTo(4.5,6).curveTo(4.5,7.1,5.3,7.1).lineTo(6.2,7.1).curveTo(7.1,7.1,7.1,6.2).lineTo(7.3,3.9).lineTo(8.8,4.5).lineTo(8.4,6.8).curveTo(8.2,8.3,6.6,8.4).lineTo(5.1,8.4).curveTo(3.2,8.3,3.2,6.2).lineTo(3.2,0.2).lineTo(1.1,0.2).curveTo(1,4.1,0.1,5.6).curveTo(-0.9,7.5,-3.6,8.8).lineTo(-4.5,7.6).closePath().moveTo(-8.8,5.7).lineTo(-2.8,4.5).lineTo(-2.8,5.7).lineTo(-8.3,7.1).closePath().moveTo(-8.3,2.3).curveTo(-7.2,1.1,-5.7,-1.4).lineTo(-8.4,-1.2).lineTo(-8.7,-2.4).curveTo(-7.2,-4.4,-5.4,-8.6).lineTo(-4,-8).curveTo(-5.8,-4.7,-7.2,-2.5).lineTo(-5.1,-2.5).lineTo(-3.9,-4.5).lineTo(-2.7,-4).curveTo(-4.6,-0.5,-6.5,2.1).lineTo(-2.9,1.5).lineTo(-3,2.8).lineTo(-8.1,3.6).closePath();
	this.shape_1.setTransform(9.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.7,7.5).curveTo(-2.6,4.8,-2.6,-0.8).lineTo(-2.6,-7.7).lineTo(7.8,-7.7).lineTo(7.8,-2.6).lineTo(6.5,-2.6).lineTo(6.5,-3.1).lineTo(-1.3,-3.1).lineTo(-1.3,-0.9).lineTo(2.8,-0.9).lineTo(2.8,-2.8).lineTo(4.1,-2.8).lineTo(4.1,-0.9).lineTo(8.7,-0.9).lineTo(8.7,0.2).lineTo(4.1,0.2).lineTo(4.1,2.5).lineTo(7.7,2.5).lineTo(7.7,8.4).lineTo(6.4,8.4).lineTo(6.4,7.4).lineTo(0.4,7.4).lineTo(0.4,8.4).lineTo(-0.9,8.4).lineTo(-0.9,2.5).lineTo(2.8,2.5).lineTo(2.8,0.2).lineTo(-1.3,0.2).curveTo(-1.5,5.7,-3.8,8.6).lineTo(-4.7,7.5).closePath().moveTo(0.4,6.3).lineTo(6.4,6.3).lineTo(6.4,3.7).lineTo(0.4,3.7).closePath().moveTo(-1.3,-4.3).lineTo(6.5,-4.3).lineTo(6.5,-6.5).lineTo(-1.3,-6.5).closePath().moveTo(-8.3,8.3).lineTo(-8.5,6.9).lineTo(-7.1,7).curveTo(-6.3,7,-6.3,6.1).lineTo(-6.3,1.4).lineTo(-8.5,2.2).lineTo(-8.7,0.7).lineTo(-6.3,0.1).lineTo(-6.3,-4).lineTo(-8.5,-4).lineTo(-8.5,-5.3).lineTo(-6.3,-5.3).lineTo(-6.3,-8.6).lineTo(-5,-8.6).lineTo(-5,-5.3).lineTo(-3.1,-5.3).lineTo(-3.1,-4).lineTo(-5,-4).lineTo(-5,-0.4).lineTo(-3.4,-0.9).lineTo(-3.3,0.4).lineTo(-5,1).lineTo(-5,6.4).curveTo(-5,8.3,-6.7,8.3).lineTo(-7.4,8.4).lineTo(-8.3,8.3).closePath();
	this.shape_2.setTransform(-8.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,7.6).curveTo(1.9,6,3.5,4).curveTo(2.1,1.5,1.6,-1.7).lineTo(0.9,-0.5).lineTo(-0,-1.6).curveTo(2,-4.6,2.7,-8.8).lineTo(4.1,-8.6).curveTo(3.7,-6.8,3.2,-5.4).lineTo(8.6,-5.4).lineTo(8.6,-4.2).lineTo(7.5,-4.2).curveTo(7.1,1,5.2,4).curveTo(6.7,6,8.9,7.2).lineTo(7.9,8.6).curveTo(5.8,7.2,4.3,5.3).curveTo(2.7,7.3,0.5,8.8).curveTo(0.1,8.2,-0.5,7.6).closePath().moveTo(2.6,-3.7).curveTo(2.9,0,4.4,2.7).curveTo(5.8,0.1,6.1,-4.2).lineTo(2.8,-4.2).lineTo(2.6,-3.7).closePath().moveTo(-8.9,7.4).curveTo(-6.4,6.9,-4.5,5.8).lineTo(-7.7,4.2).lineTo(-6.6,2.6).lineTo(-8.7,2.6).lineTo(-8.7,1.4).lineTo(-6,1.4).lineTo(-5.2,-0).lineTo(-4,0.4).lineTo(-4.5,1.4).lineTo(-0.2,1.4).lineTo(-0.2,2.5).curveTo(-0.9,4.3,-2.2,5.5).lineTo(-0.3,6.4).lineTo(-1,7.6).lineTo(-3.3,6.4).curveTo(-5.3,7.8,-8.3,8.7).lineTo(-8.9,7.4).closePath().moveTo(-6,3.8).lineTo(-3.4,5).curveTo(-2.2,3.9,-1.5,2.6).lineTo(-5.2,2.6).lineTo(-6,3.8).closePath().moveTo(-8.8,-0.6).curveTo(-6.7,-1.8,-4.8,-3.5).lineTo(-8.5,-3.5).lineTo(-8.5,-4.6).lineTo(-4.4,-4.6).lineTo(-4.4,-8.6).lineTo(-3.1,-8.6).lineTo(-3.1,-4.6).lineTo(0.3,-4.6).lineTo(0.3,-3.5).lineTo(-3.1,-3.5).lineTo(-3.1,-2.5).lineTo(-2.5,-3).lineTo(0.2,-0.9).lineTo(-0.6,0).lineTo(-3.1,-2).lineTo(-3.1,-0).lineTo(-4.4,-0).lineTo(-4.4,-2.5).curveTo(-6,-0.8,-8.1,0.5).lineTo(-8.8,-0.6).closePath().moveTo(-2.3,-5.9).lineTo(-0.5,-8.1).lineTo(0.6,-7.4).lineTo(-1.4,-5.1).lineTo(-2.3,-5.9).closePath().moveTo(-8,-7.4).lineTo(-7,-8.1).lineTo(-5.3,-6).lineTo(-6.5,-5.3).lineTo(-8,-7.4).closePath();
	this.shape_3.setTransform(-26.4,0.9);

	this.instance = new lib.rectBottomIn("synched",0);
	this.instance.setTransform(0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-24.5,197.7,48.8);


(lib.rect6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rectBottomIn("synched",0);
	this.instance.setTransform(0.6,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.4,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.3,2.7).lineTo(-7.3,1.5).lineTo(-2.2,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.9,1.5).lineTo(6.3,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.6,8.4,2.9,8.4).lineTo(-0.1,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,2.9,7).curveTo(4.5,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.4,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.2,-2.4).curveTo(-3.3,-3.6,-4.5,-5.3).curveTo(-5.9,-3.7,-7.5,-2.3).lineTo(-8.4,-3.2).curveTo(-5.2,-5.8,-3.6,-8.8).lineTo(-2.4,-8.3).lineTo(-3.1,-7).lineTo(6.3,-7).lineTo(6.3,-5.8).curveTo(4.7,-3.8,1.8,-2.4).curveTo(4.8,-1.3,8.9,-1).lineTo(8,0.4).curveTo(3.3,-0.2,0.2,-1.6).curveTo(-3.2,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.2,-3.1).curveTo(2.8,-4.2,4.5,-5.8).lineTo(-3.4,-5.8).curveTo(-1.9,-4.2,0.2,-3.1).closePath();
	this.shape.setTransform(27.5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.1,5.6).curveTo(2.7,6.9,0.9,7.9).lineTo(0.2,6.8).curveTo(1.9,5.9,3.2,4.6).curveTo(1.5,2.4,1,-0.7).lineTo(0.1,-0.7).lineTo(0.1,8.1).lineTo(-1.2,8.1).lineTo(-1.2,-8.1).lineTo(7.5,-8.1).lineTo(7.3,-5.8).curveTo(7.2,-3.1,4.6,-3.1).lineTo(2.3,-3.2).lineTo(2.1,-4.6).curveTo(3.4,-4.4,4.4,-4.4).curveTo(5.9,-4.4,6,-5.9).lineTo(6.1,-6.9).lineTo(0.1,-6.9).lineTo(0.1,-1.8).lineTo(7.6,-1.8).lineTo(7.6,-0.8).curveTo(6.9,2.3,5,4.6).curveTo(6.5,6.1,8.8,6.9).lineTo(7.7,8.1).curveTo(5.6,7.1,4.1,5.6).closePath().moveTo(4.1,3.7).curveTo(5.6,1.8,6.2,-0.7).lineTo(2.2,-0.7).curveTo(2.7,1.9,4.1,3.7).closePath().moveTo(-8.8,7.1).curveTo(-7.6,5.3,-7.6,2).lineTo(-7.6,-8.1).lineTo(-2.7,-8.1).lineTo(-2.7,6.1).curveTo(-2.7,7.9,-4.3,7.9).lineTo(-6,7.8).lineTo(-6.2,6.6).lineTo(-4.6,6.7).curveTo(-3.9,6.7,-3.9,6).lineTo(-3.9,1.9).lineTo(-6.4,1.9).curveTo(-6.3,6,-7.8,8.1).lineTo(-8.8,7.1).closePath().moveTo(-6.4,0.9).lineTo(-3.9,0.9).lineTo(-3.9,-2.5).lineTo(-6.4,-2.5).closePath().moveTo(-6.4,-3.6).lineTo(-3.9,-3.6).lineTo(-3.9,-7).lineTo(-6.4,-7).closePath();
	this.shape_1.setTransform(9.6,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.7,7.5).curveTo(-2.6,4.8,-2.6,-0.8).lineTo(-2.6,-7.7).lineTo(7.8,-7.7).lineTo(7.8,-2.6).lineTo(6.5,-2.6).lineTo(6.5,-3.1).lineTo(-1.3,-3.1).lineTo(-1.3,-0.9).lineTo(2.8,-0.9).lineTo(2.8,-2.8).lineTo(4.1,-2.8).lineTo(4.1,-0.9).lineTo(8.7,-0.9).lineTo(8.7,0.2).lineTo(4.1,0.2).lineTo(4.1,2.5).lineTo(7.7,2.5).lineTo(7.7,8.4).lineTo(6.4,8.4).lineTo(6.4,7.4).lineTo(0.4,7.4).lineTo(0.4,8.4).lineTo(-0.9,8.4).lineTo(-0.9,2.5).lineTo(2.8,2.5).lineTo(2.8,0.2).lineTo(-1.3,0.2).curveTo(-1.5,5.7,-3.8,8.6).lineTo(-4.7,7.5).closePath().moveTo(0.4,6.3).lineTo(6.4,6.3).lineTo(6.4,3.7).lineTo(0.4,3.7).closePath().moveTo(-1.3,-4.3).lineTo(6.5,-4.3).lineTo(6.5,-6.5).lineTo(-1.3,-6.5).closePath().moveTo(-8.3,8.3).lineTo(-8.5,6.9).lineTo(-7.1,7).curveTo(-6.3,7,-6.3,6.1).lineTo(-6.3,1.4).lineTo(-8.5,2.2).lineTo(-8.7,0.7).lineTo(-6.3,0.1).lineTo(-6.3,-4).lineTo(-8.5,-4).lineTo(-8.5,-5.3).lineTo(-6.3,-5.3).lineTo(-6.3,-8.6).lineTo(-5,-8.6).lineTo(-5,-5.3).lineTo(-3.1,-5.3).lineTo(-3.1,-4).lineTo(-5,-4).lineTo(-5,-0.4).lineTo(-3.4,-0.9).lineTo(-3.3,0.4).lineTo(-5,1).lineTo(-5,6.4).curveTo(-5,8.3,-6.7,8.3).lineTo(-7.4,8.4).lineTo(-8.3,8.3).closePath();
	this.shape_2.setTransform(-8.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,7.6).curveTo(1.9,6,3.5,4).curveTo(2.1,1.5,1.6,-1.7).lineTo(0.9,-0.5).lineTo(-0,-1.6).curveTo(2,-4.6,2.7,-8.8).lineTo(4.1,-8.6).curveTo(3.7,-6.8,3.2,-5.4).lineTo(8.6,-5.4).lineTo(8.6,-4.2).lineTo(7.5,-4.2).curveTo(7.1,1,5.2,4).curveTo(6.7,6,8.9,7.2).lineTo(7.9,8.6).curveTo(5.8,7.2,4.3,5.3).curveTo(2.7,7.3,0.5,8.8).curveTo(0.1,8.2,-0.5,7.6).closePath().moveTo(2.6,-3.7).curveTo(2.9,0,4.4,2.7).curveTo(5.8,0.1,6.1,-4.2).lineTo(2.8,-4.2).lineTo(2.6,-3.7).closePath().moveTo(-8.9,7.4).curveTo(-6.4,6.9,-4.5,5.8).lineTo(-7.7,4.2).lineTo(-6.6,2.6).lineTo(-8.7,2.6).lineTo(-8.7,1.4).lineTo(-6,1.4).lineTo(-5.2,-0).lineTo(-4,0.4).lineTo(-4.5,1.4).lineTo(-0.2,1.4).lineTo(-0.2,2.5).curveTo(-0.9,4.3,-2.2,5.5).lineTo(-0.3,6.4).lineTo(-1,7.6).lineTo(-3.3,6.4).curveTo(-5.3,7.8,-8.3,8.7).lineTo(-8.9,7.4).closePath().moveTo(-6,3.8).lineTo(-3.4,5).curveTo(-2.2,3.9,-1.5,2.6).lineTo(-5.2,2.6).lineTo(-6,3.8).closePath().moveTo(-8.8,-0.6).curveTo(-6.7,-1.8,-4.8,-3.5).lineTo(-8.5,-3.5).lineTo(-8.5,-4.6).lineTo(-4.4,-4.6).lineTo(-4.4,-8.6).lineTo(-3.1,-8.6).lineTo(-3.1,-4.6).lineTo(0.3,-4.6).lineTo(0.3,-3.5).lineTo(-3.1,-3.5).lineTo(-3.1,-2.5).lineTo(-2.5,-3).lineTo(0.2,-0.9).lineTo(-0.6,0).lineTo(-3.1,-2).lineTo(-3.1,-0).lineTo(-4.4,-0).lineTo(-4.4,-2.5).curveTo(-6,-0.8,-8.1,0.5).lineTo(-8.8,-0.6).closePath().moveTo(-2.3,-5.9).lineTo(-0.5,-8.1).lineTo(0.6,-7.4).lineTo(-1.4,-5.1).lineTo(-2.3,-5.9).closePath().moveTo(-8,-7.4).lineTo(-7,-8.1).lineTo(-5.3,-6).lineTo(-6.5,-5.3).lineTo(-8,-7.4).closePath();
	this.shape_3.setTransform(-26.4,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-24.5,197.7,48.8);


(lib.rect4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1.6,33.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.2,6.9).lineTo(-4.2,5.4).lineTo(-0.3,1.5).curveTo(1.4,-0.2,2,-1.1).curveTo(2.5,-2.1,2.5,-3.1).curveTo(2.5,-4.2,1.9,-4.9).curveTo(1.2,-5.5,-0,-5.5).curveTo(-1.8,-5.5,-3.5,-3.9).lineTo(-3.5,-5.7).curveTo(-1.9,-6.9,0.2,-6.9).curveTo(2.1,-6.9,3.1,-5.9).curveTo(4.2,-4.9,4.2,-3.3).curveTo(4.2,-2,3.5,-0.8).curveTo(2.8,0.4,0.9,2.3).lineTo(-2.2,5.4).lineTo(4,5.4).lineTo(4,6.9).closePath();
	this.shape.setTransform(36.7,-64.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.6,8.6).lineTo(2.6,2.4).lineTo(-3.5,2.4).lineTo(-3.5,1.2).lineTo(2.6,1.2).lineTo(2.6,-3.3).lineTo(-0.7,-3.3).curveTo(-1.5,-1.4,-2.3,0.1).lineTo(-3.5,-0.8).curveTo(-1.8,-3.8,-1,-7.4).lineTo(0.4,-7).lineTo(-0.3,-4.5).lineTo(2.6,-4.5).lineTo(2.6,-8.6).lineTo(4,-8.6).lineTo(4,-4.5).lineTo(8.2,-4.5).lineTo(8.2,-3.3).lineTo(4,-3.3).lineTo(4,1.2).lineTo(8.8,1.2).lineTo(8.8,2.4).lineTo(4,2.4).lineTo(4,8.6).closePath().moveTo(-6.2,8.6).lineTo(-6.2,-1.4).curveTo(-7.1,0.3,-8.1,1.6).lineTo(-8.8,0.1).curveTo(-6.4,-3.5,-4.9,-8.6).lineTo(-3.4,-8.1).curveTo(-4.1,-6.1,-4.8,-4.3).lineTo(-4.8,8.6).closePath();
	this.shape_1.setTransform(22.5,-63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.5,8.2).lineTo(-3.5,6.9).lineTo(-1.3,6.9).lineTo(-1.3,-7.2).lineTo(7.1,-7.2).lineTo(7.1,6.9).lineTo(8.7,6.9).lineTo(8.7,8.2).closePath().moveTo(0,6.9).lineTo(5.8,6.9).lineTo(5.8,3.4).lineTo(0,3.4).closePath().moveTo(0,2.2).lineTo(5.8,2.2).lineTo(5.8,-1.2).lineTo(0,-1.2).closePath().moveTo(0,-2.4).lineTo(5.8,-2.4).lineTo(5.8,-5.9).lineTo(0,-5.9).closePath().moveTo(-8.5,5.9).lineTo(-2.4,4.6).lineTo(-2.5,6).lineTo(-8.2,7.2).closePath().moveTo(-8.2,2.1).curveTo(-7.1,1.2,-5.5,-1.5).lineTo(-8.3,-1.3).lineTo(-8.7,-2.5).curveTo(-7.3,-4.1,-5.6,-8.2).lineTo(-4.3,-7.7).curveTo(-5.8,-4.8,-7.2,-2.6).lineTo(-4.8,-2.6).lineTo(-3.3,-5.5).lineTo(-1.9,-4.9).curveTo(-4,-1.3,-6.4,1.9).lineTo(-2.6,1.5).lineTo(-2.7,2.7).lineTo(-7.9,3.4).closePath();
	this.shape_2.setTransform(4.6,-64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.5,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.4,2.7).lineTo(-7.4,1.5).lineTo(-2.3,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.8,1.5).lineTo(6.2,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.6,8.4,3,8.4).lineTo(-0.2,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,3,7).curveTo(4.5,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1.1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.5,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.3,-2.4).curveTo(-3.3,-3.6,-4.4,-5.3).curveTo(-5.8,-3.7,-7.5,-2.3).lineTo(-8.5,-3.2).curveTo(-5.2,-5.8,-3.7,-8.8).lineTo(-2.3,-8.3).lineTo(-3.2,-7).lineTo(6.4,-7).lineTo(6.4,-5.8).curveTo(4.7,-3.8,1.9,-2.4).curveTo(4.9,-1.3,8.9,-1).lineTo(7.9,0.4).curveTo(3.4,-0.2,0.3,-1.6).curveTo(-3.2,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.3,-3.1).curveTo(2.8,-4.2,4.4,-5.8).lineTo(-3.4,-5.8).curveTo(-2,-4.2,0.3,-3.1).closePath();
	this.shape_3.setTransform(-13.5,-63.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,7.9).lineTo(-8.7,6.6).lineTo(-3,6.6).lineTo(-3,-7.9).lineTo(-1.6,-7.9).lineTo(-1.6,6.6).lineTo(1.5,6.6).lineTo(1.5,-7.9).lineTo(3,-7.9).lineTo(3,6.6).lineTo(8.7,6.6).lineTo(8.7,7.9).closePath().moveTo(3.6,2.9).curveTo(5.4,-0.8,6.6,-4.3).lineTo(8,-3.8).curveTo(6.4,0.4,4.9,3.5).closePath().moveTo(-7.9,-3.9).lineTo(-6.7,-4.5).curveTo(-5.2,-1.1,-3.9,2.7).lineTo(-5.3,3.4).curveTo(-6.5,-0.3,-7.9,-3.9).closePath();
	this.shape_4.setTransform(-31.5,-64.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,1,1).moveTo(-83.4,-134.8).lineTo(83.4,-134.8).curveTo(94.5,-134.8,94.5,-123.7).lineTo(94.5,123.7).curveTo(94.5,134.8,83.4,134.8).lineTo(-83.4,134.8).curveTo(-94.5,134.8,-94.5,123.7).lineTo(-94.5,-123.7).curveTo(-94.5,-134.8,-83.4,-134.8).closePath();
	this.shape_5.setTransform(-0.1,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke().moveTo(-83.4,134.8).curveTo(-94.5,134.8,-94.5,123.7).lineTo(-94.5,-123.7).curveTo(-94.5,-134.8,-83.4,-134.8).lineTo(83.4,-134.8).curveTo(94.5,-134.8,94.5,-123.7).lineTo(94.5,123.7).curveTo(94.5,134.8,83.4,134.8).closePath();
	this.shape_6.setTransform(-0.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-134.1,191,271.5);


(lib.rect2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.5,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.3,2.7).lineTo(-7.3,1.5).lineTo(-2.3,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.8,1.5).lineTo(6.3,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.7,8.4,2.9,8.4).lineTo(-0.1,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,2.9,7).curveTo(4.4,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.5,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.3,-2.4).curveTo(-3.2,-3.6,-4.4,-5.3).curveTo(-5.9,-3.7,-7.5,-2.3).lineTo(-8.5,-3.2).curveTo(-5.2,-5.8,-3.6,-8.8).lineTo(-2.4,-8.3).lineTo(-3.2,-7).lineTo(6.4,-7).lineTo(6.4,-5.8).curveTo(4.7,-3.8,1.9,-2.4).curveTo(4.8,-1.3,8.9,-1).lineTo(8,0.4).curveTo(3.3,-0.2,0.2,-1.6).curveTo(-3.2,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.2,-3.1).curveTo(2.8,-4.2,4.5,-5.8).lineTo(-3.4,-5.8).curveTo(-2,-4.2,0.2,-3.1).closePath();
	this.shape.setTransform(34.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,7.9).lineTo(-8.7,6.6).lineTo(-3,6.6).lineTo(-3,-7.9).lineTo(-1.6,-7.9).lineTo(-1.6,6.6).lineTo(1.5,6.6).lineTo(1.5,-7.9).lineTo(3,-7.9).lineTo(3,6.6).lineTo(8.7,6.6).lineTo(8.7,7.9).closePath().moveTo(3.6,2.9).curveTo(5.4,-0.8,6.6,-4.3).lineTo(8,-3.8).curveTo(6.4,0.5,4.9,3.5).closePath().moveTo(-7.9,-3.9).lineTo(-6.7,-4.5).curveTo(-5.2,-1,-3.9,2.7).lineTo(-5.3,3.4).curveTo(-6.5,-0.3,-7.9,-3.9).closePath();
	this.shape_1.setTransform(16.5,1.3);

	this.instance = new lib.vect1();
	this.instance.setTransform(-31,1,1,1,0,0,0,14.5,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,1,1).moveTo(-67.1,-27.8).lineTo(67.1,-27.8).curveTo(78.2,-27.8,78.2,-16.7).lineTo(78.2,16.7).curveTo(78.2,27.8,67.1,27.8).lineTo(-67.1,27.8).curveTo(-78.2,27.8,-78.2,16.7).lineTo(-78.2,-16.7).curveTo(-78.2,-27.8,-67.1,-27.8).closePath();
	this.shape_2.setTransform(0.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke().moveTo(-67.1,27.8).curveTo(-78.2,27.8,-78.2,16.7).lineTo(-78.2,-16.7).curveTo(-78.2,-27.8,-67.1,-27.8).lineTo(67.1,-27.8).curveTo(78.2,-27.8,78.2,-16.7).lineTo(78.2,16.7).curveTo(78.2,27.8,67.1,27.8).closePath();
	this.shape_3.setTransform(0.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-28.2,158.5,57.6);


(lib.rect1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1.6,33.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.9,7).lineTo(-3.9,5.4).lineTo(-0.8,5.4).lineTo(-0.8,-4.8).lineTo(-3.9,-3.9).lineTo(-3.9,-5.5).lineTo(0.9,-7).lineTo(0.9,5.4).lineTo(3.9,5.4).lineTo(3.9,7).closePath();
	this.shape.setTransform(37,-64.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.6,8.6).lineTo(2.6,2.4).lineTo(-3.5,2.4).lineTo(-3.5,1.2).lineTo(2.6,1.2).lineTo(2.6,-3.3).lineTo(-0.7,-3.3).curveTo(-1.5,-1.4,-2.3,0.1).lineTo(-3.5,-0.8).curveTo(-1.8,-3.8,-1,-7.4).lineTo(0.4,-7).lineTo(-0.3,-4.5).lineTo(2.6,-4.5).lineTo(2.6,-8.6).lineTo(4,-8.6).lineTo(4,-4.5).lineTo(8.2,-4.5).lineTo(8.2,-3.3).lineTo(4,-3.3).lineTo(4,1.2).lineTo(8.8,1.2).lineTo(8.8,2.4).lineTo(4,2.4).lineTo(4,8.6).closePath().moveTo(-6.2,8.6).lineTo(-6.2,-1.4).curveTo(-7.1,0.3,-8.1,1.6).lineTo(-8.8,0.1).curveTo(-6.4,-3.5,-4.9,-8.6).lineTo(-3.4,-8.1).curveTo(-4.1,-6.1,-4.8,-4.3).lineTo(-4.8,8.6).closePath();
	this.shape_1.setTransform(22.5,-63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.5,8.2).lineTo(-3.5,6.9).lineTo(-1.3,6.9).lineTo(-1.3,-7.2).lineTo(7.1,-7.2).lineTo(7.1,6.9).lineTo(8.7,6.9).lineTo(8.7,8.2).closePath().moveTo(0,6.9).lineTo(5.8,6.9).lineTo(5.8,3.4).lineTo(0,3.4).closePath().moveTo(0,2.2).lineTo(5.8,2.2).lineTo(5.8,-1.2).lineTo(0,-1.2).closePath().moveTo(0,-2.4).lineTo(5.8,-2.4).lineTo(5.8,-5.9).lineTo(0,-5.9).closePath().moveTo(-8.5,5.9).lineTo(-2.4,4.6).lineTo(-2.5,6).lineTo(-8.2,7.2).closePath().moveTo(-8.2,2.1).curveTo(-7.1,1.2,-5.5,-1.5).lineTo(-8.3,-1.3).lineTo(-8.7,-2.5).curveTo(-7.3,-4.1,-5.6,-8.2).lineTo(-4.3,-7.7).curveTo(-5.8,-4.8,-7.2,-2.6).lineTo(-4.8,-2.6).lineTo(-3.3,-5.5).lineTo(-1.9,-4.9).curveTo(-4,-1.3,-6.4,1.9).lineTo(-2.6,1.5).lineTo(-2.7,2.7).lineTo(-7.9,3.4).closePath();
	this.shape_2.setTransform(4.6,-64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.5,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.4,2.7).lineTo(-7.4,1.5).lineTo(-2.3,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.8,1.5).lineTo(6.2,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.6,8.4,3,8.4).lineTo(-0.2,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,3,7).curveTo(4.5,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1.1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.5,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.3,-2.4).curveTo(-3.3,-3.6,-4.4,-5.3).curveTo(-5.8,-3.7,-7.5,-2.3).lineTo(-8.5,-3.2).curveTo(-5.2,-5.8,-3.7,-8.8).lineTo(-2.3,-8.3).lineTo(-3.2,-7).lineTo(6.4,-7).lineTo(6.4,-5.8).curveTo(4.7,-3.8,1.9,-2.4).curveTo(4.9,-1.3,8.9,-1).lineTo(7.9,0.4).curveTo(3.4,-0.2,0.3,-1.6).curveTo(-3.2,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.3,-3.1).curveTo(2.8,-4.2,4.4,-5.8).lineTo(-3.4,-5.8).curveTo(-2,-4.2,0.3,-3.1).closePath();
	this.shape_3.setTransform(-13.5,-63.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,7.9).lineTo(-8.7,6.6).lineTo(-3,6.6).lineTo(-3,-7.9).lineTo(-1.6,-7.9).lineTo(-1.6,6.6).lineTo(1.5,6.6).lineTo(1.5,-7.9).lineTo(3,-7.9).lineTo(3,6.6).lineTo(8.7,6.6).lineTo(8.7,7.9).closePath().moveTo(3.6,2.9).curveTo(5.4,-0.8,6.6,-4.3).lineTo(8,-3.8).curveTo(6.4,0.4,4.9,3.5).closePath().moveTo(-7.9,-3.9).lineTo(-6.7,-4.5).curveTo(-5.2,-1.1,-3.9,2.7).lineTo(-5.3,3.4).curveTo(-6.5,-0.3,-7.9,-3.9).closePath();
	this.shape_4.setTransform(-31.5,-64.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,1,1).moveTo(-83.4,-134.8).lineTo(83.4,-134.8).curveTo(94.5,-134.8,94.5,-123.7).lineTo(94.5,123.7).curveTo(94.5,134.8,83.4,134.8).lineTo(-83.4,134.8).curveTo(-94.5,134.8,-94.5,123.7).lineTo(-94.5,-123.7).curveTo(-94.5,-134.8,-83.4,-134.8).closePath();
	this.shape_5.setTransform(-0.1,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke().moveTo(-83.4,134.8).curveTo(-94.5,134.8,-94.5,123.7).lineTo(-94.5,-123.7).curveTo(-94.5,-134.8,-83.4,-134.8).lineTo(83.4,-134.8).curveTo(94.5,-134.8,94.5,-123.7).lineTo(94.5,123.7).curveTo(94.5,134.8,83.4,134.8).closePath();
	this.shape_6.setTransform(-0.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-134.1,191,271.5);


(lib.leftRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2FEAF1").setStrokeStyle(3,0,0,4).moveTo(5.3,-3.1).lineTo(5.2,-3).lineTo(-0.8,-9).lineTo(-6.7,-9).lineTo(2.3,-0.1).lineTo(-6.5,9).lineTo(-0.6,8.9).lineTo(8.2,-0.1).closePath();
	this.shape.setTransform(-24.2,0.3,0.606,0.765,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#2FEAF1").setStrokeStyle(3,0,0,4).moveTo(5.3,-3.1).lineTo(5.2,-3).lineTo(-0.8,-9).lineTo(-6.7,-9).lineTo(2.3,-0.1).lineTo(-6.5,9).lineTo(-0.6,8.9).lineTo(8.2,-0.1).closePath();
	this.shape_1.setTransform(24.1,0.3,0.606,0.765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(25));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-22,12.9).lineTo(-22,-12.9).lineTo(22,-12.9).lineTo(22,12.9).closePath();
	mask.setTransform(-0.3,-1.7);

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(18.8,0.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-13.2},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-8.1,62.2,16.8);


(lib.codeAn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.code01("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-96.5},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.5,1220.8,23.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.rect8 = new lib.rect8();
	this.rect8.setTransform(343.5,-0.4);
	new cjs.ButtonHelper(this.rect8, 0, 1, 2, false, new lib.rect8(), 3);

	this.rect7 = new lib.rect7();
	this.rect7.setTransform(-0.6,0.2);
	new cjs.ButtonHelper(this.rect7, 0, 1, 2, false, new lib.rect7(), 3);

	this.rect6 = new lib.rect6();
	this.rect6.setTransform(-342.8,0.2);
	new cjs.ButtonHelper(this.rect6, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(2,1,1).drawRoundRect(-548.15,-40.8,1096.3,81.6,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.rect6},{t:this.rect7},{t:this.rect8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-549.1,-41.7,1098.3,83.6);


(lib.flow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,6).curveTo(-1.9,5.7,-2.2,5.3).lineTo(-1.1,5.4).curveTo(-1,5.4,-0.9,5.4).curveTo(-0.8,5.4,-0.8,5.3).curveTo(-0.7,5.3,-0.7,5.3).curveTo(-0.6,5.3,-0.6,5.2).curveTo(-0.6,5.2,-0.5,5.1).curveTo(-0.5,5.1,-0.5,5).curveTo(-0.5,5,-0.5,4.9).curveTo(-0.5,4.9,-0.5,4.8).lineTo(-0.5,3.9).lineTo(-2.7,3.9).lineTo(-4.8,3.9).lineTo(-6.4,4).lineTo(-6.4,2.7).lineTo(-4.8,2.8).lineTo(-2.7,2.8).lineTo(-0.5,2.8).lineTo(-0.5,2).lineTo(2.1,1.1).lineTo(-3.2,1.1).lineTo(-5.6,1.1).lineTo(-5.6,0.2).lineTo(-4.5,0.2).lineTo(-2.9,0.2).lineTo(-0.8,0.3).lineTo(0.9,0.2).lineTo(2.7,0.2).lineTo(4,0.2).lineTo(4.9,0.2).lineTo(4.9,1.4).lineTo(3.9,1.5).lineTo(3,1.7).lineTo(0.8,2.5).lineTo(0.8,2.8).lineTo(3.9,2.8).lineTo(6.4,2.7).lineTo(6.4,4).lineTo(3.9,3.9).lineTo(0.8,3.9).lineTo(0.8,5.4).curveTo(0.8,5.8,0.6,6.1).curveTo(0.5,6.4,-0,6.5).curveTo(-0.6,6.7,-1.6,6.9).lineTo(-1.8,6).closePath().moveTo(3.3,-0.5).lineTo(2,-0.6).lineTo(0.1,-0.6).lineTo(-1.8,-0.6).lineTo(-3.3,-0.5).lineTo(-4.4,-0.5).lineTo(-4.4,-1.2).lineTo(-4.4,-2).lineTo(-4.4,-2.8).lineTo(-4.4,-3.6).lineTo(-3.3,-3.5).lineTo(-1.8,-3.5).lineTo(0.1,-3.5).lineTo(2,-3.5).lineTo(3.3,-3.5).lineTo(4.6,-3.6).lineTo(4.5,-2.8).lineTo(4.5,-2).lineTo(4.5,-1.2).lineTo(4.6,-0.5).lineTo(3.3,-0.5).closePath().moveTo(-3.2,-1.5).lineTo(3.3,-1.5).lineTo(3.3,-2.5).lineTo(-3.2,-2.5).closePath().moveTo(4.5,-4.3).lineTo(2.5,-4.4).lineTo(-0,-4.4).lineTo(-2.6,-4.4).lineTo(-4.6,-4.3).lineTo(-6.2,-4.2).lineTo(-6.2,-5.5).lineTo(-3.8,-5.4).lineTo(-0.6,-5.4).lineTo(-0.7,-6).lineTo(-1,-6.7).lineTo(0.6,-6.9).lineTo(0.7,-6.1).lineTo(0.9,-5.4).lineTo(3.8,-5.4).lineTo(6.1,-5.5).lineTo(6.1,-4.2).lineTo(4.5,-4.3).closePath();
	this.shape.setTransform(519.9,143.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,6.5).lineTo(-6.5,6).curveTo(-5.6,5.7,-4.6,5.1).lineTo(-3,3.9).curveTo(-2.2,3.3,-1.9,2.8).lineTo(-1.3,3.3).lineTo(-0.7,3.6).lineTo(-0.5,3.8).lineTo(-0.6,3.9).lineTo(-1.1,4.1).lineTo(-1.8,4.7).lineTo(-2.6,5.3).lineTo(-4,6.2).lineTo(-5.5,7).lineTo(-5.9,6.5).closePath().moveTo(3.2,5.2).curveTo(2.2,4.4,1,3.7).lineTo(1.9,2.8).lineTo(4.1,4.2).lineTo(6.3,5.6).lineTo(5.2,6.9).curveTo(4.3,6,3.2,5.2).closePath().moveTo(3.8,1.9).lineTo(0,1.9).lineTo(-3.8,1.9).lineTo(-6.6,2.1).lineTo(-6.6,0.7).lineTo(-4.9,0.8).lineTo(-2.8,0.8).lineTo(-2.8,-2.7).lineTo(-4.3,-2.7).lineTo(-5.8,-2.6).lineTo(-5.8,-3.9).lineTo(-4.3,-3.8).lineTo(-2.8,-3.8).lineTo(-2.8,-4.4).lineTo(-2.8,-5.9).lineTo(-2.8,-6.7).lineTo(-2.1,-6.6).lineTo(-1.4,-6.6).lineTo(-1.1,-6.5).lineTo(-1.3,-6.4).curveTo(-1.3,-6.4,-1.3,-6.3).curveTo(-1.4,-6.3,-1.4,-6.3).curveTo(-1.4,-6.3,-1.4,-6.2).curveTo(-1.4,-6.2,-1.4,-6.1).lineTo(-1.5,-5.5).lineTo(-1.5,-3.8).lineTo(1.5,-3.8).lineTo(1.5,-4.6).lineTo(1.5,-6.2).lineTo(1.5,-7).lineTo(2.2,-6.9).lineTo(3,-6.9).lineTo(3.2,-6.8).lineTo(3.1,-6.7).curveTo(3,-6.7,3,-6.6).curveTo(3,-6.6,2.9,-6.6).curveTo(2.9,-6.5,2.9,-6.5).curveTo(2.9,-6.4,2.9,-6.4).lineTo(2.9,-5.8).lineTo(2.9,-3.8).lineTo(4.6,-3.8).lineTo(5.9,-3.9).lineTo(5.9,-2.6).lineTo(4.6,-2.7).lineTo(2.9,-2.7).lineTo(2.9,0.8).lineTo(4.9,0.8).lineTo(6.6,0.7).lineTo(6.6,2.1).lineTo(3.8,1.9).closePath().moveTo(-1.5,0.8).lineTo(1.5,0.8).lineTo(1.5,-2.7).lineTo(-1.5,-2.7).closePath();
	this.shape_1.setTransform(519.8,127.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6,5.9).curveTo(-6,5.6,-6.4,5.1).curveTo(-5.4,5.3,-5,5.1).curveTo(-4.6,5,-4.6,4.7).lineTo(-4.6,1.3).lineTo(-5.5,1.9).lineTo(-6.4,2.4).lineTo(-6.4,1.6).lineTo(-6.6,0.8).lineTo(-5.6,0.5).lineTo(-4.6,0.2).lineTo(-4.6,-2.3).lineTo(-5.6,-2.2).lineTo(-6.4,-2.1).lineTo(-6.4,-3.4).lineTo(-5.6,-3.3).lineTo(-4.6,-3.3).lineTo(-4.6,-4.8).lineTo(-4.6,-5.6).lineTo(-4.7,-6.2).lineTo(-4.8,-6.7).lineTo(-4.1,-6.6).lineTo(-3.5,-6.6).curveTo(-3.4,-6.6,-3.3,-6.6).curveTo(-3.3,-6.6,-3.2,-6.6).curveTo(-3.2,-6.5,-3.1,-6.5).curveTo(-3.1,-6.5,-3.1,-6.5).curveTo(-3.1,-6.5,-3.1,-6.4).curveTo(-3.1,-6.4,-3.1,-6.3).curveTo(-3.1,-6.3,-3.2,-6.3).curveTo(-3.2,-6.2,-3.3,-6.2).lineTo(-3.5,-5.9).lineTo(-3.6,-5.6).lineTo(-3.6,-3.3).lineTo(-2.8,-3.3).lineTo(-2.4,-3.4).lineTo(-2.4,-2.1).lineTo(-2.8,-2.2).lineTo(-3.6,-2.3).lineTo(-3.6,-0.2).lineTo(-2.9,-0.5).lineTo(-2.2,-0.8).lineTo(-2.2,-0.2).lineTo(-2.1,0.4).lineTo(-2.8,0.6).lineTo(-3.6,0.9).lineTo(-3.6,4.9).lineTo(-3.7,5.8).curveTo(-3.8,6.1,-4.3,6.3).lineTo(-5.8,6.7).curveTo(-5.8,6.3,-6,5.9).closePath().moveTo(0,6.6).lineTo(0.1,5.9).lineTo(0.1,5.1).lineTo(0.1,2.9).lineTo(0.1,2.2).lineTo(0,1.6).lineTo(0.5,1.7).lineTo(1.2,1.7).lineTo(2.3,1.8).lineTo(2.3,0.1).lineTo(0.8,0.2).lineTo(-0.2,0.3).lineTo(-0.2,-0.9).lineTo(0.8,-0.8).lineTo(2.3,-0.8).lineTo(2.3,-2.4).lineTo(-0.4,-2.4).lineTo(-0.5,0.5).curveTo(-0.6,1.7,-0.8,2.7).curveTo(-1,3.7,-1.3,4.5).lineTo(-2.2,6.4).lineTo(-2.8,6.1).lineTo(-3.5,6).curveTo(-2.8,5.1,-2.5,4.3).curveTo(-2,3.4,-1.8,2.4).curveTo(-1.7,1.4,-1.6,0.1).lineTo(-1.6,-1.6).lineTo(-1.6,-3.7).lineTo(-1.7,-6).lineTo(-1,-5.9).lineTo(0,-5.9).lineTo(2,-5.9).lineTo(4,-5.9).lineTo(5.3,-5.9).lineTo(6,-6).lineTo(5.9,-5.1).lineTo(5.9,-4.1).lineTo(5.9,-3.2).lineTo(6,-2.3).lineTo(4.9,-2.4).lineTo(3.4,-2.4).lineTo(3.4,-0.8).lineTo(5.3,-0.8).lineTo(6.6,-0.9).lineTo(6.6,0.3).lineTo(5.3,0.2).lineTo(3.4,0.1).lineTo(3.4,1.8).lineTo(4.6,1.7).lineTo(5.4,1.7).lineTo(5.9,1.6).lineTo(5.9,2.2).lineTo(5.8,2.9).lineTo(5.8,4.9).lineTo(5.9,5.7).lineTo(6,6.4).lineTo(4.6,6.4).lineTo(4.6,5.8).lineTo(1.2,5.8).lineTo(1.2,6.6).closePath().moveTo(1.2,4.8).lineTo(4.6,4.8).lineTo(4.6,2.6).lineTo(1.2,2.6).closePath().moveTo(-0.4,-3.4).lineTo(4.7,-3.4).lineTo(4.7,-4.9).lineTo(-0.4,-4.9).closePath();
	this.shape_2.setTransform(519.8,111.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.4,6.1).lineTo(-1,5.5).lineTo(0.4,5.1).curveTo(1.1,4.8,1.7,4.4).curveTo(2.3,4,2.7,3.4).curveTo(2.2,2.6,2,1.5).curveTo(1.8,0.4,1.8,-1.1).lineTo(1.2,-0.3).lineTo(0.8,0.4).lineTo(0.4,-0.1).lineTo(0,-0.4).curveTo(0.6,-1.3,1.1,-2.2).curveTo(1.5,-3.3,1.8,-4.4).curveTo(2.1,-5.6,2.2,-6.6).lineTo(3,-6.4).lineTo(3.7,-6.3).lineTo(3.9,-6.2).curveTo(3.9,-6.2,3.9,-6.1).curveTo(3.9,-6.1,3.9,-6.1).curveTo(3.9,-6.1,3.8,-6).curveTo(3.8,-6,3.7,-6).lineTo(3.6,-5.8).lineTo(3.4,-5.3).lineTo(3,-4.2).lineTo(4.7,-4.2).lineTo(5.9,-4.2).lineTo(6.5,-4.3).lineTo(6.5,-3.1).lineTo(5.5,-3.1).lineTo(5.3,-0.3).curveTo(5.1,0.9,4.7,1.8).curveTo(4.4,2.7,4.1,3.4).curveTo(4.5,3.9,5.2,4.3).curveTo(5.8,4.6,6.9,4.9).curveTo(6.4,5.2,6.3,5.6).lineTo(6,6.3).lineTo(4.8,5.6).lineTo(3.9,5).lineTo(3.4,4.4).curveTo(2.9,4.9,2,5.5).curveTo(1.2,6.1,0,6.6).lineTo(-0.4,6.1).closePath().moveTo(2.4,-2.2).lineTo(1.8,-1.2).lineTo(2.8,-1.2).lineTo(2.9,0.7).curveTo(3.1,1.7,3.4,2.3).curveTo(3.7,1.4,4.1,0).curveTo(4.3,-1.4,4.4,-3.2).lineTo(2.7,-3.2).lineTo(2.4,-2.2).closePath().moveTo(-6.1,5.8).lineTo(-6.7,5.2).curveTo(-5.3,5.2,-4.3,5).curveTo(-3.1,4.8,-2.5,4.2).lineTo(-3.7,3.9).lineTo(-5.1,3.6).lineTo(-4.6,2.7).lineTo(-4.2,1.8).lineTo(-5.4,1.9).lineTo(-6.3,1.9).lineTo(-6.3,0.9).lineTo(-5.3,0.9).lineTo(-3.9,1).lineTo(-3.7,0.4).lineTo(-3.5,-0.2).lineTo(-2.9,-0.1).lineTo(-2.3,0).lineTo(-2,0.1).lineTo(-2.2,0.3).lineTo(-2.5,0.6).lineTo(-2.7,1).lineTo(-0.7,1).lineTo(-0.1,0.9).lineTo(0.3,0.9).lineTo(-0.1,2.5).lineTo(-0.7,3.7).lineTo(-0,4).lineTo(0.6,4.3).lineTo(0.2,4.7).lineTo(-0,5.2).lineTo(-0.7,4.9).lineTo(-1.3,4.6).curveTo(-1.9,5.2,-3,5.6).curveTo(-4,6.1,-5.6,6.4).lineTo(-6.1,5.8).closePath().moveTo(-3.7,3.1).lineTo(-2.7,3.3).lineTo(-1.7,3.4).lineTo(-1.3,2.7).lineTo(-1.1,1.8).lineTo(-3.1,1.8).closePath().moveTo(-6.2,-0.1).lineTo(-6.9,-0.5).curveTo(-5.9,-0.9,-5.2,-1.4).curveTo(-4.4,-2,-3.8,-2.8).lineTo(-5.1,-2.8).lineTo(-6.1,-2.7).lineTo(-6.1,-3.8).lineTo(-4.8,-3.7).lineTo(-3.1,-3.7).lineTo(-3.1,-5).lineTo(-3.2,-5.8).lineTo(-3.3,-6.6).lineTo(-2.7,-6.5).lineTo(-1.9,-6.5).curveTo(-1.9,-6.5,-1.9,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.7,-6.4,-1.7,-6.4).curveTo(-1.7,-6.4,-1.8,-6.4).curveTo(-1.8,-6.3,-1.8,-6.3).curveTo(-1.8,-6.3,-1.8,-6.3).lineTo(-2,-6.2).lineTo(-2,-5.8).lineTo(-2,-3.7).lineTo(-0.5,-3.7).lineTo(0.8,-3.8).lineTo(0.8,-2.7).lineTo(-0.4,-2.8).lineTo(-2,-2.8).lineTo(-2,-1.6).lineTo(-1.9,-0.4).lineTo(-3.3,-0.4).lineTo(-3.2,-1.4).lineTo(-3.1,-2.6).lineTo(-3.8,-1.4).lineTo(-4.6,-0.5).lineTo(-5.7,0.4).lineTo(-6.2,-0.1).closePath().moveTo(-1,-1).lineTo(-1.7,-1.7).lineTo(-1,-2.3).lineTo(-0.2,-1.7).lineTo(0.4,-1.1).lineTo(-0.3,-0.3).lineTo(-1,-1).closePath().moveTo(-0.9,-4.3).lineTo(-1.5,-4.3).lineTo(-1.1,-5.1).lineTo(-0.8,-6.1).lineTo(-0.1,-5.8).lineTo(0.5,-5.7).lineTo(0.6,-5.6).lineTo(0.5,-5.5).lineTo(0.1,-5.2).lineTo(-0.4,-4.1).lineTo(-0.9,-4.3).closePath().moveTo(-5.3,-4.9).lineTo(-5.5,-5.7).lineTo(-4.3,-5.9).lineTo(-4.1,-5.2).lineTo(-3.9,-4.4).lineTo(-5.2,-4.3).lineTo(-5.3,-4.9).closePath();
	this.shape_3.setTransform(519.8,95.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,6).curveTo(-1.9,5.7,-2.2,5.3).lineTo(-1.1,5.4).curveTo(-1,5.4,-0.9,5.4).curveTo(-0.8,5.4,-0.8,5.3).curveTo(-0.7,5.3,-0.7,5.3).curveTo(-0.6,5.3,-0.6,5.2).curveTo(-0.6,5.2,-0.5,5.1).curveTo(-0.5,5.1,-0.5,5).curveTo(-0.5,5,-0.5,4.9).curveTo(-0.5,4.9,-0.5,4.8).lineTo(-0.5,3.9).lineTo(-2.8,3.9).lineTo(-4.8,3.9).lineTo(-6.4,4).lineTo(-6.4,2.7).lineTo(-4.8,2.8).lineTo(-2.8,2.8).lineTo(-0.5,2.8).lineTo(-0.5,2).lineTo(2.1,1.1).lineTo(-3.2,1.1).lineTo(-5.6,1.1).lineTo(-5.6,0.2).lineTo(-4.5,0.2).lineTo(-2.9,0.2).lineTo(-0.8,0.3).lineTo(0.9,0.2).lineTo(2.6,0.2).lineTo(4.1,0.2).lineTo(4.9,0.2).lineTo(4.9,1.4).lineTo(3.9,1.5).lineTo(3,1.7).lineTo(0.8,2.5).lineTo(0.8,2.8).lineTo(4,2.8).lineTo(6.4,2.7).lineTo(6.4,4).lineTo(4,3.9).lineTo(0.8,3.9).lineTo(0.8,5.4).curveTo(0.8,5.8,0.6,6.1).curveTo(0.5,6.4,-0.1,6.5).curveTo(-0.6,6.7,-1.6,6.9).lineTo(-1.8,6).closePath().moveTo(3.3,-0.5).lineTo(2,-0.6).lineTo(0,-0.6).lineTo(-1.8,-0.6).lineTo(-3.2,-0.5).lineTo(-4.5,-0.5).lineTo(-4.4,-1.2).lineTo(-4.4,-2).lineTo(-4.4,-2.8).lineTo(-4.5,-3.6).lineTo(-3.2,-3.5).lineTo(-1.8,-3.5).lineTo(0,-3.5).lineTo(2,-3.5).lineTo(3.3,-3.5).lineTo(4.5,-3.6).lineTo(4.5,-2.8).lineTo(4.5,-2).lineTo(4.5,-1.2).lineTo(4.5,-0.5).lineTo(3.3,-0.5).closePath().moveTo(-3.2,-1.5).lineTo(3.3,-1.5).lineTo(3.3,-2.5).lineTo(-3.2,-2.5).closePath().moveTo(4.5,-4.3).lineTo(2.5,-4.4).lineTo(-0.1,-4.4).lineTo(-2.7,-4.4).lineTo(-4.6,-4.3).lineTo(-6.3,-4.2).lineTo(-6.3,-5.5).lineTo(-3.8,-5.4).lineTo(-0.6,-5.4).lineTo(-0.7,-6).lineTo(-1,-6.7).lineTo(0.6,-6.9).lineTo(0.7,-6.1).lineTo(0.8,-5.4).lineTo(3.8,-5.4).lineTo(6.1,-5.5).lineTo(6.1,-4.2).lineTo(4.5,-4.3).closePath();
	this.shape_4.setTransform(-517.1,143.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,6.5).lineTo(-6.5,6).curveTo(-5.6,5.7,-4.6,5.1).lineTo(-3,3.9).curveTo(-2.3,3.3,-1.9,2.8).lineTo(-1.3,3.3).lineTo(-0.8,3.6).lineTo(-0.4,3.8).lineTo(-0.6,3.9).lineTo(-1.1,4.1).lineTo(-1.8,4.7).lineTo(-2.7,5.3).lineTo(-4,6.2).lineTo(-5.5,7).lineTo(-5.9,6.5).closePath().moveTo(3.3,5.2).curveTo(2.2,4.4,1,3.7).lineTo(1.8,2.8).lineTo(4.2,4.2).lineTo(6.3,5.6).lineTo(5.2,6.9).curveTo(4.3,6,3.3,5.2).closePath().moveTo(3.8,1.9).lineTo(0,1.9).lineTo(-3.8,1.9).lineTo(-6.6,2.1).lineTo(-6.6,0.7).lineTo(-4.8,0.8).lineTo(-2.8,0.8).lineTo(-2.8,-2.7).lineTo(-4.3,-2.7).lineTo(-5.7,-2.6).lineTo(-5.7,-3.9).lineTo(-4.3,-3.8).lineTo(-2.8,-3.8).lineTo(-2.8,-4.4).lineTo(-2.8,-5.9).lineTo(-2.8,-6.7).lineTo(-2.1,-6.6).lineTo(-1.3,-6.6).lineTo(-1.1,-6.5).lineTo(-1.2,-6.4).curveTo(-1.3,-6.4,-1.3,-6.3).curveTo(-1.3,-6.3,-1.4,-6.3).curveTo(-1.4,-6.3,-1.4,-6.2).curveTo(-1.4,-6.2,-1.4,-6.1).lineTo(-1.5,-5.5).lineTo(-1.5,-3.8).lineTo(1.5,-3.8).lineTo(1.5,-4.6).lineTo(1.5,-6.2).lineTo(1.5,-7).lineTo(2.2,-6.9).lineTo(3,-6.9).lineTo(3.2,-6.8).lineTo(3.1,-6.7).curveTo(3,-6.7,3,-6.6).curveTo(3,-6.6,2.9,-6.6).curveTo(2.9,-6.5,2.9,-6.5).curveTo(2.9,-6.4,2.9,-6.4).lineTo(2.8,-5.8).lineTo(2.8,-3.8).lineTo(4.5,-3.8).lineTo(6,-3.9).lineTo(6,-2.6).lineTo(4.5,-2.7).lineTo(2.8,-2.7).lineTo(2.8,0.8).lineTo(4.9,0.8).lineTo(6.6,0.7).lineTo(6.6,2.1).lineTo(3.8,1.9).closePath().moveTo(-1.5,0.8).lineTo(1.5,0.8).lineTo(1.5,-2.7).lineTo(-1.5,-2.7).closePath();
	this.shape_5.setTransform(-517.2,127.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6,5.9).curveTo(-6,5.6,-6.4,5.1).curveTo(-5.5,5.3,-5,5.1).curveTo(-4.6,5,-4.6,4.7).lineTo(-4.6,1.3).lineTo(-5.5,1.9).lineTo(-6.4,2.4).lineTo(-6.4,1.6).lineTo(-6.7,0.8).lineTo(-5.6,0.5).lineTo(-4.6,0.2).lineTo(-4.6,-2.3).lineTo(-5.6,-2.2).lineTo(-6.4,-2.1).lineTo(-6.4,-3.4).lineTo(-5.6,-3.3).lineTo(-4.6,-3.3).lineTo(-4.6,-4.8).lineTo(-4.6,-5.6).lineTo(-4.7,-6.2).lineTo(-4.8,-6.7).lineTo(-4.1,-6.6).lineTo(-3.5,-6.6).curveTo(-3.4,-6.6,-3.3,-6.6).curveTo(-3.3,-6.6,-3.2,-6.6).curveTo(-3.2,-6.5,-3.1,-6.5).curveTo(-3.1,-6.5,-3.1,-6.5).curveTo(-3.1,-6.5,-3.1,-6.4).curveTo(-3.1,-6.4,-3.1,-6.3).curveTo(-3.1,-6.3,-3.2,-6.3).curveTo(-3.2,-6.2,-3.3,-6.2).lineTo(-3.5,-5.9).lineTo(-3.5,-5.6).lineTo(-3.5,-3.3).lineTo(-2.8,-3.3).lineTo(-2.4,-3.4).lineTo(-2.4,-2.1).lineTo(-2.8,-2.2).lineTo(-3.5,-2.3).lineTo(-3.5,-0.2).lineTo(-2.9,-0.5).lineTo(-2.3,-0.8).lineTo(-2.2,-0.2).lineTo(-2.1,0.4).lineTo(-2.8,0.6).lineTo(-3.5,0.9).lineTo(-3.5,4.9).lineTo(-3.6,5.8).curveTo(-3.8,6.1,-4.3,6.3).lineTo(-5.8,6.7).curveTo(-5.8,6.3,-6,5.9).closePath().moveTo(-0,6.6).lineTo(0.1,5.9).lineTo(0.1,5.1).lineTo(0.1,2.9).lineTo(0.1,2.2).lineTo(-0,1.6).lineTo(0.5,1.7).lineTo(1.2,1.7).lineTo(2.2,1.8).lineTo(2.2,0.1).lineTo(0.9,0.2).lineTo(-0.2,0.3).lineTo(-0.2,-0.9).lineTo(0.9,-0.8).lineTo(2.2,-0.8).lineTo(2.2,-2.4).lineTo(-0.4,-2.4).lineTo(-0.5,0.5).curveTo(-0.6,1.7,-0.8,2.7).curveTo(-1,3.7,-1.3,4.5).lineTo(-2.2,6.4).lineTo(-2.7,6.1).lineTo(-3.5,6).curveTo(-2.9,5.1,-2.5,4.3).curveTo(-2.1,3.4,-1.8,2.4).curveTo(-1.6,1.4,-1.6,0.1).lineTo(-1.6,-1.6).lineTo(-1.6,-3.7).lineTo(-1.7,-6).lineTo(-1,-5.9).lineTo(0.1,-5.9).lineTo(2,-5.9).lineTo(4,-5.9).lineTo(5.3,-5.9).lineTo(5.9,-6).lineTo(5.8,-5.1).lineTo(5.8,-4.1).lineTo(5.8,-3.2).lineTo(5.9,-2.3).lineTo(4.9,-2.4).lineTo(3.4,-2.4).lineTo(3.4,-0.8).lineTo(5.3,-0.8).lineTo(6.6,-0.9).lineTo(6.6,0.3).lineTo(5.3,0.2).lineTo(3.4,0.1).lineTo(3.4,1.8).lineTo(4.6,1.7).lineTo(5.4,1.7).lineTo(5.9,1.6).lineTo(5.8,2.2).lineTo(5.8,2.9).lineTo(5.8,4.9).lineTo(5.8,5.7).lineTo(5.9,6.4).lineTo(4.6,6.4).lineTo(4.6,5.8).lineTo(1.2,5.8).lineTo(1.2,6.6).closePath().moveTo(1.2,4.8).lineTo(4.6,4.8).lineTo(4.6,2.6).lineTo(1.2,2.6).closePath().moveTo(-0.4,-3.4).lineTo(4.7,-3.4).lineTo(4.7,-4.9).lineTo(-0.4,-4.9).closePath();
	this.shape_6.setTransform(-517.2,111.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.4,6.1).lineTo(-0.9,5.5).lineTo(0.4,5.1).curveTo(1.1,4.8,1.7,4.4).curveTo(2.3,4,2.8,3.4).curveTo(2.3,2.6,2,1.5).curveTo(1.8,0.4,1.8,-1.1).lineTo(1.2,-0.3).lineTo(0.8,0.4).lineTo(0.4,-0.1).lineTo(-0,-0.4).curveTo(0.6,-1.3,1.1,-2.2).curveTo(1.6,-3.3,1.9,-4.4).curveTo(2.1,-5.6,2.2,-6.6).lineTo(3,-6.4).lineTo(3.7,-6.3).lineTo(3.9,-6.2).curveTo(3.9,-6.2,3.9,-6.1).curveTo(3.9,-6.1,3.9,-6.1).curveTo(3.9,-6.1,3.8,-6).curveTo(3.8,-6,3.7,-6).lineTo(3.6,-5.8).lineTo(3.4,-5.3).lineTo(3,-4.2).lineTo(4.7,-4.2).lineTo(5.8,-4.2).lineTo(6.5,-4.3).lineTo(6.5,-3.1).lineTo(5.5,-3.1).lineTo(5.3,-0.3).curveTo(5,0.9,4.7,1.8).curveTo(4.5,2.7,4,3.4).curveTo(4.5,3.9,5.2,4.3).curveTo(5.8,4.6,6.8,4.9).curveTo(6.4,5.2,6.3,5.6).lineTo(6,6.3).lineTo(4.8,5.6).lineTo(3.9,5).lineTo(3.4,4.4).curveTo(2.9,4.9,2,5.5).curveTo(1.2,6.1,-0,6.6).lineTo(-0.4,6.1).closePath().moveTo(2.3,-2.2).lineTo(1.9,-1.2).lineTo(2.8,-1.2).lineTo(2.9,0.7).curveTo(3,1.7,3.4,2.3).curveTo(3.7,1.4,4,0).curveTo(4.4,-1.4,4.4,-3.2).lineTo(2.7,-3.2).lineTo(2.3,-2.2).closePath().moveTo(-6.1,5.8).lineTo(-6.7,5.2).curveTo(-5.3,5.2,-4.3,5).curveTo(-3.1,4.8,-2.5,4.2).lineTo(-3.6,3.9).lineTo(-5.1,3.6).lineTo(-4.6,2.7).lineTo(-4.2,1.8).lineTo(-5.4,1.9).lineTo(-6.2,1.9).lineTo(-6.2,0.9).lineTo(-5.3,0.9).lineTo(-3.9,1).lineTo(-3.7,0.4).lineTo(-3.5,-0.2).lineTo(-2.9,-0.1).lineTo(-2.3,0).lineTo(-2,0.1).lineTo(-2.2,0.3).lineTo(-2.5,0.6).lineTo(-2.7,1).lineTo(-0.7,1).lineTo(-0.1,0.9).lineTo(0.3,0.9).lineTo(-0.1,2.5).lineTo(-0.7,3.7).lineTo(-0,4).lineTo(0.6,4.3).lineTo(0.2,4.7).lineTo(-0,5.2).lineTo(-0.7,4.9).lineTo(-1.3,4.6).curveTo(-2,5.2,-3,5.6).curveTo(-4,6.1,-5.6,6.4).lineTo(-6.1,5.8).closePath().moveTo(-3.7,3.1).lineTo(-2.6,3.3).lineTo(-1.7,3.4).lineTo(-1.4,2.7).lineTo(-1.1,1.8).lineTo(-3.2,1.8).closePath().moveTo(-6.2,-0.1).lineTo(-6.9,-0.5).curveTo(-5.9,-0.9,-5.2,-1.4).curveTo(-4.4,-2,-3.8,-2.8).lineTo(-5.1,-2.8).lineTo(-6.1,-2.7).lineTo(-6.1,-3.8).lineTo(-4.9,-3.7).lineTo(-3.2,-3.7).lineTo(-3.2,-5).lineTo(-3.2,-5.8).lineTo(-3.3,-6.6).lineTo(-2.6,-6.5).lineTo(-1.9,-6.5).curveTo(-1.9,-6.5,-1.9,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.8,-6.5,-1.8,-6.5).curveTo(-1.7,-6.5,-1.7,-6.5).curveTo(-1.7,-6.4,-1.7,-6.4).curveTo(-1.7,-6.4,-1.7,-6.4).curveTo(-1.8,-6.3,-1.8,-6.3).curveTo(-1.8,-6.3,-1.8,-6.3).lineTo(-2,-6.2).lineTo(-2,-5.8).lineTo(-2,-3.7).lineTo(-0.5,-3.7).lineTo(0.8,-3.8).lineTo(0.8,-2.7).lineTo(-0.5,-2.8).lineTo(-2,-2.8).lineTo(-2,-1.6).lineTo(-1.9,-0.4).lineTo(-3.3,-0.4).lineTo(-3.2,-1.4).lineTo(-3.2,-2.6).lineTo(-3.8,-1.4).lineTo(-4.6,-0.5).lineTo(-5.8,0.4).lineTo(-6.2,-0.1).closePath().moveTo(-1,-1).lineTo(-1.7,-1.7).lineTo(-0.9,-2.3).lineTo(-0.2,-1.7).lineTo(0.4,-1.1).lineTo(-0.4,-0.3).lineTo(-1,-1).closePath().moveTo(-0.8,-4.3).lineTo(-1.5,-4.3).lineTo(-1.1,-5.1).lineTo(-0.8,-6.1).lineTo(-0.1,-5.8).lineTo(0.4,-5.7).lineTo(0.6,-5.6).lineTo(0.4,-5.5).lineTo(0.1,-5.2).lineTo(-0.5,-4.1).lineTo(-0.8,-4.3).closePath().moveTo(-5.3,-4.9).lineTo(-5.4,-5.7).lineTo(-4.3,-5.9).lineTo(-4.1,-5.2).lineTo(-4,-4.4).lineTo(-5.2,-4.3).lineTo(-5.3,-4.9).closePath();
	this.shape_7.setTransform(-517.2,95.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.1,7).curveTo(-7,5.4,-6.6,3.4).curveTo(-6.2,1.5,-6.2,-2).lineTo(-6.2,-8.2).lineTo(8.1,-8.2).lineTo(8.1,5.7).curveTo(8.1,7.8,6.2,7.8).lineTo(3.4,7.8).lineTo(3.2,6.3).lineTo(5.6,6.4).curveTo(6.7,6.4,6.7,5.4).lineTo(6.7,2.2).lineTo(1.6,2.2).lineTo(1.6,7.7).lineTo(0.2,7.7).lineTo(0.2,2.2).lineTo(-5,2.2).curveTo(-5.3,5.8,-7.1,8.2).lineTo(-8.1,7).closePath().moveTo(1.6,0.9).lineTo(6.7,0.9).lineTo(6.7,-2.4).lineTo(1.6,-2.4).closePath().moveTo(-4.9,0.9).lineTo(0.2,0.9).lineTo(0.2,-2.4).lineTo(-4.8,-2.4).curveTo(-4.7,-0.7,-4.9,0.9).closePath().moveTo(1.6,-3.7).lineTo(6.7,-3.7).lineTo(6.7,-6.9).lineTo(1.6,-6.9).closePath().moveTo(-4.8,-3.7).lineTo(0.2,-3.7).lineTo(0.2,-6.9).lineTo(-4.8,-6.9).closePath();
	this.shape_8.setTransform(48.8,-207.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5,7.4).curveTo(-2.5,5,-2.5,0.8).lineTo(-2.5,-7.8).lineTo(8.3,-7.8).lineTo(8.3,6.3).curveTo(8.3,8.3,6.5,8.3).lineTo(3.7,8.2).lineTo(3.4,6.9).lineTo(6.1,7).curveTo(7,7,7,6).lineTo(7,-6.6).lineTo(-1.3,-6.6).lineTo(-1.3,0.7).curveTo(-1.3,5.8,-4.1,8.5).lineTo(-5,7.4).closePath().moveTo(0.1,6.1).lineTo(0.1,0.8).lineTo(5.5,0.8).lineTo(5.5,5.3).lineTo(1.3,5.3).lineTo(1.3,6.1).closePath().moveTo(1.3,4.2).lineTo(4.2,4.2).lineTo(4.2,2).lineTo(1.3,2).closePath().moveTo(-7,4.9).curveTo(-6.4,4.3,-6.4,3.3).lineTo(-6.4,-2).lineTo(-8.3,-2).lineTo(-8.3,-3.3).lineTo(-5.1,-3.3).lineTo(-5.1,3.6).lineTo(-3.1,2).lineTo(-3,3.5).curveTo(-4.8,4.9,-6.1,6).closePath().moveTo(-0.7,-0.6).lineTo(-0.7,-1.7).lineTo(2.2,-1.7).lineTo(2.2,-3.3).lineTo(-0.2,-3.3).lineTo(-0.2,-4.5).lineTo(2.2,-4.5).lineTo(2.2,-6.1).lineTo(3.5,-6.1).lineTo(3.5,-4.5).lineTo(5.9,-4.5).lineTo(5.9,-3.3).lineTo(3.5,-3.3).lineTo(3.5,-1.7).lineTo(6.5,-1.7).lineTo(6.5,-0.6).closePath().moveTo(-7.2,-7.6).lineTo(-6.1,-8.5).lineTo(-3.5,-5.7).lineTo(-4.7,-4.7).curveTo(-6,-6.5,-7.2,-7.6).closePath();
	this.shape_9.setTransform(30.9,-207.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.4,7.7).curveTo(-3.4,6,-2.5,2.7).lineTo(-7.4,2.7).lineTo(-7.4,1.5).lineTo(-2.2,1.5).lineTo(-2,-0.4).lineTo(-0.6,-0.4).lineTo(-0.9,1.5).lineTo(6.2,1.5).curveTo(6.1,4.6,5.9,5.9).curveTo(5.7,8.4,3,8.4).lineTo(-0.2,8.3).lineTo(-0.4,6.8).curveTo(1.6,7,3,7).curveTo(4.5,7,4.6,5.5).lineTo(4.8,2.7).lineTo(-1.1,2.7).curveTo(-2,6.9,-7.6,8.8).lineTo(-8.4,7.7).closePath().moveTo(-8.9,-0.5).curveTo(-4.5,-1.2,-1.2,-2.4).curveTo(-3.3,-3.6,-4.5,-5.3).curveTo(-5.8,-3.7,-7.5,-2.3).lineTo(-8.4,-3.2).curveTo(-5.2,-5.8,-3.7,-8.8).lineTo(-2.3,-8.3).lineTo(-3.1,-7).lineTo(6.3,-7).lineTo(6.3,-5.8).curveTo(4.7,-3.8,1.8,-2.4).curveTo(4.9,-1.3,8.9,-1).lineTo(7.9,0.4).curveTo(3.4,-0.2,0.3,-1.6).curveTo(-3.3,-0.1,-8.2,0.7).lineTo(-8.9,-0.5).closePath().moveTo(0.3,-3.1).curveTo(2.8,-4.2,4.4,-5.8).lineTo(-3.4,-5.8).curveTo(-2,-4.2,0.3,-3.1).closePath();
	this.shape_10.setTransform(13.3,-208.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.7,7.9).lineTo(-8.7,6.6).lineTo(-3,6.6).lineTo(-3,-7.9).lineTo(-1.6,-7.9).lineTo(-1.6,6.6).lineTo(1.5,6.6).lineTo(1.5,-7.9).lineTo(3,-7.9).lineTo(3,6.6).lineTo(8.7,6.6).lineTo(8.7,7.9).closePath().moveTo(3.6,2.9).curveTo(5.4,-0.8,6.6,-4.3).lineTo(8,-3.7).curveTo(6.4,0.5,4.9,3.5).closePath().moveTo(-7.9,-3.9).lineTo(-6.7,-4.4).curveTo(-5.2,-1.1,-3.9,2.8).lineTo(-5.3,3.4).curveTo(-6.5,-0.3,-7.9,-3.9).closePath();
	this.shape_11.setTransform(-4.7,-208.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.6,8.6).lineTo(2.6,2.4).lineTo(-3.5,2.4).lineTo(-3.5,1.2).lineTo(2.6,1.2).lineTo(2.6,-3.3).lineTo(-0.7,-3.3).curveTo(-1.5,-1.4,-2.3,0.1).lineTo(-3.5,-0.8).curveTo(-1.8,-3.8,-1,-7.4).lineTo(0.4,-7).lineTo(-0.3,-4.5).lineTo(2.6,-4.5).lineTo(2.6,-8.6).lineTo(4,-8.6).lineTo(4,-4.5).lineTo(8.2,-4.5).lineTo(8.2,-3.3).lineTo(4,-3.3).lineTo(4,1.2).lineTo(8.8,1.2).lineTo(8.8,2.4).lineTo(4,2.4).lineTo(4,8.6).closePath().moveTo(-6.2,8.6).lineTo(-6.2,-1.4).curveTo(-7.1,0.3,-8.1,1.6).lineTo(-8.8,0.1).curveTo(-6.4,-3.5,-4.9,-8.6).lineTo(-3.4,-8.1).curveTo(-4.1,-6.1,-4.8,-4.3).lineTo(-4.8,8.6).closePath();
	this.shape_12.setTransform(-22.7,-208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.5,8.2).lineTo(-3.5,6.9).lineTo(-1.4,6.9).lineTo(-1.4,-7.2).lineTo(7.2,-7.2).lineTo(7.2,6.9).lineTo(8.7,6.9).lineTo(8.7,8.2).closePath().moveTo(-0,6.9).lineTo(5.8,6.9).lineTo(5.8,3.4).lineTo(-0,3.4).closePath().moveTo(-0,2.2).lineTo(5.8,2.2).lineTo(5.8,-1.2).lineTo(-0,-1.2).closePath().moveTo(-0,-2.4).lineTo(5.8,-2.4).lineTo(5.8,-5.9).lineTo(-0,-5.9).closePath().moveTo(-8.6,5.9).lineTo(-2.4,4.6).lineTo(-2.5,6).lineTo(-8.1,7.2).closePath().moveTo(-8.2,2.1).curveTo(-7.1,1.2,-5.4,-1.5).lineTo(-8.3,-1.3).lineTo(-8.7,-2.5).curveTo(-7.3,-4.1,-5.6,-8.2).lineTo(-4.3,-7.7).curveTo(-5.8,-4.8,-7.1,-2.6).lineTo(-4.8,-2.6).lineTo(-3.3,-5.5).lineTo(-1.9,-4.9).curveTo(-3.9,-1.3,-6.3,1.9).lineTo(-2.6,1.5).lineTo(-2.7,2.7).lineTo(-7.9,3.4).closePath();
	this.shape_13.setTransform(-40.6,-208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-134.9,41.5).lineTo(-134.9,-41.5).lineTo(134.9,-41.5).lineTo(134.9,41.5).closePath();
	mask.setTransform(-0.3,-176.1);

	// Layer 8
	this.instance = new lib.codeAn();
	this.instance.setTransform(471.6,-179.4,1,1,0,0,0,609,10.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.moveTo(-495.6,35.9).lineTo(-495.6,-7.7).lineTo(-484.8,-8.1).lineTo(-484.8,-20.6).lineTo(-473.1,-20.6).lineTo(-473.1,-35.9).lineTo(473.6,-35.9).lineTo(473.6,-21.4).lineTo(485.7,-21.4).lineTo(485.7,-6.8).lineTo(495.6,-6.8).lineTo(495.6,35.9).closePath();
	mask_1.setTransform(-1.2,170.8);

	// Layer 6
	this.instance_1 = new lib.codeAn();
	this.instance_1.setTransform(-116.3,154.5,1,1,0,0,180,609,10.4);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 11
	this.instance_2 = new lib.leftRight();
	this.instance_2.setTransform(328.1,-180.1);

	this.instance_3 = new lib.leftRight();
	this.instance_3.setTransform(-327.7,-180.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.moveTo(456.5,51.5).lineTo(456.5,40.9).lineTo(443.4,40.9).lineTo(443.4,30.2).lineTo(-514.1,29.5).lineTo(-514,39).lineTo(-525.2,39.1).lineTo(-525.3,51).lineTo(-532.2,51).lineTo(-532.2,29.5).lineTo(-581.3,29.5).lineTo(-581.3,-51.5).lineTo(581.3,-51.5).lineTo(581.3,29.5).lineTo(466.4,29.5).lineTo(466.4,51.5).closePath();
	mask_2.setTransform(32.6,112.2);

	// Layer 10
	this.instance_4 = new lib.codeAn();
	this.instance_4.setTransform(484,668.8,1,1,90,0,0,609,10.4);

	this.instance_5 = new lib.codeAn();
	this.instance_5.setTransform(-486.1,-442.4,1,1,-90,0,0,609.1,10.4);

	this.instance_4.mask = this.instance_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.7,-222.8,1056.2,389.2);


// stage content:
(lib.XTPT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var il = Math.round(Math.random()*5+5),ps=[],codes=[],that=this;
		this.codes = codes;
		
		for(var j=0;j<60;j++){
			ps[j]=j;
		}
		for(var i=0;i<il;i++){
			var c = new lib.codeAn(),p=ps.splice(Math.round(Math.random()*ps.length),1);
			c.y = Math.random()*768;
			c.x = p*22;
			c.a = 2;
			c.alpha = 0;
			c.rotation = -90;
			c.toA = 1;
			c.stop();
			codes.push(c);
			this.addChildAt(c,0);
		}
		this.render = function(){
			for(var i=0;i<codes.length;i++){
				var c=codes[i];
				c.alpha += (c.toA-c.alpha)*0.1;
				c.a += 0.1;
				c.y += c.a;
				if(c.alpha<0.1){
					that.removeChild(c);
					codes.splice(i,1);
				}
			}
			if(codes.length==0){
				that.removeEventListener('tick',that.render)
			}
		}
		
		this.addEventListener('tick',this.render)
		
		var that = this;
		this.goEnd=function(){
			for(var i=0,il=that.codes.length;i<il;i++){
				var c=that.codes[i];
				c.toA = 0;
				that.removeChild(c);
			}
			that.gotoAndPlay(240);
		}
		this.skip.addEventListener('click',this.goEnd);
	}
	this.frame_44 = function() {
		for(var i=0,il=this.codes.length;i<il;i++){
				var c=this.codes[i];
				c.toA = 0;
		}
	}
	this.frame_251 = function() {
		this.stop();
		this.removeEventListener('tick',this.render)
		this.rect8.addEventListener('click',function(){
			window.location.href = '#/excute';
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(207).call(this.frame_251).wait(1));

	// Layer 2
	this.skip = new lib.skip();
	this.skip.setTransform(683.9,723.4);
	new cjs.ButtonHelper(this.skip, 0, 1, 2, false, new lib.skip(), 3);

	this.timeline.addTween(cjs.Tween.get(this.skip).to({_off:true},238).wait(14));

	// rect8
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(682.4,650.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.rect8 = new lib.rect8();
	this.rect8.setTransform(1025.9,633.5);
	new cjs.ButtonHelper(this.rect8, 0, 1, 2, false, new lib.rect8(), 3);

	this.rect7 = new lib.rect7();
	this.rect7.setTransform(681.7,634.1);
	new cjs.ButtonHelper(this.rect7, 0, 1, 2, false, new lib.rect7(), 3);

	this.rect6 = new lib.rect6();
	this.rect6.setTransform(339.5,634.1);
	new cjs.ButtonHelper(this.rect6, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(2,1,1).moveTo(-537,-40.8).lineTo(537,-40.8).curveTo(548.1,-40.8,548.1,-29.7).lineTo(548.1,29.7).curveTo(548.1,40.8,537,40.8).lineTo(-537,40.8).curveTo(-548.1,40.8,-548.1,29.7).lineTo(-548.1,-29.7).curveTo(-548.1,-40.8,-537,-40.8).closePath();
	this.shape.setTransform(682.4,633.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke().moveTo(-537,40.8).curveTo(-548.1,40.8,-548.1,29.7).lineTo(-548.1,-29.7).curveTo(-548.1,-40.8,-537,-40.8).lineTo(537,-40.8).curveTo(548.1,-40.8,548.1,-29.7).lineTo(548.1,29.7).curveTo(548.1,40.8,537,40.8).closePath();
	this.shape_1.setTransform(682.4,633.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},229).to({state:[{t:this.instance}]},7).to({state:[{t:this.shape_1},{t:this.shape},{t:this.rect6},{t:this.rect7},{t:this.rect8}]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({y:633.9,alpha:1},7).to({_off:true},1).wait(15));

	// Layer 13
	this.code = new lib.flow();
	this.code.setTransform(684.7,324);
	this.code.alpha = 0;
	this.code._off = true;

	this.timeline.addTween(cjs.Tween.get(this.code).wait(206).to({_off:false},0).wait(1).to({regX:1.3,regY:-25.3,x:686,y:298.7,alpha:0.228},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.644},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.804},0).wait(1).to({alpha:0.861},0).wait(1).to({alpha:0.907},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:0,regY:0,x:684.7,y:324,alpha:1},0).wait(33));

	// Layer 11
	this.rect5 = new lib.rect5();
	this.rect5.setTransform(683.9,477.1);
	this.rect5.alpha = 0;
	this.rect5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rect5).wait(190).to({_off:false},0).to({alpha:1},5).wait(57));

	// rect4
	this.rect4 = new lib.rect4();
	this.rect4.setTransform(1138.5,246.4);
	this.rect4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rect4).wait(180).to({_off:false},0).wait(72));

	// rect1
	this.rect1 = new lib.rect1();
	this.rect1.setTransform(229.4,246.4);
	this.rect1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rect1).wait(180).to({_off:false},0).wait(72));

	// rect3
	this.rect3 = new lib.rect2();
	this.rect3.setTransform(900,142.1);
	this.rect3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rect3).wait(169).to({_off:false},0).wait(83));

	// rect2
	this.rect2 = new lib.rect2();
	this.rect2.setTransform(468.6,142.1);
	this.rect2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rect2).wait(169).to({_off:false},0).wait(83));

	// 提供标准化的接口，实现组件间的业务协同和数据共享交换
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(685.1,450.4,1.925,1.925);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).to({scaleX:2.4,scaleY:2.4,x:685,alpha:1},4).wait(33).to({x:685.1},0).wait(1).to({regY:-0.6,scaleX:1.95,scaleY:1.95,y:436.1},0).wait(1).to({scaleX:1.59,scaleY:1.59,y:425.8},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:418.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:413.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:411},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:409.7},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:409.9},0).wait(90));

	// Symbol 3
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(687.1,193.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107).to({_off:false},0).wait(1).to({y:212.7},0).wait(1).to({y:230.3},0).wait(1).to({y:244.5},0).wait(1).to({y:255},0).wait(1).to({y:262.3},0).wait(1).to({y:267.2},0).wait(1).to({y:270.4},0).wait(1).to({y:272.4},0).wait(1).to({y:273.4},0).wait(1).to({y:273.7},0).wait(135));

	// Symbol 2
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(683.9,379.7,1,0.045);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(102).to({_off:false},0).wait(1).to({scaleY:0.51,y:352.8,alpha:0.483},0).wait(1).to({scaleY:0.78,y:337,alpha:0.768},0).wait(1).to({scaleY:0.94,y:327.8,alpha:0.932},0).wait(1).to({scaleY:1,y:324.1,alpha:1},0).wait(146));

	// title
	this.instance_4 = new lib.title();
	this.instance_4.setTransform(681,364.5,3.033,3.033,0,0,0,67,14.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).wait(1).to({regX:67.5,regY:15.1,x:682.5,y:366.4,alpha:0.107},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.49},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.713},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.827},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.997},0).wait(1).to({regX:67,regY:14.5,x:681,y:364.5,alpha:1},0).wait(29).to({regX:67.5,regY:15.1,scaleX:3,scaleY:3,x:682.5,y:360.7},0).wait(1).to({scaleX:2.88,scaleY:2.88,x:682.4,y:342.2},0).wait(1).to({scaleX:2.67,scaleY:2.67,x:682.3,y:308.7},0).wait(1).to({scaleX:2.36,scaleY:2.36,x:682.2,y:259.2},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:682,y:197.7},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:681.8,y:134.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:681.6,y:84.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:681.5,y:54.5},0).wait(1).to({regX:67,regY:14.5,scaleX:1,scaleY:1,x:681,y:44.5},0).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1314,1088.8,104,27.8);

})(lib = lib||{}, images = images||{}, cjs = cjs||{}, ss = ss||{});
var lib, images, cjs, ss;
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



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.9,9.2).curveTo(3.8,6.4,3.6,-0.2).lineTo(3.6,-9.9).lineTo(10.5,-9.9).lineTo(10.5,8).curveTo(10.5,10.1,8.6,10.3).lineTo(6,10.3).lineTo(5.4,7.9).lineTo(7.3,8).curveTo(8.1,8,8.1,7.1).lineTo(8.1,3.3).lineTo(5.9,3.3).curveTo(5.8,8.3,4.2,10.8).lineTo(1.9,9.2).closePath().moveTo(5.9,0.9).lineTo(8.1,0.9).lineTo(8.1,-2.1).lineTo(5.9,-2.1).lineTo(5.9,0.9).closePath().moveTo(5.9,-4.5).lineTo(8.1,-4.5).lineTo(8.1,-7.6).lineTo(5.9,-7.6).closePath().moveTo(-6.3,8.7).curveTo(-3.8,7,-2.9,4.6).lineTo(-5.3,4.6).lineTo(-5.3,-3.5).lineTo(-3.4,-3.5).lineTo(-3.4,2.1).lineTo(-2.5,2.1).lineTo(-2.5,-4.7).lineTo(-5.6,-4.7).lineTo(-5.6,-7.2).lineTo(-4,-7.2).lineTo(-5.3,-9.9).lineTo(-3.1,-10.8).lineTo(-1.6,-7.7).lineTo(-2.8,-7.2).lineTo(-1.3,-7.2).lineTo(0.3,-10.8).lineTo(2.8,-9.9).lineTo(1.3,-7.2).lineTo(3.1,-7.2).lineTo(3.1,-4.7).lineTo(-0.1,-4.7).lineTo(-0.1,2.1).lineTo(0.8,2.1).lineTo(0.8,-3.5).lineTo(2.7,-3.5).lineTo(2.7,5.8).lineTo(0.8,5.8).lineTo(0.8,4.6).lineTo(-0.4,4.6).curveTo(-1.1,8.4,-4.3,10.8).curveTo(-5,9.9,-6.3,8.7).closePath().moveTo(-10.3,9.6).curveTo(-9.2,5.5,-8.4,1.3).lineTo(-5.7,2.3).lineTo(-7.6,10.5).lineTo(-10.3,9.6).closePath().moveTo(-10.5,-2.7).lineTo(-8.8,-4.7).lineTo(-5.5,-2).lineTo(-7.5,0.2).lineTo(-10.5,-2.7).closePath().moveTo(-9.9,-8.6).lineTo(-8.3,-10.5).curveTo(-5.9,-8.9,-5.1,-8.1).lineTo(-7.1,-5.9).curveTo(-8.4,-7.3,-9.9,-8.6).closePath();
	this.shape.setTransform(186.5,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-10.7,7.5).lineTo(-8.6,5.7).lineTo(-8.6,-0.3).lineTo(-10.6,-0.3).lineTo(-10.6,-3.1).lineTo(-6,-3.1).lineTo(-6,5.8).curveTo(-4.6,7.8,-1.5,7.7).lineTo(1.8,7.8).lineTo(10.7,7.6).lineTo(9.6,10.3).lineTo(1.9,10.2).lineTo(-2.6,10.1).curveTo(-3.6,10.1,-4.9,9.6).curveTo(-6.1,9.2,-7.1,8.1).lineTo(-9.5,10.7).closePath().moveTo(-3.9,6.3).lineTo(-3.9,-8.7).lineTo(0,-8.7).lineTo(0.5,-10.7).lineTo(3.5,-10.6).lineTo(2.8,-8.7).lineTo(8.6,-8.7).lineTo(8.6,-1.9).lineTo(-1.1,-1.9).lineTo(-1.1,-0.5).lineTo(9.2,-0.5).lineTo(9.2,6.3).closePath().moveTo(-1.1,3.9).lineTo(6.4,3.9).lineTo(6.4,1.9).lineTo(-1.1,1.9).closePath().moveTo(-1.1,-4.3).lineTo(5.8,-4.3).lineTo(5.8,-6.2).lineTo(-1.1,-6.2).closePath().moveTo(-10.2,-9.1).lineTo(-7.9,-10.6).curveTo(-6,-8.4,-4.9,-6.7).lineTo(-7.4,-5).curveTo(-8.9,-7.3,-10.2,-9.1).closePath();
	this.shape_1.setTransform(164.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,6.5).lineTo(3,6.6).curveTo(4.8,6.6,4.8,5).lineTo(4.8,-7).lineTo(-10.5,-7).lineTo(-10.5,-9.8).lineTo(10.5,-9.8).lineTo(10.5,-7).lineTo(8.1,-7).lineTo(8.1,6.3).curveTo(8.1,7.7,7.5,8.5).curveTo(6.9,9.3,5.7,9.5).curveTo(4.6,9.8,0.3,9.8).lineTo(-0.5,6.5).closePath().moveTo(-8.2,5.7).lineTo(-8.2,-4.7).lineTo(1.9,-4.7).lineTo(1.9,4.5).lineTo(-5.2,4.5).lineTo(-5.2,5.7).closePath().moveTo(-5.2,1.9).lineTo(-1.1,1.9).lineTo(-1.1,-2.2).lineTo(-5.2,-2.2).closePath();
	this.shape_2.setTransform(142.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.3,-1.1).lineTo(-1.1,-3.1).curveTo(0.7,-1.7,3.3,0.9).lineTo(1,3.1).curveTo(-0.5,1.3,-3.3,-1.1).closePath();
	this.shape_3.setTransform(113.9,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.9,6.9).curveTo(1.7,9,-1.2,10.6).lineTo(-3,7.9).curveTo(-0.1,6.4,2,4.4).curveTo(0.7,2.4,-0,0).lineTo(-0.7,1).lineTo(-2.2,-1).lineTo(-2.2,0.6).lineTo(-7.1,0.6).lineTo(-7.1,6.1).lineTo(-2.5,3.7).lineTo(-2.1,6.7).curveTo(-7.6,9.4,-8.9,10.6).lineTo(-10.5,8.5).curveTo(-9.9,7.7,-9.9,6.7).lineTo(-9.9,-2.1).lineTo(-5,-2.1).lineTo(-5,-6.3).lineTo(-10.4,-6.3).lineTo(-10.4,-9.1).lineTo(-2.2,-9.1).lineTo(-2.2,-2.2).curveTo(-0.2,-5.6,0.7,-10.7).lineTo(3.5,-10.1).lineTo(2.8,-7.3).lineTo(10.2,-7.3).lineTo(10.2,-4.4).lineTo(8.7,-4.4).curveTo(8.1,1,5.8,4.5).curveTo(7.7,6.5,10.5,7.9).lineTo(8.6,10.6).curveTo(5.8,9,3.9,6.9).closePath().moveTo(1.7,-3.6).curveTo(2.3,-0.4,3.9,2).curveTo(5.3,-0.4,5.9,-4.4).lineTo(2,-4.4).lineTo(1.7,-3.6).closePath();
	this.shape_4.setTransform(99.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.1,8.3).curveTo(4.5,7.3,9.2,3.8).lineTo(10.8,5.5).curveTo(6.1,9.4,-1.9,10.7).curveTo(-2.5,9.3,-3.1,8.3).closePath().moveTo(-8.7,10.5).lineTo(-8.7,1.1).lineTo(-9.9,3.4).lineTo(-10.7,-0.9).curveTo(-8.6,-4.8,-7.2,-10.7).lineTo(-4.5,-10.1).curveTo(-5.2,-7.3,-6.1,-4.9).lineTo(-6.1,10.5).closePath().moveTo(-5,7.2).lineTo(-5,-7.2).lineTo(-2.7,-7.2).lineTo(-2.7,-5.4).curveTo(0,-8.2,1,-10.7).lineTo(4.2,-10.7).lineTo(3.1,-8.9).lineTo(9.9,-8.9).lineTo(9.9,-6.7).curveTo(8.7,-4.8,6.9,-3.4).curveTo(8.6,-2.8,10.7,-2.6).lineTo(9.8,-0.1).curveTo(7.7,-0.4,5.9,-1).lineTo(7.2,0.3).curveTo(4.6,1.9,-0.5,3.5).lineTo(-1.7,1.6).curveTo(2.9,0.3,5.6,-1.1).lineTo(4.2,-1.7).curveTo(1.7,-0.5,-1.6,0.2).lineTo(-2.7,-1.8).lineTo(-2.7,7.2).closePath().moveTo(-2.7,-2.3).curveTo(-0.3,-2.7,1.7,-3.4).curveTo(0.8,-4,0,-4.9).lineTo(-0.9,-3.8).lineTo(-2.7,-5.3).closePath().moveTo(4.3,-4.5).curveTo(5.9,-5.4,6.9,-6.5).lineTo(1.7,-6.5).curveTo(2.8,-5.4,4.3,-4.5).closePath().moveTo(-1.8,4.7).curveTo(4.3,3.3,7.5,1).lineTo(9,2.7).curveTo(5.9,5.1,-0.5,6.8).lineTo(-1.8,4.7).closePath();
	this.shape_5.setTransform(76.9,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,6.5).lineTo(3,6.6).curveTo(4.8,6.6,4.8,5).lineTo(4.8,-7).lineTo(-10.5,-7).lineTo(-10.5,-9.8).lineTo(10.5,-9.8).lineTo(10.5,-7).lineTo(8.1,-7).lineTo(8.1,6.3).curveTo(8.1,7.7,7.5,8.5).curveTo(6.9,9.3,5.7,9.5).curveTo(4.6,9.8,0.3,9.8).lineTo(-0.5,6.5).closePath().moveTo(-8.2,5.7).lineTo(-8.2,-4.7).lineTo(1.9,-4.7).lineTo(1.9,4.5).lineTo(-5.2,4.5).lineTo(-5.2,5.7).closePath().moveTo(-5.2,1.9).lineTo(-1.1,1.9).lineTo(-1.1,-2.2).lineTo(-5.2,-2.2).closePath();
	this.shape_6.setTransform(54.9,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.2,-1.1).lineTo(-1.1,-3.1).curveTo(0.7,-1.7,3.3,0.9).lineTo(1,3.1).curveTo(-0.5,1.3,-3.2,-1.1).closePath();
	this.shape_7.setTransform(25.9,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-10.7,9.9).lineTo(-10.7,8).lineTo(-8.4,8).lineTo(-8.4,-1.3).lineTo(-1.9,-1.3).lineTo(-1.9,-2.2).lineTo(-10.3,-2.2).lineTo(-10.3,-4.1).lineTo(-1.9,-4.1).lineTo(-1.9,-5.1).lineTo(-9.4,-5.1).lineTo(-9.4,-9.9).lineTo(9.4,-9.9).lineTo(9.4,-5.1).lineTo(1.4,-5.1).lineTo(1.4,-4.1).lineTo(10.2,-4.1).lineTo(10.2,-2.2).lineTo(1.4,-2.2).lineTo(1.4,-1.3).lineTo(8.3,-1.3).lineTo(8.3,8).lineTo(10.7,8).lineTo(10.7,9.9).closePath().moveTo(-5.3,8).lineTo(5.4,8).lineTo(5.4,7.1).lineTo(-5.3,7.1).closePath().moveTo(-5.3,5.7).lineTo(5.4,5.7).lineTo(5.4,4.9).lineTo(-5.3,4.9).closePath().moveTo(-5.3,3.6).lineTo(5.4,3.6).lineTo(5.4,2.7).lineTo(-5.3,2.7).closePath().moveTo(-5.3,1.4).lineTo(5.4,1.4).lineTo(5.4,0.5).lineTo(-5.3,0.5).closePath().moveTo(3.9,-6.8).lineTo(6.6,-6.8).lineTo(6.6,-8.2).lineTo(3.9,-8.2).closePath().moveTo(-1.4,-6.8).lineTo(1.3,-6.8).lineTo(1.3,-8.2).lineTo(-1.4,-8.2).closePath().moveTo(-6.6,-6.8).lineTo(-3.9,-6.8).lineTo(-3.9,-8.2).lineTo(-6.6,-8.2).closePath();
	this.shape_8.setTransform(10.9,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2,10).lineTo(-2,8.6).lineTo(-7.8,8.6).lineTo(-7.8,9.9).lineTo(-10,9.9).lineTo(-10,-5.7).lineTo(-7.2,-5.7).lineTo(-7.2,-7.5).lineTo(-10.6,-7.5).lineTo(-10.6,-10).lineTo(0.5,-10).lineTo(0.5,-7.5).lineTo(-2.5,-7.5).lineTo(-2.5,-5.7).lineTo(0.3,-5.7).lineTo(0.3,10).closePath().moveTo(-7.8,6.3).lineTo(-2,6.3).lineTo(-2,5).lineTo(-7.8,5).closePath().moveTo(-7.8,2.9).lineTo(-2,2.9).lineTo(-2,1.6).lineTo(-2.5,1.6).curveTo(-4.3,1.6,-4.4,-0.3).lineTo(-4.4,-3.4).lineTo(-5.3,-3.4).curveTo(-5.4,0.5,-6.5,2.4).lineTo(-7.8,1.4).closePath().moveTo(-8.1,0.6).curveTo(-7.2,-0.7,-7.2,-3.4).lineTo(-8.1,-3.4).closePath().moveTo(-2.5,-1).curveTo(-2.5,-0.2,-1.7,-0.2).lineTo(-1.6,-0.2).lineTo(-1.6,-3.4).lineTo(-2.5,-3.4).closePath().moveTo(-5.3,-5.7).lineTo(-4.4,-5.7).lineTo(-4.4,-7.5).lineTo(-5.3,-7.5).closePath().moveTo(4.4,9.7).curveTo(1.6,9.7,1.6,6.7).lineTo(1.6,-3.1).lineTo(6.7,-3.1).lineTo(6.7,-7.2).lineTo(1.3,-7.2).lineTo(1.3,-9.9).lineTo(9.5,-9.9).lineTo(9.5,-0.3).lineTo(4.4,-0.3).lineTo(4.4,6).curveTo(4.4,7,5.3,7).lineTo(6.3,7).curveTo(7.1,7,7.4,6.4).curveTo(7.7,5.8,7.9,2.6).curveTo(8.9,3.1,10.6,3.6).curveTo(10.2,6.8,9.9,7.8).curveTo(9.6,8.8,9,9.2).curveTo(8.2,9.7,7.2,9.7).closePath();
	this.shape_9.setTransform(-10.9,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,6.5).lineTo(3,6.6).curveTo(4.8,6.6,4.8,5).lineTo(4.8,-7).lineTo(-10.5,-7).lineTo(-10.5,-9.8).lineTo(10.5,-9.8).lineTo(10.5,-7).lineTo(8.1,-7).lineTo(8.1,6.3).curveTo(8.1,7.7,7.5,8.5).curveTo(6.9,9.3,5.7,9.5).curveTo(4.6,9.8,0.3,9.8).lineTo(-0.5,6.5).closePath().moveTo(-8.2,5.7).lineTo(-8.2,-4.7).lineTo(1.9,-4.7).lineTo(1.9,4.5).lineTo(-5.2,4.5).lineTo(-5.2,5.7).closePath().moveTo(-5.2,1.9).lineTo(-1.1,1.9).lineTo(-1.1,-2.2).lineTo(-5.2,-2.2).closePath();
	this.shape_10.setTransform(-33.1,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.2,-1.1).lineTo(-1.2,-3.1).curveTo(0.8,-1.7,3.2,0.9).lineTo(1,3.1).curveTo(-0.5,1.3,-3.2,-1.1).closePath();
	this.shape_11.setTransform(-62.1,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,10.5).lineTo(-7.7,0.2).curveTo(-8.7,1.6,-9.9,2.9).curveTo(-10.2,0.9,-10.7,-0.9).curveTo(-7.3,-5.1,-5.4,-10.5).lineTo(-2.4,-9.5).curveTo(-3.4,-7,-4.6,-4.8).lineTo(-4.6,10.5).closePath().moveTo(3.8,10.3).curveTo(-0.1,10.3,-0.1,6.4).lineTo(-0.1,3.5).lineTo(-2.6,5.1).lineTo(-4.5,2.3).curveTo(-2.2,1,-0.1,-0.4).lineTo(-0.1,-10.4).lineTo(3.1,-10.4).lineTo(3.1,-2.9).curveTo(5.6,-5.1,7.8,-7.6).lineTo(10.5,-5.5).curveTo(7.3,-1.9,3.1,1.2).lineTo(3.1,5.6).curveTo(3.1,7.2,4.5,7.2).lineTo(5.5,7.2).curveTo(6.5,7.2,6.9,6.5).curveTo(7.2,5.8,7.4,2.2).lineTo(10.7,3.2).lineTo(10,7.6).curveTo(9.7,8.9,8.6,9.6).curveTo(7.5,10.3,5.6,10.3).closePath();
	this.shape_12.setTransform(-77.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.7,8.2).curveTo(-0.8,6.6,0.5,4).curveTo(1.9,1.5,1.8,-5.6).lineTo(4.9,-5.6).curveTo(4.7,-1,4.1,2).lineTo(5.8,2).lineTo(5.8,6.9).curveTo(5.7,7.8,6.5,7.8).lineTo(6.8,7.8).curveTo(7.3,7.8,7.5,7.3).curveTo(7.7,6.9,7.8,4.3).lineTo(10.7,5.5).curveTo(10.2,9.1,9.5,9.7).curveTo(8.7,10.3,7.7,10.3).lineTo(5.7,10.3).curveTo(3.1,10.3,3.1,7.9).lineTo(3.1,5.4).curveTo(1.4,8.7,-2.6,10.7).lineTo(-4.7,8.2).closePath().moveTo(-8.1,10.7).lineTo(-8.1,3.3).lineTo(-9.8,5.1).lineTo(-10.7,1.9).curveTo(-8,-0.9,-6.8,-3.3).lineTo(-10.4,-3.3).lineTo(-10.4,-6.1).lineTo(-6.9,-6.1).lineTo(-9.3,-9.2).lineTo(-6.9,-10.7).curveTo(-5.8,-9.4,-4.4,-7.6).lineTo(-6.7,-6.1).lineTo(-3.6,-6.1).lineTo(-3.6,-3.6).curveTo(-4.2,-2.2,-5,-0.7).curveTo(-3.7,0.3,-2.5,1.4).lineTo(-2.5,-9.7).lineTo(9.3,-9.7).lineTo(9.3,3.6).lineTo(6.3,3.6).lineTo(6.3,-7).lineTo(0.5,-7).lineTo(0.5,3.7).lineTo(-2.5,3.7).lineTo(-2.5,2.2).lineTo(-3.9,3.8).lineTo(-5.4,2.2).lineTo(-5.4,10.7).closePath();
	this.shape_13.setTransform(-99.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.5,6.5).lineTo(3,6.6).curveTo(4.8,6.6,4.8,5).lineTo(4.8,-7).lineTo(-10.5,-7).lineTo(-10.5,-9.8).lineTo(10.5,-9.8).lineTo(10.5,-7).lineTo(8.1,-7).lineTo(8.1,6.3).curveTo(8.1,7.7,7.5,8.5).curveTo(6.9,9.3,5.7,9.5).curveTo(4.6,9.8,0.3,9.8).lineTo(-0.5,6.5).closePath().moveTo(-8.2,5.7).lineTo(-8.2,-4.7).lineTo(1.9,-4.7).lineTo(1.9,4.5).lineTo(-5.2,4.5).lineTo(-5.2,5.7).closePath().moveTo(-5.2,1.9).lineTo(-1.1,1.9).lineTo(-1.1,-2.2).lineTo(-5.2,-2.2).closePath();
	this.shape_14.setTransform(-121.1,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-10.6,9.9).lineTo(-10.6,8.3).lineTo(-1.5,8.3).lineTo(-1.5,7.5).lineTo(-9.3,7.5).lineTo(-9.3,6).lineTo(-1.5,6).lineTo(-1.5,5.2).lineTo(-8.6,5.2).lineTo(-8.6,-1).lineTo(8.5,-1).lineTo(8.5,5.2).lineTo(1.4,5.2).lineTo(1.4,6).lineTo(9.3,6).lineTo(9.3,7.5).lineTo(1.4,7.5).lineTo(1.4,8.3).lineTo(10.6,8.3).lineTo(10.6,9.9).closePath().moveTo(1.4,3.7).lineTo(5.8,3.7).lineTo(5.8,2.7).lineTo(1.4,2.7).closePath().moveTo(-5.8,3.7).lineTo(-1.5,3.7).lineTo(-1.5,2.7).lineTo(-5.8,2.7).closePath().moveTo(1.4,1.4).lineTo(5.8,1.4).lineTo(5.8,0.5).lineTo(1.4,0.5).closePath().moveTo(-5.8,1.4).lineTo(-1.5,1.4).lineTo(-1.5,0.5).lineTo(-5.8,0.5).closePath().moveTo(-10.6,-1.8).lineTo(-10.6,-3.4).lineTo(10.6,-3.4).lineTo(10.6,-1.8).closePath().moveTo(-8.5,-4.1).lineTo(-8.5,-9.9).lineTo(8.5,-9.9).lineTo(8.5,-4.1).closePath().moveTo(-5.6,-5.6).lineTo(5.6,-5.6).lineTo(5.6,-6.3).lineTo(-5.6,-6.3).closePath().moveTo(-5.6,-7.6).lineTo(5.6,-7.6).lineTo(5.6,-8.4).lineTo(-5.6,-8.4).closePath();
	this.shape_15.setTransform(-143.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6.3,8.7).curveTo(-3.5,6.6,-3.5,2.2).lineTo(-3.5,0.5).lineTo(-0.7,0.5).lineTo(-0.7,2.8).curveTo(-0.7,8.1,-4.1,10.7).lineTo(-6.3,8.7).closePath().moveTo(-10.6,9.4).curveTo(-9.3,5.9,-8.2,1.1).lineTo(-5.4,2.2).lineTo(-7.6,10.4).lineTo(-10.6,9.4).closePath().moveTo(6.9,10.4).curveTo(4.4,10.4,4.4,7.7).lineTo(4.4,0.4).lineTo(7.1,0.4).lineTo(7.1,7.4).curveTo(7.2,8,7.6,8).lineTo(7.8,8).curveTo(8.2,8,8.3,7.4).lineTo(8.6,3.4).lineTo(10.7,4.2).lineTo(10.3,8.3).curveTo(10.1,9.3,9.5,9.9).curveTo(8.8,10.4,7.7,10.4).closePath().moveTo(0.4,10.2).lineTo(0.4,0.5).lineTo(3.2,0.5).lineTo(3.2,10.2).closePath().moveTo(7.1,-0.6).curveTo(-1.6,-0.3,-4.1,0.1).lineTo(-5,-2.3).curveTo(-3.6,-2.8,-1.3,-5.8).lineTo(-4.9,-5.8).lineTo(-4.9,-8.4).lineTo(0.6,-8.4).lineTo(-0.2,-10.1).lineTo(2.9,-10.6).lineTo(4.1,-8.4).lineTo(9.8,-8.4).lineTo(9.8,-5.8).lineTo(2.5,-5.8).curveTo(1.1,-4.2,-0.4,-2.6).lineTo(5.3,-2.9).lineTo(4.2,-4.2).lineTo(6.5,-5.7).curveTo(8.8,-3.1,10.6,-1).lineTo(8.1,0.8).closePath().moveTo(-10.7,-2.6).lineTo(-8.9,-4.6).curveTo(-6.8,-3.2,-5.3,-1.8).lineTo(-7.3,0.3).curveTo(-8.7,-1,-10.7,-2.6).closePath().moveTo(-10.4,-8.5).lineTo(-8.6,-10.4).curveTo(-6.9,-9.2,-5.1,-7.6).lineTo(-7,-5.4).curveTo(-8.9,-7.2,-10.4,-8.5).closePath();
	this.shape_16.setTransform(-165.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,10.2).lineTo(-9.7,7.4).lineTo(-1.6,7.4).lineTo(-1.6,4.9).lineTo(-8,4.9).lineTo(-8,2.1).lineTo(-1.6,2.1).lineTo(-1.6,-0.1).lineTo(-5.8,-0.1).lineTo(-5.8,-1.8).curveTo(-7.2,-0.7,-8.8,0.2).lineTo(-10.7,-2.3).curveTo(-3.8,-6,-1.4,-10.2).lineTo(2.4,-10.2).lineTo(1.9,-9.4).curveTo(4.6,-5.4,10.7,-2.5).lineTo(8.7,-0).curveTo(7.1,-0.9,5.7,-1.8).lineTo(5.7,-0.1).lineTo(1.6,-0.1).lineTo(1.6,2.1).lineTo(8.1,2.1).lineTo(8.1,4.9).lineTo(1.6,4.9).lineTo(1.6,7.4).lineTo(9.7,7.4).lineTo(9.7,10.2).closePath().moveTo(-4.4,-2.8).lineTo(4.4,-2.8).curveTo(1.8,-4.8,-0,-7.1).curveTo(-1.7,-4.9,-4.4,-2.8).closePath();
	this.shape_17.setTransform(-187.1,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.1,-16.5,400.2,33.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#60CBF5","#4379BC","#355DA9"],[0,0.451,1],8.3,3,-8.6,-5.6).beginStroke().moveTo(-10.8,-4.5).curveTo(-8.8,-6.3,-8.9,-8.9).lineTo(10.8,-9.6).lineTo(10.4,-9.6).curveTo(10.6,-4.2,8.5,0.9).curveTo(6.4,5.9,2.4,9.6).closePath();
	this.shape.setTransform(7.2,-4.8,2.374,2.374,-117.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-23.8,49.7,47.6);


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
	this.shape_4.graphics.beginFill("rgba(255,255,255,0.765)").beginStroke().moveTo(6.1,8.1).lineTo(6.1,7.1).lineTo(-7.5,7.1).lineTo(-7.5,-4.9).lineTo(-6.2,-4.9).lineTo(-6.2,6).lineTo(6.1,6).lineTo(6.1,-4.9).lineTo(7.5,-4.9).lineTo(7.5,8.1).closePath().moveTo(-4.3,4.4).lineTo(-4.3,-5.3).lineTo(4.2,-5.3).lineTo(4.2,4.2).lineTo(3,4.2).lineTo(3,3.4).lineTo(-3,3.4).lineTo(-3,4.4).closePath().moveTo(0.6,2.2).lineTo(3,2.2).lineTo(3,-0.3).lineTo(0.6,-0.3).closePath().moveTo(-3,2.2).lineTo(-0.6,2.2).lineTo(-0.6,-0.3).lineTo(-3,-0.3).closePath().moveTo(0.6,-1.5).lineTo(3,-1.5).lineTo(3,-4.1).lineTo(0.6,-4.1).closePath().moveTo(-3,-1.5).lineTo(-0.6,-1.5).lineTo(-0.6,-4.1).lineTo(-3,-4.1).closePath().moveTo(-8.5,-6.9).lineTo(-8.5,-8.1).lineTo(8.5,-8.1).lineTo(8.5,-6.9).closePath();
	this.shape_4.setTransform(26,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(255,255,255,0.765)").beginStroke().moveTo(-1.6,7.5).curveTo(2,4.3,2.2,-2.2).lineTo(2.2,-3.8).lineTo(-0.4,-3.8).lineTo(-0.4,-5).lineTo(2.2,-5).lineTo(2.2,-8.7).lineTo(3.7,-8.7).lineTo(3.7,-5).lineTo(8.4,-5).lineTo(8.1,5.7).curveTo(7.8,8.1,5.8,8.1).lineTo(3.3,8.1).lineTo(3.1,6.6).lineTo(5.3,6.8).curveTo(6.6,6.7,6.6,5.2).curveTo(6.9,0.9,6.9,-3.8).lineTo(3.7,-3.8).lineTo(3.6,-2.2).curveTo(3.5,4.7,-0.6,8.7).lineTo(-1.6,7.5).closePath().moveTo(-1.7,5.7).lineTo(-7.8,6.3).lineTo(-8.4,4.9).curveTo(-7.7,4.4,-7.1,3.4).curveTo(-6.3,1.7,-5.3,-1).lineTo(-8.4,-1).lineTo(-8.4,-2.2).lineTo(0.2,-2.2).lineTo(0.2,-1).lineTo(-3.9,-1).curveTo(-5.4,2.8,-6.5,4.9).lineTo(-2.2,4.4).lineTo(-3.4,1.5).lineTo(-2.2,1).curveTo(-1,3.4,-0.2,5.8).lineTo(-1.5,6.3).lineTo(-1.7,5.7).closePath().moveTo(-7.6,-5.9).lineTo(-7.6,-7.2).lineTo(-0.6,-7.2).lineTo(-0.6,-5.9).closePath();
	this.shape_5.setTransform(7.8,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(255,255,255,0.765)").beginStroke().moveTo(-8.7,6.9).lineTo(-6.5,5).lineTo(-6.5,-1.1).lineTo(-8.6,-1.1).lineTo(-8.6,-2.3).lineTo(-5.2,-2.3).lineTo(-5.2,5.3).curveTo(-3.9,6.9,-1.3,6.9).lineTo(3.4,7).lineTo(8.7,6.8).lineTo(8.2,8.2).lineTo(3,8.3).lineTo(-1.5,8.2).curveTo(-4.5,8.2,-5.9,6.1).curveTo(-6.4,6.6,-8,8.4).closePath().moveTo(0.6,5.8).lineTo(0.3,4.2).lineTo(3,4.3).curveTo(4.1,4.3,4,3.1).lineTo(4,-3.8).lineTo(-3.5,-3.8).lineTo(-3.5,-5).lineTo(4,-5).lineTo(4,-8.4).lineTo(5.5,-8.4).lineTo(5.5,-5).lineTo(8.5,-5).lineTo(8.5,-3.8).lineTo(5.5,-3.8).lineTo(5.5,3.5).curveTo(5.5,5.8,3.3,5.8).lineTo(0.6,5.8).closePath().moveTo(-2.8,-1.7).lineTo(-1.7,-2.4).lineTo(1.2,1.4).lineTo(-0,2.2).curveTo(-1.4,0.1,-2.8,-1.7).closePath().moveTo(-8,-7.6).lineTo(-6.9,-8.4).curveTo(-5.7,-7,-4.4,-5.1).lineTo(-5.6,-4.2).curveTo(-6.8,-6.1,-8,-7.6).closePath();
	this.shape_6.setTransform(-10,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(255,255,255,0.765)").beginStroke().moveTo(-3.1,7.5).curveTo(0.1,5.6,0.3,1.5).lineTo(-2,3.6).lineTo(-3,2.5).curveTo(-1.4,1.4,0.4,-0.2).lineTo(0.4,-8.6).lineTo(1.7,-8.6).lineTo(1.7,-1).curveTo(1.7,2,1.2,4.1).curveTo(0.5,6.9,-2.2,8.7).lineTo(-3.1,7.5).closePath().moveTo(3.4,5.8).lineTo(3.4,-8.7).lineTo(4.7,-8.7).lineTo(4.7,-0.4).curveTo(6.6,0.7,8.3,1.8).lineTo(7.4,3).lineTo(4.7,1.1).lineTo(4.7,5.7).curveTo(4.7,6.9,5.6,6.8).lineTo(6.3,6.8).curveTo(7.2,6.8,7.3,5.8).lineTo(7.6,3.8).lineTo(8.8,4.3).lineTo(8.6,6.2).curveTo(8.3,8.1,6.5,8.1).lineTo(5.4,8.1).lineTo(5.3,8.1).curveTo(3.3,8.1,3.4,5.8).closePath().moveTo(-8.8,5.9).lineTo(-7.9,5.8).lineTo(-7.9,-0.7).lineTo(-6.7,-0.7).lineTo(-6.7,5.6).lineTo(-5.4,5.4).lineTo(-5.4,-2.5).lineTo(-6.4,-2.5).lineTo(-6.4,-1.9).lineTo(-7.5,-1.9).lineTo(-7.5,-7.9).lineTo(-2.7,-7.9).lineTo(-2.7,-2.5).lineTo(-4.2,-2.5).lineTo(-4.2,0.2).lineTo(-2.3,0.2).lineTo(-2.3,1.3).lineTo(-4.2,1.3).lineTo(-4.2,5.2).lineTo(-2.3,4.9).lineTo(-2.2,6.1).lineTo(-8.5,7.2).closePath().moveTo(-6.4,-3.5).lineTo(-3.8,-3.5).lineTo(-3.8,-6.8).lineTo(-6.4,-6.8).closePath().moveTo(5,-2.6).curveTo(6.1,-4.2,6.9,-6.1).lineTo(8.1,-5.5).curveTo(7.2,-3.6,6.1,-1.9).closePath().moveTo(-2.4,-5.5).lineTo(-1.3,-6.1).curveTo(-0.4,-4.3,0.3,-2.6).lineTo(-1,-2).curveTo(-1.6,-3.9,-2.4,-5.5).closePath();
	this.shape_7.setTransform(-28,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(3));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(66,66,66,0.008)").beginStroke().moveTo(-46.7,12).curveTo(-52,12,-52,6.7).lineTo(-52,-6.7).curveTo(-52,-12,-46.7,-12).lineTo(46.7,-12).curveTo(52,-12,52,-6.7).lineTo(52,6.7).curveTo(52,12,46.7,12).closePath();
	this.shape_8.setTransform(-0.9,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-18.6,104,27.8);


(lib.shap1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 1.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#5FC3F3").beginStroke().moveTo(-7.5,9.5).curveTo(-8.5,9.2,-8.5,8.5).lineTo(-1.3,0).lineTo(-8.5,-8.4).curveTo(-8.5,-9.1,-7.5,-9.4).curveTo(-6.5,-9.7,-5.6,-9.2).lineTo(8,-0.7).curveTo(8.5,-0.4,8.5,0).curveTo(8.5,0.5,8,0.8).lineTo(-5.6,9.2).curveTo(-6.1,9.5,-6.8,9.5).closePath();
	this.shape.setTransform(8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,19);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#5ABCE4").setStrokeStyle(3,1,1).moveTo(65.3,0).curveTo(65.3,27.1,46.2,46.2).curveTo(27.1,65.3,0,65.3).curveTo(-27,65.3,-46.2,46.2).curveTo(-65.3,27.1,-65.3,0).curveTo(-65.3,-27,-46.2,-46.2).curveTo(-27,-65.3,0,-65.3).curveTo(27.1,-65.3,46.2,-46.2).curveTo(65.3,-27,65.3,0).closePath();
	this.shape.setTransform(65.4,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,102,204,0.2)").beginStroke().moveTo(-46.2,46.2).curveTo(-65.3,27,-65.3,-0).curveTo(-65.3,-27.1,-46.2,-46.2).curveTo(-27.1,-65.3,-0,-65.3).curveTo(27,-65.3,46.2,-46.2).curveTo(65.4,-27.1,65.3,-0).curveTo(65.4,27,46.2,46.2).curveTo(27,65.4,-0,65.3).curveTo(-27.1,65.4,-46.2,46.2).closePath();
	this.shape_1.setTransform(65.4,65.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,133.7,133.7);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(47.4,14.4).lineTo(47.4,11.7).lineTo(48.5,11.7).curveTo(49.9,11.7,49.9,10.3).lineTo(49.9,9.1).curveTo(45.6,11.4,42,12.4).curveTo(39.1,13.2,35.7,13.5).lineTo(35.7,10.7).curveTo(43.1,10.1,49.9,6).lineTo(49.9,4.3).curveTo(47.2,5.8,45.4,6.5).curveTo(42.8,7.5,39.1,8.2).curveTo(37.5,8.5,35.7,8.6).lineTo(35.7,5.8).curveTo(38.9,5.5,41.1,4.9).curveTo(43.8,4.3,47.2,2.8).lineTo(35.7,2.8).lineTo(35.7,0.2).lineTo(66.3,0.2).lineTo(66.3,2.8).lineTo(52.9,2.8).lineTo(52.9,4.3).lineTo(54.7,4.3).curveTo(55.7,5.7,56.8,6.9).curveTo(59.9,6.2,61.8,5.4).curveTo(64.1,4.5,66.2,2.8).lineTo(66.2,5.8).curveTo(64.7,7,63.2,7.6).curveTo(61.7,8.3,59.4,8.9).curveTo(61.4,10.1,62.9,10.5).curveTo(64,10.8,66.3,11.1).lineTo(66.3,13.7).curveTo(63.6,13.5,62.2,13.1).curveTo(58.8,12.3,56,10.1).curveTo(54.7,8.9,52.9,6.7).lineTo(52.9,10.7).curveTo(52.9,12.6,51.7,13.6).curveTo(50.7,14.4,49.1,14.4).closePath().moveTo(-57.2,11.1).curveTo(-56.3,10.8,-55.9,10.2).curveTo(-55.5,9.6,-55.5,8.5).lineTo(-55.5,-9.4).curveTo(-55.5,-11.6,-55,-12.4).curveTo(-53.9,-14.1,-51.9,-14.1).lineTo(-38.7,-14.1).curveTo(-35.7,-14.1,-35.7,-10.8).lineTo(-35.7,-7.2).curveTo(-35.7,-6,-36.4,-5.2).curveTo(-37.3,-4.3,-39.1,-4.3).lineTo(-42,-4.3).lineTo(-42,-1.8).lineTo(-35.6,-1.8).lineTo(-35.6,1.2).lineTo(-42,1.2).lineTo(-42,3.8).lineTo(-39.6,3.8).curveTo(-35.7,3.8,-35.7,6.9).lineTo(-35.7,10.6).curveTo(-35.7,12.3,-36.5,13.1).curveTo(-37.5,14.1,-39.1,14.1).lineTo(-47.4,14.1).curveTo(-49.4,14.1,-50.4,13.1).curveTo(-51.2,12.3,-51.2,10.4).lineTo(-51.2,7.4).curveTo(-51.2,5.2,-50,4.4).curveTo(-49.1,3.8,-46.9,3.8).lineTo(-45.1,3.8).lineTo(-45.1,1.2).lineTo(-51.6,1.2).lineTo(-51.6,-1.8).lineTo(-45.1,-1.8).lineTo(-45.1,-4.3).lineTo(-52.5,-4.3).lineTo(-52.5,8.9).curveTo(-52.5,11.2,-54.1,12.8).curveTo(-55.2,13.9,-57.2,14.2).closePath().moveTo(-47.8,7.1).curveTo(-48.1,7.5,-48.1,8.1).lineTo(-48.1,9.9).curveTo(-48.1,10.9,-47.1,10.9).lineTo(-40.4,10.9).curveTo(-39.2,10.9,-39,10.5).curveTo(-38.8,10.3,-38.8,9.3).lineTo(-38.8,8.1).curveTo(-38.8,6.9,-39.8,6.9).lineTo(-46.9,6.9).curveTo(-47.6,6.9,-47.8,7.1).closePath().moveTo(-52.1,-10.7).curveTo(-52.5,-10.3,-52.5,-9.5).lineTo(-52.5,-7.4).lineTo(-40.2,-7.4).curveTo(-39.1,-7.4,-38.9,-7.8).curveTo(-38.7,-8.1,-38.7,-8.5).lineTo(-38.7,-10).curveTo(-38.7,-11,-40,-11).lineTo(-50.3,-11).curveTo(-51.7,-11,-52.1,-10.7).closePath().moveTo(14.9,11).curveTo(15.4,11,15.6,10.5).lineTo(16.2,5.6).lineTo(16.2,5.1).lineTo(19.3,5.1).lineTo(19.2,6.3).curveTo(18.7,10.7,18.5,11.5).curveTo(18.1,13,16.8,13.6).curveTo(16.2,14,14.9,14.2).closePath().moveTo(-100.3,11.5).lineTo(-99,11.5).curveTo(-97.5,11.5,-95,10.3).lineTo(-97.2,8.9).curveTo(-98.9,7.9,-99.2,6.4).lineTo(-99.2,5.2).lineTo(-100.3,5.2).lineTo(-100.3,2.5).lineTo(-99.2,2.5).lineTo(-99.2,1.2).lineTo(-96.3,1.2).lineTo(-96.3,2.5).lineTo(-88.3,2.5).lineTo(-88.3,1.2).lineTo(-85.4,1.2).lineTo(-85.4,2.5).lineTo(-84.2,2.5).lineTo(-84.2,5.2).lineTo(-85.4,5.2).lineTo(-85.4,5.7).curveTo(-85.4,7.2,-86.1,8).curveTo(-86.5,8.5,-89.3,10.1).curveTo(-87.5,11.1,-86.5,11.3).curveTo(-85.6,11.6,-84.4,11.6).lineTo(-83.9,11.6).lineTo(-83.9,14.1).lineTo(-85.5,14.1).curveTo(-87.9,14.1,-89.2,13.6).lineTo(-92.1,12).lineTo(-93.6,12.8).curveTo(-95.5,13.8,-96.4,13.9).curveTo(-97.6,14.2,-100.3,14.2).closePath().moveTo(-95.9,6.2).curveTo(-95.6,6.6,-94.3,7.3).lineTo(-92.2,8.5).lineTo(-89.4,6.7).curveTo(-88.4,6.1,-88.3,5.3).lineTo(-96.2,5.3).curveTo(-96.2,5.8,-95.9,6.2).closePath().moveTo(73.7,14.1).curveTo(71.9,14.1,71.1,13.3).curveTo(70.3,12.5,70.3,11.3).lineTo(70.3,4.2).curveTo(70.3,2.9,71,2.1).curveTo(71.9,1.2,73.5,1.2).lineTo(96.3,1.2).curveTo(99.8,1.2,99.8,4.3).lineTo(99.8,10.8).curveTo(99.8,12.4,99.2,13.1).curveTo(98.3,14.1,96.6,14.1).closePath().moveTo(73.4,5.2).lineTo(73.4,10).curveTo(73.4,11,74.5,11).lineTo(95.5,11).curveTo(96.7,11,96.7,10).lineTo(96.7,5.2).curveTo(96.7,4.3,95.7,4.3).lineTo(74.4,4.3).curveTo(73.4,4.3,73.4,5.2).closePath().moveTo(28.4,10.5).lineTo(27.8,5.1).lineTo(30.9,5.1).lineTo(31.4,9.8).curveTo(31.4,10.5,31.7,10.8).curveTo(31.8,11,32.2,11).lineTo(32.3,14.1).curveTo(28.7,13.7,28.4,10.5).closePath().moveTo(20.4,11).lineTo(21.4,10.9).curveTo(21.8,10.9,21.9,10.5).lineTo(22,9.2).lineTo(22,3.8).lineTo(18.1,3.8).curveTo(16.5,3.8,15.7,2.9).curveTo(15.1,2.1,15.1,0.2).lineTo(15.1,-5.6).curveTo(15.1,-7,15.4,-7.6).curveTo(16.2,-8.8,17.8,-9).lineTo(17.8,-10.2).lineTo(20.8,-10.2).lineTo(20.8,-9).lineTo(28.8,-9).curveTo(30.5,-9,31.3,-8.1).curveTo(32.1,-7.3,32.1,-5.8).lineTo(32.1,0.4).curveTo(32.1,2.1,31.3,3).curveTo(30.9,3.5,30.4,3.6).curveTo(29.8,3.8,28.5,3.8).lineTo(25.3,3.8).lineTo(25.3,10.4).curveTo(25.3,13.9,21.9,14).lineTo(20.4,14.1).closePath().moveTo(18.2,-0.3).curveTo(18.2,0.3,18.4,0.6).curveTo(18.7,0.8,19.3,0.8).lineTo(27.9,0.8).curveTo(29.1,0.8,29,-0.5).lineTo(29,-1.1).lineTo(18.2,-1.1).closePath().moveTo(18.2,-5.1).lineTo(18.2,-4.2).lineTo(29,-4.2).lineTo(29,-4.7).curveTo(29.1,-5.1,28.8,-5.5).curveTo(28.5,-5.9,27.7,-5.9).lineTo(19.4,-5.9).curveTo(18.2,-5.9,18.2,-5.1).closePath().moveTo(9.1,11).lineTo(9.2,11).curveTo(9.9,11,10.1,10.7).curveTo(10.5,10.2,10.5,8.1).lineTo(10.5,-9.5).curveTo(10.5,-11.6,11.4,-12.6).curveTo(12.7,-14.1,14.7,-14.1).lineTo(32.1,-14.1).lineTo(32.1,-11.1).lineTo(15.9,-11.1).curveTo(14.6,-11.1,14.1,-10.5).curveTo(13.6,-10,13.6,-8.6).lineTo(13.6,8.3).curveTo(13.6,13.8,9.1,14.1).closePath().moveTo(-10.6,12.9).curveTo(-13.2,12.1,-15.1,10.5).curveTo(-15.8,10,-16.9,8.8).curveTo(-18.5,10.6,-20,11.5).curveTo(-22.7,13.1,-26.6,13.7).curveTo(-28.5,14,-32.4,14.1).lineTo(-32.4,11.5).curveTo(-28.6,11.3,-27,10.9).curveTo(-22.4,10,-20.3,8).curveTo(-18.7,6.6,-18.3,4.3).lineTo(-15.4,4.3).curveTo(-14.9,8,-10.1,10).curveTo(-6.7,11.4,-1.6,11.6).lineTo(-1.6,14.1).curveTo(-7.5,13.9,-10.6,12.9).closePath().moveTo(-66,14.1).lineTo(-66,11).lineTo(-65.2,11).curveTo(-62.7,11,-62.7,9.1).lineTo(-62.7,3.3).lineTo(-64.4,4).lineTo(-66.5,4.4).lineTo(-66.5,1.2).curveTo(-65.2,0.9,-64.5,0.7).curveTo(-63.9,0.5,-62.7,-0.2).lineTo(-62.7,-8.1).lineTo(-66.4,-8.1).lineTo(-66.4,-11.3).lineTo(-62.7,-11.3).lineTo(-62.7,-14.1).lineTo(-59.6,-14.1).lineTo(-59.6,-11.3).lineTo(-56.9,-11.3).lineTo(-56.9,-8.1).lineTo(-59.6,-8.1).lineTo(-59.6,-2.3).curveTo(-58.5,-2.9,-56.9,-3.4).lineTo(-56.9,-0.2).curveTo(-58.5,0.4,-59.6,1.2).lineTo(-59.6,9.6).curveTo(-59.6,12.1,-61.3,13.3).curveTo(-62.5,14.1,-64.4,14.1).closePath().moveTo(-76,10.2).curveTo(-77.8,11.8,-79.2,12.6).curveTo(-80.2,13.1,-82.7,14.1).lineTo(-82.7,10.9).curveTo(-80.1,9.8,-78,7.7).curveTo(-79.5,4.9,-80.4,1.9).lineTo(-81.8,-4.8).lineTo(-78.7,-4.8).lineTo(-77.7,0.3).curveTo(-77.2,2.4,-76.1,5).curveTo(-75.2,3.2,-74.9,1.3).curveTo(-74.5,-1.1,-74.4,-4).lineTo(-74.2,-9.1).lineTo(-79.2,-9.1).curveTo(-80.1,-6.8,-81.2,-5.9).curveTo(-82.1,-5,-84.1,-4.5).lineTo(-84.1,-7.6).curveTo(-83,-7.8,-82.4,-9.3).curveTo(-82,-10.3,-81.1,-14.2).lineTo(-77.9,-14.2).lineTo(-78.4,-12.2).lineTo(-69.6,-12.2).lineTo(-69.6,-9.1).lineTo(-71,-9.1).lineTo(-71.2,-3.9).curveTo(-71.4,-0.2,-72.1,2.9).curveTo(-72.8,5.4,-74.1,7.9).curveTo(-72.5,9.6,-69.7,10.9).lineTo(-69.7,14.1).curveTo(-73.4,12.8,-76,10.2).closePath().moveTo(1.6,13.7).lineTo(1.6,10.6).lineTo(8.2,10.6).lineTo(8.2,13.7).closePath().moveTo(-6.2,9.1).lineTo(-6.2,4.9).curveTo(-6.2,4.4,-6.5,4.2).curveTo(-6.8,3.9,-7.2,3.9).lineTo(-26.6,3.9).curveTo(-27.8,3.9,-27.8,5.1).lineTo(-27.8,9.1).lineTo(-31,9.1).lineTo(-31,3.8).curveTo(-31,2.6,-30.2,1.9).curveTo(-29.3,1.1,-27.8,1.1).lineTo(-6.4,1.1).curveTo(-3,1.1,-3,3.7).lineTo(-3,9.1).closePath().moveTo(1.6,0.9).lineTo(1.6,-2.2).lineTo(8.2,-2.2).lineTo(8.2,0.9).closePath().moveTo(-87.3,-0.6).curveTo(-88.4,-1.7,-88.4,-3.4).lineTo(-88.4,-4.6).lineTo(-85.3,-4.6).lineTo(-85.3,-3.3).curveTo(-85.3,-2.5,-84.5,-2.5).lineTo(-84.5,0.6).curveTo(-86.3,0.5,-87.3,-0.6).closePath().moveTo(-99.6,-2.5).curveTo(-98.9,-2.6,-98.9,-3.3).lineTo(-98.9,-4.6).lineTo(-95.8,-4.6).lineTo(-95.8,-3.3).curveTo(-95.8,-1.8,-96.8,-0.7).curveTo(-97.9,0.5,-99.6,0.6).closePath().moveTo(-7.8,-0.7).curveTo(-10,-1.7,-11.5,-3.3).curveTo(-12.1,-4,-13.1,-5.5).curveTo(-14.3,-3.6,-15.3,-2.6).curveTo(-17.1,-0.9,-19.9,-0.1).curveTo(-21.3,0.3,-24,0.5).lineTo(-24,-2.4).curveTo(-21.8,-2.8,-20.6,-3.2).curveTo(-17.7,-4.2,-16.2,-6.9).curveTo(-15.7,-7.7,-14.9,-9.6).lineTo(-11.2,-9.6).lineTo(-12.1,-7.5).lineTo(-10.3,-7.5).curveTo(-9.3,-5.7,-8.3,-4.9).curveTo(-6,-3,-1.8,-2.5).lineTo(-1.8,0.5).curveTo(-5.4,0.3,-7.8,-0.7).closePath().moveTo(-32.1,0.4).lineTo(-32.1,-2.3).lineTo(-25.6,-2.3).lineTo(-25.6,0.4).closePath().moveTo(-93.6,0.4).lineTo(-93.6,-6.1).lineTo(-100.3,-6.1).lineTo(-100.3,-9.2).lineTo(-93.6,-9.2).lineTo(-93.6,-14.1).lineTo(-90.6,-14.1).lineTo(-90.6,-9.2).lineTo(-84.7,-9.2).lineTo(-84.7,-6.1).lineTo(-90.6,-6.1).lineTo(-90.6,0.4).closePath().moveTo(70.5,-0.6).lineTo(70.5,-3.7).lineTo(99.8,-3.7).lineTo(99.8,-0.6).closePath().moveTo(47.4,-0.7).lineTo(47.4,-2.1).lineTo(35.7,-2.1).lineTo(35.7,-4.2).lineTo(36.9,-4.2).lineTo(36.9,-12.2).lineTo(35.7,-12.2).lineTo(35.7,-14.4).lineTo(51.5,-14.4).lineTo(51.5,-12.2).lineTo(50.5,-12.2).lineTo(50.5,-4.2).lineTo(51.5,-4.2).lineTo(51.5,-2.1).lineTo(50.5,-2.1).lineTo(50.5,-0.7).closePath().moveTo(39.8,-4.2).lineTo(47.4,-4.2).lineTo(47.4,-5.4).lineTo(39.8,-5.4).closePath().moveTo(39.8,-7.6).lineTo(47.4,-7.6).lineTo(47.4,-8.8).lineTo(39.8,-8.8).closePath().moveTo(39.8,-11).lineTo(47.4,-11).lineTo(47.4,-12.2).lineTo(39.8,-12.2).closePath().moveTo(52.5,-3.8).curveTo(54.5,-4.4,57,-5.8).lineTo(55.3,-7.6).curveTo(54.5,-8.4,53.5,-10.2).lineTo(56.3,-10.2).curveTo(57.7,-8.6,59.4,-7.3).curveTo(60.9,-8.5,61.6,-9.2).curveTo(62.4,-10.1,63.1,-11.6).lineTo(52.8,-11.6).lineTo(52.8,-14.4).lineTo(63.5,-14.4).curveTo(64.9,-14.4,65.5,-13.8).curveTo(66.2,-13.1,66.2,-12.1).curveTo(66.2,-9.3,61.8,-5.7).curveTo(64,-4.6,66.3,-4.1).lineTo(66.3,-1.2).curveTo(64.2,-1.7,62.7,-2.3).curveTo(61.3,-2.9,59.4,-4.1).curveTo(55.9,-2.1,52.5,-1).closePath().moveTo(96.1,-5.1).curveTo(95,-5.7,94.2,-6.9).curveTo(93.8,-7.4,93.3,-8.5).lineTo(92.5,-10.1).curveTo(91.9,-10.9,89.7,-10.9).lineTo(79.7,-10.9).curveTo(78.9,-10.9,78.3,-10.7).curveTo(77.6,-10.4,77,-9.2).curveTo(76.1,-7.2,75.5,-6.5).curveTo(74.4,-5,72.3,-4.7).curveTo(71.1,-4.4,69.7,-4.4).lineTo(69.7,-7.5).curveTo(71.4,-7.5,72.3,-7.9).curveTo(73.3,-8.3,74.2,-10.3).curveTo(75.1,-12,75.5,-12.5).curveTo(76.9,-14,79.6,-14).lineTo(89.9,-14).curveTo(91.7,-14,92.9,-13.6).curveTo(93.9,-13.3,94.6,-12.3).lineTo(95.6,-10.7).curveTo(96.4,-9.1,96.7,-8.6).curveTo(97.5,-7.7,99,-7.6).lineTo(100.3,-7.5).lineTo(100.3,-4.4).curveTo(97.4,-4.5,96.1,-5.1).closePath().moveTo(-7,-6.9).lineTo(-6,-8.2).curveTo(-5,-9.3,-5,-9.7).curveTo(-5,-10.3,-6.2,-10.3).lineTo(-19.7,-10.3).curveTo(-20.7,-8.7,-21.8,-8).curveTo(-22.8,-7.3,-24.7,-7).lineTo(-24.7,-9.8).curveTo(-23.3,-10.4,-22.7,-11.1).curveTo(-22,-12.1,-21.6,-14.2).lineTo(-18.4,-14.2).lineTo(-18.6,-13.2).lineTo(-6.4,-13.2).curveTo(-4,-13.2,-2.9,-12.2).curveTo(-1.9,-11.2,-1.9,-9.8).curveTo(-1.9,-8.6,-3.2,-6.9).closePath().moveTo(1.6,-10.5).lineTo(1.6,-13.6).lineTo(8.2,-13.6).lineTo(8.2,-10.5).closePath().moveTo(-32.3,-10.6).lineTo(-32.3,-13.3).lineTo(-25.7,-13.3).lineTo(-25.7,-10.6).closePath().moveTo(-99.6,-10.8).lineTo(-99.6,-14).lineTo(-96.6,-14).lineTo(-96.6,-10.8).closePath().moveTo(-87.6,-10.8).lineTo(-87.6,-14.1).lineTo(-84.6,-14.1).lineTo(-84.6,-10.8).closePath();
	this.shape.setTransform(-6.8,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.1,-15.6,200.7,28.8);


(lib.shap3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#1DCAD5").setStrokeStyle(3,0,0,4).moveTo(12.9,-2).lineTo(-2.3,-14.6).lineTo(-8.9,-13.7).curveTo(-8.6,-13.7,-1,-7.4).curveTo(6.6,-1.1,6.3,-1.1).lineTo(-6,14.1).lineTo(0.6,13.2).closePath();
	this.shape.setTransform(11.3,15.4,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-0.7,30,32.3);


(lib.oval1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.3,5.3).curveTo(-7.5,3.1,-7.5,0).curveTo(-7.5,-3.1,-5.3,-5.3).curveTo(-3,-7.5,-0,-7.5).curveTo(3.1,-7.5,5.3,-5.3).curveTo(7.5,-3.1,7.5,0).curveTo(7.5,3.1,5.3,5.3).curveTo(3.1,7.5,-0,7.5).curveTo(-3.1,7.5,-5.3,5.3).closePath();
	this.shape.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.vect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-264.7,284.3).curveTo(-283.4,284.3,-296.5,271.1).curveTo(-309.7,257.9,-309.7,239.3).lineTo(-309.7,-239.2).lineTo(-337.9,-239.2).curveTo(-347.2,-239.2,-353.8,-245.8).curveTo(-360.4,-252.4,-360.4,-261.8).curveTo(-360.4,-271.1,-353.8,-277.7).curveTo(-347.2,-284.3,-337.9,-284.3).lineTo(337.9,-284.3).curveTo(347.2,-284.3,353.8,-277.7).curveTo(360.4,-271.1,360.4,-261.8).curveTo(360.4,-252.4,353.8,-245.8).curveTo(347.2,-239.2,337.9,-239.2).lineTo(321,-239.2).lineTo(321,239.3).curveTo(321,257.9,307.8,271.1).curveTo(294.6,284.3,275.9,284.3).closePath().moveTo(-276,239.3).curveTo(-276,243.9,-272.7,247.2).curveTo(-269.4,250.5,-264.7,250.5).lineTo(275.9,250.5).curveTo(280.6,250.5,283.9,247.2).curveTo(287.2,243.9,287.2,239.3).lineTo(287.2,-239.2).lineTo(-276,-239.2).closePath().moveTo(-226.9,171.9).curveTo(-233.9,171.9,-238.9,166.9).curveTo(-243.8,162,-243.8,155).curveTo(-243.8,148,-238.9,143).curveTo(-233.9,138.1,-226.9,138.1).lineTo(223.6,138.1).curveTo(230.6,138.1,235.6,143).curveTo(240.5,148,240.5,155).curveTo(240.5,162,235.6,166.9).curveTo(230.6,171.9,223.6,171.9).closePath().moveTo(32.1,68.1).curveTo(25.1,68.1,20.2,63.2).curveTo(15.2,58.2,15.2,51.3).curveTo(15.2,44.3,20.2,39.3).curveTo(25.1,34.4,32.1,34.4).lineTo(223.6,34.4).curveTo(230.6,34.4,235.6,39.3).curveTo(240.5,44.3,240.5,51.3).curveTo(240.5,58.2,235.6,63.2).curveTo(230.6,68.1,223.6,68.1).closePath().moveTo(-166.4,58.9).curveTo(-184.9,51.4,-199.5,37.7).curveTo(-214.1,24,-222.7,6.1).curveTo(-231.5,-12.4,-232.9,-33).lineTo(-119.3,-33).lineTo(-119.3,-146.5).curveTo(-98.8,-145.2,-80.3,-136.3).curveTo(-62.4,-127.7,-48.7,-113.1).curveTo(-34.9,-98.5,-27.5,-80.1).curveTo(-19.7,-60.9,-19.7,-40.1).curveTo(-19.7,-18.4,-28.1,1.5).curveTo(-36.2,20.6,-51,35.4).curveTo(-65.8,50.1,-84.9,58.2).curveTo(-104.7,66.6,-126.4,66.6).curveTo(-147.3,66.6,-166.4,58.9).closePath().moveTo(32.1,-35.6).curveTo(25.1,-35.6,20.2,-40.5).curveTo(15.2,-45.5,15.2,-52.5).curveTo(15.2,-59.4,20.2,-64.4).curveTo(25.2,-69.4,32.1,-69.4).lineTo(223.6,-69.4).curveTo(230.6,-69.4,235.6,-64.4).curveTo(240.5,-59.4,240.5,-52.5).curveTo(240.5,-45.5,235.6,-40.5).curveTo(230.6,-35.6,223.6,-35.6).closePath().moveTo(-245,-48.4).curveTo(-245,-71.5,-236.1,-92.7).curveTo(-227.4,-113.1,-211.7,-128.8).curveTo(-195.9,-144.6,-175.5,-153.2).curveTo(-154.3,-162.2,-131.2,-162.2).lineTo(-131.2,-48.4).closePath().moveTo(32.1,-139.3).curveTo(25.2,-139.3,20.2,-144.2).curveTo(15.2,-149.2,15.2,-156.2).curveTo(15.2,-163.2,20.2,-168.1).curveTo(25.1,-173.1,32.1,-173.1).lineTo(223.6,-173.1).curveTo(230.6,-173.1,235.6,-168.1).curveTo(240.5,-163.2,240.5,-156.2).curveTo(240.5,-149.2,235.6,-144.2).curveTo(230.6,-139.3,223.6,-139.3).closePath();
	this.shape.setTransform(27.6,22,0.077,0.077);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,55.8,44);


(lib.react2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.sjbTx = new cjs.Text("1,928", "24px 'Arial'", "#FF952E");
	this.sjbTx.name = "sjbTx";
	this.sjbTx.lineHeight = 16;
	this.sjbTx.lineWidth = 185;
	this.sjbTx.setTransform(-30.2,1.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape.setTransform(-49.1,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_1.setTransform(-65.1,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.8,7.7).lineTo(1.8,2.6).lineTo(-3.2,2.6).lineTo(-3.2,0.6).lineTo(1.8,0.6).lineTo(1.8,-2.3).lineTo(-0.3,-2.3).curveTo(-0.8,-0.9,-1.3,0.3).lineTo(-3.2,-0.6).curveTo(-2.2,-3.2,-1.5,-6.7).lineTo(0.6,-6.2).lineTo(0.2,-4.3).lineTo(1.8,-4.3).lineTo(1.8,-7.7).lineTo(4.1,-7.7).lineTo(4.1,-4.3).lineTo(7.4,-4.3).lineTo(7.4,-2.3).lineTo(4.1,-2.3).lineTo(4.1,0.6).lineTo(7.8,0.6).lineTo(7.8,2.6).lineTo(4.1,2.6).lineTo(4.1,7.7).closePath().moveTo(-5.9,7.7).lineTo(-5.9,0.5).lineTo(-7.2,2.6).lineTo(-7.8,-0.3).curveTo(-6.1,-3.3,-4.9,-7.7).lineTo(-2.7,-7.1).lineTo(-3.9,-4).lineTo(-3.9,7.7).closePath();
	this.shape_2.setTransform(-81.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.8,5.5).curveTo(-4.2,4.4,-1.8,2.8).curveTo(-4.1,0.3,-5.1,-3.2).lineTo(-7.6,-3.2).lineTo(-7.6,-5.3).lineTo(-1.1,-5.3).lineTo(-1.7,-7.2).lineTo(0.7,-7.8).lineTo(1.6,-5.3).lineTo(7.5,-5.3).lineTo(7.5,-3.2).lineTo(5.2,-3.2).curveTo(4.1,0.4,1.8,2.8).curveTo(4.2,4.5,7.7,5.4).curveTo(6.5,7,6,7.6).curveTo(2.4,6.5,-0,4.5).curveTo(-2.5,6.4,-6.2,7.8).lineTo(-7.8,5.5).closePath().moveTo(-0,1.2).curveTo(1.8,-0.6,2.5,-3.2).lineTo(-2.6,-3.2).curveTo(-1.9,-0.6,-0,1.2).closePath();
	this.shape_3.setTransform(-97.1,18.4);

	this.xtTx = new cjs.Text("37", "24px 'Arial'", "#FF952E");
	this.xtTx.name = "xtTx";
	this.xtTx.lineHeight = 16;
	this.xtTx.lineWidth = 183;
	this.xtTx.setTransform(-28.2,-34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape_4.setTransform(-49,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_5.setTransform(-65,-18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.9,7.6).lineTo(4.9,6.9).lineTo(1.5,6.9).lineTo(1.5,7.6).lineTo(-0.3,7.6).lineTo(-0.3,2).lineTo(2.2,2).lineTo(2.2,0.7).lineTo(-0.6,0.7).curveTo(-0.8,5,-2.6,7.5).lineTo(-3.9,5.9).curveTo(-2.4,3.2,-2.4,-1.5).lineTo(-2.4,-7.2).lineTo(7.1,-7.2).lineTo(7.1,-2.3).lineTo(4.2,-2.3).lineTo(4.2,-0.9).lineTo(7.8,-0.9).lineTo(7.8,0.7).lineTo(4.2,0.7).lineTo(4.2,2).lineTo(6.8,2).lineTo(6.8,7.6).closePath().moveTo(1.5,5.2).lineTo(4.9,5.2).lineTo(4.9,3.6).lineTo(1.5,3.6).closePath().moveTo(-0.5,-0.9).lineTo(2.2,-0.9).lineTo(2.2,-2.3).lineTo(-0.5,-2.3).closePath().moveTo(-0.5,-3.9).lineTo(5.2,-3.9).lineTo(5.2,-5.5).lineTo(-0.5,-5.5).closePath().moveTo(-7.7,5.4).lineTo(-6.6,5.5).curveTo(-6.1,5.5,-6.1,4.7).lineTo(-6.1,1.8).lineTo(-7.6,2.2).lineTo(-7.8,0.1).lineTo(-6.1,-0.2).lineTo(-6.1,-2.8).lineTo(-7.6,-2.8).lineTo(-7.6,-4.8).lineTo(-6.1,-4.8).lineTo(-6.1,-7.7).lineTo(-4.2,-7.7).lineTo(-4.2,-4.8).lineTo(-2.8,-4.8).lineTo(-2.8,-2.8).lineTo(-4.2,-2.8).lineTo(-4.2,-0.7).lineTo(-2.8,-1).lineTo(-2.8,1).lineTo(-4.2,1.3).lineTo(-4.2,5.6).curveTo(-4.2,7.4,-5.6,7.4).lineTo(-7.2,7.5).lineTo(-7.7,5.4).closePath();
	this.shape_6.setTransform(-81,-18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.3,6.1).lineTo(-0.8,7).lineTo(-2.9,5.9).curveTo(-4.6,7,-7,7.5).lineTo(-7.8,5.6).curveTo(-6.2,5.4,-4.9,4.9).lineTo(-7.2,4).curveTo(-6.7,3.2,-6.3,2.4).lineTo(-7.6,2.4).lineTo(-7.6,0.8).lineTo(-5.5,0.8).lineTo(-5.1,-0.4).lineTo(-4.2,-0.3).lineTo(-4.2,-1.8).curveTo(-5.4,-0.6,-7.1,0.4).curveTo(-7.4,-0.6,-7.8,-1.4).curveTo(-6.3,-2,-5,-3.1).lineTo(-7.4,-3.1).lineTo(-7.4,-4.7).lineTo(-6.2,-4.7).curveTo(-6.6,-5.5,-7.3,-6.4).lineTo(-5.9,-7.3).lineTo(-4.6,-5.5).lineTo(-6,-4.7).lineTo(-4.2,-4.7).lineTo(-4.2,-7.7).lineTo(-2.2,-7.7).lineTo(-2.2,-4.7).lineTo(-0.6,-4.7).lineTo(-1.9,-5.5).curveTo(-1.1,-6.4,-0.6,-7.4).lineTo(0.9,-6.5).curveTo(0.4,-5.6,-0.4,-4.7).lineTo(0.5,-4.7).lineTo(0.5,-3.1).lineTo(-2.2,-3.1).lineTo(-2.2,-2).lineTo(-1.7,-2.7).lineTo(0.2,-1.7).curveTo(1.4,-4,2.4,-7.8).lineTo(4.5,-7.6).lineTo(3.8,-5.3).lineTo(7.8,-5.3).lineTo(7.8,-3.4).lineTo(7.1,-3.4).curveTo(6.8,0.8,5.4,3.4).curveTo(6.4,4.6,7.8,5.4).curveTo(7.3,6.1,6.5,7.5).curveTo(5.1,6.6,4.1,5.3).curveTo(2.8,6.8,1.1,7.8).lineTo(-0.3,6.1).closePath().moveTo(-3.4,0.8).lineTo(0.2,0.8).lineTo(0.2,2.3).curveTo(-0.4,3.6,-1.3,4.5).lineTo(0.3,5.2).lineTo(-0.1,5.7).curveTo(1.7,4.8,2.9,3.3).curveTo(2.1,1.8,1.7,-0.2).lineTo(1.2,0.8).lineTo(0.3,-0.5).lineTo(-0.1,0.2).lineTo(-2.2,-1.2).lineTo(-2.2,0).lineTo(-3,0).lineTo(-3.4,0.8).closePath().moveTo(-4.7,3.2).lineTo(-3.1,3.8).curveTo(-2.4,3.2,-1.9,2.4).lineTo(-4.3,2.4).closePath().moveTo(3,-2.9).curveTo(3.3,-0.3,4.1,1.4).curveTo(5,-0.6,5.2,-3.4).lineTo(3.2,-3.4).lineTo(3,-2.9).closePath();
	this.shape_7.setTransform(-97.1,-18.6);

	this.instance = new lib.shap1();
	this.instance.setTransform(-129,18.5,1,1,0,0,0,8.5,9.5);

	this.instance_1 = new lib.shap1();
	this.instance_1.setTransform(-129,-18.5,1,1,0,0,0,8.5,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#5ABCE4").setStrokeStyle(3,1,1).moveTo(-151.1,-57.9).lineTo(162.5,-57.9).curveTo(172.8,-57.9,172.8,-47.5).lineTo(172.8,47.6).curveTo(172.8,57.9,162.5,57.9).lineTo(-151.1,57.9).curveTo(-161.4,57.9,-161.4,47.6).lineTo(-161.4,8.9).curveTo(-172.8,-1.7,-172.8,-1.6).lineTo(-161.4,-10.3).lineTo(-161.4,-47.5).curveTo(-161.4,-57.9,-151.1,-57.9).closePath();
	this.shape_8.setTransform(0.7,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(0,204,102,0)").beginStroke().moveTo(-151.1,57.8).curveTo(-161.5,57.8,-161.5,47.6).lineTo(-161.5,8.9).lineTo(-172.8,-1.7).lineTo(-161.5,-10.4).lineTo(-161.5,-47.6).curveTo(-161.5,-57.9,-151.1,-57.8).lineTo(162.5,-57.8).curveTo(172.8,-57.9,172.8,-47.6).lineTo(172.8,47.6).curveTo(172.8,57.8,162.5,57.8).closePath();
	this.shape_9.setTransform(0.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.xtTx},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sjbTx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.6,-58.9,348.6,118.7);


(lib.react1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.sjbTx = new cjs.Text("3,267", "24px 'Arial'", "#FF952E");
	this.sjbTx.name = "sjbTx";
	this.sjbTx.lineHeight = 16;
	this.sjbTx.lineWidth = 177;
	this.sjbTx.setTransform(-26.1,1.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape.setTransform(-49.1,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_1.setTransform(-65.1,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.6,7.6).curveTo(-4,7.6,-4,5.6).lineTo(-4,3).lineTo(-1.9,3).lineTo(-1.9,5.1).curveTo(-1.8,5.8,-0.9,5.8).lineTo(1,5.8).curveTo(1.9,5.8,2.2,5.5).curveTo(2.5,5.2,2.7,3.8).lineTo(4.8,4.9).curveTo(4.2,6.7,3.5,7.2).curveTo(2.8,7.6,1.8,7.6).closePath().moveTo(-7.8,6.3).curveTo(-6.9,4.6,-6.4,2.8).lineTo(-4.5,3.5).lineTo(-5.9,7.1).closePath().moveTo(4.1,3.3).lineTo(5.9,2.5).lineTo(7.8,5.7).lineTo(5.9,6.7).curveTo(5.2,5,4.1,3.3).closePath().moveTo(-1.2,2.9).lineTo(-0.2,2.3).lineTo(-6.3,2.3).lineTo(-6.3,-6.3).lineTo(-1.6,-6.3).lineTo(-1.3,-7.6).lineTo(1.4,-7.3).lineTo(0.8,-6.3).lineTo(6.3,-6.3).lineTo(6.3,2.3).lineTo(0.9,2.3).lineTo(2.3,4).lineTo(0.5,5.2).curveTo(-0,4.3,-1.2,2.9).closePath().moveTo(-4.2,0.7).lineTo(4.2,0.7).lineTo(4.2,-0.2).lineTo(-4.2,-0.2).closePath().moveTo(-4.2,-1.6).lineTo(4.2,-1.6).lineTo(4.2,-2.4).lineTo(-4.2,-2.4).closePath().moveTo(-4.2,-3.8).lineTo(4.2,-3.8).lineTo(4.2,-4.7).lineTo(-4.2,-4.7).closePath();
	this.shape_2.setTransform(-81.1,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.4,7.1).curveTo(-6.7,4.4,-6.1,1).lineTo(-3.9,1.7).lineTo(-5.3,7.7).lineTo(-7.4,7.1).closePath().moveTo(2.3,7.6).lineTo(1.7,5.6).lineTo(3.8,5.6).curveTo(4.9,5.6,4.9,4.6).lineTo(4.9,4.3).lineTo(-0.8,4.3).lineTo(-0.8,7.5).lineTo(-2.9,7.5).lineTo(-2.9,-3.4).lineTo(1,-3.4).lineTo(1,-7.7).lineTo(3.1,-7.7).lineTo(3.1,-3.4).lineTo(7.1,-3.4).lineTo(7.1,5.5).curveTo(7.1,6.4,6.6,7).curveTo(6.3,7.4,5.4,7.5).curveTo(4.7,7.7,3.3,7.7).lineTo(2.3,7.6).closePath().moveTo(-0.8,2.6).lineTo(4.9,2.6).lineTo(4.9,1.4).lineTo(-0.8,1.4).closePath().moveTo(-0.8,-0.4).lineTo(4.9,-0.4).lineTo(4.9,-1.6).lineTo(-0.8,-1.6).closePath().moveTo(-7.7,-1.8).lineTo(-6.3,-3.3).lineTo(-3.7,-1.3).lineTo(-5.2,0.3).curveTo(-6.1,-0.6,-7.7,-1.8).closePath().moveTo(3.7,-4.7).curveTo(4.9,-5.9,6,-7.3).lineTo(7.6,-6.1).lineTo(5.2,-3.5).closePath().moveTo(-3.4,-6.2).lineTo(-1.9,-7.3).lineTo(0.4,-4.9).lineTo(-1.2,-3.6).lineTo(-3.4,-6.2).closePath().moveTo(-7.4,-6.1).lineTo(-6.1,-7.4).lineTo(-3.6,-5.4).lineTo(-5,-3.8).curveTo(-6.3,-5.1,-7.4,-6.1).closePath();
	this.shape_3.setTransform(-97.2,18.3);

	this.xtTx = new cjs.Text("45", "24px 'Arial'", "#FF952E");
	this.xtTx.name = "xtTx";
	this.xtTx.lineHeight = 16;
	this.xtTx.lineWidth = 181;
	this.xtTx.setTransform(-28.2,-33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(0.1,3.6).curveTo(-0.8,6.4,-6.2,7.7).lineTo(-7.6,5.7).curveTo(-3.4,5.2,-2,3.4).lineTo(-7.5,3.4).lineTo(-7.5,1.5).lineTo(-1.2,1.5).lineTo(-1.1,0.6).lineTo(1,0.6).lineTo(0.9,1.5).lineTo(7.5,1.5).lineTo(7.5,3.4).lineTo(2.1,3.4).curveTo(4,5.4,7.6,5.7).lineTo(6.2,7.8).curveTo(2,6.8,0.1,3.6).closePath().moveTo(1.1,-1.1).lineTo(1.1,0.1).lineTo(-1.1,0.1).lineTo(-1.1,-1.3).curveTo(-2.9,0.2,-5.9,1.1).lineTo(-7,-0.8).curveTo(-4.1,-1.3,-2.3,-2.6).lineTo(-7.1,-2.6).lineTo(-7.1,-4.4).lineTo(-3.5,-4.4).lineTo(-5.9,-6.3).lineTo(-4.8,-7.6).lineTo(-1.9,-5.5).lineTo(-3.1,-4.4).lineTo(-1.1,-4.4).lineTo(-1.1,-7.8).lineTo(1.1,-7.8).lineTo(1.1,-4.4).lineTo(3.1,-4.4).lineTo(2.1,-5.5).lineTo(4.8,-7.6).lineTo(6.1,-6.3).lineTo(3.7,-4.4).lineTo(7.1,-4.4).lineTo(7.1,-2.6).lineTo(1.8,-2.6).lineTo(7,-0.6).lineTo(6.2,1.1).lineTo(1.1,-1.1).closePath();
	this.shape_4.setTransform(-49,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.3,7.7).lineTo(2.3,2.5).lineTo(1,2.5).lineTo(1,3.5).lineTo(-1,3.5).lineTo(-1,1.6).lineTo(-2.2,2.7).lineTo(-3.3,1.4).lineTo(-3.3,7.7).lineTo(-5.3,7.7).lineTo(-5.3,2.5).curveTo(-6,4,-6.8,5.3).lineTo(-7.6,2.8).curveTo(-6.1,1,-5.3,-1.2).lineTo(-7.5,-1.2).lineTo(-7.5,-3.2).lineTo(-5.3,-3.2).lineTo(-5.3,-5).lineTo(-7,-4.8).lineTo(-7.4,-6.7).lineTo(-1.9,-7.3).lineTo(-1.4,-5.5).lineTo(-3.3,-5.2).lineTo(-3.3,-3.2).lineTo(-1.4,-3.2).lineTo(-1.4,-1.2).lineTo(-3.3,-1.2).lineTo(-3.3,0.2).lineTo(-2.9,-0.3).lineTo(-1,1.5).lineTo(-1,-4.7).lineTo(2.3,-4.7).lineTo(2.3,-7.7).lineTo(4.3,-7.7).lineTo(4.3,-4.7).lineTo(7.6,-4.7).lineTo(7.6,3.5).lineTo(5.7,3.5).lineTo(5.7,2.5).lineTo(4.3,2.5).lineTo(4.3,7.7).closePath().moveTo(4.3,0.6).lineTo(5.7,0.6).lineTo(5.7,-2.7).lineTo(4.3,-2.7).closePath().moveTo(1,0.6).lineTo(2.3,0.6).lineTo(2.3,-2.7).lineTo(1,-2.7).closePath();
	this.shape_5.setTransform(-65.2,-17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.6,7.5).curveTo(-4,7.5,-4,5.2).lineTo(-4,1.8).lineTo(-1.9,1.8).lineTo(-1.9,4.7).curveTo(-1.9,5.6,-1,5.6).lineTo(1,5.6).curveTo(1.6,5.6,1.9,5.5).curveTo(2.2,5.3,2.3,5).curveTo(2.4,4.7,2.6,3.3).lineTo(4.8,4.3).curveTo(4.2,6.7,3.4,7.1).curveTo(2.6,7.5,1.7,7.5).closePath().moveTo(-7.9,5.8).curveTo(-7.1,4.2,-6.4,1.7).lineTo(-4.4,2.3).lineTo(-6,6.7).closePath().moveTo(4.4,2.4).lineTo(6.3,1.7).lineTo(7.9,5.5).lineTo(5.8,6.2).curveTo(5.3,4.5,4.4,2.4).closePath().moveTo(-1.4,1.9).lineTo(0,0.6).lineTo(2.4,2.9).lineTo(0.7,4.3).curveTo(-0.3,3,-1.4,1.9).closePath().moveTo(-6.3,0.5).lineTo(-6.3,-1.5).lineTo(-1.1,-1.5).lineTo(-1.1,-3.6).lineTo(-7.5,-3.6).lineTo(-7.5,-5.6).lineTo(-1.1,-5.6).lineTo(-1.1,-7.5).lineTo(1.1,-7.5).lineTo(1.1,-5.6).lineTo(7.5,-5.6).lineTo(7.5,-3.6).lineTo(1.1,-3.6).lineTo(1.1,-1.5).lineTo(6.3,-1.5).lineTo(6.3,0.5).closePath();
	this.shape_6.setTransform(-81.1,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.8,7.2).lineTo(3.8,6.1).lineTo(-3.7,6.1).lineTo(-3.7,7.2).lineTo(-6.1,7.2).lineTo(-6.1,-7.2).lineTo(6.2,-7.2).lineTo(6.2,7.2).closePath().moveTo(-3.7,3.9).lineTo(3.8,3.9).lineTo(3.8,0.5).lineTo(-3.7,0.5).closePath().moveTo(-3.7,-1.7).lineTo(3.8,-1.7).lineTo(3.8,-5).lineTo(-3.7,-5).closePath();
	this.shape_7.setTransform(-97,-17.2);

	this.instance = new lib.shap1();
	this.instance.setTransform(-129,18.5,1,1,0,0,0,8.5,9.5);

	this.instance_1 = new lib.shap1("synched",0);
	this.instance_1.setTransform(-129,-17.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.xtTx},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sjbTx}]}).wait(1));

	// 圆角矩形 1.svg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#5DBFE9").setStrokeStyle(3,0,1).moveTo(-150,-44).lineTo(162,-44).curveTo(166.1,-44,169.1,-41).curveTo(172,-38.1,172,-34).lineTo(172,34).curveTo(172,38.2,169.1,41.1).curveTo(166.1,44,162,44).lineTo(-150,44).curveTo(-154.2,44,-157.1,41.1).curveTo(-160,38.2,-160,34).lineTo(-160,8.5).lineTo(-172,-1).lineTo(-160,-10).lineTo(-160,-34).curveTo(-160,-38.1,-157.1,-41).curveTo(-154.2,-44,-150,-44).closePath();
	this.shape_8.setTransform(2.5,-4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(44,181,255,0.067)").beginStroke().moveTo(-150,44).curveTo(-154.2,44,-157.1,41.1).curveTo(-160,38.1,-160,34).lineTo(-160,8.5).lineTo(-172,-1).lineTo(-160,-10).lineTo(-160,-34).curveTo(-160,-38.1,-157.1,-41.1).curveTo(-154.2,-44,-150,-44).lineTo(162,-44).curveTo(166.2,-44,169,-41.1).curveTo(172,-38.1,172,-34).lineTo(172,34).curveTo(172,38.1,169,41.1).curveTo(166.2,44,162,44).closePath();
	this.shape_9.setTransform(2.5,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-49.5,347,91);


(lib.reac4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.shap1();
	this.instance.setTransform(15,27.2,1,1,0,0,0,8.5,9.5);

	this.instance_1 = new lib.shap1();
	this.instance_1.setTransform(15,-48.2,1,1,0,0,0,8.5,9.5);

	this.sjzhdbTx = new cjs.Text("267", "24px 'Arial'", "#FF952E");
	this.sjzhdbTx.name = "sjzhdbTx";
	this.sjzhdbTx.lineHeight = 16;
	this.sjzhdbTx.lineWidth = 142;
	this.sjzhdbTx.setTransform(-147,-3);

	this.zyTx = new cjs.Text("493", "24px 'Arial'", "#FF952E");
	this.zyTx.name = "zyTx";
	this.zyTx.lineHeight = 16;
	this.zyTx.lineWidth = 133;
	this.zyTx.setTransform(-149.1,-56,1.088,1);

	this.yykTx = new cjs.Text("3,054,149,911", "24px 'Arial'", "#FF952E");
	this.yykTx.name = "yykTx";
	this.yykTx.lineHeight = 16;
	this.yykTx.setTransform(98.1,48,1.062,1);

	this.qwkTx = new cjs.Text("1,807,742,290", "24px 'Arial'", "#FF952E");
	this.qwkTx.name = "qwkTx";
	this.qwkTx.lineHeight = 16;
	this.qwkTx.setTransform(98.1,9.6,1.062,1);

	this.zpkTx = new cjs.Text("569,249,239", "24px 'Arial'", "#FF952E");
	this.zpkTx.name = "zpkTx";
	this.zpkTx.lineHeight = 16;
	this.zpkTx.lineWidth = 163;
	this.zpkTx.setTransform(98.1,-26.4);

	this.bskTx = new cjs.Text("1,807,724,285", "24px 'Arial'", "#FF952E");
	this.bskTx.name = "bskTx";
	this.bskTx.lineHeight = 16;
	this.bskTx.setTransform(98.1,-62.4,1.062,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape.setTransform(-170.1,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_1.setTransform(-186.1,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.2,6.1).curveTo(-5.9,4.4,-6,-0).lineTo(-6,-7.4).lineTo(7.2,-7.4).lineTo(7.2,4.8).curveTo(7.2,5.8,6.7,6.4).curveTo(6.3,6.9,5.4,7.1).curveTo(4.4,7.1,2.9,7.1).lineTo(2.3,4.8).lineTo(4,5).curveTo(5,5,5,4).lineTo(5,2.6).lineTo(1.8,2.6).lineTo(1.8,7).lineTo(-0.5,7).lineTo(-0.5,2.6).lineTo(-3.8,2.6).curveTo(-4.1,6,-5.2,7.4).lineTo(-7.2,6.1).closePath().moveTo(1.8,0.6).lineTo(5,0.6).lineTo(5,-1.4).lineTo(1.8,-1.4).closePath().moveTo(-3.8,0.6).lineTo(-0.5,0.6).lineTo(-0.5,-1.4).lineTo(-3.8,-1.4).closePath().moveTo(1.8,-3.4).lineTo(5,-3.4).lineTo(5,-5.4).lineTo(1.8,-5.4).closePath().moveTo(-3.8,-3.4).lineTo(-0.5,-3.4).lineTo(-0.5,-5.4).lineTo(-3.8,-5.4).closePath();
	this.shape_2.setTransform(-202.5,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.8,5.9).curveTo(-1.7,5.5,-0.7,5).curveTo(-1.8,4.1,-2.7,3).lineTo(-1.3,2).lineTo(-2.8,2).lineTo(-2.8,-3.3).lineTo(1,-3.3).lineTo(1,-4.5).lineTo(-3.2,-4.5).lineTo(-3.2,-6.3).lineTo(1,-6.3).lineTo(1,-7.7).lineTo(3.1,-7.7).lineTo(3.1,-6.3).lineTo(7.6,-6.3).lineTo(7.6,-4.5).lineTo(3.1,-4.5).lineTo(3.1,-3.3).lineTo(6.9,-3.3).lineTo(6.9,2.6).lineTo(4.9,2.6).lineTo(4.9,2).lineTo(3.1,2).curveTo(2.9,3.6,2.5,4.5).curveTo(4.7,5.3,7.8,5.3).lineTo(6.7,7.6).curveTo(3.5,7.3,1.2,6.1).curveTo(-0.1,7,-2.7,7.7).lineTo(-3.8,5.9).closePath().moveTo(0.7,3.7).curveTo(0.9,3,1,2).lineTo(-1.2,2).curveTo(-0.5,3,0.7,3.7).closePath().moveTo(3.1,0.3).lineTo(4.9,0.3).lineTo(4.9,-1.5).lineTo(3.1,-1.5).closePath().moveTo(-0.8,0.3).lineTo(1,0.3).lineTo(1,-1.5).lineTo(-0.8,-1.5).closePath().moveTo(-6.1,7.7).lineTo(-6.1,0.5).lineTo(-7.3,2.5).curveTo(-7.4,1,-7.7,-0.5).curveTo(-6,-3.8,-5.1,-7.7).lineTo(-3,-7.2).curveTo(-3.5,-5.5,-4.1,-3.8).lineTo(-4.1,7.7).closePath();
	this.shape_3.setTransform(-218.1,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.3,6.1).lineTo(-0.8,7).lineTo(-2.9,5.9).curveTo(-4.6,7,-7,7.5).lineTo(-7.8,5.6).curveTo(-6.2,5.4,-4.9,4.9).lineTo(-7.2,4).curveTo(-6.7,3.2,-6.3,2.4).lineTo(-7.6,2.4).lineTo(-7.6,0.8).lineTo(-5.5,0.8).lineTo(-5.1,-0.4).lineTo(-4.2,-0.3).lineTo(-4.2,-1.8).curveTo(-5.4,-0.6,-7.1,0.4).curveTo(-7.4,-0.6,-7.8,-1.4).curveTo(-6.3,-2,-5,-3.1).lineTo(-7.4,-3.1).lineTo(-7.4,-4.7).lineTo(-6.2,-4.7).curveTo(-6.6,-5.5,-7.3,-6.4).lineTo(-5.9,-7.3).lineTo(-4.6,-5.5).lineTo(-6,-4.7).lineTo(-4.2,-4.7).lineTo(-4.2,-7.7).lineTo(-2.2,-7.7).lineTo(-2.2,-4.7).lineTo(-0.6,-4.7).lineTo(-1.9,-5.5).curveTo(-1.1,-6.4,-0.6,-7.4).lineTo(0.9,-6.5).curveTo(0.4,-5.6,-0.4,-4.7).lineTo(0.5,-4.7).lineTo(0.5,-3.1).lineTo(-2.2,-3.1).lineTo(-2.2,-2).lineTo(-1.7,-2.7).lineTo(0.2,-1.7).curveTo(1.4,-4,2.4,-7.8).lineTo(4.5,-7.6).lineTo(3.8,-5.3).lineTo(7.8,-5.3).lineTo(7.8,-3.4).lineTo(7.1,-3.4).curveTo(6.8,0.8,5.4,3.4).curveTo(6.4,4.6,7.8,5.4).curveTo(7.3,6.1,6.5,7.5).curveTo(5.1,6.6,4.1,5.3).curveTo(2.8,6.8,1.1,7.8).lineTo(-0.3,6.1).closePath().moveTo(-3.4,0.8).lineTo(0.2,0.8).lineTo(0.2,2.3).curveTo(-0.4,3.6,-1.3,4.5).lineTo(0.3,5.2).lineTo(-0.1,5.7).curveTo(1.7,4.8,2.9,3.3).curveTo(2.1,1.8,1.7,-0.2).lineTo(1.2,0.8).lineTo(0.3,-0.5).lineTo(-0.1,0.2).lineTo(-2.2,-1.2).lineTo(-2.2,0).lineTo(-3,0).lineTo(-3.4,0.8).closePath().moveTo(-4.7,3.2).lineTo(-3.1,3.8).curveTo(-2.4,3.2,-1.9,2.4).lineTo(-4.3,2.4).closePath().moveTo(3,-2.9).curveTo(3.3,-0.3,4.1,1.4).curveTo(5,-0.6,5.2,-3.4).lineTo(3.2,-3.4).lineTo(3,-2.9).closePath();
	this.shape_4.setTransform(-170,-42.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_5.setTransform(-186,-42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.9,7.8).lineTo(2.9,4.3).lineTo(0.1,4.3).lineTo(0.1,2.5).lineTo(2.9,2.5).lineTo(2.9,0.6).lineTo(0.5,0.6).lineTo(0.5,-1.2).lineTo(2.9,-1.2).lineTo(2.9,-3).lineTo(0.4,-3).lineTo(0.4,-2.3).lineTo(-0.4,-2.3).lineTo(-0.4,0.5).lineTo(-4.5,0.5).lineTo(-4.9,1.6).lineTo(-0.4,1.6).lineTo(-0.4,7.7).lineTo(-2.2,7.7).lineTo(-2.2,6.9).lineTo(-4.4,6.9).lineTo(-4.4,7.7).lineTo(-6.1,7.7).lineTo(-6.1,4.1).lineTo(-7.3,5.6).lineTo(-7.8,3.3).curveTo(-6.8,1.9,-6.3,0.5).lineTo(-7.4,0.5).lineTo(-7.4,-1.1).lineTo(-5.9,-1.1).lineTo(-5.8,-2.3).lineTo(-7.7,-2.3).lineTo(-7.7,-4.1).lineTo(-5.7,-4.1).lineTo(-5.7,-5.4).lineTo(-7.1,-5.4).lineTo(-7.1,-7).lineTo(-0.4,-7).lineTo(-0.4,-4.1).lineTo(0.4,-4.1).lineTo(0.4,-4.9).lineTo(1.8,-4.9).lineTo(0.5,-6.7).lineTo(2,-7.7).lineTo(3.7,-5.6).lineTo(2.8,-4.9).lineTo(4.2,-4.9).curveTo(5,-6.1,5.9,-7.7).lineTo(7.7,-6.8).lineTo(6.4,-4.9).lineTo(7.6,-4.9).lineTo(7.6,-3).lineTo(4.9,-3).lineTo(4.9,-1.2).lineTo(7.5,-1.2).lineTo(7.5,0.6).lineTo(4.9,0.6).lineTo(4.9,2.5).lineTo(7.8,2.5).lineTo(7.8,4.3).lineTo(4.9,4.3).lineTo(4.9,7.8).closePath().moveTo(-4.4,5.2).lineTo(-2.2,5.2).lineTo(-2.2,3.3).lineTo(-4.4,3.3).closePath().moveTo(-4.1,-1.1).lineTo(-2.1,-1.1).lineTo(-2.1,-2.3).lineTo(-4,-2.3).lineTo(-4.1,-1.1).closePath().moveTo(-3.9,-4.1).lineTo(-2.1,-4.1).lineTo(-2.1,-5.4).lineTo(-3.9,-5.4).lineTo(-3.9,-4.1).closePath();
	this.shape_6.setTransform(-202,-42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.1,7.8).lineTo(-1.1,4.6).curveTo(-3.1,6.5,-6.7,7.7).curveTo(-7.1,6.8,-7.8,5.9).curveTo(-4.8,5.1,-3,4.1).lineTo(-7.5,4.1).lineTo(-7.5,2.6).lineTo(-1.1,2.6).lineTo(-1.1,1.8).lineTo(1,1.8).lineTo(1,2.6).lineTo(7.6,2.6).lineTo(7.6,4.1).lineTo(3,4.1).curveTo(4.9,5.2,7.8,5.6).lineTo(6.7,7.5).curveTo(2.9,6.5,1,4.5).lineTo(1,7.8).closePath().moveTo(-6,2.1).lineTo(-6,-2.5).lineTo(-6.9,-1.7).curveTo(-7.3,-2.9,-7.8,-3.9).curveTo(-5.9,-5.4,-4.7,-7.6).lineTo(-2.5,-7.2).lineTo(-3,-6.2).lineTo(-0.4,-6.2).lineTo(-1,-7.4).lineTo(1,-7.7).lineTo(1.8,-6.2).lineTo(6.9,-6.2).lineTo(6.9,-4.8).lineTo(1.7,-4.8).lineTo(1.7,-4).lineTo(6.3,-4).lineTo(6.3,-2.8).lineTo(1.7,-2.8).lineTo(1.7,-2).lineTo(6.3,-2).lineTo(6.3,-0.7).lineTo(1.7,-0.7).lineTo(1.7,0.1).lineTo(7.1,0.1).lineTo(7.1,1.5).lineTo(-3.9,1.5).lineTo(-3.9,2.1).closePath().moveTo(-3.9,0.1).lineTo(-0.3,0.1).lineTo(-0.3,-0.7).lineTo(-3.9,-0.7).closePath().moveTo(-3.9,-2).lineTo(-0.3,-2).lineTo(-0.3,-2.8).lineTo(-3.9,-2.8).closePath().moveTo(-3.9,-4.8).lineTo(-3.9,-4).lineTo(-0.3,-4).lineTo(-0.3,-4.8).lineTo(-3.9,-4.8).closePath();
	this.shape_7.setTransform(-218,-42.1);

	this.instance_2 = new lib.shap1();
	this.instance_2.setTransform(-250,11,1,1,0,0,0,8.5,9.5);

	this.instance_3 = new lib.shap1();
	this.instance_3.setTransform(-250,-42,1,1,0,0,0,8.5,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.9).curveTo(-6.4,3.6,-6.5,-0.8).lineTo(-6.5,-6.3).lineTo(-0.2,-6.3).lineTo(-0.7,-7.4).lineTo(1.9,-7.7).lineTo(2.3,-6.3).lineTo(7.7,-6.3).lineTo(7.7,-4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-0.7).curveTo(-4.3,5,-6.2,7.7).lineTo(-7.7,5.9).closePath().moveTo(1,7.6).lineTo(1,5.3).lineTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1,3.5).lineTo(1,2.4).lineTo(-3.5,2.4).lineTo(-3.5,0.6).lineTo(-2.3,-1.4).lineTo(-4,-1.4).lineTo(-4,-3.2).lineTo(-1.4,-3.2).lineTo(-0.7,-4.5).lineTo(1.4,-4.2).lineTo(0.9,-3.2).lineTo(7.3,-3.2).lineTo(7.3,-1.4).lineTo(-0.1,-1.4).lineTo(-1.2,0.6).lineTo(1,0.6).lineTo(1,-0.9).lineTo(3.1,-0.9).lineTo(3.1,0.6).lineTo(7,0.6).lineTo(7,2.4).lineTo(3.1,2.4).lineTo(3.1,3.5).lineTo(7.7,3.5).lineTo(7.7,5.3).lineTo(3.1,5.3).lineTo(3.1,7.6).closePath();
	this.shape_8.setTransform(78.8,62.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.2,6.1).curveTo(-5.9,4.3,-6,-0).lineTo(-6,-7.4).lineTo(7.2,-7.4).lineTo(7.2,4.8).curveTo(7.2,5.9,6.7,6.4).curveTo(6.3,7,5.4,7.1).curveTo(4.4,7.1,2.9,7.1).lineTo(2.3,4.8).lineTo(4,4.9).curveTo(5,4.9,5,4).lineTo(5,2.6).lineTo(1.8,2.6).lineTo(1.8,7).lineTo(-0.5,7).lineTo(-0.5,2.6).lineTo(-3.8,2.6).curveTo(-4.1,6,-5.2,7.4).lineTo(-7.2,6.1).closePath().moveTo(1.8,0.5).lineTo(5,0.5).lineTo(5,-1.4).lineTo(1.8,-1.4).closePath().moveTo(-3.8,0.5).lineTo(-0.5,0.5).lineTo(-0.5,-1.4).lineTo(-3.8,-1.4).closePath().moveTo(1.8,-3.4).lineTo(5,-3.4).lineTo(5,-5.3).lineTo(1.8,-5.3).closePath().moveTo(-3.8,-3.4).lineTo(-0.5,-3.4).lineTo(-0.5,-5.3).lineTo(-3.8,-5.3).closePath();
	this.shape_9.setTransform(62.5,63.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,6.3).curveTo(-6.4,4.1,-6.4,-0.9).lineTo(-6.4,-5.8).lineTo(-0.4,-5.8).lineTo(-1,-7.2).lineTo(1.5,-7.8).lineTo(2.3,-5.8).lineTo(7.6,-5.8).lineTo(7.6,-3.9).lineTo(-4.3,-3.9).lineTo(-4.3,-0.6).curveTo(-4.3,5.3,-5.9,7.8).lineTo(-7.7,6.3).closePath().moveTo(-4.6,7).lineTo(-4.6,4.8).lineTo(2.8,4.8).lineTo(5.1,-3).lineTo(7.2,-2.4).curveTo(6.4,0.6,5,4.8).lineTo(7.7,4.8).lineTo(7.7,7).closePath().moveTo(-4.2,-1.8).lineTo(-2.4,-2.6).curveTo(-1,0.4,0.2,3.6).lineTo(-1.9,4.3).curveTo(-2.9,1.4,-4.2,-1.8).closePath().moveTo(-0.4,-2.6).lineTo(1.6,-3.2).curveTo(2.4,-1.1,3.4,2.3).lineTo(1.2,2.9).lineTo(-0.4,-2.6).closePath();
	this.shape_10.setTransform(46.8,62.9);

	this.instance_4 = new lib.shap1();
	this.instance_4.setTransform(15,63,1,1,0,0,0,8.5,9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.9).curveTo(-6.4,3.6,-6.5,-0.8).lineTo(-6.5,-6.3).lineTo(-0.2,-6.3).lineTo(-0.7,-7.4).lineTo(1.8,-7.7).lineTo(2.4,-6.3).lineTo(7.7,-6.3).lineTo(7.7,-4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-0.7).curveTo(-4.3,5,-6.2,7.7).lineTo(-7.7,5.9).closePath().moveTo(1,7.6).lineTo(1,5.3).lineTo(-4.5,5.3).lineTo(-4.5,3.5).lineTo(1,3.5).lineTo(1,2.4).lineTo(-3.5,2.4).lineTo(-3.5,0.6).lineTo(-2.3,-1.4).lineTo(-3.9,-1.4).lineTo(-3.9,-3.2).lineTo(-1.4,-3.2).lineTo(-0.8,-4.5).lineTo(1.5,-4.2).lineTo(0.9,-3.2).lineTo(7.3,-3.2).lineTo(7.3,-1.4).lineTo(-0.1,-1.4).lineTo(-1.1,0.6).lineTo(1,0.6).lineTo(1,-0.9).lineTo(3.1,-0.9).lineTo(3.1,0.6).lineTo(7,0.6).lineTo(7,2.4).lineTo(3.1,2.4).lineTo(3.1,3.5).lineTo(7.8,3.5).lineTo(7.8,5.3).lineTo(3.1,5.3).lineTo(3.1,7.6).closePath();
	this.shape_11.setTransform(78.9,24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.5).curveTo(-4.3,4.4,-1.9,2.8).curveTo(-4.1,0.2,-5,-3.1).lineTo(-7.6,-3.1).lineTo(-7.6,-5.3).lineTo(-1.1,-5.3).lineTo(-1.7,-7.3).lineTo(0.7,-7.7).lineTo(1.6,-5.3).lineTo(7.6,-5.3).lineTo(7.6,-3.1).lineTo(5.2,-3.1).curveTo(4.1,0.3,1.8,2.8).curveTo(4.2,4.5,7.7,5.3).curveTo(6.5,6.9,6,7.7).curveTo(2.5,6.4,-0.1,4.5).curveTo(-2.5,6.4,-6.2,7.8).lineTo(-7.7,5.5).closePath().moveTo(-0.1,1.3).curveTo(1.8,-0.6,2.5,-3.1).lineTo(-2.6,-3.1).curveTo(-1.9,-0.6,-0.1,1.3).closePath();
	this.shape_12.setTransform(63,24.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.1,7.4).lineTo(-7.1,5.4).lineTo(-1.2,5.4).lineTo(-1.2,3.5).lineTo(-5.9,3.5).lineTo(-5.9,1.5).lineTo(-1.2,1.5).lineTo(-1.2,-0).lineTo(-4.2,-0).lineTo(-4.2,-1.3).curveTo(-5.2,-0.5,-6.4,0.2).lineTo(-7.8,-1.7).curveTo(-2.8,-4.4,-1,-7.4).lineTo(1.8,-7.4).lineTo(1.3,-6.8).curveTo(3.4,-3.9,7.8,-1.9).lineTo(6.4,-0).curveTo(5.2,-0.6,4.2,-1.3).lineTo(4.2,-0).lineTo(1.1,-0).lineTo(1.1,1.5).lineTo(5.8,1.5).lineTo(5.8,3.5).lineTo(1.1,3.5).lineTo(1.1,5.4).lineTo(7.1,5.4).lineTo(7.1,7.4).closePath().moveTo(-3.2,-2).lineTo(3.2,-2).curveTo(1.3,-3.5,-0,-5.2).curveTo(-1.3,-3.5,-3.2,-2).closePath();
	this.shape_13.setTransform(47,24.6);

	this.instance_5 = new lib.shap1();
	this.instance_5.setTransform(15,-8.8,1,1,0,0,0,8.5,9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.9).curveTo(-6.4,3.6,-6.5,-0.8).lineTo(-6.5,-6.3).lineTo(-0.2,-6.3).lineTo(-0.7,-7.4).lineTo(1.8,-7.7).lineTo(2.4,-6.3).lineTo(7.7,-6.3).lineTo(7.7,-4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-0.7).curveTo(-4.3,5,-6.2,7.7).lineTo(-7.7,5.9).closePath().moveTo(1,7.6).lineTo(1,5.3).lineTo(-4.5,5.3).lineTo(-4.5,3.5).lineTo(1,3.5).lineTo(1,2.4).lineTo(-3.5,2.4).lineTo(-3.5,0.6).lineTo(-2.3,-1.4).lineTo(-3.9,-1.4).lineTo(-3.9,-3.2).lineTo(-1.4,-3.2).lineTo(-0.8,-4.5).lineTo(1.5,-4.2).lineTo(0.9,-3.2).lineTo(7.3,-3.2).lineTo(7.3,-1.4).lineTo(-0.1,-1.4).lineTo(-1.1,0.6).lineTo(1,0.6).lineTo(1,-0.9).lineTo(3.1,-0.9).lineTo(3.1,0.6).lineTo(7,0.6).lineTo(7,2.4).lineTo(3.1,2.4).lineTo(3.1,3.5).lineTo(7.8,3.5).lineTo(7.8,5.3).lineTo(3.1,5.3).lineTo(3.1,7.6).closePath();
	this.shape_14.setTransform(78.9,-11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.9).curveTo(-5.2,3.7,-5.2,-1.6).lineTo(-5.2,-7.5).lineTo(-3,-7.5).lineTo(-3,-3.8).lineTo(1.6,-3.8).lineTo(1.6,-7.7).lineTo(4,-7.7).lineTo(4,-3.8).lineTo(7.7,-3.8).lineTo(7.7,-1.7).lineTo(-3,-1.7).curveTo(-2.9,-0.6,-3,0.4).lineTo(4.8,0.4).lineTo(4.8,7.6).lineTo(2.5,7.6).lineTo(2.5,2.4).lineTo(-3.3,2.4).curveTo(-3.9,5.7,-5.9,7.8).curveTo(-6.7,6.7,-7.7,5.9).closePath();
	this.shape_15.setTransform(62.9,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,6.5).curveTo(-6.6,4.9,-5.8,3.1).lineTo(-3.9,3.9).curveTo(-4.7,5.6,-5.8,7.5).closePath().moveTo(4,3.8).lineTo(5.9,3).lineTo(7.7,6.5).lineTo(5.8,7.3).lineTo(4,3.8).closePath().moveTo(-3.3,3.9).lineTo(-1.3,3.4).lineTo(-0.1,6.6).lineTo(-2.2,7).lineTo(-3.3,3.9).closePath().moveTo(0.4,3.8).lineTo(2.3,3.2).lineTo(3.7,6.3).lineTo(1.7,6.9).lineTo(0.4,3.8).closePath().moveTo(-0.3,3).lineTo(-0.3,-1.7).lineTo(7,-1.7).lineTo(7,3).closePath().moveTo(1.6,1.3).lineTo(5.1,1.3).lineTo(5.1,-0.1).lineTo(1.6,-0.1).closePath().moveTo(-6.9,2.9).lineTo(-6.9,-7.4).lineTo(-1.3,-7.4).lineTo(-1.3,2.9).closePath().moveTo(-5,1.1).lineTo(-3.2,1.1).lineTo(-3.2,-1.4).lineTo(-5,-1.4).closePath().moveTo(-5,-3.2).lineTo(-3.2,-3.2).lineTo(-3.2,-5.6).lineTo(-5,-5.6).closePath().moveTo(-0.8,-3.4).curveTo(0.6,-4,0.9,-5.7).lineTo(-0.6,-5.7).lineTo(-0.6,-7.5).lineTo(7.3,-7.5).lineTo(7.2,-4.5).curveTo(7.2,-3.4,6.8,-3).curveTo(6.3,-2.4,5.6,-2.4).curveTo(4.9,-2.2,3.1,-2.3).lineTo(2.7,-4.1).lineTo(4.5,-3.9).curveTo(5,-3.9,5.1,-4.2).curveTo(5.3,-4.5,5.3,-5.7).lineTo(2.9,-5.7).curveTo(2.5,-3,0.6,-1.8).lineTo(-0.8,-3.4).closePath();
	this.shape_16.setTransform(47,-10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.8,5.9).curveTo(-6.4,3.6,-6.5,-0.8).lineTo(-6.5,-6.3).lineTo(-0.2,-6.3).lineTo(-0.7,-7.4).lineTo(1.9,-7.7).lineTo(2.3,-6.3).lineTo(7.7,-6.3).lineTo(7.7,-4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-0.7).curveTo(-4.3,5,-6.2,7.7).lineTo(-7.8,5.9).closePath().moveTo(1,7.6).lineTo(1,5.3).lineTo(-4.4,5.3).lineTo(-4.4,3.5).lineTo(1,3.5).lineTo(1,2.4).lineTo(-3.5,2.4).lineTo(-3.5,0.6).lineTo(-2.3,-1.4).lineTo(-4,-1.4).lineTo(-4,-3.2).lineTo(-1.4,-3.2).lineTo(-0.7,-4.5).lineTo(1.4,-4.2).lineTo(0.9,-3.2).lineTo(7.3,-3.2).lineTo(7.3,-1.4).lineTo(-0,-1.4).lineTo(-1.2,0.6).lineTo(1,0.6).lineTo(1,-0.9).lineTo(3.1,-0.9).lineTo(3.1,0.6).lineTo(7,0.6).lineTo(7,2.4).lineTo(3.1,2.4).lineTo(3.1,3.5).lineTo(7.7,3.5).lineTo(7.7,5.3).lineTo(3.1,5.3).lineTo(3.1,7.6).closePath();
	this.shape_17.setTransform(78.9,-47.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.8,6.2).curveTo(-2,4.5,-0.3,2).lineTo(1.6,3.2).curveTo(-0.2,5.6,-2,7.7).lineTo(-3.8,6.2).closePath().moveTo(2.6,3.1).lineTo(4.3,2).curveTo(6.1,4,7.8,6.2).lineTo(5.9,7.6).curveTo(4.3,5.3,2.6,3.1).closePath().moveTo(-6.6,5.4).curveTo(-6.3,4.9,-6.3,4.1).lineTo(-6.3,-0.9).lineTo(-7.8,-0.9).lineTo(-7.8,-3).lineTo(-4.1,-3).lineTo(-4.1,3).lineTo(-2.5,1.8).lineTo(-2.2,4.1).curveTo(-4.4,5.7,-5.5,6.8).closePath().moveTo(-2.3,1.5).lineTo(-2.3,-7).lineTo(6.5,-7).lineTo(6.5,1.5).closePath().moveTo(-0.1,-0.4).lineTo(4.4,-0.4).lineTo(4.4,-5.1).lineTo(-0.1,-5.1).closePath().moveTo(-7.1,-6.7).lineTo(-5.2,-7.7).lineTo(-3.2,-4.8).lineTo(-5.2,-3.6).curveTo(-6.1,-5.2,-7.1,-6.7).closePath();
	this.shape_18.setTransform(63.1,-47);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.9,7.7).lineTo(-5.9,1.2).curveTo(-6.5,2.8,-7.4,4.2).lineTo(-7.9,1.3).curveTo(-6.6,-0.8,-6.1,-2.9).lineTo(-7.7,-2.9).lineTo(-7.7,-4.9).lineTo(-5.9,-4.9).lineTo(-5.9,-7.7).lineTo(-4,-7.7).lineTo(-4,-4.9).lineTo(-2.5,-4.9).lineTo(-2.5,-2.9).lineTo(-4,-2.9).lineTo(-4,-1.1).lineTo(-2.1,0).lineTo(-3,1.8).lineTo(-4,1.1).lineTo(-4,7.7).closePath().moveTo(-0.9,5.4).lineTo(0.6,5.5).curveTo(1.5,5.5,1.5,4.7).lineTo(1.5,-0.9).lineTo(-2.5,-0.9).lineTo(-2.5,-3).lineTo(7.6,-3).lineTo(7.6,-0.9).lineTo(3.6,-0.9).lineTo(3.6,5.8).curveTo(3.7,6.6,3.2,7).curveTo(2.7,7.5,1.9,7.5).lineTo(-0.5,7.6).lineTo(-0.9,5.4).closePath().moveTo(4.1,0.8).lineTo(6,0.2).lineTo(7.9,5.1).lineTo(5.9,5.9).curveTo(5,3.1,4.1,0.8).closePath().moveTo(-3.1,5.1).curveTo(-2.1,3,-1.2,0.1).lineTo(0.7,0.6).curveTo(-0.3,3.6,-1.3,5.8).curveTo(-2.3,5.3,-3.1,5.1).closePath().moveTo(-1.9,-4.8).lineTo(-1.9,-6.9).lineTo(7,-6.9).lineTo(7,-4.8).closePath();
	this.shape_19.setTransform(47,-47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_5},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_3},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bskTx},{t:this.zpkTx},{t:this.qwkTx},{t:this.yykTx},{t:this.zyTx},{t:this.sjzhdbTx},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#5ABCE4").setStrokeStyle(3,1,1).moveTo(-272.1,-75.4).lineTo(56,-75.4).lineTo(68.2,-92).curveTo(68.2,-92,81.1,-75.4).lineTo(272.1,-75.4).curveTo(282.5,-75.4,282.5,-65.1).lineTo(282.5,81.7).curveTo(282.5,92,272.1,92).lineTo(-272.1,92).curveTo(-282.5,92,-282.5,81.7).lineTo(-282.5,-65.1).curveTo(-282.5,-75.4,-272.1,-75.4).closePath();
	this.shape_20.setTransform(-1.1,0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("rgba(0,204,102,0)").beginStroke().moveTo(-272.1,92).curveTo(-282.5,92,-282.5,81.7).lineTo(-282.5,-65.1).curveTo(-282.5,-75.3,-272.1,-75.3).lineTo(56.1,-75.3).lineTo(68.2,-92).lineTo(81.1,-75.3).lineTo(272.2,-75.3).curveTo(282.4,-75.3,282.4,-65.1).lineTo(282.4,81.7).curveTo(282.4,92,272.2,92).closePath();
	this.shape_21.setTransform(-1.1,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285,-92.6,567.9,187);


(lib.reac3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.sjbTx = new cjs.Text("3,406", "24px 'Arial'", "#FF952E");
	this.sjbTx.name = "sjbTx";
	this.sjbTx.lineHeight = 16;
	this.sjbTx.lineWidth = 187;
	this.sjbTx.setTransform(-34.2,7.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape.setTransform(-55.1,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_1.setTransform(-71.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.8,7.7).lineTo(4.8,6.9).lineTo(-6.9,6.9).lineTo(-6.9,1).lineTo(-4.7,1).lineTo(-4.7,4.9).lineTo(-1.2,4.9).lineTo(-1.2,-0.3).lineTo(-6.3,-0.3).lineTo(-6.3,-6.3).lineTo(-4.2,-6.3).lineTo(-4.2,-2.4).lineTo(-1.2,-2.4).lineTo(-1.2,-7.7).lineTo(1.2,-7.7).lineTo(1.2,-2.4).lineTo(4.2,-2.4).lineTo(4.2,-6.3).lineTo(6.4,-6.3).lineTo(6.4,-0.3).lineTo(1.2,-0.3).lineTo(1.2,4.9).lineTo(4.8,4.9).lineTo(4.8,1).lineTo(6.9,1).lineTo(6.9,7.7).closePath();
	this.shape_2.setTransform(-87.1,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2,7.7).lineTo(-2,-1.7).lineTo(2.7,-1.7).lineTo(2.7,6.1).curveTo(2.7,7.6,1.2,7.6).lineTo(0.1,7.6).lineTo(-0.2,5.8).lineTo(0.7,5.8).curveTo(0.8,5.8,0.9,5.8).curveTo(0.9,5.8,1,5.7).curveTo(1,5.7,1,5.7).curveTo(1.1,5.6,1.1,5.5).lineTo(1.1,4.6).lineTo(-0.4,4.6).lineTo(-0.4,7.7).closePath().moveTo(-0.4,3.1).lineTo(1.1,3.1).lineTo(1.1,2.2).lineTo(-0.4,2.2).closePath().moveTo(-0.4,0.7).lineTo(1.1,0.7).lineTo(1.1,-0.2).lineTo(-0.4,-0.2).closePath().moveTo(-5.1,7.7).lineTo(-5.1,5).lineTo(-7.7,5.2).lineTo(-7.8,3.2).lineTo(-5.1,3.1).lineTo(-5.1,1.7).lineTo(-7.7,1.7).lineTo(-7.7,-0.5).lineTo(-6.9,-3.9).lineTo(-7.8,-3.9).lineTo(-7.8,-5.7).lineTo(-6.6,-5.7).lineTo(-6.2,-7.7).lineTo(-4.4,-7.6).lineTo(-4.8,-5.7).lineTo(-2.2,-5.7).lineTo(-2.2,-4).curveTo(0.3,-5.5,1.5,-7.6).lineTo(4,-7.6).lineTo(3.7,-7.1).curveTo(5.4,-4.7,7.8,-3.5).lineTo(6.6,-1.8).curveTo(5.8,-2.3,5,-2.9).lineTo(5,-2.4).lineTo(-0.4,-2.4).lineTo(-0.4,-2.8).lineTo(-1.6,-1.9).lineTo(-2.9,-3.6).lineTo(-2.3,-3.9).lineTo(-5.1,-3.9).lineTo(-6,-0.2).lineTo(-5.1,-0.2).lineTo(-5.1,-2.9).lineTo(-3.3,-2.9).lineTo(-3.3,-0.2).lineTo(-2.5,-0.2).lineTo(-2.5,1.7).lineTo(-3.3,1.7).lineTo(-3.3,2.9).lineTo(-2.4,2.8).lineTo(-2.4,4.7).lineTo(-3.3,4.8).lineTo(-3.3,7.7).closePath().moveTo(1.1,-4.1).lineTo(3.8,-4.1).lineTo(2.4,-5.5).lineTo(1.1,-4.1).closePath().moveTo(3.6,7.5).lineTo(3.3,5.6).lineTo(4.6,5.7).curveTo(5.2,5.7,5.2,4.8).lineTo(5.2,-1.6).lineTo(6.9,-1.6).lineTo(6.9,5.5).curveTo(7,7.6,5.3,7.6).lineTo(3.6,7.5).closePath().moveTo(3.1,4.6).lineTo(3.1,-1).lineTo(4.6,-1).lineTo(4.6,4.6).closePath();
	this.shape_3.setTransform(-103,24.4);

	this.xtTx = new cjs.Text("47", "24px 'Arial'", "#FF952E");
	this.xtTx.name = "xtTx";
	this.xtTx.lineHeight = 16;
	this.xtTx.lineWidth = 189;
	this.xtTx.setTransform(-34.2,-28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,7.2).lineTo(-7.7,6).lineTo(-1.1,6).lineTo(-1.1,5.4).lineTo(-6.8,5.4).lineTo(-6.8,4.3).lineTo(-1.1,4.3).lineTo(-1.1,3.8).lineTo(-6.2,3.8).lineTo(-6.2,-0.8).lineTo(6.2,-0.8).lineTo(6.2,3.8).lineTo(1,3.8).lineTo(1,4.3).lineTo(6.8,4.3).lineTo(6.8,5.4).lineTo(1,5.4).lineTo(1,6).lineTo(7.7,6).lineTo(7.7,7.2).closePath().moveTo(1,2.7).lineTo(4.2,2.7).lineTo(4.2,2).lineTo(1,2).closePath().moveTo(-4.2,2.7).lineTo(-1.1,2.7).lineTo(-1.1,2).lineTo(-4.2,2).closePath().moveTo(1,1).lineTo(4.2,1).lineTo(4.2,0.3).lineTo(1,0.3).closePath().moveTo(-4.2,1).lineTo(-1.1,1).lineTo(-1.1,0.3).lineTo(-4.2,0.3).closePath().moveTo(-7.7,-1.3).lineTo(-7.7,-2.4).lineTo(7.7,-2.4).lineTo(7.7,-1.3).closePath().moveTo(-6.2,-3).lineTo(-6.2,-7.2).lineTo(6.2,-7.2).lineTo(6.2,-3).closePath().moveTo(-4.1,-4.1).lineTo(4,-4.1).lineTo(4,-4.6).lineTo(-4.1,-4.6).closePath().moveTo(-4.1,-5.5).lineTo(4,-5.5).lineTo(4,-6.1).lineTo(-4.1,-6.1).closePath();
	this.shape_4.setTransform(-55,-12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.8,7.6).curveTo(-4.1,7.6,-4.1,5.4).lineTo(-4.1,2).lineTo(-2.1,2).lineTo(-2.1,4.8).curveTo(-2.1,5.6,-1.1,5.6).lineTo(1.3,5.6).curveTo(1.8,5.6,2.1,5.5).curveTo(2.5,5.3,2.6,4.8).lineTo(2.8,3.5).lineTo(4.9,4.5).curveTo(4.3,6.8,3.5,7.2).curveTo(2.8,7.6,1.7,7.6).closePath().moveTo(-7.8,6).curveTo(-7,4.2,-6.4,2.2).lineTo(-4.4,2.8).curveTo(-5.2,5.1,-5.9,6.8).closePath().moveTo(4.4,2.9).lineTo(6.3,2.2).lineTo(7.8,6).lineTo(5.8,6.7).curveTo(5.1,4.7,4.4,2.9).closePath().moveTo(-1.5,2.1).lineTo(-0.6,1.2).lineTo(-5.8,1.2).lineTo(-5.8,-5.1).lineTo(-3.2,-5.1).lineTo(-4.3,-6.9).lineTo(-2.4,-7.6).lineTo(-0.8,-5.5).lineTo(-1.9,-5.1).lineTo(0.7,-5.1).lineTo(2.4,-7.5).lineTo(4.8,-7.1).lineTo(3.2,-5.1).lineTo(5.8,-5.1).lineTo(5.8,1.2).lineTo(0.3,1.2).lineTo(2.2,3.1).lineTo(0.6,4.5).lineTo(-1.5,2.1).closePath().moveTo(-3.5,-0.7).lineTo(3.5,-0.7).lineTo(3.5,-3.1).lineTo(-3.5,-3.1).closePath();
	this.shape_5.setTransform(-71,-12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.6,5.8).curveTo(-4,5,-1.7,3.5).lineTo(-1,4.6).lineTo(-1,1.8).lineTo(-6.3,2).lineTo(-6.8,0.3).lineTo(-2.4,0.2).lineTo(-2.4,-0.7).lineTo(-7.5,-0.1).lineTo(-7.7,-1.6).lineTo(-6.7,-1.7).lineTo(-6.7,-6).lineTo(-7.5,-6).lineTo(-7.5,-7.6).lineTo(0.1,-7.6).lineTo(0.1,-6).lineTo(-0.6,-6).lineTo(-0.6,-2.4).lineTo(0.2,-2.5).lineTo(0.2,-1.9).curveTo(1.3,-2.3,2.2,-2.8).lineTo(0.2,-4.3).lineTo(1.2,-5.5).lineTo(0.7,-5.5).lineTo(0.7,-7.2).lineTo(7.1,-7.2).lineTo(7.1,-5.7).curveTo(6.5,-4.1,5.3,-2.9).lineTo(7.5,-1.4).lineTo(6.3,0).lineTo(3.8,-1.7).curveTo(2.6,-0.9,1,-0.3).lineTo(0.2,-1.6).lineTo(0.2,-1).lineTo(-0.6,-0.9).lineTo(-0.6,0.1).curveTo(2.7,-0.1,5.2,-0.4).lineTo(5.6,1.3).lineTo(1.1,1.6).curveTo(1.7,2.5,2.5,3.1).curveTo(4.2,2.5,5.7,1.5).lineTo(6.7,3).lineTo(4,4.2).curveTo(5.7,5.1,7.8,5.4).lineTo(6.5,7.3).curveTo(2.6,6,1,4).lineTo(1,7.5).lineTo(-1,7.5).lineTo(-1,4.9).curveTo(-3.8,6.7,-6.6,7.6).lineTo(-7.6,5.8).closePath().moveTo(-4.9,-1.9).lineTo(-2.4,-2.2).lineTo(-2.4,-2.7).lineTo(-4.9,-2.7).closePath().moveTo(-4.9,-3.7).lineTo(-2.4,-3.7).lineTo(-2.4,-4.4).lineTo(-4.9,-4.4).closePath().moveTo(3.7,-3.9).curveTo(4.5,-4.6,5,-5.5).lineTo(1.2,-5.5).lineTo(3.7,-3.9).closePath().moveTo(-4.9,-5.4).lineTo(-2.4,-5.4).lineTo(-2.4,-6).lineTo(-4.9,-6).closePath().moveTo(-7.8,3.2).curveTo(-4.9,2.8,-2.5,1.9).lineTo(-1.9,3).curveTo(-4.2,4.1,-7,4.9).lineTo(-7.8,3.2).closePath();
	this.shape_6.setTransform(-87,-12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.5,6.8).curveTo(-6.5,4.1,-5.7,0.8).curveTo(-4.6,1.3,-3.6,1.5).curveTo(-4.5,4.9,-5.3,7.4).lineTo(-7.5,6.8).closePath().moveTo(-2.7,7.1).lineTo(-2.7,-6.7).lineTo(7.5,-6.7).lineTo(7.5,-4.7).lineTo(-0.5,-4.7).lineTo(-0.5,5.2).lineTo(7.7,5.2).lineTo(7.7,7.1).closePath().moveTo(-7.7,-2).lineTo(-6.4,-3.6).lineTo(-3.4,-1.2).lineTo(-4.8,0.4).lineTo(-7.7,-2).closePath().moveTo(-7.2,-6.1).lineTo(-5.9,-7.4).curveTo(-4.7,-6.6,-3.1,-5.3).lineTo(-4.6,-3.7).lineTo(-7.2,-6.1).closePath();
	this.shape_7.setTransform(-103.1,-12.6);

	this.instance = new lib.shap1();
	this.instance.setTransform(-135,24.5,1,1,0,0,0,8.5,9.5);

	this.instance_1 = new lib.shap1();
	this.instance_1.setTransform(-135,-12.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.xtTx},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sjbTx}]}).wait(1));

	// 图层 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#5ABCE4").setStrokeStyle(3,1,1).moveTo(-20.6,-50.6).lineTo(-8.8,-66).lineTo(2.1,-50.6).lineTo(158.5,-50.6).curveTo(168.8,-50.6,168.8,-40.3).lineTo(168.8,55.7).curveTo(168.8,66,158.5,66).lineTo(-158.5,66).curveTo(-168.8,66,-168.8,55.7).lineTo(-168.8,-40.3).curveTo(-168.8,-50.6,-158.5,-50.6).closePath().moveTo(-20.9,-50.3).lineTo(-20.6,-50.6);
	this.shape_8.setTransform(1.2,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(0,204,102,0)").beginStroke().moveTo(-158.5,66).curveTo(-168.8,66,-168.8,55.7).lineTo(-168.8,-40.3).curveTo(-168.8,-50.7,-158.5,-50.7).lineTo(-20.6,-50.7).lineTo(-20.9,-50.2).lineTo(-20.6,-50.7).lineTo(-8.8,-66).lineTo(2.1,-50.7).lineTo(158.5,-50.7).curveTo(168.8,-50.7,168.8,-40.3).lineTo(168.8,55.7).curveTo(168.8,66,158.5,66).closePath();
	this.shape_9.setTransform(1.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-67.9,340.5,135);


(lib.circle4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-43.6,157.8).curveTo(-68.1,144.9,-90.5,123.7).curveTo(-114.1,101.2,-127.9,76.1).curveTo(-143.3,48.2,-143.3,22.5).lineTo(-143.3,-121.2).lineTo(-129.1,-121.4).lineTo(-123.4,-121.7).curveTo(-116.4,-122.2,-108.8,-123.4).curveTo(-84.7,-127,-64.1,-135.3).curveTo(-43.1,-143.8,-23.8,-155).curveTo(-14.2,-160.7,-8.6,-164.7).lineTo(-0,-170.8).lineTo(8.5,-164.7).lineTo(23.7,-155).curveTo(43,-143.8,64.1,-135.3).curveTo(84.7,-127,108.8,-123.4).curveTo(120.9,-121.5,129,-121.4).lineTo(143.2,-121.2).lineTo(143.3,22.5).curveTo(143.3,48.2,128,76.1).curveTo(114.1,101.2,90.4,123.7).curveTo(68.1,144.9,43.5,157.8).curveTo(18.7,170.8,-0,170.8).curveTo(-18.7,170.8,-43.6,157.8).closePath().moveTo(-53.2,-108.6).curveTo(-81.9,-97.1,-114.3,-93.6).lineTo(-114.3,22.5).curveTo(-114.3,42.2,-101.2,64.7).curveTo(-89.5,84.6,-69.6,103.2).curveTo(-51.3,120.4,-31.9,131.2).curveTo(-12.4,142.1,-0,142.1).curveTo(12.5,142.1,31.8,131.2).curveTo(51.3,120.4,69.6,103.2).curveTo(89.4,84.6,101.1,64.7).curveTo(114.3,42.2,114.3,22.5).lineTo(114.3,-93.6).curveTo(100.9,-95,87.4,-98.1).curveTo(69.3,-102.1,53.2,-108.6).curveTo(24.4,-120.3,-0,-135.7).curveTo(-24.3,-120.3,-53.2,-108.6).closePath().moveTo(-68.5,24.9).lineTo(-49.8,3).lineTo(-10.8,36.1).lineTo(63.3,-48.8).lineTo(85.1,-30).lineTo(-7.7,76.5).closePath();
	this.shape.setTransform(17.5,1.9,0.062,0.062);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-119.1,378).curveTo(-173.8,368.1,-218.5,349.3).curveTo(-262.2,330.9,-290.7,306.3).curveTo(-319.6,281.5,-328.9,253.7).lineTo(-328.9,-256.1).curveTo(-319.7,-283.7,-290,-308.2).curveTo(-261.2,-332,-216.6,-349.9).curveTo(-171.8,-367.9,-117.1,-377.7).curveTo(-60.5,-387.7,-0,-387.7).curveTo(60.4,-387.7,117,-377.7).curveTo(171.8,-367.9,216.6,-349.9).curveTo(261.2,-332,290,-308.2).curveTo(319.7,-283.7,328.9,-256.1).lineTo(328.9,41.4).curveTo(316.8,39.9,304.2,39.9).curveTo(300,39.9,296,40).lineTo(296,1.2).curveTo(255.3,40.9,176.8,64.7).curveTo(96.2,89.2,-0,89.2).curveTo(-96.2,89.2,-176.9,64.7).curveTo(-255.3,40.9,-296,1.2).lineTo(-296,81).curveTo(-296,106.1,-272.7,129).curveTo(-250.2,151.1,-209.3,168.2).curveTo(-168.3,185.3,-115.2,194.6).curveTo(-60.2,204.3,-0,204.3).curveTo(54.4,204.3,104.5,196.4).curveTo(100.6,212.9,99.2,230).curveTo(50.9,237.2,-0,237.2).curveTo(-96.2,237.2,-176.9,212.7).curveTo(-255.3,188.9,-296,149.2).lineTo(-296,221.4).curveTo(-296.1,222.8,-296.1,225.2).lineTo(-296,229).curveTo(-296,254.1,-272.7,277).curveTo(-250.2,299.1,-209.3,316.2).curveTo(-168.3,333.3,-115.2,342.6).curveTo(-60.2,352.3,-0,352.3).curveTo(64.2,352.3,122.4,341.3).curveTo(129.5,354.9,142.5,371.8).curveTo(110.2,379.1,74.1,383.2).curveTo(37.5,387.3,-0,387.7).lineTo(-7.3,387.7).curveTo(-65.3,387.7,-119.1,378).closePath().moveTo(-296,-74.7).curveTo(-296.2,-73.3,-296.1,-70.8).lineTo(-296,-67).curveTo(-296,-41.9,-272.7,-19).curveTo(-250.2,3.1,-209.3,20.2).curveTo(-168.3,37.3,-115.2,46.6).curveTo(-60.2,56.3,-0,56.3).curveTo(60.2,56.3,115.2,46.6).curveTo(168.3,37.3,209.3,20.2).curveTo(250.2,3.1,272.7,-19).curveTo(296,-41.9,296,-67).lineTo(296.1,-70.8).curveTo(296.2,-73.3,296,-74.7).lineTo(296,-163.3).curveTo(255.3,-123.5,176.8,-99.7).curveTo(96.2,-75.2,-0,-75.2).curveTo(-96.2,-75.2,-176.9,-99.7).curveTo(-255.3,-123.5,-296,-163.3).closePath().moveTo(-115.2,-345.1).curveTo(-168.3,-335.8,-209.3,-318.7).curveTo(-250.2,-301.6,-272.7,-279.5).curveTo(-296,-256.6,-296,-231.5).curveTo(-296,-206.4,-272.7,-183.5).curveTo(-250.2,-161.3,-209.3,-144.3).curveTo(-168.3,-127.2,-115.2,-117.8).curveTo(-60.2,-108.1,-0,-108.1).curveTo(60.2,-108.1,115.2,-117.8).curveTo(168.3,-127.2,209.3,-144.3).curveTo(250.2,-161.3,272.7,-183.5).curveTo(296,-206.4,296,-231.5).curveTo(296,-256.6,272.7,-279.5).curveTo(250.2,-301.6,209.3,-318.7).curveTo(168.3,-335.8,115.2,-345.1).curveTo(60.2,-354.8,-0,-354.8).curveTo(-60.2,-354.8,-115.2,-345.1).closePath();
	this.shape_1.setTransform(-1.2,-13.1,0.062,0.062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1,7.6).curveTo(-3.6,7.5,-3.6,4.9).lineTo(-3.6,-4.1).lineTo(-1.3,-4.1).lineTo(-1.3,4.2).curveTo(-1.3,5.6,0.1,5.6).lineTo(0.9,5.6).curveTo(1.6,5.6,2,5.3).curveTo(2.4,5,2.4,4.6).lineTo(2.7,2.3).lineTo(5.1,3.2).lineTo(4.7,5.2).curveTo(4.4,6.5,4,6.8).curveTo(3.6,7.2,3,7.4).curveTo(2.4,7.5,1.6,7.6).closePath().moveTo(-7.8,3.6).curveTo(-6.9,0.7,-6.1,-3).lineTo(-4,-2.5).curveTo(-4.6,1.2,-5.7,4.3).closePath().moveTo(3.5,-1.9).lineTo(5.6,-2.8).curveTo(6.9,-0.2,7.8,2.3).lineTo(5.6,3.2).curveTo(4.8,0.7,3.5,-1.9).closePath().moveTo(-2,-6.5).lineTo(-0.2,-7.5).curveTo(1.2,-5.9,2.7,-3.5).lineTo(0.7,-2.2).curveTo(-0.7,-4.6,-2,-6.5).closePath();
	this.shape_2.setTransform(33,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.2,7.8).lineTo(-1.2,2.7).lineTo(-4.7,2.7).lineTo(-4.7,3.8).lineTo(-7,3.8).lineTo(-7,-5).lineTo(-1.2,-5).lineTo(-1.2,-7.7).lineTo(1.2,-7.7).lineTo(1.2,-5).lineTo(7,-5).lineTo(7,3.8).lineTo(4.7,3.8).lineTo(4.7,2.7).lineTo(1.2,2.7).lineTo(1.2,7.8).closePath().moveTo(1.2,0.6).lineTo(4.7,0.6).lineTo(4.7,-2.9).lineTo(1.2,-2.9).closePath().moveTo(-4.7,0.6).lineTo(-1.2,0.6).lineTo(-1.2,-2.9).lineTo(-4.7,-2.9).closePath();
	this.shape_3.setTransform(17,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.9,7.7).lineTo(4.9,6.9).lineTo(1.4,6.9).lineTo(1.4,7.7).lineTo(-0.4,7.7).lineTo(-0.4,2).lineTo(2.2,2).lineTo(2.2,0.7).lineTo(-0.6,0.7).curveTo(-0.8,5,-2.5,7.5).lineTo(-4,5.9).curveTo(-2.4,3.2,-2.4,-1.5).lineTo(-2.4,-7.2).lineTo(7.1,-7.2).lineTo(7.1,-2.3).lineTo(4.1,-2.3).lineTo(4.1,-1).lineTo(7.7,-1).lineTo(7.7,0.7).lineTo(4.1,0.7).lineTo(4.1,2).lineTo(6.8,2).lineTo(6.8,7.7).closePath().moveTo(1.4,5.2).lineTo(4.9,5.2).lineTo(4.9,3.6).lineTo(1.4,3.6).closePath().moveTo(-0.5,-1).lineTo(2.2,-1).lineTo(2.2,-2.3).lineTo(-0.5,-2.3).closePath().moveTo(-0.5,-3.9).lineTo(5.1,-3.9).lineTo(5.1,-5.6).lineTo(-0.5,-5.6).closePath().moveTo(-7.7,5.4).lineTo(-6.6,5.5).curveTo(-6.1,5.5,-6.1,4.8).lineTo(-6.1,1.8).lineTo(-7.6,2.3).lineTo(-7.8,0.1).lineTo(-6.1,-0.3).lineTo(-6.1,-2.9).lineTo(-7.6,-2.9).lineTo(-7.6,-4.8).lineTo(-6.1,-4.8).lineTo(-6.1,-7.6).lineTo(-4.2,-7.6).lineTo(-4.2,-4.8).lineTo(-2.9,-4.8).lineTo(-2.9,-2.9).lineTo(-4.2,-2.9).lineTo(-4.2,-0.7).lineTo(-2.8,-1).lineTo(-2.9,1).lineTo(-4.2,1.4).lineTo(-4.2,5.7).curveTo(-4.2,7.4,-5.6,7.5).lineTo(-7.2,7.5).lineTo(-7.7,5.4).closePath();
	this.shape_4.setTransform(1,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.3,6.1).lineTo(-0.8,7).lineTo(-2.9,5.9).curveTo(-4.6,7,-7,7.5).lineTo(-7.8,5.6).curveTo(-6.2,5.4,-4.9,4.9).lineTo(-7.2,4).curveTo(-6.7,3.2,-6.3,2.4).lineTo(-7.6,2.4).lineTo(-7.6,0.8).lineTo(-5.5,0.8).lineTo(-5.1,-0.4).lineTo(-4.2,-0.3).lineTo(-4.2,-1.8).curveTo(-5.4,-0.6,-7.1,0.4).curveTo(-7.4,-0.6,-7.8,-1.4).curveTo(-6.3,-2,-5,-3.1).lineTo(-7.4,-3.1).lineTo(-7.4,-4.7).lineTo(-6.2,-4.7).curveTo(-6.6,-5.5,-7.3,-6.4).lineTo(-5.9,-7.3).lineTo(-4.6,-5.5).lineTo(-6,-4.7).lineTo(-4.2,-4.7).lineTo(-4.2,-7.7).lineTo(-2.2,-7.7).lineTo(-2.2,-4.7).lineTo(-0.6,-4.7).lineTo(-1.9,-5.5).curveTo(-1.1,-6.4,-0.6,-7.4).lineTo(0.9,-6.5).curveTo(0.4,-5.6,-0.4,-4.7).lineTo(0.5,-4.7).lineTo(0.5,-3.1).lineTo(-2.2,-3.1).lineTo(-2.2,-2).lineTo(-1.7,-2.7).lineTo(0.2,-1.7).curveTo(1.4,-4,2.4,-7.8).lineTo(4.5,-7.6).lineTo(3.8,-5.3).lineTo(7.8,-5.3).lineTo(7.8,-3.4).lineTo(7.1,-3.4).curveTo(6.8,0.8,5.4,3.4).curveTo(6.4,4.6,7.8,5.4).curveTo(7.3,6.1,6.5,7.5).curveTo(5.1,6.6,4.1,5.3).curveTo(2.8,6.8,1.1,7.8).lineTo(-0.3,6.1).closePath().moveTo(-3.4,0.8).lineTo(0.2,0.8).lineTo(0.2,2.3).curveTo(-0.4,3.6,-1.3,4.5).lineTo(0.3,5.2).lineTo(-0.1,5.7).curveTo(1.7,4.8,2.9,3.3).curveTo(2.1,1.8,1.7,-0.2).lineTo(1.2,0.8).lineTo(0.3,-0.5).lineTo(-0.1,0.2).lineTo(-2.2,-1.2).lineTo(-2.2,0).lineTo(-3,0).lineTo(-3.4,0.8).closePath().moveTo(-4.7,3.2).lineTo(-3.1,3.8).curveTo(-2.4,3.2,-1.9,2.4).lineTo(-4.3,2.4).closePath().moveTo(3,-2.9).curveTo(3.3,-0.3,4.1,1.4).curveTo(5,-0.6,5.2,-3.4).lineTo(3.2,-3.4).lineTo(3,-2.9).closePath();
	this.shape_5.setTransform(-15,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.7,5.7).curveTo(-2,3.1,-1.5,-1.6).lineTo(-7.4,-1.6).lineTo(-7.4,-3.7).lineTo(-1.3,-3.7).lineTo(-1.2,-7.7).lineTo(1.2,-7.7).lineTo(1.1,-3.7).lineTo(7.5,-3.7).lineTo(7.5,-1.6).lineTo(1.3,-1.6).curveTo(2.6,3.6,7.7,5.4).lineTo(6,7.6).curveTo(1.7,5.6,0,1.1).curveTo(-1.3,5.2,-6,7.7).lineTo(-7.7,5.7).closePath();
	this.shape_6.setTransform(-31,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// 图层 2
	this.instance = new lib.circle();
	this.instance.setTransform(0.7,0.9,1,1,0,0,0,65.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-65.9,133.7,133.7);


(lib.circle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-129,21.3).lineTo(129,21.3).lineTo(129,63.8).lineTo(0,63.8).lineTo(0,127.6).closePath().moveTo(-129,-21.3).lineTo(-129,-63.8).lineTo(0,-63.8).lineTo(0,-127.6).lineTo(129,-21.3).closePath();
	this.shape.setTransform(15.8,2,0.06,0.06);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-119.1,378).curveTo(-173.8,368.1,-218.5,349.3).curveTo(-262.2,330.9,-290.7,306.3).curveTo(-319.6,281.5,-328.9,253.7).lineTo(-328.9,-256.1).curveTo(-319.7,-283.7,-290,-308.2).curveTo(-261.2,-332,-216.6,-349.9).curveTo(-171.8,-367.9,-117.1,-377.7).curveTo(-60.5,-387.7,-0,-387.7).curveTo(60.4,-387.7,117,-377.7).curveTo(171.8,-367.9,216.6,-349.9).curveTo(261.2,-332,290,-308.2).curveTo(319.7,-283.7,328.9,-256.1).lineTo(328.9,41.4).curveTo(316.8,39.9,304.2,39.9).curveTo(300,39.9,296,40).lineTo(296,1.2).curveTo(255.3,40.9,176.8,64.7).curveTo(96.2,89.2,-0,89.2).curveTo(-96.2,89.2,-176.9,64.7).curveTo(-255.3,40.9,-296,1.2).lineTo(-296,81).curveTo(-296,106.1,-272.7,129).curveTo(-250.2,151.1,-209.3,168.2).curveTo(-168.3,185.3,-115.2,194.6).curveTo(-60.2,204.3,-0,204.3).curveTo(54.4,204.3,104.5,196.4).curveTo(100.6,212.9,99.2,230).curveTo(50.9,237.2,-0,237.2).curveTo(-96.2,237.2,-176.9,212.7).curveTo(-255.3,188.9,-296,149.2).lineTo(-296,221.4).curveTo(-296.1,222.8,-296.1,225.2).lineTo(-296,229).curveTo(-296,254.1,-272.7,277).curveTo(-250.2,299.1,-209.3,316.2).curveTo(-168.3,333.3,-115.2,342.6).curveTo(-60.2,352.3,-0,352.3).curveTo(64.2,352.3,122.4,341.3).curveTo(129.5,354.9,142.5,371.8).curveTo(110.2,379.1,74.1,383.2).curveTo(37.5,387.3,-0,387.7).lineTo(-7.3,387.7).curveTo(-65.3,387.7,-119.1,378).closePath().moveTo(-296,-74.7).curveTo(-296.2,-73.3,-296.1,-70.8).lineTo(-296,-67).curveTo(-296,-41.9,-272.7,-19).curveTo(-250.2,3.1,-209.3,20.2).curveTo(-168.3,37.3,-115.2,46.6).curveTo(-60.2,56.3,-0,56.3).curveTo(60.2,56.3,115.2,46.6).curveTo(168.3,37.3,209.3,20.2).curveTo(250.2,3.1,272.7,-19).curveTo(296,-41.9,296,-67).lineTo(296.1,-70.8).curveTo(296.2,-73.3,296,-74.7).lineTo(296,-163.3).curveTo(255.3,-123.5,176.8,-99.7).curveTo(96.2,-75.2,-0,-75.2).curveTo(-96.2,-75.2,-176.9,-99.7).curveTo(-255.3,-123.5,-296,-163.3).closePath().moveTo(-115.2,-345.1).curveTo(-168.3,-335.8,-209.3,-318.7).curveTo(-250.2,-301.6,-272.7,-279.5).curveTo(-296,-256.6,-296,-231.5).curveTo(-296,-206.4,-272.7,-183.5).curveTo(-250.2,-161.3,-209.3,-144.3).curveTo(-168.3,-127.2,-115.2,-117.8).curveTo(-60.2,-108.1,-0,-108.1).curveTo(60.2,-108.1,115.2,-117.8).curveTo(168.3,-127.2,209.3,-144.3).curveTo(250.2,-161.3,272.7,-183.5).curveTo(296,-206.4,296,-231.5).curveTo(296,-256.6,272.7,-279.5).curveTo(250.2,-301.6,209.3,-318.7).curveTo(168.3,-335.8,115.2,-345.1).curveTo(60.2,-354.8,-0,-354.8).curveTo(-60.2,-354.8,-115.2,-345.1).closePath();
	this.shape_1.setTransform(-1.5,-12.1,0.06,0.06);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.1,6.6).curveTo(-2.4,7,-3.4,7.2).lineTo(-4.3,5.5).curveTo(-3,4.8,-1.7,3).lineTo(-4.5,3).curveTo(-4.8,5.1,-6.1,7.2).lineTo(-7.7,5.3).curveTo(-7.1,4.2,-6.7,2.7).curveTo(-6.4,1.2,-6.3,-2.5).lineTo(-6.3,-7.5).lineTo(7,-7.5).lineTo(7,-2.7).lineTo(-4.2,-2.7).lineTo(-4.3,1.2).lineTo(7.7,1.2).lineTo(7.7,3).lineTo(4,3).curveTo(6.2,4.9,7.5,6.2).lineTo(6,7.5).closePath().moveTo(-0.9,5.1).lineTo(3.4,4.9).lineTo(2.3,3.8).lineTo(3.3,3).lineTo(0.8,3).lineTo(-0.9,5.1).closePath().moveTo(-4.2,-4.5).lineTo(4.8,-4.5).lineTo(4.8,-5.7).lineTo(-4.2,-5.7).closePath().moveTo(-3.4,0.1).lineTo(-3.4,-1.7).lineTo(6.6,-1.7).lineTo(6.6,0.1).closePath();
	this.shape_2.setTransform(16,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2,7.7).lineTo(-2,-1.7).lineTo(2.7,-1.7).lineTo(2.7,6.1).curveTo(2.7,7.6,1.2,7.6).lineTo(0.1,7.6).lineTo(-0.1,5.8).lineTo(0.7,5.8).curveTo(0.8,5.8,0.9,5.8).curveTo(0.9,5.8,1,5.7).curveTo(1,5.7,1,5.7).curveTo(1,5.6,1,5.5).lineTo(1,4.6).lineTo(-0.3,4.6).lineTo(-0.3,7.7).closePath().moveTo(-0.3,3.1).lineTo(1,3.1).lineTo(1,2.2).lineTo(-0.3,2.2).closePath().moveTo(-0.3,0.7).lineTo(1,0.7).lineTo(1,-0.2).lineTo(-0.3,-0.2).closePath().moveTo(-5.2,7.7).lineTo(-5.2,5).lineTo(-7.8,5.2).lineTo(-7.8,3.2).lineTo(-5.2,3.1).lineTo(-5.2,1.7).lineTo(-7.6,1.7).lineTo(-7.6,-0.5).lineTo(-6.9,-3.9).lineTo(-7.8,-3.9).lineTo(-7.8,-5.7).lineTo(-6.5,-5.7).lineTo(-6.3,-7.7).lineTo(-4.4,-7.6).lineTo(-4.8,-5.7).lineTo(-2.1,-5.7).lineTo(-2.1,-4).curveTo(0.3,-5.5,1.5,-7.6).lineTo(4.1,-7.6).lineTo(3.6,-7.1).curveTo(5.4,-4.7,7.8,-3.5).lineTo(6.6,-1.8).curveTo(5.7,-2.3,5.1,-2.9).lineTo(5.1,-2.4).lineTo(-0.4,-2.4).lineTo(-0.4,-2.8).lineTo(-1.7,-1.9).lineTo(-2.8,-3.6).lineTo(-2.3,-3.9).lineTo(-5.2,-3.9).lineTo(-6,-0.2).lineTo(-5.2,-0.2).lineTo(-5.2,-2.9).lineTo(-3.4,-2.9).lineTo(-3.4,-0.2).lineTo(-2.6,-0.2).lineTo(-2.6,1.7).lineTo(-3.4,1.7).lineTo(-3.4,2.9).lineTo(-2.5,2.8).lineTo(-2.5,4.7).lineTo(-3.4,4.8).lineTo(-3.4,7.7).closePath().moveTo(1.1,-4.1).lineTo(3.7,-4.1).lineTo(2.4,-5.5).lineTo(1.1,-4.1).closePath().moveTo(3.6,7.5).lineTo(3.3,5.6).lineTo(4.6,5.7).curveTo(5.2,5.7,5.2,4.8).lineTo(5.2,-1.6).lineTo(7,-1.6).lineTo(7,5.5).curveTo(6.9,7.6,5.4,7.6).lineTo(3.6,7.5).closePath().moveTo(3.2,4.6).lineTo(3.2,-1).lineTo(4.5,-1).lineTo(4.5,4.6).closePath();
	this.shape_3.setTransform(0.1,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.2,4.7).lineTo(-1.1,3.1).lineTo(2.1,4.3).lineTo(4.1,2.3).lineTo(-1.8,2.3).lineTo(-1.8,0.6).lineTo(-1.4,-0.9).lineTo(-3.3,-0.9).lineTo(-3.3,-2.7).lineTo(-0.8,-2.7).lineTo(-0.4,-4).lineTo(-2.5,-4).lineTo(-2.5,-5.7).lineTo(0,-5.7).lineTo(0.5,-7.6).lineTo(2.8,-7.6).lineTo(2.4,-5.7).lineTo(7.2,-5.7).lineTo(7.2,-4).lineTo(1.9,-4).lineTo(1.5,-2.7).lineTo(7.8,-2.7).lineTo(7.8,-0.9).lineTo(1,-0.9).lineTo(0.5,0.6).lineTo(7.1,0.6).lineTo(7.1,2.2).lineTo(4.2,5.1).lineTo(6.2,6).lineTo(5,7.8).curveTo(2.2,6.4,-2.2,4.7).closePath().moveTo(-6,7.7).lineTo(-6,0.5).lineTo(-7.3,2.6).lineTo(-7.8,-0.3).curveTo(-5.8,-3.5,-4.7,-7.8).lineTo(-2.6,-7.3).curveTo(-3.2,-5.4,-4,-3.7).lineTo(-4,7.7).closePath();
	this.shape_4.setTransform(-16,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// 图层 2
	this.instance = new lib.circle();
	this.instance.setTransform(-0.8,-0.1,1,1,0,0,0,65.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-66.9,133.7,133.7);


(lib.circle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(10.1,23.2).curveTo(8.3,22.4,6.9,21.1).curveTo(5.5,19.7,4.8,17.9).curveTo(4,16,4,14).curveTo(4,12,4.8,10.1).curveTo(5.5,8.3,6.9,6.9).curveTo(8.3,5.5,10.1,4.8).curveTo(11.9,4,14,4).curveTo(16,4,17.9,4.8).curveTo(19.6,5.5,21,6.9).curveTo(22.4,8.3,23.2,10.1).curveTo(24,12,24,14).curveTo(24,16,23.2,17.9).curveTo(22.4,19.7,21,21.1).curveTo(19.6,22.4,17.9,23.2).curveTo(16,24,14,24).curveTo(11.9,24,10.1,23.2).closePath().moveTo(10.9,6.6).curveTo(9.5,7.2,8.3,8.3).curveTo(7.2,9.5,6.6,10.9).curveTo(6,12.4,6,14).curveTo(6,15.6,6.6,17.1).curveTo(7.2,18.5,8.3,19.6).curveTo(9.5,20.8,10.9,21.4).curveTo(12.4,22,14,22).curveTo(15.6,22,17.1,21.4).curveTo(18.5,20.8,19.7,19.6).curveTo(20.7,18.5,21.3,17.1).curveTo(22,15.6,22,14).curveTo(22,12.4,21.3,10.9).curveTo(20.7,9.5,19.7,8.3).curveTo(18.5,7.2,17.1,6.6).curveTo(15.6,6,14,6).curveTo(12.4,6,10.9,6.6).closePath().moveTo(-11.3,22.5).curveTo(-14.5,22,-17.3,20.8).curveTo(-20,19.7,-21.7,18.2).curveTo(-23.4,16.7,-24,15).lineTo(-24,-16).curveTo(-23.5,-17.7,-21.6,-19.1).curveTo(-19.9,-20.6,-17.1,-21.7).curveTo(-14.5,-22.8,-11.1,-23.4).curveTo(-7.7,-24,-4,-24).curveTo(-0.4,-24,3.1,-23.4).curveTo(6.4,-22.8,9.2,-21.7).curveTo(11.9,-20.6,13.7,-19.1).curveTo(15.5,-17.7,16,-16).lineTo(16,2.1).lineTo(14.5,2).lineTo(14,2).lineTo(14,-0.3).curveTo(11.5,2.1,6.7,3.5).curveTo(1.9,5,-4,5).curveTo(-9.9,5,-14.8,3.5).curveTo(-19.5,2.1,-22,-0.3).lineTo(-22,4.5).curveTo(-22,6,-20.6,7.4).curveTo(-19.2,8.8,-16.8,9.8).curveTo(-14.2,10.8,-11,11.4).curveTo(-7.7,12,-4,12).curveTo(-0.7,12,2.3,11.5).curveTo(2.1,12.5,2,13.6).curveTo(-0.9,14,-4,14).curveTo(-9.9,14,-14.8,12.5).curveTo(-19.5,11.1,-22,8.6).lineTo(-22,13).lineTo(-22,13.3).lineTo(-22,13.5).curveTo(-22,15,-20.6,16.4).curveTo(-19.2,17.8,-16.8,18.8).curveTo(-14.2,19.8,-11,20.4).curveTo(-7.7,21,-4,21).curveTo(-0.1,21,3.5,20.3).curveTo(3.8,21.1,4.7,22.2).curveTo(2.7,22.6,0.5,22.9).curveTo(-1.8,23.1,-4,23.1).lineTo(-4.5,23.1).curveTo(-8,23.1,-11.3,22.5).closePath().moveTo(-22,-5).lineTo(-22,-4.7).lineTo(-22,-4.5).curveTo(-22,-3,-20.6,-1.6).curveTo(-19.2,-0.2,-16.8,0.8).curveTo(-14.2,1.8,-11,2.4).curveTo(-7.7,3,-4,3).curveTo(-0.4,3,3,2.4).curveTo(6.2,1.8,8.7,0.8).curveTo(11.2,-0.2,12.6,-1.6).curveTo(14,-3,14,-4.5).lineTo(14,-4.7).lineTo(14,-5).lineTo(14,-10.3).curveTo(11.5,-7.9,6.7,-6.5).curveTo(1.9,-5,-4,-5).curveTo(-9.9,-5,-14.8,-6.5).curveTo(-19.5,-7.9,-22,-10.3).closePath().moveTo(-11,-21.4).curveTo(-14.2,-20.8,-16.8,-19.8).curveTo(-19.2,-18.7,-20.6,-17.4).curveTo(-22,-16,-22,-14.5).curveTo(-22,-13,-20.6,-11.6).curveTo(-19.2,-10.2,-16.8,-9.2).curveTo(-14.2,-8.1,-11,-7.6).curveTo(-7.7,-7,-4,-7).curveTo(-0.4,-7,3,-7.6).curveTo(6.2,-8.1,8.7,-9.2).curveTo(11.2,-10.2,12.6,-11.6).curveTo(14,-13,14,-14.5).curveTo(14,-16,12.6,-17.4).curveTo(11.2,-18.7,8.7,-19.8).curveTo(6.2,-20.8,3,-21.4).curveTo(-0.4,-22,-4,-22).curveTo(-7.7,-22,-11,-21.4).closePath().moveTo(13,19).lineTo(13,15).lineTo(9,15).lineTo(9,13).lineTo(13,13).lineTo(13,9).lineTo(15,9).lineTo(15,13).lineTo(19,13).lineTo(19,15).lineTo(15,15).lineTo(15,19).closePath();
	this.shape.setTransform(-0.2,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.1,6.6).curveTo(-2.4,7,-3.4,7.2).lineTo(-4.3,5.5).curveTo(-3,4.8,-1.7,3).lineTo(-4.5,3).curveTo(-4.8,5.1,-6.1,7.2).lineTo(-7.7,5.3).curveTo(-7.1,4.2,-6.7,2.7).curveTo(-6.4,1.2,-6.3,-2.5).lineTo(-6.3,-7.5).lineTo(7,-7.5).lineTo(7,-2.7).lineTo(-4.2,-2.7).lineTo(-4.3,1.2).lineTo(7.7,1.2).lineTo(7.7,3).lineTo(4,3).curveTo(6.2,4.9,7.5,6.2).lineTo(6,7.5).closePath().moveTo(-0.9,5.1).lineTo(3.4,4.9).lineTo(2.3,3.8).lineTo(3.3,3).lineTo(0.8,3).lineTo(-0.9,5.1).closePath().moveTo(-4.2,-4.5).lineTo(4.8,-4.5).lineTo(4.8,-5.7).lineTo(-4.2,-5.7).closePath().moveTo(-3.4,0.1).lineTo(-3.4,-1.7).lineTo(6.6,-1.7).lineTo(6.6,0.1).closePath();
	this.shape_1.setTransform(16,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.7,7.7).lineTo(3.7,7).lineTo(-3.7,7).lineTo(-3.7,7.7).lineTo(-5.8,7.7).lineTo(-5.8,0.5).lineTo(5.8,0.5).lineTo(5.8,7.7).closePath().moveTo(-3.7,5).lineTo(3.7,5).lineTo(3.7,2.5).lineTo(-3.7,2.5).closePath().moveTo(-7.8,-2.4).curveTo(-2.9,-4.9,-1,-7.8).lineTo(2,-7.8).lineTo(1.4,-7).curveTo(3.6,-4.3,7.8,-2.5).lineTo(6.4,-0.7).lineTo(4.5,-1.7).lineTo(4.5,-0.8).lineTo(-4.4,-0.8).lineTo(-4.4,-1.7).lineTo(-6.4,-0.6).lineTo(-7.8,-2.4).closePath().moveTo(-2.9,-2.8).lineTo(2.8,-2.8).curveTo(1.3,-4,0,-5.4).curveTo(-1.1,-4.2,-2.9,-2.8).closePath();
	this.shape_2.setTransform(0,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-7.6,5.8).curveTo(-4,5,-1.7,3.5).lineTo(-1,4.6).lineTo(-1,1.8).lineTo(-6.3,2).lineTo(-6.8,0.3).lineTo(-2.4,0.2).lineTo(-2.4,-0.7).lineTo(-7.5,-0.1).lineTo(-7.7,-1.6).lineTo(-6.7,-1.7).lineTo(-6.7,-6).lineTo(-7.5,-6).lineTo(-7.5,-7.6).lineTo(0.1,-7.6).lineTo(0.1,-6).lineTo(-0.6,-6).lineTo(-0.6,-2.4).lineTo(0.2,-2.5).lineTo(0.2,-1.9).curveTo(1.3,-2.3,2.2,-2.8).lineTo(0.2,-4.3).lineTo(1.2,-5.5).lineTo(0.7,-5.5).lineTo(0.7,-7.2).lineTo(7.1,-7.2).lineTo(7.1,-5.7).curveTo(6.5,-4.1,5.3,-2.9).lineTo(7.5,-1.4).lineTo(6.3,0).lineTo(3.8,-1.7).curveTo(2.6,-0.9,1,-0.3).lineTo(0.2,-1.6).lineTo(0.2,-1).lineTo(-0.6,-0.9).lineTo(-0.6,0.1).curveTo(2.7,-0.1,5.2,-0.4).lineTo(5.6,1.3).lineTo(1.1,1.6).curveTo(1.7,2.5,2.5,3.1).curveTo(4.2,2.5,5.7,1.5).lineTo(6.7,3).lineTo(4,4.2).curveTo(5.7,5.1,7.8,5.4).lineTo(6.5,7.3).curveTo(2.6,6,1,4).lineTo(1,7.5).lineTo(-1,7.5).lineTo(-1,4.9).curveTo(-3.8,6.7,-6.6,7.6).lineTo(-7.6,5.8).closePath().moveTo(-4.9,-1.9).lineTo(-2.4,-2.2).lineTo(-2.4,-2.7).lineTo(-4.9,-2.7).closePath().moveTo(-4.9,-3.7).lineTo(-2.4,-3.7).lineTo(-2.4,-4.4).lineTo(-4.9,-4.4).closePath().moveTo(3.7,-3.9).curveTo(4.5,-4.6,5,-5.5).lineTo(1.2,-5.5).lineTo(3.7,-3.9).closePath().moveTo(-4.9,-5.4).lineTo(-2.4,-5.4).lineTo(-2.4,-6).lineTo(-4.9,-6).closePath().moveTo(-7.8,3.2).curveTo(-4.9,2.8,-2.5,1.9).lineTo(-1.9,3).curveTo(-4.2,4.1,-7,4.9).lineTo(-7.8,3.2).closePath();
	this.shape_3.setTransform(-16,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// 图层 2
	this.instance = new lib.circle();
	this.instance.setTransform(0.8,0,1,1,0,0,0,65.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-66.8,133.7,133.7);


(lib.circle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(4.6,7.6).lineTo(4.5,6.9).lineTo(3.1,6.9).lineTo(3.1,2.3).lineTo(2.2,2.3).lineTo(2.2,6.9).lineTo(0.7,6.9).lineTo(0.7,2.3).lineTo(-0.2,2.3).lineTo(-0.2,7.6).lineTo(-2,7.6).lineTo(-2,0.5).lineTo(1.2,0.5).lineTo(1.4,-0.5).lineTo(-2.1,-0.5).lineTo(-2.1,-2.3).lineTo(7.6,-2.3).lineTo(7.6,-0.5).lineTo(3.4,-0.5).lineTo(3.1,0.5).lineTo(7.4,0.5).lineTo(7.4,6.5).curveTo(7.4,7.3,6.9,7.5).curveTo(6.3,7.8,5.6,7.7).lineTo(4.6,7.6).closePath().moveTo(4.7,5.9).lineTo(5.2,6).curveTo(5.6,6,5.6,5.6).lineTo(5.6,2.3).lineTo(4.7,2.3).closePath().moveTo(-7.6,4.5).lineTo(-5,4.1).lineTo(-4.2,-2.6).lineTo(-2.3,-2.4).lineTo(-3.4,3.9).lineTo(-2.3,3.7).lineTo(-2.5,5.6).lineTo(-7.3,6.6).closePath().moveTo(-7.4,-2.3).lineTo(-5.7,-2.6).lineTo(-4.9,3).lineTo(-6.7,3.3).curveTo(-7,0.5,-7.4,-2.3).closePath().moveTo(-7.4,-3).lineTo(-7.4,-5).lineTo(-5.6,-5).lineTo(-6.5,-7).lineTo(-4.6,-7.8).lineTo(-3.5,-5.6).lineTo(-4.9,-5).lineTo(-2.3,-5).lineTo(-2.3,-3).closePath().moveTo(-1.5,-3.2).lineTo(-1.5,-6.8).lineTo(0.3,-6.8).lineTo(0.3,-5).lineTo(1.7,-5).lineTo(1.7,-7.8).lineTo(3.7,-7.8).lineTo(3.7,-5).lineTo(5.2,-5).lineTo(5.2,-6.8).lineTo(7,-6.8).lineTo(7,-3.2).closePath();
	this.shape.setTransform(14.8,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.1,7.7).lineTo(-1.1,4.7).curveTo(-3.1,6.5,-6.7,7.6).curveTo(-7.1,6.9,-7.8,5.8).curveTo(-4.8,5.1,-3,4.1).lineTo(-7.5,4.1).lineTo(-7.5,2.6).lineTo(-1.1,2.6).lineTo(-1.1,1.9).lineTo(1,1.9).lineTo(1,2.6).lineTo(7.6,2.6).lineTo(7.6,4.1).lineTo(3,4.1).curveTo(4.9,5.1,7.8,5.7).lineTo(6.7,7.5).curveTo(3,6.5,1,4.6).lineTo(1,7.7).closePath().moveTo(-6,2.1).lineTo(-6,-2.4).lineTo(-6.9,-1.6).curveTo(-7.3,-2.9,-7.8,-4).curveTo(-5.9,-5.4,-4.7,-7.7).lineTo(-2.5,-7.2).lineTo(-3.1,-6.2).lineTo(-0.4,-6.2).lineTo(-1,-7.4).lineTo(1.1,-7.8).lineTo(1.8,-6.2).lineTo(6.9,-6.2).lineTo(6.9,-4.9).lineTo(1.7,-4.9).lineTo(1.7,-4).lineTo(6.3,-4).lineTo(6.3,-2.7).lineTo(1.7,-2.7).lineTo(1.7,-2).lineTo(6.3,-2).lineTo(6.3,-0.7).lineTo(1.7,-0.7).lineTo(1.7,0.2).lineTo(7.1,0.2).lineTo(7.1,1.5).lineTo(-4,1.5).lineTo(-4,2.1).closePath().moveTo(-4,0.2).lineTo(-0.4,0.2).lineTo(-0.4,-0.7).lineTo(-4,-0.7).closePath().moveTo(-4,-2).lineTo(-0.4,-2).lineTo(-0.4,-2.7).lineTo(-4,-2.7).closePath().moveTo(-4,-4.8).lineTo(-4,-4).lineTo(-0.4,-4).lineTo(-0.4,-4.9).lineTo(-4,-4.9).closePath();
	this.shape_1.setTransform(-1,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.2,7.4).lineTo(-1.2,2.3).curveTo(-3.2,4.9,-6.5,6.7).lineTo(-7.9,4.9).curveTo(-4.8,3.5,-2.6,1.2).lineTo(-7.5,1.2).lineTo(-7.5,-0.8).lineTo(-1.2,-0.8).lineTo(-1.2,-2).lineTo(-0.4,-2).lineTo(-1.9,-4.4).lineTo(-0.6,-5.2).lineTo(-6.6,-5).lineTo(-7.1,-7).curveTo(1.3,-7.1,6.3,-7.4).lineTo(7,-5.4).lineTo(-0.1,-5.2).lineTo(1.4,-2.9).lineTo(-0.2,-2).lineTo(1,-2).lineTo(1,-0.8).lineTo(7.4,-0.8).lineTo(7.4,1.2).lineTo(2.4,1.2).curveTo(4.6,3.5,7.9,4.8).curveTo(7.2,5.5,6.5,6.6).curveTo(3,4.9,1,2.3).lineTo(1,7.4).closePath().moveTo(-6.7,-3.6).lineTo(-5.1,-4.7).lineTo(-3,-2.3).lineTo(-4.7,-1.1).lineTo(-6.7,-3.6).closePath().moveTo(2.4,-2.5).curveTo(3.6,-3.8,4.7,-5.2).lineTo(6.4,-4.1).curveTo(5.3,-2.6,3.9,-1.2).closePath();
	this.shape_2.setTransform(-17,26);

	this.instance = new lib.vect();
	this.instance.setTransform(0,-15.6,1,1,0,0,0,27.5,22);

	this.instance_1 = new lib.circle();
	this.instance_1.setTransform(-0.5,-2.7,1,1,0,0,0,65.3,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.3,-69.5,133.7,133.7);


(lib.arrowAn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shap3();
	this.instance.setTransform(-581.5,34,1,1,-15,0,0,12.5,15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.5,x:-568.7,y:27.6},0).wait(1).to({regY:15.1,rotation:-12,x:-555.8,y:21.8},0).wait(1).to({rotation:-10.5,x:-542.7,y:16.4},0).wait(1).to({regY:15,rotation:-9,x:-529.7,y:11.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.6,x:-516.5,y:6.4},0).wait(1).to({rotation:-6.3,x:-503.2,y:1.9},0).wait(1).to({rotation:-4.8,x:-489.9,y:-2.3},0).wait(1).to({rotation:-3.3,x:-476.4,y:-6.2},0).wait(1).to({rotation:-1.8,x:-463.1,y:-9.9},0).wait(1).to({rotation:-0.3,x:-449.4,y:-13.1},0).wait(1).to({regY:15.1,rotation:1,x:-435.7,y:-16.1},0).wait(1).to({regY:15,rotation:2.3,x:-422,y:-18.7},0).wait(1).to({rotation:3.8,x:-408.3,y:-21},0).wait(1).to({rotation:5.3,x:-394.4,y:-23},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.8,x:-380.4,y:-24.5},0).wait(1).to({rotation:8.3,x:-366.5,y:-25.7},0).wait(1).to({rotation:9.6,x:-352.5,y:-26.5},0).wait(1).to({rotation:11.1,x:-338.4,y:-26.9},0).wait(1).to({rotation:12.5,x:-324.4},0).wait(1).to({rotation:14,x:-310.1,y:-26},0).wait(1).to({rotation:15.5,x:-296,y:-24.5},0).wait(1).to({regY:15.1,rotation:17,x:-282.1,y:-22.3},0).wait(1).to({regY:15,rotation:18.3,x:-268.2,y:-19.7},0).wait(1).to({regX:12.6,rotation:19.8,x:-254.4,y:-16.7},0).wait(1).to({regX:12.4,regY:15.1,rotation:21.3,x:-240.5,y:-13},0).wait(1).to({regX:12.5,regY:15,rotation:22.8,x:-226.3,y:-9},0).wait(1).to({scaleX:1,scaleY:1,rotation:24.3,x:-212.5,y:-4.9},0).wait(1).to({regY:15.1,scaleX:1,scaleY:1,rotation:25.8,x:-199,y:-0.8},0).wait(1).to({regY:15,scaleX:1,scaleY:1,rotation:24.1,x:-186,y:3.1},0).wait(1).to({regY:15.1,scaleX:1,scaleY:1,rotation:22.3,x:-173,y:7.1},0).wait(1).to({regX:12.4,rotation:20.8,x:-160.3,y:11},0).wait(1).to({regX:12.5,rotation:19.1,x:-147.5,y:14.7},0).wait(1).to({rotation:17.5,x:-134.7,y:18.2},0).wait(1).to({rotation:15.8,x:-121.8,y:21.6},0).wait(1).to({regY:15,rotation:14.3,x:-108.8,y:24.9},0).wait(1).to({rotation:12.6,x:-95.7,y:27.9},0).wait(1).to({regX:12.4,regY:15.1,rotation:11,x:-82.7,y:30.6},0).wait(1).to({regX:12.5,rotation:9.3,x:-69.3,y:33},0).wait(1).to({regY:15,rotation:7.8,x:-55.9,y:35},0).wait(1).to({regY:15.1,rotation:6,x:-42.6,y:36.6},0).wait(1).to({regY:15,scaleX:1,scaleY:1,rotation:4.5,x:-29.2,y:37.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:4,x:-15.7,y:38.6},0).wait(1).to({regX:12.6,rotation:3.5,x:-2.2,y:39},0).wait(1).to({regX:12.5,rotation:3.1,x:11.3,y:38.9},0).wait(1).to({rotation:2.8,x:24.8,y:38.5},0).wait(1).to({regX:12.6,rotation:2.3,x:38.5,y:37.9},0).wait(1).to({regY:15.1,rotation:1.8,x:52,y:37},0).wait(1).to({rotation:1.3,x:65.4,y:35.8},0).wait(1).to({regX:12.5,rotation:1,x:78.8,y:34.3},0).wait(1).to({regX:12.6,rotation:0.5,x:92.2,y:32.7},0).wait(1).to({regX:12.5,regY:15,rotation:0,x:105.6,y:30.6},0).wait(1).to({regX:12.6,rotation:-0.3,x:119,y:28.5},0).wait(1).to({regX:12.5,regY:15.1,rotation:-0.5,x:132.3,y:26.1},0).wait(1).to({regX:12.6,regY:15,rotation:-1,x:145.9,y:23.3},0).wait(1).to({regX:12.5,rotation:-1.5,x:159.2,y:20.4},0).wait(1).to({regX:12.6,rotation:-1.8,x:172.6,y:17.3},0).wait(1).to({regX:12.5,rotation:-2.3,x:185.8,y:14.1},0).wait(1).to({regX:12.6,rotation:-2.8,x:198.9,y:10.8},0).wait(1).to({regY:15.1,rotation:-3.3,x:212.1,y:7.4},0).wait(1).to({regX:12.5,rotation:-3.6,x:224.6,y:4},0).wait(1).to({rotation:-4,x:237.1,y:0.7},0).wait(1).to({regY:15,rotation:-4.5,x:249.6,y:-2.6},0).wait(1).to({regX:12.6,rotation:-5,x:262.1,y:-5.9},0).wait(1).to({rotation:-5.3,x:274.6,y:-9.1},0).wait(1).to({regX:12.5,rotation:-5.9,x:287.1,y:-12.3},0).wait(1).to({regX:12.6,rotation:-4.3,x:300.4,y:-15},0).wait(1).to({regX:12.5,rotation:-2.8,x:313.4,y:-17.3},0).wait(1).to({rotation:-1.5,x:326.7,y:-19.2},0).wait(1).to({rotation:0,x:340,y:-20.4},0).wait(1).to({rotation:1.3,x:353.4,y:-21},0).wait(1).to({rotation:2.8,x:366.9,y:-20.9},0).wait(1).to({rotation:4.1,x:380.3,y:-20.5},0).wait(1).to({rotation:5.5,x:393.8,y:-20},0).wait(1).to({rotation:7,x:407.2,y:-19.1},0).wait(1).to({rotation:8.5,x:420.6,y:-17.9},0).wait(1).to({rotation:10,x:434,y:-16.4},0).wait(1).to({regX:12.6,rotation:11.3,x:447.5,y:-14.5},0).wait(1).to({regX:12.5,rotation:12.8,x:460.7,y:-12.5},0).wait(1).to({rotation:14.3,x:474,y:-10},0).wait(1).to({rotation:15.8,x:487.1,y:-7.3},0).wait(1).to({rotation:17.3,x:500.3,y:-4.1},0).wait(1).to({regY:14.9,rotation:18.6,x:513.4,y:-0.7},0).wait(1).to({regY:15,rotation:20.1,x:526.3,y:3},0).wait(1).to({regY:15.1,rotation:21.6,x:539,y:7.2},0).wait(1).to({regY:15,rotation:23,x:551.5,y:11.6},0).wait(1).to({regX:12.6,rotation:24.5,x:563.9,y:16.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:26,x:576.1,y:21.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.vect_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,204,102,0)").beginStroke().moveTo(-28.5,44.5).lineTo(-28.5,-44.5).lineTo(28.5,-44.5).lineTo(28.5,44.5).closePath();
	this.shape_1.setTransform(30.1,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},11).wait(1));

	// icon
	this.instance = new lib.Symbol1();
	this.instance.setTransform(32.3,55.8,1,1,-12,0,0,5,32);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false,regY:32.1,rotation:8.7,y:55.9},0).to({_off:true},2).wait(2).to({_off:false,rotation:2.2,x:32.2},0).wait(3));

	// Layer 4
	this.instance_1 = new lib.oval1();
	this.instance_1.setTransform(551.4,122.9,1,1,0,0,0,527,75);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,1,57,89);


(lib.center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// Layer 16
	this.instance = new lib.arrowAn();
	this.instance.setTransform(-590.5,37.9,1,1,0,0,0,-582.1,34.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).wait(23));

	// Layer 15
	this.instance_1 = new lib.arrowAn();
	this.instance_1.setTransform(-590.5,37.9,1,1,0,0,0,-582.1,34.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(45));

	// Layer 14
	this.instance_2 = new lib.arrowAn();
	this.instance_2.setTransform(-590.5,37.9,1,1,0,0,0,-582.1,34.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(66));

	// Layer 13
	this.instance_3 = new lib.arrowAn();
	this.instance_3.setTransform(-590.5,37.9,1,1,0,0,0,-582.1,34.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(89));

	// Layer 7
	this.light4 = new lib.vect_1();
	this.light4.setTransform(371.3,12.5,1,1,180,0,0,27.5,24.5);
	this.light4.alpha = 0.699;

	this.light2 = new lib.vect_1();
	this.light2.setTransform(-322.8,5.5,1,1,-180,0,0,27.6,24.5);
	this.light2.alpha = 0.699;

	this.light3 = new lib.vect_1();
	this.light3.setTransform(40,5,1,1,0,0,0,27.5,25);
	this.light3.alpha = 0.699;

	this.light1 = new lib.vect_1();
	this.light1.setTransform(-536,-19,1,1,0,0,0,27.5,25);
	this.light1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.light1},{t:this.light3},{t:this.light2},{t:this.light4}]}).wait(90));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-581.4,0,582.5,0).setStrokeStyle(4,0,0,4).moveTo(580.5,17.4).curveTo(559.9,6.2,521.6,-5).curveTo(445.1,-27.3,356.5,-27).curveTo(327.5,-26.9,288,-18).curveTo(277.1,-15.5,212,1.8).curveTo(160.8,15.5,122.4,22.2).curveTo(67.6,31.8,13,32.9).curveTo(-34.2,33.9,-84.9,23.8).curveTo(-119,16.9,-171.3,0.9).curveTo(-231.5,-17.6,-251.6,-22.5).curveTo(-295.4,-33.1,-330.6,-33).curveTo(-416.6,-32.7,-506.6,-2.4).curveTo(-534.7,7.1,-559.9,18.5).curveTo(-572.5,24.1,-579.4,27.9);
	this.shape.setTransform(-2.1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-583.5,-60,1163.9,130);


// stage content:
(lib.SJZYJH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.updateData = function(){
			var d = window.anData||{cjd:{},jhc:{},csc:{},dsjzx:{}},that=this;
			that.rect1.xtTx.text = d.cjd.xt;
			that.rect1.sjbTx.text = d.cjd.sjb;
			that.rect2.xtTx.text = d.jhc.xt;
			that.rect2.sjbTx.text = d.jhc.sjb;
			that.rect3.xtTx.text = d.csc.xt;
			that.rect3.sjbTx.text = d.csc.sjb;
			that.rect4.zyTx.text = d.dsjzx.zy;
			that.rect4.sjzhdbTx.text = d.dsjzx.sjzhdb;
			that.rect4.bskTx.text = d.dsjzx.bsk;
			that.rect4.zpkTx.text = d.dsjzx.zpk;
			that.rect4.qwkTx.text = d.dsjzx.qwk;
			that.rect4.yykTx.text = d.dsjzx.yyk;
		}
		this.updateData();
		
		var that = this;
		this.goEnd=function(){
			that.gotoAndPlay(290);
		}
		this.skip.addEventListener('click',this.goEnd);
	}
	this.frame_107 = function() {
		this.center.light1.play();
	}
	this.frame_129 = function() {
		this.center.light2.play();
	}
	this.frame_161 = function() {
		this.center.light3.play();
	}
	this.frame_198 = function() {
		this.center.light4.play();
	}
	this.frame_300 = function() {
		this.stop();
		this.center.play();
		/*var that = this;
		function onOver(e){
			var c=e.currentTarget, r=that['rect'+c.data];
		    r.scaleX=r.scaleY=1.2;
			that.center['light'+c.data].gotoAndPlay(1);
		}
		for(var i=1;i<=4;i++){
			this['circle'+i].data = i;
			this['circle'+i].addEventListener('mouseover',onOver);
			this['circle'+i].addEventListener('click',onOver);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107).call(this.frame_107).wait(22).call(this.frame_129).wait(32).call(this.frame_161).wait(37).call(this.frame_198).wait(102).call(this.frame_300).wait(8));

	// Layer 5
	this.skip = new lib.skip();
	this.skip.setTransform(683.9,723.4);
	new cjs.ButtonHelper(this.skip, 0, 1, 2, false, new lib.skip(), 3);

	this.timeline.addTween(cjs.Tween.get(this.skip).to({_off:true},270).wait(38));

	// 图层 8
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(720.5,418.7,2.305,2.305);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).wait(1).to({regX:-0.4,regY:1.2,scaleX:2.23,scaleY:2.23,x:719.6,y:421.4},0).wait(1).to({scaleX:2.14,scaleY:2.14,y:421.3},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:719.7,y:421.2},0).wait(1).to({scaleX:1.94,scaleY:1.94,y:421.1},0).wait(1).to({scaleX:1.84,scaleY:1.84,y:420.9},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:719.8,y:420.8},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:420.7},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:719.9,y:420.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,y:420.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:420.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:720,y:420.2},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:420.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:420},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:720.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:419.9},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:419.8},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:720.5,y:418.7},0).wait(1).to({regX:-0.4,regY:1.2,scaleX:0.91,scaleY:0.91,x:720.1,y:419.8},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:419.9},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:420},0).wait(1).to({regX:0,regY:0,scaleX:1.03,scaleY:1.03,x:720.5,y:418.7},0).wait(1).to({regX:-0.4,regY:1.2,scaleX:1.02,scaleY:1.02,x:720.1,y:420},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:419.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:0.98,x:720.5,y:418.7},0).to({scaleX:1,scaleY:1},3).wait(39));

	// 图层 7
	this.rect4 = new lib.reac4();
	this.rect4.setTransform(996.1,585.1);
	this.rect4.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rect4).wait(209).to({alpha:0,visible:true},0).to({alpha:1},5).wait(94));

	// 图层 6
	this.circle4 = new lib.circle4();
	this.circle4.setTransform(1063.8,368);
	this.circle4.alpha = 0;
	this.circle4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circle4).wait(205).to({_off:false},0).to({y:418.8,alpha:1},5).wait(98));

	// 图层 4
	this.rect2 = new lib.react2();
	this.rect2.setTransform(990.3,197.7);
	this.rect2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rect2).wait(169).to({alpha:0,visible:true},0).to({alpha:1},6).wait(133));

	// 图层 9
	this.circle2 = new lib.circle2();
	this.circle2.setTransform(734.9,253.8);
	this.circle2.alpha = 0;
	this.circle2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circle2).wait(165).to({_off:false},0).to({y:213.5,alpha:1},5).wait(138));

	// 图层 5
	this.rect3 = new lib.reac3();
	this.rect3.setTransform(377.4,554);
	this.rect3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rect3).wait(138).to({alpha:0,visible:true},0).to({alpha:1},5).wait(165));

	// 图层 10
	this.circle3 = new lib.circle3();
	this.circle3.setTransform(369.3,377.6);
	this.circle3.alpha = 0;
	this.circle3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circle3).wait(134).to({_off:false},0).to({y:407.3,alpha:1},5).wait(169));

	// 图层 3
	this.rect1 = new lib.react1();
	this.rect1.setTransform(405.8,194.3,1,1,0,0,0,0.5,0.5);
	this.rect1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.rect1).wait(114).to({alpha:0,visible:true},0).to({alpha:1},5).wait(189));

	// 图层 2
	this.circle1 = new lib.circle1();
	this.circle1.setTransform(154.5,251.5);
	this.circle1.alpha = 0;
	this.circle1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circle1).wait(109).to({_off:false},0).to({y:195.5,alpha:1},6).wait(193));

	// title
	this.titleMc = new lib.title();
	this.titleMc.setTransform(701.9,349.3,2.529,2.529,0,0,0,-6.7,-4.4);
	this.titleMc.alpha = 0;
	this.titleMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.titleMc).wait(11).to({_off:false},0).wait(1).to({regX:-6.8,regY:-1.3,x:701.6,y:357.2,alpha:0.03},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.209},0).wait(1).to({alpha:0.249},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.331},0).wait(1).to({alpha:0.373},0).wait(1).to({alpha:0.415},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.499},0).wait(1).to({alpha:0.54},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.659},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.764},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.853},0).wait(1).to({alpha:0.879},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:-6.7,regY:-4.4,x:701.9,y:349.3,alpha:1},0).wait(37).to({regX:-6.8,regY:-1.3,scaleX:2.52,scaleY:2.52,x:701.6,y:355.7},0).wait(1).to({scaleX:2.5,scaleY:2.5,x:701.5,y:351.5},0).wait(1).to({scaleX:2.46,scaleY:2.46,x:701.4,y:344.5},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:701.3,y:334.7},0).wait(1).to({scaleX:2.34,scaleY:2.34,x:701.2,y:322.2},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:701,y:307.2},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:700.8,y:290},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:700.6,y:270.9},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:700.4,y:250.3},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:700.1,y:228.6},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:699.8,y:206.5},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:699.6,y:184.5},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:699.4,y:163.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:699.1,y:143.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:698.9,y:124.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:698.7,y:108.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:698.5,y:95.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:698.4,y:84.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:698.3,y:76.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:71.9},0).wait(1).to({regX:-6.7,regY:-4.4,scaleX:1,scaleY:1,x:698.4,y:67.2},0).wait(206));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_105 = new cjs.Graphics().moveTo(-36.3,88.7).lineTo(-36.3,-88.7).lineTo(36.3,-88.7).lineTo(36.3,88.7).closePath();
	var mask_graphics_106 = new cjs.Graphics().moveTo(-41.6,88.7).lineTo(-41.6,-88.7).lineTo(41.6,-88.7).lineTo(41.6,88.7).closePath();
	var mask_graphics_107 = new cjs.Graphics().moveTo(-46.9,88.7).lineTo(-46.9,-88.7).lineTo(46.9,-88.7).lineTo(46.9,88.7).closePath();
	var mask_graphics_108 = new cjs.Graphics().moveTo(-52.2,88.7).lineTo(-52.2,-88.7).lineTo(52.2,-88.7).lineTo(52.2,88.7).closePath();
	var mask_graphics_109 = new cjs.Graphics().moveTo(-57.6,88.7).lineTo(-57.6,-88.7).lineTo(57.6,-88.7).lineTo(57.6,88.7).closePath();
	var mask_graphics_110 = new cjs.Graphics().moveTo(-62.9,88.7).lineTo(-62.9,-88.7).lineTo(62.9,-88.7).lineTo(62.9,88.7).closePath();
	var mask_graphics_111 = new cjs.Graphics().moveTo(-68.2,88.7).lineTo(-68.2,-88.7).lineTo(68.2,-88.7).lineTo(68.2,88.7).closePath();
	var mask_graphics_112 = new cjs.Graphics().moveTo(-73.5,88.7).lineTo(-73.5,-88.7).lineTo(73.5,-88.7).lineTo(73.5,88.7).closePath();
	var mask_graphics_113 = new cjs.Graphics().moveTo(-78.9,88.7).lineTo(-78.9,-88.7).lineTo(78.8,-88.7).lineTo(78.8,88.7).closePath();
	var mask_graphics_114 = new cjs.Graphics().moveTo(-84.2,88.7).lineTo(-84.2,-88.7).lineTo(84.2,-88.7).lineTo(84.2,88.7).closePath();
	var mask_graphics_115 = new cjs.Graphics().moveTo(-89.5,88.7).lineTo(-89.5,-88.7).lineTo(89.5,-88.7).lineTo(89.5,88.7).closePath();
	var mask_graphics_116 = new cjs.Graphics().moveTo(-94.8,88.7).lineTo(-94.8,-88.7).lineTo(94.8,-88.7).lineTo(94.8,88.7).closePath();
	var mask_graphics_117 = new cjs.Graphics().moveTo(-100.2,88.7).lineTo(-100.2,-88.7).lineTo(100.2,-88.7).lineTo(100.2,88.7).closePath();
	var mask_graphics_118 = new cjs.Graphics().moveTo(-105.5,88.7).lineTo(-105.5,-88.7).lineTo(105.5,-88.7).lineTo(105.5,88.7).closePath();
	var mask_graphics_119 = new cjs.Graphics().moveTo(-110.8,88.7).lineTo(-110.8,-88.7).lineTo(110.8,-88.7).lineTo(110.8,88.7).closePath();
	var mask_graphics_120 = new cjs.Graphics().moveTo(-116.1,88.7).lineTo(-116.1,-88.7).lineTo(116.1,-88.7).lineTo(116.1,88.7).closePath();
	var mask_graphics_121 = new cjs.Graphics().moveTo(-121.5,88.7).lineTo(-121.5,-88.7).lineTo(121.5,-88.7).lineTo(121.5,88.7).closePath();
	var mask_graphics_122 = new cjs.Graphics().moveTo(-126.8,88.7).lineTo(-126.8,-88.7).lineTo(126.8,-88.7).lineTo(126.8,88.7).closePath();
	var mask_graphics_123 = new cjs.Graphics().moveTo(-132.1,88.7).lineTo(-132.1,-88.7).lineTo(132.1,-88.7).lineTo(132.1,88.7).closePath();
	var mask_graphics_124 = new cjs.Graphics().moveTo(-137.4,88.7).lineTo(-137.4,-88.7).lineTo(137.4,-88.7).lineTo(137.4,88.7).closePath();
	var mask_graphics_125 = new cjs.Graphics().moveTo(-142.8,88.7).lineTo(-142.8,-88.7).lineTo(142.7,-88.7).lineTo(142.7,88.7).closePath();
	var mask_graphics_126 = new cjs.Graphics().moveTo(-148.1,88.7).lineTo(-148.1,-88.7).lineTo(148.1,-88.7).lineTo(148.1,88.7).closePath();
	var mask_graphics_127 = new cjs.Graphics().moveTo(-153.4,88.7).lineTo(-153.4,-88.7).lineTo(153.4,-88.7).lineTo(153.4,88.7).closePath();
	var mask_graphics_128 = new cjs.Graphics().moveTo(-158.8,88.7).lineTo(-158.8,-88.7).lineTo(158.8,-88.7).lineTo(158.8,88.7).closePath();
	var mask_graphics_129 = new cjs.Graphics().moveTo(-164.1,88.7).lineTo(-164.1,-88.7).lineTo(164.1,-88.7).lineTo(164.1,88.7).closePath();
	var mask_graphics_130 = new cjs.Graphics().moveTo(-169.4,88.7).lineTo(-169.4,-88.7).lineTo(169.4,-88.7).lineTo(169.4,88.7).closePath();
	var mask_graphics_131 = new cjs.Graphics().moveTo(-174.7,88.7).lineTo(-174.7,-88.7).lineTo(174.7,-88.7).lineTo(174.7,88.7).closePath();
	var mask_graphics_132 = new cjs.Graphics().moveTo(-180,88.7).lineTo(-180,-88.7).lineTo(180,-88.7).lineTo(180,88.7).closePath();
	var mask_graphics_133 = new cjs.Graphics().moveTo(-185.4,88.7).lineTo(-185.4,-88.7).lineTo(185.4,-88.7).lineTo(185.4,88.7).closePath();
	var mask_graphics_134 = new cjs.Graphics().moveTo(-190.7,88.7).lineTo(-190.7,-88.7).lineTo(190.7,-88.7).lineTo(190.7,88.7).closePath();
	var mask_graphics_135 = new cjs.Graphics().moveTo(-196,88.7).lineTo(-196,-88.7).lineTo(196,-88.7).lineTo(196,88.7).closePath();
	var mask_graphics_136 = new cjs.Graphics().moveTo(-201.4,88.7).lineTo(-201.4,-88.7).lineTo(201.3,-88.7).lineTo(201.3,88.7).closePath();
	var mask_graphics_137 = new cjs.Graphics().moveTo(-206.7,88.7).lineTo(-206.7,-88.7).lineTo(206.6,-88.7).lineTo(206.6,88.7).closePath();
	var mask_graphics_138 = new cjs.Graphics().moveTo(-212,88.7).lineTo(-212,-88.7).lineTo(212,-88.7).lineTo(212,88.7).closePath();
	var mask_graphics_139 = new cjs.Graphics().moveTo(-217.3,88.7).lineTo(-217.3,-88.7).lineTo(217.3,-88.7).lineTo(217.3,88.7).closePath();
	var mask_graphics_140 = new cjs.Graphics().moveTo(-222.7,88.7).lineTo(-222.7,-88.7).lineTo(222.7,-88.7).lineTo(222.7,88.7).closePath();
	var mask_graphics_141 = new cjs.Graphics().moveTo(-228,88.7).lineTo(-228,-88.7).lineTo(228,-88.7).lineTo(228,88.7).closePath();
	var mask_graphics_142 = new cjs.Graphics().moveTo(-233.3,88.7).lineTo(-233.3,-88.7).lineTo(233.3,-88.7).lineTo(233.3,88.7).closePath();
	var mask_graphics_143 = new cjs.Graphics().moveTo(-238.6,88.7).lineTo(-238.6,-88.7).lineTo(238.6,-88.7).lineTo(238.6,88.7).closePath();
	var mask_graphics_144 = new cjs.Graphics().moveTo(-244,88.7).lineTo(-244,-88.7).lineTo(243.9,-88.7).lineTo(243.9,88.7).closePath();
	var mask_graphics_145 = new cjs.Graphics().moveTo(-249.3,88.7).lineTo(-249.3,-88.7).lineTo(249.3,-88.7).lineTo(249.3,88.7).closePath();
	var mask_graphics_146 = new cjs.Graphics().moveTo(-254.6,88.7).lineTo(-254.6,-88.7).lineTo(254.6,-88.7).lineTo(254.6,88.7).closePath();
	var mask_graphics_147 = new cjs.Graphics().moveTo(-259.9,88.7).lineTo(-259.9,-88.7).lineTo(259.9,-88.7).lineTo(259.9,88.7).closePath();
	var mask_graphics_148 = new cjs.Graphics().moveTo(-265.3,88.7).lineTo(-265.3,-88.7).lineTo(265.2,-88.7).lineTo(265.2,88.7).closePath();
	var mask_graphics_149 = new cjs.Graphics().moveTo(-270.6,88.7).lineTo(-270.6,-88.7).lineTo(270.6,-88.7).lineTo(270.6,88.7).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(-275.9,88.7).lineTo(-275.9,-88.7).lineTo(275.9,-88.7).lineTo(275.9,88.7).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(-281.2,88.7).lineTo(-281.2,-88.7).lineTo(281.2,-88.7).lineTo(281.2,88.7).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(-286.6,88.7).lineTo(-286.6,-88.7).lineTo(286.6,-88.7).lineTo(286.6,88.7).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(-291.9,88.7).lineTo(-291.9,-88.7).lineTo(291.9,-88.7).lineTo(291.9,88.7).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(-297.2,88.7).lineTo(-297.2,-88.7).lineTo(297.2,-88.7).lineTo(297.2,88.7).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(-302.5,88.7).lineTo(-302.5,-88.7).lineTo(302.5,-88.7).lineTo(302.5,88.7).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(-307.9,88.7).lineTo(-307.9,-88.7).lineTo(307.8,-88.7).lineTo(307.8,88.7).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(-313.2,88.7).lineTo(-313.2,-88.7).lineTo(313.2,-88.7).lineTo(313.2,88.7).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(-318.5,88.7).lineTo(-318.5,-88.7).lineTo(318.5,-88.7).lineTo(318.5,88.7).closePath();
	var mask_graphics_159 = new cjs.Graphics().moveTo(-323.8,88.7).lineTo(-323.8,-88.7).lineTo(323.8,-88.7).lineTo(323.8,88.7).closePath();
	var mask_graphics_160 = new cjs.Graphics().moveTo(-329.2,88.7).lineTo(-329.2,-88.7).lineTo(329.1,-88.7).lineTo(329.1,88.7).closePath();
	var mask_graphics_161 = new cjs.Graphics().moveTo(-334.5,88.7).lineTo(-334.5,-88.7).lineTo(334.5,-88.7).lineTo(334.5,88.7).closePath();
	var mask_graphics_162 = new cjs.Graphics().moveTo(-339.8,88.7).lineTo(-339.8,-88.7).lineTo(339.8,-88.7).lineTo(339.8,88.7).closePath();
	var mask_graphics_163 = new cjs.Graphics().moveTo(-345.1,88.7).lineTo(-345.1,-88.7).lineTo(345.1,-88.7).lineTo(345.1,88.7).closePath();
	var mask_graphics_164 = new cjs.Graphics().moveTo(-350.5,88.7).lineTo(-350.5,-88.7).lineTo(350.5,-88.7).lineTo(350.5,88.7).closePath();
	var mask_graphics_165 = new cjs.Graphics().moveTo(-355.8,88.7).lineTo(-355.8,-88.7).lineTo(355.8,-88.7).lineTo(355.8,88.7).closePath();
	var mask_graphics_166 = new cjs.Graphics().moveTo(-361.1,88.7).lineTo(-361.1,-88.7).lineTo(361.1,-88.7).lineTo(361.1,88.7).closePath();
	var mask_graphics_167 = new cjs.Graphics().moveTo(-366.4,88.7).lineTo(-366.4,-88.7).lineTo(366.4,-88.7).lineTo(366.4,88.7).closePath();
	var mask_graphics_168 = new cjs.Graphics().moveTo(-371.8,88.7).lineTo(-371.8,-88.7).lineTo(371.7,-88.7).lineTo(371.7,88.7).closePath();
	var mask_graphics_169 = new cjs.Graphics().moveTo(-377.1,88.7).lineTo(-377.1,-88.7).lineTo(377.1,-88.7).lineTo(377.1,88.7).closePath();
	var mask_graphics_170 = new cjs.Graphics().moveTo(-382.4,88.7).lineTo(-382.4,-88.7).lineTo(382.4,-88.7).lineTo(382.4,88.7).closePath();
	var mask_graphics_171 = new cjs.Graphics().moveTo(-387.7,88.7).lineTo(-387.7,-88.7).lineTo(387.7,-88.7).lineTo(387.7,88.7).closePath();
	var mask_graphics_172 = new cjs.Graphics().moveTo(-393.1,88.7).lineTo(-393.1,-88.7).lineTo(393,-88.7).lineTo(393,88.7).closePath();
	var mask_graphics_173 = new cjs.Graphics().moveTo(-398.4,88.7).lineTo(-398.4,-88.7).lineTo(398.4,-88.7).lineTo(398.4,88.7).closePath();
	var mask_graphics_174 = new cjs.Graphics().moveTo(-403.7,88.7).lineTo(-403.7,-88.7).lineTo(403.7,-88.7).lineTo(403.7,88.7).closePath();
	var mask_graphics_175 = new cjs.Graphics().moveTo(-409,88.7).lineTo(-409,-88.7).lineTo(409,-88.7).lineTo(409,88.7).closePath();
	var mask_graphics_176 = new cjs.Graphics().moveTo(-414.4,88.7).lineTo(-414.4,-88.7).lineTo(414.4,-88.7).lineTo(414.4,88.7).closePath();
	var mask_graphics_177 = new cjs.Graphics().moveTo(-419.7,88.7).lineTo(-419.7,-88.7).lineTo(419.7,-88.7).lineTo(419.7,88.7).closePath();
	var mask_graphics_178 = new cjs.Graphics().moveTo(-425,88.7).lineTo(-425,-88.7).lineTo(425,-88.7).lineTo(425,88.7).closePath();
	var mask_graphics_179 = new cjs.Graphics().moveTo(-430.3,88.7).lineTo(-430.3,-88.7).lineTo(430.3,-88.7).lineTo(430.3,88.7).closePath();
	var mask_graphics_180 = new cjs.Graphics().moveTo(-435.7,88.7).lineTo(-435.7,-88.7).lineTo(435.6,-88.7).lineTo(435.6,88.7).closePath();
	var mask_graphics_181 = new cjs.Graphics().moveTo(-441,88.7).lineTo(-441,-88.7).lineTo(441,-88.7).lineTo(441,88.7).closePath();
	var mask_graphics_182 = new cjs.Graphics().moveTo(-446.3,88.7).lineTo(-446.3,-88.7).lineTo(446.3,-88.7).lineTo(446.3,88.7).closePath();
	var mask_graphics_183 = new cjs.Graphics().moveTo(-451.6,88.7).lineTo(-451.6,-88.7).lineTo(451.6,-88.7).lineTo(451.6,88.7).closePath();
	var mask_graphics_184 = new cjs.Graphics().moveTo(-457,88.7).lineTo(-457,-88.7).lineTo(457,-88.7).lineTo(457,88.7).closePath();
	var mask_graphics_185 = new cjs.Graphics().moveTo(-462.3,88.7).lineTo(-462.3,-88.7).lineTo(462.3,-88.7).lineTo(462.3,88.7).closePath();
	var mask_graphics_186 = new cjs.Graphics().moveTo(-467.6,88.7).lineTo(-467.6,-88.7).lineTo(467.6,-88.7).lineTo(467.6,88.7).closePath();
	var mask_graphics_187 = new cjs.Graphics().moveTo(-472.9,88.7).lineTo(-472.9,-88.7).lineTo(472.9,-88.7).lineTo(472.9,88.7).closePath();
	var mask_graphics_188 = new cjs.Graphics().moveTo(-478.3,88.7).lineTo(-478.3,-88.7).lineTo(478.3,-88.7).lineTo(478.3,88.7).closePath();
	var mask_graphics_189 = new cjs.Graphics().moveTo(-483.6,88.7).lineTo(-483.6,-88.7).lineTo(483.6,-88.7).lineTo(483.6,88.7).closePath();
	var mask_graphics_190 = new cjs.Graphics().moveTo(-488.9,88.7).lineTo(-488.9,-88.7).lineTo(488.9,-88.7).lineTo(488.9,88.7).closePath();
	var mask_graphics_191 = new cjs.Graphics().moveTo(-494.3,88.7).lineTo(-494.3,-88.7).lineTo(494.2,-88.7).lineTo(494.2,88.7).closePath();
	var mask_graphics_192 = new cjs.Graphics().moveTo(-499.6,88.7).lineTo(-499.6,-88.7).lineTo(499.6,-88.7).lineTo(499.6,88.7).closePath();
	var mask_graphics_193 = new cjs.Graphics().moveTo(-504.9,88.7).lineTo(-504.9,-88.7).lineTo(504.9,-88.7).lineTo(504.9,88.7).closePath();
	var mask_graphics_194 = new cjs.Graphics().moveTo(-510.2,88.7).lineTo(-510.2,-88.7).lineTo(510.2,-88.7).lineTo(510.2,88.7).closePath();
	var mask_graphics_195 = new cjs.Graphics().moveTo(-515.6,88.7).lineTo(-515.6,-88.7).lineTo(515.6,-88.7).lineTo(515.6,88.7).closePath();
	var mask_graphics_196 = new cjs.Graphics().moveTo(-520.9,88.7).lineTo(-520.9,-88.7).lineTo(520.9,-88.7).lineTo(520.9,88.7).closePath();
	var mask_graphics_197 = new cjs.Graphics().moveTo(-526.2,88.7).lineTo(-526.2,-88.7).lineTo(526.2,-88.7).lineTo(526.2,88.7).closePath();
	var mask_graphics_198 = new cjs.Graphics().moveTo(-531.5,88.7).lineTo(-531.5,-88.7).lineTo(531.5,-88.7).lineTo(531.5,88.7).closePath();
	var mask_graphics_199 = new cjs.Graphics().moveTo(-536.9,88.7).lineTo(-536.9,-88.7).lineTo(536.9,-88.7).lineTo(536.9,88.7).closePath();
	var mask_graphics_200 = new cjs.Graphics().moveTo(-542.2,88.7).lineTo(-542.2,-88.7).lineTo(542.2,-88.7).lineTo(542.2,88.7).closePath();
	var mask_graphics_201 = new cjs.Graphics().moveTo(-547.5,88.7).lineTo(-547.5,-88.7).lineTo(547.5,-88.7).lineTo(547.5,88.7).closePath();
	var mask_graphics_202 = new cjs.Graphics().moveTo(-552.8,88.7).lineTo(-552.8,-88.7).lineTo(552.8,-88.7).lineTo(552.8,88.7).closePath();
	var mask_graphics_203 = new cjs.Graphics().moveTo(-558.2,88.7).lineTo(-558.2,-88.7).lineTo(558.1,-88.7).lineTo(558.1,88.7).closePath();
	var mask_graphics_204 = new cjs.Graphics().moveTo(-563.5,88.7).lineTo(-563.5,-88.7).lineTo(563.5,-88.7).lineTo(563.5,88.7).closePath();
	var mask_graphics_205 = new cjs.Graphics().moveTo(-568.8,88.7).lineTo(-568.8,-88.7).lineTo(568.8,-88.7).lineTo(568.8,88.7).closePath();
	var mask_graphics_206 = new cjs.Graphics().moveTo(-574.1,88.7).lineTo(-574.1,-88.7).lineTo(574.1,-88.7).lineTo(574.1,88.7).closePath();
	var mask_graphics_207 = new cjs.Graphics().moveTo(-579.5,88.7).lineTo(-579.5,-88.7).lineTo(579.5,-88.7).lineTo(579.5,88.7).closePath();
	var mask_graphics_208 = new cjs.Graphics().moveTo(-584.8,88.7).lineTo(-584.8,-88.7).lineTo(584.8,-88.7).lineTo(584.8,88.7).closePath();
	var mask_graphics_209 = new cjs.Graphics().moveTo(-590.1,88.7).lineTo(-590.1,-88.7).lineTo(590.1,-88.7).lineTo(590.1,88.7).closePath();
	var mask_graphics_210 = new cjs.Graphics().moveTo(-595.4,88.7).lineTo(-595.4,-88.7).lineTo(595.4,-88.7).lineTo(595.4,88.7).closePath();
	var mask_graphics_211 = new cjs.Graphics().moveTo(-600.8,88.7).lineTo(-600.8,-88.7).lineTo(600.7,-88.7).lineTo(600.7,88.7).closePath();
	var mask_graphics_212 = new cjs.Graphics().moveTo(-606.1,88.7).lineTo(-606.1,-88.7).lineTo(606.1,-88.7).lineTo(606.1,88.7).closePath();
	var mask_graphics_213 = new cjs.Graphics().moveTo(-611.4,88.7).lineTo(-611.4,-88.7).lineTo(611.4,-88.7).lineTo(611.4,88.7).closePath();
	var mask_graphics_214 = new cjs.Graphics().moveTo(-616.7,88.7).lineTo(-616.7,-88.7).lineTo(616.7,-88.7).lineTo(616.7,88.7).closePath();
	var mask_graphics_215 = new cjs.Graphics().moveTo(-622.1,88.7).lineTo(-622.1,-88.7).lineTo(622,-88.7).lineTo(622,88.7).closePath();
	var mask_graphics_216 = new cjs.Graphics().moveTo(-627.4,88.7).lineTo(-627.4,-88.7).lineTo(627.4,-88.7).lineTo(627.4,88.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_graphics_105,x:63.7,y:301.2}).wait(1).to({graphics:mask_graphics_106,x:69,y:301.2}).wait(1).to({graphics:mask_graphics_107,x:74.4,y:301.2}).wait(1).to({graphics:mask_graphics_108,x:79.7,y:301.2}).wait(1).to({graphics:mask_graphics_109,x:85,y:301.2}).wait(1).to({graphics:mask_graphics_110,x:90.3,y:301.2}).wait(1).to({graphics:mask_graphics_111,x:95.7,y:301.2}).wait(1).to({graphics:mask_graphics_112,x:101,y:301.2}).wait(1).to({graphics:mask_graphics_113,x:106.3,y:301.2}).wait(1).to({graphics:mask_graphics_114,x:111.6,y:301.2}).wait(1).to({graphics:mask_graphics_115,x:117,y:301.2}).wait(1).to({graphics:mask_graphics_116,x:122.3,y:301.2}).wait(1).to({graphics:mask_graphics_117,x:127.6,y:301.2}).wait(1).to({graphics:mask_graphics_118,x:132.9,y:301.2}).wait(1).to({graphics:mask_graphics_119,x:138.3,y:301.2}).wait(1).to({graphics:mask_graphics_120,x:143.6,y:301.2}).wait(1).to({graphics:mask_graphics_121,x:148.9,y:301.2}).wait(1).to({graphics:mask_graphics_122,x:154.2,y:301.2}).wait(1).to({graphics:mask_graphics_123,x:159.6,y:301.2}).wait(1).to({graphics:mask_graphics_124,x:164.9,y:301.2}).wait(1).to({graphics:mask_graphics_125,x:170.2,y:301.2}).wait(1).to({graphics:mask_graphics_126,x:175.5,y:301.2}).wait(1).to({graphics:mask_graphics_127,x:180.9,y:301.2}).wait(1).to({graphics:mask_graphics_128,x:186.2,y:301.2}).wait(1).to({graphics:mask_graphics_129,x:191.5,y:301.2}).wait(1).to({graphics:mask_graphics_130,x:196.8,y:301.2}).wait(1).to({graphics:mask_graphics_131,x:202.2,y:301.2}).wait(1).to({graphics:mask_graphics_132,x:207.5,y:301.2}).wait(1).to({graphics:mask_graphics_133,x:212.8,y:301.2}).wait(1).to({graphics:mask_graphics_134,x:218.2,y:301.2}).wait(1).to({graphics:mask_graphics_135,x:223.5,y:301.2}).wait(1).to({graphics:mask_graphics_136,x:228.8,y:301.2}).wait(1).to({graphics:mask_graphics_137,x:234.1,y:301.2}).wait(1).to({graphics:mask_graphics_138,x:239.5,y:301.2}).wait(1).to({graphics:mask_graphics_139,x:244.8,y:301.2}).wait(1).to({graphics:mask_graphics_140,x:250.1,y:301.2}).wait(1).to({graphics:mask_graphics_141,x:255.4,y:301.2}).wait(1).to({graphics:mask_graphics_142,x:260.8,y:301.2}).wait(1).to({graphics:mask_graphics_143,x:266.1,y:301.2}).wait(1).to({graphics:mask_graphics_144,x:271.4,y:301.2}).wait(1).to({graphics:mask_graphics_145,x:276.7,y:301.2}).wait(1).to({graphics:mask_graphics_146,x:282.1,y:301.2}).wait(1).to({graphics:mask_graphics_147,x:287.4,y:301.2}).wait(1).to({graphics:mask_graphics_148,x:292.7,y:301.2}).wait(1).to({graphics:mask_graphics_149,x:298,y:301.2}).wait(1).to({graphics:mask_graphics_150,x:303.4,y:301.2}).wait(1).to({graphics:mask_graphics_151,x:308.7,y:301.2}).wait(1).to({graphics:mask_graphics_152,x:314,y:301.2}).wait(1).to({graphics:mask_graphics_153,x:319.3,y:301.2}).wait(1).to({graphics:mask_graphics_154,x:324.7,y:301.2}).wait(1).to({graphics:mask_graphics_155,x:330,y:301.2}).wait(1).to({graphics:mask_graphics_156,x:335.3,y:301.2}).wait(1).to({graphics:mask_graphics_157,x:340.6,y:301.2}).wait(1).to({graphics:mask_graphics_158,x:346,y:301.2}).wait(1).to({graphics:mask_graphics_159,x:351.3,y:301.2}).wait(1).to({graphics:mask_graphics_160,x:356.6,y:301.2}).wait(1).to({graphics:mask_graphics_161,x:361.9,y:301.2}).wait(1).to({graphics:mask_graphics_162,x:367.3,y:301.2}).wait(1).to({graphics:mask_graphics_163,x:372.6,y:301.2}).wait(1).to({graphics:mask_graphics_164,x:377.9,y:301.2}).wait(1).to({graphics:mask_graphics_165,x:383.2,y:301.2}).wait(1).to({graphics:mask_graphics_166,x:388.6,y:301.2}).wait(1).to({graphics:mask_graphics_167,x:393.9,y:301.2}).wait(1).to({graphics:mask_graphics_168,x:399.2,y:301.2}).wait(1).to({graphics:mask_graphics_169,x:404.5,y:301.2}).wait(1).to({graphics:mask_graphics_170,x:409.9,y:301.2}).wait(1).to({graphics:mask_graphics_171,x:415.2,y:301.2}).wait(1).to({graphics:mask_graphics_172,x:420.5,y:301.2}).wait(1).to({graphics:mask_graphics_173,x:425.8,y:301.2}).wait(1).to({graphics:mask_graphics_174,x:431.2,y:301.2}).wait(1).to({graphics:mask_graphics_175,x:436.5,y:301.2}).wait(1).to({graphics:mask_graphics_176,x:441.8,y:301.2}).wait(1).to({graphics:mask_graphics_177,x:447.1,y:301.2}).wait(1).to({graphics:mask_graphics_178,x:452.5,y:301.2}).wait(1).to({graphics:mask_graphics_179,x:457.8,y:301.2}).wait(1).to({graphics:mask_graphics_180,x:463.1,y:301.2}).wait(1).to({graphics:mask_graphics_181,x:468.4,y:301.2}).wait(1).to({graphics:mask_graphics_182,x:473.8,y:301.2}).wait(1).to({graphics:mask_graphics_183,x:479.1,y:301.2}).wait(1).to({graphics:mask_graphics_184,x:484.4,y:301.2}).wait(1).to({graphics:mask_graphics_185,x:489.7,y:301.2}).wait(1).to({graphics:mask_graphics_186,x:495.1,y:301.2}).wait(1).to({graphics:mask_graphics_187,x:500.4,y:301.2}).wait(1).to({graphics:mask_graphics_188,x:505.7,y:301.2}).wait(1).to({graphics:mask_graphics_189,x:511.1,y:301.2}).wait(1).to({graphics:mask_graphics_190,x:516.4,y:301.2}).wait(1).to({graphics:mask_graphics_191,x:521.7,y:301.2}).wait(1).to({graphics:mask_graphics_192,x:527,y:301.2}).wait(1).to({graphics:mask_graphics_193,x:532.3,y:301.2}).wait(1).to({graphics:mask_graphics_194,x:537.7,y:301.2}).wait(1).to({graphics:mask_graphics_195,x:543,y:301.2}).wait(1).to({graphics:mask_graphics_196,x:548.3,y:301.2}).wait(1).to({graphics:mask_graphics_197,x:553.7,y:301.2}).wait(1).to({graphics:mask_graphics_198,x:559,y:301.2}).wait(1).to({graphics:mask_graphics_199,x:564.3,y:301.2}).wait(1).to({graphics:mask_graphics_200,x:569.6,y:301.2}).wait(1).to({graphics:mask_graphics_201,x:575,y:301.2}).wait(1).to({graphics:mask_graphics_202,x:580.3,y:301.2}).wait(1).to({graphics:mask_graphics_203,x:585.6,y:301.2}).wait(1).to({graphics:mask_graphics_204,x:590.9,y:301.2}).wait(1).to({graphics:mask_graphics_205,x:596.3,y:301.2}).wait(1).to({graphics:mask_graphics_206,x:601.6,y:301.2}).wait(1).to({graphics:mask_graphics_207,x:606.9,y:301.2}).wait(1).to({graphics:mask_graphics_208,x:612.2,y:301.2}).wait(1).to({graphics:mask_graphics_209,x:617.6,y:301.2}).wait(1).to({graphics:mask_graphics_210,x:622.9,y:301.2}).wait(1).to({graphics:mask_graphics_211,x:628.2,y:301.2}).wait(1).to({graphics:mask_graphics_212,x:633.5,y:301.2}).wait(1).to({graphics:mask_graphics_213,x:638.9,y:301.2}).wait(1).to({graphics:mask_graphics_214,x:644.2,y:301.2}).wait(1).to({graphics:mask_graphics_215,x:649.5,y:301.2}).wait(1).to({graphics:mask_graphics_216,x:654.8,y:301.2}).wait(92));

	// Layer 11
	this.center = new lib.center();
	this.center.setTransform(677.4,386.1,1,1,0,0,0,-12.5,80);
	this.center._off = true;

	this.center.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.center).wait(105).to({_off:false},0).wait(203));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_12 = new cjs.Graphics().moveTo(-26.3,202.5).lineTo(-26.3,-202.5).lineTo(26.2,-202.5).lineTo(26.2,202.5).closePath();
	var mask_1_graphics_13 = new cjs.Graphics().moveTo(-122.9,202.5).lineTo(-122.9,-202.5).lineTo(122.9,-202.5).lineTo(122.9,202.5).closePath();
	var mask_1_graphics_14 = new cjs.Graphics().moveTo(-213.1,202.5).lineTo(-213.1,-202.5).lineTo(213.1,-202.5).lineTo(213.1,202.5).closePath();
	var mask_1_graphics_15 = new cjs.Graphics().moveTo(-296.8,202.5).lineTo(-296.8,-202.5).lineTo(296.8,-202.5).lineTo(296.8,202.5).closePath();
	var mask_1_graphics_16 = new cjs.Graphics().moveTo(-374,202.5).lineTo(-374,-202.5).lineTo(374,-202.5).lineTo(374,202.5).closePath();
	var mask_1_graphics_17 = new cjs.Graphics().moveTo(-444.7,202.5).lineTo(-444.7,-202.5).lineTo(444.7,-202.5).lineTo(444.7,202.5).closePath();
	var mask_1_graphics_18 = new cjs.Graphics().moveTo(-508.9,202.5).lineTo(-508.9,-202.5).lineTo(508.9,-202.5).lineTo(508.9,202.5).closePath();
	var mask_1_graphics_19 = new cjs.Graphics().moveTo(-566.7,202.5).lineTo(-566.7,-202.5).lineTo(566.6,-202.5).lineTo(566.6,202.5).closePath();
	var mask_1_graphics_20 = new cjs.Graphics().moveTo(-617.9,202.5).lineTo(-617.9,-202.5).lineTo(617.9,-202.5).lineTo(617.9,202.5).closePath();
	var mask_1_graphics_21 = new cjs.Graphics().moveTo(-662.7,202.5).lineTo(-662.7,-202.5).lineTo(662.7,-202.5).lineTo(662.7,202.5).closePath();
	var mask_1_graphics_22 = new cjs.Graphics().moveTo(-700.9,202.5).lineTo(-700.9,-202.5).lineTo(700.9,-202.5).lineTo(700.9,202.5).closePath();
	var mask_1_graphics_23 = new cjs.Graphics().moveTo(-732.7,202.5).lineTo(-732.7,-202.5).lineTo(732.7,-202.5).lineTo(732.7,202.5).closePath();
	var mask_1_graphics_24 = new cjs.Graphics().moveTo(-758,202.5).lineTo(-758,-202.5).lineTo(757.9,-202.5).lineTo(757.9,202.5).closePath();
	var mask_1_graphics_25 = new cjs.Graphics().moveTo(-776.8,202.5).lineTo(-776.8,-202.5).lineTo(776.7,-202.5).lineTo(776.7,202.5).closePath();
	var mask_1_graphics_26 = new cjs.Graphics().moveTo(-789.1,202.5).lineTo(-789.1,-202.5).lineTo(789,-202.5).lineTo(789,202.5).closePath();
	var mask_1_graphics_27 = new cjs.Graphics().moveTo(-794.9,202.5).lineTo(-794.9,-202.5).lineTo(794.8,-202.5).lineTo(794.8,202.5).closePath();
	var mask_1_graphics_40 = new cjs.Graphics().moveTo(-794.9,202.5).lineTo(-794.9,-202.5).lineTo(794.8,-202.5).lineTo(794.8,202.5).closePath();
	var mask_1_graphics_41 = new cjs.Graphics().moveTo(-729,202.5).lineTo(-729,-202.5).lineTo(729,-202.5).lineTo(729,202.5).closePath();
	var mask_1_graphics_42 = new cjs.Graphics().moveTo(-663.2,202.5).lineTo(-663.2,-202.5).lineTo(663.2,-202.5).lineTo(663.2,202.5).closePath();
	var mask_1_graphics_43 = new cjs.Graphics().moveTo(-597.4,202.5).lineTo(-597.4,-202.5).lineTo(597.4,-202.5).lineTo(597.4,202.5).closePath();
	var mask_1_graphics_44 = new cjs.Graphics().moveTo(-531.6,202.5).lineTo(-531.6,-202.5).lineTo(531.6,-202.5).lineTo(531.6,202.5).closePath();
	var mask_1_graphics_45 = new cjs.Graphics().moveTo(-465.8,202.5).lineTo(-465.8,-202.5).lineTo(465.7,-202.5).lineTo(465.7,202.5).closePath();
	var mask_1_graphics_46 = new cjs.Graphics().moveTo(-399.9,202.5).lineTo(-399.9,-202.5).lineTo(399.9,-202.5).lineTo(399.9,202.5).closePath();
	var mask_1_graphics_47 = new cjs.Graphics().moveTo(-334.1,202.5).lineTo(-334.1,-202.5).lineTo(334.1,-202.5).lineTo(334.1,202.5).closePath();
	var mask_1_graphics_48 = new cjs.Graphics().moveTo(-268.3,202.5).lineTo(-268.3,-202.5).lineTo(268.3,-202.5).lineTo(268.3,202.5).closePath();
	var mask_1_graphics_49 = new cjs.Graphics().moveTo(-202.4,202.5).lineTo(-202.4,-202.5).lineTo(202.4,-202.5).lineTo(202.4,202.5).closePath();
	var mask_1_graphics_50 = new cjs.Graphics().moveTo(-136.6,202.5).lineTo(-136.6,-202.5).lineTo(136.6,-202.5).lineTo(136.6,202.5).closePath();
	var mask_1_graphics_51 = new cjs.Graphics().moveTo(-70.8,202.5).lineTo(-70.8,-202.5).lineTo(70.8,-202.5).lineTo(70.8,202.5).closePath();
	var mask_1_graphics_52 = new cjs.Graphics().moveTo(-5,202.5).lineTo(-5,-202.5).lineTo(5,-202.5).lineTo(5,202.5).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_1_graphics_12,x:-166.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_13,x:-69.6,y:482.4}).wait(1).to({graphics:mask_1_graphics_14,x:20.6,y:482.4}).wait(1).to({graphics:mask_1_graphics_15,x:104.3,y:482.4}).wait(1).to({graphics:mask_1_graphics_16,x:181.5,y:482.4}).wait(1).to({graphics:mask_1_graphics_17,x:252.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_18,x:316.4,y:482.4}).wait(1).to({graphics:mask_1_graphics_19,x:374.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_20,x:425.4,y:482.4}).wait(1).to({graphics:mask_1_graphics_21,x:470.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_22,x:508.4,y:482.4}).wait(1).to({graphics:mask_1_graphics_23,x:540.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_24,x:565.5,y:482.4}).wait(1).to({graphics:mask_1_graphics_25,x:584.3,y:482.4}).wait(1).to({graphics:mask_1_graphics_26,x:596.6,y:482.4}).wait(1).to({graphics:mask_1_graphics_27,x:602.4,y:482.4}).wait(13).to({graphics:mask_1_graphics_40,x:602.4,y:482.4}).wait(1).to({graphics:mask_1_graphics_41,x:668.2,y:482.4}).wait(1).to({graphics:mask_1_graphics_42,x:734,y:482.4}).wait(1).to({graphics:mask_1_graphics_43,x:799.8,y:482.4}).wait(1).to({graphics:mask_1_graphics_44,x:865.6,y:482.4}).wait(1).to({graphics:mask_1_graphics_45,x:931.5,y:482.4}).wait(1).to({graphics:mask_1_graphics_46,x:997.3,y:482.4}).wait(1).to({graphics:mask_1_graphics_47,x:1063.1,y:482.4}).wait(1).to({graphics:mask_1_graphics_48,x:1128.9,y:482.4}).wait(1).to({graphics:mask_1_graphics_49,x:1194.8,y:482.4}).wait(1).to({graphics:mask_1_graphics_50,x:1260.6,y:482.4}).wait(1).to({graphics:mask_1_graphics_51,x:1326.4,y:482.4}).wait(1).to({graphics:mask_1_graphics_52,x:1392.2,y:482.4}).wait(1).to({graphics:null,x:0,y:0}).wait(255));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962","#174952"],[0,0.467,0.855,1],-939.3,0,939.3,0).setStrokeStyle(2,1,1).moveTo(-937.3,-47.4).curveTo(-926.5,-51,-908,-55.2).curveTo(-871,-63.7,-832.4,-67.1).curveTo(-708.6,-77.7,-614.9,-32.4).curveTo(-589.7,-20.2,-561.2,-2.3).curveTo(-542.4,9.5,-510.4,31.5).curveTo(-474.3,56.4,-459.5,66).curveTo(-430.3,85,-405.3,98.2).curveTo(-341.6,131.8,-274.3,143.4).curveTo(-192.9,157.4,-92.5,142.6).curveTo(3.9,128.3,98.2,83).curveTo(136.4,64.6,178.5,39.1).curveTo(208.7,20.9,252.1,-8).curveTo(313.4,-48.9,321.4,-54).curveTo(359.6,-78.8,388.7,-94.3).curveTo(462.9,-134.1,527.4,-139.9).curveTo(649.2,-150.8,805.4,-150.2).curveTo(883.6,-149.9,937.3,-147.4);
	this.shape.setTransform(804.9,444.8);
	this.shape._off = true;

	this.shape.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12).to({_off:false},0).to({_off:true},41).wait(255));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_4 = new cjs.Graphics().moveTo(-21.2,206.2).lineTo(-21.2,-206.2).lineTo(21.2,-206.2).lineTo(21.2,206.2).closePath();
	var mask_2_graphics_5 = new cjs.Graphics().moveTo(-135.7,206.2).lineTo(-135.7,-206.2).lineTo(135.7,-206.2).lineTo(135.7,206.2).closePath();
	var mask_2_graphics_6 = new cjs.Graphics().moveTo(-240.9,206.2).lineTo(-240.9,-206.2).lineTo(240.9,-206.2).lineTo(240.9,206.2).closePath();
	var mask_2_graphics_7 = new cjs.Graphics().moveTo(-337.1,206.2).lineTo(-337.1,-206.2).lineTo(337.1,-206.2).lineTo(337.1,206.2).closePath();
	var mask_2_graphics_8 = new cjs.Graphics().moveTo(-424,206.2).lineTo(-424,-206.2).lineTo(424,-206.2).lineTo(424,206.2).closePath();
	var mask_2_graphics_9 = new cjs.Graphics().moveTo(-501.9,206.2).lineTo(-501.9,-206.2).lineTo(501.8,-206.2).lineTo(501.8,206.2).closePath();
	var mask_2_graphics_10 = new cjs.Graphics().moveTo(-570.5,206.2).lineTo(-570.5,-206.2).lineTo(570.5,-206.2).lineTo(570.5,206.2).closePath();
	var mask_2_graphics_11 = new cjs.Graphics().moveTo(-630,206.2).lineTo(-630,-206.2).lineTo(630,-206.2).lineTo(630,206.2).closePath();
	var mask_2_graphics_12 = new cjs.Graphics().moveTo(-680.4,206.2).lineTo(-680.4,-206.2).lineTo(680.3,-206.2).lineTo(680.3,206.2).closePath();
	var mask_2_graphics_13 = new cjs.Graphics().moveTo(-721.6,206.2).lineTo(-721.6,-206.2).lineTo(721.6,-206.2).lineTo(721.6,206.2).closePath();
	var mask_2_graphics_14 = new cjs.Graphics().moveTo(-753.6,206.2).lineTo(-753.6,-206.2).lineTo(753.6,-206.2).lineTo(753.6,206.2).closePath();
	var mask_2_graphics_15 = new cjs.Graphics().moveTo(-776.5,206.2).lineTo(-776.5,-206.2).lineTo(776.5,-206.2).lineTo(776.5,206.2).closePath();
	var mask_2_graphics_16 = new cjs.Graphics().moveTo(-790.2,206.2).lineTo(-790.2,-206.2).lineTo(790.2,-206.2).lineTo(790.2,206.2).closePath();
	var mask_2_graphics_17 = new cjs.Graphics().moveTo(-794.8,206.2).lineTo(-794.8,-206.2).lineTo(794.8,-206.2).lineTo(794.8,206.2).closePath();
	var mask_2_graphics_26 = new cjs.Graphics().moveTo(-794.8,206.2).lineTo(-794.8,-206.2).lineTo(794.8,-206.2).lineTo(794.8,206.2).closePath();
	var mask_2_graphics_27 = new cjs.Graphics().moveTo(-745.5,206.2).lineTo(-745.5,-206.2).lineTo(745.5,-206.2).lineTo(745.5,206.2).closePath();
	var mask_2_graphics_28 = new cjs.Graphics().moveTo(-696.1,206.2).lineTo(-696.1,-206.2).lineTo(696.1,-206.2).lineTo(696.1,206.2).closePath();
	var mask_2_graphics_29 = new cjs.Graphics().moveTo(-646.7,206.2).lineTo(-646.7,-206.2).lineTo(646.7,-206.2).lineTo(646.7,206.2).closePath();
	var mask_2_graphics_30 = new cjs.Graphics().moveTo(-597.3,206.2).lineTo(-597.3,-206.2).lineTo(597.3,-206.2).lineTo(597.3,206.2).closePath();
	var mask_2_graphics_31 = new cjs.Graphics().moveTo(-548,206.2).lineTo(-548,-206.2).lineTo(548,-206.2).lineTo(548,206.2).closePath();
	var mask_2_graphics_32 = new cjs.Graphics().moveTo(-498.6,206.2).lineTo(-498.6,-206.2).lineTo(498.6,-206.2).lineTo(498.6,206.2).closePath();
	var mask_2_graphics_33 = new cjs.Graphics().moveTo(-449.3,206.2).lineTo(-449.3,-206.2).lineTo(449.3,-206.2).lineTo(449.3,206.2).closePath();
	var mask_2_graphics_34 = new cjs.Graphics().moveTo(-399.9,206.2).lineTo(-399.9,-206.2).lineTo(399.9,-206.2).lineTo(399.9,206.2).closePath();
	var mask_2_graphics_35 = new cjs.Graphics().moveTo(-350.6,206.2).lineTo(-350.6,-206.2).lineTo(350.5,-206.2).lineTo(350.5,206.2).closePath();
	var mask_2_graphics_36 = new cjs.Graphics().moveTo(-301.2,206.2).lineTo(-301.2,-206.2).lineTo(301.2,-206.2).lineTo(301.2,206.2).closePath();
	var mask_2_graphics_37 = new cjs.Graphics().moveTo(-251.8,206.2).lineTo(-251.8,-206.2).lineTo(251.8,-206.2).lineTo(251.8,206.2).closePath();
	var mask_2_graphics_38 = new cjs.Graphics().moveTo(-202.4,206.2).lineTo(-202.4,-206.2).lineTo(202.5,-206.2).lineTo(202.5,206.2).closePath();
	var mask_2_graphics_39 = new cjs.Graphics().moveTo(-153.1,206.2).lineTo(-153.1,-206.2).lineTo(153.1,-206.2).lineTo(153.1,206.2).closePath();
	var mask_2_graphics_40 = new cjs.Graphics().moveTo(-103.7,206.2).lineTo(-103.7,-206.2).lineTo(103.7,-206.2).lineTo(103.7,206.2).closePath();
	var mask_2_graphics_41 = new cjs.Graphics().moveTo(-54.4,206.2).lineTo(-54.4,-206.2).lineTo(54.4,-206.2).lineTo(54.4,206.2).closePath();
	var mask_2_graphics_42 = new cjs.Graphics().moveTo(-5,206.2).lineTo(-5,-206.2).lineTo(5,-206.2).lineTo(5,206.2).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_2_graphics_4,x:-171.2,y:561.8}).wait(1).to({graphics:mask_2_graphics_5,x:-56.7,y:561.8}).wait(1).to({graphics:mask_2_graphics_6,x:48.5,y:561.8}).wait(1).to({graphics:mask_2_graphics_7,x:144.7,y:561.8}).wait(1).to({graphics:mask_2_graphics_8,x:231.6,y:561.8}).wait(1).to({graphics:mask_2_graphics_9,x:309.5,y:561.8}).wait(1).to({graphics:mask_2_graphics_10,x:378.1,y:561.8}).wait(1).to({graphics:mask_2_graphics_11,x:437.6,y:561.8}).wait(1).to({graphics:mask_2_graphics_12,x:488,y:561.8}).wait(1).to({graphics:mask_2_graphics_13,x:529.2,y:561.8}).wait(1).to({graphics:mask_2_graphics_14,x:561.2,y:561.8}).wait(1).to({graphics:mask_2_graphics_15,x:584.1,y:561.8}).wait(1).to({graphics:mask_2_graphics_16,x:597.8,y:561.8}).wait(1).to({graphics:mask_2_graphics_17,x:602.4,y:561.8}).wait(9).to({graphics:mask_2_graphics_26,x:602.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_27,x:652.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_28,x:702.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_29,x:752.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_30,x:802.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_31,x:852.4,y:561.8}).wait(1).to({graphics:mask_2_graphics_32,x:902.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_33,x:952.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_34,x:1002.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_35,x:1052.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_36,x:1102.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_37,x:1152.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_38,x:1202.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_39,x:1252.3,y:561.8}).wait(1).to({graphics:mask_2_graphics_40,x:1302.2,y:561.8}).wait(1).to({graphics:mask_2_graphics_41,x:1352.2,y:561.8}).wait(1).to({graphics:mask_2_graphics_42,x:1402.2,y:561.8}).wait(1).to({graphics:null,x:0,y:0}).wait(265));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-105,-5,229.9,-5).setStrokeStyle(2,1,1).moveTo(-105,86.2).curveTo(-99.7,76.1,-89.7,60.7).curveTo(-69.9,29.9,-46.9,3.8).curveTo(-14.6,-32.9,19.5,-55.1).curveTo(62,-82.8,105,-86.2);
	this.shape_1.setTransform(-17.5,546.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-276.1,2.2,321.2,2.2).setStrokeStyle(2,1,1).moveTo(-151.2,-69).curveTo(-110,-72.3,-75.1,-49.6).curveTo(-61.6,-40.8,-45.4,-25.9).curveTo(-43.9,-24.6,-16.9,1.6).curveTo(0.7,18.7,13.8,28.9).curveTo(31.8,43.1,49.8,51.9).curveTo(94.1,73.5,151.2,68.5);
	this.shape_2.setTransform(238.7,528.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-441.2,-17,471.2,-17).setStrokeStyle(2,1,1).moveTo(-271.2,51.7).curveTo(-218.6,47.1,-142.8,22.6).curveTo(-124.1,16.6,-77.6,0.4).curveTo(-35.4,-14.2,-11.2,-21.7).curveTo(66.8,-46,126,-50.6).curveTo(202.4,-56.5,271.2,-33.3);
	this.shape_3.setTransform(661.1,545.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-449.9,-13.9,427.4,-13.9).setStrokeStyle(2,1,1).moveTo(-250,-52.7).curveTo(-218.4,-42.1,-178.4,-27.2).curveTo(-155.5,-18.8,-112.5,-2.6).curveTo(-36.4,25.7,8.5,37.3).curveTo(71.1,53.4,125.1,52.7).curveTo(186.8,52,250,29.8);
	this.shape_4.setTransform(1182.3,565.1);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[]},39).to({state:[]},194).wait(71));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_8 = new cjs.Graphics().moveTo(-78.7,200).lineTo(-78.7,-200).lineTo(78.7,-200).lineTo(78.7,200).closePath();
	var mask_3_graphics_9 = new cjs.Graphics().moveTo(-141.8,200).lineTo(-141.8,-200).lineTo(141.8,-200).lineTo(141.8,200).closePath();
	var mask_3_graphics_10 = new cjs.Graphics().moveTo(-199.4,200).lineTo(-199.4,-200).lineTo(199.4,-200).lineTo(199.4,200).closePath();
	var mask_3_graphics_11 = new cjs.Graphics().moveTo(-251.5,200).lineTo(-251.5,-200).lineTo(251.5,-200).lineTo(251.5,200).closePath();
	var mask_3_graphics_12 = new cjs.Graphics().moveTo(-298.1,200).lineTo(-298.1,-200).lineTo(298.1,-200).lineTo(298.1,200).closePath();
	var mask_3_graphics_13 = new cjs.Graphics().moveTo(-339.3,200).lineTo(-339.3,-200).lineTo(339.3,-200).lineTo(339.3,200).closePath();
	var mask_3_graphics_14 = new cjs.Graphics().moveTo(-374.9,200).lineTo(-374.9,-200).lineTo(374.9,-200).lineTo(374.9,200).closePath();
	var mask_3_graphics_15 = new cjs.Graphics().moveTo(-405.1,200).lineTo(-405.1,-200).lineTo(405.1,-200).lineTo(405.1,200).closePath();
	var mask_3_graphics_16 = new cjs.Graphics().moveTo(-429.8,200).lineTo(-429.8,-200).lineTo(429.8,-200).lineTo(429.8,200).closePath();
	var mask_3_graphics_17 = new cjs.Graphics().moveTo(-449,200).lineTo(-449,-200).lineTo(449,-200).lineTo(449,200).closePath();
	var mask_3_graphics_18 = new cjs.Graphics().moveTo(-462.7,200).lineTo(-462.7,-200).lineTo(462.7,-200).lineTo(462.7,200).closePath();
	var mask_3_graphics_19 = new cjs.Graphics().moveTo(-470.9,200).lineTo(-470.9,-200).lineTo(470.9,-200).lineTo(470.9,200).closePath();
	var mask_3_graphics_20 = new cjs.Graphics().moveTo(-473.7,200).lineTo(-473.7,-200).lineTo(473.6,-200).lineTo(473.6,200).closePath();
	var mask_3_graphics_30 = new cjs.Graphics().moveTo(-473.7,200).lineTo(-473.7,-200).lineTo(473.6,-200).lineTo(473.6,200).closePath();
	var mask_3_graphics_31 = new cjs.Graphics().moveTo(-442.4,200).lineTo(-442.4,-200).lineTo(442.4,-200).lineTo(442.4,200).closePath();
	var mask_3_graphics_32 = new cjs.Graphics().moveTo(-411.2,200).lineTo(-411.2,-200).lineTo(411.2,-200).lineTo(411.2,200).closePath();
	var mask_3_graphics_33 = new cjs.Graphics().moveTo(-379.9,200).lineTo(-379.9,-200).lineTo(379.9,-200).lineTo(379.9,200).closePath();
	var mask_3_graphics_34 = new cjs.Graphics().moveTo(-348.7,200).lineTo(-348.7,-200).lineTo(348.7,-200).lineTo(348.7,200).closePath();
	var mask_3_graphics_35 = new cjs.Graphics().moveTo(-317.5,200).lineTo(-317.5,-200).lineTo(317.5,-200).lineTo(317.5,200).closePath();
	var mask_3_graphics_36 = new cjs.Graphics().moveTo(-286.3,200).lineTo(-286.3,-200).lineTo(286.3,-200).lineTo(286.3,200).closePath();
	var mask_3_graphics_37 = new cjs.Graphics().moveTo(-255,200).lineTo(-255,-200).lineTo(255,-200).lineTo(255,200).closePath();
	var mask_3_graphics_38 = new cjs.Graphics().moveTo(-223.8,200).lineTo(-223.8,-200).lineTo(223.8,-200).lineTo(223.8,200).closePath();
	var mask_3_graphics_39 = new cjs.Graphics().moveTo(-192.6,200).lineTo(-192.6,-200).lineTo(192.5,-200).lineTo(192.5,200).closePath();
	var mask_3_graphics_40 = new cjs.Graphics().moveTo(-161.3,200).lineTo(-161.3,-200).lineTo(161.3,-200).lineTo(161.3,200).closePath();
	var mask_3_graphics_41 = new cjs.Graphics().moveTo(-130.1,200).lineTo(-130.1,-200).lineTo(130.1,-200).lineTo(130.1,200).closePath();
	var mask_3_graphics_42 = new cjs.Graphics().moveTo(-98.9,200).lineTo(-98.9,-200).lineTo(98.9,-200).lineTo(98.9,200).closePath();
	var mask_3_graphics_43 = new cjs.Graphics().moveTo(-67.6,200).lineTo(-67.6,-200).lineTo(67.6,-200).lineTo(67.6,200).closePath();
	var mask_3_graphics_44 = new cjs.Graphics().moveTo(-36.4,200).lineTo(-36.4,-200).lineTo(36.4,-200).lineTo(36.4,200).closePath();
	var mask_3_graphics_45 = new cjs.Graphics().moveTo(-5.2,200).lineTo(-5.2,-200).lineTo(5.2,-200).lineTo(5.2,200).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_3_graphics_8,x:-223.7,y:150}).wait(1).to({graphics:mask_3_graphics_9,x:-160.6,y:150}).wait(1).to({graphics:mask_3_graphics_10,x:-103,y:150}).wait(1).to({graphics:mask_3_graphics_11,x:-50.9,y:150}).wait(1).to({graphics:mask_3_graphics_12,x:-4.3,y:150}).wait(1).to({graphics:mask_3_graphics_13,x:36.8,y:150}).wait(1).to({graphics:mask_3_graphics_14,x:72.5,y:150}).wait(1).to({graphics:mask_3_graphics_15,x:102.6,y:150}).wait(1).to({graphics:mask_3_graphics_16,x:127.3,y:150}).wait(1).to({graphics:mask_3_graphics_17,x:146.5,y:150}).wait(1).to({graphics:mask_3_graphics_18,x:160.2,y:150}).wait(1).to({graphics:mask_3_graphics_19,x:168.5,y:150}).wait(1).to({graphics:mask_3_graphics_20,x:171.2,y:150}).wait(10).to({graphics:mask_3_graphics_30,x:171.2,y:150}).wait(1).to({graphics:mask_3_graphics_31,x:202.4,y:150}).wait(1).to({graphics:mask_3_graphics_32,x:233.7,y:150}).wait(1).to({graphics:mask_3_graphics_33,x:264.9,y:150}).wait(1).to({graphics:mask_3_graphics_34,x:296.1,y:150}).wait(1).to({graphics:mask_3_graphics_35,x:327.4,y:150}).wait(1).to({graphics:mask_3_graphics_36,x:358.6,y:150}).wait(1).to({graphics:mask_3_graphics_37,x:389.8,y:150}).wait(1).to({graphics:mask_3_graphics_38,x:421.1,y:150}).wait(1).to({graphics:mask_3_graphics_39,x:452.3,y:150}).wait(1).to({graphics:mask_3_graphics_40,x:483.5,y:150}).wait(1).to({graphics:mask_3_graphics_41,x:514.8,y:150}).wait(1).to({graphics:mask_3_graphics_42,x:546,y:150}).wait(1).to({graphics:mask_3_graphics_43,x:577.2,y:150}).wait(1).to({graphics:mask_3_graphics_44,x:608.5,y:150}).wait(1).to({graphics:mask_3_graphics_45,x:639.7,y:150}).wait(1).to({graphics:null,x:0,y:0}).wait(262));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-291.1,-10.7,181.2,-10.7).setStrokeStyle(1,1,1).moveTo(-138.7,19.2).curveTo(-31.6,24.5,41.3,12.3).curveTo(103.6,1.9,138.7,-20.8);
	this.shape_5.setTransform(3.8,293.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-207.5,-2.5,332.4,-2.5).setStrokeStyle(1,1,1).moveTo(-165,120).curveTo(-163.4,118.9,-161.5,117.5).curveTo(-155,112.6,-145.5,103.1).curveTo(-137.3,95,-119,75.5).curveTo(-73.8,27,-46.9,1.9).curveTo(62.4,-100.1,165,-120);
	this.shape_6.setTransform(307.4,152.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962"],[0,0.467,1],-698.7,310.7,22.8,-35).setStrokeStyle(1,1,1).moveTo(-140.4,38.1).curveTo(-42,19.1,70.5,-15.9).curveTo(98.1,-24.5,140.4,-38.1);
	this.shape_7.setTransform(612.8,-5.7);

	this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[]},38).to({state:[]},191).wait(71));

	// Layer 8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().moveTo(-22.5,219.9).lineTo(-22.5,-220).lineTo(22.5,-220).lineTo(22.5,219.9).closePath();
	var mask_4_graphics_1 = new cjs.Graphics().moveTo(-131.8,219.9).lineTo(-131.8,-220).lineTo(131.8,-220).lineTo(131.8,219.9).closePath();
	var mask_4_graphics_2 = new cjs.Graphics().moveTo(-233,219.9).lineTo(-233,-220).lineTo(233,-220).lineTo(233,219.9).closePath();
	var mask_4_graphics_3 = new cjs.Graphics().moveTo(-326.2,219.9).lineTo(-326.2,-220).lineTo(326.1,-220).lineTo(326.1,219.9).closePath();
	var mask_4_graphics_4 = new cjs.Graphics().moveTo(-411.2,219.9).lineTo(-411.2,-220).lineTo(411.2,-220).lineTo(411.2,219.9).closePath();
	var mask_4_graphics_5 = new cjs.Graphics().moveTo(-488.1,219.9).lineTo(-488.1,-220).lineTo(488.1,-220).lineTo(488.1,219.9).closePath();
	var mask_4_graphics_6 = new cjs.Graphics().moveTo(-557,219.9).lineTo(-557,-220).lineTo(556.9,-220).lineTo(556.9,219.9).closePath();
	var mask_4_graphics_7 = new cjs.Graphics().moveTo(-617.7,219.9).lineTo(-617.7,-220).lineTo(617.7,-220).lineTo(617.7,219.9).closePath();
	var mask_4_graphics_8 = new cjs.Graphics().moveTo(-670.3,219.9).lineTo(-670.3,-220).lineTo(670.3,-220).lineTo(670.3,219.9).closePath();
	var mask_4_graphics_9 = new cjs.Graphics().moveTo(-714.9,219.9).lineTo(-714.9,-220).lineTo(714.9,-220).lineTo(714.9,219.9).closePath();
	var mask_4_graphics_10 = new cjs.Graphics().moveTo(-751.3,219.9).lineTo(-751.3,-220).lineTo(751.3,-220).lineTo(751.3,219.9).closePath();
	var mask_4_graphics_11 = new cjs.Graphics().moveTo(-779.7,219.9).lineTo(-779.7,-220).lineTo(779.6,-220).lineTo(779.6,219.9).closePath();
	var mask_4_graphics_12 = new cjs.Graphics().moveTo(-799.9,219.9).lineTo(-799.9,-220).lineTo(799.9,-220).lineTo(799.9,219.9).closePath();
	var mask_4_graphics_13 = new cjs.Graphics().moveTo(-812,219.9).lineTo(-812,-220).lineTo(812,-220).lineTo(812,219.9).closePath();
	var mask_4_graphics_14 = new cjs.Graphics().moveTo(-816.1,219.9).lineTo(-816.1,-220).lineTo(816.1,-220).lineTo(816.1,219.9).closePath();
	var mask_4_graphics_22 = new cjs.Graphics().moveTo(-816.1,219.9).lineTo(-816.1,-220).lineTo(816.1,-220).lineTo(816.1,219.9).closePath();
	var mask_4_graphics_23 = new cjs.Graphics().moveTo(-749.3,219.9).lineTo(-749.3,-220).lineTo(749.3,-220).lineTo(749.3,219.9).closePath();
	var mask_4_graphics_24 = new cjs.Graphics().moveTo(-685.1,219.9).lineTo(-685.1,-220).lineTo(685.1,-220).lineTo(685.1,219.9).closePath();
	var mask_4_graphics_25 = new cjs.Graphics().moveTo(-623.4,219.9).lineTo(-623.4,-220).lineTo(623.4,-220).lineTo(623.4,219.9).closePath();
	var mask_4_graphics_26 = new cjs.Graphics().moveTo(-564.2,219.9).lineTo(-564.2,-220).lineTo(564.2,-220).lineTo(564.2,219.9).closePath();
	var mask_4_graphics_27 = new cjs.Graphics().moveTo(-507.6,219.9).lineTo(-507.6,-220).lineTo(507.6,-220).lineTo(507.6,219.9).closePath();
	var mask_4_graphics_28 = new cjs.Graphics().moveTo(-453.4,219.9).lineTo(-453.4,-220).lineTo(453.4,-220).lineTo(453.4,219.9).closePath();
	var mask_4_graphics_29 = new cjs.Graphics().moveTo(-401.8,219.9).lineTo(-401.8,-220).lineTo(401.8,-220).lineTo(401.8,219.9).closePath();
	var mask_4_graphics_30 = new cjs.Graphics().moveTo(-352.6,219.9).lineTo(-352.6,-220).lineTo(352.7,-220).lineTo(352.7,219.9).closePath();
	var mask_4_graphics_31 = new cjs.Graphics().moveTo(-306.1,219.9).lineTo(-306.1,-220).lineTo(306.1,-220).lineTo(306.1,219.9).closePath();
	var mask_4_graphics_32 = new cjs.Graphics().moveTo(-262,219.9).lineTo(-262,-220).lineTo(262,-220).lineTo(262,219.9).closePath();
	var mask_4_graphics_33 = new cjs.Graphics().moveTo(-220.5,219.9).lineTo(-220.5,-220).lineTo(220.4,-220).lineTo(220.4,219.9).closePath();
	var mask_4_graphics_34 = new cjs.Graphics().moveTo(-181.4,219.9).lineTo(-181.4,-220).lineTo(181.4,-220).lineTo(181.4,219.9).closePath();
	var mask_4_graphics_35 = new cjs.Graphics().moveTo(-144.9,219.9).lineTo(-144.9,-220).lineTo(144.9,-220).lineTo(144.9,219.9).closePath();
	var mask_4_graphics_36 = new cjs.Graphics().moveTo(-110.9,219.9).lineTo(-110.9,-220).lineTo(110.9,-220).lineTo(110.9,219.9).closePath();
	var mask_4_graphics_37 = new cjs.Graphics().moveTo(-79.4,219.9).lineTo(-79.4,-220).lineTo(79.4,-220).lineTo(79.4,219.9).closePath();
	var mask_4_graphics_38 = new cjs.Graphics().moveTo(-50.5,219.9).lineTo(-50.5,-220).lineTo(50.5,-220).lineTo(50.5,219.9).closePath();
	var mask_4_graphics_39 = new cjs.Graphics().moveTo(-24,219.9).lineTo(-24,-220).lineTo(24,-220).lineTo(24,219.9).closePath();
	var mask_4_graphics_40 = new cjs.Graphics().moveTo(-0.1,219.9).lineTo(-0.1,-220).lineTo(0.1,-220).lineTo(0.1,219.9).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:-212.5,y:240}).wait(1).to({graphics:mask_4_graphics_1,x:-103.1,y:240}).wait(1).to({graphics:mask_4_graphics_2,x:-1.9,y:240}).wait(1).to({graphics:mask_4_graphics_3,x:91.2,y:240}).wait(1).to({graphics:mask_4_graphics_4,x:176.2,y:240}).wait(1).to({graphics:mask_4_graphics_5,x:253.2,y:240}).wait(1).to({graphics:mask_4_graphics_6,x:322,y:240}).wait(1).to({graphics:mask_4_graphics_7,x:382.7,y:240}).wait(1).to({graphics:mask_4_graphics_8,x:435.4,y:240}).wait(1).to({graphics:mask_4_graphics_9,x:479.9,y:240}).wait(1).to({graphics:mask_4_graphics_10,x:516.4,y:240}).wait(1).to({graphics:mask_4_graphics_11,x:544.7,y:240}).wait(1).to({graphics:mask_4_graphics_12,x:564.9,y:240}).wait(1).to({graphics:mask_4_graphics_13,x:577.1,y:240}).wait(1).to({graphics:mask_4_graphics_14,x:581.1,y:240}).wait(8).to({graphics:mask_4_graphics_22,x:581.1,y:240}).wait(1).to({graphics:mask_4_graphics_23,x:647.9,y:240}).wait(1).to({graphics:mask_4_graphics_24,x:712.1,y:240}).wait(1).to({graphics:mask_4_graphics_25,x:773.9,y:240}).wait(1).to({graphics:mask_4_graphics_26,x:833,y:240}).wait(1).to({graphics:mask_4_graphics_27,x:889.7,y:240}).wait(1).to({graphics:mask_4_graphics_28,x:943.9,y:240}).wait(1).to({graphics:mask_4_graphics_29,x:995.5,y:240}).wait(1).to({graphics:mask_4_graphics_30,x:1044.7,y:240}).wait(1).to({graphics:mask_4_graphics_31,x:1091.3,y:240}).wait(1).to({graphics:mask_4_graphics_32,x:1135.4,y:240}).wait(1).to({graphics:mask_4_graphics_33,x:1176.9,y:240}).wait(1).to({graphics:mask_4_graphics_34,x:1215.9,y:240}).wait(1).to({graphics:mask_4_graphics_35,x:1252.5,y:240}).wait(1).to({graphics:mask_4_graphics_36,x:1286.5,y:240}).wait(1).to({graphics:mask_4_graphics_37,x:1318,y:240}).wait(1).to({graphics:mask_4_graphics_38,x:1346.9,y:240}).wait(1).to({graphics:mask_4_graphics_39,x:1373.4,y:240}).wait(1).to({graphics:mask_4_graphics_40,x:1397.3,y:240}).wait(1).to({graphics:null,x:0,y:0}).wait(267));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962","#174952"],[0,0.467,0.855,1],-356.2,32.3,593.6,32.3).setStrokeStyle(2,1,1).moveTo(-356.2,-72.6).curveTo(-326.5,-59.5,-278.3,-41.2).curveTo(-181.8,-4.4,-89,21.7).curveTo(40.8,58.3,144.7,68.6).curveTo(274.5,81.5,356.2,52.3);
	this.shape_8.setTransform(206.2,270.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962","#174952"],[0,0.467,0.855,1],-721.1,20.6,1091,20.6).setStrokeStyle(2,1,1).moveTo(-483.6,98.1).curveTo(-444.6,84.1,-398.8,59.3).curveTo(-377.6,47.8,-317.7,12.2).curveTo(-266.3,-18.4,-233.4,-34.9).curveTo(-184.6,-59.4,-138.7,-73.7).curveTo(-25,-109.2,109.6,-93.1).curveTo(271.2,-73.8,483.6,20.6);
	this.shape_9.setTransform(1046,224.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962","#174952"],[0,0.467,0.855,1],-356.2,32.3,593.6,32.3).setStrokeStyle(4,1,1).moveTo(-356.2,-72.6).curveTo(-326.5,-59.5,-278.3,-41.2).curveTo(-181.8,-4.4,-89,21.7).curveTo(40.8,58.3,144.7,68.6).curveTo(274.5,81.5,356.2,52.3);
	this.shape_10.setTransform(206.2,270.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill().beginLinearGradientStroke(["#174952","#52C4EA","#024962","#174952"],[0,0.467,0.855,1],-721.1,20.6,1091,20.6).setStrokeStyle(4,1,1).moveTo(-483.6,98.1).curveTo(-444.6,84.1,-398.8,59.3).curveTo(-377.6,47.8,-317.7,12.2).curveTo(-266.3,-18.4,-233.4,-34.9).curveTo(-184.6,-59.4,-138.7,-73.7).curveTo(-25,-109.2,109.6,-93.1).curveTo(271.2,-73.8,483.6,20.6);
	this.shape_11.setTransform(1046,224.3);

	this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},40).to({state:[]},1).to({state:[]},196).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(891.3,522.7,1070.7,593.8);

})(lib = lib||{}, images = images||{}, cjs = cjs||{}, ss = ss||{});
var lib, images, cjs, ss;
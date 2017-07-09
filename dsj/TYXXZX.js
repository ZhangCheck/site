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



(lib.data1 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rect22 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rect221 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shap3 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shap31 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shap4 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shap42 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.shap44 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.shap45 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.shap46 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.shap47 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.vect = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.vect5 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.vect6 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.vect6_1 = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.vectGlow = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.zdkf = function() {
	this.spriteSheet = ss["TYXXZX_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.path1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,1,1).moveTo(-31.4,-174.6).curveTo(-31.3,-178.8,-22.2,-181.7).curveTo(-13,-184.7,0,-184.7).curveTo(13,-184.7,22.2,-181.7).curveTo(31.4,-178.8,31.4,-174.6).moveTo(31.4,174.7).curveTo(31.2,178.8,22.1,181.7).curveTo(13,184.7,-0,184.7).curveTo(-13,184.7,-22.2,181.7).curveTo(-30.8,179,-31.3,175.1);
	this.shape.setTransform(32.1,175.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(1,0,1).moveTo(31.5,-173.9).curveTo(31.5,-174.2,31.3,-174.9).lineTo(31.5,-174.9).lineTo(31.5,-174.9).lineTo(31.5,-173.9).lineTo(31.5,-173.8).lineTo(31.5,173.3).curveTo(31.2,169.2,22.3,166.2).curveTo(13,163.1,0,163.1).curveTo(-13,163.1,-22.3,166.2).curveTo(-31.2,169.2,-31.5,173.3).lineTo(-31.5,-173.8).curveTo(-31.4,-169.7,-22.3,-166.8).curveTo(-13.1,-163.9,0,-163.9).curveTo(13,-163.9,22.3,-166.8).curveTo(31.4,-169.7,31.5,-173.8).moveTo(-31.5,-173.9).lineTo(-31.5,-174.9).lineTo(-31.4,-174.9).closePath().moveTo(-31.5,-173.8).lineTo(-31.5,-173.9).moveTo(-31.3,174.9).curveTo(-31.3,174.7,-31.5,174.5).moveTo(31.5,174.1).lineTo(31.5,173.6).lineTo(31.5,174.1).closePath();
	this.shape_1.setTransform(32,175.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["rgba(44,181,255,0.529)","rgba(44,181,255,0.098)"],[0,0.224],-31.5,0.1,31.5,0.1).beginStroke().moveTo(22.3,166.5).curveTo(13,163.4,0,163.4).curveTo(-13,163.4,-22.3,166.5).curveTo(-31.2,169.4,-31.5,173.5).lineTo(-31.5,-173.6).curveTo(-31.4,-169.5,-22.3,-166.5).curveTo(-13.1,-163.6,0,-163.6).curveTo(13,-163.6,22.3,-166.5).curveTo(31.4,-169.5,31.5,-173.6).lineTo(31.5,173.6).curveTo(31.2,169.4,22.3,166.5).closePath();
	this.shape_2.setTransform(32,175.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-10.5,65,371.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.8,-8.3).lineTo(5.8,0.3).lineTo(-5.8,8.3).closePath();
	this.shape.setTransform(11,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,4.8).lineTo(-3.3,-4.8).lineTo(3.3,-4.8).lineTo(3.3,4.8).closePath();
	this.shape_1.setTransform(0.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.8).lineTo(-2.3,-4.8).lineTo(2.3,-4.8).lineTo(2.3,4.8).closePath();
	this.shape_2.setTransform(-7.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,4.8).lineTo(-1.9,-4.8).lineTo(1.9,-4.8).lineTo(1.9,4.8).closePath();
	this.shape_3.setTransform(-14.9,0,1,1.016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-8.3,33.6,16.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.7,1.8).curveTo(-2.4,1,-2.4,-0).curveTo(-2.4,-1.1,-1.7,-1.8).curveTo(-0.9,-2.5,0.1,-2.5).curveTo(1,-2.5,1.7,-1.7).curveTo(2.4,-1,2.4,-0).curveTo(2.4,1.1,1.7,1.8).curveTo(1,2.5,0,2.5).curveTo(-1,2.5,-1.7,1.8).closePath().moveTo(-0.7,-0.8).curveTo(-1,-0.4,-1,0).curveTo(-1,0.5,-0.7,0.8).curveTo(-0.3,1.1,0.1,1).curveTo(0.4,1.1,0.7,0.8).curveTo(1.1,0.5,1.1,0).curveTo(1.1,-0.4,0.8,-0.8).curveTo(0.4,-1,-0,-1).curveTo(-0.4,-1,-0.7,-0.8).closePath();
	this.shape.setTransform(565.8,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.2,8.4).curveTo(-2.2,7.7,-1.1,6.8).curveTo(-0.1,6.1,0.1,4.7).lineTo(-1.4,4.7).lineTo(-1.4,5.1).lineTo(-2.8,5.1).lineTo(-2.8,-1.5).lineTo(7.9,-1.5).lineTo(7.9,5.1).lineTo(6.6,5.1).lineTo(6.6,4.7).lineTo(4.8,4.7).lineTo(4.8,6.8).curveTo(4.7,7.9,5.8,7.9).lineTo(7,7.9).curveTo(7.9,7.9,8.1,6.9).lineTo(8.3,5.1).lineTo(9.7,5.7).lineTo(9.4,7.6).curveTo(9,9.2,7.2,9.2).lineTo(5.4,9.2).curveTo(3.3,9.2,3.3,7.2).lineTo(3.3,4.7).lineTo(1.5,4.7).curveTo(1.3,6.9,-0.2,7.9).curveTo(-1.3,8.8,-4.3,9.7).lineTo(-5.2,8.4).closePath().moveTo(-1.4,3.5).lineTo(6.6,3.5).lineTo(6.6,2.2).lineTo(-1.4,2.2).closePath().moveTo(-1.4,1.1).lineTo(6.6,1.1).lineTo(6.6,-0.4).lineTo(-1.4,-0.4).closePath().moveTo(-9.7,4.9).lineTo(-7.3,4.3).lineTo(-7.3,-3.2).lineTo(-9.5,-3.2).lineTo(-9.5,-4.6).lineTo(-7.3,-4.6).lineTo(-7.3,-9.4).lineTo(-5.9,-9.4).lineTo(-5.9,-4.6).lineTo(-3.9,-4.6).lineTo(-3.9,-3.2).lineTo(-5.9,-3.2).lineTo(-5.9,3.9).lineTo(-3.5,3.2).lineTo(-3.4,4.7).lineTo(-9.4,6.5).closePath().moveTo(-3.4,-2.9).lineTo(-3.4,-4).lineTo(0.1,-4).lineTo(-1.1,-5.7).lineTo(0.1,-6.5).lineTo(1.5,-4.5).lineTo(0.8,-4).lineTo(3.8,-4).lineTo(5.2,-6.5).lineTo(6.6,-5.7).lineTo(5.3,-4).lineTo(9.4,-4).lineTo(9.4,-2.9).closePath().moveTo(-3,-6.6).lineTo(-3,-7.7).lineTo(2.2,-7.7).lineTo(1.4,-9.1).lineTo(2.8,-9.7).lineTo(3.8,-7.7).lineTo(8.6,-7.7).lineTo(8.6,-6.6).closePath();
	this.shape_1.setTransform(552.2,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.1,8.9).lineTo(2.1,-2.5).curveTo(0.1,2.1,-2.7,5.6).curveTo(-3.2,5.1,-4,4.6).curveTo(0.2,-0.5,2.2,-7.5).lineTo(-1.9,-7.5).lineTo(-1.9,-9).lineTo(8.9,-9).lineTo(8.9,-7.5).lineTo(3.9,-7.5).curveTo(3.2,-5.2,2.3,-3.1).lineTo(3.6,-3.1).lineTo(3.6,8.9).closePath().moveTo(-9.7,3.5).lineTo(-6.7,2.7).lineTo(-6.7,-1.9).lineTo(-9.4,-1.9).lineTo(-9.4,-3.3).lineTo(-6.7,-3.3).lineTo(-6.7,-6.9).lineTo(-9.5,-6.9).lineTo(-9.5,-8.2).lineTo(-2.6,-8.2).lineTo(-2.6,-6.9).lineTo(-5.2,-6.9).lineTo(-5.2,-3.3).lineTo(-2.6,-3.3).lineTo(-2.6,-1.9).lineTo(-5.2,-1.9).lineTo(-5.2,2.4).lineTo(-2.7,1.7).lineTo(-2.8,3).lineTo(-9.5,5.2).closePath().moveTo(3.9,-1.9).lineTo(5.2,-2.7).curveTo(8.1,1.3,9.7,3.8).lineTo(8.4,4.8).curveTo(6.3,1.3,3.9,-1.9).closePath();
	this.shape_2.setTransform(532.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.1,9.6).lineTo(1.1,-5).lineTo(-0.5,-5).curveTo(-1.6,-2.6,-3,-0.6).lineTo(-4.3,-1.7).curveTo(-1.7,-5.2,-0.5,-9.6).lineTo(1.1,-9.3).lineTo(0.1,-6.4).lineTo(9.7,-6.4).lineTo(9.7,-5).lineTo(2.6,-5).lineTo(2.6,-1.6).lineTo(9,-1.6).lineTo(9,-0.2).lineTo(2.6,-0.2).lineTo(2.6,3.4).lineTo(9.2,3.4).lineTo(9.2,4.7).lineTo(2.6,4.7).lineTo(2.6,9.6).closePath().moveTo(-6.9,9.6).lineTo(-6.9,-1.6).curveTo(-7.9,0.3,-9,1.9).lineTo(-9.7,0.1).curveTo(-7,-3.9,-5.4,-9.5).lineTo(-3.8,-9).curveTo(-4.5,-6.8,-5.4,-4.7).lineTo(-5.4,9.6).closePath();
	this.shape_3.setTransform(512,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.1).lineTo(-9.4,6.5).lineTo(-0.9,6.5).lineTo(-0.9,-6.5).lineTo(-8.3,-6.5).lineTo(-8.3,-8.1).lineTo(8.3,-8.1).lineTo(8.3,-6.5).lineTo(0.9,-6.5).lineTo(0.9,6.5).lineTo(9.4,6.5).lineTo(9.4,8.1).closePath();
	this.shape_4.setTransform(492.1,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.9,9.5).lineTo(-8.9,-6.2).lineTo(-6.9,-6.2).lineTo(-5.7,-9.5).lineTo(-4.1,-9).lineTo(-5.3,-6.2).lineTo(-1.4,-6.2).lineTo(-1.4,9.3).lineTo(-3,9.3).lineTo(-3,7.8).lineTo(-7.3,7.8).lineTo(-7.3,9.5).closePath().moveTo(-7.3,6.3).lineTo(-3,6.3).lineTo(-3,1.4).lineTo(-7.3,1.4).closePath().moveTo(-7.3,-0).lineTo(-3,-0).lineTo(-3,-4.7).lineTo(-7.3,-4.7).closePath().moveTo(1.7,9.3).lineTo(1.4,7.6).lineTo(1.4,7.6).curveTo(3.4,7.8,5,7.8).curveTo(6.8,7.8,6.9,6).curveTo(7.1,3.1,7.2,-4.8).lineTo(2,-4.8).curveTo(1.2,-2.9,0.2,-1.5).curveTo(-0.3,-1.9,-1.1,-2.2).curveTo(0.7,-5.1,2,-9.5).lineTo(3.6,-9).lineTo(2.6,-6.3).lineTo(8.9,-6.3).lineTo(8.5,6.4).curveTo(8.4,9.4,5.3,9.4).lineTo(1.7,9.3).closePath().moveTo(0.6,-0.9).lineTo(1.8,-1.8).curveTo(4,0.8,5.3,2.7).lineTo(3.8,3.7).curveTo(2.4,1.4,0.6,-0.9).closePath();
	this.shape_5.setTransform(472.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.6,8.2).curveTo(-7.4,6.5,-6,4.4).lineTo(-8.9,1.9).curveTo(-8.2,-0.6,-7.6,-3.9).lineTo(-9.7,-3.9).lineTo(-9.7,-5.3).lineTo(-7.4,-5.3).lineTo(-6.8,-9.5).lineTo(-5.2,-9.2).lineTo(-5.8,-5.3).lineTo(-2.2,-5.3).lineTo(-2.2,-4.1).curveTo(-2.6,1.3,-4.1,4.1).lineTo(-1.5,6.2).lineTo(-2.7,7.4).lineTo(-4.9,5.4).curveTo(-6.4,7.6,-8.7,9.5).lineTo(-9.6,8.2).closePath().moveTo(-7.4,1.5).lineTo(-5.2,3.1).curveTo(-3.9,0.4,-3.7,-3.9).lineTo(-6.1,-3.9).curveTo(-6.8,-0.1,-7.4,1.5).closePath().moveTo(-0.4,9.4).lineTo(-0.6,7.8).lineTo(2,7.9).curveTo(3.2,7.9,3.2,6.8).lineTo(3.2,0.8).lineTo(-2.2,0.8).lineTo(-2.2,-0.7).lineTo(3.2,-0.7).lineTo(3.2,-3.7).lineTo(6.7,-6.7).lineTo(-1.5,-6.7).lineTo(-1.5,-8.1).lineTo(8.9,-8.1).lineTo(8.9,-6.6).lineTo(4.7,-3).lineTo(4.7,-0.7).lineTo(9.7,-0.7).lineTo(9.7,0.8).lineTo(4.7,0.8).lineTo(4.7,7).curveTo(4.7,9.4,2.2,9.4).lineTo(-0.4,9.4).closePath();
	this.shape_6.setTransform(452.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9,8.4).curveTo(-8.2,7.7,-8.2,6.8).lineTo(-8.2,-7.3).lineTo(-1.4,-7.3).lineTo(-2.4,-9.3).lineTo(-0.9,-9.8).lineTo(0.2,-7.7).lineTo(-0.8,-7.3).lineTo(6.3,-7.3).lineTo(6.3,1.8).lineTo(4.8,1.8).lineTo(4.8,1.4).lineTo(-1.4,1.4).curveTo(-0.4,3.3,1.2,4.7).curveTo(4.3,3.2,7,1.6).lineTo(7.9,2.9).lineTo(2.5,5.7).curveTo(5.1,7.3,9,7.8).lineTo(8,9.5).curveTo(-0.2,7.9,-2.9,1.4).lineTo(-6.6,1.4).lineTo(-6.6,7.4).lineTo(-1.4,5.9).lineTo(-1.3,7.5).lineTo(-6.8,9.1).curveTo(-7.5,9.3,-8.1,9.8).closePath().moveTo(-6.6,-0.1).lineTo(4.8,-0.1).lineTo(4.8,-2.3).lineTo(-6.6,-2.3).closePath().moveTo(-6.6,-3.7).lineTo(4.8,-3.7).lineTo(4.8,-5.9).lineTo(-6.6,-5.9).closePath();
	this.shape_7.setTransform(432.9,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,8.4).curveTo(-8.3,7.2,-7.3,5.8).curveTo(-8.6,4.1,-9.4,1).lineTo(-8.1,0.5).curveTo(-7.6,2.9,-6.5,4.4).curveTo(-5.5,2.3,-5.2,-0.5).lineTo(-9.1,-0.5).lineTo(-9.1,-1.9).lineTo(-5.5,-6.4).lineTo(-9.5,-6.4).lineTo(-9.5,-7.7).lineTo(-3.7,-7.7).lineTo(-3.7,-6.4).lineTo(-7.4,-1.8).lineTo(-3.7,-1.8).lineTo(-3.7,-0.7).curveTo(-4.1,2.9,-5.5,5.6).curveTo(-3.4,7.4,1.1,7.5).curveTo(4.8,7.5,9.7,7.4).lineTo(9.1,8.9).lineTo(0.4,8.9).curveTo(-3.9,8.9,-6.3,6.8).curveTo(-7.4,8.4,-8.9,9.6).lineTo(-9.7,8.4).closePath().moveTo(1.5,7).lineTo(1.5,5).lineTo(-3.5,5).lineTo(-3.5,3.8).lineTo(1.5,3.8).lineTo(1.5,2.1).lineTo(-2.9,2.1).lineTo(-2.9,0.9).lineTo(1.5,0.9).lineTo(1.5,-0.7).lineTo(-2.6,-0.7).lineTo(-2.6,-1.9).lineTo(1.5,-1.9).lineTo(1.5,-3.6).lineTo(-3.6,-3.6).lineTo(-3.6,-4.8).lineTo(1.5,-4.8).lineTo(1.5,-6.5).lineTo(-2.6,-6.5).lineTo(-2.6,-7.7).lineTo(1.5,-7.7).lineTo(1.5,-9.6).lineTo(2.9,-9.6).lineTo(2.9,-7.7).lineTo(7.4,-7.7).lineTo(7.4,-4.8).lineTo(9.5,-4.8).lineTo(9.5,-3.6).lineTo(7.4,-3.6).lineTo(7.4,-0.2).lineTo(6,-0.2).lineTo(6,-0.7).lineTo(2.9,-0.7).lineTo(2.9,0.9).lineTo(7.8,0.9).lineTo(7.8,2.1).lineTo(2.9,2.1).lineTo(2.9,3.8).lineTo(8.7,3.8).lineTo(8.7,5).lineTo(2.9,5).lineTo(2.9,7).closePath().moveTo(2.9,-1.9).lineTo(6,-1.9).lineTo(6,-3.6).lineTo(2.9,-3.6).closePath().moveTo(2.9,-4.8).lineTo(6,-4.8).lineTo(6,-6.5).lineTo(2.9,-6.5).closePath();
	this.shape_8.setTransform(412.1,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FEFEFE").beginStroke().moveTo(3.7,9.4).lineTo(3.4,7.6).lineTo(6.3,7.8).curveTo(7.6,7.8,7.6,6.5).lineTo(7.6,-9.2).lineTo(9.1,-9.2).lineTo(9.1,7).curveTo(9.1,9.4,6.8,9.4).lineTo(3.7,9.4).closePath().moveTo(-4.6,9).curveTo(-7,9,-7,6.7).lineTo(-7,-2.4).lineTo(-8.2,-1.3).lineTo(-9.1,-2.8).curveTo(-5.9,-5.2,-3.6,-9.4).lineTo(-1.8,-9.4).lineTo(-2.1,-9).curveTo(0.4,-6.7,2.7,-4.3).lineTo(1.6,-3.1).curveTo(-0.4,-5.4,-2.8,-7.7).curveTo(-4.7,-4.7,-6.8,-2.7).lineTo(1.3,-2.7).lineTo(1.1,1.2).curveTo(1,4.1,-1.6,4.1).lineTo(-4.1,4).lineTo(-4.4,2.4).curveTo(-3.1,2.7,-1.9,2.7).curveTo(-0.5,2.7,-0.4,0.9).lineTo(-0.3,-1.3).lineTo(-5.4,-1.3).lineTo(-5.4,6.5).curveTo(-5.4,7.6,-4.3,7.6).lineTo(-1.1,7.6).curveTo(0.5,7.6,0.7,6.6).lineTo(1,4.3).lineTo(2.6,4.8).lineTo(2.1,7.2).curveTo(1.6,9,-0.7,9).closePath().moveTo(3.5,4.5).lineTo(3.5,-7.5).lineTo(5,-7.5).lineTo(5,4.5).closePath();
	this.shape_9.setTransform(391.5,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.2,9.7).lineTo(5.2,9.1).lineTo(-5.4,9.1).lineTo(-5.4,9.7).lineTo(-6.7,9.7).lineTo(-6.7,5.8).lineTo(6.5,5.8).lineTo(6.5,9.7).closePath().moveTo(-5.4,8.1).lineTo(5.2,8.1).lineTo(5.2,6.8).lineTo(-5.4,6.8).closePath().moveTo(-6.6,4.8).lineTo(-6.6,3.9).lineTo(6.5,3.9).lineTo(6.5,4.8).closePath().moveTo(-6.6,3).lineTo(-6.6,2.1).lineTo(6.4,2.1).lineTo(6.4,3).closePath().moveTo(-9.4,1.2).lineTo(-9.4,0.1).lineTo(-0.1,0.1).lineTo(-0.7,-1.1).lineTo(0.5,-1.6).lineTo(1.3,0.1).lineTo(9.5,0.1).lineTo(9.5,1.2).closePath().moveTo(1.3,-1.3).curveTo(3.1,-2.1,4.3,-2.9).curveTo(3.2,-4,2.6,-5.6).lineTo(1.5,-4).lineTo(0.6,-5.1).curveTo(2.3,-7,3.3,-9.7).lineTo(4.6,-9.4).lineTo(3.8,-7.7).lineTo(9.4,-7.7).lineTo(9.4,-6.7).lineTo(8,-6.7).curveTo(7.4,-4.3,6.2,-3).curveTo(7.5,-2.1,9.5,-1.5).lineTo(8.7,-0.4).curveTo(6.6,-1.1,5.3,-2.1).curveTo(4,-1,2.1,-0.3).lineTo(1.3,-1.3).closePath().moveTo(5.2,-3.7).curveTo(6.2,-4.8,6.7,-6.7).lineTo(3.4,-6.7).curveTo(4,-4.9,5.2,-3.7).closePath().moveTo(-3.7,-0.7).lineTo(-3.9,-1.5).lineTo(-6.5,-1.5).lineTo(-6.5,-0.9).lineTo(-7.6,-0.9).lineTo(-7.6,-4.2).lineTo(-8.8,-2.9).lineTo(-9.5,-3.8).curveTo(-8.1,-5.2,-7.2,-7).lineTo(-6.1,-6.7).lineTo(-6.3,-6.3).lineTo(-0,-6.3).lineTo(-0.3,-2.6).curveTo(-0.4,-0.7,-2.1,-0.6).lineTo(-3.7,-0.7).closePath().moveTo(-7.5,-4.4).lineTo(-2.9,-4.4).lineTo(-2.9,-1.8).lineTo(-2.4,-1.8).curveTo(-1.5,-1.7,-1.5,-2.8).lineTo(-1.3,-5.4).lineTo(-6.8,-5.4).lineTo(-7.5,-4.4).closePath().moveTo(-6.5,-2.3).lineTo(-4,-2.3).lineTo(-4,-3.5).lineTo(-6.5,-3.5).closePath().moveTo(-2.6,-6.8).lineTo(-2.6,-7.5).lineTo(-5.2,-7.5).lineTo(-5.2,-6.8).lineTo(-6.4,-6.8).lineTo(-6.4,-7.5).lineTo(-9.5,-7.5).lineTo(-9.5,-8.5).lineTo(-6.4,-8.5).lineTo(-6.4,-9.7).lineTo(-5.2,-9.7).lineTo(-5.2,-8.5).lineTo(-2.6,-8.5).lineTo(-2.6,-9.7).lineTo(-1.4,-9.7).lineTo(-1.4,-8.5).lineTo(1.5,-8.5).lineTo(1.5,-7.5).lineTo(-1.4,-7.5).lineTo(-1.4,-6.8).closePath();
	this.shape_10.setTransform(372.1,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.9,7.8).curveTo(-8.4,7.4,-8.4,6.7).lineTo(-8.4,-9.3).lineTo(7.3,-9.3).lineTo(7.3,-2.2).lineTo(5.7,-2.2).lineTo(5.7,-3).lineTo(1.4,-3).curveTo(1.5,-1.1,1.9,0.5).lineTo(8.8,0.5).lineTo(8.8,2).lineTo(2.2,2).curveTo(3.2,5.3,5.2,6.9).curveTo(6.2,7.8,6.7,6.7).curveTo(7.2,5.7,7.4,3.3).lineTo(8.9,3.9).curveTo(8.6,6.1,8.1,7.4).curveTo(7.5,9,6.2,9).curveTo(5,9,3.9,8).curveTo(1.7,6.1,0.6,2).lineTo(-6.8,2).lineTo(-6.8,7).curveTo(-4.6,6.4,-2.1,5.2).lineTo(-2.1,6.9).lineTo(-7.3,8.9).lineTo(-8,9.3).closePath().moveTo(-6.8,0.5).lineTo(0.3,0.5).curveTo(-0,-1.1,-0.2,-3).lineTo(-6.8,-3).closePath().moveTo(-6.8,-4.4).lineTo(5.7,-4.4).lineTo(5.7,-7.8).lineTo(-6.8,-7.8).closePath();
	this.shape_11.setTransform(352.7,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.9,8.3).curveTo(-2.8,4.8,-1.4,-3).lineTo(-8.5,-3).lineTo(-8.5,-4.5).lineTo(-1.1,-4.5).curveTo(-0.8,-7,-0.8,-9.8).lineTo(0.8,-9.8).curveTo(0.8,-6.9,0.6,-4.5).lineTo(8.9,-4.5).lineTo(8.5,5.4).curveTo(8.3,9,4.6,9).lineTo(1,9).lineTo(0.7,7.2).curveTo(2.6,7.4,4.4,7.4).curveTo(6.7,7.4,6.8,5.1).curveTo(7.1,1.2,7.2,-3).lineTo(0.3,-3).curveTo(-1.1,5.6,-7.7,9.8).lineTo(-8.9,8.3).closePath().moveTo(0.8,0.5).lineTo(1.9,-0.5).curveTo(3.8,1.2,5.3,2.9).lineTo(4.1,4).curveTo(2.6,2.2,0.8,0.5).closePath().moveTo(-7.1,-8.4).lineTo(-6,-9.4).curveTo(-4.4,-8,-2.9,-6.5).lineTo(-4.1,-5.4).curveTo(-5.5,-7,-7.1,-8.4).closePath();
	this.shape_12.setTransform(331.7,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.5,2.6).lineTo(-0.3,-2.6).lineTo(1.5,-2.6).lineTo(-0.1,2.6).closePath();
	this.shape_13.setTransform(311.6,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,7.8).curveTo(-6.4,6.9,-2.7,5.1).lineTo(-1.8,6.4).curveTo(-5.2,8,-8.7,9.2).lineTo(-9.4,7.8).closePath().moveTo(1.6,6.6).lineTo(2.5,5.3).curveTo(5.9,6.3,9.4,7.6).lineTo(8.6,9.2).curveTo(6,8,1.6,6.6).closePath().moveTo(-9.7,4.7).lineTo(-9.7,3.3).lineTo(-7,3.3).lineTo(-7,-9.2).lineTo(7,-9.2).lineTo(7,3.3).lineTo(9.7,3.3).lineTo(9.7,4.7).closePath().moveTo(-5.5,3.3).lineTo(5.5,3.3).lineTo(5.5,1.5).lineTo(-5.5,1.5).closePath().moveTo(-5.5,0.2).lineTo(5.5,0.2).lineTo(5.5,-1.6).lineTo(-5.5,-1.6).closePath().moveTo(-5.5,-2.9).lineTo(5.5,-2.9).lineTo(5.5,-4.7).lineTo(-5.5,-4.7).closePath().moveTo(-5.5,-6).lineTo(5.5,-6).lineTo(5.5,-7.8).lineTo(-5.5,-7.8).closePath();
	this.shape_14.setTransform(292.1,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.1).lineTo(-9.4,6.5).lineTo(-0.9,6.5).lineTo(-0.9,-6.5).lineTo(-8.3,-6.5).lineTo(-8.3,-8.1).lineTo(8.3,-8.1).lineTo(8.3,-6.5).lineTo(0.9,-6.5).lineTo(0.9,6.5).lineTo(9.4,6.5).lineTo(9.4,8.1).closePath();
	this.shape_15.setTransform(272.1,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FEFEFE").beginStroke().moveTo(6,7.9).curveTo(4.5,5.5,4.7,-2.1).lineTo(4.7,-7.4).lineTo(0.4,-7.4).lineTo(0.4,-1.3).lineTo(4,-1.3).lineTo(4,0.2).lineTo(0.4,0.2).lineTo(0.4,9.4).lineTo(-1.2,9.4).lineTo(-1.2,0.2).lineTo(-4.8,0.2).lineTo(-4.8,-1.3).lineTo(-1.2,-1.3).lineTo(-1.2,-7.4).lineTo(-4.6,-7.4).lineTo(-4.6,-8.8).lineTo(6.2,-8.8).lineTo(6.2,-2.7).curveTo(6.1,5,7.2,6.8).curveTo(7.5,7.3,7.7,7.3).curveTo(8,7.2,8.1,6.6).lineTo(8.4,3.4).lineTo(9.8,3.9).lineTo(9.5,7.3).curveTo(9.2,9.5,8.1,9.4).curveTo(7,9.4,6,7.9).closePath().moveTo(-8.3,7.8).curveTo(-7.5,7.1,-7.5,5.7).lineTo(-7.5,-1.6).lineTo(-9.8,-1.6).lineTo(-9.8,-3.1).lineTo(-6,-3.1).lineTo(-6,6.1).lineTo(-3.4,4.2).lineTo(-3.1,5.9).lineTo(-5.9,7.9).curveTo(-6.5,8.4,-7,9.1).closePath().moveTo(-9.2,-8.5).lineTo(-8,-9.5).curveTo(-6.1,-7.5,-4.9,-6.2).lineTo(-6.3,-5.1).curveTo(-7.6,-6.9,-9.2,-8.5).closePath();
	this.shape_16.setTransform(252.1,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,7.6).lineTo(-7.2,5.3).lineTo(-7.2,-1.3).lineTo(-9.6,-1.3).lineTo(-9.6,-2.7).lineTo(-5.7,-2.7).lineTo(-5.7,5.6).curveTo(-4.5,7.5,-1.7,7.5).lineTo(3.2,7.6).lineTo(9.7,7.5).lineTo(9.2,9).lineTo(2.7,9).lineTo(-1.9,9).curveTo(-5.3,8.9,-6.6,6.6).curveTo(-7.4,7.4,-8.9,9.3).closePath().moveTo(4,6.5).lineTo(3.8,5).lineTo(5.9,5.1).curveTo(6.9,5.1,6.9,4.1).lineTo(6.9,3.1).lineTo(3.2,3.1).lineTo(3.2,6.2).lineTo(1.8,6.2).lineTo(1.8,3.1).lineTo(-1.9,3.1).lineTo(-1.9,6.5).lineTo(-3.3,6.5).lineTo(-3.3,-4.5).lineTo(1.5,-4.5).lineTo(-1.6,-6).lineTo(-0.8,-7).lineTo(2.1,-5.5).lineTo(5.6,-7.3).lineTo(-3.6,-7.3).lineTo(-3.6,-8.6).lineTo(8.2,-8.6).lineTo(8.2,-7.3).lineTo(3.5,-4.8).lineTo(4.1,-4.5).lineTo(8.3,-4.5).lineTo(8.3,4.3).curveTo(8.3,6.6,6.3,6.5).lineTo(4,6.5).closePath().moveTo(3.2,1.9).lineTo(6.9,1.9).lineTo(6.9,-0).lineTo(3.2,-0).closePath().moveTo(-1.9,1.9).lineTo(1.8,1.9).lineTo(1.8,-0).lineTo(-1.9,-0).closePath().moveTo(3.2,-1.3).lineTo(6.9,-1.3).lineTo(6.9,-3.3).lineTo(3.2,-3.3).closePath().moveTo(-1.9,-1.3).lineTo(1.8,-1.3).lineTo(1.8,-3.3).lineTo(-1.9,-3.3).closePath().moveTo(-8.5,-8.4).lineTo(-7.3,-9.3).lineTo(-4.6,-5.6).lineTo(-6,-4.6).curveTo(-7.5,-7.1,-8.5,-8.4).closePath();
	this.shape_17.setTransform(232.1,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FEFEFE").beginStroke().moveTo(0.7,9.4).lineTo(0.4,7.8).lineTo(3.6,7.9).curveTo(5,7.9,5,6.5).lineTo(5,-3.7).lineTo(-2,-3.7).lineTo(-2,-5.1).lineTo(5,-5.1).lineTo(5,-9.4).lineTo(6.6,-9.4).lineTo(6.6,-5.1).lineTo(9.3,-5.1).lineTo(9.3,-3.7).lineTo(6.6,-3.7).lineTo(6.6,6.9).curveTo(6.6,9.5,4,9.5).lineTo(0.7,9.4).closePath().moveTo(-9.4,8.6).lineTo(-9.4,-7.6).lineTo(-2.6,-7.6).lineTo(-2.6,8.3).lineTo(-4.2,8.3).lineTo(-4.2,6.7).lineTo(-7.8,6.7).lineTo(-7.8,8.6).closePath().moveTo(-7.8,5.3).lineTo(-4.2,5.3).lineTo(-4.2,0.2).lineTo(-7.8,0.2).closePath().moveTo(-7.8,-1.2).lineTo(-4.2,-1.2).lineTo(-4.2,-6.2).lineTo(-7.8,-6.2).closePath().moveTo(-1.2,-1.1).lineTo(0.3,-1.8).lineTo(2.6,2.7).lineTo(1.1,3.5).curveTo(0.3,1.7,-1.2,-1.1).closePath();
	this.shape_18.setTransform(212.5,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FEFEFE").beginStroke().moveTo(1.9,9).lineTo(1.9,-8.8).lineTo(8.8,-8.8).lineTo(8.8,3).curveTo(8.8,5.5,6.3,5.5).lineTo(4.1,5.5).lineTo(3.8,3.8).lineTo(6,4).curveTo(7.3,4,7.3,2.6).lineTo(7.3,-7.4).lineTo(3.4,-7.4).lineTo(3.4,9).closePath().moveTo(-8.8,6.9).curveTo(-8.1,6.2,-8.2,5.4).lineTo(-8.2,-9).lineTo(-0.3,-9).lineTo(-0.3,1).lineTo(-1.8,1).lineTo(-1.8,0.6).lineTo(-6.6,0.6).lineTo(-6.6,5.7).lineTo(-2.5,3.9).lineTo(-4,1.9).lineTo(-2.8,1.1).curveTo(-0.4,3.9,1.1,6.1).lineTo(-0.1,7).lineTo(-1.6,5).lineTo(-6.5,7.3).lineTo(-7.7,8.1).closePath().moveTo(-6.6,-0.8).lineTo(-1.8,-0.8).lineTo(-1.8,-3.6).lineTo(-6.6,-3.6).closePath().moveTo(-6.6,-4.9).lineTo(-1.8,-4.9).lineTo(-1.8,-7.6).lineTo(-6.6,-7.6).closePath();
	this.shape_19.setTransform(191.9,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.5,8.5).curveTo(-2.1,6.6,0.1,3.7).lineTo(1.5,4.6).curveTo(-0.9,7.4,-3.4,9.6).curveTo(-3.9,9,-4.5,8.5).closePath().moveTo(-7.1,9.6).lineTo(-7.1,-1.4).curveTo(-8.1,0.2,-9.1,1.5).lineTo(-9.8,-0.2).curveTo(-6.7,-4.4,-5,-9.6).lineTo(-3.4,-9.1).curveTo(-4.4,-6.5,-5.5,-4.3).lineTo(-5.5,9.6).closePath().moveTo(3.8,4.6).lineTo(4.9,3.6).curveTo(8,6.5,9.8,8.4).lineTo(8.5,9.6).curveTo(6.5,7.2,3.8,4.6).closePath().moveTo(-4.4,3).lineTo(-4.4,1.6).lineTo(-1.1,1.6).lineTo(-1.1,-3.8).lineTo(-3.6,-3.8).lineTo(-3.6,-5.2).lineTo(-1.1,-5.2).lineTo(-1.1,-9.4).lineTo(0.5,-9.4).lineTo(0.5,-5.2).lineTo(4.7,-5.2).lineTo(4.7,-9.5).lineTo(6.3,-9.5).lineTo(6.3,-5.2).lineTo(9.1,-5.2).lineTo(9.1,-3.8).lineTo(6.3,-3.8).lineTo(6.3,1.6).lineTo(9.8,1.6).lineTo(9.8,3).closePath().moveTo(0.5,1.6).lineTo(4.7,1.6).lineTo(4.7,-3.8).lineTo(0.5,-3.8).closePath();
	this.shape_20.setTransform(172,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5,8.7).curveTo(-2.3,6.4,-2,2.1).lineTo(-0.5,2.1).curveTo(-0.5,3.4,-0.8,4.6).curveTo(0.3,6.5,2.3,7.2).lineTo(2.3,1.3).lineTo(-3.7,1.3).lineTo(-3.7,0).lineTo(9.5,0).lineTo(9.5,1.3).lineTo(3.9,1.3).lineTo(3.9,3.5).lineTo(8.7,3.5).lineTo(8.7,4.7).lineTo(3.9,4.7).lineTo(3.9,7.5).curveTo(5.2,7.7,9.7,7.5).lineTo(9.3,8.9).lineTo(4.4,8.9).curveTo(0.5,8.8,-1.3,6.1).curveTo(-2.1,8.1,-3.8,9.6).lineTo(-5,8.7).closePath().moveTo(-9.5,9.3).lineTo(-9.7,7.7).lineTo(-7.9,7.8).curveTo(-7.2,7.8,-7.3,7.1).lineTo(-7.3,1.2).lineTo(-9.5,2.4).lineTo(-9.7,0.7).lineTo(-7.3,-0.5).lineTo(-7.3,-4.6).lineTo(-9.6,-4.6).lineTo(-9.6,-6).lineTo(-7.3,-6).lineTo(-7.3,-9.6).lineTo(-5.8,-9.6).lineTo(-5.8,-6).lineTo(-3.2,-6).lineTo(-3.2,-4.6).lineTo(-5.8,-4.6).lineTo(-5.8,-1.2).lineTo(-3.5,-2.4).lineTo(-3.3,-0.8).lineTo(-5.8,0.4).lineTo(-5.8,7.2).curveTo(-5.8,9.1,-7.2,9.3).lineTo(-8.6,9.3).lineTo(-9.5,9.3).closePath().moveTo(6.4,-1.1).lineTo(6.4,-1.7).lineTo(-0.5,-1.7).lineTo(-0.5,-1.1).lineTo(-2,-1.1).lineTo(-2,-8.8).lineTo(7.7,-8.8).lineTo(7.7,-1.1).closePath().moveTo(-0.5,-2.9).lineTo(6.4,-2.9).lineTo(6.4,-4.6).lineTo(-0.5,-4.6).closePath().moveTo(-0.5,-5.9).lineTo(6.4,-5.9).lineTo(6.4,-7.6).lineTo(-0.5,-7.6).closePath();
	this.shape_21.setTransform(152.1,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FEFEFE").beginStroke().moveTo(0.8,9.4).lineTo(0.4,7.8).lineTo(3.6,7.9).curveTo(5,7.9,5,6.5).lineTo(5,-3.7).lineTo(-1.9,-3.7).lineTo(-1.9,-5.1).lineTo(5,-5.1).lineTo(5,-9.4).lineTo(6.6,-9.4).lineTo(6.6,-5.1).lineTo(9.3,-5.1).lineTo(9.3,-3.7).lineTo(6.6,-3.7).lineTo(6.6,6.9).curveTo(6.6,9.5,4,9.5).lineTo(0.8,9.4).closePath().moveTo(-9.4,8.6).lineTo(-9.4,-7.6).lineTo(-2.6,-7.6).lineTo(-2.6,8.3).lineTo(-4.2,8.3).lineTo(-4.2,6.7).lineTo(-7.8,6.7).lineTo(-7.8,8.6).closePath().moveTo(-7.8,5.3).lineTo(-4.2,5.3).lineTo(-4.2,0.2).lineTo(-7.8,0.2).closePath().moveTo(-7.8,-1.2).lineTo(-4.2,-1.2).lineTo(-4.2,-6.2).lineTo(-7.8,-6.2).closePath().moveTo(-1.2,-1.1).lineTo(0.3,-1.8).lineTo(2.6,2.7).lineTo(1.1,3.5).curveTo(0.3,1.7,-1.2,-1.1).closePath();
	this.shape_22.setTransform(132.5,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.3,8.9).lineTo(-8.3,-9).lineTo(8.3,-9).lineTo(8.3,6.7).curveTo(8.3,8.9,6,8.8).lineTo(2.8,8.8).lineTo(2.5,7.2).curveTo(4.5,7.4,5.7,7.4).curveTo(6.8,7.4,6.8,6.3).lineTo(6.8,-7.5).lineTo(-6.8,-7.5).lineTo(-6.8,8.9).closePath().moveTo(-4.1,5.7).lineTo(-4.1,-1.4).lineTo(4.1,-1.4).lineTo(4.1,4.7).lineTo(-2.7,4.7).lineTo(-2.7,5.7).closePath().moveTo(-2.7,3.3).lineTo(2.7,3.3).lineTo(2.7,-0.1).lineTo(-2.7,-0.1).closePath().moveTo(-5.7,-3.7).lineTo(-5.7,-5.1).lineTo(5.7,-5.1).lineTo(5.7,-3.7).closePath();
	this.shape_23.setTransform(112.1,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.5,2.6).lineTo(-0.3,-2.6).lineTo(1.5,-2.6).lineTo(-0.1,2.6).closePath();
	this.shape_24.setTransform(91.6,7.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.6,9.5).curveTo(-5.2,9.5,-5.2,7.1).lineTo(-5.2,4).lineTo(-3.7,4).lineTo(-3.7,6.9).curveTo(-3.7,8.1,-2.4,8).lineTo(1.9,8).curveTo(3.5,8,3.8,7).lineTo(4.1,4.8).lineTo(5.7,5.4).lineTo(5.2,7.6).curveTo(4.7,9.4,2.3,9.5).closePath().moveTo(-9.9,8).curveTo(-8.9,6.3,-8.1,3.8).lineTo(-6.7,4.3).curveTo(-7.5,6.6,-8.5,8.6).lineTo(-9.9,8).closePath().moveTo(5.9,4.4).lineTo(7.1,3.5).lineTo(9.9,6.9).lineTo(8.6,7.8).curveTo(7.3,6,5.9,4.4).closePath().moveTo(-1.8,3.7).lineTo(-0.7,2.9).lineTo(1.9,5.5).lineTo(0.7,6.5).lineTo(-1.8,3.7).closePath().moveTo(5.4,3.3).lineTo(5.4,2.7).lineTo(-5.7,2.7).lineTo(-5.7,3.3).lineTo(-7.2,3.3).lineTo(-7.2,-7.4).lineTo(-2.4,-7.4).lineTo(-1.8,-9.4).lineTo(-0.2,-9).lineTo(-0.9,-7.4).lineTo(6.9,-7.4).lineTo(6.9,3.3).closePath().moveTo(-5.7,1.3).lineTo(5.4,1.3).lineTo(5.4,-0.3).lineTo(-5.7,-0.3).closePath().moveTo(-5.7,-1.6).lineTo(5.4,-1.6).lineTo(5.4,-3.2).lineTo(-5.7,-3.2).closePath().moveTo(-5.7,-4.5).lineTo(5.4,-4.5).lineTo(5.4,-6.1).lineTo(-5.7,-6.1).closePath();
	this.shape_25.setTransform(72.2,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FEFEFE").beginStroke().moveTo(6.8,9.6).lineTo(6.8,8.5).lineTo(-1.3,8.5).lineTo(-1.3,9.6).lineTo(-2.7,9.6).lineTo(-2.7,2.5).lineTo(8.3,2.5).lineTo(8.3,9.6).closePath().moveTo(-1.3,7.1).lineTo(6.8,7.1).lineTo(6.8,3.9).lineTo(-1.3,3.9).closePath().moveTo(-7.1,9.6).lineTo(-7.1,-1.5).curveTo(-8,0.1,-9,1.4).lineTo(-9.7,-0.2).curveTo(-6.8,-4.4,-5.4,-9.6).lineTo(-3.8,-9.2).curveTo(-4.7,-6.5,-5.7,-4.3).lineTo(-5.7,9.6).closePath().moveTo(-3,0.7).lineTo(-3,-0.6).lineTo(8.5,-0.6).lineTo(8.5,0.7).closePath().moveTo(-3,-2.4).lineTo(-3,-3.8).lineTo(8.5,-3.8).lineTo(8.5,-2.4).closePath().moveTo(-4.1,-5.6).lineTo(-4.1,-6.9).lineTo(2.3,-6.9).lineTo(1.1,-9).lineTo(2.4,-9.6).lineTo(3.8,-7.4).lineTo(2.9,-6.9).lineTo(9.7,-6.9).lineTo(9.7,-5.6).closePath();
	this.shape_26.setTransform(52.1,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.2,9.7).lineTo(5.2,9.1).lineTo(-5.4,9.1).lineTo(-5.4,9.7).lineTo(-6.7,9.7).lineTo(-6.7,5.8).lineTo(6.5,5.8).lineTo(6.5,9.7).closePath().moveTo(-5.4,8.1).lineTo(5.2,8.1).lineTo(5.2,6.8).lineTo(-5.4,6.8).closePath().moveTo(-6.6,4.8).lineTo(-6.6,3.9).lineTo(6.5,3.9).lineTo(6.5,4.8).closePath().moveTo(-6.6,3).lineTo(-6.6,2.1).lineTo(6.4,2.1).lineTo(6.4,3).closePath().moveTo(-9.4,1.2).lineTo(-9.4,0.1).lineTo(-0.1,0.1).lineTo(-0.7,-1.1).lineTo(0.5,-1.6).lineTo(1.3,0.1).lineTo(9.5,0.1).lineTo(9.5,1.2).closePath().moveTo(1.3,-1.3).curveTo(3.1,-2.1,4.3,-2.9).curveTo(3.2,-4,2.6,-5.6).lineTo(1.5,-4).lineTo(0.6,-5.1).curveTo(2.3,-7,3.3,-9.7).lineTo(4.6,-9.4).lineTo(3.8,-7.7).lineTo(9.4,-7.7).lineTo(9.4,-6.7).lineTo(8,-6.7).curveTo(7.4,-4.3,6.2,-3).curveTo(7.5,-2.1,9.5,-1.5).lineTo(8.7,-0.4).curveTo(6.6,-1.1,5.3,-2.1).curveTo(4,-1,2.1,-0.3).lineTo(1.3,-1.3).closePath().moveTo(5.2,-3.7).curveTo(6.2,-4.8,6.7,-6.7).lineTo(3.4,-6.7).curveTo(4,-4.9,5.2,-3.7).closePath().moveTo(-3.7,-0.7).lineTo(-3.9,-1.5).lineTo(-6.5,-1.5).lineTo(-6.5,-0.9).lineTo(-7.6,-0.9).lineTo(-7.6,-4.2).lineTo(-8.8,-2.9).lineTo(-9.5,-3.8).curveTo(-8.1,-5.2,-7.2,-7).lineTo(-6.1,-6.7).lineTo(-6.3,-6.3).lineTo(-0,-6.3).lineTo(-0.3,-2.6).curveTo(-0.4,-0.7,-2.1,-0.6).lineTo(-3.7,-0.7).closePath().moveTo(-7.5,-4.4).lineTo(-2.9,-4.4).lineTo(-2.9,-1.8).lineTo(-2.4,-1.8).curveTo(-1.5,-1.7,-1.5,-2.8).lineTo(-1.3,-5.4).lineTo(-6.8,-5.4).lineTo(-7.5,-4.4).closePath().moveTo(-6.5,-2.3).lineTo(-4,-2.3).lineTo(-4,-3.5).lineTo(-6.5,-3.5).closePath().moveTo(-2.6,-6.8).lineTo(-2.6,-7.5).lineTo(-5.2,-7.5).lineTo(-5.2,-6.8).lineTo(-6.4,-6.8).lineTo(-6.4,-7.5).lineTo(-9.5,-7.5).lineTo(-9.5,-8.5).lineTo(-6.4,-8.5).lineTo(-6.4,-9.7).lineTo(-5.2,-9.7).lineTo(-5.2,-8.5).lineTo(-2.6,-8.5).lineTo(-2.6,-9.7).lineTo(-1.4,-9.7).lineTo(-1.4,-8.5).lineTo(1.5,-8.5).lineTo(1.5,-7.5).lineTo(-1.4,-7.5).lineTo(-1.4,-6.8).closePath();
	this.shape_27.setTransform(32.1,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.3,9.6).lineTo(-2.3,-8.7).lineTo(8.5,-8.7).lineTo(8.3,-5.7).curveTo(8.2,-3.3,5.5,-3.3).lineTo(2.2,-3.3).lineTo(1.9,-4.9).curveTo(4,-4.7,5.3,-4.7).curveTo(6.8,-4.7,6.9,-5.9).lineTo(6.9,-7.3).lineTo(-0.8,-7.3).lineTo(-0.8,-1.7).lineTo(8.6,-1.7).lineTo(8.6,-0.4).curveTo(7.7,3.1,5.4,5.5).curveTo(7.2,7,9.7,7.8).lineTo(8.6,9.3).curveTo(6.1,8.1,4.3,6.5).curveTo(2.5,8,0.1,9.4).lineTo(-0.7,8.1).curveTo(1.6,6.8,3.2,5.5).curveTo(1.2,3.2,0.4,-0.4).lineTo(-0.8,-0.4).lineTo(-0.8,9.6).closePath().moveTo(4.3,4.5).curveTo(6.3,2.4,7,-0.4).lineTo(1.8,-0.4).curveTo(2.4,2.5,4.3,4.5).closePath().moveTo(-9.2,9.2).lineTo(-9.5,7.6).lineTo(-7.7,7.7).curveTo(-6.9,7.7,-6.9,6.7).lineTo(-6.9,1.4).lineTo(-9.5,2.3).lineTo(-9.7,0.6).lineTo(-6.9,-0.2).lineTo(-6.9,-4.4).lineTo(-9.5,-4.4).lineTo(-9.5,-5.8).lineTo(-6.9,-5.8).lineTo(-6.9,-9.6).lineTo(-5.4,-9.6).lineTo(-5.4,-5.8).lineTo(-3.1,-5.8).lineTo(-3.1,-4.4).lineTo(-5.4,-4.4).lineTo(-5.4,-0.6).lineTo(-3.1,-1.4).lineTo(-3.1,0.1).lineTo(-5.4,0.9).lineTo(-5.4,7.1).curveTo(-5.4,9.2,-7.3,9.2).lineTo(-9.2,9.2).closePath();
	this.shape_28.setTransform(12.1,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-5.4,9.4).lineTo(-5.4,0).curveTo(-6.6,2.9,-8.6,5.6).lineTo(-9.3,3.9).curveTo(-7.1,0.9,-5.8,-2.7).lineTo(-9.2,-2.7).lineTo(-9.2,-4).lineTo(-5.4,-4).lineTo(-5.4,-7.1).lineTo(-8.6,-6.7).lineTo(-9,-8).curveTo(-4.9,-8.5,-1.1,-9.4).lineTo(-0.7,-8).lineTo(-4,-7.4).lineTo(-4,-4).lineTo(-0.4,-4).lineTo(-0.4,-2.7).lineTo(-4,-2.7).lineTo(-4,-0.2).lineTo(-3.3,-0.9).lineTo(-0.3,1.9).lineTo(-1.4,3.1).lineTo(-4,0.3).lineTo(-4,9.4).closePath().moveTo(7.7,8.8).lineTo(7.7,6.9).lineTo(2.2,6.9).lineTo(2.2,8.8).lineTo(0.6,8.8).lineTo(0.6,-7.6).lineTo(9.3,-7.6).lineTo(9.3,8.8).closePath().moveTo(2.2,5.5).lineTo(7.7,5.5).lineTo(7.7,-6.1).lineTo(2.2,-6.1).closePath();
	this.shape_29.setTransform(-8.3,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.5).curveTo(-3.8,6.7,-2.8,3).lineTo(-8.2,3).lineTo(-8.2,1.6).lineTo(-2.5,1.6).lineTo(-2.3,-0.5).lineTo(-0.6,-0.5).lineTo(-1,1.6).lineTo(6.9,1.6).lineTo(6.6,6.5).curveTo(6.3,9.3,3.3,9.3).lineTo(-0.2,9.2).lineTo(-0.5,7.6).lineTo(3.2,7.8).curveTo(4.9,7.8,5.1,6.1).lineTo(5.3,3).lineTo(-1.2,3).curveTo(-2.2,7.7,-8.5,9.8).lineTo(-9.4,8.5).closePath().moveTo(-9.9,-0.5).curveTo(-5,-1.3,-1.4,-2.7).curveTo(-3.6,-4,-5,-5.9).curveTo(-6.5,-4.1,-8.3,-2.6).lineTo(-9.4,-3.6).curveTo(-5.8,-6.5,-4.1,-9.8).lineTo(-2.6,-9.2).lineTo(-3.5,-7.8).lineTo(7,-7.8).lineTo(7,-6.5).curveTo(5.3,-4.3,2.1,-2.6).curveTo(5.4,-1.4,9.9,-1.1).lineTo(8.8,0.5).curveTo(3.7,-0.2,0.3,-1.8).curveTo(-3.6,-0.1,-9.1,0.8).lineTo(-9.9,-0.5).closePath().moveTo(0.3,-3.4).curveTo(3.1,-4.7,4.9,-6.5).lineTo(-3.8,-6.5).curveTo(-2.2,-4.6,0.3,-3.4).closePath();
	this.shape_30.setTransform(-27.9,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6.8,9.6).lineTo(-6.8,-1.8).curveTo(-7.9,-0,-9.1,1.5).lineTo(-9.8,-0.2).curveTo(-6.7,-4.3,-5,-9.6).lineTo(-3.5,-9).curveTo(-4.3,-6.7,-5.3,-4.7).lineTo(-5.3,9.6).closePath().moveTo(-3.3,8.4).lineTo(-3.3,7).lineTo(2.4,7).lineTo(2.4,0.8).lineTo(-3.7,0.8).lineTo(-3.7,-0.7).lineTo(2.4,-0.7).lineTo(2.4,-6.5).lineTo(-2.7,-6.2).lineTo(-3,-7.7).curveTo(3.6,-8.1,8.7,-8.6).lineTo(8.9,-7.1).lineTo(4,-6.6).lineTo(4,-0.7).lineTo(9.7,-0.7).lineTo(9.7,0.8).lineTo(4,0.8).lineTo(4,7).lineTo(9.5,7).lineTo(9.5,8.4).closePath();
	this.shape_31.setTransform(-47.9,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.3,8.2).curveTo(-5.4,5.6,-4.3,3.3).curveTo(-3.2,1.2,-2.9,-4.4).lineTo(-8.6,-4.4).lineTo(-8.6,-6).lineTo(-2.9,-6).lineTo(-2.8,-9.5).lineTo(-1.1,-9.5).lineTo(-1.2,-6).lineTo(6,-6).lineTo(5.6,5.1).curveTo(5.4,9,2.3,9).lineTo(-1.5,8.9).lineTo(-1.7,7.1).curveTo(0.4,7.3,2,7.3).curveTo(3.9,7.2,4.1,4.7).lineTo(4.4,-4.4).lineTo(-1.3,-4.4).curveTo(-1.6,1.7,-2.9,4.2).curveTo(-4.2,6.9,-8.3,9.5).lineTo(-9.3,8.2).closePath().moveTo(-9.7,3.1).curveTo(-8.1,0.4,-7,-2.7).lineTo(-5.4,-2.1).curveTo(-6.7,0.9,-8.2,3.8).lineTo(-9.7,3.1).closePath().moveTo(6.2,-2.1).lineTo(7.7,-2.5).lineTo(9.7,2.7).lineTo(8.1,3.3).curveTo(7.3,0.6,6.2,-2.1).closePath();
	this.shape_32.setTransform(-67.9,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6.8,9.6).lineTo(-6.8,-1.9).curveTo(-8,-0,-9.1,1.5).lineTo(-9.8,-0.3).curveTo(-6.8,-4.3,-5,-9.6).lineTo(-3.4,-9.1).curveTo(-4.3,-6.8,-5.2,-4.9).lineTo(-5.2,9.6).closePath().moveTo(3.8,7.5).curveTo(1.5,4.9,0.7,-1.9).lineTo(-3.9,-1.3).lineTo(-4.1,-2.8).lineTo(0.5,-3.3).curveTo(0.2,-5.8,0.2,-9.5).lineTo(1.9,-9.5).curveTo(1.8,-6.6,2.1,-3.5).lineTo(9.3,-4.3).lineTo(9.4,-2.9).lineTo(2.3,-2.1).curveTo(3.4,6.1,6.5,7.7).curveTo(7.4,8,7.6,7.1).curveTo(8,5.7,8.2,4).lineTo(9.8,4.5).curveTo(9.5,6.4,9.1,7.8).curveTo(8.6,9.5,7,9.5).curveTo(5.3,9.5,3.8,7.5).closePath().moveTo(3.6,-7.9).lineTo(4.7,-9).curveTo(6.4,-7.7,8.2,-6.1).lineTo(7,-4.9).curveTo(5.3,-6.5,3.6,-7.9).closePath();
	this.shape_33.setTransform(-88,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.4,-1.2).lineTo(-1.3,-2.2).curveTo(1,-0.3,2.4,1.1).lineTo(1.2,2.3).curveTo(-0.5,0.5,-2.4,-1.2).closePath();
	this.shape_34.setTransform(-114.2,7.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.5).curveTo(-3.8,6.7,-2.8,3).lineTo(-8.2,3).lineTo(-8.2,1.6).lineTo(-2.5,1.6).lineTo(-2.2,-0.5).lineTo(-0.6,-0.5).lineTo(-1,1.6).lineTo(6.9,1.6).lineTo(6.6,6.5).curveTo(6.3,9.3,3.3,9.3).lineTo(-0.2,9.2).lineTo(-0.4,7.6).lineTo(3.2,7.8).curveTo(4.9,7.8,5.1,6.1).lineTo(5.3,3).lineTo(-1.2,3).curveTo(-2.2,7.7,-8.5,9.8).lineTo(-9.4,8.5).closePath().moveTo(-9.9,-0.5).curveTo(-5,-1.3,-1.4,-2.7).curveTo(-3.6,-4,-4.9,-5.9).curveTo(-6.5,-4.1,-8.3,-2.6).lineTo(-9.4,-3.6).curveTo(-5.8,-6.5,-4,-9.8).lineTo(-2.6,-9.2).lineTo(-3.5,-7.8).lineTo(7,-7.8).lineTo(7,-6.5).curveTo(5.3,-4.3,2.1,-2.6).curveTo(5.4,-1.4,9.9,-1.1).lineTo(8.8,0.5).curveTo(3.7,-0.2,0.3,-1.8).curveTo(-3.6,-0.1,-9.1,0.8).lineTo(-9.9,-0.5).closePath().moveTo(0.3,-3.4).curveTo(3.1,-4.7,5,-6.5).lineTo(-3.8,-6.5).curveTo(-2.2,-4.6,0.3,-3.4).closePath();
	this.shape_35.setTransform(-127.9,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-4.4,9.5).lineTo(-4.6,7.9).curveTo(-3.1,8.1,-1.9,8.1).curveTo(-0.7,8.1,-0.7,6.9).lineTo(-0.7,6).lineTo(-8.4,6).lineTo(-8.4,4.8).lineTo(-0.7,4.8).lineTo(-0.7,3.4).lineTo(-9.6,3.4).lineTo(-9.6,2.2).lineTo(-0.7,2.2).lineTo(-0.7,0.7).lineTo(-8.4,0.7).lineTo(-8.4,-0.5).lineTo(-0.7,-0.5).lineTo(-0.7,-1.8).lineTo(-5.7,-1.8).lineTo(-5.7,-1.3).lineTo(-7.1,-1.3).lineTo(-7.1,-5.5).lineTo(-0.7,-5.5).lineTo(-0.7,-6.8).lineTo(-9.6,-6.8).lineTo(-9.6,-8).lineTo(-0.7,-8).lineTo(-0.7,-9.5).lineTo(0.7,-9.5).lineTo(0.7,-8).lineTo(9.4,-8).lineTo(9.4,-6.8).lineTo(0.7,-6.8).lineTo(0.7,-5.5).lineTo(7,-5.5).lineTo(7,-1.3).lineTo(5.6,-1.3).lineTo(5.6,-1.8).lineTo(0.7,-1.8).lineTo(0.7,-0.5).lineTo(7.4,-0.5).lineTo(7.4,2.2).lineTo(9.6,2.2).lineTo(9.6,3.4).lineTo(7.4,3.4).lineTo(7.4,6.9).lineTo(6,6.9).lineTo(6,6).lineTo(0.7,6).lineTo(0.7,7.2).curveTo(0.7,9.5,-1.6,9.5).lineTo(-4.4,9.5).closePath().moveTo(0.7,4.8).lineTo(6,4.8).lineTo(6,3.4).lineTo(0.7,3.4).closePath().moveTo(0.7,2.2).lineTo(6,2.2).lineTo(6,0.7).lineTo(0.7,0.7).closePath().moveTo(0.7,-2.9).lineTo(5.6,-2.9).lineTo(5.6,-4.4).lineTo(0.7,-4.4).closePath().moveTo(-5.7,-2.9).lineTo(-0.7,-2.9).lineTo(-0.7,-4.4).lineTo(-5.7,-4.4).closePath();
	this.shape_36.setTransform(-147.8,0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.3,8.2).curveTo(-5.4,5.6,-4.3,3.3).curveTo(-3.2,1.2,-2.9,-4.4).lineTo(-8.6,-4.4).lineTo(-8.6,-6).lineTo(-2.9,-6).lineTo(-2.8,-9.5).lineTo(-1.1,-9.5).lineTo(-1.2,-6).lineTo(6,-6).lineTo(5.6,5.1).curveTo(5.4,9,2.3,9).lineTo(-1.5,8.9).lineTo(-1.7,7.1).curveTo(0.4,7.3,2,7.3).curveTo(3.9,7.2,4.1,4.7).lineTo(4.4,-4.4).lineTo(-1.3,-4.4).curveTo(-1.6,1.7,-2.9,4.2).curveTo(-4.2,6.9,-8.3,9.5).lineTo(-9.3,8.2).closePath().moveTo(-9.7,3.1).curveTo(-8.1,0.4,-7,-2.7).lineTo(-5.4,-2.1).curveTo(-6.7,0.9,-8.2,3.8).lineTo(-9.7,3.1).closePath().moveTo(6.2,-2.1).lineTo(7.7,-2.5).lineTo(9.7,2.7).lineTo(8.1,3.3).curveTo(7.3,0.6,6.2,-2.1).closePath();
	this.shape_37.setTransform(-167.9,0.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6.8,9.6).lineTo(-6.8,-1.9).curveTo(-8,-0,-9.1,1.5).lineTo(-9.8,-0.3).curveTo(-6.8,-4.3,-5,-9.6).lineTo(-3.4,-9.1).curveTo(-4.3,-6.8,-5.2,-4.9).lineTo(-5.2,9.6).closePath().moveTo(3.8,7.5).curveTo(1.5,4.9,0.7,-1.9).lineTo(-3.9,-1.3).lineTo(-4.1,-2.8).lineTo(0.5,-3.3).curveTo(0.2,-5.8,0.2,-9.5).lineTo(1.9,-9.5).curveTo(1.8,-6.6,2.1,-3.5).lineTo(9.3,-4.3).lineTo(9.4,-2.9).lineTo(2.3,-2.1).curveTo(3.4,6.1,6.5,7.7).curveTo(7.4,8,7.6,7.1).curveTo(8,5.7,8.2,4).lineTo(9.8,4.5).curveTo(9.5,6.4,9.1,7.8).curveTo(8.6,9.5,7,9.5).curveTo(5.3,9.5,3.8,7.5).closePath().moveTo(3.6,-7.9).lineTo(4.7,-9).curveTo(6.4,-7.7,8.2,-6.1).lineTo(7,-4.9).curveTo(5.3,-6.5,3.6,-7.9).closePath();
	this.shape_38.setTransform(-188,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.4,-1.2).lineTo(-1.4,-2.2).curveTo(1,-0.3,2.4,1.1).lineTo(1.2,2.3).curveTo(-0.4,0.5,-2.4,-1.2).closePath();
	this.shape_39.setTransform(-214.2,7.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.4,9.6).lineTo(5.4,8.5).lineTo(-5.4,8.5).lineTo(-5.4,9.6).lineTo(-6.9,9.6).lineTo(-6.9,1.7).lineTo(6.9,1.7).lineTo(6.9,9.6).closePath().moveTo(-5.4,7.1).lineTo(5.4,7.1).lineTo(5.4,3.1).lineTo(-5.4,3.1).closePath().moveTo(-9.5,-0.4).lineTo(-9.5,-1.9).lineTo(-0.3,-1.9).lineTo(-0.3,-5).lineTo(-5.6,-5).curveTo(-6.4,-3.5,-7.3,-2.2).lineTo(-8.7,-3.1).curveTo(-6.6,-6,-5.6,-9.2).lineTo(-4,-8.7).lineTo(-4.9,-6.5).lineTo(-0.3,-6.5).lineTo(-0.3,-9.5).lineTo(1.3,-9.5).lineTo(1.3,-6.5).lineTo(8,-6.5).lineTo(8,-5).lineTo(1.3,-5).lineTo(1.3,-1.9).lineTo(9.5,-1.9).lineTo(9.5,-0.4).closePath();
	this.shape_40.setTransform(-227.8,0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.1,7.5).lineTo(-5.5,8.1).lineTo(-7.3,8.4).lineTo(-8.1,6.8).curveTo(-7.2,6.5,-6.4,5.7).curveTo(-4.2,3.1,-1.5,-2.1).lineTo(0.2,-1.3).curveTo(-2.3,2.8,-5,6.5).lineTo(4.2,6.1).lineTo(1.7,2.6).lineTo(2.9,1.8).curveTo(5.8,5.4,7.7,8.3).lineTo(6.2,9.3).lineTo(5.1,7.5).closePath().moveTo(-9.8,-0.7).curveTo(-5.4,-4.3,-3.3,-9).lineTo(-1.7,-8.5).curveTo(-4.3,-2.9,-8.5,0.5).curveTo(-9,-0.1,-9.8,-0.7).closePath().moveTo(1.2,-8.8).lineTo(2.7,-9.4).curveTo(4.6,-4.3,9.8,-1.3).lineTo(8.6,0.2).curveTo(3.2,-3.5,1.2,-8.8).closePath();
	this.shape_41.setTransform(-247.9,0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.3).curveTo(-5.7,5.3,-5.2,0.5).lineTo(-9,0.5).lineTo(-9,-0.8).lineTo(-5,-0.8).lineTo(-4.9,-5.4).lineTo(-6.6,-5.4).curveTo(-7.2,-3.7,-7.8,-2.4).lineTo(-9.3,-3).curveTo(-7.7,-5.9,-6.8,-9.7).lineTo(-5.3,-9.3).lineTo(-6.1,-6.8).lineTo(-0.1,-6.8).lineTo(-0.1,-5.4).lineTo(-3.3,-5.4).lineTo(-3.5,-0.8).lineTo(0.3,-0.8).lineTo(0.3,0.5).lineTo(-3.6,0.5).lineTo(-3.7,1.5).lineTo(0.5,6.5).lineTo(-0.8,7.5).lineTo(-4.1,3.4).curveTo(-5.2,7.1,-8.3,9.7).lineTo(-9.4,8.3).closePath().moveTo(7.8,9.2).lineTo(7.8,7.2).lineTo(2.6,7.2).lineTo(2.6,9.2).lineTo(1.1,9.2).lineTo(1.1,-7.4).lineTo(9.4,-7.4).lineTo(9.4,9.2).closePath().moveTo(2.6,5.8).lineTo(7.8,5.8).lineTo(7.8,-6).lineTo(2.6,-6).closePath();
	this.shape_42.setTransform(-268.4,0.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,7.6).lineTo(-7.2,5.3).lineTo(-7.2,-1.3).lineTo(-9.6,-1.3).lineTo(-9.6,-2.7).lineTo(-5.7,-2.7).lineTo(-5.7,5.6).curveTo(-4.5,7.5,-1.7,7.5).lineTo(3.2,7.6).lineTo(9.7,7.5).lineTo(9.2,9).lineTo(2.7,9).lineTo(-1.9,9).curveTo(-5.3,8.9,-6.6,6.6).curveTo(-7.4,7.4,-8.9,9.3).closePath().moveTo(4,6.5).lineTo(3.8,5).lineTo(5.9,5.1).curveTo(6.9,5.1,6.9,4.1).lineTo(6.9,3.1).lineTo(3.2,3.1).lineTo(3.2,6.2).lineTo(1.8,6.2).lineTo(1.8,3.1).lineTo(-1.9,3.1).lineTo(-1.9,6.5).lineTo(-3.3,6.5).lineTo(-3.3,-4.5).lineTo(1.5,-4.5).lineTo(-1.6,-6).lineTo(-0.8,-7).lineTo(2.1,-5.5).lineTo(5.6,-7.3).lineTo(-3.6,-7.3).lineTo(-3.6,-8.6).lineTo(8.2,-8.6).lineTo(8.2,-7.3).lineTo(3.5,-4.8).lineTo(4.1,-4.5).lineTo(8.3,-4.5).lineTo(8.3,4.3).curveTo(8.3,6.6,6.3,6.5).lineTo(4,6.5).closePath().moveTo(3.2,1.9).lineTo(6.9,1.9).lineTo(6.9,-0).lineTo(3.2,-0).closePath().moveTo(-1.9,1.9).lineTo(1.8,1.9).lineTo(1.8,-0).lineTo(-1.9,-0).closePath().moveTo(3.2,-1.3).lineTo(6.9,-1.3).lineTo(6.9,-3.3).lineTo(3.2,-3.3).closePath().moveTo(-1.9,-1.3).lineTo(1.8,-1.3).lineTo(1.8,-3.3).lineTo(-1.9,-3.3).closePath().moveTo(-8.5,-8.4).lineTo(-7.3,-9.3).lineTo(-4.6,-5.6).lineTo(-6,-4.6).curveTo(-7.5,-7.1,-8.5,-8.4).closePath();
	this.shape_43.setTransform(-287.9,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-8.9,9.5).lineTo(-8.9,-6.2).lineTo(-6.9,-6.2).lineTo(-5.7,-9.5).lineTo(-4.1,-9).lineTo(-5.3,-6.2).lineTo(-1.4,-6.2).lineTo(-1.4,9.3).lineTo(-3,9.3).lineTo(-3,7.8).lineTo(-7.3,7.8).lineTo(-7.3,9.5).closePath().moveTo(-7.3,6.3).lineTo(-3,6.3).lineTo(-3,1.4).lineTo(-7.3,1.4).closePath().moveTo(-7.3,-0).lineTo(-3,-0).lineTo(-3,-4.7).lineTo(-7.3,-4.7).closePath().moveTo(1.7,9.3).lineTo(1.4,7.6).lineTo(1.4,7.6).curveTo(3.4,7.8,5,7.8).curveTo(6.8,7.8,6.9,6).curveTo(7.1,3.1,7.2,-4.8).lineTo(2,-4.8).curveTo(1.2,-2.9,0.2,-1.5).curveTo(-0.3,-1.9,-1.1,-2.2).curveTo(0.7,-5.1,2,-9.5).lineTo(3.6,-9).lineTo(2.6,-6.3).lineTo(8.9,-6.3).lineTo(8.5,6.4).curveTo(8.4,9.4,5.3,9.4).lineTo(1.7,9.3).closePath().moveTo(0.6,-0.9).lineTo(1.8,-1.8).curveTo(4,0.8,5.3,2.7).lineTo(3.8,3.7).curveTo(2.4,1.4,0.6,-0.9).closePath();
	this.shape_44.setTransform(-307.9,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#FEFEFE").beginStroke().moveTo(2.9,9.5).lineTo(2.9,2.7).lineTo(-3.9,2.7).lineTo(-3.9,1.3).lineTo(2.9,1.3).lineTo(2.9,-3.6).lineTo(-0.8,-3.6).curveTo(-1.6,-1.5,-2.6,0.1).lineTo(-3.8,-0.9).curveTo(-2,-4.2,-1.1,-8.2).lineTo(0.5,-7.8).lineTo(-0.3,-5).lineTo(2.9,-5).lineTo(2.9,-9.5).lineTo(4.5,-9.5).lineTo(4.5,-5).lineTo(9.1,-5).lineTo(9.1,-3.6).lineTo(4.5,-3.6).lineTo(4.5,1.3).lineTo(9.8,1.3).lineTo(9.8,2.7).lineTo(4.5,2.7).lineTo(4.5,9.5).closePath().moveTo(-6.9,9.5).lineTo(-6.9,-1.6).curveTo(-7.9,0.3,-9.1,1.8).curveTo(-9.3,1,-9.8,0.1).curveTo(-7.1,-3.9,-5.4,-9.5).lineTo(-3.8,-9.1).curveTo(-4.5,-6.8,-5.4,-4.8).lineTo(-5.4,9.5).closePath();
	this.shape_45.setTransform(-327.9,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.8,9.1).lineTo(-3.8,7.7).lineTo(-1.5,7.7).lineTo(-1.5,-8).lineTo(7.9,-8).lineTo(7.9,7.7).lineTo(9.7,7.7).lineTo(9.7,9.1).closePath().moveTo(-0,7.7).lineTo(6.4,7.7).lineTo(6.4,3.8).lineTo(-0,3.8).closePath().moveTo(-0,2.5).lineTo(6.4,2.5).lineTo(6.4,-1.4).lineTo(-0,-1.4).closePath().moveTo(-0,-2.7).lineTo(6.4,-2.7).lineTo(6.4,-6.6).lineTo(-0,-6.6).closePath().moveTo(-9.5,6.6).lineTo(-2.7,5.2).lineTo(-2.8,6.6).curveTo(-6.9,7.5,-9.1,8.1).closePath().moveTo(-9.1,2.3).curveTo(-7.9,1.4,-6.1,-1.7).lineTo(-9.3,-1.5).lineTo(-9.7,-2.8).curveTo(-8.1,-4.6,-6.3,-9.1).lineTo(-4.7,-8.5).curveTo(-6.4,-5.3,-7.9,-2.9).lineTo(-5.4,-2.9).lineTo(-3.7,-6.1).lineTo(-2.2,-5.4).curveTo(-4.4,-1.5,-7,2.2).lineTo(-2.9,1.6).lineTo(-3,3).lineTo(-8.8,3.8).closePath();
	this.shape_46.setTransform(-347.8,-0.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9,7.8).curveTo(-7.8,6,-7.3,3.8).curveTo(-6.9,1.7,-6.9,-2.2).lineTo(-6.9,-9.1).lineTo(9,-9.1).lineTo(9,6.4).curveTo(9,8.7,6.8,8.7).lineTo(3.8,8.7).lineTo(3.5,7).lineTo(6.3,7.2).curveTo(7.5,7.2,7.5,6).lineTo(7.5,2.4).lineTo(1.7,2.4).lineTo(1.7,8.6).lineTo(0.2,8.6).lineTo(0.2,2.4).lineTo(-5.5,2.4).curveTo(-5.8,6.5,-7.9,9.1).lineTo(-9,7.8).closePath().moveTo(1.7,1).lineTo(7.5,1).lineTo(7.5,-2.6).lineTo(1.7,-2.6).closePath().moveTo(-5.4,1).lineTo(0.2,1).lineTo(0.2,-2.6).lineTo(-5.3,-2.6).curveTo(-5.3,-0.8,-5.4,1).closePath().moveTo(1.7,-4.1).lineTo(7.5,-4.1).lineTo(7.5,-7.7).lineTo(1.7,-7.7).closePath().moveTo(-5.3,-4.1).lineTo(0.2,-4.1).lineTo(0.2,-7.7).lineTo(-5.3,-7.7).closePath();
	this.shape_47.setTransform(-368.4,1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,8.4).curveTo(-7.4,5.8,-7.4,-0.6).lineTo(-7.4,-6.9).lineTo(0.9,-6.9).lineTo(-0.5,-9).lineTo(0.9,-9.7).curveTo(1.7,-8.7,2.5,-7.4).lineTo(1.5,-6.9).lineTo(9.5,-6.9).lineTo(9.5,-5.4).lineTo(-5.7,-5.4).lineTo(-5.7,-0.6).curveTo(-5.8,6.3,-8.6,9.7).lineTo(-9.7,8.4).closePath().moveTo(-5.8,8.6).lineTo(-5.8,7.1).lineTo(3.2,7.1).curveTo(4.7,3.2,6.4,-3.6).lineTo(8.1,-3.1).curveTo(6.3,3.4,4.9,7.1).lineTo(9.7,7.1).lineTo(9.7,8.6).closePath().moveTo(-4.8,-2.5).lineTo(-3.3,-3).curveTo(-2.1,0.6,-1,5).lineTo(-2.7,5.5).curveTo(-3.5,1.6,-4.8,-2.5).closePath().moveTo(-0.1,-3.5).lineTo(1.4,-3.9).curveTo(2.5,-0.4,3.2,4).lineTo(1.5,4.4).curveTo(0.9,0.6,-0.1,-3.5).closePath();
	this.shape_48.setTransform(-388.1,0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.4,8.5).curveTo(-3.8,6.7,-2.8,3).lineTo(-8.2,3).lineTo(-8.2,1.6).lineTo(-2.5,1.6).lineTo(-2.2,-0.5).lineTo(-0.6,-0.5).lineTo(-1,1.6).lineTo(6.9,1.6).lineTo(6.6,6.5).curveTo(6.3,9.3,3.3,9.3).lineTo(-0.2,9.2).lineTo(-0.4,7.6).lineTo(3.3,7.8).curveTo(4.9,7.8,5.1,6.1).lineTo(5.3,3).lineTo(-1.2,3).curveTo(-2.2,7.7,-8.4,9.8).lineTo(-9.4,8.5).closePath().moveTo(-9.9,-0.5).curveTo(-5,-1.3,-1.4,-2.7).curveTo(-3.6,-4,-4.9,-5.9).curveTo(-6.5,-4.1,-8.3,-2.6).lineTo(-9.4,-3.6).curveTo(-5.8,-6.5,-4,-9.8).lineTo(-2.6,-9.2).lineTo(-3.5,-7.8).lineTo(7,-7.8).lineTo(7,-6.5).curveTo(5.2,-4.3,2.1,-2.6).curveTo(5.3,-1.4,9.9,-1.1).lineTo(8.8,0.5).curveTo(3.7,-0.2,0.3,-1.8).curveTo(-3.6,-0.1,-9.1,0.8).lineTo(-9.9,-0.5).closePath().moveTo(0.3,-3.4).curveTo(3.1,-4.7,5,-6.5).lineTo(-3.8,-6.5).curveTo(-2.2,-4.6,0.3,-3.4).closePath();
	this.shape_49.setTransform(-407.9,0.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.7,8.8).lineTo(-9.7,7.3).lineTo(-3.4,7.3).lineTo(-3.4,-8.8).lineTo(-1.7,-8.8).lineTo(-1.7,7.3).lineTo(1.7,7.3).lineTo(1.7,-8.8).lineTo(3.4,-8.8).lineTo(3.4,7.3).lineTo(9.7,7.3).lineTo(9.7,8.8).closePath().moveTo(4.1,3.2).curveTo(6,-0.9,7.3,-4.8).lineTo(8.9,-4.2).curveTo(7.1,0.5,5.4,3.9).closePath().moveTo(-8.8,-4.4).lineTo(-7.3,-5).curveTo(-5.8,-1.2,-4.3,3).lineTo(-5.8,3.8).curveTo(-7.1,-0.4,-8.8,-4.4).closePath();
	this.shape_50.setTransform(-427.9,-0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#FEFEFE").beginStroke().moveTo(5.3,9.6).lineTo(5.3,8.5).lineTo(-5.1,8.5).lineTo(-5.1,9.6).lineTo(-6.5,9.6).lineTo(-6.5,1.9).lineTo(6.7,1.9).lineTo(6.7,9.6).closePath().moveTo(-5.1,7.1).lineTo(5.3,7.1).lineTo(5.3,3.3).lineTo(-5.1,3.3).closePath().moveTo(-9.9,0.7).curveTo(-5,-0.1,-1.4,-1.8).curveTo(-3.6,-3.3,-5.1,-5.5).curveTo(-6.4,-3.6,-8.2,-2).lineTo(-9.3,-3.1).curveTo(-6,-6,-4.3,-9.6).lineTo(-2.7,-9.1).lineTo(-3.6,-7.5).lineTo(7.1,-7.5).lineTo(7.1,-6.1).curveTo(5.1,-3.6,1.9,-1.7).curveTo(5.3,-0.3,9.9,0).lineTo(8.9,1.8).curveTo(3.7,1,0.2,-0.8).curveTo(-3.7,1.1,-9,2.2).lineTo(-9.9,0.7).closePath().moveTo(0.2,-2.5).curveTo(3,-4,5,-6.1).lineTo(-3.8,-6.1).curveTo(-2.2,-4,0.2,-2.5).closePath();
	this.shape_51.setTransform(-447.9,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-6.8,9.5).lineTo(-6.8,0.9).lineTo(6.8,0.9).lineTo(6.8,9.5).lineTo(5.2,9.5).lineTo(5.2,8.2).lineTo(-5.2,8.2).lineTo(-5.2,9.5).closePath().moveTo(-5.2,6.8).lineTo(5.2,6.8).lineTo(5.2,2.2).lineTo(-5.2,2.2).closePath().moveTo(-9.7,-2.3).curveTo(-3.7,-5.3,-0.6,-9.6).lineTo(1.5,-9.6).lineTo(1.1,-9).curveTo(4.4,-4.7,9.7,-2.6).lineTo(8.7,-1.1).curveTo(7.2,-1.8,5.7,-2.7).lineTo(5.7,-1.6).lineTo(-5.7,-1.6).lineTo(-5.7,-2.6).lineTo(-8.7,-0.8).lineTo(-9.7,-2.3).closePath().moveTo(-5.1,-3.1).lineTo(5.3,-3.1).curveTo(2.3,-5,0.1,-7.8).curveTo(-2,-5.3,-5.1,-3.1).closePath();
	this.shape_52.setTransform(-467.9,0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-9.5,9.3).lineTo(-9.5,8.1).lineTo(-6,8.1).lineTo(-6,4.5).lineTo(-4.6,4.5).lineTo(-4.6,8.1).lineTo(-0.5,8.1).lineTo(-0.5,3.6).lineTo(-8.2,3.6).lineTo(-8.2,2.4).lineTo(8.2,2.4).lineTo(8.2,3.6).lineTo(0.9,3.6).lineTo(0.9,5.1).lineTo(7.3,5.1).lineTo(7.3,6.4).lineTo(0.9,6.4).lineTo(0.9,8.1).lineTo(9.6,8.1).lineTo(9.6,9.3).closePath().moveTo(-9.8,1.1).curveTo(-7.3,0,-5.3,-1.8).lineTo(-7.1,-1.8).lineTo(-7.1,-1.3).lineTo(-8.3,-1.3).lineTo(-8.3,-5.5).lineTo(-4.8,-5.5).lineTo(-4.8,-6.7).lineTo(-9.1,-6.7).lineTo(-9.1,-7.9).lineTo(-4.8,-7.9).lineTo(-4.8,-9.2).lineTo(-3.5,-9.2).lineTo(-3.5,-7.9).lineTo(0.8,-7.9).lineTo(0.8,-6.7).lineTo(-3.5,-6.7).lineTo(-3.5,-5.5).lineTo(0.1,-5.5).lineTo(0.1,-1.3).lineTo(-1.2,-1.3).lineTo(-1.2,-1.8).lineTo(-3.5,-1.8).lineTo(-3.5,-0.6).lineTo(-3,-1.3).lineTo(0.3,0.4).lineTo(-0.3,1.5).curveTo(-2,0.5,-3.5,-0.2).lineTo(-3.5,1.9).lineTo(-4.8,1.9).lineTo(-4.8,-0.9).curveTo(-6.6,0.8,-9,2.2).lineTo(-9.8,1.1).closePath().moveTo(-3.5,-2.9).lineTo(-1.2,-2.9).lineTo(-1.2,-4.4).lineTo(-3.5,-4.4).closePath().moveTo(-7.1,-2.9).lineTo(-4.8,-2.9).lineTo(-4.8,-4.4).lineTo(-7.1,-4.4).closePath().moveTo(0.6,0.8).curveTo(2.7,0,4.2,-1.2).curveTo(3,-2.5,2.4,-4.3).lineTo(1.4,-2.7).lineTo(0.3,-3.5).curveTo(2.1,-6,3.1,-9.3).lineTo(4.5,-8.9).lineTo(3.7,-7).lineTo(9.6,-7).lineTo(9.6,-5.7).lineTo(8.4,-5.7).curveTo(7.7,-3,6.3,-1.2).curveTo(7.7,-0.3,9.8,0.3).lineTo(8.9,1.8).curveTo(6.7,1,5.2,-0.2).curveTo(3.7,1.1,1.5,2.1).lineTo(0.6,0.8).closePath().moveTo(5.2,-2.1).curveTo(6.5,-3.6,7,-5.7).lineTo(3.3,-5.7).curveTo(3.8,-3.6,5.2,-2.1).closePath();
	this.shape_53.setTransform(-488,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.9,9.4).curveTo(-4.7,9.3,-4.7,6.4).lineTo(-4.7,-5.4).lineTo(-3.1,-5.4).lineTo(-3.1,6).curveTo(-3.1,7.8,-1.5,7.8).lineTo(2.7,7.8).curveTo(4.3,7.8,4.6,6.4).lineTo(4.9,3.4).lineTo(6.6,4.1).lineTo(6.1,7.1).curveTo(5.5,9.4,3,9.4).closePath().moveTo(-9.7,4.6).curveTo(-8.5,0.9,-7.6,-3.3).lineTo(-6.1,-2.9).curveTo(-6.9,1.3,-8.1,5.2).closePath().moveTo(4.8,-3.2).lineTo(6.3,-4).curveTo(7.9,-0.8,9.8,3.2).lineTo(8.2,4).curveTo(6.6,0.3,4.8,-3.2).closePath().moveTo(-1.8,-8.6).lineTo(-0.4,-9.4).curveTo(1.4,-6.3,2.7,-3.8).lineTo(1.1,-3).curveTo(-0.2,-5.9,-1.8,-8.6).closePath();
	this.shape_54.setTransform(-507.8,-0.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.9,9.7).lineTo(-0.9,2.4).lineTo(-6.8,2.4).lineTo(-6.8,3.5).lineTo(-8.4,3.5).lineTo(-8.4,-5.4).lineTo(-0.9,-5.4).lineTo(-0.9,-9.7).lineTo(0.8,-9.7).lineTo(0.8,-5.4).lineTo(8.4,-5.4).lineTo(8.4,3.5).lineTo(6.8,3.5).lineTo(6.8,2.4).lineTo(0.8,2.4).lineTo(0.8,9.7).closePath().moveTo(0.8,1).lineTo(6.8,1).lineTo(6.8,-4).lineTo(0.8,-4).closePath().moveTo(-6.8,1).lineTo(-0.9,1).lineTo(-0.9,-4).lineTo(-6.8,-4).closePath();
	this.shape_55.setTransform(-527.8,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.6,9.5).curveTo(-5.2,9.5,-5.2,7.1).lineTo(-5.2,4).lineTo(-3.7,4).lineTo(-3.7,6.9).curveTo(-3.7,8.1,-2.4,8).lineTo(1.9,8).curveTo(3.5,8,3.8,7).lineTo(4.1,4.8).lineTo(5.7,5.4).lineTo(5.2,7.6).curveTo(4.7,9.4,2.3,9.5).closePath().moveTo(-9.9,8).curveTo(-8.9,6.3,-8.1,3.8).lineTo(-6.7,4.3).curveTo(-7.5,6.6,-8.5,8.6).lineTo(-9.9,8).closePath().moveTo(5.9,4.4).lineTo(7.1,3.5).lineTo(9.9,6.9).lineTo(8.6,7.8).curveTo(7.3,6,5.9,4.4).closePath().moveTo(-1.8,3.7).lineTo(-0.7,2.9).lineTo(1.9,5.5).lineTo(0.7,6.5).lineTo(-1.8,3.7).closePath().moveTo(5.4,3.3).lineTo(5.4,2.7).lineTo(-5.7,2.7).lineTo(-5.7,3.3).lineTo(-7.2,3.3).lineTo(-7.2,-7.4).lineTo(-2.4,-7.4).lineTo(-1.8,-9.4).lineTo(-0.2,-9).lineTo(-0.9,-7.4).lineTo(6.9,-7.4).lineTo(6.9,3.3).closePath().moveTo(-5.7,1.3).lineTo(5.4,1.3).lineTo(5.4,-0.3).lineTo(-5.7,-0.3).closePath().moveTo(-5.7,-1.6).lineTo(5.4,-1.6).lineTo(5.4,-3.2).lineTo(-5.7,-3.2).closePath().moveTo(-5.7,-4.5).lineTo(5.4,-4.5).lineTo(5.4,-6.1).lineTo(-5.7,-6.1).closePath();
	this.shape_56.setTransform(-547.8,0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-3.3,9.6).lineTo(-3.3,-4.1).lineTo(2,-4.1).lineTo(2,-9.6).lineTo(3.7,-9.6).lineTo(3.7,-4.1).lineTo(8.8,-4.1).lineTo(8.8,7.2).curveTo(8.8,9.5,6.7,9.5).lineTo(3.3,9.4).lineTo(3,7.8).lineTo(6,8).curveTo(7.3,8,7.3,6.9).lineTo(7.3,5).lineTo(-1.8,5).lineTo(-1.8,9.6).closePath().moveTo(-1.8,3.6).lineTo(7.3,3.6).lineTo(7.3,1.2).lineTo(-1.8,1.2).closePath().moveTo(-1.8,-0.2).lineTo(7.3,-0.2).lineTo(7.3,-2.6).lineTo(-1.8,-2.6).closePath().moveTo(-8.9,9).curveTo(-7.9,5.5,-7,1.4).lineTo(-5.4,2).lineTo(-7.2,9.5).closePath().moveTo(-9.4,-3.1).lineTo(-8.4,-4.2).curveTo(-6.9,-3.2,-5,-1.6).lineTo(-6.1,-0.3).lineTo(-9.4,-3.1).closePath().moveTo(5.2,-5.7).curveTo(6.7,-7.2,8,-9).lineTo(9.4,-8).curveTo(8.2,-6.5,6.4,-4.7).closePath().moveTo(-3.6,-8.1).lineTo(-2.5,-9).curveTo(-1.6,-8.2,0.5,-5.9).lineTo(-0.8,-4.8).curveTo(-2.7,-7.3,-3.6,-8.1).closePath().moveTo(-8.7,-8.2).lineTo(-7.7,-9.3).lineTo(-4.3,-6.5).lineTo(-5.4,-5.2).lineTo(-8.7,-8.2).closePath();
	this.shape_57.setTransform(-568.2,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill().beginStroke("rgba(44,181,255,0.298)").setStrokeStyle(1,1,1).moveTo(-600.7,-39.2).lineTo(600.6,-39.2).curveTo(611.8,-39.2,611.8,-28.1).lineTo(611.8,28.1).curveTo(611.8,39.2,600.6,39.2).lineTo(-600.7,39.2).curveTo(-611.8,39.2,-611.8,28.1).lineTo(-611.8,-28.1).curveTo(-611.8,-39.2,-600.7,-39.2).closePath();

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("rgba(44,181,255,0.118)").beginStroke().moveTo(-600.7,39.2).curveTo(-611.7,39.2,-611.7,28.1).lineTo(-611.7,-28.1).curveTo(-611.7,-39.2,-600.7,-39.2).lineTo(600.6,-39.2).curveTo(611.7,-39.2,611.7,-28.1).lineTo(611.7,28.1).curveTo(611.7,39.2,600.6,39.2).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.7,-40.2,1225.5,80.4);


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


(lib.leftRect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(44,181,255,0.118)").beginStroke("rgba(44,181,255,0.298)").setStrokeStyle(1,1,1).drawRoundRect(-94.65,-41.05,189.3,82.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-42,191.3,84.1);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(113,212,255,0.298)").setStrokeStyle(2,1,1).moveTo(43.2,0).curveTo(43.2,17.9,30.6,30.6).curveTo(17.9,43.2,-0,43.2).curveTo(-17.9,43.2,-30.6,30.6).curveTo(-43.2,17.9,-43.2,0).curveTo(-43.2,-17.9,-30.6,-30.6).curveTo(-17.9,-43.2,-0,-43.2).curveTo(17.9,-43.2,30.6,-30.6).curveTo(43.2,-17.9,43.2,0).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(113,212,255,0.118)").beginStroke().moveTo(-30.6,30.6).curveTo(-43.2,17.9,-43.2,-0).curveTo(-43.2,-17.9,-30.6,-30.6).curveTo(-17.9,-43.2,0,-43.2).curveTo(17.9,-43.2,30.5,-30.6).curveTo(43.2,-17.9,43.2,-0).curveTo(43.2,17.9,30.5,30.6).curveTo(17.9,43.2,0,43.2).curveTo(-17.9,43.2,-30.6,30.6).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-44.2,88.4,88.4);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-72.6,14.2).curveTo(-74.3,14.2,-74.8,13.9).curveTo(-76.1,12.9,-76.1,11.4).lineTo(-76.1,-0.1).lineTo(-81.5,-0.1).lineTo(-81.9,5.4).curveTo(-82.2,8.6,-83,10.2).curveTo(-84,12.3,-85.8,13.3).curveTo(-86.7,13.8,-88.1,14.1).lineTo(-88.1,11).curveTo(-86.7,10.4,-86.2,9.6).curveTo(-85.3,8.2,-85.1,6.2).lineTo(-84.6,-0.1).curveTo(-86,-0.2,-86.9,-0.9).curveTo(-88.3,-1.9,-88.3,-3.6).curveTo(-88.3,-4.4,-88,-5).lineTo(-86.4,-9.4).lineTo(-88.5,-9.4).lineTo(-88.5,-12.5).lineTo(-80.6,-12.5).lineTo(-80.6,-14.1).lineTo(-77.6,-14.1).lineTo(-77.6,-12.5).lineTo(-69.7,-12.5).lineTo(-69.7,-9.4).lineTo(-83.1,-9.4).lineTo(-85.1,-4.3).lineTo(-85.3,-3.7).curveTo(-85.3,-3.3,-85,-3.2).curveTo(-84.9,-3.1,-84.1,-3.1).lineTo(-74.3,-3.1).curveTo(-72.7,-3.1,-72.7,-4.6).lineTo(-72.8,-5).lineTo(-73.4,-7.4).lineTo(-70.5,-7.4).lineTo(-70,-4.9).lineTo(-69.9,-3.8).curveTo(-69.9,-2.2,-70.7,-1.4).curveTo(-71.4,-0.6,-73.1,-0.2).lineTo(-73.1,9.9).curveTo(-73.1,10.7,-72.8,11).curveTo(-72.6,11.2,-71.9,11.2).lineTo(-69.7,11.2).lineTo(-69.7,14.2).closePath().moveTo(49.4,14.1).lineTo(49.4,11.2).lineTo(41.5,11.2).curveTo(39.2,11.2,38,10.5).curveTo(35.9,9.3,35.9,5.9).lineTo(35.9,-5.9).curveTo(35.9,-8.4,37.2,-9.7).curveTo(38.6,-11.1,41.1,-11.1).lineTo(49.4,-11.1).lineTo(49.4,-14).lineTo(52.6,-14).lineTo(52.6,-11.1).lineTo(60.5,-11.1).curveTo(63.1,-11.1,64.4,-10.1).curveTo(66.2,-8.8,66.2,-6.5).lineTo(66.2,6).curveTo(66.2,8.2,65.3,9.4).curveTo(63.9,11.2,61.2,11.2).lineTo(52.6,11.2).lineTo(52.6,14.1).closePath().moveTo(52.6,8.1).lineTo(60.6,8.1).curveTo(63.1,8.1,63.1,6).lineTo(63.1,-5.7).curveTo(63.1,-7.1,62.5,-7.6).curveTo(62,-8,60.7,-8).lineTo(52.6,-8).closePath().moveTo(39.3,-7.4).curveTo(39,-6.9,39,-5.9).lineTo(39,5.6).lineTo(39.1,7).curveTo(39.5,8.1,40.9,8.1).lineTo(49.4,8.1).lineTo(49.4,-8).lineTo(41,-8).curveTo(39.8,-8,39.3,-7.4).closePath().moveTo(-100,14.1).lineTo(-100,11).lineTo(-90.3,11).lineTo(-90.3,14.1).closePath().moveTo(82.3,14.1).curveTo(80.1,14.1,78.9,12.6).curveTo(77.9,11.5,77.9,9.5).lineTo(77.9,-14).lineTo(81,-14).lineTo(81,9).curveTo(81,11,82.9,11).lineTo(93.4,11).lineTo(93.4,14.1).closePath().moveTo(15.3,14.1).curveTo(13.3,14.1,12,12.8).curveTo(10.8,11.6,10.8,9.7).lineTo(10.8,5).lineTo(13.9,5).lineTo(13.9,9.1).curveTo(13.9,9.9,14.4,10.4).curveTo(14.9,11,15.8,11).lineTo(25.4,11).lineTo(25.4,14.1).closePath().moveTo(29.1,12.6).curveTo(28.2,11.7,27.9,10.4).lineTo(27.7,8.6).lineTo(27.4,5).lineTo(30.5,5).lineTo(30.8,8.3).curveTo(30.9,10.1,31.6,10.6).curveTo(31.9,10.9,32.4,11).lineTo(32.4,14).lineTo(32.3,14).curveTo(30.3,14,29.1,12.6).closePath().moveTo(97.5,13.2).curveTo(95.8,11.8,95.6,7.8).lineTo(94.9,-13.4).lineTo(98,-13.4).lineTo(98.7,7.5).curveTo(98.7,9.6,99.3,10.4).curveTo(99.7,11,100.3,11).lineTo(100.3,14).curveTo(98.4,13.9,97.5,13.2).closePath().moveTo(69.7,11).curveTo(70.4,10.8,70.7,10.3).curveTo(71.2,9.6,71.3,8.2).lineTo(72,-13.4).lineTo(75.1,-13.4).lineTo(74.3,8).curveTo(74.1,14,69.7,14).closePath().moveTo(1.7,11).curveTo(2.7,10.9,3.1,9.8).curveTo(3.3,9.2,3.5,6.3).lineTo(3.6,5).lineTo(6.6,5).lineTo(6.4,8.9).curveTo(6.2,11.9,4.5,13.1).curveTo(3.4,14,1.7,14).closePath().moveTo(-23,14).lineTo(-22.9,-2).curveTo(-22.9,-4.6,-21.2,-5.9).curveTo(-20,-6.7,-18.5,-6.7).lineTo(-13.8,-6.7).lineTo(-13.8,-14.1).lineTo(-10.7,-14.1).lineTo(-10.7,-6.7).lineTo(-7,-6.8).curveTo(-4.4,-6.8,-3.2,-5.7).curveTo(-2.4,-5.1,-2,-3.9).curveTo(-1.7,-3.1,-1.7,-2.3).lineTo(-1.7,8.7).curveTo(-1.7,13.9,-7.2,13.9).lineTo(-8.6,13.9).lineTo(-8.6,10.8).lineTo(-7.3,10.8).curveTo(-5.7,10.8,-5.2,10.4).curveTo(-4.7,9.9,-4.7,9).lineTo(-4.7,8.5).lineTo(-19.8,8.5).lineTo(-19.8,14).closePath().moveTo(-19.8,5.4).lineTo(-4.7,5.4).lineTo(-4.7,2.4).lineTo(-19.8,2.4).closePath().moveTo(-19.8,-2.1).lineTo(-19.8,-0.7).lineTo(-4.7,-0.7).lineTo(-4.7,-2).curveTo(-4.7,-3.6,-6.4,-3.6).lineTo(-17.9,-3.6).curveTo(-19.8,-3.6,-19.8,-2.1).closePath().moveTo(-32,13.6).lineTo(-32,10.5).lineTo(-25.3,10.5).lineTo(-25.3,13.6).closePath().moveTo(18.8,9.1).lineTo(18.8,5).lineTo(21.7,5).lineTo(21.7,9.1).closePath().moveTo(87.8,7.2).curveTo(86.4,5.8,86.2,3.4).lineTo(84.8,-14.2).lineTo(87.8,-14.2).lineTo(89.3,3.4).curveTo(89.4,5.6,91.5,5.6).lineTo(91.5,8.7).curveTo(89.4,8.6,87.8,7.2).closePath().moveTo(-97.5,8.1).curveTo(-100.2,8.1,-100.2,6.1).curveTo(-100.2,5.1,-98.7,2.5).lineTo(-96.3,-1.8).lineTo(-98.4,-1.8).curveTo(-99.4,-1.8,-99.9,-2.5).curveTo(-100.3,-3,-100.3,-3.8).curveTo(-100.3,-4.8,-99.5,-6.4).lineTo(-95.4,-13.9).lineTo(-91.7,-13.9).lineTo(-96.6,-4.9).lineTo(-94.6,-4.9).lineTo(-93.9,-6.1).lineTo(-90.1,-6.1).lineTo(-96.5,5.1).lineTo(-90.7,5.1).lineTo(-90.7,8.1).closePath().moveTo(6.2,3.6).curveTo(4.6,3.6,3.7,2.8).curveTo(2.9,2,2.9,0.4).lineTo(2.9,-9.5).curveTo(2.9,-11,3.8,-11.8).curveTo(4.6,-12.5,6.2,-12.5).lineTo(6.9,-12.5).lineTo(6.9,-14.1).lineTo(10,-14.1).lineTo(10,-12.5).lineTo(28,-12.5).curveTo(29.3,-12.5,29.9,-12.2).curveTo(31.5,-11.5,31.5,-9.6).lineTo(31.5,0.6).curveTo(31.5,2,30.7,2.8).curveTo(29.8,3.6,28.2,3.6).closePath().moveTo(6,-0.5).curveTo(6,0.6,6.9,0.6).lineTo(27.5,0.6).curveTo(27.9,0.6,28.2,0.2).curveTo(28.5,-0.1,28.5,-0.5).lineTo(28.5,-0.9).lineTo(6,-0.9).closePath().moveTo(6,-3.7).lineTo(28.5,-3.7).lineTo(28.5,-5.1).lineTo(6,-5.1).closePath().moveTo(6,-8.5).lineTo(6,-8).lineTo(28.5,-8).lineTo(28.5,-8.4).curveTo(28.5,-8.9,28.1,-9.2).curveTo(27.8,-9.5,27.2,-9.5).lineTo(7.2,-9.5).curveTo(6,-9.5,6,-8.5).closePath().moveTo(-32,0.8).lineTo(-32,-2.3).lineTo(-25.3,-2.3).lineTo(-25.3,0.8).closePath().moveTo(-66.2,0.7).lineTo(-66.2,-2.4).lineTo(-35.7,-2.4).lineTo(-35.7,0.7).closePath().moveTo(-8.2,-10.1).lineTo(-8.2,-13).lineTo(-1.7,-13).lineTo(-1.7,-10.1).closePath().moveTo(-23,-10.1).lineTo(-23,-13.1).lineTo(-16.4,-13.1).lineTo(-16.4,-10.1).closePath().moveTo(-32,-10.6).lineTo(-32,-13.7).lineTo(-25.3,-13.7).lineTo(-25.3,-10.6).closePath();
	this.shape.setTransform(102,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.7,200.7,28.5);


(lib.info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iconfont-xinxi(1).svg
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-68.3,13.6).lineTo(-68.3,-13.7).lineTo(68.3,-13.7).lineTo(68.3,13.6).closePath();
	this.shape.setTransform(11.5,10.5,0.037,0.037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-95.6,13.6).lineTo(-95.6,-13.7).lineTo(95.6,-13.7).lineTo(95.6,13.6).closePath();
	this.shape_1.setTransform(12.5,13.5,0.037,0.037);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-95.6,13.7).lineTo(-95.6,-13.6).lineTo(95.6,-13.6).lineTo(95.6,13.7).closePath();
	this.shape_2.setTransform(12.5,7.5,0.037,0.037);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-341.3,382.4).lineTo(-341.3,-65.5).lineTo(-306.9,-99.9).lineTo(-306.9,-99.9).lineTo(-204.8,-202.1).lineTo(-204.8,-300.3).lineTo(-106.6,-300.3).lineTo(-41.8,-365).curveTo(-33.5,-373.4,-22.6,-377.9).curveTo(-11.8,-382.4,0,-382.4).curveTo(11.9,-382.4,22.7,-377.9).curveTo(33.5,-373.4,41.8,-365).lineTo(204.8,-202.1).lineTo(204.8,-202).lineTo(341.3,-65.5).lineTo(341.3,382.4).closePath().moveTo(292.2,355.1).lineTo(271.4,334.2).lineTo(271.3,334.2).lineTo(22.5,85.4).curveTo(13.5,76.4,-0,76.4).curveTo(-13.5,76.4,-22.5,85.4).lineTo(-277.5,340.4).lineTo(-277.6,340.4).lineTo(-292.3,355.1).lineTo(292.2,355.1).closePath().moveTo(314,338.3).lineTo(314,-22.6).lineTo(133.6,157.9).lineTo(136.7,161).lineTo(136.7,160.9).closePath().moveTo(-314,338.2).lineTo(-136.7,160.9).lineTo(-136.7,161).lineTo(-134.7,158.9).lineTo(-314,-20.4).closePath().moveTo(-177.5,77.5).lineTo(-115.3,139.6).lineTo(-41.8,66.1).curveTo(-33.5,57.7,-22.6,53.3).curveTo(-11.9,48.8,-0,48.8).curveTo(11.8,48.8,22.6,53.3).curveTo(33.5,57.8,41.8,66.1).lineTo(114.2,138.6).lineTo(177.5,75.3).lineTo(177.5,-190.7).lineTo(95.2,-273).lineTo(-177.5,-273).closePath().moveTo(-311.6,-56.7).lineTo(-204.8,50.2).lineTo(-204.8,-163.5).closePath().moveTo(204.8,48).lineTo(310.5,-57.7).lineTo(204.8,-163.4).closePath().moveTo(67.9,-300.3).lineTo(22.5,-345.7).curveTo(13.5,-354.7,-0,-354.7).curveTo(-13.5,-354.7,-22.5,-345.7).lineTo(-68,-300.3).lineTo(67.9,-300.3).closePath();
	this.shape_3.setTransform(12.5,14,0.037,0.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,28);


(lib.zdkf_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 终端开发
	this.instance = new lib.zdkf();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.rect31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矩形 3 拷贝
	this.instance = new lib.shap31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,8);


(lib.rect3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矩形 3
	this.instance = new lib.shap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,8);


(lib.shap47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 7
	this.instance = new lib.shap47();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,4);


(lib.shap46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 6
	this.instance = new lib.shap46();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,4);


(lib.shap45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 5
	this.instance = new lib.shap45();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,6);


(lib.shap44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 4
	this.instance = new lib.shap44();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,6);


(lib.shap42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 2
	this.instance = new lib.shap42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11);


(lib.shap4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4
	this.instance = new lib.shap4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,11);


(lib.vect6Grow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vect6_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,140);


(lib.vectGlow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vectGlow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,140);


(lib.tzgg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iconfont-tongzhigonggao.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(64.4,96.4).curveTo(56.7,92.7,54.7,86.2).curveTo(46.5,61.1,31.3,39.6).curveTo(19.7,23.1,-2.1,1.2).curveTo(-23.8,-20.5,-40.5,-32.3).curveTo(-62.1,-47.5,-87.1,-55.5).curveTo(-93.5,-57.6,-96.3,-64.5).curveTo(-99.3,-71.9,-95,-78.7).curveTo(-88.8,-88.5,-84.6,-92.9).curveTo(-78.1,-99.6,-72.8,-98).curveTo(-46.4,-89.6,-18.7,-68.2).curveTo(-0.7,-54.3,26.4,-27.2).curveTo(53.3,-0.2,67.2,17.9).curveTo(88.5,45.6,97.2,72.1).curveTo(98.5,76.3,94.2,82.1).curveTo(92.3,84.5,85,91.8).curveTo(82.3,94.5,79.6,96.1).curveTo(76.1,98.3,72.2,98.3).curveTo(68.5,98.3,64.4,96.4).closePath();
	this.shape.setTransform(29.1,12.4,0.059,0.059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(117.9,152.5).curveTo(110.9,151,109.8,144.7).curveTo(100.8,93.6,79.1,50.3).curveTo(57.6,7.5,24.8,-25.3).curveTo(-8,-58.1,-50.8,-79.6).curveTo(-94,-101.3,-145.2,-110.3).curveTo(-151.4,-111.4,-152.2,-117.7).curveTo(-152.9,-123.5,-148.9,-131.2).lineTo(-141.3,-146.3).curveTo(-136.6,-153.8,-131,-152.8).curveTo(-78.6,-143.5,-28.9,-115.7).curveTo(16.2,-90.5,53,-53.6).curveTo(90,-16.6,115.2,28.5).curveTo(143,78.2,152.2,130.6).curveTo(152.9,134.3,148.4,137.9).curveTo(142.4,141.9,139.6,144.7).curveTo(136.4,147.8,132.4,150.1).curveTo(126.8,152.9,121.6,152.9).curveTo(119.7,152.9,117.9,152.5).closePath();
	this.shape_1.setTransform(32.5,9,0.059,0.059);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,285.5).curveTo(-9.9,283.6,-13.4,280.1).lineTo(-87.7,194.4).curveTo(-88.3,193.8,-94.9,194.5).curveTo(-101.5,195.1,-101.9,194.4).lineTo(-126.6,227.4).lineTo(-158.6,279.4).curveTo(-161.3,283.5,-166.5,285.1).curveTo(-169.3,286,-176.9,286.8).lineTo(-179.4,286.9).curveTo(-184.6,286.9,-190.9,284.9).curveTo(-197.7,282.7,-201.1,279.4).lineTo(-271.8,208.6).curveTo(-276.4,204.1,-281.2,195.3).curveTo(-286.6,185.5,-286.1,180.3).curveTo(-285.5,175.6,-281,172).lineTo(-271.8,166.1).lineTo(-229.3,137.8).lineTo(-186.9,95.3).lineTo(-2.8,-273).curveTo(0.5,-279.8,2.6,-282.3).curveTo(6.1,-286.3,11.4,-287.2).curveTo(16.8,-288.1,26.4,-282.7).curveTo(34.6,-278.1,39.7,-273).lineTo(280.5,-32.2).curveTo(284.4,-28.3,285.6,-19.2).curveTo(286.6,-11.6,285.5,-4.6).curveTo(284.6,0.5,278.1,4.5).lineTo(266.4,10.3).lineTo(-31.1,166.1).lineTo(32.7,234.2).curveTo(39.8,241.3,39.8,251.4).curveTo(39.8,261.6,32.7,268.8).lineTo(21.2,280.3).curveTo(14,287.3,3.9,287.3).curveTo(-0.9,287.3,-5.4,285.5).closePath().moveTo(-243.5,180.3).lineTo(-172.7,251.1).lineTo(-158.6,194.4).lineTo(-186.9,166.1).closePath();
	this.shape_2.setTransform(16.7,25.1,0.059,0.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,41.5,42);


(lib.oval53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#1DC8D4","rgba(29,200,212,0)"],[0,1],0,0,0,0,0,27.8).beginStroke().moveTo(-19.1,19.5).curveTo(-27,11.4,-27,0).curveTo(-27,-11.4,-19.1,-19.4).curveTo(-11.1,-27.5,0,-27.5).curveTo(11.2,-27.5,19.1,-19.4).curveTo(27,-11.4,27,0).curveTo(27,11.4,19.1,19.5).curveTo(11.2,27.5,0,27.5).curveTo(-11.2,27.5,-19.1,19.5).closePath();
	this.shape.setTransform(60,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,33,54,55);


(lib.database = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 数据库.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-38.7,97).curveTo(-57.3,93.9,-70,87.5).curveTo(-84.6,82,-92.5,74).curveTo(-100,66.2,-100,57.6).lineTo(-100,-58.8).curveTo(-100,-75.5,-70,-88.8).curveTo(-57,-94.2,-38.7,-97.1).curveTo(-20.9,-100,-0,-100).curveTo(20.9,-100,38.7,-97.1).curveTo(57,-94.2,70,-88.8).curveTo(100,-75.5,100,-58.8).lineTo(100,58.8).curveTo(100,67.3,92.1,75.2).curveTo(84.1,83.2,70,88.8).curveTo(57,94.3,38.7,97.2).curveTo(20.9,100,-0,100).curveTo(-21.4,100,-38.7,97).closePath().moveTo(-87.5,58.8).curveTo(-87.5,64.5,-80.4,69.7).curveTo(-73.1,75.1,-60,78.8).curveTo(-29.3,87.5,-0,87.5).curveTo(15.8,87.5,31.4,85.7).curveTo(48.3,83.6,60,80).curveTo(73.3,75.2,80.3,69.8).curveTo(87.5,64.3,87.5,58.8).lineTo(87.5,40).curveTo(73,47.3,70.3,48.4).curveTo(61,52.5,51.2,55).curveTo(24.1,61.3,-1.3,61.3).curveTo(-14.1,61.3,-27.8,59.6).curveTo(-41,57.9,-52.6,55).curveTo(-61.4,52.5,-70.5,48.4).curveTo(-72.3,47.6,-87.5,40).closePath().moveTo(-87.5,17.5).curveTo(-87.5,24,-80.4,29.5).curveTo(-73.3,35,-60,38.8).curveTo(-29.1,47.6,-0,47.5).curveTo(15.3,47.6,31.9,45.1).curveTo(47.2,42.7,60,38.8).curveTo(73.2,35,80.3,29.5).curveTo(87.5,24,87.5,17.5).lineTo(87.5,-1.2).lineTo(70.5,7.2).curveTo(61.4,11.4,52.5,13.8).curveTo(25.4,20.1,-0,20.1).curveTo(-25.1,20.1,-52.6,13.8).curveTo(-61.4,11.4,-70.5,7.2).lineTo(-87.5,-1.2).closePath().moveTo(-87.5,-22.5).curveTo(-87.5,-16.9,-80.4,-11.3).curveTo(-73.2,-5.9,-60,-1.2).curveTo(-46,2.8,-31.4,5).curveTo(-15.1,7.5,-0,7.5).curveTo(15.3,7.5,31.8,5).curveTo(47.3,2.7,60,-1.2).curveTo(73,-5.9,80.3,-11.2).curveTo(87.5,-16.5,87.5,-21.2).lineTo(87.5,-36.3).lineTo(70.5,-28.5).curveTo(60.8,-24,52.5,-22.5).curveTo(25.4,-16.2,-0,-16.2).curveTo(-25.5,-16.2,-52.6,-22.5).curveTo(-60.8,-24,-70.5,-28.5).curveTo(-81.2,-33.8,-87.5,-36.3).closePath().moveTo(-31.2,-85.6).curveTo(-46.8,-83.6,-58.8,-80).curveTo(-71.9,-75.2,-79,-69.9).curveTo(-86.3,-64.4,-86.2,-58.8).curveTo(-86.3,-52.1,-79.6,-46.7).curveTo(-72.6,-41.2,-58.8,-37.5).curveTo(-36.1,-28.7,-0,-28.7).curveTo(16.1,-28.8,30.8,-30.8).curveTo(47.2,-33,58.7,-37.5).curveTo(72.3,-41.1,79.5,-46.5).curveTo(86.2,-51.7,86.2,-57.4).curveTo(86.2,-63,79,-68.6).curveTo(72,-74,58.7,-78.7).curveTo(46,-82.6,30.8,-85).curveTo(14.6,-87.5,-0,-87.5).curveTo(-16.2,-87.5,-31.2,-85.6).closePath();
	this.shape.setTransform(27.1,28,0.301,0.291);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1,60.2,58.2);


(lib.data1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 数据 拷贝
	this.instance = new lib.data1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,22);


(lib.data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-139.7,8.9).lineTo(-134.8,-8.9).lineTo(134.8,-8.9).lineTo(139.7,8.9).closePath();
	this.shape.setTransform(16.4,10.7,0.045,0.045);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-127.5,8.9).lineTo(-122.7,-8.9).lineTo(122.6,-8.9).lineTo(127.5,8.9).closePath();
	this.shape_1.setTransform(16.4,8.7,0.045,0.045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-115.4,8.9).lineTo(-110.4,-8.9).lineTo(110.5,-8.9).lineTo(115.4,8.9).closePath();
	this.shape_2.setTransform(16.4,6.7,0.045,0.045);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-103.2,8.9).lineTo(-98.3,-8.9).lineTo(98.3,-8.9).lineTo(103.2,8.9).closePath();
	this.shape_3.setTransform(16.4,4.7,0.045,0.045);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-298.5,243).curveTo(-323.2,243,-340.7,225.2).curveTo(-358.2,207.4,-358.1,182.3).lineTo(-358.1,30.4).lineTo(-161.2,-243.1).lineTo(167.1,-243.1).lineTo(358.2,30.4).lineTo(358.2,182.3).curveTo(358.1,207.4,340.6,225.2).curveTo(323.1,243,298.5,243).closePath().moveTo(-332.6,38.4).lineTo(-179.1,38.4).lineTo(-127.9,115.1).lineTo(127.9,115.1).lineTo(179.1,38.4).lineTo(332.5,38.4).lineTo(153.5,-217.5).lineTo(-153.5,-217.5).closePath();
	this.shape_4.setTransform(16.2,11,0.045,0.045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,22);


(lib.vect_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矢量智能对象 拷贝 5
	this.instance = new lib.vect5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.letter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-300.5,216.2).curveTo(-322.3,216.2,-339.4,202.6).curveTo(-357.6,188,-357.6,166.8).lineTo(-357.6,-168.8).curveTo(-357.6,-179.6,-352.3,-189).curveTo(-347.1,-198.4,-337.3,-205.1).curveTo(-329.6,-210.4,-320,-213.3).curveTo(-310.3,-216.2,-300.5,-216.2).lineTo(298.9,-216.2).curveTo(317.8,-216.2,333.4,-203.5).curveTo(349,-190.7,356.2,-169.5).lineTo(357.1,-166.9).lineTo(357.1,-134.3).curveTo(357.6,-132.4,357.6,-130.5).lineTo(357.6,173).lineTo(355.9,176.3).curveTo(348.2,192.3,334.5,203.2).curveTo(318.1,216.2,298.9,216.2).closePath().moveTo(296.6,183.4).lineTo(82.3,-18.5).lineTo(27.1,17.7).curveTo(14.4,25.9,-0.8,25.9).curveTo(-16,25.9,-28.7,17.7).lineTo(-28.8,17.6).lineTo(-80.2,-16).lineTo(-294.1,183.4).lineTo(296.6,183.4).closePath().moveTo(-324.8,-168.8).lineTo(-324.8,166.8).lineTo(-324.8,167.3).lineTo(-108.3,-34.5).lineTo(-322.4,-174.9).curveTo(-324.8,-171.9,-324.8,-168.8).closePath().moveTo(110.5,-37).lineTo(324.8,165.1).lineTo(324.8,-130.7).curveTo(324.4,-132.5,324.4,-134.5).lineTo(324.4,-161.3).curveTo(321.7,-167.9,317.7,-172.9).closePath().moveTo(-72.5,-50.2).lineTo(-72.4,-50.1).lineTo(-10.9,-9.8).curveTo(-6.3,-6.8,-0.8,-6.8).curveTo(4.7,-6.8,9.3,-9.8).lineTo(274,-183.4).lineTo(-275.7,-183.4).closePath();
	this.shape.setTransform(15.5,9.5,0.043,0.043);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,31,18.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-193.9,98.8).curveTo(-190.1,55.3,-162.3,18.9).curveTo(-135.2,-16.6,-91.9,-36.8).lineTo(-127.8,-88.8).curveTo(-129.3,-91.1,-129,-93.7).curveTo(-128.7,-96.4,-126.6,-97.8).curveTo(-124.5,-99.3,-121.9,-98.6).curveTo(-119.2,-98,-117.7,-95.7).lineTo(-80.5,-41.7).curveTo(-42.2,-56.7,-0,-56.7).curveTo(42.3,-56.7,80.4,-41.7).lineTo(117.7,-95.7).curveTo(119.2,-98,121.8,-98.6).curveTo(124.4,-99.2,126.6,-97.8).curveTo(128.6,-96.4,129,-93.7).curveTo(129.3,-91.1,127.8,-88.8).lineTo(91.9,-36.8).curveTo(135.2,-16.6,162.3,18.9).curveTo(190.1,55.3,193.9,98.8).closePath().moveTo(69.3,8.6).curveTo(63,14.8,63,23.7).curveTo(63,32.6,69.3,38.9).curveTo(75.5,45.2,84.5,45.2).curveTo(93.3,45.2,99.7,38.9).curveTo(105.9,32.6,106,23.7).curveTo(105.9,14.8,99.7,8.6).curveTo(93.3,2.3,84.5,2.3).curveTo(75.5,2.3,69.3,8.6).closePath().moveTo(-97,8.6).curveTo(-103.2,14.8,-103.3,23.7).curveTo(-103.2,32.6,-97,38.9).curveTo(-90.7,45.2,-81.8,45.2).curveTo(-72.9,45.2,-66.6,38.9).curveTo(-60.3,32.6,-60.3,23.7).curveTo(-60.3,14.8,-66.6,8.6).curveTo(-72.9,2.3,-81.8,2.3).curveTo(-90.7,2.3,-97,8.6).closePath();
	this.shape.setTransform(1.5,-22.5,0.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(46.7,232.3).curveTo(33.9,219.3,33.9,201).lineTo(33.9,104.7).lineTo(-33.9,104.7).lineTo(-33.9,201).curveTo(-33.9,219.3,-46.6,232.3).curveTo(-59.5,245.2,-77.5,245.2).curveTo(-95.6,245.2,-108.3,232.3).curveTo(-121.1,219.3,-121.1,201).lineTo(-121.1,104.7).lineTo(-159.9,104.7).curveTo(-174,104.7,-184,94.8).curveTo(-193.9,84.8,-193.9,70.8).lineTo(-193.9,-245.2).lineTo(193.9,-245.2).lineTo(193.9,70.8).curveTo(193.9,84.8,184,94.8).curveTo(174,104.7,159.9,104.7).lineTo(121.1,104.7).lineTo(121.1,201).curveTo(121.1,219.3,108.3,232.3).curveTo(95.5,245.2,77.5,245.2).curveTo(59.5,245.2,46.7,232.3).closePath();
	this.shape_1.setTransform(1.5,-3.8,0.05,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(232,117.8).curveTo(219.3,104.8,219.3,86.5).lineTo(219.3,-86.5).curveTo(219.3,-104.8,232,-117.8).curveTo(244.8,-130.7,262.8,-130.7).curveTo(280.9,-130.7,293.6,-117.8).curveTo(306.4,-104.8,306.4,-86.5).lineTo(306.4,86.5).curveTo(306.4,104.8,293.6,117.8).curveTo(280.9,130.7,262.8,130.7).curveTo(244.8,130.7,232,117.8).closePath().moveTo(-293.6,117.8).curveTo(-306.4,104.8,-306.4,86.5).lineTo(-306.4,-86.5).curveTo(-306.4,-104.8,-293.6,-117.8).curveTo(-280.9,-130.7,-262.8,-130.7).curveTo(-244.8,-130.7,-232.1,-117.8).curveTo(-219.2,-104.8,-219.3,-86.5).lineTo(-219.3,86.5).curveTo(-219.2,104.8,-232.1,117.8).curveTo(-244.8,130.7,-262.8,130.7).curveTo(-280.9,130.7,-293.6,117.8).closePath();
	this.shape_2.setTransform(1.5,-9.6,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.8,4.7).lineTo(2.8,4.5).curveTo(3.9,4.7,3.9,4.6).curveTo(4,4.6,4,4.6).curveTo(4,4.5,4.1,4.5).curveTo(4.1,4.4,4.1,4.4).curveTo(4.1,4.3,4.1,4.2).lineTo(4.1,0.9).lineTo(2.9,0.9).lineTo(2.9,4.2).lineTo(2.4,4.4).lineTo(2.4,0.9).lineTo(1.3,0.9).lineTo(1.3,4.5).lineTo(0.8,4.8).lineTo(0.8,0.9).lineTo(-0.3,0.9).lineTo(-0.3,5.1).lineTo(-1,5.5).lineTo(-0.9,2.8).lineTo(-1,0.2).lineTo(-0.4,0.6).lineTo(0.9,0.6).lineTo(1.1,-0.8).lineTo(-0.1,-0.8).curveTo(-0.7,-0.8,-1.2,-0.6).lineTo(-1.7,-1.1).lineTo(4.2,-1.1).lineTo(4.7,-1.6).lineTo(5.5,-0.8).lineTo(1.9,-0.8).lineTo(1.2,0.6).lineTo(4.1,0.6).lineTo(4.5,0.2).lineTo(5.1,0.8).lineTo(4.7,1.1).lineTo(4.7,4.5).curveTo(4.7,4.9,4.6,5.1).curveTo(4.4,5.4,3.9,5.5).curveTo(3.7,5,2.8,4.7).closePath().moveTo(-5.4,2.9).lineTo(-3.4,2.4).curveTo(-2.7,-0.5,-2.6,-2).lineTo(-1.7,-1.6).lineTo(-2,-1.3).lineTo(-3.1,2.4).lineTo(-1.3,1.8).lineTo(-1.2,2).lineTo(-3.3,2.8).curveTo(-4.5,3.3,-4.9,3.8).closePath().moveTo(-4.4,0.8).curveTo(-4.3,-0.1,-4.7,-1.6).lineTo(-4.6,-1.7).curveTo(-3.9,-0.4,-3.7,0.4).curveTo(-3.6,1.3,-4.1,1.5).lineTo(-4.2,1.6).curveTo(-4.4,1.6,-4.4,0.8).closePath().moveTo(3.8,-2.4).lineTo(-0.2,-2.4).lineTo(-0.6,-2).lineTo(-1.1,-2.5).lineTo(-0.8,-2.8).lineTo(-0.8,-4.9).lineTo(0.1,-4.4).lineTo(-0.2,-4.1).lineTo(-0.2,-2.7).lineTo(1.6,-2.7).lineTo(1.5,-5.5).lineTo(2.5,-5).lineTo(2.1,-4.7).lineTo(2.1,-2.7).lineTo(3.8,-2.7).lineTo(3.8,-4.8).lineTo(4.7,-4.3).lineTo(4.4,-4).lineTo(4.5,-2.1).lineTo(3.8,-1.9).closePath().moveTo(-5.3,-2.7).lineTo(-2.6,-2.7).lineTo(-2.1,-3.2).lineTo(-1.4,-2.4).lineTo(-3.8,-2.4).curveTo(-4.4,-2.4,-4.9,-2.3).closePath().moveTo(-3.5,-3.7).curveTo(-3.7,-4.5,-4.2,-5.1).lineTo(-4.1,-5.2).curveTo(-3.2,-4.6,-2.9,-4.2).curveTo(-2.7,-3.8,-3.1,-3.4).lineTo(-3.3,-3.3).curveTo(-3.5,-3.3,-3.5,-3.7).closePath();
	this.shape_3.setTransform(14.3,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,5.3).curveTo(-0.3,4.3,0.4,3.2).curveTo(1.1,2.2,1.4,0.9).curveTo(1.7,-0.5,1.8,-2.1).lineTo(0.9,-2.1).lineTo(0.4,-2.1).lineTo(-0,-2.4).lineTo(1.8,-2.4).lineTo(1.7,-5.4).lineTo(2.7,-5).lineTo(2.4,-4.6).lineTo(2.4,-2.4).lineTo(4.3,-2.4).lineTo(4.6,-2.8).lineTo(5.3,-2.3).lineTo(5,-2).curveTo(4.9,3,4.7,4).curveTo(4.4,5,3.3,5.4).curveTo(3.2,4.8,1.8,4.2).lineTo(1.9,4).curveTo(3.5,4.4,3.7,4.2).curveTo(4,4,4.1,2.9).curveTo(4.3,1.8,4.3,-2.1).lineTo(2.4,-2.1).curveTo(2.3,-0.4,2,1).curveTo(1.6,2.4,0.7,3.5).curveTo(-0.2,4.6,-1.7,5.4).closePath().moveTo(-5.2,2.7).curveTo(-4.7,2.5,-3.9,1.1).curveTo(-3.1,-0.3,-2.9,-1.2).lineTo(-4.4,-1.2).lineTo(-4.9,-1.1).lineTo(-5.3,-1.4).lineTo(-0.9,-1.4).lineTo(-0.3,-2).lineTo(0.5,-1.2).lineTo(-2.6,-1.2).lineTo(-1.9,-0.6).curveTo(-2.4,-0.4,-3.1,0.8).curveTo(-3.9,1.9,-4.6,2.6).lineTo(-0.9,2.2).lineTo(-1.8,0.5).lineTo(-1.7,0.4).curveTo(-0.1,1.9,0,2.4).curveTo(0.1,3,-0.2,3.2).curveTo(-0.2,3.3,-0.3,3.3).curveTo(-0.3,3.4,-0.4,3.4).curveTo(-0.4,3.4,-0.5,3.3).curveTo(-0.5,3.3,-0.5,3.2).lineTo(-0.8,2.4).curveTo(-4.2,3.1,-4.7,3.6).closePath().moveTo(-4.9,-3.8).lineTo(-1.6,-3.8).lineTo(-1,-4.4).lineTo(-0.2,-3.6).lineTo(-3.6,-3.6).curveTo(-4.1,-3.6,-4.5,-3.4).closePath();
	this.shape_4.setTransform(2.3,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,0.1).curveTo(-4,2.1,-5.3,3.3).lineTo(-5.4,3.2).curveTo(-4.6,2,-4,0.8).curveTo(-3.4,-0.5,-3.1,-1.5).lineTo(-3.9,-1.5).curveTo(-4.5,-1.5,-5,-1.3).lineTo(-5.4,-1.8).lineTo(-3,-1.8).lineTo(-3,-4).lineTo(-5,-3.8).lineTo(-5,-3.9).curveTo(-3.9,-4.1,-2.9,-4.5).curveTo(-1.8,-4.9,-1.4,-5.2).lineTo(-0.8,-4.4).lineTo(-2.4,-4.1).lineTo(-2.4,-1.8).lineTo(-1.7,-1.8).lineTo(-1.1,-2.3).lineTo(-0.4,-1.5).lineTo(-2.4,-1.5).lineTo(-2.4,-0.5).lineTo(-1.1,0.2).curveTo(-0.7,0.6,-1,1.1).curveTo(-1.2,1.7,-1.5,1.1).curveTo(-1.7,0.5,-2.4,-0.2).lineTo(-2.4,5).lineTo(-3.1,5.4).lineTo(-3.1,0.1).closePath().moveTo(-2,5.2).curveTo(-0.5,4.8,0.6,4.4).curveTo(1.7,3.9,2.6,3.2).curveTo(3.5,2.4,4.3,0.9).lineTo(1.9,0.9).lineTo(1,1.6).curveTo(1.7,2.1,2,2.5).curveTo(2.2,2.8,1.9,3.3).curveTo(1.5,3.6,1.4,3.1).curveTo(1.3,2.4,0.9,1.8).lineTo(-1,3).lineTo(-1.1,2.8).curveTo(-0.3,2.3,0.9,1.1).curveTo(2,0.1,2.6,-1).lineTo(3.4,-0.2).curveTo(2.8,0,2.1,0.7).lineTo(4.3,0.7).lineTo(4.7,0.2).lineTo(5.4,0.9).lineTo(5,1.1).curveTo(4.6,1.9,3.8,2.7).curveTo(3,3.7,1.6,4.4).curveTo(0.2,5.1,-2,5.3).closePath().moveTo(-0.7,0.4).lineTo(0.8,-0.5).lineTo(2.3,-1.8).curveTo(3.1,-2.5,3.9,-3.6).lineTo(1.2,-3.6).lineTo(0.9,-3.2).lineTo(1.8,-2.7).curveTo(2.2,-2.3,1.9,-1.9).curveTo(1.6,-1.4,1.4,-2).curveTo(1.2,-2.5,0.8,-3.1).lineTo(-0.5,-2).lineTo(-0.6,-2.1).curveTo(0.2,-2.9,0.7,-3.8).curveTo(1.2,-4.6,1.6,-5.4).lineTo(2.4,-4.8).curveTo(2.1,-4.7,1.3,-3.8).lineTo(3.9,-3.8).lineTo(4.2,-4.3).lineTo(5,-3.6).lineTo(4.5,-3.4).lineTo(3.2,-1.9).curveTo(2.6,-1.2,1.7,-0.6).curveTo(0.8,-0,-0.6,0.5).closePath();
	this.shape_5.setTransform(-9.4,21.8);

	this.instance = new lib.circle();
	this.instance.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-44.7,88.4,88.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-336.1,315.6).curveTo(-379.9,260.5,-328.7,121.1).curveTo(-297.1,34.9,-240.4,-46.9).curveTo(-185.3,-126.7,-124.4,-176.8).curveTo(-124.2,-177.6,-123,-179.1).curveTo(-121.9,-180.4,-121.9,-181.7).curveTo(-161.3,-162.2,-204.6,-122.8).curveTo(-216.8,-111.7,-240.8,-88.3).curveTo(-264.5,-65.1,-277.1,-53.7).curveTo(-245.1,-160.1,-177.3,-220.8).curveTo(-102.7,-287.6,13.5,-297.4).curveTo(15.9,-297.6,32.6,-298.1).curveTo(45.4,-298.5,52.9,-299.9).curveTo(59.4,-301.1,70.7,-306.2).lineTo(89.8,-314.7).curveTo(147.4,-337.7,198.4,-345).curveTo(273.9,-355.9,311.4,-327).curveTo(329.2,-313.2,338.1,-289.4).curveTo(346.3,-267.6,346.4,-239.4).curveTo(346.4,-213.1,339.6,-185.2).curveTo(332.9,-158.2,321.2,-134.9).curveTo(341.6,-95,350.4,-50.2).curveTo(360.6,2.3,353.2,54.6).curveTo(269.7,58,126.4,57.4).curveTo(-60,56.6,-97.3,57.1).curveTo(-93.8,111.8,-61.2,149).curveTo(-28.1,186.7,23.3,192.5).curveTo(70.1,197.8,109.8,175.4).curveTo(142.1,157.1,168.6,121.1).lineTo(340.9,121.1).curveTo(323.7,169.1,294.5,208.3).curveTo(264,249.2,222.8,277.3).curveTo(179.3,307,126.5,320.6).curveTo(70.3,335,6.1,330.4).curveTo(-20.9,328.5,-48.9,320.6).curveTo(-66.9,315.6,-99.8,303.3).curveTo(-124.7,316.5,-153.9,327.1).curveTo(-189.1,339.9,-220.5,344.9).curveTo(-239.8,348,-256.4,348).curveTo(-310.4,348,-336.1,315.6).closePath().moveTo(-277.8,156.7).curveTo(-286.1,176.7,-291,192.3).curveTo(-305,236.6,-299.2,268.8).curveTo(-294.3,295.6,-273.4,308.7).curveTo(-255.1,320.1,-226.4,319.9).curveTo(-200.9,319.7,-172.7,310.5).curveTo(-146.1,301.8,-126.9,288.5).curveTo(-172.2,263.9,-207.9,219.3).curveTo(-237.4,182.6,-264.7,126).curveTo(-268.5,135.2,-277.8,156.7).closePath().moveTo(39.6,-154.8).curveTo(14.3,-154.1,-9.2,-145.9).curveTo(-33.4,-137.4,-52.1,-122).curveTo(-72,-105.8,-83.5,-83.8).curveTo(-95.8,-60,-97.3,-31.5).lineTo(176,-31.5).curveTo(173.2,-92.2,131.1,-125.9).curveTo(112.5,-140.9,88.3,-148.3).curveTo(66.9,-154.8,43.8,-154.8).lineTo(39.6,-154.8).closePath().moveTo(207.6,-297.2).curveTo(179,-290.8,156.3,-277.7).curveTo(203.1,-259.5,242.5,-227.3).curveTo(277.5,-198.7,308.9,-157.1).curveTo(318.3,-182.3,322.3,-194.9).curveTo(329.1,-216.7,328.6,-235.9).curveTo(327.8,-265.6,308.9,-282.5).curveTo(292.3,-297.5,263.6,-300.9).curveTo(255.4,-301.8,246.8,-301.8).curveTo(228.2,-301.8,207.6,-297.2).closePath();
	this.shape.setTransform(-0.1,-10.3,0.041,0.041);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.5,3.2).lineTo(0.4,1.3).lineTo(1.1,1.6).lineTo(3.1,1.6).lineTo(3.2,1.6).curveTo(1.6,0.7,0.8,-0.5).lineTo(-0.6,-0.5).curveTo(-1.8,0.9,-3.3,1.6).lineTo(-1.3,1.6).lineTo(-1,1.2).lineTo(-0.3,1.8).lineTo(-0.6,2.1).lineTo(-0.6,4.6).lineTo(-1.2,4.9).lineTo(-1.2,4.2).lineTo(-3.1,4.2).lineTo(-3.1,4.8).lineTo(-3.7,5).lineTo(-3.7,3.3).lineTo(-3.7,1.8).lineTo(-5.5,2.4).lineTo(-5.5,2.2).curveTo(-4.2,1.7,-3.2,1.1).curveTo(-2.2,0.5,-1.4,-0.5).lineTo(-3.6,-0.5).curveTo(-4.2,-0.5,-4.8,-0.4).lineTo(-5.2,-0.8).lineTo(-1.2,-0.8).lineTo(-0.5,-2.1).lineTo(0.4,-1.5).curveTo(-0.1,-1.4,-0.5,-0.8).lineTo(2.5,-0.8).curveTo(2.2,-1.4,1.5,-1.9).lineTo(1.6,-2.1).curveTo(2.5,-1.8,2.8,-1.6).curveTo(3.2,-1.3,2.7,-0.8).lineTo(3.7,-0.8).lineTo(4.3,-1.4).lineTo(5.3,-0.5).lineTo(1.1,-0.5).curveTo(1.9,0.2,2.9,0.8).curveTo(4,1.3,5.5,1.3).lineTo(5.5,1.5).curveTo(4.8,1.6,4.6,2.2).lineTo(3.9,1.9).lineTo(3.9,2).lineTo(3.9,4.6).lineTo(3.2,4.9).lineTo(3.2,4.2).lineTo(1.1,4.2).lineTo(1.1,4.9).lineTo(0.4,5.1).lineTo(0.5,3.2).closePath().moveTo(1.1,3.9).lineTo(3.2,3.9).lineTo(3.2,1.9).lineTo(1.1,1.9).closePath().moveTo(-3.1,3.9).lineTo(-1.2,3.9).lineTo(-1.2,1.9).lineTo(-3.1,1.9).closePath().moveTo(-3.8,-3.4).lineTo(-3.9,-5.1).lineTo(-3.2,-4.7).lineTo(-1.4,-4.7).lineTo(-1.1,-5.1).lineTo(-0.3,-4.5).lineTo(-0.7,-4.3).lineTo(-0.7,-2.1).lineTo(-1.3,-1.8).lineTo(-1.3,-2.3).lineTo(-3.2,-2.3).lineTo(-3.2,-1.9).lineTo(-3.9,-1.5).lineTo(-3.8,-3.4).closePath().moveTo(-3.2,-2.6).lineTo(-1.3,-2.6).lineTo(-1.3,-4.4).lineTo(-3.2,-4.4).closePath().moveTo(0.8,-3.5).lineTo(0.7,-5.1).lineTo(1.4,-4.7).lineTo(3.2,-4.7).lineTo(3.5,-5.1).lineTo(4.2,-4.6).lineTo(3.8,-4.3).lineTo(3.9,-2.1).lineTo(3.2,-1.9).lineTo(3.2,-2.3).lineTo(1.4,-2.3).lineTo(1.4,-2).lineTo(0.7,-1.8).lineTo(0.8,-3.5).closePath().moveTo(1.4,-2.6).lineTo(3.2,-2.6).lineTo(3.2,-4.4).lineTo(1.4,-4.4).closePath();
	this.shape_1.setTransform(13.3,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.3,5.3).curveTo(-3.3,5,-2.2,4.3).curveTo(-1.1,3.6,-0.8,2.5).curveTo(-0.5,1.4,-0.5,0.2).lineTo(0.6,0.8).lineTo(0.2,1.1).curveTo(-0.1,2.9,-0.7,3.6).curveTo(-1.2,4.4,-2.2,4.8).curveTo(-3,5.2,-5.3,5.5).closePath().moveTo(1.1,5.1).curveTo(0.2,5,0.2,4.5).lineTo(0.2,2.8).lineTo(0.2,1.5).lineTo(1.2,2.1).lineTo(0.9,2.4).lineTo(0.9,4.1).curveTo(0.8,4.5,1.5,4.6).lineTo(3.9,4.6).curveTo(4.4,4.5,4.5,4).lineTo(4.6,2.6).lineTo(4.8,2.6).lineTo(4.8,3.8).curveTo(4.8,4.3,5.4,4.4).curveTo(5.1,5.1,4.3,5.1).closePath().moveTo(-3.2,0.9).lineTo(-3.3,-1.1).lineTo(-2.6,-0.6).lineTo(2.5,-0.6).lineTo(2.8,-1.1).lineTo(3.6,-0.5).lineTo(3.2,-0.2).lineTo(3.2,2.6).lineTo(2.6,2.9).lineTo(2.6,-0.4).lineTo(-2.6,-0.4).lineTo(-2.5,2.8).lineTo(-3.3,3.2).lineTo(-3.2,0.9).closePath().moveTo(-1.9,-3.3).lineTo(-1.9,-5.4).lineTo(-0.8,-4.9).lineTo(-1.3,-4.5).lineTo(-1.2,-1.4).lineTo(-1.9,-1.1).lineTo(-1.9,-3.3).closePath().moveTo(3.2,-1.4).curveTo(2.8,-2,1.6,-2.9).lineTo(1.7,-3.1).curveTo(3,-2.6,3.5,-2.3).curveTo(3.9,-2,3.7,-1.4).curveTo(3.7,-1.4,3.7,-1.3).curveTo(3.6,-1.2,3.6,-1.2).curveTo(3.6,-1.2,3.6,-1.1).curveTo(3.5,-1.1,3.5,-1.1).curveTo(3.5,-1.1,3.4,-1.1).curveTo(3.4,-1.2,3.4,-1.2).curveTo(3.3,-1.2,3.3,-1.3).curveTo(3.2,-1.4,3.2,-1.4).closePath().moveTo(-0.7,-1.3).curveTo(0.6,-3.1,1.2,-5.5).lineTo(2.2,-4.9).lineTo(1.8,-4.6).lineTo(1.3,-3.8).lineTo(3.7,-3.8).lineTo(4.2,-4.4).lineTo(5,-3.5).lineTo(1.2,-3.5).curveTo(0.4,-2.2,-0.6,-1.2).closePath().moveTo(-4.2,-3.1).lineTo(-4.2,-4.9).lineTo(-3.1,-4.4).lineTo(-3.5,-4.1).lineTo(-3.4,-1.7).lineTo(-4.2,-1.3).lineTo(-4.2,-3.1).closePath();
	this.shape_2.setTransform(1.6,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.3).lineTo(2.3,4.1).lineTo(3.9,4.2).curveTo(4.3,4.1,4.3,3.6).lineTo(4.3,-3.6).lineTo(4.2,-5.3).lineTo(5.3,-4.8).lineTo(4.9,-4.4).lineTo(4.9,3.9).curveTo(5,4.9,3.9,5.3).curveTo(3.9,4.6,2.3,4.3).closePath().moveTo(-4,4.9).curveTo(-4.6,4.5,-4.2,3.6).curveTo(-3.9,2.8,-4.2,2.5).curveTo(-4.6,2.2,-5.3,2.1).lineTo(-5.3,1.8).lineTo(-4.2,1.9).curveTo(-4,1.9,-3.7,1.5).curveTo(-3.5,1,-2.3,-2.8).lineTo(-2.1,-2.8).lineTo(-3.3,2.1).lineTo(-3.5,3.5).lineTo(-3.5,4.8).curveTo(-3.5,4.9,-3.5,4.9).curveTo(-3.5,4.9,-3.5,5).curveTo(-3.5,5,-3.6,5).curveTo(-3.6,5,-3.6,5).lineTo(-4,4.9).closePath().moveTo(-2.9,4.3).curveTo(-1.1,2.7,-0.4,1.1).curveTo(-1,-0.1,-2.1,-1.7).lineTo(-1.9,-1.8).curveTo(-0.9,-0.5,-0.2,0.6).curveTo(0.3,-0.7,0.5,-2.6).lineTo(-0.5,-2.6).curveTo(-1.1,-2.6,-1.7,-2.4).lineTo(-2.1,-2.9).lineTo(0.9,-2.9).lineTo(1.5,-3.4).lineTo(2.3,-2.6).lineTo(1.2,-2.6).curveTo(0.9,-0.3,0.3,1.2).curveTo(1.2,2.4,1.3,3).curveTo(1.4,3.6,1.2,4).curveTo(0.9,4.3,0.7,3.5).curveTo(0.5,2.7,-0.1,1.6).curveTo(-1,3.3,-2.8,4.5).closePath().moveTo(2.4,0.9).lineTo(2.4,-2.1).lineTo(2.4,-3.6).lineTo(3.4,-3.1).lineTo(3.1,-2.9).lineTo(3.1,0.9).lineTo(3.1,2.5).lineTo(2.4,2.8).lineTo(2.4,0.9).closePath().moveTo(-4.2,-0.8).curveTo(-4.4,-1.4,-5.2,-2.3).lineTo(-5.1,-2.4).curveTo(-3.5,-1.6,-3.5,-1.1).curveTo(-3.5,-0.7,-3.8,-0.4).lineTo(-3.9,-0.4).curveTo(-4.1,-0.4,-4.2,-0.8).closePath().moveTo(-3.2,-3.5).curveTo(-3.4,-4.2,-4.1,-5).lineTo(-4,-5.1).curveTo(-2.7,-4.5,-2.5,-4.1).curveTo(-2.4,-3.8,-2.7,-3.2).lineTo(-2.9,-3.1).curveTo(-3.1,-3.1,-3.2,-3.5).closePath().moveTo(-0.4,-3.6).curveTo(-0.5,-4.2,-1.1,-5.1).lineTo(-1,-5.1).curveTo(-0.2,-4.7,0.1,-4.2).curveTo(0.5,-3.8,0.1,-3.3).lineTo(-0.2,-3.1).curveTo(-0.2,-3.1,-0.2,-3.2).curveTo(-0.3,-3.2,-0.3,-3.2).curveTo(-0.3,-3.3,-0.4,-3.4).curveTo(-0.4,-3.4,-0.4,-3.6).closePath();
	this.shape_3.setTransform(-10.4,22.8);

	this.instance = new lib.circle();
	this.instance.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-44.7,88.4,88.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circle();
	this.instance.setTransform(-0.2,-0.5);

	this.instance_1 = new lib.zdkf_1();
	this.instance_1.setTransform(2,-8,1,1,0,0,0,16.5,16.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.8,4.7).lineTo(2.8,4.5).curveTo(3.9,4.7,3.9,4.6).curveTo(4,4.6,4,4.6).curveTo(4,4.5,4.1,4.5).curveTo(4.1,4.4,4.1,4.4).curveTo(4.1,4.3,4.1,4.2).lineTo(4.1,0.9).lineTo(2.9,0.9).lineTo(2.9,4.2).lineTo(2.4,4.4).lineTo(2.4,0.9).lineTo(1.3,0.9).lineTo(1.3,4.5).lineTo(0.8,4.8).lineTo(0.8,0.9).lineTo(-0.3,0.9).lineTo(-0.3,5.1).lineTo(-1,5.5).lineTo(-0.9,2.8).lineTo(-1,0.2).lineTo(-0.4,0.6).lineTo(0.9,0.6).lineTo(1.1,-0.8).lineTo(-0.1,-0.8).curveTo(-0.7,-0.8,-1.2,-0.6).lineTo(-1.6,-1.1).lineTo(4.2,-1.1).lineTo(4.7,-1.6).lineTo(5.5,-0.8).lineTo(2,-0.8).lineTo(1.2,0.6).lineTo(4.1,0.6).lineTo(4.5,0.2).lineTo(5.1,0.8).lineTo(4.7,1.1).lineTo(4.7,4.5).curveTo(4.7,4.9,4.6,5.1).curveTo(4.4,5.4,3.9,5.5).curveTo(3.7,5,2.8,4.7).closePath().moveTo(-5.4,2.9).lineTo(-3.4,2.4).curveTo(-2.8,-0.5,-2.6,-2).lineTo(-1.7,-1.6).lineTo(-2,-1.3).lineTo(-3.1,2.4).lineTo(-1.3,1.8).lineTo(-1.2,2).lineTo(-3.3,2.8).curveTo(-4.5,3.3,-4.9,3.8).closePath().moveTo(-4.3,0.8).curveTo(-4.3,-0.1,-4.8,-1.6).lineTo(-4.6,-1.7).curveTo(-3.9,-0.4,-3.7,0.4).curveTo(-3.6,1.3,-4.1,1.5).lineTo(-4.2,1.6).curveTo(-4.4,1.6,-4.3,0.8).closePath().moveTo(3.9,-2.4).lineTo(-0.2,-2.4).lineTo(-0.6,-2).lineTo(-1.1,-2.5).lineTo(-0.7,-2.8).lineTo(-0.8,-4.9).lineTo(0.2,-4.4).lineTo(-0.2,-4.1).lineTo(-0.2,-2.7).lineTo(1.5,-2.7).lineTo(1.5,-5.5).lineTo(2.4,-5).lineTo(2.1,-4.7).lineTo(2.1,-2.7).lineTo(3.9,-2.7).lineTo(3.8,-4.8).lineTo(4.8,-4.3).lineTo(4.4,-4).lineTo(4.5,-2.1).lineTo(3.9,-1.9).closePath().moveTo(-5.3,-2.7).lineTo(-2.6,-2.7).lineTo(-2.1,-3.2).lineTo(-1.4,-2.4).lineTo(-3.8,-2.4).curveTo(-4.4,-2.4,-4.9,-2.3).closePath().moveTo(-3.5,-3.7).curveTo(-3.7,-4.5,-4.2,-5.1).lineTo(-4.1,-5.2).curveTo(-3.2,-4.6,-3,-4.2).curveTo(-2.7,-3.8,-3.1,-3.4).lineTo(-3.3,-3.3).curveTo(-3.5,-3.3,-3.5,-3.7).closePath();
	this.shape.setTransform(13.3,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,5.4).curveTo(-4.1,4.6,-3.3,3.1).curveTo(-2.5,1.6,-2.5,-0.4).lineTo(-2.6,-3.8).lineTo(-1.8,-3.3).lineTo(3.8,-3.3).lineTo(4.1,-3.9).lineTo(4.9,-3.2).lineTo(4.6,-2.9).lineTo(4.6,0.3).lineTo(3.9,0.6).lineTo(3.9,-0.2).lineTo(-1.8,-0.2).curveTo(-2,3.4,-4.8,5.5).closePath().moveTo(-1.8,-0.5).lineTo(3.9,-0.5).lineTo(3.9,-3).lineTo(-1.8,-3).closePath().moveTo(0.6,-4.1).curveTo(0.4,-4.7,-0.2,-5.4).lineTo(-0.1,-5.5).curveTo(1,-5,1.3,-4.7).curveTo(1.6,-4.2,1.5,-3.9).curveTo(1.3,-3.5,1.1,-3.5).curveTo(0.9,-3.5,0.6,-4.1).closePath();
	this.shape_1.setTransform(0.9,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.8).lineTo(-2.1,4.8).lineTo(-2.1,5.2).lineTo(-2.8,5.5).lineTo(-2.7,2.1).curveTo(-4.1,2.5,-5.5,2.7).lineTo(-5.5,2.5).curveTo(-2.4,1.8,-0.2,0.1).curveTo(-1.1,-0.9,-1.7,-1.8).curveTo(-2.9,-0.2,-4.4,0.6).lineTo(-4.5,0.5).curveTo(-3.4,-0.4,-2.7,-1.4).curveTo(-1.9,-2.4,-1.6,-3.4).lineTo(-0.6,-2.7).lineTo(-1,-2.6).lineTo(-1.3,-2.1).lineTo(1.7,-2.1).lineTo(2.1,-2.5).lineTo(2.9,-1.7).lineTo(2.4,-1.5).lineTo(0.7,0.1).curveTo(2.5,1.3,5.4,1.5).lineTo(5.4,1.6).curveTo(4.7,1.8,4.5,2.4).curveTo(2.2,1.8,0.3,0.4).curveTo(-1.3,1.6,-2.4,1.9).lineTo(-2.1,2.1).lineTo(2.1,2.1).lineTo(2.5,1.7).lineTo(3.3,2.3).lineTo(2.8,2.5).lineTo(2.9,5.1).lineTo(2.3,5.5).closePath().moveTo(-2.1,4.5).lineTo(2.3,4.5).lineTo(2.3,2.4).lineTo(-2.1,2.4).closePath().moveTo(-0.7,-1).lineTo(0.2,-0.3).lineTo(1.7,-1.9).lineTo(-1.6,-1.9).lineTo(-0.7,-1).closePath().moveTo(-4.8,-2.1).curveTo(-5.4,-2.1,-4.8,-2.8).curveTo(-4.3,-3.3,-4.2,-4.2).lineTo(-4,-4.2).lineTo(-3.9,-3.7).lineTo(3.8,-3.7).lineTo(4.3,-4.2).lineTo(5.2,-3.2).curveTo(4.5,-3.3,3.4,-2.1).lineTo(3.2,-2.2).lineTo(3.9,-3.4).lineTo(-3.9,-3.4).curveTo(-3.9,-2.7,-4.2,-2.3).curveTo(-4.3,-2.1,-4.7,-2.1).lineTo(-4.8,-2.1).closePath().moveTo(-0.1,-4.1).curveTo(-0.3,-4.7,-1.1,-5.4).lineTo(-1,-5.5).curveTo(-0,-5.2,0.3,-4.9).curveTo(0.7,-4.5,0.4,-4).curveTo(0.4,-4,0.3,-3.9).curveTo(0.3,-3.9,0.3,-3.9).curveTo(0.3,-3.8,0.2,-3.8).curveTo(0.2,-3.8,0.2,-3.8).curveTo(0.1,-3.8,0.1,-3.8).curveTo(0.1,-3.8,0,-3.9).curveTo(-0,-3.9,-0,-4).curveTo(-0.1,-4,-0.1,-4.1).closePath();
	this.shape_2.setTransform(-10.3,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-44.7,88.4,88.4);


(lib.vect6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矢量智能对象 拷贝 6
	this.instance = new lib.vect6();
	this.instance.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 矢量智能对象 拷贝 6's Outer Glow
	this.instance_1 = new lib.vect6Grow();
	this.instance_1.setTransform(42,70,1,1,0,0,0,42,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,140);


(lib.vect_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 矢量智能对象
	this.instance_1 = new lib.vect();
	this.instance_1.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 矢量智能对象's Outer Glow
	this.instance_2 = new lib.vectGlow_1();
	this.instance_2.setTransform(42,70,1,1,0,0,0,42,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,140);


(lib.group2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 形状 4 拷贝 5
	this.instance = new lib.shap45_1();
	this.instance.setTransform(10,22,1,1,0,0,0,5,3);
	this.instance.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 形状 4 拷贝 7
	this.instance_1 = new lib.shap47_1();
	this.instance_1.setTransform(10,18,1,1,0,0,0,3,2);
	this.instance_1.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 形状 4 拷贝 6
	this.instance_2 = new lib.shap46_1();
	this.instance_2.setTransform(10,15,1,1,0,0,0,3,2);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 形状 4 拷贝 4
	this.instance_3 = new lib.shap44_1();
	this.instance_3.setTransform(10,12,1,1,0,0,0,5,3);
	this.instance_3.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 形状 4 拷贝 2
	this.instance_4 = new lib.shap42_1();
	this.instance_4.setTransform(10,27.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 形状 4
	this.instance_5 = new lib.shap4_1();
	this.instance_5.setTransform(10,5.5,1,1,0,0,0,10,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,33);


(lib.tzgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 通知公告
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.3,7.7).lineTo(4.3,6.8).lineTo(-4.3,6.8).lineTo(-4.3,7.7).lineTo(-5.5,7.7).lineTo(-5.5,1.4).lineTo(5.6,1.4).lineTo(5.6,7.7).closePath().moveTo(-4.3,5.7).lineTo(4.3,5.7).lineTo(4.3,2.5).lineTo(-4.3,2.5).closePath().moveTo(-7.6,-0.3).lineTo(-7.6,-1.4).lineTo(-0.2,-1.4).lineTo(-0.2,-4).lineTo(-4.4,-4).curveTo(-5.1,-2.8,-5.8,-1.8).lineTo(-7,-2.5).curveTo(-5.3,-4.8,-4.4,-7.4).lineTo(-3.2,-7).lineTo(-3.9,-5.2).lineTo(-0.2,-5.2).lineTo(-0.2,-7.6).lineTo(1.1,-7.6).lineTo(1.1,-5.2).lineTo(6.5,-5.2).lineTo(6.5,-4).lineTo(1.1,-4).lineTo(1.1,-1.4).lineTo(7.6,-1.4).lineTo(7.6,-0.3).closePath();
	this.shape.setTransform(153.1,41.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,6).lineTo(-4.3,6.5).lineTo(-5.8,6.8).lineTo(-6.4,5.4).curveTo(-5.7,5.2,-5.2,4.6).curveTo(-3.4,2.5,-1.2,-1.6).lineTo(0.2,-1).curveTo(-1.8,2.3,-4,5.2).lineTo(3.3,4.9).lineTo(1.3,2).lineTo(2.3,1.4).curveTo(4.6,4.3,6.2,6.7).lineTo(4.9,7.5).lineTo(4,6).closePath().moveTo(-7.8,-0.5).curveTo(-4.4,-3.4,-2.6,-7.2).lineTo(-1.4,-6.7).curveTo(-3.5,-2.3,-6.8,0.5).curveTo(-7.2,-0.1,-7.8,-0.5).closePath().moveTo(1,-7).lineTo(2.1,-7.5).curveTo(3.7,-3.4,7.8,-1).lineTo(6.8,0.2).curveTo(2.5,-2.7,1,-7).closePath();
	this.shape_1.setTransform(137,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,6.6).curveTo(-4.6,4.3,-4.1,0.4).lineTo(-7.3,0.4).lineTo(-7.3,-0.7).lineTo(-4.1,-0.7).lineTo(-4,-4.3).lineTo(-5.2,-4.3).lineTo(-6.2,-1.9).lineTo(-7.5,-2.4).curveTo(-6.2,-4.7,-5.5,-7.7).lineTo(-4.2,-7.4).lineTo(-4.9,-5.4).lineTo(-0.1,-5.4).lineTo(-0.1,-4.3).lineTo(-2.7,-4.3).lineTo(-2.8,-0.7).lineTo(0.2,-0.7).lineTo(0.2,0.4).lineTo(-2.9,0.4).lineTo(-3,1.2).lineTo(0.4,5.2).lineTo(-0.6,6).lineTo(-3.3,2.7).curveTo(-4.2,5.7,-6.7,7.7).lineTo(-7.5,6.6).closePath().moveTo(6.2,7.3).lineTo(6.2,5.8).lineTo(2.1,5.8).lineTo(2.1,7.3).lineTo(0.8,7.3).lineTo(0.8,-6).lineTo(7.5,-6).lineTo(7.5,7.3).closePath().moveTo(2.1,4.6).lineTo(6.2,4.6).lineTo(6.2,-4.8).lineTo(2.1,-4.8).closePath();
	this.shape_2.setTransform(120.6,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,6.1).lineTo(-5.8,4.2).lineTo(-5.8,-1).lineTo(-7.6,-1).lineTo(-7.6,-2.2).lineTo(-4.6,-2.2).lineTo(-4.6,4.5).curveTo(-3.6,6.1,-1.3,6.1).lineTo(2.6,6.1).lineTo(7.8,6).lineTo(7.3,7.2).lineTo(2.2,7.3).lineTo(-1.6,7.2).curveTo(-4.2,7.1,-5.3,5.3).curveTo(-5.9,5.9,-7.1,7.4).closePath().moveTo(3.2,5.2).lineTo(3,4).lineTo(4.7,4.1).curveTo(5.5,4.1,5.5,3.3).lineTo(5.5,2.5).lineTo(2.6,2.5).lineTo(2.6,5).lineTo(1.4,5).lineTo(1.4,2.5).lineTo(-1.5,2.5).lineTo(-1.5,5.2).lineTo(-2.6,5.2).lineTo(-2.6,-3.6).lineTo(1.2,-3.6).lineTo(-1.3,-4.8).lineTo(-0.6,-5.5).lineTo(1.7,-4.4).lineTo(4.5,-5.9).lineTo(-2.8,-5.9).lineTo(-2.8,-6.9).lineTo(6.5,-6.9).lineTo(6.5,-5.8).lineTo(2.8,-3.9).lineTo(3.3,-3.6).lineTo(6.7,-3.6).lineTo(6.7,3.5).curveTo(6.7,5.3,5,5.3).lineTo(3.2,5.2).closePath().moveTo(2.6,1.5).lineTo(5.5,1.5).lineTo(5.5,-0).lineTo(2.6,-0).closePath().moveTo(-1.5,1.5).lineTo(1.4,1.5).lineTo(1.4,-0).lineTo(-1.5,-0).closePath().moveTo(2.6,-1).lineTo(5.5,-1).lineTo(5.5,-2.6).lineTo(2.6,-2.6).closePath().moveTo(-1.5,-1).lineTo(1.4,-1).lineTo(1.4,-2.6).lineTo(-1.5,-2.6).closePath().moveTo(-6.8,-6.8).lineTo(-5.8,-7.4).lineTo(-3.6,-4.5).lineTo(-4.8,-3.7).lineTo(-6.8,-6.8).closePath();
	this.shape_3.setTransform(105,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 通知公告_1
	this.instance = new lib.tzgg1();
	this.instance.setTransform(45,41,1,1,0,0,0,21,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圆角矩形 2 拷贝 2
	this.instance_1 = new lib.leftRect("synched",0);
	this.instance_1.setTransform(94.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,191.3,84.1);


(lib.ORACLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 分布式数据库和存储及数据库
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.7,6.8).curveTo(-6.1,4.5,-6.1,-0).lineTo(-6.1,-5.8).lineTo(0.7,-5.8).lineTo(-0.4,-7.1).lineTo(0.5,-7.8).curveTo(1.3,-7.2,2,-6.3).lineTo(1.3,-5.8).lineTo(7.7,-5.8).lineTo(7.7,-4.7).lineTo(-4.9,-4.7).lineTo(-4.9,-0.3).curveTo(-4.8,5.1,-6.9,7.8).lineTo(-7.7,6.8).closePath().moveTo(1.4,7.7).lineTo(1.4,4.8).lineTo(-4.5,4.8).lineTo(-4.5,3.7).lineTo(1.4,3.7).lineTo(1.4,2.1).lineTo(-3.3,2.1).lineTo(-3.3,0.9).curveTo(-2.6,-0.3,-1.9,-1.6).lineTo(-4.1,-1.6).lineTo(-4.1,-2.8).lineTo(-1.3,-2.8).lineTo(-0.5,-4.5).lineTo(0.7,-4.2).lineTo(0.1,-2.8).lineTo(6.9,-2.8).lineTo(6.9,-1.6).lineTo(-0.5,-1.6).lineTo(-2,0.9).lineTo(1.4,0.9).lineTo(1.4,-1.1).lineTo(2.6,-1.1).lineTo(2.6,0.9).lineTo(6.9,0.9).lineTo(6.9,2.1).lineTo(2.6,2.1).lineTo(2.6,3.7).lineTo(7.7,3.7).lineTo(7.7,4.8).lineTo(2.6,4.8).lineTo(2.6,7.7).closePath();
	this.shape.setTransform(568.8,119.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,6.6).curveTo(-2.3,4.2,-2.3,-0.7).lineTo(-2.3,-6.8).lineTo(7,-6.8).lineTo(7,-2.3).lineTo(5.8,-2.3).lineTo(5.8,-2.7).lineTo(-1.1,-2.7).lineTo(-1.1,-0.8).lineTo(2.5,-0.8).lineTo(2.5,-2.4).lineTo(3.6,-2.4).lineTo(3.6,-0.8).lineTo(7.7,-0.8).lineTo(7.7,0.2).lineTo(3.6,0.2).lineTo(3.6,2.2).lineTo(6.9,2.2).lineTo(6.9,7.5).lineTo(5.7,7.5).lineTo(5.7,6.6).lineTo(0.4,6.6).lineTo(0.4,7.5).lineTo(-0.7,7.5).lineTo(-0.7,2.2).lineTo(2.5,2.2).lineTo(2.5,0.2).lineTo(-1.1,0.2).curveTo(-1.3,5.1,-3.4,7.6).lineTo(-4.2,6.6).closePath().moveTo(0.4,5.6).lineTo(5.7,5.6).lineTo(5.7,3.2).lineTo(0.4,3.2).closePath().moveTo(-1.1,-3.8).lineTo(5.8,-3.8).lineTo(5.8,-5.8).lineTo(-1.1,-5.8).closePath().moveTo(-7.4,7.4).lineTo(-7.6,6.1).lineTo(-6.3,6.2).curveTo(-5.6,6.2,-5.6,5.4).lineTo(-5.6,1.3).lineTo(-7.6,2).lineTo(-7.7,0.6).lineTo(-5.6,-0).lineTo(-5.6,-3.5).lineTo(-7.5,-3.5).lineTo(-7.5,-4.7).lineTo(-5.6,-4.7).lineTo(-5.6,-7.7).lineTo(-4.4,-7.7).lineTo(-4.4,-4.7).lineTo(-2.7,-4.7).lineTo(-2.7,-3.5).lineTo(-4.4,-3.5).lineTo(-4.4,-0.4).lineTo(-3,-0.8).lineTo(-2.9,0.4).lineTo(-4.4,0.9).lineTo(-4.4,5.6).curveTo(-4.4,7.4,-6,7.5).lineTo(-7.4,7.4).closePath();
	this.shape_1.setTransform(553.2,119.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,6.8).curveTo(1.8,5.4,3.1,3.5).curveTo(1.9,1.4,1.4,-1.5).lineTo(0.8,-0.4).lineTo(-0,-1.4).curveTo(1.8,-4,2.4,-7.8).lineTo(3.7,-7.6).curveTo(3.3,-6.1,2.9,-4.8).lineTo(7.6,-4.8).lineTo(7.6,-3.7).lineTo(6.6,-3.7).curveTo(6.3,0.9,4.6,3.6).curveTo(6,5.3,7.9,6.4).lineTo(7.1,7.6).curveTo(5.1,6.4,3.8,4.7).curveTo(2.5,6.5,0.4,7.8).lineTo(-0.5,6.8).closePath().moveTo(2.3,-3.3).curveTo(2.6,-0,3.9,2.4).curveTo(5.2,0.1,5.4,-3.7).lineTo(2.5,-3.7).lineTo(2.3,-3.3).closePath().moveTo(-7.9,6.6).curveTo(-5.7,6.1,-4.1,5.2).lineTo(-6.9,3.7).lineTo(-5.9,2.3).lineTo(-7.7,2.3).lineTo(-7.7,1.2).lineTo(-5.3,1.2).lineTo(-4.6,0).lineTo(-3.5,0.4).lineTo(-4,1.2).lineTo(-0.1,1.2).lineTo(-0.1,2.2).curveTo(-0.7,3.8,-1.9,4.9).lineTo(-0.2,5.7).lineTo(-0.9,6.8).lineTo(-2.9,5.7).curveTo(-4.7,7,-7.4,7.7).lineTo(-7.9,6.6).closePath().moveTo(-5.3,3.4).lineTo(-3.1,4.4).curveTo(-1.9,3.5,-1.4,2.3).lineTo(-4.6,2.3).lineTo(-5.3,3.4).closePath().moveTo(-7.9,-0.5).curveTo(-5.9,-1.6,-4.3,-3.1).lineTo(-7.5,-3.1).lineTo(-7.5,-4.1).lineTo(-3.9,-4.1).lineTo(-3.9,-7.6).lineTo(-2.7,-7.6).lineTo(-2.7,-4.1).lineTo(0.2,-4.1).lineTo(0.2,-3.1).lineTo(-2.7,-3.1).lineTo(-2.7,-2.2).lineTo(-2.3,-2.7).lineTo(0.1,-0.8).lineTo(-0.6,0.1).curveTo(-1.5,-0.8,-2.7,-1.8).lineTo(-2.7,0).lineTo(-3.9,0).lineTo(-3.9,-2.2).curveTo(-5.3,-0.7,-7.2,0.4).lineTo(-7.9,-0.5).closePath().moveTo(-2,-5.2).lineTo(-0.5,-7.3).lineTo(0.5,-6.6).lineTo(-1.2,-4.5).lineTo(-2,-5.2).closePath().moveTo(-7.1,-6.6).lineTo(-6.2,-7.2).lineTo(-4.7,-5.3).lineTo(-5.7,-4.6).lineTo(-7.1,-6.6).closePath();
	this.shape_2.setTransform(537.6,119.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6).curveTo(-1.4,5,0.5,3.4).curveTo(-1.5,1.3,-2.8,-1.9).curveTo(-3,0.1,-3.5,1.5).curveTo(-4.3,4.3,-6.8,7).lineTo(-7.8,5.9).curveTo(-5.4,3.5,-4.7,1).curveTo(-4,-1.2,-3.8,-6).lineTo(-7.1,-6).lineTo(-7.1,-7.2).lineTo(4.5,-7.2).lineTo(4.5,-6).lineTo(2.9,-3).lineTo(5.8,-3).lineTo(5.8,-1.8).curveTo(4.6,1.3,2.5,3.4).curveTo(4.9,5,7.7,5.6).curveTo(7.2,6.4,7,7).curveTo(3.5,5.9,1.6,4.3).curveTo(-0.6,6,-3.7,7.2).lineTo(-4.5,6).closePath().moveTo(-2.6,-4.3).curveTo(-1,0.1,1.5,2.6).curveTo(3.5,0.7,4.4,-1.8).lineTo(1.4,-1.8).lineTo(1.4,-2.8).lineTo(3,-6).lineTo(-2.6,-6).lineTo(-2.6,-4.3).closePath();
	this.shape_3.setTransform(521.9,120);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.9,7.7).lineTo(-5.9,-1.4).curveTo(-6.5,0,-7.3,1.2).lineTo(-7.8,-0).curveTo(-5.8,-3.6,-5,-7.7).lineTo(-3.8,-7.5).lineTo(-4.8,-4.1).lineTo(-4.8,7.7).closePath().moveTo(5.6,7.6).lineTo(5.6,6.5).lineTo(1.9,6.5).lineTo(1.9,7.6).lineTo(0.9,7.6).lineTo(0.9,1.2).lineTo(-0.8,2.3).lineTo(-1.4,1.3).curveTo(0.8,0.1,2.5,-1.4).lineTo(-0.8,-1.4).lineTo(-0.8,-2.4).lineTo(2,-2.4).lineTo(2,-4.6).lineTo(-0.3,-4.6).lineTo(-0.3,-5.6).lineTo(2,-5.6).lineTo(2,-7.6).lineTo(3.1,-7.6).lineTo(3.1,-5.6).lineTo(5.3,-5.6).lineTo(5.3,-4.6).lineTo(3.1,-4.6).lineTo(3.1,-2.4).lineTo(3.5,-2.4).curveTo(5.2,-4.2,6.4,-6.4).lineTo(7.4,-5.9).curveTo(6.4,-4,5,-2.4).lineTo(7.8,-2.4).lineTo(7.8,-1.4).lineTo(4,-1.4).lineTo(2.4,0).lineTo(6.6,0).lineTo(6.6,7.6).closePath().moveTo(1.9,5.6).lineTo(5.6,5.6).lineTo(5.6,3.7).lineTo(1.9,3.7).closePath().moveTo(1.9,2.7).lineTo(5.6,2.7).lineTo(5.6,1).lineTo(1.9,1).closePath().moveTo(-3.4,5.6).curveTo(-2.9,5.2,-2.9,4.4).lineTo(-2.9,-1.4).lineTo(-4.4,-1.4).lineTo(-4.4,-2.5).lineTo(-1.8,-2.5).lineTo(-1.8,4.6).lineTo(-0.1,3.4).lineTo(-0,4.7).lineTo(-2.7,6.6).closePath().moveTo(-3.4,-6.6).lineTo(-2.5,-7.1).lineTo(-1,-4.3).lineTo(-2,-3.7).lineTo(-3.4,-6.6).closePath();
	this.shape_4.setTransform(506.1,119.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.3,7.7).lineTo(-5.3,0.8).curveTo(-6.1,1.9,-7.1,2.8).lineTo(-7.8,1.7).curveTo(-5.2,-1,-3.6,-4.7).lineTo(-7.6,-4.7).lineTo(-7.6,-5.9).lineTo(-3.2,-5.9).lineTo(-2.6,-7.7).lineTo(-1.3,-7.3).lineTo(-1.8,-5.9).lineTo(7.7,-5.9).lineTo(7.7,-4.7).lineTo(-2.2,-4.7).curveTo(-3.1,-2.8,-4.1,-1).lineTo(-4.1,7.7).closePath().moveTo(-0.8,7.6).lineTo(-1,6.3).lineTo(1.2,6.5).curveTo(2,6.5,2,5.7).lineTo(2,2.4).lineTo(-3.4,2.4).lineTo(-3.4,1.2).lineTo(2,1.2).lineTo(2,0.2).curveTo(3.7,-0.9,4.9,-1.9).lineTo(-2.3,-1.9).lineTo(-2.3,-3).lineTo(6.7,-3).lineTo(6.7,-1.8).curveTo(5.1,-0.6,3.2,0.8).lineTo(3.2,1.2).lineTo(7.8,1.2).lineTo(7.8,2.4).lineTo(3.2,2.4).lineTo(3.2,5.9).curveTo(3.2,7.6,1.4,7.7).lineTo(-0.8,7.6).closePath();
	this.shape_5.setTransform(490.4,119.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,7.5).lineTo(-4.4,-0).curveTo(-5.3,2.3,-6.8,4.4).lineTo(-7.4,3.1).curveTo(-5.7,0.7,-4.6,-2.2).lineTo(-7.3,-2.2).lineTo(-7.3,-3.2).lineTo(-4.4,-3.2).lineTo(-4.4,-5.7).lineTo(-6.8,-5.4).lineTo(-7.2,-6.5).curveTo(-3.9,-6.8,-0.9,-7.5).lineTo(-0.5,-6.5).lineTo(-3.2,-5.9).lineTo(-3.2,-3.2).lineTo(-0.2,-3.2).lineTo(-0.2,-2.2).lineTo(-3.2,-2.2).lineTo(-3.2,-0.2).lineTo(-2.6,-0.7).lineTo(-0.2,1.5).lineTo(-1.1,2.4).lineTo(-3.2,0.2).lineTo(-3.2,7.5).closePath().moveTo(6.2,6.9).lineTo(6.2,5.5).lineTo(1.8,5.5).lineTo(1.8,6.9).lineTo(0.5,6.9).lineTo(0.5,-6.1).lineTo(7.4,-6.1).lineTo(7.4,6.9).closePath().moveTo(1.8,4.3).lineTo(6.2,4.3).lineTo(6.2,-5).lineTo(1.8,-5).closePath();
	this.shape_6.setTransform(474.4,119.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.7,6.8).curveTo(-6.1,4.5,-6.1,-0).lineTo(-6.1,-5.8).lineTo(0.7,-5.8).lineTo(-0.4,-7.1).lineTo(0.5,-7.8).curveTo(1.3,-7.2,2,-6.3).lineTo(1.3,-5.8).lineTo(7.7,-5.8).lineTo(7.7,-4.7).lineTo(-4.9,-4.7).lineTo(-4.9,-0.3).curveTo(-4.8,5.1,-6.9,7.8).lineTo(-7.7,6.8).closePath().moveTo(1.4,7.7).lineTo(1.4,4.8).lineTo(-4.5,4.8).lineTo(-4.5,3.7).lineTo(1.4,3.7).lineTo(1.4,2.1).lineTo(-3.3,2.1).lineTo(-3.3,0.9).curveTo(-2.6,-0.3,-1.9,-1.6).lineTo(-4.1,-1.6).lineTo(-4.1,-2.8).lineTo(-1.3,-2.8).lineTo(-0.5,-4.5).lineTo(0.7,-4.2).lineTo(0.1,-2.8).lineTo(6.9,-2.8).lineTo(6.9,-1.6).lineTo(-0.4,-1.6).lineTo(-2,0.9).lineTo(1.4,0.9).lineTo(1.4,-1.1).lineTo(2.6,-1.1).lineTo(2.6,0.9).lineTo(6.9,0.9).lineTo(6.9,2.1).lineTo(2.6,2.1).lineTo(2.6,3.7).lineTo(7.7,3.7).lineTo(7.7,4.8).lineTo(2.6,4.8).lineTo(2.6,7.7).closePath();
	this.shape_7.setTransform(458.9,119.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,6.6).curveTo(-2.3,4.2,-2.3,-0.7).lineTo(-2.3,-6.8).lineTo(7,-6.8).lineTo(7,-2.3).lineTo(5.8,-2.3).lineTo(5.8,-2.7).lineTo(-1.1,-2.7).lineTo(-1.1,-0.8).lineTo(2.5,-0.8).lineTo(2.5,-2.4).lineTo(3.6,-2.4).lineTo(3.6,-0.8).lineTo(7.7,-0.8).lineTo(7.7,0.2).lineTo(3.6,0.2).lineTo(3.6,2.2).lineTo(6.9,2.2).lineTo(6.9,7.5).lineTo(5.7,7.5).lineTo(5.7,6.6).lineTo(0.4,6.6).lineTo(0.4,7.5).lineTo(-0.7,7.5).lineTo(-0.7,2.2).lineTo(2.5,2.2).lineTo(2.5,0.2).lineTo(-1.1,0.2).curveTo(-1.3,5.1,-3.4,7.6).lineTo(-4.2,6.6).closePath().moveTo(0.4,5.6).lineTo(5.7,5.6).lineTo(5.7,3.2).lineTo(0.4,3.2).closePath().moveTo(-1.1,-3.8).lineTo(5.8,-3.8).lineTo(5.8,-5.8).lineTo(-1.1,-5.8).closePath().moveTo(-7.4,7.4).lineTo(-7.6,6.1).lineTo(-6.3,6.2).curveTo(-5.6,6.2,-5.6,5.4).lineTo(-5.6,1.3).lineTo(-7.6,2).lineTo(-7.7,0.6).lineTo(-5.6,-0).lineTo(-5.6,-3.5).lineTo(-7.5,-3.5).lineTo(-7.5,-4.7).lineTo(-5.6,-4.7).lineTo(-5.6,-7.7).lineTo(-4.4,-7.7).lineTo(-4.4,-4.7).lineTo(-2.7,-4.7).lineTo(-2.7,-3.5).lineTo(-4.4,-3.5).lineTo(-4.4,-0.4).lineTo(-3,-0.8).lineTo(-2.9,0.4).lineTo(-4.4,0.9).lineTo(-4.4,5.6).curveTo(-4.4,7.4,-6,7.5).lineTo(-7.4,7.4).closePath();
	this.shape_8.setTransform(443.3,119.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,6.8).curveTo(1.8,5.4,3.1,3.5).curveTo(1.9,1.4,1.4,-1.5).lineTo(0.8,-0.4).lineTo(-0,-1.4).curveTo(1.8,-4,2.4,-7.8).lineTo(3.7,-7.6).curveTo(3.3,-6.1,2.9,-4.8).lineTo(7.6,-4.8).lineTo(7.6,-3.7).lineTo(6.6,-3.7).curveTo(6.3,0.9,4.7,3.6).curveTo(6,5.3,7.9,6.4).lineTo(7.1,7.6).curveTo(5.1,6.4,3.8,4.7).curveTo(2.5,6.5,0.4,7.8).lineTo(-0.5,6.8).closePath().moveTo(2.3,-3.3).curveTo(2.6,-0,3.9,2.4).curveTo(5.1,0.1,5.4,-3.7).lineTo(2.5,-3.7).lineTo(2.3,-3.3).closePath().moveTo(-7.9,6.6).curveTo(-5.6,6.1,-4.1,5.2).lineTo(-6.9,3.7).lineTo(-5.9,2.3).lineTo(-7.7,2.3).lineTo(-7.7,1.2).lineTo(-5.3,1.2).lineTo(-4.6,0).lineTo(-3.5,0.4).lineTo(-4,1.2).lineTo(-0.1,1.2).lineTo(-0.1,2.2).curveTo(-0.8,3.8,-1.9,4.9).lineTo(-0.2,5.7).lineTo(-0.9,6.8).lineTo(-2.9,5.7).curveTo(-4.7,7,-7.4,7.7).lineTo(-7.9,6.6).closePath().moveTo(-5.3,3.4).lineTo(-3.1,4.4).curveTo(-1.9,3.5,-1.4,2.3).lineTo(-4.6,2.3).lineTo(-5.3,3.4).closePath().moveTo(-7.9,-0.5).curveTo(-5.9,-1.6,-4.3,-3.1).lineTo(-7.5,-3.1).lineTo(-7.5,-4.1).lineTo(-3.9,-4.1).lineTo(-3.9,-7.6).lineTo(-2.7,-7.6).lineTo(-2.7,-4.1).lineTo(0.2,-4.1).lineTo(0.2,-3.1).lineTo(-2.7,-3.1).lineTo(-2.7,-2.2).lineTo(-2.3,-2.7).lineTo(0.2,-0.8).lineTo(-0.6,0.1).curveTo(-1.4,-0.8,-2.7,-1.8).lineTo(-2.7,0).lineTo(-3.9,0).lineTo(-3.9,-2.2).curveTo(-5.3,-0.7,-7.2,0.4).lineTo(-7.9,-0.5).closePath().moveTo(-2.1,-5.2).lineTo(-0.5,-7.3).lineTo(0.5,-6.6).lineTo(-1.2,-4.5).lineTo(-2.1,-5.2).closePath().moveTo(-7.1,-6.6).lineTo(-6.2,-7.2).lineTo(-4.8,-5.3).lineTo(-5.7,-4.6).lineTo(-7.1,-6.6).closePath();
	this.shape_9.setTransform(427.7,119.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,6.6).curveTo(1.3,4.2,1,-3.5).lineTo(-7.8,-3.5).lineTo(-7.8,-4.7).lineTo(0.9,-4.7).lineTo(0.9,-7.7).lineTo(2.1,-7.7).lineTo(2.2,-4.7).lineTo(7.6,-4.7).lineTo(7.6,-3.5).lineTo(2.2,-3.5).curveTo(2.5,4.4,4.9,6.1).curveTo(5.7,6.7,6.1,5.7).lineTo(6.5,3.3).lineTo(7.7,3.7).lineTo(7.2,6.6).curveTo(6.7,7.7,5.7,7.7).curveTo(4.6,7.7,3.6,6.6).closePath().moveTo(-7.7,5.2).lineTo(-4.1,4.8).lineTo(-4.1,0.4).lineTo(-7.1,0.4).lineTo(-7.1,-0.8).lineTo(0.2,-0.8).lineTo(0.2,0.4).lineTo(-2.8,0.4).lineTo(-2.8,4.6).lineTo(1,4).lineTo(0.9,5.3).lineTo(-7.4,6.5).closePath().moveTo(3.3,-6.8).lineTo(4.1,-7.6).curveTo(5.2,-6.8,6.4,-5.8).lineTo(5.5,-4.9).lineTo(3.3,-6.8).closePath();
	this.shape_10.setTransform(412,119.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.2,7.7).lineTo(0.2,0).lineTo(-3.3,0).lineTo(-3.3,6.6).lineTo(-4.5,6.6).lineTo(-4.5,0.4).lineTo(-6.8,3.1).curveTo(-7.2,2.5,-7.7,2.1).curveTo(-4.8,-0.9,-3.1,-4.3).lineTo(-7.5,-4.3).lineTo(-7.5,-5.4).lineTo(-2.4,-5.4).lineTo(-1.5,-7.7).lineTo(-0.3,-7.2).lineTo(-1,-5.4).lineTo(7.7,-5.4).lineTo(7.7,-4.3).lineTo(-1.6,-4.3).lineTo(-3.5,-1.1).lineTo(0.2,-1.1).lineTo(0.2,-3.5).lineTo(1.4,-3.5).lineTo(1.4,-1.1).lineTo(6.3,-1.1).lineTo(6.3,4.3).curveTo(6.3,6.2,4.7,6.2).lineTo(2.3,6.2).lineTo(2.1,4.9).lineTo(3.9,5).curveTo(5,5,5,4).lineTo(5,0).lineTo(1.4,0).lineTo(1.4,7.7).closePath();
	this.shape_11.setTransform(396.2,119.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,6.8).curveTo(-4.9,5.8,-3.7,4).curveTo(-2.9,2.5,-2.8,0.4).lineTo(-5.8,0.4).lineTo(-5.8,-0.8).lineTo(4.6,-0.8).lineTo(4.4,4.4).curveTo(4.2,7.3,1.6,7.3).lineTo(-1.1,7.2).lineTo(-1.3,5.9).lineTo(1.4,6.1).curveTo(3,6.1,3.1,4.3).lineTo(3.3,0.4).lineTo(-1.5,0.4).curveTo(-1.7,2.9,-2.6,4.5).curveTo(-3.8,6.6,-6.6,7.8).lineTo(-7.4,6.8).closePath().moveTo(-7.9,-1.3).curveTo(-4.7,-3.6,-2.4,-7.5).lineTo(-1.3,-6.9).curveTo(-3.7,-2.8,-7,-0.2).lineTo(-7.9,-1.3).closePath().moveTo(0.7,-7.3).lineTo(1.8,-7.8).curveTo(3.5,-3.6,7.9,-1.5).curveTo(7.1,-0.8,6.8,-0.3).curveTo(2.5,-2.8,0.7,-7.3).closePath();
	this.shape_12.setTransform(380.6,119.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ORACLE
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2,4.3).lineTo(-3.2,-4.3).lineTo(3,-4.3).lineTo(3,-3.3).lineTo(-2,-3.3).lineTo(-2,-0.6).lineTo(2.7,-0.6).lineTo(2.7,0.4).lineTo(-2,0.4).lineTo(-2,3.3).lineTo(3.2,3.3).lineTo(3.2,4.3).closePath();
	this.shape_13.setTransform(495.5,92.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.7,4.3).lineTo(-2.7,-4.3).lineTo(-1.6,-4.3).lineTo(-1.6,3.3).lineTo(2.7,3.3).lineTo(2.7,4.3).closePath();
	this.shape_14.setTransform(488.5,92.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2,3.9).curveTo(-2.9,3.3,-3.3,2.2).curveTo(-3.8,1.1,-3.8,-0.1).curveTo(-3.8,-1.4,-3.3,-2.4).curveTo(-2.8,-3.4,-1.9,-3.9).curveTo(-0.9,-4.5,0.3,-4.4).curveTo(1.6,-4.5,2.4,-3.8).curveTo(3.3,-3.1,3.6,-2).lineTo(2.5,-1.6).curveTo(2.3,-2.6,1.6,-3.1).curveTo(1.1,-3.4,0.3,-3.4).curveTo(-0.7,-3.5,-1.4,-3).curveTo(-2.1,-2.5,-2.3,-1.7).curveTo(-2.7,-0.9,-2.7,-0.1).curveTo(-2.7,1,-2.3,1.9).curveTo(-2,2.7,-1.3,3.1).curveTo(-0.6,3.4,0.1,3.4).curveTo(1.1,3.5,1.7,2.9).curveTo(2.4,2.4,2.6,1.3).lineTo(3.8,1.6).curveTo(3.4,3,2.5,3.7).curveTo(1.6,4.5,0.3,4.4).curveTo(-1.2,4.5,-2,3.9).closePath();
	this.shape_15.setTransform(480.9,92.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.7,4.3).lineTo(1.7,1.7).lineTo(-1.9,1.7).lineTo(-2.8,4.3).lineTo(-4,4.3).lineTo(-0.7,-4.3).lineTo(0.5,-4.3).lineTo(4,4.3).closePath().moveTo(-0.6,-1.7).lineTo(-1.6,0.7).lineTo(1.4,0.7).lineTo(0.5,-1.6).lineTo(-0.1,-3.4).curveTo(-0.3,-2.5,-0.6,-1.7).closePath();
	this.shape_16.setTransform(472.7,92.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,4.3).lineTo(1.2,2.5).lineTo(0.4,1.3).lineTo(-0.2,0.7).lineTo(-0.7,0.5).lineTo(-1.3,0.5).lineTo(-2.6,0.5).lineTo(-2.6,4.3).lineTo(-3.8,4.3).lineTo(-3.8,-4.3).lineTo(0,-4.3).curveTo(1.2,-4.3,1.8,-4).curveTo(2.4,-3.9,2.7,-3.2).curveTo(3.1,-2.7,3.1,-2).curveTo(3.1,-1.1,2.5,-0.4).curveTo(1.9,0.2,0.7,0.4).lineTo(1.4,0.8).lineTo(2.3,2).lineTo(3.8,4.3).closePath().moveTo(-2.6,-0.5).lineTo(-0.2,-0.5).curveTo(0.6,-0.5,1,-0.6).curveTo(1.5,-0.8,1.7,-1.2).curveTo(1.9,-1.5,1.9,-2).curveTo(1.9,-2.5,1.5,-3).curveTo(1,-3.3,0.1,-3.3).lineTo(-2.6,-3.3).closePath();
	this.shape_17.setTransform(464.9,92.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,3.9).curveTo(-3.1,3.2,-3.7,2.2).curveTo(-4.1,1.2,-4.1,0.1).curveTo(-4.1,-2,-3,-3.2).curveTo(-1.8,-4.4,0,-4.4).curveTo(1.2,-4.4,2.2,-3.9).curveTo(3.1,-3.3,3.6,-2.3).curveTo(4.1,-1.3,4.1,-0).curveTo(4.1,1.3,3.5,2.3).curveTo(3,3.4,2.1,3.9).curveTo(1.1,4.5,0,4.4).curveTo(-1.3,4.4,-2.2,3.9).closePath().moveTo(-2.1,-2.6).curveTo(-3,-1.8,-3,0.2).curveTo(-3,1.7,-2.1,2.6).curveTo(-1.3,3.5,0,3.4).curveTo(1.3,3.4,2.1,2.5).curveTo(2.9,1.7,2.9,-0).curveTo(2.9,-1,2.5,-1.8).curveTo(2.2,-2.6,1.5,-3.1).curveTo(0.9,-3.4,0,-3.4).curveTo(-1.2,-3.4,-2.1,-2.6).closePath();
	this.shape_18.setTransform(455.8,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// 数据 拷贝
	this.instance = new lib.data1_1();
	this.instance.setTransform(521,88,1,1,0,0,0,16,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 数据
	this.instance_1 = new lib.data();
	this.instance_1.setTransform(428,87,1,1,0,0,0,16,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 数据库
	this.instance_2 = new lib.database();
	this.instance_2.setTransform(475,54,1,1,0,0,0,27,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginRadialGradientFill(["rgba(30,203,214,0.51)","rgba(30,203,214,0)"],[0,1],0,0,0,0,0,34.6).beginStroke().moveTo(-24,24).curveTo(-33.9,14,-33.9,0).curveTo(-33.9,-14.1,-24,-24).curveTo(-14,-33.9,-0,-33.9).curveTo(14.1,-33.9,23.9,-24).curveTo(33.9,-14.1,33.9,0).curveTo(33.9,14,23.9,24).curveTo(14.1,33.9,-0,33.9).curveTo(-14,33.9,-24,24).closePath();
	this.shape_19.setTransform(475.1,55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(370.4,21.6,208.3,109.6);


(lib.dbsw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 代办事务
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,6.8).curveTo(-3.1,5.4,-2.2,2.4).lineTo(-6.6,2.4).lineTo(-6.6,1.3).lineTo(-2,1.3).lineTo(-1.8,-0.4).lineTo(-0.5,-0.4).lineTo(-0.7,1.3).lineTo(5.6,1.3).lineTo(5.2,5.2).curveTo(5,7.4,2.6,7.4).lineTo(-0.1,7.4).lineTo(-0.4,6.1).lineTo(2.6,6.3).curveTo(3.9,6.2,4.1,4.9).lineTo(4.3,2.4).lineTo(-1,2.4).curveTo(-1.7,6.2,-6.8,7.9).lineTo(-7.5,6.8).closePath().moveTo(-7.9,-0.4).curveTo(-4,-1,-1.1,-2.1).curveTo(-2.9,-3.2,-4,-4.7).curveTo(-5.2,-3.3,-6.7,-2).lineTo(-7.5,-2.9).curveTo(-4.6,-5.2,-3.2,-7.9).lineTo(-2.1,-7.4).lineTo(-2.8,-6.2).lineTo(5.7,-6.2).lineTo(5.7,-5.2).curveTo(4.2,-3.4,1.6,-2.1).curveTo(4.3,-1.1,7.9,-0.9).lineTo(7,0.4).curveTo(3,-0.1,0.2,-1.4).curveTo(-2.9,-0.1,-7.3,0.7).lineTo(-7.9,-0.4).closePath().moveTo(0.3,-2.7).curveTo(2.5,-3.8,4,-5.2).lineTo(-3,-5.2).curveTo(-1.8,-3.7,0.3,-2.7).closePath();
	this.shape.setTransform(153,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,7.6).lineTo(-3.7,6.3).lineTo(-1.5,6.4).curveTo(-0.6,6.5,-0.6,5.5).lineTo(-0.6,4.8).lineTo(-6.7,4.8).lineTo(-6.7,3.9).lineTo(-0.6,3.9).lineTo(-0.6,2.7).lineTo(-7.7,2.7).lineTo(-7.7,1.7).lineTo(-0.6,1.7).lineTo(-0.6,0.6).lineTo(-6.6,0.6).lineTo(-6.6,-0.3).lineTo(-0.6,-0.3).lineTo(-0.6,-1.4).lineTo(-4.6,-1.4).lineTo(-4.6,-1.1).lineTo(-5.7,-1.1).lineTo(-5.7,-4.4).lineTo(-0.6,-4.4).lineTo(-0.6,-5.4).lineTo(-7.6,-5.4).lineTo(-7.6,-6.4).lineTo(-0.6,-6.4).lineTo(-0.6,-7.6).lineTo(0.6,-7.6).lineTo(0.6,-6.4).lineTo(7.6,-6.4).lineTo(7.6,-5.4).lineTo(0.6,-5.4).lineTo(0.6,-4.4).lineTo(5.6,-4.4).lineTo(5.6,-1.1).lineTo(4.5,-1.1).lineTo(4.5,-1.4).lineTo(0.6,-1.4).lineTo(0.6,-0.3).lineTo(6,-0.3).lineTo(6,1.7).lineTo(7.7,1.7).lineTo(7.7,2.7).lineTo(6,2.7).lineTo(6,5.5).lineTo(4.9,5.5).lineTo(4.9,4.8).lineTo(0.6,4.8).lineTo(0.6,5.7).curveTo(0.5,7.6,-1.2,7.6).lineTo(-3.5,7.6).closePath().moveTo(0.6,3.9).lineTo(4.9,3.9).lineTo(4.9,2.7).lineTo(0.6,2.7).closePath().moveTo(0.6,1.7).lineTo(4.9,1.7).lineTo(4.9,0.6).lineTo(0.6,0.6).closePath().moveTo(0.6,-2.3).lineTo(4.5,-2.3).lineTo(4.5,-3.5).lineTo(0.6,-3.5).closePath().moveTo(-4.6,-2.3).lineTo(-0.6,-2.3).lineTo(-0.6,-3.5).lineTo(-4.6,-3.5).closePath();
	this.shape_1.setTransform(137.1,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,6.6).curveTo(-4.3,4.5,-3.5,2.6).curveTo(-2.6,1,-2.4,-3.5).lineTo(-6.9,-3.5).lineTo(-6.9,-4.8).lineTo(-2.3,-4.8).lineTo(-2.2,-7.6).lineTo(-0.9,-7.6).lineTo(-1,-4.8).lineTo(4.8,-4.8).lineTo(4.5,4.1).curveTo(4.3,7.2,1.8,7.2).lineTo(-1.2,7.1).lineTo(-1.4,5.6).curveTo(0.3,5.8,1.6,5.8).curveTo(3.1,5.8,3.2,3.8).lineTo(3.5,-3.5).lineTo(-1.1,-3.5).curveTo(-1.3,1.4,-2.4,3.4).curveTo(-3.3,5.6,-6.6,7.6).lineTo(-7.4,6.6).closePath().moveTo(-7.8,2.5).curveTo(-6.5,0.3,-5.6,-2.1).lineTo(-4.4,-1.7).curveTo(-5.4,0.7,-6.6,3.1).lineTo(-7.8,2.5).closePath().moveTo(5,-1.6).lineTo(6.1,-2).lineTo(7.8,2.2).lineTo(6.5,2.6).curveTo(5.8,0.5,5,-1.6).closePath();
	this.shape_2.setTransform(121,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.5,7.7).lineTo(-5.5,-1.5).curveTo(-6.4,-0,-7.3,1.2).lineTo(-7.8,-0.2).curveTo(-5.4,-3.5,-4,-7.7).lineTo(-2.7,-7.3).lineTo(-4.2,-3.9).lineTo(-4.2,7.7).closePath().moveTo(5.6,7.6).curveTo(4.2,7.6,3.1,6).curveTo(1.2,3.9,0.5,-1.5).lineTo(-3.2,-1.1).lineTo(-3.3,-2.2).lineTo(0.3,-2.7).lineTo(0.1,-7.6).lineTo(1.4,-7.6).curveTo(1.4,-5.3,1.6,-2.8).lineTo(7.4,-3.4).lineTo(7.6,-2.2).lineTo(1.8,-1.6).curveTo(2.7,4.8,5.2,6.1).curveTo(5.9,6.4,6.1,5.7).curveTo(6.4,4.6,6.6,3.2).lineTo(7.8,3.6).curveTo(7.6,5.1,7.3,6.3).curveTo(6.9,7.6,5.7,7.6).lineTo(5.6,7.6).closePath().moveTo(2.9,-6.4).lineTo(3.7,-7.2).lineTo(6.6,-4.9).lineTo(5.6,-3.9).lineTo(2.9,-6.4).closePath();
	this.shape_3.setTransform(105,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// iconfont-daiban.svg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.4,-3.3,0).curveTo(-3.3,-1.3,-2.3,-2.3).curveTo(-1.3,-3.3,-0,-3.2).curveTo(1.3,-3.3,2.3,-2.3).curveTo(3.3,-1.3,3.3,0).curveTo(3.3,1.4,2.3,2.3).curveTo(1.3,3.3,-0,3.3).curveTo(-1.3,3.3,-2.3,2.3).closePath();
	this.shape_4.setTransform(67.4,42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.4,-3.3,0).curveTo(-3.3,-1.3,-2.3,-2.3).curveTo(-1.3,-3.3,-0,-3.2).curveTo(1.3,-3.3,2.3,-2.3).curveTo(3.3,-1.3,3.3,0).curveTo(3.3,1.4,2.3,2.3).curveTo(1.3,3.3,-0,3.3).curveTo(-1.3,3.3,-2.3,2.3).closePath();
	this.shape_5.setTransform(56.7,42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.3).curveTo(-3.3,1.4,-3.3,0).curveTo(-3.3,-1.3,-2.3,-2.3).curveTo(-1.3,-3.3,-0,-3.2).curveTo(1.3,-3.3,2.3,-2.3).curveTo(3.3,-1.3,3.3,0).curveTo(3.3,1.4,2.3,2.3).curveTo(1.3,3.3,-0,3.3).curveTo(-1.3,3.3,-2.3,2.3).closePath();
	this.shape_6.setTransform(47.4,42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-245.2,399).curveTo(-264,399,-277.4,385.6).curveTo(-290.8,372.3,-290.8,353.5).lineTo(-290.8,-353.5).curveTo(-290.8,-372.3,-277.4,-385.6).curveTo(-264,-399,-245.2,-399).lineTo(245.3,-399).curveTo(264.1,-399,277.4,-385.6).curveTo(290.8,-372.3,290.7,-353.5).lineTo(290.7,-119.8).curveTo(290.7,-105.7,280.8,-95.7).curveTo(270.8,-85.7,256.6,-85.7).curveTo(242.6,-85.7,232.5,-95.6).curveTo(222.5,-105.6,222.5,-119.8).lineTo(222.4,-119.8).lineTo(222.4,-291.9).curveTo(222.4,-308,211.1,-319.4).curveTo(199.6,-330.9,183.5,-330.9).lineTo(-183.4,-330.9).curveTo(-199.5,-330.9,-210.9,-319.4).curveTo(-222.3,-308,-222.3,-291.9).lineTo(-222.3,291.6).curveTo(-222.3,307.8,-210.9,319.2).curveTo(-199.5,330.6,-183.4,330.6).lineTo(183.5,330.6).curveTo(199.6,330.6,211.1,319.2).curveTo(222.4,307.8,222.4,291.6).lineTo(222.4,193.8).lineTo(222.9,193.8).curveTo(224,180.7,233.7,171.7).curveTo(243.4,162.6,256.6,162.6).curveTo(269.9,162.6,279.7,171.7).curveTo(289.3,180.7,290.5,193.8).lineTo(290.7,193.8).lineTo(290.7,353.5).curveTo(290.8,372.4,277.4,385.7).curveTo(264.1,399,245.3,399).closePath();
	this.shape_7.setTransform(39.7,40.7,0.05,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-56.8,34.1).curveTo(-70.9,34.1,-80.9,24.2).curveTo(-90.9,14.1,-90.9,-0).curveTo(-90.9,-14.1,-80.9,-24.1).curveTo(-70.9,-34.1,-56.8,-34.1).lineTo(56.8,-34.1).curveTo(71,-34.1,81,-24.1).curveTo(91,-14.1,90.9,-0).curveTo(90.9,14.1,80.9,24.2).curveTo(71,34.1,56.8,34.1).closePath();
	this.shape_8.setTransform(36.6,46,0.05,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-56.8,34.1).curveTo(-70.9,34.1,-80.9,24.1).curveTo(-90.9,14.1,-90.9,-0).curveTo(-90.9,-14.1,-80.9,-24.1).curveTo(-70.9,-34.1,-56.8,-34.1).lineTo(56.8,-34.1).curveTo(71,-34.1,81,-24.1).curveTo(91,-14.2,90.9,-0).curveTo(90.9,14.2,80.9,24.1).curveTo(71,34.1,56.8,34.1).closePath();
	this.shape_9.setTransform(36.6,39.8,0.05,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-120.3,34.1).curveTo(-134.4,34.1,-144.4,24.1).curveTo(-154.4,14.1,-154.4,-0).curveTo(-154.4,-14.1,-144.4,-24.1).curveTo(-134.4,-34.1,-120.3,-34.1).lineTo(120.3,-34.1).curveTo(134.5,-34.1,144.4,-24.1).curveTo(154.4,-14.1,154.4,-0).curveTo(154.4,14.1,144.5,24.1).curveTo(134.5,34.1,120.4,34.1).closePath();
	this.shape_10.setTransform(39.7,33,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// 圆角矩形 2 拷贝 2
	this.instance = new lib.leftRect("synched",0);
	this.instance.setTransform(94.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,191.3,84.1);


(lib.dbrw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 代办任务
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,6.8).curveTo(-3.1,5.4,-2.2,2.4).lineTo(-6.6,2.4).lineTo(-6.6,1.3).lineTo(-2,1.3).lineTo(-1.8,-0.4).lineTo(-0.5,-0.4).lineTo(-0.7,1.3).lineTo(5.6,1.3).lineTo(5.2,5.2).curveTo(5,7.4,2.6,7.4).lineTo(-0.1,7.4).lineTo(-0.4,6.1).lineTo(2.6,6.3).curveTo(3.9,6.2,4.1,4.9).lineTo(4.3,2.4).lineTo(-1,2.4).curveTo(-1.7,6.2,-6.8,7.9).lineTo(-7.5,6.8).closePath().moveTo(-7.9,-0.4).curveTo(-4,-1,-1.1,-2.1).curveTo(-2.9,-3.2,-4,-4.7).curveTo(-5.2,-3.3,-6.7,-2).lineTo(-7.5,-2.9).curveTo(-4.6,-5.2,-3.2,-7.9).lineTo(-2.1,-7.4).lineTo(-2.8,-6.2).lineTo(5.7,-6.2).lineTo(5.7,-5.2).curveTo(4.2,-3.4,1.6,-2.1).curveTo(4.3,-1.1,7.9,-0.9).lineTo(7,0.4).curveTo(3,-0.1,0.2,-1.4).curveTo(-2.9,-0.1,-7.3,0.7).lineTo(-7.9,-0.4).closePath().moveTo(0.3,-2.7).curveTo(2.5,-3.8,4,-5.2).lineTo(-3,-5.2).curveTo(-1.8,-3.7,0.3,-2.7).closePath();
	this.shape.setTransform(153,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,7.7).lineTo(-5.4,-1.5).curveTo(-6.3,0,-7.3,1.2).lineTo(-7.8,-0.2).curveTo(-5.4,-3.5,-4,-7.7).lineTo(-2.7,-7.2).lineTo(-4.2,-3.8).lineTo(-4.2,7.7).closePath().moveTo(-2.6,6.7).lineTo(-2.6,5.6).lineTo(1.9,5.6).lineTo(1.9,0.6).lineTo(-3,0.6).lineTo(-3,-0.5).lineTo(1.9,-0.5).lineTo(1.9,-5.2).lineTo(-2.2,-4.9).lineTo(-2.4,-6.2).curveTo(2.9,-6.4,6.9,-6.9).lineTo(7.2,-5.6).lineTo(3.2,-5.3).lineTo(3.2,-0.5).lineTo(7.8,-0.5).lineTo(7.8,0.6).lineTo(3.2,0.6).lineTo(3.2,5.6).lineTo(7.5,5.6).lineTo(7.5,6.7).closePath();
	this.shape_1.setTransform(137,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,6.6).curveTo(-4.3,4.5,-3.5,2.6).curveTo(-2.6,1,-2.4,-3.5).lineTo(-6.9,-3.5).lineTo(-6.9,-4.8).lineTo(-2.3,-4.8).lineTo(-2.2,-7.6).lineTo(-0.9,-7.6).lineTo(-1,-4.8).lineTo(4.8,-4.8).lineTo(4.5,4.1).curveTo(4.3,7.2,1.8,7.2).lineTo(-1.2,7.1).lineTo(-1.4,5.6).curveTo(0.3,5.8,1.6,5.8).curveTo(3.1,5.8,3.2,3.8).lineTo(3.5,-3.5).lineTo(-1.1,-3.5).curveTo(-1.3,1.4,-2.4,3.4).curveTo(-3.3,5.6,-6.6,7.6).lineTo(-7.4,6.6).closePath().moveTo(-7.8,2.5).curveTo(-6.5,0.3,-5.6,-2.1).lineTo(-4.4,-1.7).curveTo(-5.4,0.7,-6.6,3.1).lineTo(-7.8,2.5).closePath().moveTo(5,-1.6).lineTo(6.1,-2).lineTo(7.8,2.2).lineTo(6.5,2.6).curveTo(5.8,0.5,5,-1.6).closePath();
	this.shape_2.setTransform(121,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.5,7.7).lineTo(-5.5,-1.5).curveTo(-6.4,-0,-7.3,1.2).lineTo(-7.8,-0.2).curveTo(-5.4,-3.5,-4,-7.7).lineTo(-2.7,-7.3).lineTo(-4.2,-3.9).lineTo(-4.2,7.7).closePath().moveTo(5.6,7.6).curveTo(4.2,7.6,3.1,6).curveTo(1.2,3.9,0.5,-1.5).lineTo(-3.2,-1.1).lineTo(-3.3,-2.2).lineTo(0.3,-2.7).lineTo(0.1,-7.6).lineTo(1.4,-7.6).curveTo(1.4,-5.3,1.6,-2.8).lineTo(7.4,-3.4).lineTo(7.6,-2.2).lineTo(1.8,-1.6).curveTo(2.7,4.8,5.2,6.1).curveTo(5.9,6.4,6.1,5.7).curveTo(6.4,4.6,6.6,3.2).lineTo(7.8,3.6).curveTo(7.6,5.1,7.3,6.3).curveTo(6.9,7.6,5.7,7.6).lineTo(5.6,7.6).closePath().moveTo(2.9,-6.4).lineTo(3.7,-7.2).lineTo(6.6,-4.9).lineTo(5.6,-3.9).lineTo(2.9,-6.4).closePath();
	this.shape_3.setTransform(105,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// flash0.ai
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(72.6,350.4).lineTo(72.6,331.9).curveTo(72.5,329.4,74.5,327.6).curveTo(76.5,325.8,79.2,325.8).lineTo(101.7,325.8).curveTo(102.1,298,111.4,273.8).curveTo(118.4,256.1,131.9,236.9).curveTo(146.6,217.4,152.1,209).curveTo(161.3,195.1,161.2,184.5).curveTo(161.2,174.2,151.9,163.3).curveTo(138.9,150.1,131.4,141.1).curveTo(117.9,124.8,110.8,105.2).curveTo(101.4,79.2,101.2,43.1).lineTo(79.2,43.1).curveTo(76.5,43.1,74.5,41.3).curveTo(72.5,39.5,72.6,37).lineTo(72.6,18.5).lineTo(327.9,18.5).lineTo(327.9,37).curveTo(327.8,39.5,325.9,41.3).curveTo(323.9,43.1,321.1,43.1).lineTo(300.5,43.1).curveTo(300.3,79.2,291,105.2).curveTo(283.8,124.9,270.3,141.1).curveTo(266.2,146,259.3,153.1).curveTo(252.2,160.5,249.8,163.3).curveTo(240.5,174.2,240.5,184.5).curveTo(240.5,195.1,249.7,209).curveTo(255.1,217.4,269.8,236.9).curveTo(283.3,256.1,290.3,273.8).curveTo(299.7,298,300.1,325.8).lineTo(321.1,325.8).curveTo(323.9,325.8,325.9,327.6).curveTo(327.8,329.4,327.9,331.9).lineTo(327.9,350.4).closePath().moveTo(207.8,284.2).curveTo(211,286.9,227.7,294.9).lineTo(245.5,303.3).curveTo(253.9,307.2,255,314.2).curveTo(255.2,315.7,255.3,320.1).curveTo(255.4,323.7,256,325.8).lineTo(268,325.8).curveTo(267.6,297.9,258.2,273.6).curveTo(251.3,255.6,237.7,236.4).curveTo(223.1,216.9,217.5,208.6).curveTo(208.4,194.7,208.4,184.5).curveTo(208.4,174.1,217.7,163.2).curveTo(230.7,150,238.2,141).curveTo(251.8,124.8,258.9,105.2).curveTo(268.3,79.2,268.5,43.1).lineTo(133.2,43.1).curveTo(133.4,79.2,142.9,105.2).curveTo(150,124.8,163.5,141).curveTo(171,150,184.1,163.2).curveTo(193.4,174.1,193.3,184.5).curveTo(193.4,194.5,184.6,207.9).curveTo(179.4,216,165.2,234.7).curveTo(152,253.2,145,270.1).curveTo(135.4,293.1,134,319.2).curveTo(131.6,322.6,130.5,325.8).lineTo(133.8,325.8).lineTo(134,319.2).curveTo(140.7,309.8,154.6,303.3).lineTo(172.4,294.9).curveTo(189.4,286.9,192.5,284.2).curveTo(195.8,281.5,200.2,271.8).curveTo(204.6,281.5,207.8,284.2).closePath().moveTo(-238.6,235.3).lineTo(-238.6,-260.2).lineTo(-82.4,-260.2).lineTo(-82.4,-54.7).lineTo(-3.3,-115.3).lineTo(73.8,-54.7).lineTo(73.8,-260.2).lineTo(163,-260.2).lineTo(163,1).lineTo(51.1,1).lineTo(51.1,56.3).curveTo(51.1,58.8,53.1,60.6).curveTo(55.1,62.4,57.9,62.4).lineTo(79.8,62.4).curveTo(84.4,118,113.2,152.5).curveTo(120.3,160.9,131.7,172.4).curveTo(139.3,181,138.2,187.5).curveTo(136.5,197.7,124.9,210.3).curveTo(121.6,213.9,114.1,221.7).curveTo(107.2,229,102.5,235.3).closePath().moveTo(-283.2,235.3).curveTo(-301.7,235.3,-314.7,222.1).curveTo(-327.9,208.9,-327.9,190.2).lineTo(-327.9,-305.3).curveTo(-327.9,-323.9,-314.7,-337.2).curveTo(-301.7,-350.4,-283.2,-350.4).lineTo(118.5,-350.4).curveTo(130.5,-350.4,141,-344.1).curveTo(150.9,-338.1,156.9,-327.8).lineTo(-283.2,-327.8).curveTo(-292.5,-327.8,-299,-321.2).curveTo(-305.5,-314.6,-305.5,-305.3).lineTo(-305.5,-282.8).curveTo(-305.5,-273.4,-299,-266.8).curveTo(-292.5,-260.2,-283.2,-260.2).lineTo(-261,-260.2).lineTo(-261,235.3).closePath().moveTo(200.2,183).curveTo(198.6,170.8,196.1,166.5).curveTo(195.7,165.6,196.5,163.9).curveTo(197.6,161.7,198.2,160.4).curveTo(200.3,155.3,195.8,150.9).lineTo(179,134).curveTo(161.8,117,156.9,109.6).curveTo(177.7,121.8,179.7,122.7).curveTo(189.3,127.1,201.9,127.1).curveTo(214.4,127.1,224,122.7).curveTo(226,121.8,247.1,109.6).curveTo(241.9,117.1,224.8,134).lineTo(208.2,150.9).curveTo(203.7,155.3,205.8,160.4).curveTo(206.4,161.7,207.6,163.9).curveTo(208.3,165.6,207.8,166.5).curveTo(205.4,170.9,203.9,183).curveTo(203.3,187.1,202,194.1).curveTo(200.5,185.8,200.2,183).closePath().moveTo(-3.3,-144.8).lineTo(-60.1,-99.8).lineTo(-60.1,-282.8).lineTo(51.5,-282.8).lineTo(51.5,-99.8).closePath();
	this.shape_4.setTransform(49.9,41.2,0.063,0.063);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// 圆角矩形 2 拷贝 2
	this.instance = new lib.leftRect("synched",0);
	this.instance.setTransform(94.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,191.3,84.1);


(lib.bjxx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 报警信息
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,7.6).curveTo(-4.1,7.6,-4.2,5.6).lineTo(-4.2,3.2).lineTo(-2.9,3.2).lineTo(-2.9,5.5).curveTo(-2.9,6.4,-1.9,6.4).lineTo(1.6,6.4).curveTo(2.8,6.4,3,5.6).lineTo(3.4,3.9).lineTo(4.5,4.3).lineTo(4.2,6.1).curveTo(3.8,7.6,1.8,7.6).closePath().moveTo(-7.9,6.4).curveTo(-7.2,5,-6.4,3).lineTo(-5.3,3.4).curveTo(-6,5.3,-6.7,6.8).lineTo(-7.9,6.4).closePath().moveTo(4.7,3.5).lineTo(5.6,2.8).lineTo(7.9,5.5).lineTo(6.9,6.2).curveTo(5.8,4.8,4.7,3.5).closePath().moveTo(-1.4,3).lineTo(-0.6,2.3).lineTo(1.6,4.4).lineTo(0.6,5.2).curveTo(-0.5,3.8,-1.4,3).closePath().moveTo(4.3,2.6).lineTo(4.3,2.1).lineTo(-4.6,2.1).lineTo(-4.6,2.6).lineTo(-5.7,2.6).lineTo(-5.7,-5.9).lineTo(-1.9,-5.9).lineTo(-1.4,-7.6).lineTo(-0.1,-7.2).lineTo(-0.7,-5.9).lineTo(5.5,-5.9).lineTo(5.5,2.6).closePath().moveTo(-4.6,1).lineTo(4.3,1).lineTo(4.3,-0.3).lineTo(-4.6,-0.3).closePath().moveTo(-4.6,-1.3).lineTo(4.3,-1.3).lineTo(4.3,-2.6).lineTo(-4.6,-2.6).closePath().moveTo(-4.6,-3.6).lineTo(4.3,-3.6).lineTo(4.3,-4.9).lineTo(-4.6,-4.9).closePath();
	this.shape.setTransform(153.1,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.5,7.7).lineTo(5.5,6.8).lineTo(-1,6.8).lineTo(-1,7.7).lineTo(-2.2,7.7).lineTo(-2.2,2).lineTo(6.7,2).lineTo(6.7,7.7).closePath().moveTo(-1,5.7).lineTo(5.5,5.7).lineTo(5.5,3.1).lineTo(-1,3.1).closePath().moveTo(-5.7,7.7).lineTo(-5.7,-1.2).curveTo(-6.4,0.1,-7.3,1.1).lineTo(-7.7,-0.2).curveTo(-5.5,-3.6,-4.3,-7.7).lineTo(-3,-7.4).curveTo(-3.8,-5.3,-4.6,-3.5).lineTo(-4.6,7.7).closePath().moveTo(-2.3,0.5).lineTo(-2.3,-0.5).lineTo(6.9,-0.5).lineTo(6.9,0.5).closePath().moveTo(-2.3,-2).lineTo(-2.3,-3.1).lineTo(6.9,-3.1).lineTo(6.9,-2).closePath().moveTo(-3.2,-4.5).lineTo(-3.2,-5.6).lineTo(1.8,-5.6).lineTo(0.9,-7.2).lineTo(1.9,-7.7).lineTo(3.1,-6).lineTo(2.4,-5.6).lineTo(7.8,-5.6).lineTo(7.8,-4.5).closePath();
	this.shape_1.setTransform(137,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.2,7.7).lineTo(4.2,7.3).lineTo(-4.3,7.3).lineTo(-4.3,7.7).lineTo(-5.4,7.7).lineTo(-5.4,4.6).lineTo(5.2,4.6).lineTo(5.2,7.7).closePath().moveTo(-4.3,6.5).lineTo(4.2,6.5).lineTo(4.2,5.4).lineTo(-4.3,5.4).closePath().moveTo(-5.3,3.9).lineTo(-5.3,3.1).lineTo(5.2,3.1).lineTo(5.2,3.9).closePath().moveTo(-5.3,2.4).lineTo(-5.3,1.6).lineTo(5.1,1.6).lineTo(5.1,2.4).closePath().moveTo(-7.5,0.9).lineTo(-7.5,0.1).lineTo(-0.1,0.1).lineTo(-0.6,-0.9).lineTo(0.4,-1.3).lineTo(1,0.1).lineTo(7.6,0.1).lineTo(7.6,0.9).closePath().moveTo(1,-1.1).curveTo(2.5,-1.7,3.4,-2.3).curveTo(2.6,-3.2,2.1,-4.5).lineTo(1.2,-3.2).lineTo(0.5,-4.1).curveTo(1.8,-5.7,2.6,-7.7).lineTo(3.7,-7.5).lineTo(3.1,-6.2).lineTo(7.6,-6.2).lineTo(7.6,-5.3).lineTo(6.4,-5.3).curveTo(5.9,-3.5,5,-2.3).curveTo(6,-1.7,7.6,-1.3).lineTo(6.9,-0.3).curveTo(5.3,-0.9,4.2,-1.6).curveTo(3.2,-0.9,1.7,-0.2).lineTo(1,-1.1).closePath().moveTo(4.2,-3).curveTo(5,-3.9,5.3,-5.3).lineTo(2.7,-5.3).curveTo(3.2,-3.9,4.2,-3).closePath().moveTo(-3,-0.5).lineTo(-3.1,-1.2).lineTo(-5.2,-1.2).lineTo(-5.2,-0.7).lineTo(-6.1,-0.7).lineTo(-6.1,-3.4).lineTo(-7,-2.2).lineTo(-7.6,-3.1).curveTo(-6.5,-4.1,-5.8,-5.6).lineTo(-4.9,-5.4).lineTo(-5.1,-5).lineTo(-0,-5).lineTo(-0.2,-2.1).curveTo(-0.3,-0.5,-1.7,-0.5).lineTo(-3,-0.5).closePath().moveTo(-6,-3.5).lineTo(-2.4,-3.5).lineTo(-2.4,-1.4).lineTo(-1.9,-1.4).curveTo(-1.2,-1.4,-1.2,-2.2).lineTo(-1,-4.3).lineTo(-5.5,-4.3).lineTo(-6,-3.5).closePath().moveTo(-5.2,-1.9).lineTo(-3.2,-1.9).lineTo(-3.2,-2.8).lineTo(-5.2,-2.8).closePath().moveTo(-2.1,-5.5).lineTo(-2.1,-6).lineTo(-4.1,-6).lineTo(-4.1,-5.5).lineTo(-5.1,-5.5).lineTo(-5.1,-6).lineTo(-7.6,-6).lineTo(-7.6,-6.8).lineTo(-5.1,-6.8).lineTo(-5.1,-7.7).lineTo(-4.1,-7.7).lineTo(-4.1,-6.8).lineTo(-2.1,-6.8).lineTo(-2.1,-7.7).lineTo(-1.1,-7.7).lineTo(-1.1,-6.8).lineTo(1.2,-6.8).lineTo(1.2,-6).lineTo(-1.1,-6).lineTo(-1.1,-5.5).closePath();
	this.shape_2.setTransform(121,40.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,7.6).lineTo(-1.9,-6.9).lineTo(6.8,-6.9).lineTo(6.6,-4.6).curveTo(6.5,-2.6,4.4,-2.6).lineTo(1.7,-2.6).lineTo(1.5,-3.9).lineTo(4.2,-3.8).curveTo(5.4,-3.8,5.5,-4.7).lineTo(5.5,-5.9).lineTo(-0.6,-5.9).lineTo(-0.6,-1.4).lineTo(6.9,-1.4).lineTo(6.9,-0.3).curveTo(6.1,2.5,4.3,4.4).curveTo(5.8,5.6,7.8,6.2).lineTo(6.9,7.4).curveTo(4.9,6.5,3.5,5.2).curveTo(2,6.4,0.1,7.6).lineTo(-0.6,6.5).curveTo(1.2,5.5,2.6,4.4).curveTo(1,2.6,0.3,-0.3).lineTo(-0.6,-0.3).lineTo(-0.6,6.5).lineTo(-0.6,7.6).closePath().moveTo(3.5,3.6).curveTo(5,1.9,5.6,-0.3).lineTo(1.4,-0.3).curveTo(1.9,2,3.5,3.6).closePath().moveTo(-7.4,7.4).lineTo(-7.6,6).lineTo(-6.2,6.1).curveTo(-5.5,6.2,-5.5,5.4).lineTo(-5.5,1.1).lineTo(-7.6,1.8).lineTo(-7.8,0.5).lineTo(-5.5,-0.2).lineTo(-5.5,-3.5).lineTo(-7.6,-3.5).lineTo(-7.6,-4.6).lineTo(-5.5,-4.6).lineTo(-5.5,-7.7).lineTo(-4.3,-7.7).lineTo(-4.3,-4.6).lineTo(-2.4,-4.6).lineTo(-2.4,-3.5).lineTo(-4.3,-3.5).lineTo(-4.3,-0.5).lineTo(-2.5,-1.1).lineTo(-2.4,0.1).lineTo(-4.3,0.7).lineTo(-4.3,5.7).curveTo(-4.3,7.3,-5.8,7.4).lineTo(-7.4,7.4).closePath().moveTo(-0.6,6.5).lineTo(-0.6,6.5).closePath().moveTo(-0.6,-0.3).lineTo(0.3,-0.3).curveTo(1,2.6,2.6,4.4).curveTo(1.2,5.5,-0.6,6.5).closePath();
	this.shape_3.setTransform(105,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// flash0.ai
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.3,5.2).curveTo(-8.4,5.2,-8.5,5.2).curveTo(-8.5,5.2,-8.6,5.1).curveTo(-8.6,5.1,-8.7,5.1).curveTo(-8.7,5,-8.8,5).curveTo(-8.8,4.9,-8.9,4.9).curveTo(-8.9,4.8,-9,4.8).curveTo(-9,4.7,-9,4.6).curveTo(-9,4.6,-9,4.5).curveTo(-9,4.5,-9,4.4).curveTo(-9,4.3,-9,4.3).curveTo(-8.9,4.2,-8.9,4.2).curveTo(-8.8,4.1,-8.8,4.1).curveTo(-8.7,4,-8.7,4).curveTo(-8.6,3.9,-8.6,3.9).curveTo(-8.5,3.9,-8.5,3.9).curveTo(-8.4,3.9,-8.3,3.9).lineTo(-7.1,3.9).lineTo(-7.1,2).curveTo(-7,0.5,-6.5,-0.8).curveTo(-5.9,-2.1,-5,-3.1).curveTo(-4,-4.1,-2.7,-4.6).curveTo(-1.4,-5.2,0.1,-5.2).curveTo(1.5,-5.2,2.8,-4.6).curveTo(4.1,-4.1,5,-3.1).curveTo(6,-2.1,6.6,-0.8).curveTo(7.1,0.5,7.2,2).lineTo(7.2,3.9).lineTo(8.3,3.9).curveTo(8.7,3.9,8.9,4.1).curveTo(8.9,4.1,8.9,4.2).curveTo(8.9,4.2,9,4.3).curveTo(9,4.3,9,4.4).curveTo(9,4.5,9,4.5).curveTo(9,4.6,9,4.6).curveTo(9,4.7,9,4.8).curveTo(8.9,4.8,8.9,4.9).curveTo(8.9,4.9,8.9,5).curveTo(8.7,5.2,8.3,5.2).closePath();
	this.shape_4.setTransform(47.1,42.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-28.4,28.3).curveTo(-32.1,24.6,-32.1,19.4).curveTo(-32.1,14.2,-28.4,10.4).lineTo(10.4,-28.4).curveTo(14.1,-32.1,19.4,-32.1).curveTo(24.7,-32.1,28.4,-28.4).curveTo(32.1,-24.7,32.1,-19.4).curveTo(32.1,-14.2,28.4,-10.5).lineTo(-10.4,28.3).curveTo(-14.2,32.1,-19.4,32.1).curveTo(-24.7,32.1,-28.4,28.3).closePath();
	this.shape_5.setTransform(54.5,36.9,0.051,0.051);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-27.4,12.7).curveTo(-32.7,12.7,-36.4,9).curveTo(-40.1,5.2,-40.1,0).curveTo(-40.1,-5.2,-36.4,-9).curveTo(-32.7,-12.7,-27.4,-12.7).lineTo(27.5,-12.7).curveTo(32.7,-12.7,36.4,-9).curveTo(40.1,-5.2,40.1,0).curveTo(40.1,5.2,36.4,9).curveTo(32.7,12.7,27.5,12.7).closePath();
	this.shape_6.setTransform(57.5,44.2,0.051,0.051);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-29,12.7).curveTo(-34.2,12.7,-37.9,9).curveTo(-41.7,5.2,-41.7,0).curveTo(-41.7,-5.2,-37.9,-9).curveTo(-34.2,-12.7,-29,-12.7).lineTo(29,-12.7).curveTo(34.3,-12.7,38,-9).curveTo(41.6,-5.2,41.7,0).curveTo(41.6,5.2,38,9).curveTo(34.3,12.7,29,12.7).closePath();
	this.shape_7.setTransform(36.7,44.2,0.051,0.051);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.7,29.6).lineTo(-29.6,-11.7).curveTo(-33.3,-15.4,-33.3,-20.6).curveTo(-33.3,-25.9,-29.6,-29.6).curveTo(-25.9,-33.3,-20.6,-33.3).curveTo(-15.4,-33.3,-11.7,-29.6).lineTo(29.6,11.7).curveTo(33.3,15.4,33.3,20.6).curveTo(33.3,25.9,29.6,29.6).curveTo(25.9,33.3,20.6,33.3).curveTo(15.4,33.3,11.7,29.6).closePath();
	this.shape_8.setTransform(39.8,36.8,0.051,0.051);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9,36.4).curveTo(-12.7,32.7,-12.7,27.4).lineTo(-12.7,-27.4).curveTo(-12.7,-32.7,-9,-36.4).curveTo(-5.2,-40.1,-0,-40.1).curveTo(5.3,-40.1,9,-36.4).curveTo(12.7,-32.7,12.7,-27.4).lineTo(12.7,27.4).curveTo(12.7,32.7,9,36.4).curveTo(5.3,40.1,-0,40.1).curveTo(-5.2,40.1,-9,36.4).closePath();
	this.shape_9.setTransform(47.2,33.8,0.051,0.051);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-159.4,377.4).curveTo(-232.9,346.3,-289.6,289.6).curveTo(-346.3,232.9,-377.4,159.5).curveTo(-409.6,83.3,-409.6,0.1).curveTo(-409.6,-83.3,-377.4,-159.4).curveTo(-346.3,-232.9,-289.6,-289.6).curveTo(-232.9,-346.3,-159.4,-377.4).curveTo(-83.3,-409.6,0,-409.6).curveTo(83.3,-409.6,159.4,-377.4).curveTo(232.9,-346.3,289.6,-289.6).curveTo(346.3,-232.9,377.4,-159.4).curveTo(409.6,-83.3,409.6,0.1).curveTo(409.6,83.4,377.4,159.5).curveTo(346.3,232.9,289.6,289.6).curveTo(232.9,346.3,159.4,377.4).curveTo(83.4,409.6,0,409.6).curveTo(-83.3,409.6,-159.4,377.4).closePath().moveTo(-153.1,-362.3).curveTo(-223.6,-332.5,-278.1,-278).curveTo(-332.5,-223.5,-362.3,-153).curveTo(-393.2,-80,-393.2,0.1).curveTo(-393.2,80,-362.3,153.1).curveTo(-332.5,223.5,-278.1,278.1).curveTo(-223.6,332.5,-153.1,362.3).curveTo(-80,393.3,0,393.3).curveTo(80,393.3,153.1,362.3).curveTo(223.6,332.5,278.1,278.1).curveTo(332.5,223.6,362.3,153.1).curveTo(393.2,80,393.2,0.1).curveTo(393.2,-80,362.3,-153).curveTo(332.5,-223.6,278.1,-278).curveTo(223.6,-332.5,153.1,-362.3).curveTo(80,-393.2,0,-393.2).curveTo(-80,-393.2,-153.1,-362.3).closePath();
	this.shape_10.setTransform(47.1,41.2,0.051,0.051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// 圆角矩形 2 拷贝 2
	this.instance = new lib.leftRect("synched",0);
	this.instance.setTransform(94.5,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.9,191.3,84.1);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().moveTo(-6.7,11.7).lineTo(-6.7,-11.7).lineTo(6.6,-11.7).lineTo(6.6,11.7).closePath();
	var mask_graphics_1 = new cjs.Graphics().moveTo(-7.7,11.7).lineTo(-7.7,-11.7).lineTo(7.7,-11.7).lineTo(7.7,11.7).closePath();
	var mask_graphics_2 = new cjs.Graphics().moveTo(-8.8,11.7).lineTo(-8.8,-11.7).lineTo(8.8,-11.7).lineTo(8.8,11.7).closePath();
	var mask_graphics_3 = new cjs.Graphics().moveTo(-9.8,11.7).lineTo(-9.8,-11.7).lineTo(9.8,-11.7).lineTo(9.8,11.7).closePath();
	var mask_graphics_4 = new cjs.Graphics().moveTo(-10.9,11.7).lineTo(-10.9,-11.7).lineTo(10.8,-11.7).lineTo(10.8,11.7).closePath();
	var mask_graphics_5 = new cjs.Graphics().moveTo(-11.9,11.7).lineTo(-11.9,-11.7).lineTo(11.9,-11.7).lineTo(11.9,11.7).closePath();
	var mask_graphics_6 = new cjs.Graphics().moveTo(-13,11.7).lineTo(-13,-11.7).lineTo(12.9,-11.7).lineTo(12.9,11.7).closePath();
	var mask_graphics_7 = new cjs.Graphics().moveTo(-14,11.7).lineTo(-14,-11.7).lineTo(14,-11.7).lineTo(14,11.7).closePath();
	var mask_graphics_8 = new cjs.Graphics().moveTo(-15.1,11.7).lineTo(-15.1,-11.7).lineTo(15.1,-11.7).lineTo(15.1,11.7).closePath();
	var mask_graphics_9 = new cjs.Graphics().moveTo(-16.1,11.7).lineTo(-16.1,-11.7).lineTo(16.1,-11.7).lineTo(16.1,11.7).closePath();
	var mask_graphics_10 = new cjs.Graphics().moveTo(-17.2,11.7).lineTo(-17.2,-11.7).lineTo(17.1,-11.7).lineTo(17.1,11.7).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(-18.2,11.7).lineTo(-18.2,-11.7).lineTo(18.2,-11.7).lineTo(18.2,11.7).closePath();
	var mask_graphics_12 = new cjs.Graphics().moveTo(-19.3,11.7).lineTo(-19.3,-11.7).lineTo(19.2,-11.7).lineTo(19.2,11.7).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(-20.3,11.7).lineTo(-20.3,-11.7).lineTo(20.3,-11.7).lineTo(20.3,11.7).closePath();
	var mask_graphics_14 = new cjs.Graphics().moveTo(-21.4,11.7).lineTo(-21.4,-11.7).lineTo(21.4,-11.7).lineTo(21.4,11.7).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(-22.4,11.7).lineTo(-22.4,-11.7).lineTo(22.4,-11.7).lineTo(22.4,11.7).closePath();
	var mask_graphics_16 = new cjs.Graphics().moveTo(-23.5,11.7).lineTo(-23.5,-11.7).lineTo(23.4,-11.7).lineTo(23.4,11.7).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(-24.5,11.7).lineTo(-24.5,-11.7).lineTo(24.5,-11.7).lineTo(24.5,11.7).closePath();
	var mask_graphics_18 = new cjs.Graphics().moveTo(-25.6,11.7).lineTo(-25.6,-11.7).lineTo(25.5,-11.7).lineTo(25.5,11.7).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(-26.6,11.7).lineTo(-26.6,-11.7).lineTo(26.6,-11.7).lineTo(26.6,11.7).closePath();
	var mask_graphics_20 = new cjs.Graphics().moveTo(-27.7,11.7).lineTo(-27.7,-11.7).lineTo(27.7,-11.7).lineTo(27.7,11.7).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(-28.7,11.7).lineTo(-28.7,-11.7).lineTo(28.7,-11.7).lineTo(28.7,11.7).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(-29.8,11.7).lineTo(-29.8,-11.7).lineTo(29.7,-11.7).lineTo(29.7,11.7).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(-30.8,11.7).lineTo(-30.8,-11.7).lineTo(30.8,-11.7).lineTo(30.8,11.7).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(-31.9,11.7).lineTo(-31.9,-11.7).lineTo(31.8,-11.7).lineTo(31.8,11.7).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(-30.6,11.7).lineTo(-30.6,-11.7).lineTo(30.6,-11.7).lineTo(30.6,11.7).closePath();
	var mask_graphics_26 = new cjs.Graphics().moveTo(-29.3,11.7).lineTo(-29.3,-11.7).lineTo(29.3,-11.7).lineTo(29.3,11.7).closePath();
	var mask_graphics_27 = new cjs.Graphics().moveTo(-28.1,11.7).lineTo(-28.1,-11.7).lineTo(28.1,-11.7).lineTo(28.1,11.7).closePath();
	var mask_graphics_28 = new cjs.Graphics().moveTo(-26.8,11.7).lineTo(-26.8,-11.7).lineTo(26.8,-11.7).lineTo(26.8,11.7).closePath();
	var mask_graphics_29 = new cjs.Graphics().moveTo(-25.6,11.7).lineTo(-25.6,-11.7).lineTo(25.5,-11.7).lineTo(25.5,11.7).closePath();
	var mask_graphics_30 = new cjs.Graphics().moveTo(-24.3,11.7).lineTo(-24.3,-11.7).lineTo(24.3,-11.7).lineTo(24.3,11.7).closePath();
	var mask_graphics_31 = new cjs.Graphics().moveTo(-23,11.7).lineTo(-23,-11.7).lineTo(23,-11.7).lineTo(23,11.7).closePath();
	var mask_graphics_32 = new cjs.Graphics().moveTo(-21.8,11.7).lineTo(-21.8,-11.7).lineTo(21.8,-11.7).lineTo(21.8,11.7).closePath();
	var mask_graphics_33 = new cjs.Graphics().moveTo(-20.5,11.7).lineTo(-20.5,-11.7).lineTo(20.5,-11.7).lineTo(20.5,11.7).closePath();
	var mask_graphics_34 = new cjs.Graphics().moveTo(-19.3,11.7).lineTo(-19.3,-11.7).lineTo(19.3,-11.7).lineTo(19.3,11.7).closePath();
	var mask_graphics_35 = new cjs.Graphics().moveTo(-18,11.7).lineTo(-18,-11.7).lineTo(18,-11.7).lineTo(18,11.7).closePath();
	var mask_graphics_36 = new cjs.Graphics().moveTo(-16.7,11.7).lineTo(-16.7,-11.7).lineTo(16.7,-11.7).lineTo(16.7,11.7).closePath();
	var mask_graphics_37 = new cjs.Graphics().moveTo(-15.5,11.7).lineTo(-15.5,-11.7).lineTo(15.5,-11.7).lineTo(15.5,11.7).closePath();
	var mask_graphics_38 = new cjs.Graphics().moveTo(-14.2,11.7).lineTo(-14.2,-11.7).lineTo(14.2,-11.7).lineTo(14.2,11.7).closePath();
	var mask_graphics_39 = new cjs.Graphics().moveTo(-13,11.7).lineTo(-13,-11.7).lineTo(12.9,-11.7).lineTo(12.9,11.7).closePath();
	var mask_graphics_40 = new cjs.Graphics().moveTo(-11.7,11.7).lineTo(-11.7,-11.7).lineTo(11.7,-11.7).lineTo(11.7,11.7).closePath();
	var mask_graphics_41 = new cjs.Graphics().moveTo(-10.4,11.7).lineTo(-10.4,-11.7).lineTo(10.4,-11.7).lineTo(10.4,11.7).closePath();
	var mask_graphics_42 = new cjs.Graphics().moveTo(-9.2,11.7).lineTo(-9.2,-11.7).lineTo(9.2,-11.7).lineTo(9.2,11.7).closePath();
	var mask_graphics_43 = new cjs.Graphics().moveTo(-7.9,11.7).lineTo(-7.9,-11.7).lineTo(7.9,-11.7).lineTo(7.9,11.7).closePath();
	var mask_graphics_44 = new cjs.Graphics().moveTo(-6.7,11.7).lineTo(-6.7,-11.7).lineTo(6.6,-11.7).lineTo(6.6,11.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.4,y:7.7}).wait(1).to({graphics:mask_graphics_1,x:-12.3,y:7.7}).wait(1).to({graphics:mask_graphics_2,x:-11.3,y:7.7}).wait(1).to({graphics:mask_graphics_3,x:-10.2,y:7.7}).wait(1).to({graphics:mask_graphics_4,x:-9.2,y:7.7}).wait(1).to({graphics:mask_graphics_5,x:-8.1,y:7.7}).wait(1).to({graphics:mask_graphics_6,x:-7.1,y:7.7}).wait(1).to({graphics:mask_graphics_7,x:-6,y:7.7}).wait(1).to({graphics:mask_graphics_8,x:-5,y:7.7}).wait(1).to({graphics:mask_graphics_9,x:-3.9,y:7.7}).wait(1).to({graphics:mask_graphics_10,x:-2.9,y:7.7}).wait(1).to({graphics:mask_graphics_11,x:-1.8,y:7.7}).wait(1).to({graphics:mask_graphics_12,x:-0.8,y:7.7}).wait(1).to({graphics:mask_graphics_13,x:0.3,y:7.7}).wait(1).to({graphics:mask_graphics_14,x:1.3,y:7.7}).wait(1).to({graphics:mask_graphics_15,x:2.4,y:7.7}).wait(1).to({graphics:mask_graphics_16,x:3.4,y:7.7}).wait(1).to({graphics:mask_graphics_17,x:4.5,y:7.7}).wait(1).to({graphics:mask_graphics_18,x:5.5,y:7.7}).wait(1).to({graphics:mask_graphics_19,x:6.6,y:7.7}).wait(1).to({graphics:mask_graphics_20,x:7.6,y:7.7}).wait(1).to({graphics:mask_graphics_21,x:8.7,y:7.7}).wait(1).to({graphics:mask_graphics_22,x:9.7,y:7.7}).wait(1).to({graphics:mask_graphics_23,x:10.8,y:7.7}).wait(1).to({graphics:mask_graphics_24,x:11.8,y:7.7}).wait(1).to({graphics:mask_graphics_25,x:13.7,y:7.7}).wait(1).to({graphics:mask_graphics_26,x:15.6,y:7.7}).wait(1).to({graphics:mask_graphics_27,x:17.5,y:7.7}).wait(1).to({graphics:mask_graphics_28,x:19.4,y:7.7}).wait(1).to({graphics:mask_graphics_29,x:21.3,y:7.7}).wait(1).to({graphics:mask_graphics_30,x:23.2,y:7.7}).wait(1).to({graphics:mask_graphics_31,x:25,y:7.7}).wait(1).to({graphics:mask_graphics_32,x:26.9,y:7.7}).wait(1).to({graphics:mask_graphics_33,x:28.8,y:7.7}).wait(1).to({graphics:mask_graphics_34,x:30.7,y:7.7}).wait(1).to({graphics:mask_graphics_35,x:32.6,y:7.7}).wait(1).to({graphics:mask_graphics_36,x:34.5,y:7.7}).wait(1).to({graphics:mask_graphics_37,x:36.4,y:7.7}).wait(1).to({graphics:mask_graphics_38,x:38.3,y:7.7}).wait(1).to({graphics:mask_graphics_39,x:40.2,y:7.7}).wait(1).to({graphics:mask_graphics_40,x:42.1,y:7.7}).wait(1).to({graphics:mask_graphics_41,x:43.9,y:7.7}).wait(1).to({graphics:mask_graphics_42,x:45.8,y:7.7}).wait(1).to({graphics:mask_graphics_43,x:47.7,y:7.7}).wait(1).to({graphics:mask_graphics_44,x:49.6,y:7.7}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(17.1,8.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// Layer 1
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(17.1,8.6);
	this.instance_1.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 81.09, 81.09, 81.09, 0)];
	this.instance_1.cache(-19,-10,38,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,33.6,16.7);


(lib.server = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-307.2,286.7).lineTo(-307.2,122.9).lineTo(307.2,122.9).lineTo(307.2,286.7).closePath().moveTo(-256,235.5).lineTo(-194.6,235.5).lineTo(-194.6,174.1).lineTo(-256,174.1).closePath().moveTo(-30.7,225.3).lineTo(256,225.3).lineTo(256,184.3).lineTo(-30.7,184.3).closePath().moveTo(-307.2,81.9).lineTo(-307.2,-81.9).lineTo(307.2,-81.9).lineTo(307.2,81.9).closePath().moveTo(-256,30.7).lineTo(-194.6,30.7).lineTo(-194.6,-30.7).lineTo(-256,-30.7).closePath().moveTo(-30.7,20.5).lineTo(256,20.5).lineTo(256,-20.5).lineTo(-30.7,-20.5).closePath().moveTo(-307.2,-122.9).lineTo(-307.2,-286.7).lineTo(307.2,-286.7).lineTo(307.2,-122.9).closePath().moveTo(-256,-174.1).lineTo(-194.6,-174.1).lineTo(-194.6,-235.5).lineTo(-256,-235.5).closePath().moveTo(-30.7,-184.3).lineTo(256,-184.3).lineTo(256,-225.3).lineTo(-30.7,-225.3).closePath();
	this.shape.setTransform(31.1,29,0.101,0.101);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flash0.ai
	this.instance = new lib.oval53();
	this.instance.setTransform(196.7,246.1,1,1,0,0,0,225,276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.2,58);


(lib.Active = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Active MQ
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.7,4.9).curveTo(1.4,5.6,-0.1,5.6).curveTo(-1.7,5.6,-3,4.8).curveTo(-4.2,4.1,-4.9,2.7).curveTo(-5.6,1.4,-5.6,-0.4).curveTo(-5.6,-2,-4.9,-3.4).curveTo(-4.2,-4.8,-2.9,-5.6).curveTo(-1.7,-6.3,-0.1,-6.3).curveTo(1.5,-6.3,2.8,-5.5).curveTo(4,-4.8,4.7,-3.4).curveTo(5.4,-2.1,5.4,-0.4).curveTo(5.4,1.1,4.9,2.2).curveTo(4.5,3.3,3.6,4.1).curveTo(4.7,4.9,5.6,5.2).lineTo(5.1,6.3).curveTo(3.9,5.8,2.7,4.9).closePath().moveTo(-2.9,-3.8).curveTo(-4,-2.7,-4,-0.4).curveTo(-4,1.9,-2.9,3.1).curveTo(-1.8,4.3,-0.1,4.3).curveTo(0.7,4.3,1.4,4).curveTo(0.7,3.5,-0.1,3.3).lineTo(0.3,2.2).curveTo(1.6,2.6,2.5,3.3).curveTo(3.8,2.1,3.8,-0.4).curveTo(3.8,-1.7,3.3,-2.8).curveTo(2.9,-3.8,2,-4.4).curveTo(1,-5,-0.1,-5).curveTo(-1.8,-5,-2.9,-3.8).closePath();
	this.shape.setTransform(226.2,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,5.7).lineTo(4,-3.9).lineTo(0.7,5.7).lineTo(-0.7,5.7).lineTo(-4,-4).lineTo(-4,5.7).lineTo(-5.4,5.7).lineTo(-5.4,-5.7).lineTo(-3.2,-5.7).lineTo(-0.5,2.4).lineTo(0.1,4.1).lineTo(0.7,2.2).lineTo(3.5,-5.7).lineTo(5.5,-5.7).lineTo(5.5,5.7).closePath();
	this.shape_1.setTransform(213.5,86.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,3.2).curveTo(-3.8,2.1,-3.8,0.1).curveTo(-3.8,-2,-2.8,-3.2).curveTo(-1.7,-4.3,0,-4.3).curveTo(1.7,-4.3,2.8,-3.2).curveTo(3.8,-2.1,3.8,-0).lineTo(3.8,0.3).lineTo(-2.4,0.3).curveTo(-2.3,1.8,-1.6,2.4).curveTo(-0.9,3.2,0.1,3.2).curveTo(0.9,3.2,1.4,2.8).curveTo(2,2.3,2.3,1.5).lineTo(3.8,1.6).curveTo(3.4,2.9,2.5,3.7).curveTo(1.6,4.3,0.1,4.3).curveTo(-1.7,4.4,-2.8,3.2).closePath().moveTo(-1.6,-2.5).curveTo(-2.2,-1.9,-2.3,-0.8).lineTo(2.3,-0.8).curveTo(2.2,-1.9,1.8,-2.3).curveTo(1.1,-3.2,0.1,-3.2).curveTo(-0.9,-3.2,-1.6,-2.5).closePath();
	this.shape_2.setTransform(198.5,87.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,4.1).lineTo(-3.8,-4.2).lineTo(-2.3,-4.2).lineTo(-0.6,0.8).lineTo(0,2.5).lineTo(0.5,0.9).lineTo(2.4,-4.2).lineTo(3.8,-4.2).lineTo(0.7,4.1).closePath();
	this.shape_3.setTransform(190.4,87.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,5.7).lineTo(-0.7,-2.6).lineTo(0.7,-2.6).lineTo(0.7,5.7).closePath().moveTo(-0.7,-4.1).lineTo(-0.7,-5.7).lineTo(0.7,-5.7).lineTo(0.7,-4.1).closePath();
	this.shape_4.setTransform(184.9,86.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,5.4).curveTo(-0.7,5.2,-0.8,4.8).curveTo(-1,4.4,-1,3.1).lineTo(-1,-1.7).lineTo(-2,-1.7).lineTo(-2,-2.8).lineTo(-1,-2.8).lineTo(-1,-4.8).lineTo(0.4,-5.6).lineTo(0.4,-2.8).lineTo(1.8,-2.8).lineTo(1.8,-1.7).lineTo(0.4,-1.7).lineTo(0.4,3.2).curveTo(0.4,3.8,0.5,3.9).curveTo(0.5,4,0.5,4).curveTo(0.5,4.1,0.6,4.1).curveTo(0.6,4.2,0.6,4.2).curveTo(0.7,4.2,0.7,4.3).lineTo(1.2,4.4).lineTo(1.8,4.3).lineTo(2,5.5).lineTo(0.9,5.6).curveTo(0.2,5.6,-0.2,5.4).closePath();
	this.shape_5.setTransform(181.3,86.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,3.2).curveTo(-3.6,2.1,-3.6,0.1).curveTo(-3.6,-1.3,-3.2,-2.3).curveTo(-2.8,-3.3,-1.8,-3.9).curveTo(-0.9,-4.3,0.1,-4.3).curveTo(1.5,-4.4,2.4,-3.6).curveTo(3.2,-3,3.5,-1.7).lineTo(2.1,-1.5).curveTo(1.9,-2.3,1.4,-2.7).curveTo(0.9,-3.2,0.2,-3.2).curveTo(-0.9,-3.2,-1.5,-2.4).curveTo(-2.2,-1.6,-2.2,-0).curveTo(-2.2,1.6,-1.6,2.4).curveTo(-0.9,3.2,0.1,3.2).curveTo(1,3.2,1.5,2.7).curveTo(2.1,2.1,2.2,1.1).lineTo(3.6,1.3).curveTo(3.4,2.7,2.5,3.6).curveTo(1.5,4.3,0.1,4.3).curveTo(-1.6,4.3,-2.6,3.2).closePath();
	this.shape_6.setTransform(175.6,87.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,5.7).lineTo(2.3,2.3).lineTo(-2.5,2.3).lineTo(-3.8,5.7).lineTo(-5.4,5.7).lineTo(-1,-5.7).lineTo(0.6,-5.7).lineTo(5.3,5.7).closePath().moveTo(-0.8,-2.3).lineTo(-2.1,1).lineTo(1.8,1).lineTo(0.6,-2.1).lineTo(-0.2,-4.5).curveTo(-0.4,-3.4,-0.8,-2.3).closePath();
	this.shape_7.setTransform(166.3,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ...... 消息推送 队列集群
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,2).lineTo(1.3,2).curveTo(0.7,2,0.2,2.1).lineTo(-0.3,1.7).lineTo(2.1,1.7).lineTo(2.1,-0.3).lineTo(1.9,-0.3).curveTo(1.3,-0.3,0.8,-0.1).lineTo(0.4,-0.6).lineTo(2.1,-0.6).lineTo(2.1,-2.4).lineTo(1.8,-2.4).curveTo(1.2,-2.4,0.7,-2.3).lineTo(0.3,-2.7).lineTo(2.7,-2.7).curveTo(3.3,-3.9,3.5,-5.5).lineTo(4.5,-4.9).lineTo(4.1,-4.6).lineTo(3,-2.7).lineTo(4.1,-2.7).lineTo(4.6,-3.3).lineTo(5.4,-2.4).lineTo(2.8,-2.4).lineTo(2.8,-0.6).lineTo(3.8,-0.6).lineTo(4.3,-1.1).lineTo(5,-0.3).lineTo(2.8,-0.3).lineTo(2.8,1.7).lineTo(4.2,1.7).lineTo(4.7,1.1).lineTo(5.5,2).lineTo(2.8,2).lineTo(2.8,4).lineTo(2.8,5.2).lineTo(2.1,5.5).lineTo(2.1,2).closePath().moveTo(-3.6,1.6).curveTo(-4.3,2.7,-5.4,3.5).lineTo(-5.5,3.4).curveTo(-5,2.9,-4.5,2).curveTo(-3.9,1,-3.5,-0.3).lineTo(-4.5,-0.1).lineTo(-4.9,-0.6).lineTo(-3.5,-0.6).curveTo(-3.3,-1.4,-3.3,-2.2).lineTo(-3.9,-2.2).curveTo(-4.5,-2.2,-5,-2.1).lineTo(-5.4,-2.5).lineTo(-3.3,-2.5).lineTo(-3.3,-4.2).lineTo(-3.4,-4.2).curveTo(-4.1,-4.2,-4.6,-4.1).lineTo(-5,-4.5).lineTo(-1.2,-4.5).lineTo(-0.9,-5).lineTo(-0.2,-4.4).lineTo(-0.6,-4.1).lineTo(-0.6,-2.5).lineTo(-0.2,-2.9).lineTo(0.5,-2.2).lineTo(-0.6,-2.2).lineTo(-0.6,-1.1).lineTo(-0.5,-0.1).lineTo(-1.2,0.2).lineTo(-1.2,-0.3).lineTo(-2.9,-0.3).lineTo(-3.3,0.9).lineTo(-2.9,1.2).lineTo(-1.3,1.2).lineTo(-1,0.8).lineTo(-0.3,1.4).lineTo(-0.6,1.7).lineTo(-0.6,3.3).lineTo(-0.5,4.8).lineTo(-1.2,5).lineTo(-1.2,4.4).lineTo(-3,4.4).lineTo(-3,5.1).lineTo(-3.7,5.3).lineTo(-3.6,1.6).closePath().moveTo(-3,4.1).lineTo(-1.2,4.1).lineTo(-1.2,1.5).lineTo(-3,1.5).closePath().moveTo(-2.9,-0.6).lineTo(-1.2,-0.6).lineTo(-1.2,-2.2).lineTo(-2.7,-2.2).lineTo(-2.9,-0.6).closePath().moveTo(-2.7,-2.5).lineTo(-1.2,-2.5).lineTo(-1.2,-4.2).lineTo(-2.7,-4.2).closePath().moveTo(1.2,-3.6).curveTo(1.1,-4.3,0.5,-5.2).lineTo(0.7,-5.3).lineTo(1.6,-4.5).curveTo(2,-4,2,-3.7).curveTo(1.9,-3.4,1.6,-3.1).lineTo(1.5,-3.1).curveTo(1.3,-3.1,1.2,-3.6).closePath();
	this.shape_8.setTransform(132,48.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3,2.3).curveTo(-1.2,3.3,-2.4,4.1).curveTo(-3.7,4.8,-5.5,5.4).lineTo(-5.5,5.3).curveTo(-3.8,4.5,-2.6,3.6).curveTo(-1.4,2.7,-1.1,2.2).lineTo(-4,2.2).curveTo(-4.5,2.2,-5,2.4).lineTo(-5.5,1.9).lineTo(-0.3,1.9).lineTo(-0.3,0.8).lineTo(0.7,1.1).lineTo(0.4,1.5).lineTo(0.4,1.9).lineTo(4.1,1.9).lineTo(4.7,1.4).lineTo(5.5,2.2).lineTo(0.9,2.2).curveTo(1.8,3.2,2.9,3.8).curveTo(4.1,4.3,5.6,4.5).lineTo(5.6,4.6).curveTo(4.8,4.8,4.7,5.3).curveTo(3.4,4.9,2.5,4.2).curveTo(1.5,3.5,0.6,2.2).lineTo(0.4,2.2).lineTo(0.4,5.2).lineTo(-0.3,5.5).lineTo(-0.3,2.3).closePath().moveTo(-3.3,-2.7).curveTo(-4.1,-1.7,-5.5,-0.8).lineTo(-5.6,-0.9).curveTo(-4.5,-1.9,-3.7,-3.1).curveTo(-2.8,-4.3,-2.4,-5.5).lineTo(-1.4,-4.9).lineTo(-1.9,-4.7).lineTo(-2.6,-3.6).lineTo(3.3,-3.6).lineTo(3.9,-4.2).lineTo(4.7,-3.4).lineTo(0.6,-3.4).lineTo(0.6,-2.2).lineTo(2.8,-2.2).lineTo(3.3,-2.8).lineTo(4.1,-1.9).lineTo(0.6,-1.9).lineTo(0.6,-0.9).lineTo(2.7,-0.9).lineTo(3.2,-1.4).lineTo(4,-0.6).lineTo(0.6,-0.6).lineTo(0.6,0.5).lineTo(3.2,0.5).lineTo(3.8,-0.1).lineTo(4.6,0.8).lineTo(-2.6,0.8).lineTo(-2.6,1.3).lineTo(-3.3,1.6).lineTo(-3.3,-2.7).closePath().moveTo(-2.6,0.5).lineTo(0,0.5).lineTo(0,-0.6).lineTo(-2.6,-0.6).closePath().moveTo(-2.6,-0.9).lineTo(0,-0.9).lineTo(0,-1.9).lineTo(-2.6,-1.9).closePath().moveTo(-2.6,-2.2).lineTo(0,-2.2).lineTo(0,-3.4).lineTo(-2.6,-3.4).closePath().moveTo(0.3,-4.1).curveTo(0,-4.7,-0.5,-5.3).lineTo(-0.4,-5.4).curveTo(0.4,-5,0.7,-4.7).curveTo(1.1,-4.4,0.7,-3.9).lineTo(0.5,-3.8).curveTo(0.5,-3.8,0.4,-3.8).curveTo(0.4,-3.8,0.4,-3.8).curveTo(0.3,-3.9,0.3,-4).curveTo(0.3,-4,0.3,-4.1).closePath();
	this.shape_9.setTransform(120.2,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,4.3).lineTo(1.9,4.1).lineTo(3.6,4.2).curveTo(4.2,4.2,4.2,3.6).lineTo(4.2,-3.1).lineTo(4.1,-5.4).lineTo(5.2,-4.9).lineTo(4.8,-4.6).lineTo(4.8,3.8).curveTo(4.9,5,3.6,5.4).curveTo(3.6,4.6,1.9,4.3).closePath().moveTo(-5.2,5.1).curveTo(-3.1,3.9,-2,2.4).curveTo(-0.9,0.9,-0.2,-1.7).lineTo(-2.3,-1.7).lineTo(-2.9,-0.7).curveTo(-1.6,0.3,-1.7,0.8).curveTo(-1.7,1.3,-2.1,1.5).curveTo(-2.4,1.7,-2.5,1).curveTo(-2.5,0.3,-2.9,-0.5).curveTo(-3.8,0.6,-4.8,1.6).lineTo(-4.9,1.6).curveTo(-3.9,0.1,-3.2,-1.2).curveTo(-2.7,-2.6,-2.3,-4).lineTo(-3.2,-4).curveTo(-3.9,-4,-4.4,-3.8).lineTo(-4.8,-4.3).lineTo(0.1,-4.3).lineTo(0.7,-4.9).lineTo(1.6,-4).lineTo(-1.5,-4).curveTo(-1.8,-2.8,-2.2,-2).lineTo(-0.3,-2).lineTo(0,-2.5).lineTo(0.8,-1.8).lineTo(0.4,-1.4).curveTo(-0.1,0.3,-0.6,1.4).curveTo(-1.1,2.4,-2.1,3.4).curveTo(-3.2,4.3,-5,5.3).closePath().moveTo(1.9,-0.4).lineTo(1.8,-3.5).lineTo(2.8,-3).lineTo(2.5,-2.7).lineTo(2.5,1.2).lineTo(2.5,2.7).lineTo(1.8,3.1).lineTo(1.9,-0.4).closePath();
	this.shape_10.setTransform(108.2,48.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,5.1).curveTo(-1.3,4,-0.5,2.6).curveTo(0.2,1.3,0.5,-0.6).curveTo(0.8,-2.5,0.7,-5.3).lineTo(1.8,-4.8).lineTo(1.5,-4.5).lineTo(1.6,-2.2).lineTo(2.1,0.1).curveTo(2.3,1.2,3,2.5).curveTo(3.7,3.8,5,4.4).lineTo(5,4.6).curveTo(4.3,4.6,3.9,5).curveTo(2.9,3.9,2.4,2.6).curveTo(1.9,1.4,1.7,0.2).lineTo(1.3,-2.9).curveTo(1.3,-1,0.8,0.7).curveTo(0.4,2.4,-0.5,3.5).curveTo(-1.4,4.5,-3,5.3).closePath().moveTo(-4.9,-0.4).lineTo(-4.9,-4.9).lineTo(-4.3,-4.4).lineTo(-2.2,-4.4).lineTo(-1.7,-4.9).lineTo(-1,-4.2).lineTo(-1.5,-3.9).lineTo(-3,-1).lineTo(-1.9,0).curveTo(-1.4,0.6,-1.3,1.3).curveTo(-1.2,2,-1.6,2.6).curveTo(-2,3.2,-2.9,3.5).curveTo(-3.1,2.8,-4.1,2.5).lineTo(-4.1,2.3).curveTo(-2.9,2.5,-2.5,2.4).curveTo(-2,2.3,-2,1.3).curveTo(-2.1,0.3,-3.3,-1).lineTo(-2.2,-4.2).lineTo(-4.3,-4.2).lineTo(-4.3,5).lineTo(-5,5.3).lineTo(-4.9,-0.4).closePath();
	this.shape_11.setTransform(96.8,48.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,5.1).curveTo(-0.3,5,-1.1,4.8).curveTo(-1.9,4.5,-2.5,3.9).curveTo(-3.2,3.3,-3.3,3.3).curveTo(-3.6,3.4,-4.1,3.9).curveTo(-4.7,4.5,-4.8,4.8).lineTo(-5.6,4.2).curveTo(-4.8,3.6,-3.6,3).lineTo(-3.6,-0.9).lineTo(-4.2,-0.9).lineTo(-5.1,-0.7).lineTo(-5.6,-1.1).lineTo(-3.8,-1.1).lineTo(-3.4,-1.6).lineTo(-2.6,-1.1).lineTo(-3.1,-0.7).lineTo(-3.1,3).curveTo(-1.7,4.4,0.7,4.4).curveTo(3.1,4.5,5.6,4.1).lineTo(5.6,4.3).curveTo(4.6,4.6,4.6,5.1).lineTo(1,5.1).closePath().moveTo(-2,3.6).curveTo(0.6,2.1,0.9,-0.2).lineTo(-0.9,-0.2).lineTo(-1.8,-0.1).lineTo(-2.3,-0.4).lineTo(1,-0.4).lineTo(1.1,-2.2).lineTo(-0.3,-2.2).lineTo(-1.2,-2.1).lineTo(-1.6,-2.5).lineTo(1.8,-2.5).curveTo(2.4,-3.8,2.7,-5.1).lineTo(3.7,-4.5).lineTo(3.3,-4.3).lineTo(2,-2.5).lineTo(3.4,-2.5).lineTo(4,-3.1).lineTo(4.9,-2.2).lineTo(1.7,-2.2).lineTo(1.6,-0.4).lineTo(3.8,-0.4).lineTo(4.5,-1.1).lineTo(5.4,-0.2).lineTo(1.5,-0.2).lineTo(1.3,0.8).lineTo(3.4,1.9).curveTo(4.2,2.3,4.3,2.8).curveTo(4.4,3.2,4.2,3.5).curveTo(4,3.9,3.7,3.3).curveTo(3.3,2.7,2.7,2.2).curveTo(2,1.5,1.2,1.1).curveTo(0.4,2.8,-1.8,3.8).closePath().moveTo(-3.6,-3.2).curveTo(-3.9,-3.9,-4.4,-4.8).lineTo(-4.2,-4.9).lineTo(-3.1,-4).curveTo(-2.8,-3.6,-2.8,-3.3).curveTo(-2.9,-3.1,-3.2,-2.8).lineTo(-3.3,-2.7).curveTo(-3.5,-2.7,-3.6,-3.2).closePath().moveTo(-0.1,-3.3).curveTo(-0.2,-4,-0.9,-4.9).lineTo(-0.7,-5).lineTo(0.3,-4.2).curveTo(0.7,-3.9,0.7,-3.6).curveTo(0.6,-3.3,0.4,-3).lineTo(0.2,-2.9).curveTo(0,-2.9,-0.1,-3.3).closePath();
	this.shape_12.setTransform(132,30.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,-1.5).lineTo(-1.6,0.4).lineTo(-1.8,0.3).curveTo(-0.9,-1.4,-0.4,-3).curveTo(0,-4.6,0.1,-5.4).lineTo(1.2,-4.8).lineTo(0.8,-4.6).lineTo(0.2,-3.1).lineTo(4.1,-3.1).lineTo(4.6,-3.6).lineTo(5.5,-2.8).lineTo(2.6,-2.8).lineTo(2.6,-0.8).lineTo(3.7,-0.8).lineTo(4.2,-1.3).lineTo(5,-0.5).lineTo(2.6,-0.5).lineTo(2.6,1.6).lineTo(3.8,1.6).lineTo(4.4,1).lineTo(5.2,1.8).lineTo(2.6,1.8).lineTo(2.6,4.1).lineTo(4,4.1).lineTo(4.6,3.5).lineTo(5.5,4.4).lineTo(0.2,4.4).lineTo(0.2,5.1).lineTo(-0.5,5.4).lineTo(-0.4,-1.5).closePath().moveTo(0.2,4.1).lineTo(2,4.1).lineTo(2,1.8).lineTo(0.2,1.8).closePath().moveTo(0.2,1.6).lineTo(2,1.6).lineTo(2,-0.5).lineTo(0.2,-0.5).closePath().moveTo(0.2,-0.8).lineTo(2,-0.8).lineTo(2,-2.8).lineTo(0.2,-2.8).closePath().moveTo(-5,4.4).lineTo(-5,4.3).lineTo(-3.6,4.4).curveTo(-3.4,4.3,-3.4,3.9).lineTo(-3.4,0.3).lineTo(-4.6,1.2).lineTo(-4.9,1.6).lineTo(-5.5,0.8).lineTo(-3.4,-0.1).lineTo(-3.4,-2.5).lineTo(-4.5,-2.5).lineTo(-5,-2.4).lineTo(-5.4,-2.8).lineTo(-3.4,-2.8).lineTo(-3.4,-5.4).lineTo(-2.3,-4.9).lineTo(-2.8,-4.5).lineTo(-2.8,-2.8).lineTo(-2.1,-2.8).lineTo(-1.6,-3.3).lineTo(-0.8,-2.5).lineTo(-2.8,-2.5).lineTo(-2.8,-0.4).lineTo(-1.4,-1.1).lineTo(-1.3,-1).lineTo(-2.8,0).lineTo(-2.8,4.2).curveTo(-2.8,5.1,-3.7,5.4).curveTo(-3.7,4.8,-5,4.4).closePath().moveTo(2.4,-3.7).curveTo(2.2,-4.4,1.6,-5.1).lineTo(1.7,-5.2).curveTo(3,-4.5,3.1,-4.1).curveTo(3.2,-3.8,2.9,-3.5).lineTo(2.7,-3.3).curveTo(2.5,-3.3,2.4,-3.7).closePath();
	this.shape_13.setTransform(120.1,30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.3).lineTo(-2.4,1.9).lineTo(-1.3,2.4).lineTo(-1.7,2.7).lineTo(-1.7,4.1).curveTo(-1.7,4.8,-1,4.7).lineTo(1.8,4.7).curveTo(2.1,4.8,2.2,4.2).lineTo(2.3,2.8).lineTo(2.6,2.8).lineTo(2.6,3.9).curveTo(2.7,4.4,3.2,4.5).curveTo(2.9,5.3,1.8,5.3).lineTo(-1.3,5.3).lineTo(-1.4,5.3).curveTo(-2.4,5.3,-2.3,4.3).closePath().moveTo(-5,4.7).curveTo(-5.2,4.5,-4.7,4.1).curveTo(-4.2,3.7,-3.8,2.4).lineTo(-3.6,2.4).curveTo(-3.6,3.7,-3.7,4.2).curveTo(-3.9,4.7,-4.3,4.8).lineTo(-4.6,4.8).curveTo(-4.7,4.8,-4.7,4.8).curveTo(-4.8,4.8,-4.8,4.8).curveTo(-4.9,4.8,-4.9,4.7).curveTo(-4.9,4.7,-5,4.7).closePath().moveTo(4.2,4.1).curveTo(4,3.4,3.3,2.4).lineTo(3.3,2.3).lineTo(4.6,3.1).curveTo(5,3.5,5,3.9).curveTo(5,4.3,4.7,4.6).lineTo(4.6,4.7).curveTo(4.4,4.7,4.2,4.1).closePath().moveTo(0.1,2.9).curveTo(-0.1,2.3,-0.9,1.4).lineTo(-0.8,1.3).curveTo(-0,1.6,0.4,1.9).curveTo(0.8,2.1,0.8,2.5).curveTo(0.9,2.8,0.6,3.2).lineTo(0.4,3.3).curveTo(0.3,3.3,0.1,2.9).closePath().moveTo(-3.2,-1.3).lineTo(-3.2,-4.3).lineTo(-2.5,-3.9).lineTo(-1.2,-3.9).curveTo(-0.8,-4.8,-0.8,-5.3).lineTo(0.2,-4.8).lineTo(-0.4,-4.4).lineTo(-0.9,-3.9).lineTo(2.4,-3.9).lineTo(2.8,-4.4).lineTo(3.5,-3.8).lineTo(3.2,-3.5).lineTo(3.2,-0.6).lineTo(3.2,1.3).lineTo(2.5,1.5).lineTo(2.5,1).lineTo(-2.5,1).lineTo(-2.5,1.4).lineTo(-3.2,1.6).lineTo(-3.2,-1.3).closePath().moveTo(-2.5,0.7).lineTo(2.5,0.7).lineTo(2.5,-0.6).lineTo(-2.5,-0.6).closePath().moveTo(-2.5,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-2.1).lineTo(-2.5,-2.1).closePath().moveTo(-2.5,-2.4).lineTo(2.5,-2.4).lineTo(2.5,-3.6).lineTo(-2.5,-3.6).closePath();
	this.shape_14.setTransform(108.4,30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,4.5).lineTo(1.9,4.3).lineTo(3.3,4.3).curveTo(3.8,4.4,3.8,3.9).lineTo(3.8,2).lineTo(-0.1,2).lineTo(-0.1,5.1).lineTo(-0.8,5.4).lineTo(-0.7,1.2).lineTo(-0.8,-2.4).lineTo(-0.1,-2).lineTo(1.5,-2).lineTo(1.5,-5.5).lineTo(2.6,-5).lineTo(2.2,-4.7).lineTo(2.2,-2).lineTo(3.7,-2).lineTo(4.1,-2.4).lineTo(4.8,-1.8).lineTo(4.4,-1.5).lineTo(4.4,4.1).curveTo(4.4,5.1,3.4,5.5).curveTo(3.3,4.7,1.9,4.5).closePath().moveTo(-0.1,1.7).lineTo(3.8,1.7).lineTo(3.8,0.1).lineTo(-0.1,0.1).closePath().moveTo(-0.1,-0.2).lineTo(3.8,-0.2).lineTo(3.8,-1.7).lineTo(-0.1,-1.7).closePath().moveTo(-3.4,5.1).curveTo(-3.9,4.8,-3.7,3.9).curveTo(-3.4,3,-3.7,2.7).curveTo(-4,2.5,-4.9,2.3).lineTo(-4.9,2.1).lineTo(-3.7,2.1).curveTo(-3.5,2.1,-3.2,1.7).curveTo(-3,1.3,-1.2,-3.2).lineTo(-1,-3.2).lineTo(-2.8,2.3).curveTo(-2.9,2.9,-2.9,3.8).lineTo(-2.9,5).curveTo(-2.9,5.1,-2.9,5.1).curveTo(-2.9,5.2,-2.9,5.2).curveTo(-2.9,5.2,-3,5.2).curveTo(-3,5.3,-3.1,5.3).lineTo(-3.4,5.1).closePath().moveTo(-4.1,-0.7).curveTo(-4.3,-1.3,-5.1,-2.2).lineTo(-5,-2.3).curveTo(-3.4,-1.6,-3.4,-1.2).curveTo(-3.3,-0.7,-3.6,-0.4).lineTo(-3.8,-0.3).curveTo(-3.9,-0.3,-4.1,-0.7).closePath().moveTo(2.7,-2.4).curveTo(3.9,-4.2,4.2,-5).lineTo(5.1,-4.3).curveTo(4.7,-4.2,4.1,-3.6).lineTo(2.8,-2.3).closePath().moveTo(-0.1,-2.9).curveTo(-0.3,-3.6,-1.1,-4.7).lineTo(-1,-4.8).curveTo(0.2,-4.1,0.5,-3.7).curveTo(0.8,-3.3,0.5,-2.8).curveTo(0.4,-2.7,0.4,-2.7).curveTo(0.4,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.2,-2.6).curveTo(0.2,-2.6,0.1,-2.6).curveTo(0.1,-2.6,0.1,-2.6).curveTo(0,-2.7,-0,-2.8).curveTo(-0,-2.8,-0.1,-2.9).closePath().moveTo(-3,-3.3).curveTo(-3.2,-4,-3.9,-4.8).lineTo(-3.9,-5).curveTo(-2.5,-4.3,-2.4,-3.9).curveTo(-2.2,-3.5,-2.5,-3.1).lineTo(-2.8,-2.9).curveTo(-2.8,-2.9,-2.8,-3).curveTo(-2.9,-3,-2.9,-3).curveTo(-2.9,-3.1,-3,-3.2).curveTo(-3,-3.2,-3,-3.3).closePath();
	this.shape_15.setTransform(96.2,30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_16.setTransform(131.1,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_17.setTransform(123.6,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_18.setTransform(116.1,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_19.setTransform(108.6,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_20.setTransform(101.1,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1.1).curveTo(-1.5,0.7,-1.5,0).curveTo(-1.5,-0.7,-1,-1.1).curveTo(-0.6,-1.5,0,-1.5).curveTo(0.6,-1.5,1,-1).curveTo(1.5,-0.6,1.5,0).curveTo(1.5,0.7,1,1.1).curveTo(0.6,1.5,0,1.5).curveTo(-0.6,1.5,-1,1.1).closePath();
	this.shape_21.setTransform(93.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Active MQ_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.7,4.9).curveTo(1.4,5.6,-0.1,5.6).curveTo(-1.7,5.6,-3,4.8).curveTo(-4.2,4.1,-4.9,2.7).curveTo(-5.6,1.4,-5.6,-0.4).curveTo(-5.6,-2,-4.9,-3.4).curveTo(-4.2,-4.8,-2.9,-5.6).curveTo(-1.7,-6.3,-0.1,-6.3).curveTo(1.5,-6.3,2.8,-5.5).curveTo(4,-4.8,4.7,-3.4).curveTo(5.4,-2.1,5.4,-0.4).curveTo(5.4,1.1,4.9,2.2).curveTo(4.5,3.3,3.6,4.1).curveTo(4.7,4.9,5.6,5.2).lineTo(5.1,6.3).curveTo(3.9,5.8,2.7,4.9).closePath().moveTo(-2.9,-3.8).curveTo(-4,-2.7,-4,-0.4).curveTo(-4,1.9,-2.9,3.1).curveTo(-1.8,4.3,-0.1,4.3).curveTo(0.7,4.3,1.4,4).curveTo(0.7,3.5,-0.1,3.3).lineTo(0.3,2.2).curveTo(1.6,2.6,2.5,3.3).curveTo(3.8,2.1,3.8,-0.4).curveTo(3.8,-1.7,3.3,-2.8).curveTo(2.9,-3.8,2,-4.4).curveTo(1,-5,-0.1,-5).curveTo(-1.8,-5,-2.9,-3.8).closePath();
	this.shape_22.setTransform(66.2,86.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,5.7).lineTo(4,-3.9).lineTo(0.7,5.7).lineTo(-0.7,5.7).lineTo(-4,-4).lineTo(-4,5.7).lineTo(-5.4,5.7).lineTo(-5.4,-5.7).lineTo(-3.2,-5.7).lineTo(-0.5,2.4).lineTo(0.1,4.1).lineTo(0.7,2.2).lineTo(3.5,-5.7).lineTo(5.5,-5.7).lineTo(5.5,5.7).closePath();
	this.shape_23.setTransform(53.5,86.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,3.2).curveTo(-3.8,2.1,-3.8,0.1).curveTo(-3.8,-2,-2.8,-3.2).curveTo(-1.7,-4.3,0,-4.3).curveTo(1.7,-4.3,2.8,-3.2).curveTo(3.8,-2.1,3.8,-0).lineTo(3.8,0.3).lineTo(-2.4,0.3).curveTo(-2.3,1.8,-1.6,2.4).curveTo(-0.9,3.2,0.1,3.2).curveTo(0.9,3.2,1.4,2.8).curveTo(2,2.3,2.3,1.5).lineTo(3.8,1.6).curveTo(3.4,2.9,2.5,3.7).curveTo(1.6,4.3,0.1,4.3).curveTo(-1.7,4.4,-2.8,3.2).closePath().moveTo(-1.6,-2.5).curveTo(-2.2,-1.9,-2.3,-0.8).lineTo(2.3,-0.8).curveTo(2.2,-1.9,1.8,-2.3).curveTo(1.1,-3.2,0.1,-3.2).curveTo(-0.9,-3.2,-1.6,-2.5).closePath();
	this.shape_24.setTransform(38.5,87.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,4.1).lineTo(-3.8,-4.2).lineTo(-2.3,-4.2).lineTo(-0.5,0.8).lineTo(0,2.5).lineTo(0.5,0.9).lineTo(2.4,-4.2).lineTo(3.8,-4.2).lineTo(0.6,4.1).closePath();
	this.shape_25.setTransform(30.4,87.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,5.7).lineTo(-0.7,-2.6).lineTo(0.7,-2.6).lineTo(0.7,5.7).closePath().moveTo(-0.7,-4.1).lineTo(-0.7,-5.7).lineTo(0.7,-5.7).lineTo(0.7,-4.1).closePath();
	this.shape_26.setTransform(24.9,86.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,5.4).curveTo(-0.7,5.2,-0.8,4.8).curveTo(-1,4.4,-1,3.1).lineTo(-1,-1.7).lineTo(-2,-1.7).lineTo(-2,-2.8).lineTo(-1,-2.8).lineTo(-1,-4.8).lineTo(0.4,-5.6).lineTo(0.4,-2.8).lineTo(1.8,-2.8).lineTo(1.8,-1.7).lineTo(0.4,-1.7).lineTo(0.4,3.2).curveTo(0.4,3.8,0.5,3.9).curveTo(0.5,4,0.5,4).curveTo(0.5,4.1,0.6,4.1).curveTo(0.6,4.2,0.6,4.2).curveTo(0.7,4.2,0.7,4.3).lineTo(1.2,4.4).lineTo(1.8,4.3).lineTo(2,5.5).lineTo(0.9,5.6).curveTo(0.2,5.6,-0.2,5.4).closePath();
	this.shape_27.setTransform(21.3,86.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,3.2).curveTo(-3.6,2.1,-3.6,0.1).curveTo(-3.6,-1.3,-3.2,-2.3).curveTo(-2.7,-3.3,-1.8,-3.9).curveTo(-0.9,-4.3,0.1,-4.3).curveTo(1.5,-4.4,2.4,-3.6).curveTo(3.3,-3,3.4,-1.7).lineTo(2.1,-1.5).curveTo(1.9,-2.3,1.4,-2.7).curveTo(0.9,-3.2,0.2,-3.2).curveTo(-0.8,-3.2,-1.5,-2.4).curveTo(-2.2,-1.6,-2.2,-0).curveTo(-2.2,1.6,-1.5,2.4).curveTo(-0.9,3.2,0.1,3.2).curveTo(1,3.2,1.5,2.7).curveTo(2.1,2.1,2.2,1.1).lineTo(3.6,1.3).curveTo(3.4,2.7,2.5,3.6).curveTo(1.5,4.3,0.1,4.3).curveTo(-1.5,4.3,-2.6,3.2).closePath();
	this.shape_28.setTransform(15.6,87.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,5.7).lineTo(2.3,2.3).lineTo(-2.5,2.3).lineTo(-3.8,5.7).lineTo(-5.3,5.7).lineTo(-1,-5.7).lineTo(0.6,-5.7).lineTo(5.3,5.7).closePath().moveTo(-0.8,-2.3).lineTo(-2.1,1).lineTo(1.8,1).lineTo(0.6,-2.1).lineTo(-0.2,-4.5).curveTo(-0.4,-3.4,-0.8,-2.3).closePath();
	this.shape_29.setTransform(6.3,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// 服务器 拷贝
	this.instance = new lib.server();
	this.instance.setTransform(195,29,1,1,0,0,0,31,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 服务器
	this.instance_1 = new lib.server();
	this.instance_1.setTransform(35,29,1,1,0,0,0,31,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-8.3,235.3,105.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ORACLE();
	this.instance.setTransform(-246.8,176.1,1,1,0,0,0,225,279);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(113,212,255,0.627)").setStrokeStyle(2,1,1).moveTo(-87.5,-28.4).lineTo(89.3,-28.4).curveTo(95.3,-28.4,98,-24.5).lineTo(129.5,20.8).curveTo(130.9,22.8,131.3,24.3).curveTo(132,28,126,28.1).lineTo(-126.1,28.4).curveTo(-131.7,28.4,-131.4,25.3).curveTo(-131.3,23.6,-129.4,21.1).lineTo(-96.3,-24.4).curveTo(-93.6,-28.4,-87.5,-28.4).closePath();
	this.shape.setTransform(0,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(66,66,66,0.067)").beginStroke().moveTo(-131.4,25.3).curveTo(-131.3,23.6,-129.4,21).lineTo(-96.3,-24.5).curveTo(-93.6,-28.3,-87.5,-28.4).lineTo(89.3,-28.4).curveTo(95.3,-28.4,98,-24.5).lineTo(129.5,20.8).curveTo(130.9,22.8,131.3,24.3).curveTo(132,28,126,28.1).lineTo(-126.1,28.3).curveTo(-131.7,28.3,-131.4,25.3).closePath();
	this.shape_1.setTransform(0,3.3);

	this.instance_1 = new lib.info();
	this.instance_1.setTransform(97.1,57.7,0.786,0.786,0,0,0,10,11);

	this.instance_2 = new lib.info();
	this.instance_2.setTransform(-93.9,57.7,0.786,0.786,0,0,0,10,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,2.6).lineTo(-3.4,-1.6).curveTo(-4.4,-0,-5.3,1).lineTo(-5.5,0.9).curveTo(-4.5,-0.6,-3.5,-2.6).curveTo(-2.6,-4.4,-2.5,-5.4).lineTo(-1.4,-4.8).lineTo(-1.8,-4.5).lineTo(-3,-2.2).lineTo(-2.4,-1.8).lineTo(-2.7,-1.5).lineTo(-2.7,3.7).lineTo(-2.6,5.1).lineTo(-3.4,5.4).lineTo(-3.4,2.6).closePath().moveTo(1.7,4.9).curveTo(0.4,4.9,0.4,3.8).lineTo(0.4,1).curveTo(-0.8,1.9,-2.4,2.6).lineTo(-2.4,2.4).curveTo(-0.8,1.4,0.4,0.3).lineTo(0.4,-3).lineTo(0.4,-5.4).lineTo(1.5,-5).lineTo(1.1,-4.5).lineTo(1.1,-0.2).curveTo(1.8,-0.8,2.6,-1.8).curveTo(3.3,-2.7,3.7,-3.3).lineTo(4.5,-2.5).lineTo(4,-2.3).curveTo(2.6,-0.7,1.1,0.6).lineTo(1.1,3.5).curveTo(1.2,4.3,1.9,4.3).lineTo(3.9,4.3).curveTo(4.3,4.3,4.4,3.7).lineTo(4.5,1.8).lineTo(4.7,1.8).lineTo(4.9,3.5).curveTo(5.1,4,5.5,4).curveTo(5.1,4.9,4.1,4.9).closePath();
	this.shape_2.setTransform(25.1,60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,5.3).curveTo(-3,4,-1.5,2).curveTo(0.1,-0,0.8,-2.6).lineTo(-1.6,-2.6).curveTo(-2.6,-0.5,-4.4,1).lineTo(-4.5,0.9).curveTo(-3.1,-0.7,-2.3,-2.5).curveTo(-1.5,-4.3,-1.3,-5.4).lineTo(-0.2,-4.8).lineTo(-0.7,-4.5).lineTo(-1.5,-2.8).lineTo(0.8,-2.8).lineTo(1.3,-3.4).lineTo(2.1,-2.7).lineTo(1.6,-2.4).lineTo(1,-0.9).curveTo(1.6,1,2.7,2.4).curveTo(3.7,3.7,5.4,4.4).lineTo(5.4,4.5).curveTo(4.4,4.6,4.2,5.1).curveTo(1.9,3.4,0.9,-0.6).curveTo(-1.1,3.7,-5.3,5.4).closePath();
	this.shape_3.setTransform(13.2,60.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.5,4.5).lineTo(0.5,4.3).lineTo(1.9,4.5).curveTo(2.3,4.5,2.3,3.8).lineTo(2.3,1).lineTo(-0.4,1).curveTo(-1.1,1,-1.6,1.1).lineTo(-2,0.7).lineTo(2.3,0.7).lineTo(2.2,-1).lineTo(3.4,-0.5).lineTo(2.9,-0.2).lineTo(2.9,0.7).lineTo(3.9,0.7).lineTo(4.5,0.1).lineTo(5.3,1).lineTo(2.9,1).lineTo(2.9,4.4).curveTo(2.9,5.1,1.9,5.5).curveTo(2,5,0.5,4.5).closePath().moveTo(-5.1,4.4).lineTo(-5.1,4.2).curveTo(-4.1,4.4,-3.8,4.4).curveTo(-3.5,4.3,-3.5,3.8).lineTo(-3.5,0.7).curveTo(-4.6,1.3,-4.8,1.6).lineTo(-5.4,0.7).curveTo(-5.1,0.7,-3.5,0.1).lineTo(-3.5,-2.5).lineTo(-4.5,-2.5).lineTo(-5.1,-2.4).lineTo(-5.5,-2.7).lineTo(-3.5,-2.7).lineTo(-3.6,-5.5).lineTo(-2.5,-5).lineTo(-2.9,-4.6).lineTo(-2.9,-2.7).lineTo(-2.4,-2.7).lineTo(-1.9,-3.3).lineTo(-1.1,-2.5).lineTo(-2.9,-2.5).lineTo(-2.9,-0.1).lineTo(-1.4,-0.8).lineTo(-1.3,-0.6).lineTo(-2.9,0.3).lineTo(-2.9,4.3).curveTo(-2.9,5.1,-3.8,5.4).curveTo(-3.7,4.9,-5.1,4.4).closePath().moveTo(-0.2,3).curveTo(-0.4,2.4,-1.1,1.7).lineTo(-1,1.5).curveTo(-0.1,1.9,0.3,2.3).curveTo(0.7,2.6,0.6,2.9).curveTo(0.5,3.2,0.3,3.5).lineTo(0.2,3.5).curveTo(-0,3.5,-0.2,3).closePath().moveTo(-2,-1.4).lineTo(1.2,-1.4).lineTo(1.2,-3.3).lineTo(-0.6,-3.3).lineTo(-1.1,-3.2).lineTo(-1.4,-3.5).lineTo(1.2,-3.5).lineTo(1.1,-5.4).lineTo(2.3,-5).lineTo(1.8,-4.6).lineTo(1.8,-3.5).lineTo(3.4,-3.5).lineTo(3.9,-4.1).lineTo(4.7,-3.3).lineTo(1.8,-3.3).lineTo(1.8,-1.4).lineTo(4.1,-1.4).lineTo(4.6,-2).lineTo(5.5,-1.1).lineTo(-0.5,-1.1).curveTo(-1.1,-1.1,-1.6,-1).closePath();
	this.shape_4.setTransform(1.5,60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.3).lineTo(-2.4,1.9).lineTo(-1.3,2.4).lineTo(-1.7,2.7).lineTo(-1.7,4.1).curveTo(-1.7,4.8,-1,4.7).lineTo(1.8,4.7).curveTo(2.1,4.8,2.2,4.2).lineTo(2.3,2.8).lineTo(2.6,2.8).lineTo(2.6,3.9).curveTo(2.7,4.4,3.2,4.5).curveTo(2.9,5.3,1.8,5.3).lineTo(-1.3,5.3).lineTo(-1.4,5.3).curveTo(-2.4,5.3,-2.3,4.3).closePath().moveTo(-5,4.7).curveTo(-5.2,4.5,-4.7,4.1).curveTo(-4.2,3.7,-3.8,2.4).lineTo(-3.6,2.4).curveTo(-3.6,3.7,-3.7,4.2).curveTo(-3.9,4.7,-4.3,4.8).lineTo(-4.6,4.8).curveTo(-4.7,4.8,-4.7,4.8).curveTo(-4.8,4.8,-4.8,4.8).curveTo(-4.9,4.8,-4.9,4.7).curveTo(-4.9,4.7,-5,4.7).closePath().moveTo(4.2,4.1).curveTo(4,3.4,3.3,2.4).lineTo(3.3,2.3).lineTo(4.6,3.1).curveTo(5,3.5,5,3.9).curveTo(5,4.3,4.7,4.6).lineTo(4.6,4.7).curveTo(4.4,4.7,4.2,4.1).closePath().moveTo(0.1,2.9).curveTo(-0.1,2.3,-0.9,1.4).lineTo(-0.8,1.3).curveTo(-0,1.6,0.4,1.9).curveTo(0.8,2.1,0.8,2.5).curveTo(0.9,2.8,0.6,3.2).lineTo(0.4,3.3).curveTo(0.3,3.3,0.1,2.9).closePath().moveTo(-3.2,-1.3).lineTo(-3.2,-4.3).lineTo(-2.5,-3.9).lineTo(-1.2,-3.9).curveTo(-0.8,-4.8,-0.8,-5.3).lineTo(0.2,-4.8).lineTo(-0.4,-4.4).lineTo(-0.9,-3.9).lineTo(2.4,-3.9).lineTo(2.8,-4.4).lineTo(3.5,-3.8).lineTo(3.2,-3.5).lineTo(3.2,-0.6).lineTo(3.2,1.3).lineTo(2.5,1.5).lineTo(2.5,1).lineTo(-2.5,1).lineTo(-2.5,1.4).lineTo(-3.2,1.6).lineTo(-3.2,-1.3).closePath().moveTo(-2.5,0.7).lineTo(2.5,0.7).lineTo(2.5,-0.6).lineTo(-2.5,-0.6).closePath().moveTo(-2.5,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-2.1).lineTo(-2.5,-2.1).closePath().moveTo(-2.5,-2.4).lineTo(2.5,-2.4).lineTo(2.5,-3.6).lineTo(-2.5,-3.6).closePath();
	this.shape_5.setTransform(-10.3,59.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,4.5).lineTo(1.9,4.3).lineTo(3.3,4.3).curveTo(3.8,4.4,3.8,3.9).lineTo(3.8,2).lineTo(-0.1,2).lineTo(-0.1,5.1).lineTo(-0.8,5.4).lineTo(-0.7,1.2).lineTo(-0.8,-2.4).lineTo(-0.1,-2).lineTo(1.5,-2).lineTo(1.5,-5.5).lineTo(2.6,-5).lineTo(2.2,-4.7).lineTo(2.2,-2).lineTo(3.7,-2).lineTo(4.1,-2.4).lineTo(4.8,-1.8).lineTo(4.4,-1.5).lineTo(4.4,4.1).curveTo(4.4,5.1,3.4,5.5).curveTo(3.3,4.7,1.9,4.5).closePath().moveTo(-0.1,1.7).lineTo(3.8,1.7).lineTo(3.8,0.1).lineTo(-0.1,0.1).closePath().moveTo(-0.1,-0.2).lineTo(3.8,-0.2).lineTo(3.8,-1.7).lineTo(-0.1,-1.7).closePath().moveTo(-3.4,5.1).curveTo(-3.9,4.8,-3.7,3.9).curveTo(-3.4,3,-3.7,2.7).curveTo(-4,2.5,-4.9,2.3).lineTo(-4.9,2.1).lineTo(-3.7,2.1).curveTo(-3.5,2.1,-3.2,1.7).curveTo(-3,1.3,-1.2,-3.2).lineTo(-1,-3.2).lineTo(-2.8,2.3).curveTo(-2.9,2.9,-2.9,3.8).lineTo(-2.9,5).curveTo(-2.9,5.1,-2.9,5.1).curveTo(-2.9,5.2,-2.9,5.2).curveTo(-2.9,5.2,-3,5.2).curveTo(-3,5.3,-3.1,5.3).lineTo(-3.4,5.1).closePath().moveTo(-4.1,-0.7).curveTo(-4.3,-1.3,-5.1,-2.2).lineTo(-5,-2.3).curveTo(-3.4,-1.6,-3.4,-1.2).curveTo(-3.3,-0.7,-3.6,-0.4).lineTo(-3.8,-0.3).curveTo(-3.9,-0.3,-4.1,-0.7).closePath().moveTo(2.7,-2.4).curveTo(3.9,-4.2,4.2,-5).lineTo(5.1,-4.3).curveTo(4.7,-4.2,4.1,-3.6).lineTo(2.8,-2.3).closePath().moveTo(-0.1,-2.9).curveTo(-0.3,-3.6,-1.1,-4.7).lineTo(-1,-4.8).curveTo(0.2,-4.1,0.5,-3.7).curveTo(0.8,-3.3,0.5,-2.8).curveTo(0.4,-2.7,0.4,-2.7).curveTo(0.4,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.2,-2.6).curveTo(0.2,-2.6,0.1,-2.6).curveTo(0.1,-2.6,0.1,-2.6).curveTo(0,-2.7,-0,-2.8).curveTo(-0,-2.8,-0.1,-2.9).closePath().moveTo(-3,-3.3).curveTo(-3.2,-4,-3.9,-4.8).lineTo(-3.9,-5).curveTo(-2.5,-4.3,-2.4,-3.9).curveTo(-2.2,-3.5,-2.5,-3.1).lineTo(-2.8,-2.9).curveTo(-2.8,-2.9,-2.8,-3).curveTo(-2.9,-3,-2.9,-3).curveTo(-2.9,-3.1,-3,-3.2).curveTo(-3,-3.2,-3,-3.3).closePath();
	this.shape_6.setTransform(-22.4,60.2);

	this.instance_3 = new lib.group2();
	this.instance_3.setTransform(67.2,60.6,1,1,0,0,0,10,16.5);

	this.instance_4 = new lib.group2();
	this.instance_4.setTransform(-59.8,60.6,1,1,0,0,0,10,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.3,-81.3,264.7,158.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Active();
	this.instance.setTransform(0.6,-20.6,1,1,0,0,0,116.4,48.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,1.4).curveTo(-4.4,2.1,-4.8,2.8).lineTo(-5.3,2.1).curveTo(-5.1,1.8,-5.1,1.4).lineTo(-5.1,-1.5).lineTo(-5.2,-3.4).lineTo(-4.1,-2.8).lineTo(-4.5,-2.6).lineTo(-4.5,1.7).lineTo(-2.9,1.1).lineTo(-3,-5.5).lineTo(-1.9,-5).lineTo(-2.3,-4.6).lineTo(-2.3,5.2).lineTo(-3,5.5).lineTo(-2.9,1.4).closePath().moveTo(-2,5.4).curveTo(-0.2,4.4,1.3,2.7).curveTo(0,0.4,-0.2,-2.3).curveTo(-0.8,-0.8,-1.7,0.4).lineTo(-1.8,0.3).curveTo(-0.5,-2.2,0.2,-5.5).lineTo(1.3,-5).lineTo(0.9,-4.7).lineTo(0,-2.7).lineTo(3.6,-2.7).lineTo(4.2,-3.3).lineTo(5.1,-2.4).lineTo(3.6,-2.4).curveTo(3.1,0.6,2.1,2.7).curveTo(3.7,4.4,5.3,4.5).lineTo(5.3,4.7).curveTo(4.6,4.8,4.2,5.4).curveTo(2.7,4.4,1.7,3.2).curveTo(0.1,4.7,-1.9,5.5).closePath().moveTo(1.7,2.1).curveTo(2.4,0.7,2.9,-2.4).lineTo(0,-2.4).curveTo(0.5,0.4,1.7,2.1).closePath();
	this.shape.setTransform(45.5,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,5.3).curveTo(-1.6,5.2,-0.6,4.8).curveTo(0.5,4.4,1.5,3.5).curveTo(0.4,3.1,-0.9,2.9).lineTo(0.1,1.3).lineTo(-1.6,1.3).lineTo(-2,1.4).lineTo(-2.4,1).lineTo(0.2,1).lineTo(0.9,-0.9).lineTo(-1.1,-0.9).lineTo(-1.6,-0.8).lineTo(-1.9,-1.2).lineTo(2,-1.2).lineTo(2.4,-2.1).lineTo(2.8,-3.3).lineTo(3.7,-2.7).lineTo(3.3,-2.6).lineTo(2.3,-1.2).lineTo(4,-1.2).lineTo(4.6,-1.8).lineTo(5.4,-0.9).lineTo(1,-0.9).lineTo(1.9,-0.4).lineTo(1.5,-0.2).lineTo(0.8,1).lineTo(4.2,1).lineTo(4.8,0.4).lineTo(5.6,1.3).lineTo(3.6,1.3).curveTo(2.9,2.8,2.4,3.3).lineTo(4,4).curveTo(4.7,4.4,4.8,4.7).curveTo(5,5.1,4.8,5.3).curveTo(4.7,5.6,4.2,5.1).lineTo(3.4,4.4).lineTo(2.1,3.8).curveTo(1.3,4.4,0.3,4.9).curveTo(-0.8,5.4,-2.6,5.5).closePath().moveTo(-0.2,2.7).lineTo(1.8,3.2).curveTo(2.4,2.4,2.8,1.3).lineTo(0.7,1.3).lineTo(-0.2,2.7).closePath().moveTo(-5,4.4).lineTo(-5,4.2).curveTo(-4,4.4,-3.7,4.4).curveTo(-3.7,4.4,-3.6,4.4).curveTo(-3.6,4.3,-3.5,4.3).curveTo(-3.5,4.2,-3.5,4.2).curveTo(-3.5,4.1,-3.5,4).lineTo(-3.5,0.6).curveTo(-4.8,1.4,-4.9,1.7).lineTo(-5.6,0.9).lineTo(-3.5,0.1).lineTo(-3.5,-2.5).lineTo(-4.5,-2.5).lineTo(-5,-2.4).lineTo(-5.4,-2.8).lineTo(-3.5,-2.8).lineTo(-3.5,-5.5).lineTo(-2.5,-5).lineTo(-2.9,-4.7).lineTo(-2.9,-2.8).lineTo(-2.3,-2.8).lineTo(-1.8,-3.3).lineTo(-1,-2.5).lineTo(-2.9,-2.5).lineTo(-2.9,-0.1).lineTo(-1.6,-0.7).lineTo(-1.5,-0.5).lineTo(-2.9,0.3).lineTo(-2.9,4.3).curveTo(-2.9,5,-3.8,5.5).curveTo(-3.7,4.9,-5,4.4).closePath().moveTo(0.4,-1.7).curveTo(0.3,-2.3,-0.3,-3.1).lineTo(-0.2,-3.2).curveTo(0.9,-2.5,1,-2.1).curveTo(1.2,-1.8,0.9,-1.5).lineTo(0.6,-1.3).curveTo(0.6,-1.3,0.6,-1.4).curveTo(0.5,-1.4,0.5,-1.4).curveTo(0.5,-1.5,0.5,-1.5).curveTo(0.4,-1.6,0.4,-1.7).closePath().moveTo(-1.3,-3.6).lineTo(3.7,-3.6).lineTo(4.2,-4.2).lineTo(5,-3.4).lineTo(0.2,-3.4).curveTo(-0.4,-3.4,-0.9,-3.2).closePath().moveTo(1.4,-4.1).curveTo(1.2,-4.6,0.6,-5.3).lineTo(0.8,-5.4).curveTo(1.6,-5,1.9,-4.6).curveTo(2.2,-4.3,1.9,-3.9).lineTo(1.7,-3.7).curveTo(1.6,-3.7,1.6,-3.8).curveTo(1.6,-3.8,1.5,-3.8).curveTo(1.5,-3.9,1.5,-3.9).curveTo(1.4,-4,1.4,-4.1).closePath();
	this.shape_1.setTransform(33.4,60.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,5).curveTo(-0.7,4.1,1,2.5).curveTo(-0.6,0.2,-1.1,-2.2).curveTo(-1.3,-0.7,-2.1,1.3).curveTo(-3,3.1,-5.4,5.1).lineTo(-5.5,4.9).curveTo(-4,3.5,-3.2,2.1).curveTo(-2.4,0.7,-2,-1.2).curveTo(-1.6,-3,-1.5,-4.5).lineTo(-3.1,-4.5).lineTo(-3.5,-4.4).lineTo(-3.9,-4.8).lineTo(2.1,-4.8).lineTo(2.5,-5.2).lineTo(3.3,-4.5).lineTo(2.8,-4.2).lineTo(1.8,-1.6).lineTo(3.4,-1.6).lineTo(3.8,-2).lineTo(4.5,-1.3).lineTo(4.1,-1.1).curveTo(2.9,1.3,1.8,2.5).curveTo(2.6,3.3,3.6,3.7).curveTo(4.6,4.1,5.5,4.3).lineTo(5.5,4.4).curveTo(4.8,4.5,4.5,5.1).curveTo(2.5,4.1,1.3,2.9).curveTo(-0.5,4.4,-4,5.2).closePath().moveTo(-1,-2.6).curveTo(-0.2,0.3,1.4,2).curveTo(2.7,0.5,3.4,-1.3).lineTo(1.8,-1.3).lineTo(1.5,-1).lineTo(0.9,-1.6).curveTo(1.3,-1.9,1.6,-2.8).lineTo(2.1,-4.5).lineTo(-0.8,-4.5).lineTo(-1,-2.6).closePath();
	this.shape_2.setTransform(21.5,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,5.1).curveTo(-0.3,5,-1.1,4.8).curveTo(-1.9,4.5,-2.5,3.9).curveTo(-3.2,3.3,-3.3,3.3).curveTo(-3.6,3.4,-4.1,3.9).curveTo(-4.6,4.5,-4.8,4.8).lineTo(-5.6,4.2).curveTo(-4.8,3.6,-3.7,3).lineTo(-3.7,-0.9).lineTo(-4.2,-0.9).lineTo(-5.1,-0.7).lineTo(-5.6,-1.1).lineTo(-3.8,-1.1).lineTo(-3.4,-1.6).lineTo(-2.7,-1.1).lineTo(-3.1,-0.7).lineTo(-3.1,3).curveTo(-1.7,4.4,0.7,4.4).curveTo(3,4.5,5.6,4.1).lineTo(5.6,4.3).curveTo(4.6,4.6,4.6,5.1).lineTo(1,5.1).closePath().moveTo(-2,3.6).curveTo(0.6,2.1,0.9,-0.2).lineTo(-1,-0.2).lineTo(-1.8,-0.1).lineTo(-2.2,-0.4).lineTo(0.9,-0.4).lineTo(1.1,-2.2).lineTo(-0.3,-2.2).lineTo(-1.2,-2.1).lineTo(-1.6,-2.5).lineTo(1.7,-2.5).curveTo(2.4,-3.8,2.7,-5.1).lineTo(3.7,-4.5).lineTo(3.3,-4.3).lineTo(2,-2.5).lineTo(3.4,-2.5).lineTo(4.1,-3.1).lineTo(4.9,-2.2).lineTo(1.7,-2.2).lineTo(1.6,-0.4).lineTo(3.8,-0.4).lineTo(4.4,-1.1).lineTo(5.3,-0.2).lineTo(1.5,-0.2).lineTo(1.4,0.8).lineTo(3.4,1.9).curveTo(4.2,2.4,4.3,2.8).curveTo(4.4,3.2,4.2,3.5).curveTo(4,3.9,3.6,3.3).curveTo(3.3,2.7,2.7,2.2).curveTo(2,1.5,1.3,1.1).curveTo(0.4,2.8,-1.9,3.8).closePath().moveTo(-3.7,-3.2).curveTo(-3.9,-3.9,-4.4,-4.8).lineTo(-4.2,-4.9).lineTo(-3.1,-3.9).curveTo(-2.7,-3.6,-2.8,-3.3).curveTo(-2.8,-3.1,-3.1,-2.8).lineTo(-3.3,-2.7).curveTo(-3.5,-2.7,-3.7,-3.2).closePath().moveTo(-0.1,-3.3).curveTo(-0.3,-4,-0.9,-4.9).lineTo(-0.7,-5).lineTo(0.3,-4.2).curveTo(0.7,-3.9,0.7,-3.6).curveTo(0.7,-3.3,0.4,-3).lineTo(0.2,-2.9).curveTo(0,-2.9,-0.1,-3.3).closePath();
	this.shape_3.setTransform(9.8,60.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,5.4).curveTo(-0.8,4.4,0.6,2.9).curveTo(-0.4,1.6,-1.1,-0.1).lineTo(-1.5,-0.1).curveTo(-2,1.5,-2.9,2.8).curveTo(-3.8,4.2,-5.3,5.2).lineTo(-5.4,5.1).curveTo(-4.7,4.4,-3.9,3.4).curveTo(-3.2,2.5,-2.7,1.2).curveTo(-2.1,-0,-1.7,-2.1).lineTo(-3.9,-2.1).lineTo(-4.2,-1.7).lineTo(-4.9,-2.4).lineTo(-4.5,-2.6).curveTo(-3.8,-4.1,-3.7,-4.9).lineTo(-2.7,-4.4).lineTo(-3.1,-4.1).lineTo(-3.8,-2.4).lineTo(-1.7,-2.4).lineTo(-1.4,-3.9).lineTo(-1.2,-5.5).lineTo(-0.3,-5.1).lineTo(-0.6,-4.7).lineTo(-1,-2.4).lineTo(3.7,-2.4).lineTo(4.3,-3).lineTo(5.2,-2.1).lineTo(-1.1,-2.1).lineTo(-1.4,-0.4).lineTo(2.6,-0.4).lineTo(2.9,-0.9).lineTo(3.7,-0.2).lineTo(3.3,0.1).curveTo(2.5,1.7,1.4,2.9).curveTo(2.9,4.2,5.4,4.6).lineTo(5.4,4.7).curveTo(4.7,4.9,4.5,5.4).curveTo(2.3,4.7,1,3.4).curveTo(-0.8,4.9,-3.6,5.5).closePath().moveTo(1,2.5).curveTo(1.8,1.5,2.6,-0.1).lineTo(-0.8,-0.1).curveTo(-0.1,1.4,1,2.5).closePath().moveTo(2.6,-3.4).curveTo(2.2,-4.1,1.1,-5.1).lineTo(1.1,-5.3).curveTo(2.5,-4.7,3,-4.3).curveTo(3.5,-3.9,3.3,-3.3).curveTo(3.2,-3.2,3.2,-3.2).curveTo(3.2,-3.1,3.2,-3.1).curveTo(3.1,-3.1,3.1,-3).curveTo(3,-3,3,-3).curveTo(2.8,-3,2.6,-3.4).closePath();
	this.shape_4.setTransform(-1.9,60.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.3).lineTo(-2.4,1.9).lineTo(-1.3,2.4).lineTo(-1.7,2.7).lineTo(-1.7,4.1).curveTo(-1.7,4.8,-1,4.7).lineTo(1.8,4.7).curveTo(2.1,4.8,2.2,4.2).lineTo(2.3,2.8).lineTo(2.6,2.8).lineTo(2.6,3.9).curveTo(2.7,4.4,3.2,4.5).curveTo(2.9,5.3,1.8,5.3).lineTo(-1.3,5.3).lineTo(-1.4,5.3).curveTo(-2.4,5.3,-2.3,4.3).closePath().moveTo(-5,4.7).curveTo(-5.2,4.5,-4.7,4.1).curveTo(-4.2,3.7,-3.8,2.4).lineTo(-3.6,2.4).curveTo(-3.6,3.7,-3.7,4.2).curveTo(-3.9,4.7,-4.3,4.8).lineTo(-4.6,4.8).curveTo(-4.7,4.8,-4.7,4.8).curveTo(-4.8,4.8,-4.8,4.8).curveTo(-4.9,4.8,-4.9,4.7).curveTo(-4.9,4.7,-5,4.7).closePath().moveTo(4.2,4.1).curveTo(4,3.4,3.3,2.4).lineTo(3.3,2.3).lineTo(4.6,3.1).curveTo(5,3.5,5,3.9).curveTo(5,4.3,4.7,4.6).lineTo(4.6,4.7).curveTo(4.4,4.7,4.2,4.1).closePath().moveTo(0.1,2.9).curveTo(-0.1,2.3,-0.9,1.4).lineTo(-0.8,1.3).curveTo(-0,1.6,0.4,1.9).curveTo(0.8,2.1,0.8,2.5).curveTo(0.9,2.8,0.6,3.2).lineTo(0.4,3.3).curveTo(0.3,3.3,0.1,2.9).closePath().moveTo(-3.2,-1.3).lineTo(-3.2,-4.3).lineTo(-2.5,-3.9).lineTo(-1.2,-3.9).curveTo(-0.8,-4.8,-0.8,-5.3).lineTo(0.2,-4.8).lineTo(-0.4,-4.4).lineTo(-0.9,-3.9).lineTo(2.4,-3.9).lineTo(2.8,-4.4).lineTo(3.5,-3.8).lineTo(3.2,-3.5).lineTo(3.2,-0.6).lineTo(3.2,1.3).lineTo(2.5,1.5).lineTo(2.5,1).lineTo(-2.5,1).lineTo(-2.5,1.4).lineTo(-3.2,1.6).lineTo(-3.2,-1.3).closePath().moveTo(-2.5,0.7).lineTo(2.5,0.7).lineTo(2.5,-0.6).lineTo(-2.5,-0.6).closePath().moveTo(-2.5,-0.9).lineTo(2.5,-0.9).lineTo(2.5,-2.1).lineTo(-2.5,-2.1).closePath().moveTo(-2.5,-2.4).lineTo(2.5,-2.4).lineTo(2.5,-3.6).lineTo(-2.5,-3.6).closePath();
	this.shape_5.setTransform(-13.7,60.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,4.5).lineTo(1.9,4.3).lineTo(3.3,4.3).curveTo(3.8,4.4,3.8,3.9).lineTo(3.8,2).lineTo(-0.1,2).lineTo(-0.1,5.1).lineTo(-0.8,5.4).lineTo(-0.7,1.2).lineTo(-0.8,-2.4).lineTo(-0.1,-2).lineTo(1.5,-2).lineTo(1.5,-5.5).lineTo(2.6,-5).lineTo(2.2,-4.7).lineTo(2.2,-2).lineTo(3.7,-2).lineTo(4.1,-2.4).lineTo(4.8,-1.8).lineTo(4.4,-1.5).lineTo(4.4,4.1).curveTo(4.4,5.1,3.4,5.5).curveTo(3.3,4.7,1.9,4.5).closePath().moveTo(-0.1,1.7).lineTo(3.8,1.7).lineTo(3.8,0.1).lineTo(-0.1,0.1).closePath().moveTo(-0.1,-0.2).lineTo(3.8,-0.2).lineTo(3.8,-1.7).lineTo(-0.1,-1.7).closePath().moveTo(-3.4,5.1).curveTo(-3.9,4.8,-3.7,3.9).curveTo(-3.4,3,-3.7,2.7).curveTo(-4,2.5,-4.9,2.3).lineTo(-4.9,2.1).lineTo(-3.7,2.1).curveTo(-3.5,2.1,-3.2,1.7).curveTo(-3,1.3,-1.2,-3.2).lineTo(-1,-3.2).lineTo(-2.8,2.3).curveTo(-2.9,2.9,-2.9,3.8).lineTo(-2.9,5).curveTo(-2.9,5.1,-2.9,5.1).curveTo(-2.9,5.2,-2.9,5.2).curveTo(-2.9,5.2,-3,5.2).curveTo(-3,5.3,-3.1,5.3).lineTo(-3.4,5.1).closePath().moveTo(-4.1,-0.7).curveTo(-4.3,-1.3,-5.1,-2.2).lineTo(-5,-2.3).curveTo(-3.4,-1.6,-3.4,-1.2).curveTo(-3.3,-0.7,-3.6,-0.4).lineTo(-3.7,-0.3).curveTo(-3.9,-0.3,-4.1,-0.7).closePath().moveTo(2.7,-2.4).curveTo(3.9,-4.2,4.2,-5).lineTo(5.1,-4.3).curveTo(4.7,-4.2,4.1,-3.6).lineTo(2.8,-2.3).closePath().moveTo(-0.1,-2.9).curveTo(-0.3,-3.6,-1.1,-4.7).lineTo(-1,-4.8).curveTo(0.2,-4.1,0.5,-3.7).curveTo(0.8,-3.3,0.5,-2.8).curveTo(0.4,-2.7,0.4,-2.7).curveTo(0.4,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.3,-2.6).curveTo(0.3,-2.6,0.2,-2.6).curveTo(0.2,-2.6,0.1,-2.6).curveTo(0.1,-2.6,0.1,-2.6).curveTo(0,-2.7,-0,-2.8).curveTo(-0,-2.8,-0.1,-2.9).closePath().moveTo(-3,-3.3).curveTo(-3.2,-4,-3.9,-4.8).lineTo(-3.9,-5).curveTo(-2.5,-4.3,-2.4,-3.9).curveTo(-2.2,-3.5,-2.5,-3.1).lineTo(-2.8,-2.9).curveTo(-2.8,-2.9,-2.8,-3).curveTo(-2.9,-3,-2.9,-3).curveTo(-2.9,-3.1,-3,-3.2).curveTo(-3,-3.2,-3,-3.3).closePath();
	this.shape_6.setTransform(-25.8,60.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.7,3.9).lineTo(-1.4,3.8).lineTo(-1.7,3.8).lineTo(-2,4.1).lineTo(-2.4,1.8).lineTo(-2.1,1.7).curveTo(-1.8,2.9,-1.2,3.3).curveTo(-0.6,3.8,0.2,3.8).curveTo(0.9,3.8,1.3,3.3).curveTo(1.8,2.9,1.8,2).curveTo(1.8,1.5,1.3,1.1).curveTo(0.8,0.6,-0.1,0.2).curveTo(-1.3,-0.4,-1.8,-0.8).curveTo(-2.3,-1.2,-2.3,-2.2).curveTo(-2.3,-2.9,-1.7,-3.4).curveTo(-1.1,-4.1,-0,-4.1).curveTo(0.4,-4.1,0.9,-4).lineTo(1.4,-3.7).lineTo(1.7,-3.9).lineTo(2,-4.1).lineTo(2.1,-2.2).lineTo(1.9,-2.1).curveTo(1.5,-3,1,-3.4).curveTo(0.5,-3.7,-0.1,-3.7).curveTo(-1,-3.8,-1.4,-3.3).curveTo(-1.7,-2.8,-1.7,-2.2).curveTo(-1.7,-1.7,-1.4,-1.4).curveTo(-1,-1.1,0.3,-0.5).curveTo(1.4,0,1.9,0.5).curveTo(2.4,1.1,2.4,2).curveTo(2.4,2.8,1.8,3.5).curveTo(1.3,4.1,0.1,4.1).curveTo(-0.4,4.1,-0.7,3.9).closePath();
	this.shape_7.setTransform(-34.4,61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,4).lineTo(0.8,3.8).lineTo(1.1,3.8).lineTo(1.4,3.7).lineTo(1.5,3.3).lineTo(1.5,-2.8).lineTo(1.4,-2.8).lineTo(-0.2,4).lineTo(-0.4,4).lineTo(-1.9,-2.6).lineTo(-2,-2.6).lineTo(-2,3.3).lineTo(-1.9,3.7).lineTo(-1.6,3.8).lineTo(-1.4,3.8).lineTo(-1.4,4).lineTo(-2.9,4).lineTo(-2.9,3.8).lineTo(-2.7,3.8).lineTo(-2.4,3.7).lineTo(-2.3,3.3).lineTo(-2.3,-3.4).lineTo(-2.4,-3.6).lineTo(-2.7,-3.7).lineTo(-2.9,-3.7).lineTo(-2.9,-4).lineTo(-1.5,-4).lineTo(-0.2,2.1).lineTo(-0.2,2.1).lineTo(1.4,-4).lineTo(2.9,-4).lineTo(2.9,-3.7).lineTo(2.6,-3.7).lineTo(2.3,-3.6).lineTo(2.3,-3.4).lineTo(2.3,3.3).lineTo(2.3,3.7).lineTo(2.6,3.8).lineTo(2.9,3.8).lineTo(2.9,4).closePath();
	this.shape_8.setTransform(-40.1,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,4.5).curveTo(-2.6,4.2,-2.6,3.8).curveTo(-2.6,3.8,-2.6,3.7).curveTo(-2.6,3.6,-2.6,3.6).curveTo(-2.6,3.5,-2.5,3.5).curveTo(-2.5,3.4,-2.4,3.4).curveTo(-2.4,3.4,-2.4,3.3).curveTo(-2.3,3.3,-2.3,3.3).curveTo(-2.2,3.3,-2.2,3.3).curveTo(-2.1,3.3,-2.1,3.3).curveTo(-2,3.3,-2,3.3).curveTo(-2,3.3,-1.9,3.3).curveTo(-1.9,3.3,-1.8,3.4).curveTo(-1.8,3.4,-1.7,3.5).curveTo(-1.7,3.5,-1.7,3.5).curveTo(-1.7,3.6,-1.6,3.6).curveTo(-1.6,3.7,-1.6,3.7).curveTo(-1.6,3.8,-1.6,3.8).lineTo(-1.6,4).lineTo(-1.7,4.2).lineTo(-1.4,4.4).lineTo(-1,4.5).curveTo(-0.4,4.5,-0,4.1).curveTo(0.3,3.6,0.4,2.6).lineTo(0.4,-4.1).lineTo(0.3,-4.4).lineTo(-0.1,-4.5).lineTo(-1.2,-4.5).lineTo(-1.2,-4.7).lineTo(2.6,-4.7).lineTo(2.6,-4.5).lineTo(1.5,-4.5).lineTo(1.3,-4.4).curveTo(1.2,-4.4,1.2,-4.3).curveTo(1.2,-4.3,1.1,-4.3).curveTo(1.1,-4.2,1.1,-4.2).curveTo(1.1,-4.1,1.1,-4.1).lineTo(1.1,2.6).curveTo(1.1,3.6,0.4,4.2).curveTo(-0.2,4.8,-1.2,4.7).curveTo(-1.9,4.7,-2.3,4.5).closePath();
	this.shape_9.setTransform(-45.9,61.7);

	this.instance_1 = new lib.vect_1();
	this.instance_1.setTransform(116.7,61.7,1,1,0,0,0,12.5,8);

	this.instance_2 = new lib.vect_1();
	this.instance_2.setTransform(-116.3,61.7,1,1,0,0,0,12.5,8);

	this.instance_3 = new lib.group2();
	this.instance_3.setTransform(82.2,61.2,1,1,0,0,0,10,16.5);

	this.instance_4 = new lib.group2();
	this.instance_4.setTransform(0.2,61.2,1,1,0,0,0,10,16.5);
	this.instance_4.alpha = 0.59;

	this.instance_5 = new lib.group2();
	this.instance_5.setTransform(-81.8,61.2,1,1,0,0,0,10,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("rgba(113,212,255,0.627)").setStrokeStyle(2,1,1).moveTo(-128.1,-31.1).lineTo(128.8,-31.2).curveTo(137.4,-31.2,140.4,-26.6).lineTo(172.6,23.5).curveTo(174,25.6,174.1,27.1).curveTo(174,30.9,166.1,30.9).lineTo(-166.1,31.2).curveTo(-173.5,31.2,-174,28.2).curveTo(-174.4,26.4,-172.6,23.8).lineTo(-139.8,-26.5).curveTo(-136.9,-31.2,-128.1,-31.1).closePath();
	this.shape_10.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-77.6,350.2,155.3);


(lib.infoCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vect6_2();
	this.instance.setTransform(23.5,-4.5,1,1,0,0,0,42,70);

	this.instance_1 = new lib.rect31();
	this.instance_1.setTransform(24,-58.5,1,1,0,0,0,22.5,4);

	this.instance_2 = new lib.rect3();
	this.instance_2.setTransform(-22,-58.5,1,1,0,0,0,22.5,4);

	this.instance_3 = new lib.vect_2();
	this.instance_3.setTransform(-22.5,-4.5,1,1,0,0,0,42,70);

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-1.6,7.5).curveTo(-3.8,7.5,-3.8,5.1).lineTo(-3.8,-4.3).lineTo(-2.5,-4.3).lineTo(-2.5,4.8).curveTo(-2.5,6.3,-1.2,6.3).lineTo(2.1,6.3).curveTo(3.5,6.3,3.7,5.1).curveTo(3.8,4.2,3.9,2.8).lineTo(5.3,3.3).lineTo(4.8,5.7).curveTo(4.4,7.5,2.4,7.5).closePath().moveTo(-7.8,3.7).curveTo(-6.8,0.7,-6.1,-2.6).lineTo(-4.9,-2.3).curveTo(-5.5,1,-6.6,4.2).closePath().moveTo(3.8,-2.6).lineTo(5,-3.1).curveTo(6.3,-0.6,7.8,2.6).lineTo(6.5,3.2).curveTo(5.3,0.2,3.8,-2.6).closePath().moveTo(-1.5,-6.9).lineTo(-0.4,-7.5).curveTo(1.1,-5,2.1,-3).lineTo(0.9,-2.3).curveTo(-0.2,-4.8,-1.5,-6.9).closePath();
	this.shape.setTransform(24.1,71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-0.7,7.7).lineTo(-0.7,1.9).lineTo(-5.4,1.9).lineTo(-5.4,2.8).lineTo(-6.7,2.8).lineTo(-6.7,-4.4).lineTo(-0.7,-4.4).lineTo(-0.7,-7.8).lineTo(0.6,-7.8).lineTo(0.6,-4.4).lineTo(6.7,-4.4).lineTo(6.7,2.8).lineTo(5.4,2.8).lineTo(5.4,1.9).lineTo(0.6,1.9).lineTo(0.6,7.7).closePath().moveTo(0.6,0.8).lineTo(5.4,0.8).lineTo(5.4,-3.2).lineTo(0.6,-3.2).closePath().moveTo(-5.4,0.8).lineTo(-0.7,0.8).lineTo(-0.7,-3.2).lineTo(-5.4,-3.2).closePath();
	this.shape_1.setTransform(8,71.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.1,7.6).curveTo(-4.1,7.6,-4.1,5.6).lineTo(-4.1,3.2).lineTo(-2.9,3.2).lineTo(-2.9,5.5).curveTo(-2.9,6.4,-1.9,6.4).lineTo(1.6,6.4).curveTo(2.8,6.4,3,5.6).lineTo(3.4,3.9).lineTo(4.5,4.3).lineTo(4.2,6.1).curveTo(3.8,7.6,1.8,7.6).closePath().moveTo(-7.9,6.4).curveTo(-7.2,5,-6.5,3).lineTo(-5.3,3.4).curveTo(-6,5.3,-6.7,6.8).lineTo(-7.9,6.4).closePath().moveTo(4.7,3.5).lineTo(5.6,2.8).lineTo(7.9,5.5).lineTo(6.9,6.2).curveTo(5.9,4.8,4.7,3.5).closePath().moveTo(-1.4,3).lineTo(-0.5,2.3).lineTo(1.6,4.4).lineTo(0.6,5.2).curveTo(-0.6,3.8,-1.4,3).closePath().moveTo(4.3,2.6).lineTo(4.3,2.1).lineTo(-4.6,2.1).lineTo(-4.6,2.6).lineTo(-5.7,2.6).lineTo(-5.7,-5.9).lineTo(-2,-5.9).lineTo(-1.4,-7.6).lineTo(-0.2,-7.2).lineTo(-0.7,-5.9).lineTo(5.5,-5.9).lineTo(5.5,2.6).closePath().moveTo(-4.6,1).lineTo(4.3,1).lineTo(4.3,-0.3).lineTo(-4.6,-0.3).closePath().moveTo(-4.6,-1.3).lineTo(4.3,-1.3).lineTo(4.3,-2.6).lineTo(-4.6,-2.6).closePath().moveTo(-4.6,-3.6).lineTo(4.3,-3.6).lineTo(4.3,-4.9).lineTo(-4.6,-4.9).closePath();
	this.shape_2.setTransform(-7.9,71.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FEFEFE").beginStroke().moveTo(-2.7,7.7).lineTo(-2.7,-3.2).lineTo(1.6,-3.2).lineTo(1.6,-7.7).lineTo(2.9,-7.7).lineTo(2.9,-3.2).lineTo(7.1,-3.2).lineTo(7.1,5.8).curveTo(7.1,7.6,5.3,7.6).lineTo(2.6,7.6).lineTo(2.4,6.3).lineTo(4.9,6.4).curveTo(5.9,6.4,5.9,5.5).lineTo(5.9,4).lineTo(-1.4,4).lineTo(-1.4,7.7).closePath().moveTo(-1.4,2.9).lineTo(5.9,2.9).lineTo(5.9,1).lineTo(-1.4,1).closePath().moveTo(-1.4,-0.1).lineTo(5.9,-0.1).lineTo(5.9,-2.1).lineTo(-1.4,-2.1).closePath().moveTo(-7.1,7.2).curveTo(-6.3,4.4,-5.6,1.1).lineTo(-4.3,1.6).lineTo(-5.8,7.6).closePath().moveTo(-7.5,-2.5).lineTo(-6.7,-3.4).lineTo(-4,-1.3).lineTo(-4.9,-0.2).curveTo(-6.6,-1.8,-7.5,-2.5).closePath().moveTo(4.2,-4.6).curveTo(5.3,-5.8,6.4,-7.2).lineTo(7.5,-6.4).lineTo(5.1,-3.8).closePath().moveTo(-2.9,-6.5).lineTo(-2,-7.2).lineTo(0.4,-4.7).lineTo(-0.7,-3.9).lineTo(-2.9,-6.5).closePath().moveTo(-6.9,-6.6).lineTo(-6.1,-7.4).lineTo(-3.4,-5.1).lineTo(-4.4,-4.2).lineTo(-6.9,-6.6).closePath();
	this.shape_3.setTransform(-24.3,71.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_4 = new lib.rect22();
	this.instance_4.setTransform(-84.3,-91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 5
	this.instance_5 = new lib.rect221();
	this.instance_5.setTransform(-84.3,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("rgba(113,212,255,0.627)").setStrokeStyle(2,1,1).moveTo(-168.8,-55.6).lineTo(173.6,-55.7).curveTo(182.5,-55.7,185.8,-46.8).lineTo(219,42.5).curveTo(220.5,46.5,220.5,49.3).curveTo(220.5,55.7,212.8,55.7).lineTo(-213.1,55.6).curveTo(-224.2,55.6,-218.6,42.4).lineTo(-181.4,-46.7).curveTo(-177.7,-55.6,-168.8,-55.6).closePath();
	this.shape_4.setTransform(-0.2,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(44,181,255,0.067)").beginStroke().moveTo(212.8,55.7).lineTo(-213.1,55.7).curveTo(-224.2,55.6,-218.6,42.4).lineTo(-181.4,-46.7).curveTo(-177.7,-55.6,-168.8,-55.6).lineTo(173.6,-55.7).curveTo(182.5,-55.7,185.8,-46.8).lineTo(219,42.5).curveTo(220.5,46.5,220.5,49.4).curveTo(220.5,55.7,212.8,55.7).lineTo(212.8,55.7).closePath();
	this.shape_5.setTransform(-0.2,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.6,-91.2,443,183.5);


// stage content:
(lib.TYXXZX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		this.goEnd=function(){
			that.gotoAndPlay(225);
		}
		this.skip.addEventListener('click',this.goEnd);
	}
	this.frame_226 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(226).call(this.frame_226).wait(1));

	// Layer 3
	this.skip = new lib.skip();
	this.skip.setTransform(683.9,723.4);
	new cjs.ButtonHelper(this.skip, 0, 1, 2, false, new lib.skip(), 3);

	this.timeline.addTween(cjs.Tween.get(this.skip).to({_off:true},224).wait(3));

	// 消息中心整合各业务应用组件的通知公告、代办事务、代办任务和报警信息，同时提供即时通讯工具，为民警创建良好的工作环境。 
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(686.9,625.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211).to({_off:false},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.301},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.642},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:1},0).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(66,66,66,0.067)").beginStroke().moveTo(-174,28.2).curveTo(-174.4,26.4,-172.6,23.8).lineTo(-139.8,-26.5).curveTo(-136.9,-31.2,-128.1,-31.1).lineTo(128.8,-31.2).curveTo(137.4,-31.2,140.4,-26.6).lineTo(172.6,23.5).curveTo(174,25.6,174.1,27.1).curveTo(174,30.9,166.1,30.9).lineTo(-166.1,31.2).curveTo(-173.5,31.2,-174,28.2).closePath();
	this.shape.setTransform(598.8,208.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(211).to({_off:false},0).wait(16));

	// Symbol 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(1258.5,189.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207).to({_off:false},0).wait(20));

	// 箭头 拷贝 4
	this.arrow7 = new lib.arrow();
	this.arrow7.setTransform(1191,190.5,1,1,0,0,0,17,8.5);
	this.arrow7.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow7).wait(205).to({visible:true},0).wait(22));

	// info
	this.instance_2 = new lib.info();
	this.instance_2.setTransform(1131,186,1,1,0,0,0,13,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(203).to({_off:false},0).wait(24));

	// Symbol 2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(1258.5,294.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(197).to({_off:false},0).wait(30));

	// 箭头 拷贝 5
	this.arrow8 = new lib.arrow();
	this.arrow8.setTransform(1191,295.5,1,1,0,0,0,17,8.5);
	this.arrow8.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow8).wait(195).to({visible:true},0).wait(32));

	// info
	this.instance_4 = new lib.info();
	this.instance_4.setTransform(1131,297,1,1,0,0,0,13,14);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(193).to({_off:false},0).wait(34));

	// Symbol 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(1258.5,399.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(182).to({_off:false},0).wait(45));

	// 箭头 拷贝 6
	this.arrow9 = new lib.arrow();
	this.arrow9.setTransform(1191,400.5,1,1,0,0,0,17,8.5);
	this.arrow9.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow9).wait(180).to({visible:true},0).wait(47));

	// info
	this.instance_6 = new lib.info();
	this.instance_6.setTransform(1131,408,1,1,0,0,0,13,14);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(178).to({_off:false},0).wait(49));

	// path-1
	this.instance_7 = new lib.path1();
	this.instance_7.setTransform(1133.2,295.2,1,1,0,0,0,32,175);
	this.instance_7.alpha = 0.68;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},0).wait(61));

	// arrawBig
	this.arrow6 = new lib.arrow();
	this.arrow6.setTransform(989.8,395.9,2.78,2.78);
	this.arrow6._off = true;
	this.arrow6.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow6).wait(107).to({_off:false},0).wait(54).to({scaleX:0.48,x:990.6,alpha:0,visible:true},0).to({scaleX:2.78,x:989.8,alpha:1},5).wait(61));

	// ORACLE
	this.instance_8 = new lib.Symbol7();
	this.instance_8.setTransform(683,327.1,1,1,0,0,0,-246.8,176.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133).to({_off:false},0).to({y:384.1},7).wait(87));

	// Active
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(633.7,190.4,1,1,0,0,0,34.9,49.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131).to({_off:false},0).to({y:256.9},7).wait(89));

	// infoCenter
	this.instance_10 = new lib.infoCenter();
	this.instance_10.setTransform(742.7,398);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.5,x:742.5,y:398.5,alpha:0.285},0).wait(1).to({alpha:0.537},0).wait(1).to({alpha:0.741},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.973},0).wait(1).to({regX:0,regY:0,x:742.7,y:398,alpha:1},0).wait(110));

	// arrawBig
	this.arrow5 = new lib.arrow();
	this.arrow5.setTransform(424.7,439.5,0.248,2.78,0,180,0);
	this.arrow5.alpha = 0;
	this.arrow5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow5).wait(107).to({_off:false},0).to({scaleX:2.78,x:424,alpha:1},6).wait(114));

	// letter
	this.instance_11 = new lib.letter();
	this.instance_11.setTransform(356.5,435,1,1,0,0,0,15.5,10);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(101).to({_off:false},0).wait(126));

	// 箭头 拷贝 3
	this.arrow4 = new lib.arrow();
	this.arrow4.setTransform(296,434.5,1,1,0,0,0,17,8.5);
	this.arrow4.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow4).wait(99).to({visible:true},0).wait(128));

	// 报警信息
	this.instance_12 = new lib.bjxx();
	this.instance_12.setTransform(171,442,1,1,0,0,0,94,40);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97).to({_off:false},0).wait(130));

	// letter
	this.instance_13 = new lib.letter();
	this.instance_13.setTransform(356.5,344,1,1,0,0,0,15.5,10);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90).to({_off:false},0).wait(137));

	// 箭头 拷贝 2
	this.arrow3 = new lib.arrow();
	this.arrow3.setTransform(296,343.5,1,1,0,0,0,17,8.5);
	this.arrow3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow3).wait(88).to({visible:true},0).wait(139));

	// 代办任务
	this.instance_14 = new lib.dbrw();
	this.instance_14.setTransform(171,346,1,1,0,0,0,94,40);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(86).to({_off:false},0).wait(141));

	// letter
	this.instance_15 = new lib.letter();
	this.instance_15.setTransform(356.5,253,1,1,0,0,0,15.5,10);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(79).to({_off:false},0).wait(148));

	// 箭头 拷贝
	this.arrow2 = new lib.arrow();
	this.arrow2.setTransform(296,251.5,1,1,0,0,0,17,8.5);
	this.arrow2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow2).wait(77).to({visible:true},0).wait(150));

	// 代办事务
	this.instance_16 = new lib.dbsw();
	this.instance_16.setTransform(171,250,1,1,0,0,0,94,40);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(75).to({_off:false},0).wait(152));

	// letter
	this.instance_17 = new lib.letter();
	this.instance_17.setTransform(356.5,162,1,1,0,0,0,15.5,10);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(63).to({_off:false},0).wait(164));

	// 箭头
	this.arrow1 = new lib.arrow();
	this.arrow1.setTransform(296,160.5,1,1,0,0,0,17,8.5);
	this.arrow1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.arrow1).wait(60).to({visible:true},0).wait(167));

	// 通知公告
	this.instance_18 = new lib.tzgg();
	this.instance_18.setTransform(171,154,1,1,0,0,0,94,40);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(57).to({_off:false},0).wait(170));

	// Layer 1
	this.instance_19 = new lib.path1();
	this.instance_19.setTransform(358.5,297.6,1,1,0,0,0,32,175);
	this.instance_19.alpha = 0.68;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(57).to({_off:false},0).wait(170));

	// 统一消息中心
	this.instance_20 = new lib.title();
	this.instance_20.setTransform(696.7,345.9,1.655,1.655,0,0,0,100.5,14.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:102,regY:14.9,x:699.1,y:346.6,alpha:0.248},0).wait(1).to({alpha:0.466},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.989},0).wait(1).to({regX:100.5,regY:14.5,x:696.7,y:345.9,alpha:1},0).wait(36).to({regX:102,regY:14.9,scaleX:1.64,scaleY:1.64,x:698.8,y:340.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:697.8,y:322.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:696.2,y:291.7},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:694,y:251.1},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:691.5,y:204.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:689.1,y:158.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:686.9,y:117.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:685.2,y:85.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:683.9,y:62.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:683.2,y:49.1},0).wait(1).to({regX:100.5,regY:14.5,scaleX:1,scaleY:1,x:681.5,y:44.5},0).wait(173));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(942,532,949,584.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
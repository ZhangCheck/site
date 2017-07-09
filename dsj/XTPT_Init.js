var cjs = cjs||{};
var createjs = cjs;
var canvas, stage, exportRoot;
function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	exportRoot = new lib.XTPT();

	stage = new cjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	cjs.Ticker.setFPS(lib.properties.fps);
	cjs.Ticker.addEventListener("tick", stage);
	
	onResize();
	window.onresize = onResize;
}
function onResize(){
	var winW = 1366, winH = 768;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	var cav = document.getElementById('canvas')
	cav.setAttribute('width',winW)	
	cav.setAttribute('height',winH)
	var w = winW/1366,h=winH/768
	if(stage){
		stage.scaleX = stage.scaleY = w<h?w:h;
		stage.x = (winW-1366*stage.scaleX)/2
		stage.y = (winH-768*stage.scaleY)/2
		stage.update();
	}
  }
var cjs = cjs||{};
var createjs = cjs;
var canvas, stage, exportRoot;
function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"images/TYXXZX_atlas_.json?1467273356905", type:"spritesheet", id:"TYXXZX_atlas_"}, true);
	loader.loadManifest(lib.properties.manifest);
	
	
}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	var queue = evt.target;
	ss["TYXXZX_atlas_"] = queue.getResult("TYXXZX_atlas_");
	exportRoot = new lib.TYXXZX();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	
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
	
	if(stage){
		var cav = document.getElementById('canvas')
		cav.setAttribute('width',winW)	
		cav.setAttribute('height',winH)
		var w = winW/1366,h=winH/768
		stage.scaleX = stage.scaleY = w<h?w:h;
		stage.x = (winW-1366*stage.scaleX)/2
		stage.y = (winH-768*stage.scaleY)/2
		stage.update();
	}
  }
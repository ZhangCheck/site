(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"super_atlas_", frames: [[0,0,56,269],[0,271,336,30]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.glow1 = function() {
	this.spriteSheet = ss["super_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shadow = function() {
	this.spriteSheet = ss["super_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glow1();
	this.instance.parent = this;
	this.instance.setTransform(127.3,-51.6,1,1,79.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-51.6,274.7,103.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_1 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_2 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_3 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_4 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_5 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_6 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_7 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_8 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_9 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_10 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_11 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_12 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_13 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_14 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_15 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_16 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_17 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_18 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_19 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_20 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_21 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_22 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_23 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_24 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:20.2,y:-117.3}).wait(1).to({graphics:mask_graphics_1,x:20.2,y:-115.4}).wait(1).to({graphics:mask_graphics_2,x:20.2,y:-113.5}).wait(1).to({graphics:mask_graphics_3,x:20.2,y:-111.6}).wait(1).to({graphics:mask_graphics_4,x:20.2,y:-109.7}).wait(1).to({graphics:mask_graphics_5,x:20.2,y:-107.8}).wait(1).to({graphics:mask_graphics_6,x:20.2,y:-105.9}).wait(1).to({graphics:mask_graphics_7,x:20.2,y:-104}).wait(1).to({graphics:mask_graphics_8,x:20.2,y:-102.1}).wait(1).to({graphics:mask_graphics_9,x:20.2,y:-100.2}).wait(1).to({graphics:mask_graphics_10,x:20.2,y:-98.3}).wait(1).to({graphics:mask_graphics_11,x:20.2,y:-96.4}).wait(1).to({graphics:mask_graphics_12,x:20.2,y:-94.5}).wait(1).to({graphics:mask_graphics_13,x:20.2,y:-92.6}).wait(1).to({graphics:mask_graphics_14,x:20.2,y:-90.7}).wait(1).to({graphics:mask_graphics_15,x:20.2,y:-88.8}).wait(1).to({graphics:mask_graphics_16,x:20.2,y:-86.9}).wait(1).to({graphics:mask_graphics_17,x:20.2,y:-85}).wait(1).to({graphics:mask_graphics_18,x:20.2,y:-83.1}).wait(1).to({graphics:mask_graphics_19,x:20.2,y:-81.3}).wait(1).to({graphics:mask_graphics_20,x:20.2,y:-79.4}).wait(1).to({graphics:mask_graphics_21,x:20.2,y:-77.5}).wait(1).to({graphics:mask_graphics_22,x:20.2,y:-75.6}).wait(1).to({graphics:mask_graphics_23,x:20.2,y:-73.7}).wait(1).to({graphics:mask_graphics_24,x:20.2,y:-71.8}).wait(1));

	// Layer 5
	this.text4 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 36;
	this.text4.lineWidth = 147;
	this.text4.parent = this;
	this.text4.setTransform(211.5,-79.8);

	this.text3 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 36;
	this.text3.lineWidth = 94;
	this.text3.parent = this;
	this.text3.setTransform(45,-79.8);

	this.text2 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 36;
	this.text2.lineWidth = 117;
	this.text2.parent = this;
	this.text2.setTransform(-95.4,-79.8);

	this.text1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 36;
	this.text1.lineWidth = 121;
	this.text1.parent = this;
	this.text1.setTransform(-235.4,-79.8);

	var maskedShapeInstanceList = [this.text4,this.text3,this.text2,this.text1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4}]}).wait(25));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:20.2,y:-58}).wait(1).to({graphics:mask_1_graphics_1,x:20.2,y:-56.2}).wait(1).to({graphics:mask_1_graphics_2,x:20.2,y:-54.3}).wait(1).to({graphics:mask_1_graphics_3,x:20.2,y:-52.4}).wait(1).to({graphics:mask_1_graphics_4,x:20.2,y:-50.6}).wait(1).to({graphics:mask_1_graphics_5,x:20.2,y:-48.7}).wait(1).to({graphics:mask_1_graphics_6,x:20.2,y:-46.9}).wait(1).to({graphics:mask_1_graphics_7,x:20.2,y:-45}).wait(1).to({graphics:mask_1_graphics_8,x:20.2,y:-43.2}).wait(1).to({graphics:mask_1_graphics_9,x:20.2,y:-41.3}).wait(1).to({graphics:mask_1_graphics_10,x:20.2,y:-39.4}).wait(1).to({graphics:mask_1_graphics_11,x:20.2,y:-37.6}).wait(1).to({graphics:mask_1_graphics_12,x:20.2,y:-35.7}).wait(1).to({graphics:mask_1_graphics_13,x:20.2,y:-33.9}).wait(1).to({graphics:mask_1_graphics_14,x:20.2,y:-32}).wait(1).to({graphics:mask_1_graphics_15,x:20.2,y:-30.1}).wait(1).to({graphics:mask_1_graphics_16,x:20.2,y:-28.3}).wait(1).to({graphics:mask_1_graphics_17,x:20.2,y:-26.4}).wait(1).to({graphics:mask_1_graphics_18,x:20.2,y:-24.6}).wait(1).to({graphics:mask_1_graphics_19,x:20.2,y:-22.7}).wait(1).to({graphics:mask_1_graphics_20,x:20.2,y:-20.9}).wait(1).to({graphics:mask_1_graphics_21,x:20.2,y:-19}).wait(1).to({graphics:mask_1_graphics_22,x:20.2,y:-17.1}).wait(1).to({graphics:mask_1_graphics_23,x:20.2,y:-15.3}).wait(1).to({graphics:mask_1_graphics_24,x:20.2,y:-13.4}).wait(1));

	// Layer 4
	this.text4_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text4_1.name = "text4_1";
	this.text4_1.textAlign = "center";
	this.text4_1.lineHeight = 36;
	this.text4_1.parent = this;
	this.text4_1.setTransform(211.5,-79.8);

	this.text3_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text3_1.name = "text3_1";
	this.text3_1.textAlign = "center";
	this.text3_1.lineHeight = 36;
	this.text3_1.parent = this;
	this.text3_1.setTransform(45,-79.8);

	this.text2_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text2_1.name = "text2_1";
	this.text2_1.textAlign = "center";
	this.text2_1.lineHeight = 36;
	this.text2_1.parent = this;
	this.text2_1.setTransform(-95.4,-79.8);

	this.text1_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text1_1.name = "text1_1";
	this.text1_1.textAlign = "center";
	this.text1_1.lineHeight = 36;
	this.text1_1.parent = this;
	this.text1_1.setTransform(-235.4,-79.8);

	var maskedShapeInstanceList = [this.text4_1,this.text3_1,this.text2_1,this.text1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1_1},{t:this.text2_1},{t:this.text3_1},{t:this.text4_1}]}).wait(25));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape.setTransform(277.9,-32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DC4D6").s().p("Ag4BPQA/ggAGhDIAAgQIAPAAIAAAIIAAAKQAMBAA2AdIgMAPQgygjgLgvQgIAzg7AiIgKgOgAheA/QATgdAVgtIAPAKQgNAWgaAzgAA0gLQAIgOAIgVIhJAAIgOAbIgEAKQgFgEgKgFQAWgiAMgoIAOAEQgFAPgFAOIBVAAIAAANQgKAagIAOQgFgDgKgCgAhXhJIALgJIAiAqIgNALQgSgagOgSg");
	this.shape_1.setTransform(257.9,-32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DC4D6").s().p("AhZBSQA3gRAJgjIg1AAIAAgOIA4AAIAAgBQABgJAAgJIAQAAIgCATIBKAAIgBAZIgBANQABAmgmgCIgcAAIgBgGIgCgKIAPABIAQAAQAWADABgYIABgNIAAgLIg+AAQgJAsg9AUIgJgMgAhfgEQAvgGAkgOQgUgNgOgSQgTAVgOALIgKgKQAggZAWgkIAOAHIgGAIIgEAFIBkAAIAAAOQgWAWgbAOQAhANArACIgLAOQgxgFghgPQgjAOg3AKQgDgHgFgGgAADgfQAagMATgRIhTAAQAQARAWAMg");
	this.shape_2.setTransform(237.8,-32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8DC4D6").s().p("AAsA9QgOANgUAMIgIgNQAXgKAKgMQgSgXgHghIgIAAIAABOIAAAOIgNAAIAAisIBcAAIgCAdQABAagegBIgYAAIgCgIIgBgHIAYABQATABgBgNIABgOIhAAAIAAA2IBQAAIAAALQgJAjgUAWQAPANAbAKIgMANQgXgMgQgOgAAsApQARgVAGgZIgsAAQAHAaAOAUgAhdBNQAOgRgCgpIAAhpIA1AAIAACYQABATgSAAIgSAAIgCgNIAQAAQAJAAAAgIIAAgqIgbAAQABArgRAWIgKgKgAhDALIAbAAIAAgkIgbAAgAhDgmIAbAAIAAgkIgbAAgAACBJIAAAAgAACgFIAIAAQAHAhASAXQgKAMgXAKg");
	this.shape_3.setTransform(218,-31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8DC4D6").s().p("AgHBOIAAibIAQAAIAACbg");
	this.shape_4.setTransform(205.1,-32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8DC4D6").s().p("Ag7BOIAAibIBDAAQAvACAFAsQgBAtg1ABIgvAAIAAA/gAgpAAIAsAAQAlgBABgfQgBgdglgBIgsAAg");
	this.shape_5.setTransform(195.3,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8DC4D6").s().p("AA2BOIgTgwIhGAAIgTAwIgTAAIBAibIARAAIBBCbgAgDgyIgZBCIA5AAIgahCIgDgLIgDALg");
	this.shape_6.setTransform(180.3,-32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8DC4D6").s().p("AglBXIgHgGQAcgUATgZIANAKQgSAWgdAYIgGgFgAhDBcIAAhoQgKAOgLAOQgDgNgDgEQAggrAPgvIAPAFQgJAYgMAWIAACEgAAiAuIALgKQAQAOAaAYIAHAHIgNALQgSgUgdgagAgpAfIAAgOIAfAAIAAgzIgYAAIAAgNIAYAAIAAgrIAOAAIAAArIApAAIAAgrIAQAAIAAArIAaAAIAAANIgaAAIAAAzIAiAAIAAAOgAAEARIApAAIAAgzIgpAAg");
	this.shape_7.setTransform(162.8,-32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8DC4D6").s().p("AgvBTQAbgVACgpIAOABQgBALgCAIQALAbASADIAAg6Ig5AAIAAgMIB+AAIAAAMIg3AAIAAAWIAwAAIAAAMIgwAAIAAAaIAHAAQAMABAWgBIASAAIgFANIg1AAQgkAAgNgcQgHASgQAQIgMgJgAhbBaIgCgQIAPABQAKABgBgIIAAg4IgYAMIgBgQIAZgKIAAgpIgYAAIAAgNIAYAAIAAgjIAOAAIAAAjIAYAAIAAANIgYAAIAAAjIAWgMIABAOIgIAEIgPAHIAABAQABAVgWAAIgPAAgAgTgOIAAhGIBdAAIAABGgAgFgZIBCAAIAAgSIhCAAgAgFg2IBCAAIAAgRIhCAAg");
	this.shape_8.setTransform(143,-32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_9.setTransform(86.1,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8DC4D6").s().p("AgTBWIgWAAQgBgKgCgGIAYABQAPAAAAgOIAAg/IhWAAIAAgNICLAAIAAgUIhzAAIAAgNIBzAAIAAgUIh2AAIAAgNICFAAIAABCIAeAAIAAANIhWAAIAAAGQAKAPALAMIAogbIAKALIgWAOIgSALQASAQAmAJQgFAGgFAIQg2gPgXgmIAAAkQACAcgbAAIgBAAgAhdA5QAggLAwgSIACAOIhNAdgAg/ASIgNgKIAJgKIAIAFIAcASIgJANIgXgQg");
	this.shape_10.setTransform(66.2,-31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DC4D6").s().p("AhLBNQAHgGgBgKIAAhJIgYAAIAAgOIAnAAIAABaQALgGAOgMIABARQgXAOgPAMgAgUA7IAAhLIBVAAIAAgzIhYAAIAAgPIBnAAIAABRIhXAAIAAA5QgBARASgCIAqAAQAVABAAgMQADgJACgVIADACIANADIgGAfQgEAVgcgBIgyAAIgFAAQgYAAADgbgAhNhOIAMgLIAdAgIgMALQgMgPgRgRg");
	this.shape_11.setTransform(46.2,-32.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8DC4D6").s().p("AgIBPIgBgEQAYgPAUgaQgXgigFhDIgHAAIAAgOIBUAAIAAAMQgKBDgXAkQAQAYAbAOIgFAGIgHAHQgZgTgOgTQgRAVgaAUIgIgJgAAsAUQASgiAHg1IgxAAQAEA4AUAfgAgaBYIAAgpIhBAMIgCgPIALgBIAFgBIAAhzIgMAAIAAgOIBXAAIAAAOIgKAAIAABqIATgEIAAANQgIADgLAAIAAArgAg/ApIAlgGIAAgcIglAAgAg/gEIAlAAIAAgdIglAAgAg/gtIAlAAIAAgcIglAAg");
	this.shape_12.setTransform(26.2,-31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DC4D6").s().p("ABLBbIAAgJIhSAAIAAAJIgOAAIAAiPIAvAAIAAgmIAPAAIAAAmIAwAAIAACPgAApBGIAiAAIAAg0IgiAAgAgHBGIAhAAIAAg0IghAAgAApAFIAiAAIAAgtIgiAAgAgHAFIAhAAIAAgtIghAAgAhUBbIgBgNIgBgDQAGABAJAAQAJABgBgJIAAg0IgWAIIgDgPIANgEIAMgDIAAgqIgWAAIAAgMIAWAAIAAglIAOAAIAAAlIAXAAIAAAMIgXAAIAAAmIAVgHIAAAOIgEABIgRAGIAAA4QACAXgXAAIgOAAg");
	this.shape_13.setTransform(5.5,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8DC4D6").s().p("AhDBdIAAhpQgJAPgKAOIgGgOIgBgDQAagnAPg0IAPAEQgHAZgKAVIAACGgAgqBUIAAgNIBFAAQATgyAPg1IAQAFIgUA6IgNAoIAzAAIAAANgAgbgZIAPgFQAMAgAOAxIgPAGQgOgzgMgfgAgmgqIAAgOIA9AAIgKgfIAOgFIAMAgIgPAEIBCAAIAAAOg");
	this.shape_14.setTransform(-68,-32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8DC4D6").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAnAAIgLgMIgKgKIAMgIIAYAYIgKAGIAvAAQAMgOALgQIANAIIgJAKIgJAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_15.setTransform(-88,-32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8DC4D6").s().p("AAdBcIgDgOQAKABATAAQAQAAgBgQIAAiAIhfAAIAAgPIBuAAIAACPQABAegcgBIgKAAIgMABIgHgBgAhUBcIAAiSIAPAAIAACSgAg+BCQApgMAAgeIgYAAIAAg1IAZAAQgHgLgKgMIAKgIIAJAKIAMAOIgJAHIAUAAIAQgXIAEgHIAMAHQgEAHgLANIgBADIAZAAIAAA1IgaAAIAAAYQAAAJAIAAIAIAAQAKAAABgKIAAgOIALADIADACIgCAQQgDAOgQABIgPAAQgTABABgVIAAgZIgOAAQAAAlguAQQgDgGgGgFgAggALIBBAAIAAgcIhBAAgAhJhSIAKgJIAZAaIgLAKIgYgbg");
	this.shape_16.setTransform(-108,-32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8DC4D6").s().p("AgLBJIAIAAIAWAAQATACgCgSIAAh3Ig9AAIAAgOIB3AAIAAAOIgrAAIAAB6QACAcgfAAIgdABIgEgQgAhJBHQAIgFgBgOIAAhAIgcAAIAAgOIArAAIAABRIAjgZIADAQIgmAbIgKAKgAhRhNIALgLIAiAgIgNAMQgOgQgSgRg");
	this.shape_17.setTransform(-128,-32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_18.setTransform(-197.7,-32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8DC4D6").s().p("Ag/BRQAbgcgChFIAAg/ICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgTIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgLQALgpAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAIQgLANgUAZgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgLIAhAaIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_19.setTransform(-217.6,-32.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8DC4D6").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_20.setTransform(-237.7,-32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8DC4D6").s().p("AACBdIAAhcIgqAAIAABOIgOAAIAAhIQgMAPgPAQIgGgGIgFgHQAmgiAVgpIg0AAIAAgOIA7AAIALgcIAPACIgHATIgDAHIBnAAIAAAOIhuAAQgKAUgNASIAqAAIAAgdIAPAAIAAAdIA7AAIAAA+QABAXgZABIgXABIgCgIIgBgGIAIAAIAOAAQAOABgBgNIAAgwIgsAAIAABcg");
	this.shape_21.setTransform(-257.8,-32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8DC4D6").s().p("Ag9BQQA0gNAQgLQgXgVgMggQgRAtgmAlQgFgGgFgGQAvgtAPg+Ig0AAIAAgPQAJgUAFgQIAQAEIgHAQIgHARIAoAAIABgEQADgOAEgaIAQADIgHAiIgBAHIBnAAIAAAOIhqAAIgEAMIgEALIBdAAIAAANQgMAfgbAXQAUANAqAHIgJAOQAAgBAAAAQAAAAgBAAQAAAAAAABQgBAAgBACQgkgKgbgRQgWANgvAPQgEgHgHgGgAATAwQAagVAIgZIhDAAQALAeAWAQgAA3g3QgUgRgKgGIAIgLQAVANAPALIgKANIgEgDg");
	this.shape_22.setTransform(-277.7,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-81.8,582.7,63.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C3D44").ss(2).p("AhMEjICVhlIAAmJIiVhX");
	this.shape.setTransform(228.1,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010103").s().p("AhvDqIBAAAIAAnYIg2AAIAAg0IBBAAICVBXIAAGJIiVBlIhLAAgAgZDvIBYg0IAAl0IhYg1g");
	this.shape_1.setTransform(224.2,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004C69").s().p("AQnjuIBZA0IAAF1IhZA0gAPRDqMghRAAAIAAnYMAhbAAAIA2AAIAAHYg");
	this.shape_2.setTransform(115.3,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-0.9,236.4,60.2), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-168,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-168,-15,336,30), null);


(lib.NoData = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgyBRQAYgcgBhFIAAhBIBuAAIAAAyIhgAAIAAAPIAAAIIAqAAIAAgSIAPAAIAAASIAyAAIAAAMIgyAAIAAAXIAnAAIAABAIgOAAIAAgLIhBAAIAAALIgNAAIAAhAIAmAAIAAgXIgrAAQgCA5gZAfIgJgLgAAEBFIBBAAIAAgeIhBAAgAgNgrIBTAAIAAgaIhTAAgAhMBZIgNAAIgCgPQADABALAAQALABgBgKIAAgxIgYAHIgCgPIAagIIAAgqIgYAAIAAgNIAYAAIAAglIAOAAIAAAlIAVAAIAAANIgVAAIAAAoQAJgFAJgCIABAOIgFABIgOAEIAAA3QABAXgWAAIgCAAg");
	this.shape.setTransform(29.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_1.setTransform(9.9,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhcBIQA/gfANg1IhJAAIAAgOIBMAAQAFgUAAgaIhDAAIAAgNICZAAIAAANIhHAAQgBAagEAUIBaAAIAAAOIhKAAIAAA8QgBAQAQgBIAbAAQAPABABgMIABgJIABgRIAIACIAHADQgBAQgCAKQgBAWgdgCIgeAAQgbABAAgcIAAg+IgDAAQgOA8hEAmQgDgHgHgHg");
	this.shape_2.setTransform(-10.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AA0BdIAAgIIhmAAIAAAIIgNAAIAAhOICBAAIAABOgAgyBKIBmAAIAAgSIhmAAgAgyAtIBmAAIAAgSIhmAAgAgGADQASgTgCglIAAgXQAiAAApgGIAEAMQgjAEgfABIAAANIAAALIBGAAIAAAMIgbAAIAAAnIgOAAIAAgnIgeAAQgCAVgQAVIgKgKgAgsALIAAgOIgnADIgHAAIgCgMIAwgCIAAgPIgnAAIAAgMQAEgFAJgQIgUAAIAAgLIAaAAIAKgUIANAFQgDAHgFAIIAxAAIAAALIg3AAIgOAVIAZAAIAAgOIAMAAIAAAOIAfAAIAAAMIgfAAIAAAOIAPgBIAPAAIgBALIgOABIgPAAIAAAPg");
	this.shape_3.setTransform(-30.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NoData, new cjs.Rectangle(-42.1,-13.4,84.2,26.9), null);


(lib.names = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text0 = new cjs.Text("公安厅", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text0.name = "text0";
	this.text0.textAlign = "center";
	this.text0.lineHeight = 23;
	this.text0.lineWidth = 168;
	this.text0.parent = this;
	this.text0.setTransform(55.6,-129.8);

	this.text6 = new cjs.Text("环保厅", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text6.name = "text6";
	this.text6.textAlign = "center";
	this.text6.lineHeight = 23;
	this.text6.lineWidth = 166;
	this.text6.parent = this;
	this.text6.setTransform(55.6,109.2,1.01,1);

	this.text5 = new cjs.Text("环保厅", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text5.name = "text5";
	this.text5.textAlign = "center";
	this.text5.lineHeight = 23;
	this.text5.lineWidth = 165;
	this.text5.parent = this;
	this.text5.setTransform(55.6,69.2,1.015,1);

	this.text4 = new cjs.Text("财政厅", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 23;
	this.text4.lineWidth = 166;
	this.text4.parent = this;
	this.text4.setTransform(55.6,29.4,1.01,1);

	this.text3 = new cjs.Text("发改委", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 23;
	this.text3.lineWidth = 165;
	this.text3.parent = this;
	this.text3.setTransform(55.6,-10.4,1.02,1);

	this.text2 = new cjs.Text("发改委", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 23;
	this.text2.lineWidth = 163;
	this.text2.parent = this;
	this.text2.setTransform(55.6,-50.2,1.03,1);

	this.text1 = new cjs.Text("公安厅", "18px 'FZLanTingHeiS-B-GB'", "#97E5FF");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 23;
	this.text1.lineWidth = 165;
	this.text1.parent = this;
	this.text1.setTransform(55.6,-88.9,1.015,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4},{t:this.text5},{t:this.text6},{t:this.text0}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.names, new cjs.Rectangle(-30.3,-131.8,171.9,263.6), null);


(lib.nameBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#012A51").s("#E0E8EC").ss(1,1,1).rr(-34.2,-15.55,68.4,31.1,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-16.5,70.4,33.1);


(lib.frame_r3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBZIAAhuIgiAAIAABVQACAcgVgDIgPAAIAAgUIAEAAQADACAAgGIAAiSIBHAAQAGABAAgFIAAgDIAaAAIAAAKQADAXgWgEIg5AAIAAAQIBMAAIAAAWIgPAAIAABugAg3BZIAAhoIgDAAIgBBJQAAAZgWgCIgIAAIAAgWQAHACgBgGIADhgIAZAAIAAgHIghAAIAAgVIAhAAIAAgTIAbAAIAAATIAKAAIAAAVIgKAAIAAAIIAHAAIAAAZIgHAAIAABog");
	this.shape.setTransform(-19,-109.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BZIhCAAIAAgXIA1AAQAIABgBgIIAAgxIhGAAIgRA8QgFATgSAAIgcAAIAAgXIAPAAQAFgBAEgHIALgwIgjAAIAAgYICpAAIAABPQABAZgXAAIgDgBgAhIgUIgPAAIAAgaIAFAAQAJABAEgSIAHgaIAgAAIgLAkQgGAigTAAIgGgBgAAwghIgJgfIg6AAIAAgZIBTAAIAHAeQACAOAJgCIAGAAIAAAZIgUAAIgEABQgOAAgCgMg");
	this.shape_1.setTransform(-38.7,-109.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBYIAAgQIBIAAIAAgEIhFAAIAAgPIBFAAIAAgHIhFAAIAAg2ICrAAIAAAmQAAARgRgBIg3AAIAAAHIBHAAIAAAPIhHAAIAAAEIBLAAIAAAQgAAOAfIAlAAQAFABAAgHIAAgCIgqAAgAg3AfIAnAAIAAgIIgnAAgAAOALIAqAAIAAgHIgqAAgAg3ALIAnAAIAAgHIgnAAgAhYgOIAAgOICxAAIAAAOgABDgiIiXAAIAAg1ICqAAIAAAiQABAUgQAAIgEgBgAg1gvIBpAAQAEABAAgFIAAgDIhtAAgAg2hDIBuAAIAAgGIhuAAg");
	this.shape_2.setTransform(-58.7,-109.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBHIAAg1IAZAAIAAAsQgBAGAFAAIA5AAIAAAVIhHAAIgDAAQgOAAACgSgAA4BHIgGg0IAZAAIAGAtQgBAEAFAAIADAAIAAAUIgQAAIgDAAQgNAAAAgRgAhFBXIgSAAIAAgTIAGAAQADAAAAgFIAFgsIAZAAIgGA0QgBAQgMAAIgCAAgAAAAoIAAgUIAWAAIAAAMQgBAEAFAAIAKAAIAAATIgXAAIgDAAQgLAAABgPgABGAKIiZAAIAAhVIAPAAIgDgNIAfAAIACANIBSAAIAEgNIAbAAIgDANIAOAAIAABDQACASgPAAIgDAAgAg2gNIBsAAQAEAAAAgGIAAggIhwAAg");
	this.shape_3.setTransform(-78.9,-109.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBZIAAgVIAYAAQAGAAAAgHIAAgYIhQAAIgKAnQgDANgLAAIgqAAIAAgWIAZAAQAEABADgHIAFgYIglAAIAAgYIArAAIADgMIguAAIAAgUIApAAIAIgBIAHgEIgjgVIAwAAIALAHIAjgSIhDAAQgFAIgKgBIghAAIAAgVIARAAQAEAAAEgFIAGgNIAdAAIgDAHIB1AAIAAATIhCAmIAFADQAEADALgBIAvAAIAAAVIg6AAQgOACgIgHIgNgHIgJAHQgGADgJAAIARAAIgEANIBnAAIAAA+QAAAOgLAAg");
	this.shape_4.setTransform(-98.8,-109.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABJBYQgFABgEgIIgIgKIgGAKQgDAHgIAAIgLAAIAAgUQAEABABgDIAIgPIgOgZIAbAAIAHgLIgmAAIAABJIgXAAIAAivIBWAAIgFA5QgCASgOgBIgiAAIAAgXIAWAAQADABABgGIACgYIgkAAIAAA8IBAAAIAAAWIgQAfIALASQACACAGAAIAAAUgAgxBXIAAgVIANAAQAFABgBgGIAAgYIgXAAIAAAYQgCAZgXABIgIAAIAAgSIABAAQAHADAAgPIAAiRIBJAAIAACdQAAARgUABgAg2APIAWAAIAAgeIgWAAgAg2gkIAWAAIAAgdIgWAAg");
	this.shape_5.setTransform(-118.9,-109.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_6.setTransform(-139,-109.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXBZIAAgVIAdAAQAGACAHgFIAggNIAAgUIAbAAIAAASIAiAPQAGADAFAAIAeAAIAAAUIgpAAQgLAAgGgDIgfgOIgfAOQgKAEgHAAgAA8A3IAAgdIh2AAIAAAdIgcAAIAAgzICtAAIAAAzgAApgMIgJgWIgJAVQgDALgKgCIgmAAIAAgUIAYAAQAEAAABgEIAMgbIAbAAIgDAJIAQAAIAIASQABAEAGAAIATAAIAAAVIghAAIgCAAQgHAAgEgJgAhCgEIgWAAIAAgUIAOAAQAFACABgFIAFgOIAZAAIgLAbQgCAKgLAAIgEAAgABDgrIAAgSIg9AAIgCAEQgBAFgGgBIgYAAIAAgUIAIAAQAFABAAgFIADgLIAZAAIgBAGIBLAAIAAAngAhOg+IgKgaIAbAAIADAKQACAGAGgBIAPAAIAAAVIgcAAIgCAAQgLAAgCgKg");
	this.shape_7.setTransform(-159.3,-109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_8.setTransform(-171.7,-108.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BCIAAiDIA8AAQAPAAANAIQARAMAAAWQAAAWgRAKQgNAIgPAAIgqAAIAAAxgAgigBIAqAAQAKAAAHgEQAKgHAAgLQAAgMgKgGQgHgFgKAAIgqAAg");
	this.shape_9.setTransform(-180.3,-108.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzBCIgOggIhKAAIgNAgIgUAAIA3iDIANAAQAKAAAFAFQAFAEAEALIAxBvgAgeAQIA7AAIgZg5QgDgGgDAAIgBAAg");
	this.shape_10.setTransform(-193.8,-108.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_11.setTransform(-211.6,-109.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgWICuAAIAAAWIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBMAAIAAAXgAA4gxIgLgSIhVAAIgMASQgDAFgLAAIgVAAIAAgXIAJAAQAGAAAEgFIALgRIB4AAIAKASQAFAHAHgCIAGAAIAAAXIgTAAIgEAAQgKAAgCgGg");
	this.shape_12.setTransform(-231.4,-109.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00405B").ss(1,1,1).p("EglVAAAIQTAAMA6YAAA");
	this.shape_13.setTransform(-29,-94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00B4E8").ss(1,1,1).p("A1C3RIAVAAMA4oAAAQBbAAAABbIAADXMAAAApxMg5wAAAIvgAAQhbAAAAhbMAAAgoWIAAkyg");
	this.shape_14.setTransform(-29,24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.267)").s().p("A1BCZIwUAAIAAkxIQUAAIAUAAMA4oAAAQBbAAAABbIAADWg");
	this.shape_15.setTransform(-29,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-126,480,300);


(lib.cornor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-6.5,21,13);


(lib.Bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_1 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_2 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_3 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_4 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_5 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_6 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_7 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_8 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_9 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_10 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_11 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_12 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_13 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_14 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_15 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_16 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_17 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_18 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_19 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_20 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_21 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_22 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_23 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_graphics_24 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:20.2,y:-117.3}).wait(1).to({graphics:mask_graphics_1,x:20.2,y:-115.4}).wait(1).to({graphics:mask_graphics_2,x:20.2,y:-113.5}).wait(1).to({graphics:mask_graphics_3,x:20.2,y:-111.6}).wait(1).to({graphics:mask_graphics_4,x:20.2,y:-109.7}).wait(1).to({graphics:mask_graphics_5,x:20.2,y:-107.8}).wait(1).to({graphics:mask_graphics_6,x:20.2,y:-105.9}).wait(1).to({graphics:mask_graphics_7,x:20.2,y:-104}).wait(1).to({graphics:mask_graphics_8,x:20.2,y:-102.1}).wait(1).to({graphics:mask_graphics_9,x:20.2,y:-100.2}).wait(1).to({graphics:mask_graphics_10,x:20.2,y:-98.3}).wait(1).to({graphics:mask_graphics_11,x:20.2,y:-96.4}).wait(1).to({graphics:mask_graphics_12,x:20.2,y:-94.5}).wait(1).to({graphics:mask_graphics_13,x:20.2,y:-92.6}).wait(1).to({graphics:mask_graphics_14,x:20.2,y:-90.7}).wait(1).to({graphics:mask_graphics_15,x:20.2,y:-88.8}).wait(1).to({graphics:mask_graphics_16,x:20.2,y:-86.9}).wait(1).to({graphics:mask_graphics_17,x:20.2,y:-85}).wait(1).to({graphics:mask_graphics_18,x:20.2,y:-83.1}).wait(1).to({graphics:mask_graphics_19,x:20.2,y:-81.3}).wait(1).to({graphics:mask_graphics_20,x:20.2,y:-79.4}).wait(1).to({graphics:mask_graphics_21,x:20.2,y:-77.5}).wait(1).to({graphics:mask_graphics_22,x:20.2,y:-75.6}).wait(1).to({graphics:mask_graphics_23,x:20.2,y:-73.7}).wait(1).to({graphics:mask_graphics_24,x:20.2,y:-71.8}).wait(1));

	// Layer 5
	this.text4 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 36;
	this.text4.lineWidth = 169;
	this.text4.parent = this;
	this.text4.setTransform(208.5,-79.8);

	this.text3 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 36;
	this.text3.lineWidth = 128;
	this.text3.parent = this;
	this.text3.setTransform(45,-79.8);

	this.text2 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 36;
	this.text2.lineWidth = 132;
	this.text2.parent = this;
	this.text2.setTransform(-97.9,-79.8);

	this.text1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 36;
	this.text1.lineWidth = 113;
	this.text1.parent = this;
	this.text1.setTransform(-238.4,-79.8);

	var maskedShapeInstanceList = [this.text4,this.text3,this.text2,this.text1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1},{t:this.text2},{t:this.text3},{t:this.text4}]}).wait(25));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Egz5AEZIAAoxMBnzAAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:20.2,y:-58}).wait(1).to({graphics:mask_1_graphics_1,x:20.2,y:-56.2}).wait(1).to({graphics:mask_1_graphics_2,x:20.2,y:-54.3}).wait(1).to({graphics:mask_1_graphics_3,x:20.2,y:-52.4}).wait(1).to({graphics:mask_1_graphics_4,x:20.2,y:-50.6}).wait(1).to({graphics:mask_1_graphics_5,x:20.2,y:-48.7}).wait(1).to({graphics:mask_1_graphics_6,x:20.2,y:-46.9}).wait(1).to({graphics:mask_1_graphics_7,x:20.2,y:-45}).wait(1).to({graphics:mask_1_graphics_8,x:20.2,y:-43.2}).wait(1).to({graphics:mask_1_graphics_9,x:20.2,y:-41.3}).wait(1).to({graphics:mask_1_graphics_10,x:20.2,y:-39.4}).wait(1).to({graphics:mask_1_graphics_11,x:20.2,y:-37.6}).wait(1).to({graphics:mask_1_graphics_12,x:20.2,y:-35.7}).wait(1).to({graphics:mask_1_graphics_13,x:20.2,y:-33.9}).wait(1).to({graphics:mask_1_graphics_14,x:20.2,y:-32}).wait(1).to({graphics:mask_1_graphics_15,x:20.2,y:-30.1}).wait(1).to({graphics:mask_1_graphics_16,x:20.2,y:-28.3}).wait(1).to({graphics:mask_1_graphics_17,x:20.2,y:-26.4}).wait(1).to({graphics:mask_1_graphics_18,x:20.2,y:-24.6}).wait(1).to({graphics:mask_1_graphics_19,x:20.2,y:-22.7}).wait(1).to({graphics:mask_1_graphics_20,x:20.2,y:-20.9}).wait(1).to({graphics:mask_1_graphics_21,x:20.2,y:-19}).wait(1).to({graphics:mask_1_graphics_22,x:20.2,y:-17.1}).wait(1).to({graphics:mask_1_graphics_23,x:20.2,y:-15.3}).wait(1).to({graphics:mask_1_graphics_24,x:20.2,y:-13.4}).wait(1));

	// Layer 4
	this.text4_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text4_1.name = "text4_1";
	this.text4_1.textAlign = "center";
	this.text4_1.lineHeight = 36;
	this.text4_1.parent = this;
	this.text4_1.setTransform(208.5,-79.8);

	this.text3_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text3_1.name = "text3_1";
	this.text3_1.textAlign = "center";
	this.text3_1.lineHeight = 36;
	this.text3_1.parent = this;
	this.text3_1.setTransform(45,-79.8);

	this.text2_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text2_1.name = "text2_1";
	this.text2_1.textAlign = "center";
	this.text2_1.lineHeight = 36;
	this.text2_1.parent = this;
	this.text2_1.setTransform(-97.9,-79.8);

	this.text1_1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#0CF0FF");
	this.text1_1.name = "text1_1";
	this.text1_1.textAlign = "center";
	this.text1_1.lineHeight = 36;
	this.text1_1.parent = this;
	this.text1_1.setTransform(-238.4,-79.8);

	var maskedShapeInstanceList = [this.text4_1,this.text3_1,this.text2_1,this.text1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1_1},{t:this.text2_1},{t:this.text3_1},{t:this.text4_1}]}).wait(25));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape.setTransform(277.9,-32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DC4D6").s().p("Ag4BPQA/ggAGhDIAAgQIAPAAIAAAIIAAAKQAMBAA2AdIgMAPQgygjgLgvQgIAzg7AiIgKgOgAheA/QATgdAVgtIAPAKQgNAWgaAzgAA0gLQAIgOAIgVIhJAAIgOAbIgEAKQgFgEgKgFQAWgiAMgoIAOAEQgFAPgFAOIBVAAIAAANQgKAagIAOQgFgDgKgCgAhXhJIALgJIAiAqIgNALQgSgagOgSg");
	this.shape_1.setTransform(257.9,-32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DC4D6").s().p("AhZBSQA3gRAJgjIg1AAIAAgOIA4AAIAAgBQABgJAAgJIAQAAIgCATIBKAAIgBAZIgBANQABAmgmgCIgcAAIgBgGIgCgKIAPABIAQAAQAWADABgYIABgNIAAgLIg+AAQgJAsg9AUIgJgMgAhfgEQAvgGAkgOQgUgNgOgSQgTAVgOALIgKgKQAggZAWgkIAOAHIgGAIIgEAFIBkAAIAAAOQgWAWgbAOQAhANArACIgLAOQgxgFghgPQgjAOg3AKQgDgHgFgGgAADgfQAagMATgRIhTAAQAQARAWAMg");
	this.shape_2.setTransform(237.8,-32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8DC4D6").s().p("AAsA9QgOANgUAMIgIgNQAXgKAKgMQgSgXgHghIgIAAIAABOIAAAOIgNAAIAAisIBcAAIgCAdQABAagegBIgYAAIgCgIIgBgHIAYABQATABgBgNIABgOIhAAAIAAA2IBQAAIAAALQgJAjgUAWQAPANAbAKIgMANQgXgMgQgOgAAsApQARgVAGgZIgsAAQAHAaAOAUgAhdBNQAOgRgCgpIAAhpIA1AAIAACYQABATgSAAIgSAAIgCgNIAQAAQAJAAAAgIIAAgqIgbAAQABArgRAWIgKgKgAhDALIAbAAIAAgkIgbAAgAhDgmIAbAAIAAgkIgbAAgAACBJIAAAAgAACgFIAIAAQAHAhASAXQgKAMgXAKg");
	this.shape_3.setTransform(218,-31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8DC4D6").s().p("AgHBOIAAibIAQAAIAACbg");
	this.shape_4.setTransform(205.1,-32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8DC4D6").s().p("Ag7BOIAAibIBDAAQAvACAFAsQgBAtg1ABIgvAAIAAA/gAgpAAIAsAAQAlgBABgfQgBgdglgBIgsAAg");
	this.shape_5.setTransform(195.3,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8DC4D6").s().p("AA2BOIgTgwIhGAAIgTAwIgTAAIBAibIARAAIBBCbgAgDgyIgZBCIA5AAIgahCIgDgLIgDALg");
	this.shape_6.setTransform(180.3,-32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8DC4D6").s().p("AhNBWIgKgLQAOgQADgUQAEgUAAgtIAAg9ICZAAIAACTQACAYgdAAIgXABIAAgDIgDgOIALAAIAOABQAPABgBgNIAAghIg4AAIAAA7IgPAAIAAg7Ig2AAQgDAmgUAaIgCgCgAARALIA4AAIAAgjIg4AAgAg0ALIA2AAIAAgjIg1AAIgBAjgAARgmIA4AAIAAgjIg4AAgAgzgmIA1AAIAAgjIg1AAg");
	this.shape_7.setTransform(162.4,-31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8DC4D6").s().p("AguBVIgFgFQAbgZgDg1IAAhUIB0AAIAACUQAAAXgVgBIgYAAIgFAAIgCgPIAbABQANACgCgNIAAiEIhYAAIAABFQAAAjgGASQgFASgSAUIgEgGgAhKA0QAHgHAAgJIAAg4IgVAAIAAgNIAiAAIAABHQALgLAIgHIACAQQgUAQgMANgAAAA7IAAgyIA6AAIAAAygAAOAvIAfAAIAAgaIgfAAgAgHgEIAAgNIAfAAIAAgRIgaAAIAAgNIAaAAIAAgSIANAAIAAASIAbAAIAAANIgbAAIAAARIAgAAIAAANgAg3g4IgVgZIALgJIAPAQIANAOIgMAKIgGgGg");
	this.shape_8.setTransform(142.5,-32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_9.setTransform(95.3,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8DC4D6").s().p("AgnBOIAAgCIAJAAIANAAQAOABgBgMIAAgjIhHAAIAAgNIBHAAIAAgSIAOAAIAAASIBBAAIAAANIhBAAIAAAlQABAZgYgBIgXAAIgDgNgAhYBKQAegQAXgSIAKAKQgaATgbAQIgKgLgAAcAyIAIgKIA3AfIgJANQgZgRgdgRgAhdAAQAzgJAfgNQgRgKgQgRQgNAPgQANIgGgFIgFgFQAfgYAVgjIAQADIgIALIgCAEIBbAAIAAAOQgUATgbARQAbAMAxAFIgBABIgHAMQg3gIgcgOQgjAQg2ALIgHgNgAADgdQAZgOASgQIhRAAQATAUATAKg");
	this.shape_10.setTransform(75.2,-32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DC4D6").s().p("AgTBWIgWAAQAAgKgDgGIAYABQAPAAgBgOIAAg/IhVAAIAAgNICLAAIAAgUIh0AAIAAgNIB0AAIAAgUIh3AAIAAgNICGAAIAABCIAdAAIAAANIhUAAIAAAGQAIAPALAMIAqgbIAKALIgXAOIgSALQASAQAmAJQgGAGgEAIQg2gPgWgmIAAAkQABAcgbAAIgBAAgAhdA5QAggLAvgSIAEAOIhOAdgAg/ASIgNgKIAIgKIAJAFIAcASIgJANIgXgQg");
	this.shape_11.setTransform(55.3,-31.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8DC4D6").s().p("AhMBNQAIgGgBgKIAAhJIgYAAIAAgOIAnAAIAABaQALgGAOgMIAAARQgWAOgQAMgAgVA7IAAhLIBWAAIAAgzIhYAAIAAgPIBnAAIAABRIhWAAIAAA5QgCARATgCIApAAQAWABAAgMQACgJABgVIAFACIAMADIgFAfQgFAVgcgBIgyAAIgFAAQgYAAACgbgAhNhOIAMgLIAeAgIgOALQgLgPgRgRg");
	this.shape_12.setTransform(35.3,-32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DC4D6").s().p("AgHBPIgDgEQAZgPATgaQgWgigGhDIgFAAIAAgOIBTAAIAAAMQgKBDgXAkQAQAYAbAOIgGAGIgFAHQgagTgPgTQgQAVgbAUIgGgJgAArAUQATgiAHg1IgxAAQAFA4ASAfgAgaBYIAAgpIhCAMIgBgPIAKgBIAGgBIAAhzIgNAAIAAgOIBYAAIAAAOIgKAAIAABqIASgEIAAANQgHADgLAAIAAArgAg/ApIAlgGIAAgcIglAAgAg/gEIAlAAIAAgdIglAAgAg/gtIAlAAIAAgcIglAAg");
	this.shape_13.setTransform(15.3,-31.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8DC4D6").s().p("AgdBRQAvgZAFgxIgsAAIAAgNIAtAAIAAgiIAPAAIAAANIgBAVIA2AAIAAANIg1AAQAMA2AsASIgMANQgpgYgKgoQgIAmgsAbIgJgMgAhNBYIgBgJIgCgGIAVABQASABAAgVQABgNgEgPQgMATgbATIgKgMQAbgOASgbQgDgHgDgGQgSANgNAHIgIgLQASgJAOgLQgJgMgLgMIAJgIIAUAXQALgJAKgMIAMAIIgZAZQARAcAAAlQABAhghAAgAAxgfIAIgKIAbASIgHALIgcgTgAAcgtIAAgNIg0AAIAAANIgNAAIAAgNIg1AAIAAgOIA1AAIAAgUIANAAIAAAUIA0AAIAAgUIAOAAIAAAUIA1AAIAAAOIg1AAIAAANg");
	this.shape_14.setTransform(-4.9,-32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8DC4D6").s().p("AhEBdIAAhpQgIAPgKAOIgGgOIgCgDQAbgnAPg0IAPAEQgIAZgIAVIAACGgAgqBUIAAgNIBGAAQASgyAPg1IAQAFIgUA6IgNAoIAyAAIAAANgAgagZIAOgFQAMAgAOAxIgPAGQgOgzgLgfgAgmgqIAAgOIA8AAQgBgJgJgWIAQgFIALAgIgPAEIBDAAIAAAOg");
	this.shape_15.setTransform(-45.3,-32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8DC4D6").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAoAAIgMgMIgKgKIANgIIAWAYIgKAGIAwAAQAMgOALgQIANAIIgJAKIgJAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_16.setTransform(-65.3,-32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8DC4D6").s().p("AglBXIgHgGQAcgUASgZIAOAKQgSAWgdAYIgGgFgAhEBcIAAhoQgJAOgLAOIgGgRQAggrAPgvIAOAFQgIAYgMAWIAACEgAAiAuIALgKQAPAOAbAYIAHAHIgNALQgTgUgcgagAgqAfIAAgOIAhAAIAAgzIgZAAIAAgNIAZAAIAAgrIANAAIAAArIApAAIAAgrIAQAAIAAArIAbAAIAAANIgbAAIAAAzIAiAAIAAAOgAAEARIApAAIAAgzIgpAAg");
	this.shape_17.setTransform(-85.4,-32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8DC4D6").s().p("AgvBTQAbgVACgpIAOABQgBALgCAIQALAbASADIAAg6Ig6AAIAAgMICAAAIAAAMIg4AAIAAAWIAwAAIAAAMIgwAAIAAAaIAGAAQANABAWgBIASAAIgFANIg1AAQgkAAgNgcQgHASgRAQIgLgJgAhcBaIgBgQIAQABQAJABgBgIIAAg4IgYAMIgBgQIAZgKIAAgpIgYAAIAAgNIAYAAIAAgjIAOAAIAAAjIAYAAIAAANIgYAAIAAAjIAWgMIACAOIgJAEIgPAHIAABAQACAVgXAAIgQAAgAgTgOIAAhGIBeAAIAABGgAgFgZIBCAAIAAgSIhCAAgAgFg2IBCAAIAAgRIhCAAg");
	this.shape_18.setTransform(-105.3,-32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8DC4D6").s().p("Ag/BRQAbgcgChFIAAg/ICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgTIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgLQALgpAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAIQgLANgUAZgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgLIAhAaIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_19.setTransform(-125.2,-32.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8DC4D6").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_20.setTransform(-145.4,-32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_21.setTransform(-197.7,-32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8DC4D6").s().p("Ag/BRQAbgcgChFIAAg/ICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgTIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgLQALgpAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAIQgLANgUAZgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgLIAhAaIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_22.setTransform(-217.6,-32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8DC4D6").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_23.setTransform(-237.7,-32.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8DC4D6").s().p("AAdBcIgDgOQAKABATAAQAQAAgBgQIAAiAIhfAAIAAgPIBuAAIAACPQABAegcgBIgKAAIgMABIgHgBgAhUBcIAAiSIAPAAIAACSgAg+BCQApgMAAgeIgYAAIAAg1IAZAAQgHgLgKgMIAKgIIAJAKIAMAOIgJAHIAUAAIAQgXIAEgHIAMAHQgEAHgLANIgBADIAZAAIAAA1IgaAAIAAAYQAAAJAIAAIAIAAQAKAAABgKIAAgOIALADIADACIgCAQQgDAOgQABIgPAAQgTABABgVIAAgZIgOAAQAAAlguAQQgDgGgGgFgAggALIBBAAIAAgcIhBAAgAhJhSIAKgJIAZAaIgLAKIgYgbg");
	this.shape_24.setTransform(-257.7,-32.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8DC4D6").s().p("AgKBJIAHAAIAWAAQATACgCgSIAAh3Ig+AAIAAgOIB4AAIAAAOIgqAAIAAB6QABAcgfAAIgeABIgCgQgAhJBHQAIgFgBgOIAAhAIgcAAIAAgOIArAAIAABRIAjgZIADAQIgmAbIgLAKgAhRhNIALgLIAiAgIgNAMQgNgQgTgRg");
	this.shape_25.setTransform(-277.7,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-81.8,582.7,63.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var names = [];
		var that = this;
		window.freshBottomLeft = function(p){
			names = p||[];
			if(names.length!=0){
				that.nodata_lb.visible = false;
			}
		}
		var current = -1;
		function getSpeed(){
			return Math.random()*-4-0.5;
		}
		for(var i=1;i<=9;i++){
			var text = this['text'+i];
			text.text='';
			text.speed = getSpeed();
			this['shadow'+i].toAlpha = 1;
			this['shadow'+i].visible = false;
		}
		
		function setCurrent(i,text){
			current = i;
			text.text = names[current];
		}
		for(var i=1;i<=Math.min(names.length,9);i++){
			setCurrent(i,this['text'+i])
		}
		this.addEventListener('tick',function(e){
			for(var i=1;i<=9;i++){
				var text = that['text'+i];
				var shadow = that['shadow'+i];
				text.x += text.speed;
				shadow.x = text.x;
				shadow.visible = text.text && text.text!="";
				shadow.alpha += (shadow.toAlpha-shadow
				.alpha)*0.05;
				var bounds = text.getBounds()||{width:0};
				if(text.x+bounds.width<-216){
					text.x = 220;
					text.speed = getSpeed();
					setCurrent((current+1)%names.length,text)
					shadow.alpha = 0;
				}
			}
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.nodata_lb = new lib.NoData();
	this.nodata_lb.parent = this;
	this.nodata_lb.setTransform(-5.9,6.7);

	this.timeline.addTween(cjs.Tween.get(this.nodata_lb).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/uUoMAAAgpOMA/dAAAMAAAApOg");
	mask.setTransform(-0.4,-1.6);

	// Symbol 10
	this.text9 = new cjs.Text("gg", "18px 'FZLanTingHeiS-B-GB'", "#76E8FD");
	this.text9.name = "text9";
	this.text9.textAlign = "center";
	this.text9.lineHeight = 23;
	this.text9.lineWidth = 120;
	this.text9.parent = this;
	this.text9.setTransform(-54.4,106);

	var maskedShapeInstanceList = [this.text9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text9).wait(1));

	// Symbol 9
	this.text3 = new cjs.Text("t8", "18px 'FZLanTingHeiS-B-GB'", "#00A6B0");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 23;
	this.text3.lineWidth = 120;
	this.text3.parent = this;
	this.text3.setTransform(80.4,64.1);

	var maskedShapeInstanceList = [this.text3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(1));

	// Symbol 8
	this.text7 = new cjs.Text("", "18px 'FZLanTingHeiS-B-GB'", "#7BA8B2");
	this.text7.name = "text7";
	this.text7.textAlign = "center";
	this.text7.lineHeight = 23;
	this.text7.lineWidth = 120;
	this.text7.parent = this;
	this.text7.setTransform(-82.9,38.8);

	var maskedShapeInstanceList = [this.text7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text7).wait(1));

	// Symbol 7
	this.text6 = new cjs.Text("hh", "18px 'FZLanTingHeiS-B-GB'", "#D89300");
	this.text6.name = "text6";
	this.text6.textAlign = "center";
	this.text6.lineHeight = 23;
	this.text6.lineWidth = 120;
	this.text6.parent = this;
	this.text6.setTransform(131.2,-5.9);

	var maskedShapeInstanceList = [this.text6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text6).wait(1));

	// Symbol 6
	this.text5 = new cjs.Text("", "18px 'FZLanTingHeiS-B-GB'", "#DAA548");
	this.text5.name = "text5";
	this.text5.textAlign = "center";
	this.text5.lineHeight = 23;
	this.text5.lineWidth = 120;
	this.text5.parent = this;
	this.text5.setTransform(-124.7,-4.8);

	var maskedShapeInstanceList = [this.text5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text5).wait(1));

	// Symbol 5
	this.text1 = new cjs.Text("资源", "25px 'FZLanTingHeiS-B-GB'", "#FEE300");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 31;
	this.text1.lineWidth = 146;
	this.text1.parent = this;
	this.text1.setTransform(-15.5,-38.5);

	var maskedShapeInstanceList = [this.text1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1));

	// Symbol 4
	this.text8 = new cjs.Text("tt", "18px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text8.name = "text8";
	this.text8.textAlign = "center";
	this.text8.lineHeight = 23;
	this.text8.lineWidth = 120;
	this.text8.parent = this;
	this.text8.setTransform(138.4,-74.1);

	var maskedShapeInstanceList = [this.text8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text8).wait(1));

	// Symbol 3
	this.text2 = new cjs.Text("aa", "23px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 28;
	this.text2.lineWidth = 120;
	this.text2.parent = this;
	this.text2.setTransform(-93.7,-94.9);

	var maskedShapeInstanceList = [this.text2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// Symbol 1
	this.text4 = new cjs.Text("1", "18px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 23;
	this.text4.lineWidth = 164;
	this.text4.parent = this;
	this.text4.setTransform(42.5,-131.5);

	var maskedShapeInstanceList = [this.text4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text4).wait(1));

	// Layer 3
	this.shadow4 = new lib.shadow_1();
	this.shadow4.parent = this;
	this.shadow4.setTransform(42.5,-119.9,0.593,0.897,0,0,0,-0.1,0.1);
	this.shadow4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 237, 217, 0)];
	this.shadow4.cache(-170,-17,340,34);

	this.shadow2 = new lib.shadow_1();
	this.shadow2.parent = this;
	this.shadow2.setTransform(-93.8,-81.7,0.469,1.01,0,0,0,-0.1,0.1);
	this.shadow2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 237, 217, 0)];
	this.shadow2.cache(-170,-17,340,34);

	this.shadow8 = new lib.shadow_1();
	this.shadow8.parent = this;
	this.shadow8.setTransform(138.3,-62.6,0.469,0.897,0,0,0,-0.1,0.1);
	this.shadow8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 237, 217, 0)];
	this.shadow8.cache(-170,-17,340,34);

	this.shadow9 = new lib.shadow_1();
	this.shadow9.parent = this;
	this.shadow9.setTransform(-54.5,117.7,0.478,0.898,0,0,0,-0.2,0.3);
	this.shadow9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.shadow9.cache(-170,-17,340,34);

	this.shadow3 = new lib.shadow_1();
	this.shadow3.parent = this;
	this.shadow3.setTransform(80.4,75.7,0.601,0.898,0,0,0,-0.1,0.3);
	this.shadow3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.shadow3.cache(-170,-17,340,34);

	this.shadow7 = new lib.shadow_1();
	this.shadow7.parent = this;
	this.shadow7.setTransform(-82.9,50.3,0.601,0.897,0,0,0,-0.1,0.1);
	this.shadow7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 122, 161, 137, 0)];
	this.shadow7.cache(-170,-17,340,34);

	this.shadow6 = new lib.shadow_1();
	this.shadow6.parent = this;
	this.shadow6.setTransform(131.2,5.6,0.601,0.897,0,0,0,-0.1,0.1);
	this.shadow6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 171, 134, 38, 0)];
	this.shadow6.cache(-170,-17,340,34);

	this.shadow1 = new lib.shadow_1();
	this.shadow1.parent = this;
	this.shadow1.setTransform(-15.2,-23.2,0.663,1.156,0,0,0,-0.1,0);

	this.shadow5 = new lib.shadow_1();
	this.shadow5.parent = this;
	this.shadow5.setTransform(-124.8,6.7,0.601,0.897,0,0,0,-0.1,0.1);
	this.shadow5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 171, 134, 38, 0)];
	this.shadow5.cache(-170,-17,340,34);

	var maskedShapeInstanceList = [this.shadow4,this.shadow2,this.shadow8,this.shadow9,this.shadow3,this.shadow7,this.shadow6,this.shadow1,this.shadow5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadow5},{t:this.shadow1},{t:this.shadow6},{t:this.shadow7},{t:this.shadow3},{t:this.shadow9},{t:this.shadow8},{t:this.shadow2},{t:this.shadow4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-203.5,-133.6,406.3,263.9), null);


(lib.NodeSmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.nameTx = new cjs.Text("交通厅", "20px 'FZLanTingHeiS-B-GB'", "#FFFFFF");
	this.nameTx.name = "nameTx";
	this.nameTx.textAlign = "center";
	this.nameTx.lineHeight = 25;
	this.nameTx.parent = this;
	this.nameTx.setTransform(0.7,12.8);

	this.bg = new lib.nameBg();
	this.bg.parent = this;
	this.bg.setTransform(-0.1,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.nameTx}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NodeSmall, new cjs.Rectangle(-34.8,7.5,69.4,32.1), null);


(lib.GlowLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.initialize!=true){
			this.initialize = true;
			this.gotoAndPlay(Math.round(Math.random()*this.totalFrames));
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am3EjIjckzIDTkhINHAAIENEhIjqFBg");
	mask.setTransform(0,1.7);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-110,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0.1,x:-109.6,y:0.1},0).wait(1).to({x:-108.5},0).wait(1).to({x:-106.7},0).wait(1).to({x:-104.4},0).wait(1).to({x:-101.6},0).wait(1).to({x:-98.3},0).wait(1).to({x:-94.6},0).wait(1).to({x:-90.5},0).wait(1).to({x:-86},0).wait(1).to({x:-81.2},0).wait(1).to({x:-76.1},0).wait(1).to({x:-70.8},0).wait(1).to({x:-65.1},0).wait(1).to({x:-59.2},0).wait(1).to({x:-53.1},0).wait(1).to({x:-46.8},0).wait(1).to({x:-40.3},0).wait(1).to({x:-33.6},0).wait(1).to({x:-26.8},0).wait(1).to({x:-19.8},0).wait(1).to({x:-12.7},0).wait(1).to({x:-5.4},0).wait(1).to({x:1.9},0).wait(1).to({x:9.4},0).wait(1).to({x:17},0).wait(1).to({x:24.7},0).wait(1).to({x:32.4},0).wait(1).to({x:40.3},0).wait(1).to({x:48.2},0).wait(1).to({x:56.2},0).wait(1).to({x:64.2},0).wait(1).to({x:72.2},0).wait(1).to({x:80.3},0).wait(1).to({x:88.5},0).wait(1).to({x:96.6},0).wait(1).to({x:104.8},0).wait(1).to({regY:0,x:113,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-28.8,93.3,61.1);


(lib.frame_r2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.cornor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(209.9,193.3,1,1,180,0,0,-9.5,-5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape.setTransform(-258.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwBZIAAhuIgiAAIAABVQACAcgVgDIgPAAIAAgUIAEAAQADACAAgGIAAiSIBHAAQAGABAAgFIAAgDIAaAAIAAAKQADAXgWgEIg5AAIAAAQIBMAAIAAAWIgPAAIAABugAg3BZIAAhoIgDAAIgBBJQAAAZgWgCIgIAAIAAgWQAHACgBgGIADhgIAZAAIAAgHIghAAIAAgVIAhAAIAAgTIAbAAIAAATIAKAAIAAAVIgKAAIAAAIIAHAAIAAAZIgHAAIAABog");
	this.shape_1.setTransform(-31.5,-109.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5BZIhCAAIAAgXIA1AAQAIABgBgIIAAgxIhGAAIgRA8QgFATgSAAIgcAAIAAgXIAPAAQAFgBAEgHIALgwIgjAAIAAgYICpAAIAABPQABAZgXAAIgDgBgAhIgUIgPAAIAAgaIAFAAQAJABAEgSIAHgaIAgAAIgLAkQgGAigTAAIgGgBgAAwghIgJgfIg6AAIAAgZIBTAAIAHAeQACAOAJgCIAGAAIAAAZIgUAAIgEABQgOAAgCgMg");
	this.shape_2.setTransform(-51.2,-109.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYBYIAAgQIBIAAIAAgEIhFAAIAAgPIBFAAIAAgHIhFAAIAAg2ICrAAIAAAmQAAARgRgBIg3AAIAAAHIBHAAIAAAPIhHAAIAAAEIBLAAIAAAQgAAOAfIAlAAQAFABAAgHIAAgCIgqAAgAg3AfIAnAAIAAgIIgnAAgAAOALIAqAAIAAgHIgqAAgAg3ALIAnAAIAAgHIgnAAgAhYgOIAAgOICxAAIAAAOgABDgiIiXAAIAAg1ICqAAIAAAiQABAUgQAAIgEgBgAg1gvIBpAAQAEABAAgFIAAgDIhtAAgAg2hDIBuAAIAAgGIhuAAg");
	this.shape_3.setTransform(-71.2,-109.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBaIAAgVIATAAQADABADgFIAMgQIglAAIAAgWIADAAIAAhGIBBAAIAKgOIgnAAIgEADQgHAEgHAAIgSAAIAAgYIAKAAQADABADgEIAHgMIAgAAIgEAIIA5AAIAAAWIgLAQIALAAIAABGIADAAIAAAWIgnAAIALAQQABAFAHgBIAUAAIAAAUIgdAAQgRAAgEgIIgHgNIgNAPQgFAHgMAAgAAuAbIAQAAIAAgvIgQAAgAADAbIAQAAIAAgvIgQAAgAhQBaIAAgYIASAAQADAAAAgEIAAgiIgJAOQgEAHgIAAIgJAAIAAgZQAEABADgHIAXgnIAAgWIgdAAIAAgcIAdAAIAAgRIAaAAIAAARIAKAAIAAAcIgKAAIAAALIAKAAIAAAdIgKAAIAABMQAAARgOAAg");
	this.shape_4.setTransform(-91.3,-109.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBaIgrAAIAAgXIAXAAQAJAAAKgHIAWgRIg3grIAtAAIAiAYIAggZIAuAAIg1AsIATAOQAKAKAIgCIAbAAIAAAYIgoAAQgNABgMgLIgYgRIgXATQgKAJgKAAIgCAAgAgpgHIgvAAIAAgYIAgAAQADAAACgEIADgMIAgAAIgJAdQgDALgKAAIgDAAgAAagTIgIgdIAfAAIAFANQAAAEAEAAIAfAAIAAAWIgvAAIgCAAQgLAAgDgKgAhYg4IAAgXIBCAAIAAgKIAkAAIAAAJIBLAAIAAAYg");
	this.shape_5.setTransform(-111.2,-109.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_6.setTransform(-131.5,-109.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYBZIAAgVIAdAAQAHACAHgFIAggNIAAgUIAbAAIAAASIAhAPQAIADAEAAIAeAAIAAAUIgqAAQgKAAgHgDIgegOIgfAOQgKAEgHAAgAA8A3IAAgdIh3AAIAAAdIgbAAIAAgzICuAAIAAAzgAApgMIgJgWIgJAVQgDALgKgCIgmAAIAAgUIAXAAQAFAAABgEIAMgbIAbAAIgDAJIAQAAIAJASQAAAEAGAAIAUAAIAAAVIgiAAIgCAAQgHAAgEgJgAhCgEIgWAAIAAgUIAOAAQAFACABgFIAGgOIAYAAIgLAbQgCAKgLAAIgEAAgABCgrIAAgSIg8AAIgCAEQgBAFgGgBIgYAAIAAgUIAJAAQAEABAAgFIADgLIAZAAIgCAGIBMAAIAAAngAhOg+IgKgaIAbAAIADAKQACAGAFgBIAQAAIAAAVIgbAAIgDAAQgLAAgCgKg");
	this.shape_7.setTransform(-151.8,-109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABaIgXAAIAAgXIAHAAQADAAABgFIAAiXIBkAAIAAA1QAAASgNgCIgJAAIAAAMIAWAAIAAAWIgWAAIAAAOIAYAAIAAAsQABASgRAAIg1AAIAAg/IARAAIAAgMIgSAAIAAgXIASAAIAAgMIgYAAIAABeQABAQgNAAIgCAAgAAsBEIAMAAQAFABAAgGIAAgNIgRAAgAAOgrIAlAAQAHAAAAgHIAAgNIgsAAgAgsBaIgbAAIAAgWIAKAAQAGAAAAgGIAAgoIgMAXQgDAIgJgBIgKAAIAAgXQAGAAADgEIAZgxIAAgZIgfAAIAAgZIAfAAIAAgPIAaAAIAAAPIAHAAIAAAZIgHAAIAAANIAHAAIAAAaIgHAAIAABUQABAQgPAAIgBAAg");
	this.shape_8.setTransform(-171.6,-109.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBaIgYAAIAAgSIAMAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIAMgjIgZhEIAaAAIAMAgIAMgqIAbAAIgbBRIAMAdQACAEAEAAIALAAIAAATIgYAAQgJgBgCgHIgFgMIgFAMQgBAIgKAAIgBAAgAgVBaQgGgBgEgCIgJgGIgKAGQgGADgFAAIgaAAIAAgRIAUAAIAFgCIAEgBIgZgQIAAgTIgEAAIAAgWIAEAAIAAgHIAWAAIAAAHIAkAAIAAgIIAWAAIAAAIIAGAAIAAAWIgGAAIAAAQIgTARIAEADIAGACIAPAAIAAARgAg9AqIAVAOIAPgMIAAgJIgkAAgAg2ABIAAgtIghAAIAAgYIAGAAIgBgSIATAAIABASIAIAAIAAgVIAYAAIAAAVIAJAAIABgSIASAAIgBASIAFAAIAAAYIggAAIAAAtgAhHgBIgPAAIAAgQQAHABAAgIIADgNIAUAAIgFAaQAAAKgIAAIgCAAgAgWgMIgFgYIAUAAIADANQAAAGAHgBIAAARIgMAAIgCAAQgKAAgBgLgAAVgrIgPAAIAAgXIAEAAQAFABACgHIABgRIAZAAIgBALIAuAAIAAAYIgyAAIgCAEQgDAHgKAAIgCAAg");
	this.shape_9.setTransform(-191.3,-109.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_10.setTransform(-211.6,-109.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgWICuAAIAAAWIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBMAAIAAAXgAA4gxIgLgSIhVAAIgMASQgDAFgLAAIgVAAIAAgXIAJAAQAGAAAEgFIALgRIB4AAIAKASQAFAHAHgCIAGAAIAAAXIgTAAIgEAAQgKAAgCgGg");
	this.shape_11.setTransform(-231.4,-109.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00405B").ss(1,1,1).p("EglVAAAIQTAAMA6YAAA");
	this.shape_12.setTransform(-29,-94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00B4E8").ss(1,1,1).p("A1C43IAVAAMA4oAAAQBbAAAABbIAADXMAAAAs9MhJQAAAQhbAAAAhbMAAAgriIAAkyg");
	this.shape_13.setTransform(-29,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.267)").s().p("A1BCZIwUAAIAAkxIQUAAIAUAAMA4oAAAQBbAAAABbIAADWg");
	this.shape_14.setTransform(-29,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-126,480,320.4);


(lib.frame_r1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.cornor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(209.9,172.9,1,1,180,0,0,-9.5,-5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape.setTransform(-258.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwBZIAAhuIgiAAIAABVQACAcgVgDIgPAAIAAgUIAEAAQADACAAgGIAAiSIBHAAQAGABAAgFIAAgDIAaAAIAAAKQADAXgWgEIg5AAIAAAQIBMAAIAAAWIgPAAIAABugAg3BZIAAhoIgDAAIgBBJQAAAZgWgCIgIAAIAAgWQAHACgBgGIADhgIAZAAIAAgHIghAAIAAgVIAhAAIAAgTIAbAAIAAATIAKAAIAAAVIgKAAIAAAIIAHAAIAAAZIgHAAIAABog");
	this.shape_1.setTransform(-31.5,-109.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5BZIhCAAIAAgXIA1AAQAIABgBgIIAAgxIhGAAIgRA8QgFATgSAAIgcAAIAAgXIAPAAQAFgBAEgHIALgwIgjAAIAAgYICpAAIAABPQABAZgXAAIgDgBgAhIgUIgPAAIAAgaIAFAAQAJABAEgSIAHgaIAgAAIgLAkQgGAigTAAIgGgBgAAwghIgJgfIg6AAIAAgZIBTAAIAHAeQACAOAJgCIAGAAIAAAZIgUAAIgEABQgOAAgCgMg");
	this.shape_2.setTransform(-51.2,-109.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBYQgPgCgBgNIAAigIAfAAIAAAjIAQAAQAHACAAgJIACgUIAfAAIgGAjQgCASgQABIggAAIAABRIAAABQgBAJAIgCIAvAAIAAAYgAhIBYQgOgCgBgOIAAifIAfAAIAAAmIANAAQAJACAAgLIADgXIAfAAIgGAnQgDARgPAAIggAAIAABSQgBAJAGgBIAwAAIAAAXg");
	this.shape_3.setTransform(-71.2,-109.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYBZIAAhZIA3AAIAAhYIAeAAIAAAXIBZAAIAAAZIhZAAIAAAoIBcAAIAABGQgCAQgWADgAg9BCIBxAAQAIgBABgGIAAgkIh6AAg");
	this.shape_4.setTransform(-91.2,-109.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_5.setTransform(-111.5,-109.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhYBZIAAgVIAdAAQAHACAHgFIAhgNIAAgUIAaAAIAAASIAhAPQAHADAGAAIAdAAIAAAUIgqAAQgJAAgIgDIgegOIgeAOQgMAEgFAAgAA8A3IAAgdIh3AAIAAAdIgbAAIAAgzICuAAIAAAzgAAqgMIgKgWIgIAVQgEALgLgCIglAAIAAgUIAXAAQAFAAAAgEIANgbIAcAAIgFAJIARAAIAJASQABAEAFAAIAUAAIAAAVIgiAAIgCAAQgHAAgDgJgAhBgEIgXAAIAAgUIAOAAQAGACAAgFIAFgOIAZAAIgKAbQgDAKgLAAIgDAAgABCgrIAAgSIg8AAIgBAEQgCAFgGgBIgYAAIAAgUIAJAAQADABABgFIADgLIAZAAIgCAGIBMAAIAAAngAhOg+IgKgaIAaAAIAFAKQABAGAFgBIAQAAIAAAVIgcAAIgCAAQgLAAgCgKg");
	this.shape_6.setTransform(-131.8,-109.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBZIh8AAIAAgWIBqAAQABABAAgBQABAAAAAAQAAgBAAgBQABAAAAgCIAAgHIh6AAIAAgVIB8AAIAKgKIiAAAIAAgWICmAAIAAASIgNAOIARAAIAAAVIgZAAIAAAPQABATgMAAIgDgBgAA9gBIiNAAIAAg0ICiAAIAAAhQACATgSAAIgFAAgAgygWIBkAAQAEABAAgGIAAgEIhoAAgAhYg7IAAgXIBLAAIAAgHIAeAAIAAAIIBIAAIAAAWg");
	this.shape_7.setTransform(-151.3,-109.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXBZIAAgXIAIAAQAGAAACgEIAGgVIAeAAIgJAfQgHAPgOACgAA/BZQgRgCgDgNIgIghIAeAAIAGAVQACAGAFgCIAKAAIAAAXgAhWAhIAAgXIAWAAIAAgzIgTAAIAAgZIASAAIAAgVIAdAAIAAAVIBKAAIAAgWIAeAAIAAAWIASAAIAAAYIgUAAIAAA0IAWAAIAAAXgAgkAKIBKAAIAAgzIhKAAg");
	this.shape_8.setTransform(-171.4,-109.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKBZIAAh1IgNAAIAAgWIAFAAQADAAABgGIANgfIAgAAIgMAdIAACTgAgmBWIAAgWIB+AAIAAAWgAA3A4IgYAAIAAgXIALAAQAJADAAgNIAIhCIAdAAIgJBQQABATgTAAIgGAAgAgaAmIgFhRIAfAAIACBEQgCAIAMAAIAJAAIAAAXIgUAAIgGAAQgYAAADgSgAggg2IAAgYIAsAAIAAgKIAdAAIAAAKIAvAAIAAAYg");
	this.shape_9.setTransform(-191.3,-109.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBaIAAgVIhMAAIAAgZIBMAAIAAgNIhJAAIAAhtIAOAAIgBgLIAhAAIABALIBTAAIADgLIAiAAIgCALIALAAIAABcQAAARgOAAIg7AAIAAANIBIAAIAAAZIhIAAIAAAVgAg4AGIArAAIAAgRIgrAAgAARAFIAoAAQADABAAgEIAAgNIgrAAgAARgjIArAAIAAgSIgrAAgAg4gjIArAAIAAgSIgrAAg");
	this.shape_10.setTransform(-211.3,-109.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhVBaIAAhLICqAAIAAA5QABASgSAAgAg3BDIBnAAQAJABgBgKIAAgVIhvAAgAAWAFIgUgKIgRAJQgHAFgLgBIg3AAIAAgWIAqAAQAGABAIgEIAIgCIgsgYIA7AAIALAGIAdgWIhHAAIgFAHQgDAGgKgBIgeAAIAAgXIAPAAQAHACADgIIAIgNIAeAAIgDAIIByAAIAAASIg6AoIAMAGQAGAEAJgBIAjAAIAAAYIgxAAIgBAAQgLAAgHgFg");
	this.shape_11.setTransform(-231.4,-109.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00405B").ss(1,1,1).p("EglVAAAIQTAAMA6YAAA");
	this.shape_12.setTransform(-29,-94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00B4E8").ss(1,1,1).p("A1C3RIAVAAMA4oAAAQBbAAAABbIAADXMAAAApxMg5wAAAIvgAAQhbAAAAhbMAAAgoWIAAkyg");
	this.shape_13.setTransform(-29,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.267)").s().p("A1BCZIwUAAIAAkxIQUAAIAUAAMA4oAAAQBbAAAABbIAADWg");
	this.shape_14.setTransform(-29,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-126,480,300);


(lib.frame_l3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.cornor("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.9,175.2,1,1,180,0,0,-9.5,-5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape.setTransform(-200.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBaIgVAAIAAgZIAGAAQABABABAAQAAgBABAAQAAgBAAAAQAAgBAAgCIAAh9IhaAAIAAgZIB3AAIAACfQAAAUgQAAIgBAAgAhQBHIAAhVIgKAAIAAgaIAoAAIAABmQgBAFAEgBIAKAAIAAAXIgcAAIgCAAQgOAAABgSgAgcBUIAAhfIBPAAIAABLQAAATgUABgAgBA8IAWAAQABAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgqIgZAAgAgdgYIAAgZIBRAAIAAAZgAhag+IAAgbIAxAAIAAAbg");
	this.shape_1.setTransform(-89.1,-108.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BaIggAAIAAgWIAWAAQAEAAAAgFIAAgdIgFANQgFAKgJgBIgNAAIAAgTIADAAQAEABAEgKIAXg8IAAgUIgeAAIAAgWIAdAAIAAgPIAZAAIAAAPIAIAAIAAAVIgIAAIAAALIAIAAIAAAYIgIAAIAABVQACAXgUAAIgCAAgAArBSIgJgHIgOAKQgHAEgNABIgZAAIAAgWIAUAAQAHAAADgCIAIgGIgWgUIABgCIAmAAIAFAFIAOgMIhGAAIAAgSIArAAIAAgIIgpAAIAAhXIAIAAQAGAAAAgEIAAgDIAVAAIAAAPQAAAOgKgBIAAAMIAKAAIAAAVIgLAAIAAAOIARAAIAAhLIAaAAIAABLIAOAAQAEAAAAgEIAAgKIgMAAIAAgVIAMAAIAAgLIgMAAIAAgWIAlAAIAABBQAAAYgWgCIgVAAIAAAIIAqAAIAAASIgiAcIAKAGQAEADAHgBIANAAIAAAXIgRAAIgCAAQgSAAgKgIg");
	this.shape_2.setTransform(-108.8,-109);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBZQgLAAgBgLIgGgcIAaAAIADARQABAFAFgCIAMAAIAAATgAhZBZIAAgTIAKAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIACgSIAbAAIgHAcQgDALgNAAgAARBOIgHgcIAZAAIAEAQQABAEAEgBIAHAAIAAATIgXAAIgBABQgIAAgCgLgAA5BNIgGgbIAZAAIAEAQQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIAHAAIAAATIgTAAIgCABQgKAAgBgMgAgtAtIgiAAIAAgVIASAAQAEABAAgEIAAgPIgFAIQgDAGgJgBIgPAAIAAgTIAIAAQADABACgDIATgjIAAgOIggAAIAAgYIAgAAIAAgMIAbAAIAAAMIAGAAIAAAWIgGAAIAAALIAGAAIAAAWIgGAAIAAAyQAAAPgNAAIgCAAgAAJAtIgcAAIAAgVIAQAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgBIAAgEIgSg7IAXAAIAEAQIAGgaIgiAAIAAgZIAkAAIADgNIAaAAIgCANIAlAAIAABeQAAABABABQAAABAAAAQAAABABAAQAAAAABAAIAFAAIAAAWIgVAAQgMABABgSIAAhOIgRAAIgLA0IAVAAIAAAWIgXAAIgEAOQgBAIgMAAIgBAAg");
	this.shape_3.setTransform(-128.6,-109);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_4.setTransform(-148.9,-108.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgWICuAAIAAAWIhJAAIAAAdIBJAAIAAAXIhJAAIAAAdIBLAAIAAAXgAA4gxIgLgSIhVAAIgNASQgCAFgLAAIgVAAIAAgXIAJAAQAGAAAEgFIAMgRIB3AAIAKASQAEAGAIAAIAGAAIAAAWIgTAAIgEAAQgJAAgDgGg");
	this.shape_5.setTransform(-168.8,-108.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00405B").ss(1,1,1).p("EggzAAAMBBnAAA");
	this.shape_6.setTransform(0,-94.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B4E8").ss(1,1,1).p("AfZ3ZQBbAAAABcIAADXIAACdIAAUXIAAJdIAABfIAAIQMhAMAAAQhbAAAAhcIAAm0IAAq8IAA20IAAkzg");
	this.shape_7.setTransform(0,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAkxMBAMAAAQBbAAAABbIAADWg");
	this.shape_8.setTransform(0,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.3,-126,458.1,302.2);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var current = -1;
		var that = this;
		var names = [];
		var fields = ['resPublishNumOut', 'subCompanyNumOut', 'resRecordNumOut', 'resApiServiceNumOut', 'resSubscribehNumIn', 'resCompanyNumIn', 'resRecordNumIn', 'resApiServiceNumIn'];
		
		this.glowline.visible = false;
		this.nodeSmall.visible = false;
		this.removeChild(this.glowline);
		this.stop();
		that.tab.toy = 0;
		
		window.setCurrent = this.setCurrent = function (p) {
			var c = current = p;
			var pageId = Math.floor(c / 5);
			var itemId = c % 5;
			for (var i = 1; i <= 5; i++) {
				var t = pageId * 5 + i - 1;
				if (t > names.length - 1) {
					//t = t%names.length;
					that.names['text' + i].text = "";
				} else {
					that.names['text' + i].text = names[t].name;
				}
			}
			that.tab.toy = that.names['text' + (itemId + 1)].y + that.names.y + 10;
			for (i = 1; i <= 4; i++) {
				that.bottom['text' + i + '_1'].text = that.bottom['text' + i].text;
				that.bottom['text' + i].text = names[current][fields[i - 1]];
				that.bottom1['text' + i + '_1'].text = that.bottom1['text' + i].text;
				that.bottom1['text' + i].text = names[current][fields[i - 1 + 4]];
			}
			that.bottom.gotoAndPlay(2);
			that.bottom1.gotoAndPlay(2);
		}
		this.freshBottom = function () {
			that.setCurrent((current + 1) % names.length);
		}
		window.freshBottom = function (p) {
			names = p;
			if (names.length == 0) return;
			
			that.freshBottom();
			setInterval(that.freshBottom, 5000);
		}
		window.glow = {
			GlowLine: lib.GlowLine,
			NodeSmall: lib.NodeSmall,
			parent1: that
		}
		
		this.addEventListener('tick', function () {
			that.tab.y += (that.tab.toy - that.tab.y) * 0.3;
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuJQpMAAAghRIcTAAMAAAAhRg");
	mask.setTransform(-148.4,694.5);

	// Layer 5
	this.names = new lib.names();
	this.names.parent = this;
	this.names.setTransform(-205,695);

	var maskedShapeInstanceList = [this.names];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.names).wait(1));

	// Layer 6
	this.tab = new lib.Symbol12();
	this.tab.parent = this;
	this.tab.setTransform(-142.6,691.2,1,1,0,0,0,118.2,29.1);

	this.timeline.addTween(cjs.Tween.get(this.tab).wait(1));

	// Layer 14
	this.nodeSmall = new lib.NodeSmall();
	this.nodeSmall.parent = this;
	this.nodeSmall.setTransform(165.4,293.4);

	this.glowline = new lib.GlowLine();
	this.glowline.parent = this;
	this.glowline.setTransform(162,268.9,1,1,0,0,0,-7.9,53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.glowline},{t:this.nodeSmall}]}).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C3D44").ss(2).p("Eg1egRqMBq9AAAQAeAAAAAcMAAAAidQAAAcgeAAMhq9AAAQgeAAAAgcMAAAgidQAAgcAeAAg");
	this.shape.setTransform(304.9,694.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.bottom1 = new lib.Bottom1();
	this.bottom1.parent = this;
	this.bottom1.setTransform(322.5,778.6);

	this.bottom = new lib.Symbol13();
	this.bottom.parent = this;
	this.bottom.setTransform(322.5,691.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom},{t:this.bottom1}]}).wait(1));

	// Layer 3
	this.instance = new lib.cornor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(662.1,839.3,1,1,180,0,0,-9.5,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape_1.setTransform(-258.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B5EB").ss(1,1,1).p("EBIrBLWMiP6AAAQhbAAAAhbMAAAiVQMBW8AAAIAVAAIAIAAMA4gAAAQBcAAAABbg");
	this.shape_2.setTransform(197.1,357.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-126,944,966.4);


// stage content:
(lib._super = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.rootCjs = this;
		if(window.fresh) window.fresh();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.nodata_rt = new lib.NoData();
	this.nodata_rt.parent = this;
	this.nodata_rt.setTransform(1678,223.6);

	this.nodata_rm = new lib.NoData();
	this.nodata_rm.parent = this;
	this.nodata_rm.setTransform(1678,569.3);

	this.nodata_rb = new lib.NoData();
	this.nodata_rb.parent = this;
	this.nodata_rb.setTransform(1678,889.6);

	this.nodata_lm = new lib.NoData();
	this.nodata_lm.parent = this;
	this.nodata_lm.setTransform(228,509.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nodata_lm},{t:this.nodata_rb},{t:this.nodata_rm},{t:this.nodata_rt}]}).wait(1));

	// 左下图
	this.instance = new lib.frame_l3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(229.8,867.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 左中图
	this.lmText5 = new cjs.Text("", "19px 'FZCuQian-M17S'", "#FEB300");
	this.lmText5.name = "lmText5";
	this.lmText5.textAlign = "right";
	this.lmText5.lineHeight = 23;
	this.lmText5.lineWidth = 69;
	this.lmText5.parent = this;
	this.lmText5.setTransform(424.8,637.2);

	this.lmText4 = new cjs.Text("", "19px 'FZCuQian-M17S'", "#FEB300");
	this.lmText4.name = "lmText4";
	this.lmText4.textAlign = "right";
	this.lmText4.lineHeight = 23;
	this.lmText4.lineWidth = 63;
	this.lmText4.parent = this;
	this.lmText4.setTransform(424.8,584.7);

	this.lmText3 = new cjs.Text("", "19px 'FZCuQian-M17S'", "#FEB300");
	this.lmText3.name = "lmText3";
	this.lmText3.textAlign = "right";
	this.lmText3.lineHeight = 23;
	this.lmText3.lineWidth = 64;
	this.lmText3.parent = this;
	this.lmText3.setTransform(424.8,529.6);

	this.lmText2 = new cjs.Text("", "19px 'FZCuQian-M17S'", "#FEB300");
	this.lmText2.name = "lmText2";
	this.lmText2.textAlign = "right";
	this.lmText2.lineHeight = 23;
	this.lmText2.lineWidth = 65;
	this.lmText2.parent = this;
	this.lmText2.setTransform(424.8,468.6);

	this.lmText1 = new cjs.Text("", "19px 'FZCuQian-M17S'", "#FEB300");
	this.lmText1.name = "lmText1";
	this.lmText1.textAlign = "right";
	this.lmText1.lineHeight = 23;
	this.lmText1.lineWidth = 64;
	this.lmText1.parent = this;
	this.lmText1.setTransform(424.8,416.1);

	this.instance_1 = new lib.cornor("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(439.7,716.2,1,1,180,0,0,-9.5,-5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBZIAAgZIAtAAQAGABAAgJIAAhKIgDAAIhEAAIAAgXIBwAAIAAAXIgIAAIgDAAIAABWQAAAUgbABgAhKBZIAAhVIgNAAIAAgaIAJAAQADAAACgDIABgBIAIgQIAkAAIgPAiIAABhgAhAgsIgYAAIAAgWIAPAAQAHAAADgIIAGgPIAiAAIgQAiQgFALgRAAIgDAAgAgVg+IAAgWIBtAAIAAAWg");
	this.shape.setTransform(190.8,359.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBZIAAiwIAaAAIAAALIAaAAIAAAWIgaAAIAAAqIAaAAIAAAUIgaAAIAAAnIAaAAIAAAUIgaAAIAAAWgAAGBZIAAgVIgWAAIAAgWIAWAAIAAgmIgWAAIAAgVIAWAAIAAgpIgUAAIAAgWIAUAAIAAgLIAaAAIAACwgAg0BWIghAAIAAgUIAXAAQAFABAAgHIAAgmIgIAVQgDALgJgBIgOAAIAAgZIAFAAQACABACgGIAZg4IAAgSIgiAAIAAgXIAiAAIAAgOIAaAAIAAAOIAHAAIAAAXIgHAAIAAAMIAHAAIAAAXIgIAAIAABVQABASgTAAIgCgBg");
	this.shape_1.setTransform(170.7,359.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_2.setTransform(150.8,359.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXBZIAAgVIAdAAQAGABAHgDIAggPIAAgTIAbAAIAAASIAiAQQAGACAFAAIAeAAIAAAUIgpAAQgLAAgGgDIgfgOIgfAOQgKAEgHAAgAA8A4IAAgeIh2AAIAAAeIgcAAIAAg0ICtAAIAAA0gAApgMIgJgVIgJAUQgDALgKgCIgmAAIAAgUIAYAAQAEAAABgEIAMgcIAcAAIgEAKIAQAAIAIASQABAEAGAAIATAAIAAAVIghAAIgCAAQgHAAgEgJgAhCgEIgWAAIAAgTIAOAAQAFAAABgEIAFgOIAZAAIgKAbQgDAKgLAAIgEAAgABDgrIAAgSIg9AAIgCAEQgBAFgGgBIgYAAIAAgVIAIAAQAFABAAgEIADgLIAZAAIgBAGIBLAAIAAAngAhOg+IgKgaIAbAAIAEAKQABAFAGgBIAPAAIAAAWIgcAAIgCAAQgLAAgCgKg");
	this.shape_3.setTransform(130.5,359.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBZQgMAAgCgLIgFgbIAaAAIADAQQABAEAFgBIAMAAIAAATgAhYBZIAAgTIAJAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIAEgRIAbAAIgIAbQgDALgNAAgAARBOIgHgcIAZAAIAEAQQABAEAEgBIAHAAIAAAUIgXAAIgBAAQgIAAgCgLgAA5BNIgGgbIAZAAIAEAQQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIAHAAIAAAUIgUAAIgCAAQgKAAgBgMgAgtAtIgiAAIAAgUIASAAQAEABAAgGIAAgOIgFAIQgDAGgKgBIgNAAIAAgTIAHAAQAEABABgCIATgkIAAgOIgfAAIAAgYIAfAAIAAgMIAaAAIAAAMIAHAAIAAAWIgHAAIAAAKIAHAAIAAAYIgHAAIAAAwQABAQgNAAIgCAAgAAJAtIgcAAIAAgUIAPAAQABAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAIAAgBIABgEIgSg7IAWAAIAFAQIAEgbIghAAIAAgYIAlAAIACgNIAbAAIgDANIAmAAIAABeQAAACAAAAQAAABAAAAQAAABABAAQAAAAABAAIAGAAIAAAWIgXAAQgKABAAgSIAAhPIgRAAIgLA1IAUAAIAAAWIgWAAIgEAOQgBAIgMAAIgBAAg");
	this.shape_4.setTransform(111,359.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBZIAAgFIg+AAIAAgRIAIAAIAAg9IgHAAIAAgPICxAAIAAAPIhaAAIAABTgAg1BCIAbAAIAAgHIgbAAgAg1AoIAbAAIAAgIIgbAAgAg1APIAbAAIAAgJIgbAAgAA/BVQgGAAgHgGIgFgFIgGAFQgEAFgJAAIgWAAIAAgTIAJAAQAHABADgDIAFgEIgQgOIABgCIAeAAIAHgJIgsAAIAAgTIBQAAIAAASIgWAZIAHAEQABAEAIgBIAJAAIAAAUgABAgQIiPAAIAAhIICiAAIAAA0QAAAUgQAAIgDAAgAgzgkIBkAAQABABAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAgDIhnAAgAgzg+IBnAAIAAgGIhnAAg");
	this.shape_5.setTransform(90.8,359.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_6.setTransform(70.7,359.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBNAAIAAgdIhLAAIAAgXIBLAAIAAgdIhJAAIAAgWICuAAIAAAWIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBLAAIAAAXgAA4gxIgLgSIhVAAIgMASQgDAFgLAAIgVAAIAAgXIAKAAQAFABAFgGIAKgRIB4AAIALASQADAGAIgBIAGAAIAAAXIgUAAIgDAAQgKAAgCgGg");
	this.shape_7.setTransform(50.9,359.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00405B").ss(1,1,1).p("EggzAAAMBBnAAA");
	this.shape_8.setTransform(229.8,373.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA4IAAhSIAAgbIBegCIBfAA");
	this.shape_9.setTransform(29.3,348.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B4E8").ss(1,1,1).p("A919IMA9OAAAQBbAAAABbIAADXIAACeMAAAAm8IAAMFMhAMAAAQhbAAAAhbMAAAg0EIAAjCEggzgcrIAAgdIBfAA");
	this.shape_10.setTransform(229.8,529.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAjBIAAhTIAAgbIBggCIBeAAMA9NAAAQBcAAAABbIAADWgEggzgCYIBgAAIhgACIAAAbg");
	this.shape_11.setTransform(229.8,358.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.lmText1},{t:this.lmText2},{t:this.lmText3},{t:this.lmText4},{t:this.lmText5}]}).wait(1));

	// 右上图
	this.instance_2 = new lib.frame_r1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1689,201.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 右下图
	this.instance_3 = new lib.frame_r3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1689,866.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 左上图
	this.instance_4 = new lib.frame_r2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1689,522.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_12.setTransform(53.7,263.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_13.setTransform(53.7,256.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_14.setTransform(53.7,248.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_15.setTransform(65.1,263.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_16.setTransform(65.1,256.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_17.setTransform(65.1,248.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.9).p("ADBAAQAABQg4A5Qg5A4hQAAQhPAAg5g4Qg4g5AAhQQAAhPA4g5QA5g4BPAAQBQAAA5A4QA4A5AABPg");
	this.shape_18.setTransform(61.3,256.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBpIAAg4IAKgNIABgBIBchwIitBVIA/AUIgMAPIhOgYIgDgCIgCgDQgCgDACgEQABgDADgCIDnhyQADgBAEABQADABACADIABAEIgBACIggCwQgBAIgIgBIgDAAIhUgbIAAAzQAAADgCADQgDACgEAAQgIAAAAgIgAAIAoIBEAVIAZiFg");
	this.shape_19.setTransform(275.1,257.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1.9).p("ADBAAQAABQg4A5Qg5A4hQAAQhPAAg5g4Qg4g5AAhQQAAhPA4g5QA5g4BPAAQBQAAA5A4QA4A5AABPg");
	this.shape_20.setTransform(276.9,256.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhvB4QgEAAgDgDQgCgCAAgEQAAgEACgDQADgDAEAAIDfAAQAJAAAAAKQAAAJgJAAgAgGAtQgDgDAAgDIAAh+IgRARQgDADgEAAQgGAAgCgGQgCgGAEgEIAgghIAEgCQAGgCAEAEIAhAhQAFAGgFAHQgGAGgIgGIgRgSIAAB/QAAADgDADQgDADgDAAQgDAAgDgDg");
	this.shape_21.setTransform(276.1,160.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhjCjQgjgUgZgfQgYgfgLgnQgKguAHgqQAGghARggQAcgwAvgcQAEgCAGABQAFACADAEQACAFgBAFQgCAFgEADQgrAZgXApQgkA/AUBFQATBGBAAkQA+AkBGgUQBFgTAkg/QAkhAgUhFQgThGhAgjQgEgDgCgFQgBgFACgFQADgEAFgCQAGgBAEACQBJApAWBRQAXBPgqBJQgpBJhQAWQgcAIgbAAQgyAAgvgbg");
	this.shape_22.setTransform(276.1,163.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiIAyQgEgDAAgGQAAgFAEgEQAEgEAFAAIDegCIg+g5QgEgDAAgGQAAgFADgEQAEgEAFAAQAGAAAEADIBVBQQAIAGgFAIQgCAIgJAAIj/ACQgFAAgEgEg");
	this.shape_23.setTransform(56.1,161.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhJC+Qg2gUgigqQgEgDABgGQABgFAEgEQAEgDAFABQAFAAAEAEQAeAlAuARQBEAYBBgfQBCgfAYhEQAMghgBgiQgCgjgPgfQgfhChEgYQhEgZhCAgQhBAfgYBEQgCAFgFACQgFADgFgCQgFgCgCgFQgCgFABgFQAchOBMgkQBMgkBNAdQAmANAeAbQAdAbARAkQASAlACAoQACAngOAlQgOAmgaAeQgbAdglARQgsASgqAAQgiAAghgLg");
	this.shape_24.setTransform(63,162.2);

	this.tlText4 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#FDD100");
	this.tlText4.name = "tlText4";
	this.tlText4.lineHeight = 36;
	this.tlText4.lineWidth = 109;
	this.tlText4.parent = this;
	this.tlText4.setTransform(322,260.4);

	this.tlText3 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#FDD100");
	this.tlText3.name = "tlText3";
	this.tlText3.lineHeight = 36;
	this.tlText3.lineWidth = 142;
	this.tlText3.parent = this;
	this.tlText3.setTransform(95.7,260.4);

	this.tlText2 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#FDD100");
	this.tlText2.name = "tlText2";
	this.tlText2.lineHeight = 36;
	this.tlText2.lineWidth = 105;
	this.tlText2.parent = this;
	this.tlText2.setTransform(319.4,164.6);

	this.tlText1 = new cjs.Text("", "30px 'FZCuQian-M17S'", "#FDD100");
	this.tlText1.name = "tlText1";
	this.tlText1.lineHeight = 36;
	this.tlText1.lineWidth = 102;
	this.tlText1.parent = this;
	this.tlText1.setTransform(102.2,164.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_25.setTransform(237.6,245.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgCgDQA4gdAig3IASACIgFAHQAeAwA3AXIgKAPQg4gbgcgtQggAtg0AeIgIgLg");
	this.shape_26.setTransform(224.3,244.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMBmQgjgsgCg5QABg2AkgwIAOAAQgiAwAAA2QgBA3AjAug");
	this.shape_27.setTransform(211,245.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTBWIgWAAQgBgKgCgGIAYABQAPAAAAgOIAAg/IhWAAIAAgNICLAAIAAgUIhzAAIAAgNIBzAAIAAgUIh2AAIAAgNICFAAIAABCIAeAAIAAANIhWAAIAAAGQAKAPALAMIAogbIAKALIgWAOIgSALQASAQAmAJQgFAGgFAIQg2gPgXgmIAAAkQACAcgbAAIgBAAgAhdA5QAggLAwgSIACAOIhNAdgAg/ASIgNgKIAJgKIAIAFIAcASIgIANIgYgQg");
	this.shape_28.setTransform(197.1,244.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA0BXIAAgOIhoAAIAAAOIgOAAIAAitICGAAIAACtgAg0A8IBoAAIAAgkIhoAAgAg0AMIBoAAIAAgjIhoAAgAg0glIBoAAIAAgjIhoAAg");
	this.shape_29.setTransform(177.1,244.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag/BRQAbgcgChEIAAhAICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA1QACBIgfAiIgKgKgAADAPIA/AAIAAgSIg/AAgAADgOIA/AAIAAgTIg/AAgAhaBUIADgLQALgpAEgVIAOAGIgIAhIgKAngAgcBLQAOgNAQgYIAMAHQgLAOgUAYgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgKIAhAZIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_30.setTransform(157.2,244.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_31.setTransform(137,244.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhcBTIgBgCIACgBQASgPAFgKQgOgQgIgdIAMgEQAIAZAJAMQAIgQAEgeIgnAAIAAgOIAkgsIglAAIAAgNIA2AAIAAAMIgkAuIAkAAIAAALQgFAkgLAWQAVASAtABIBQAAIgGAOIhLAAQgvAAgYgVQgKAMgSAPIgHgJgAAPBFIAAgUIgxAAIAAgLIAxAAIAAgRIgqAAIAAgLIAqAAIAAgQIgnAAIAAgLIAnAAIAAgQIgxAAIAAgMIAxAAIAAgQIgnAAIAAgLIAnAAIAAgTIANAAIAAATIAsAAIAAAbIAUAAIAAAMIgUAAIAAAbIgsAAIAAAQIAwAAIAAALIgwAAIAAARIA5AAIAAALIg5AAIAAAUgAAcgRIAfAAIAAgQIgfAAgAAcgtIAfAAIAAgQIgfAAg");
	this.shape_32.setTransform(117.1,244.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAkBcQgBgJgCgIIAOABIAMAAQAPAAgBgMIAAiYIAPAAIAACbQABAZgYAAIgdAAgAhCBAIAAhVIgEAEIgJAHQAAgDgEgFIgEgGQAogeASgkIAQADIgFAHQAUARAZAZIgLAMQgOgRgbgZQgRAagWATIBNAAQAAAQgCAYQgBAagbgCIgWAAIgCgOIAXABQAQAAgBgOIABgNIABgLIgyAAIAABIQgCAOAQgCIAaAAQAPABADgJQACgFABgSIAPAFQgCASgDAGQgEARgYAAIggAAIgDAAQgZAAACgZgAAiAuIAAh0IAOAAIAAB0g");
	this.shape_33.setTransform(96.4,244.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_34.setTransform(412.9,245.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgDgDQA6gdAgg3IATACIgFAHQAeAwA2AXIgKAPQg2gbgdgtQggAtg0AeIgIgLg");
	this.shape_35.setTransform(399.6,244.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMBmQgjgsgCg5QABg2AkgwIAOAAQgiAwAAA2QgBA3AjAug");
	this.shape_36.setTransform(386.3,245.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag/BRQAbgcgChEIAAhAICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA1QACBIgfAiIgKgKgAADAPIA/AAIAAgSIg/AAgAADgOIA/AAIAAgTIg/AAgAhaBUIADgLQALgpAEgVIAOAGIgIAhIgKAngAgcBLQAOgNAQgYIAMAHQgLAOgUAYgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgKIAhAZIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_37.setTransform(372.5,244.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_38.setTransform(352.3,244.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AACBdIAAhcIgqAAIAABOIgOAAIAAhIQgMAPgPAQIgGgGIgFgHQAmgiAVgpIg0AAIAAgOIA7AAIALgcIAPACIgHATIgDAHIBnAAIAAAOIhuAAQgKAUgNASIAqAAIAAgdIAPAAIAAAdIA7AAIAAA+QABAXgZABIgXABIgCgIIgBgGIAIAAIAOAAQAOABgBgNIAAgwIgsAAIAABcg");
	this.shape_39.setTransform(332.3,244.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag9BQQA0gOAQgKQgXgVgMgfQgRAsgmAlQgFgGgFgGQAvgtAPg+Ig0AAIAAgPQAJgUAFgPIAQADIgHAQIgHARIAoAAIABgEQADgOAEgaIAQACIgHAjIgBAHIBnAAIAAAOIhqAAIgEAMIgEALIBdAAIAAANQgMAfgbAXQAUAOAqAGIgJANQAAAAAAAAQAAAAgBAAQAAAAAAABQgBABgBABQgkgLgbgQQgWANgvAPQgEgHgHgGgAATAwQAagVAIgZIhDAAQALAdAWARgAA3g3QgUgRgKgGIAIgMQAVAOAPALIgKANIgEgDg");
	this.shape_40.setTransform(312.3,244.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_41.setTransform(433.6,149.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgDgDQA6gdAgg3IATACIgFAHQAeAwA2AXIgKAPQg2gbgdgtQggAtg0AeIgIgLg");
	this.shape_42.setTransform(420.3,148.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAMBmQgjgsgCg5QABg2AkgwIAOAAQgiAwAAA2QgBA3AjAug");
	this.shape_43.setTransform(407,149.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABBTQAVgRARgYQgHgfgBg5IhCAAIAAgNIBCAAIAAghIAOAAIAAAhIAvAAIAAANIgvAAQABAtAEAaQAMgVALgdIANAFQgPAmgRAbQAFARAHAIQAEAGADgBQADgBACgFQACgIABgVIANADQgBASgDAOQgDARgNAAQgKgBgIgKQgIgKgEgMQgOARgSARIgLgKgAgsA5QApgGAbgGIAAANIg/ALgAhdA3IAKgEIAOgEIAAhJIgXAAIAAgOIAXAAIAAg0IAOAAIAAA0IAVAAIAAAOIgVAAIAABEIAKgDIAKgEIAAALIABADQgfALgZAJgAgdAhIAAg6IAuAAIAAA6gAgRAVIAVAAIAAgiIgVAAgAA1hRIAHgIIAWAQIgIALIgVgTg");
	this.shape_44.setTransform(393,148.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag/BRQAbgcgChEIAAhAICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA1QACBIgfAiIgKgKgAADAPIA/AAIAAgSIg/AAgAADgOIA/AAIAAgTIg/AAgAhaBUIADgLQALgpAEgVIAOAGIgIAhIgKAngAgcBLQAOgNAQgYIAMAHQgLAOgUAZgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgLIAhAaIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_45.setTransform(373.2,148.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_46.setTransform(353,148.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhcBTIgBgCIACgBQASgPAFgKQgOgQgIgdIAMgEQAIAZAJAMQAIgQAEgeIgnAAIAAgPIAkgrIglAAIAAgNIA2AAIAAAMIgkAuIAkAAIAAALQgFAkgLAWQAVASAtABIBQgBIgGAPIhLAAQgvAAgYgVQgKAMgSAPIgHgJgAAPBFIAAgUIgxAAIAAgLIAxAAIAAgRIgqAAIAAgLIAqAAIAAgQIgnAAIAAgLIAnAAIAAgQIgxAAIAAgMIAxAAIAAgQIgnAAIAAgLIAnAAIAAgTIANAAIAAATIAsAAIAAAbIAUAAIAAAMIgUAAIAAAbIgsAAIAAAQIAwAAIAAALIgwAAIAAARIA5AAIAAALIg5AAIAAAUgAAcgRIAfAAIAAgQIgfAAgAAcgtIAfAAIAAgQIgfAAg");
	this.shape_47.setTransform(333.1,148.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAkBcQgBgJgCgIIAOABIAMAAQAPAAgBgMIAAiYIAPAAIAACbQABAYgYABIgdAAgAhCBAIAAhVIgEAEIgJAHQAAgDgEgFIgEgGQAogeASgkIAQADIgFAHQAUARAZAZIgLAMQgOgRgbgZQgRAagWATIBNAAQAAAQgCAYQgBAagbgCIgWAAIgCgOIAXABQAQAAgBgOIABgMIABgMIgyAAIAABIQgCAOAQgCIAaAAQAPABADgJQACgFABgSIAPAFQgCASgDAGQgEARgYAAIggAAIgDAAQgZAAACgZgAAiAuIAAh0IAOAAIAAB0g");
	this.shape_48.setTransform(312.4,148.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_49.setTransform(206.7,149.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHBcIAAhzIAPAAIAABzgAhbgEIgDgDQA6gdAgg3IATACIgFAHQAeAwA2AXIgKAPQg2gbgdgtQggAtg1AeIgHgLg");
	this.shape_50.setTransform(193.4,148.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAMBmQgjgsgCg5QABg2AkgwIAOAAQgiAwAAA2QgBA3AjAug");
	this.shape_51.setTransform(180.1,149.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhDBdIAAhpQgJAPgKAOIgGgOIgCgDQAbgnAPg0IAPAEQgIAZgIAVIAACGgAgqBUIAAgNIBGAAQASgyAPg1IAQAFIgUA6IgNAoIAyAAIAAANgAgagZIAOgFQAMAgAOAxIgPAGQgOgzgLgfgAgmgqIAAgOIA8AAQgBgJgJgWIAQgFIALAgIgPAEIBDAAIAAAOg");
	this.shape_52.setTransform(166.2,148.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAoAAIgMgMIgKgKIANgIIAWAYIgKAGIAwAAQAMgOALgQIANAIIgJAKIgJAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_53.setTransform(146.2,148.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhdBLQA8glAWhTQgNgXgRgMIAMgIQAVAMAaA3QAiBMAqAQIgNARQgrgZgihNIgDgGIgCgFQgVBIg9AqQgEgIgGgGg");
	this.shape_54.setTransform(126.2,148.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgpBPQAmgGAVgLIgLgEIgbgMIAQgWIgfAAIAAgMIAlAAIALgTIANAEIgJAPIBLAAIAAAMIgZAAQgHAWgPAOIAUAJQARAFAJAEIgIANIgDgCQgbgMgVgIQgWAPgsAJIgHgOgAACAkIgCAFIAfAOQAPgOAGgRIgqAAIgIAMgAhZBaIgCgPIAQABQAIAAAAgHIAAg0IgYAJIgBgQQAEgBAKgEIALgCIAAgrIgXAAIAAgPIAXAAIAAgjIAOAAIAAAjIAWAAIAAAPIgWAAIAAAnIAHgCIALgDIABAGIAAAGIgJAEIgKADIAAA5QACAUgVAAIgRAAgAgjgKIAAgNIBKAAIAVggIAMAHIgSAZIAnAAIAAANgAgKgvIAKgIIAFAHIAMAQIgLAIQgHgNgJgKgAgbg5IAAgMIA0AAIgJgRIAMgGQAGAHAGANIgFADIA2AAIAAAMg");
	this.shape_55.setTransform(106.1,148.5);

	this.instance_5 = new lib.cornor("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(439.7,326.6,1,1,180,0,0,-9.5,-5.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhYBZIAAgXIADAAIAAhBICpAAIAABBIAGAAIAAAXgAAkBCIAVAAIAAgnIgVAAgAgLBCIAWAAIAAgnIgWAAgAg6BCIAXAAIAAgnIgXAAgAABgRIgIgZIAcAAIAFAKQABAEAEgBIA6AAIAAAXIhGAAIgFABQgMAAgBgMgAhXgGIAAhSIAbAAIAABSgAgpgGIAAhSIAaAAIAABSgAAegvIgnAAIAAgXIAUAAQADABADgFIAEgOIAcAAIgCAKIAqAAIAAAWIgwAAIgCAEQgBAFgGAAIgCAAg");
	this.shape_56.setTransform(151,90.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgnBHIAAg1IAZAAIAAAsQgBAGAFAAIA5AAIAAAVIhHAAIgDAAQgOAAACgSgAA4BHIgGg0IAZAAIAGAtQgBAEAFAAIADAAIAAAUIgQAAIgDAAQgNAAAAgRgAhFBXIgSAAIAAgTIAGAAQADAAAAgFIAFgsIAZAAIgGA0QgBAQgMAAIgCAAgAAAAoIAAgUIAWAAIAAAMQgBAEAFAAIAKAAIAAATIgXAAIgDAAQgLAAABgPgABGAKIiZAAIAAhVIAPAAIgDgNIAfAAIACANIBSAAIAEgNIAbAAIgDANIAOAAIAABDQACASgPAAIgDAAgAg2gNIBsAAQAEAAAAgGIAAggIhwAAg");
	this.shape_57.setTransform(131,91.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_58.setTransform(110.9,91.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhYBZIAAgUIAeAAQAGABAHgFIAhgNIAAgUIAaAAIAAATIAhAOQAHAEAGgBIAdAAIAAAUIgqAAQgJAAgHgDIgfgOIgeAOQgMAEgFAAgAA8A3IAAgeIh2AAIAAAeIgcAAIAAgzICuAAIAAAzgAAqgLIgKgXIgIAWQgEAKgLgCIglAAIAAgUIAYAAQAEABAAgFIANgbIAcAAIgFAJIARAAIAJASQABAFAFgBIAUAAIAAAVIgiAAIgCAAQgHAAgDgIgAhBgEIgXAAIAAgUIAOAAQAGACAAgFIAFgNIAZAAIgKAaQgDAKgLAAIgDAAgABDgrIAAgSIg9AAIgBAEQgCAFgGgBIgYAAIAAgUIAJAAQADAAABgEIADgLIAZAAIgBAGIBLAAIAAAngAhOg/IgKgZIAaAAIAFAKQABAFAFAAIAQAAIAAAVIgcAAIgCAAQgLAAgCgLg");
	this.shape_59.setTransform(90.6,91.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_60.setTransform(70.8,91.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgXICuAAIAAAXIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBMAAIAAAXgAA4gxIgLgRIhVAAIgMARQgDAGgLgCIgVAAIAAgWIAKAAQAFAAAEgGIALgQIB4AAIALARQAEAIAHgBIAGAAIAAAWIgTAAIgEAAQgJAAgDgGg");
	this.shape_61.setTransform(51,91.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#00405B").ss(1,1,1).p("EggzAAAMBBnAAA");
	this.shape_62.setTransform(229.8,107.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA4IAAhSIAAgbIBegBIBfgB");
	this.shape_63.setTransform(29.3,82.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#00B4E8").ss(1,1,1).p("A91zhMA9OAAAQBbAAAABcIAADXIAACdIAAfzMhAMAAAQhbAAAAhbMAAAgg1IAAjDEggzgTDIAAgeIBfAB");
	this.shape_64.setTransform(229.8,201.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAjBIAAhTIAAgbIBggCIBeAAMA9NAAAQBcAAAABbIAADWgEggzgCYIBgAAIhgACIAAAbg");
	this.shape_65.setTransform(229.8,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_5},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.tlText1},{t:this.tlText2},{t:this.tlText3},{t:this.tlText4},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_4}]}).wait(1));

	// 中图
	this.centerMc = new lib.frame();
	this.centerMc.parent = this;
	this.centerMc.setTransform(730.1,202.2,1,1,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.centerMc).wait(1));

	// 标题
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CBF1FF").s().p("AAJCWIAAgpIhAA/QgMAMgNAAIhdAAIAAgoIA+AAQALAAAIgKIA7g7IAAglIA4AAIAAA5IgIAIIAyAAIAAAZQAAANALAAIBhAAIAAArIiFAAIgDAAQggAAAEgigABxBsIAAhZIjkAAIAABXIg2AAIAAiIIFSAAIAACKgAAFg/IgUgnIA3AAIAEAIQAFAIAKAAIBzAAIAAAnIiOAAIgDAAQgSAAgGgQgAhTgvIAAiBIAyAAIAACBgAingvIAAiBIA3AAIAACBgAAxhuIhAAAIAAgqIAfAAQAIABADgJIAHgXIAuAAIgBAHIBcAAIAAAuIhkAAIgCAJQgCALgOAAIgEAAg");
	this.shape_66.setTransform(1280.1,31.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CBF1FF").s().p("Ah4CuIAAjKIgIAAIgFCbQgDAjgkABIgLAAIAAgnQAIACAAgQIADi5IA0AAIAAgQIg6AAIAAguIA6AAIAAgkIAzAAIAAAkIALAAIAAAuIgLAAIAAAQIALAAIAAAvIgLAAIAADKgAAeCtIhRAAIAAlZIBvAAIAADEQACAhgjgDIgmAAIAABIIAdAAQAGABAAgLIAAgZIAkAAIAAA0QACAegdAAIgDAAgAgLAIIAaAAQAFACAAgIIAAgmIgfAAgAgLhQIAfAAIAAgtIgfAAgABCCrIAAgtIAIAAQAGABAAgJIAKh0IgWAAIAAhnIAZAAIAAA5IARAAIAAhPIgqAAIAAgvIB0AAIAAAvIgjAAIAABPIAjAAIAAAuIg5AAIgLCQQgDAZgdAAgACCCCIAAhtIAmAAIAABbQgCAOAKgCIAIAAIAAAtIgWAAIgDAAQggAAADgng");
	this.shape_67.setTransform(1234.2,32.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CBF1FF").s().p("ACEC2Ig7AAIAAgsIAfAAQAMAAAAgOIAAj/IjpAAIAAE0IgyAAIAAlmIFPAAIAAFCQADApgiAAIgFAAgAgDCNIAlh9IgihvIgnB/IAfBtIgqAAIgLgtIgMAtIgnAAIAghtIgjiMIAqAAIAPBCIAShAIBNAAIARA6IARg6IApAAIgmB6IAZBnIgoAAIgHgdIgPAzg");
	this.shape_68.setTransform(1188.1,32.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CBF1FF").s().p("Ai1C0IAAguICZAAIAAg5IiVAAIAAgvICXAAIAAg7IiUAAIAAgtIFdAAIAAAtIiTAAIAAA7ICTAAIAAAvIiTAAIAAA5ICXAAIAAAugABvhjIgVgiIirAAIgZAiQgFALgWgCIgqAAIAAgtIATAAQAKACAKgNIAWghIDwAAIAVAjQAJAOAPgCIALAAIAAAuIgnAAIgIAAQgSAAgGgNg");
	this.shape_69.setTransform(1142.4,32.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CBF1FF").s().p("AixCyIAAgwICIAAIAAAwgACNCxIiqAAIAAiVIDMAAIAABvQAEAmgfAAIgHAAgAAcCFIBRAAQAIABAAgKIAAg0IhZAAgAiwBfIAAggIAshJIgtAAIAAhAIA4hlIA/AAIhBB1IAPAAIARgeIA9AAIhOCKIBDAAIAAAtgABXAGIgPgNIgOAMQgKAJgMgBIhEAAIAAgmIAmAAQAGABAHgGIAMgNIg3gtIBSAAIAJAIIAfghIg9AAQgGALgLgCIgyAAIAAglIARAAQAIABAEgJIAMgcIA3AAIgIARIB2AAIAAAvIhDBDIARAOQAHAHAIgCIAlAAIAAAoIhFAAIgEAAQgMAAgGgHg");
	this.shape_70.setTransform(1096.6,32.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CBF1FF").s().p("ACEC2Ig7AAIAAgsIAfAAQAMAAAAgOIAAj/IjpAAIAAE0IgyAAIAAlmIFPAAIAAFCQADApgiAAIgFAAgAgDCNIAlh9IgihvIgnB/IAfBtIgqAAIgLgtIgMAtIgnAAIAghtIgjiMIAqAAIAPBCIAShAIBNAAIARA6IARg6IApAAIgmB6IAZBnIgoAAIgHgdIgPAzg");
	this.shape_71.setTransform(1050.1,32.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CBF1FF").s().p("ABkCzIj5AAIAAgsIDVAAQAFACAAgKIAAgOIj1AAIAAgqID7AAIATgUIkBAAIAAgsIFNAAIAAAkIgaAcIAgAAIAAAqIgwAAIAAAeQADAkgZAAIgGAAgAB6gDIkcAAIAAhnIFGAAIAABBQAEAngjAAIgLgBgAhlgtIDJAAQAIABAAgLIAAgHIjRAAgAixh3IAAgtICWAAIAAgOIA8AAIAAAQICRAAIAAArg");
	this.shape_72.setTransform(1004.6,32);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CBF1FF").s().p("AiwCyIAAgtIARAAQAMAAAEgKIANgqIA7AAIgSA/QgNAfgeADgAB9CxQghgCgGgcIgPhAIA7AAIANAoQACALALgBIAVAAIAAAsgAiuBDIAAgwIAuAAIAAhmIgmAAIAAgxIAkAAIAAgsIA6AAIAAAsICTAAIAAgtIA9AAIAAAtIAkAAIAAAvIgnAAIAABoIAsAAIAAAwgAhIATICTAAIAAhmIiTAAg");
	this.shape_73.setTransform(958.5,31.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CBF1FF").s().p("AA6CxIAAgqIAwAAQANABAAgPIAAgvIihAAIgVBOQgGAZgWAAIhUAAIAAgsIAxAAQAKACAEgOIALgvIhKAAIAAgwIBVAAIAHgXIhcAAIAAgqIBSAAQAIAAAIgDIAOgIIhGgpIBgAAIAXANIBHgkIiHAAQgMARgSgBIhCAAIAAgsIAhAAQAKABAFgLIANgYIA7AAIgHANIDsAAIAAAmIiFBLIALAGQAIAHAWgCIBdAAIAAArIh1AAQgaADgRgNIgagOIgTAMQgMAIgRABIAiAAIgHAZIDNAAIAAB7QAAAdgXgBg");
	this.shape_74.setTransform(912.6,31.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CBF1FF").s().p("AAhCzIgfAAIAAgsIAPAAQAIAAAJgRIAehHIgyhqIBAAAIAQAkIAWg3IA9AAIAAABIgyB8IAfBLQAGAKAGAAIALAAIAAAtIgkAAQgaAAgGgRIgTgyIgRAvQgGAWgiAAIgEAAgAi0CsIAAgtIAJAAIAAjaIAyAAIAADaIATAAIAAj+IhLAAIAAguICtAAIAAAuIgtAAIAABbIAqAAIAAAsIgqAAIAAB3IAsAAIAAAtgAgHhGIAAguIANAAQAKACAEgQIALgwIA6AAIgFAXIBgAAIAAAvIhsAAIgDAOQgIAYgbAAg");
	this.shape_75.setTransform(867.1,31.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CBF1FF").s().p("AAvCyIjEAAIAAguICyAAQAKACAAgLIAAg/IjaAAIAAguIDaAAIAAgjIiHAAIAAgxICQAAIAzg7IkGAAIAAgxIFXAAIAAAuIhTBiIAAAuIBRAAIAAAyIhRAAIAAA+QAFA3gtAAIgKgBg");
	this.shape_76.setTransform(820.3,31.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CBF1FF").s().p("AgiCPIAAgfIiSAAIAAkWICSAAIAAgLIA6AAIAAALICTAAIAADrQACAvgkgEIhxAAIAAAPQABAKAHgCICUAAIAAAqIiuAAIgGABQgmAAAEgjgAAYA+IBSAAQAEAAACgKIAAg2IhYAAgAh4A+IBWAAIAAhAIhWAAgAAYg0IBYAAIAAhAIhYAAgAh4g0IBWAAIAAhAIhWAAg");
	this.shape_77.setTransform(775.2,32);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CBF1FF").s().p("AiZCvIAAi7IgWAAIAAgqIDEAAIAOgXIBLAAIgLAZIBHAAIAAC/QAAAkg3AAgAhfCEIDCAAQANACgCgJIAAgLIjNAAgAhfBHIDNAAIAAgSIjNAAgAhfAHIDNAAIAAgTIjNAAgAgGhDIhCAAIAAgqIAhAAQALACAAgLIAAg4IA5AAIAABFQAAAnggAAIgDgBgAh4hJIg3AAIAAgtIAbAAQALACADgOIALgmIA+AAIgUBIQgGAYgeAAIgDgBgABdhrIgLg9IA/AAIAEAcQACANAJgCIAQAAIAAAtIg4AAIgDABQgVAAgDgYg");
	this.shape_78.setTransform(728.4,32);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CBF1FF").s().p("ABNC2IhbAAIAAgvIBHAAQAFABAAgGIAAihIhdAAIgZCuQgDAlgegBIhWAAIAAgpIA1AAQARACACgTIAUiYIhcAAIAAgvIBhAAIADgUIA1AAIgDAUICKAAIAADeQACAmgjAAIgDAAgACXCdQgVgCgBgaIgLjBIAqAAIAJCxQgBAIAIgCIAAAmgAiQBmIgfAAIAAglIANAAQAGABAFgMIAOg4IAuAAIgUBOQgEAbgYAAIgFgBgAivhtIAAgxIATAAIAAgUIA4AAIAAAUIDGAAIAAgXIA4AAIAAAXIAUAAIAAAxg");
	this.shape_79.setTransform(683.2,31.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CBF1FF").s().p("AhACxIAAgxIBdAAIAAj4IhJAAIAAg0IDfAAIAAA0IhWAAIAAD4IBWAAIAAAxgAiyCxIAAgxIAgAAQAMABABgLIAUhDIA9AAIgZBkQgHAZgkABgAhrAhQgfABgIgYIgdhGIBCAAIAPAoQAHAMAOAAIAXAAIAAApgAiVhiIgahOIBFAAIARAvQAFAJAPAAIARAAIAAAvIgwAAIgEAAQglAAgIgZg");
	this.shape_80.setTransform(636.7,31.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(15,107,160,0.388)").ss(1,1,1).p("ECWAAAAMkr/AAA");
	this.shape_81.setTransform(960,64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.298)").s().p("EiV/AFAIAAp/MEr/AAAIAAJ/g");
	this.shape_82.setTransform(960,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959,540,1922,1043.6);
// library properties:
lib.properties = {
	id: '397FF11EC6E3D54CB7D87738A5B35DEF',
	width: 1920,
	height: 1080,
	fps: 36,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/super_atlas_.png", id:"super_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['397FF11EC6E3D54CB7D87738A5B35DEF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
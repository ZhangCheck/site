(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.DSSGbg = function() {
	this.initialize(img.DSSGbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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
	this.text4 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 36;
	this.text4.parent = this;
	this.text4.setTransform(210.4,-79.8);

	this.text3 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 36;
	this.text3.parent = this;
	this.text3.setTransform(46.1,-79.8);

	this.text2 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 36;
	this.text2.parent = this;
	this.text2.setTransform(-98,-79.8);

	this.text1 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 36;
	this.text1.parent = this;
	this.text1.setTransform(-237.7,-79.8);

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
	this.text4_1 = new cjs.Text("8947", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text4_1.name = "text4_1";
	this.text4_1.textAlign = "center";
	this.text4_1.lineHeight = 36;
	this.text4_1.parent = this;
	this.text4_1.setTransform(210.4,-79.8);

	this.text3_1 = new cjs.Text("3236", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text3_1.name = "text3_1";
	this.text3_1.textAlign = "center";
	this.text3_1.lineHeight = 36;
	this.text3_1.parent = this;
	this.text3_1.setTransform(46.1,-79.8);

	this.text2_1 = new cjs.Text("9583", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text2_1.name = "text2_1";
	this.text2_1.textAlign = "center";
	this.text2_1.lineHeight = 36;
	this.text2_1.parent = this;
	this.text2_1.setTransform(-98,-79.8);

	this.text1_1 = new cjs.Text("7485", "30px 'FZCuQian-M17S'", "#F3B03A");
	this.text1_1.name = "text1_1";
	this.text1_1.textAlign = "center";
	this.text1_1.lineHeight = 36;
	this.text1_1.parent = this;
	this.text1_1.setTransform(-237.7,-79.8);

	var maskedShapeInstanceList = [this.text4_1,this.text3_1,this.text2_1,this.text1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1_1},{t:this.text2_1},{t:this.text3_1},{t:this.text4_1}]}).wait(25));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape.setTransform(-197.7,67.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BRQAbgcgChFIAAhAICDAAIAAAMIg2AAIgFAMIgFALIAxAAIAABIIgmAAIAAAqQADAVgWgBQgGABgLgBIgCgMIAQAAQAKABgBgJIAAgqIgjAAIAAhIIAXAAQADgFAEgQIABgCIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgSIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgMQALgoAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAHQgLAOgUAZgAA8A1IgIgJIAKgIIAMAOIAVAXIgMAJQgGgJgRgUgAhegeIAJgMIAhAZIgLANQgLgLgUgPgAhWhQIAJgKIAfAaIgKALQgQgQgOgLg");
	this.shape_1.setTransform(-217.6,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_2.setTransform(-237.7,67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBcIgDgOQAKABATAAQAQABgBgRIAAiAIhfAAIAAgPIBuAAIAACPQABAegcgBIgKAAIgMAAIgHAAgAhUBcIAAiSIAPAAIAACSgAg+BDQApgNAAgeIgYAAIAAg1IAZAAQgHgMgKgLIAKgIIAJAKIAMAOIgJAHIAUAAIAQgXIAEgHIAMAHQgEAHgLANIgBADIAZAAIAAA1IgaAAIAAAZQAAAIAIAAIAIAAQAKAAABgJIAAgPIALADIADACIgCAQQgDAOgQABIgPAAQgTABABgVIAAgZIgOAAQAAAmguAPQgDgGgGgEgAggAMIBBAAIAAgdIhBAAgAhJhSIAKgKIAZAbIgLAJIgYgag");
	this.shape_3.setTransform(-257.7,67.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBJIAHAAIAWAAQATACgCgSIAAh3Ig+AAIAAgOIB4AAIAAAOIgqAAIAAB6QABAcgfAAIgeABIgCgQgAhJBHQAIgFgBgOIAAhAIgcAAIAAgOIArAAIAABRIAjgZIADAQIgmAbIgLAKgAhRhNIALgLIAiAgIgNAMQgNgQgTgRg");
	this.shape_4.setTransform(-277.7,67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEBdIAAhpQgIAPgKAOIgGgOIgCgDQAbgnAPg0IAPAEQgIAZgIAVIAACGgAgqBUIAAgNIBGAAQASgyAPg1IAQAFIgUA6IgNAoIAyAAIAAANgAgagZIAOgFQAMAgAOAxIgPAGQgOgzgLgfgAgmgqIAAgOIA8AAQgBgJgJgWIAQgFIALAgIgPAEIBDAAIAAAOg");
	this.shape_5.setTransform(-48,67.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAoAAIgMgMIgKgKIANgIIAWAYIgKAGIAwAAQAMgOALgQIANAIIgJAKIgJAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_6.setTransform(-68,67.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBXIgHgGQAcgUASgZIAOAKQgSAWgdAZIgGgGgAhEBdIAAhpQgJAOgLANIgGgQQAggrAPgwIAOAGQgIAYgMAWIAACFgAAiAuIALgKQAPANAbAaIAHAGIgNALQgTgTgcgbgAgqAfIAAgOIAhAAIAAgyIgZAAIAAgOIAZAAIAAgrIANAAIAAArIApAAIAAgrIAQAAIAAArIAbAAIAAAOIgbAAIAAAyIAiAAIAAAOgAAEARIApAAIAAgyIgpAAg");
	this.shape_7.setTransform(-88.1,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBTQAbgUACgqIAOABQgBALgCAJQALAbASACIAAg6Ig6AAIAAgMICAAAIAAAMIg4AAIAAAWIAwAAIAAAMIgwAAIAAAaIAGAAQANAAAWAAIASAAIgFANIg1AAQgkAAgNgcQgHASgRAQIgLgJgAhcBaIgBgQIAQABQAJABgBgIIAAg4IgYAMIgBgQIAZgKIAAgpIgYAAIAAgNIAYAAIAAgjIAOAAIAAAjIAYAAIAAANIgYAAIAAAjIAWgLIACANIgJAFIgPAHIAABAQACAUgXAAIgQAAgAgTgOIAAhFIBeAAIAABFgAgFgaIBCAAIAAgRIhCAAgAgFg2IBCAAIAAgRIhCAAg");
	this.shape_8.setTransform(-108,67.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BRQAbgcgChFIAAhAICDAAIAAAMIg2AAIgFAMIgFALIAxAAIAABIIgmAAIAAAqQADAVgWgBQgGABgLgBIgCgMIAQAAQAKABgBgJIAAgqIgjAAIAAhIIAXAAQADgFAEgQIABgCIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgSIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgMQALgoAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAHQgLAOgUAZgAA8A1IgIgJIAKgIIAMAOIAVAXIgMAJQgGgJgRgUgAhegeIAJgMIAhAZIgLANQgLgLgUgPgAhWhQIAJgKIAfAaIgKALQgQgQgOgLg");
	this.shape_9.setTransform(-127.9,68);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_10.setTransform(-148.1,67.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_11.setTransform(96.1,67.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBOIAAgDIAJAAIANABQAOABgBgMIAAgjIhHAAIAAgNIBHAAIAAgSIAOAAIAAASIBBAAIAAANIhBAAIAAAlQABAZgYgBIgXAAIgDgNgAhYBKQAegQAXgSIAKAKQgaATgbAQIgKgLgAAcAyIAIgKIA3AgIgJAMQgZgRgdgRgAhdAAQAzgJAfgNQgRgKgQgSQgNAQgQANIgGgFIgFgFQAfgYAVgjIAQADIgIALIgCAEIBbAAIAAANQgUAUgbARQAbAMAxAFIgBABIgHAMQg3gIgcgOQgjAQg2ALIgHgNgAADgdQAZgOASgRIhRAAQATAWATAJg");
	this.shape_12.setTransform(76.1,67.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTBWIgWAAQgBgKgCgGIAYABQAPAAAAgOIAAg/IhWAAIAAgNICLAAIAAgUIhzAAIAAgNIBzAAIAAgUIh3AAIAAgNICGAAIAABCIAeAAIAAANIhWAAIAAAGQAKAPAKAMIAqgbIAJALIgWAOIgSALQASAQAmAJQgFAGgFAIQg2gPgXgmIAAAkQACAcgbAAIgBAAgAhdA5QAggLAwgSIACAOIhNAdgAg/ASIgNgKIAJgKIAIAFIAdASIgJANIgYgQg");
	this.shape_13.setTransform(56.2,68.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhLBNQAHgGgBgLIAAhIIgYAAIAAgOIAnAAIAABaQALgGAOgLIABAQQgXAOgPAMgAgUA7IAAhKIBVAAIAAg0IhYAAIAAgPIBnAAIAABQIhXAAIAAA6QgBARASgCIAqAAQAVABAAgMQADgJACgVIADACIANADIgFAfQgFAVgcgBIgyAAIgFAAQgYAAADgbgAhNhOIAMgLIAdAgIgMALQgMgPgRgRg");
	this.shape_14.setTransform(36.2,67.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBPIgCgEQAYgQAUgZQgXgigFhDIgHAAIAAgOIBUAAIAAANQgKBCgXAkQAQAYAbAOIgFAGIgHAHQgZgSgOgUQgRAWgaASIgHgIgAAsAUQASgiAHg1IgxAAQAEA4AUAfgAgaBXIAAgnIhBALIgCgPIALgBIAFgBIAAh0IgMAAIAAgMIBXAAIAAAMIgKAAIAABqIATgCIAAAMQgIADgLAAIAAAqgAg/ApIAlgGIAAgcIglAAgAg/gEIAlAAIAAgcIglAAgAg/gtIAlAAIAAgdIglAAg");
	this.shape_15.setTransform(16.2,68.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeBRQAwgZAEgxIgrAAIAAgNIAsAAIABgiIAPAAIAAANIgBAVIA2AAIAAANIg1AAQANA2ArASIgMANQgpgYgKgoQgIAmgsAbIgKgMgAhMBYIgCgJIgBgGIAUABQASABAAgVQABgNgDgPQgNATgcATIgJgMQAbgOARgbQgBgHgFgGQgSANgMAHIgJgLQASgJAPgLQgJgMgLgMIAJgIIAVAXQAKgJAKgMIALAIIgXAZQAQAcAAAlQAAAhgfAAgAAxgfIAIgKIAcASIgJALIgbgTgAAcgtIAAgNIgzAAIAAANIgPAAIAAgNIg0AAIAAgOIA0AAIAAgUIAPAAIAAAUIAzAAIAAgUIAOAAIAAAUIA1AAIAAAOIg1AAIAAANg");
	this.shape_16.setTransform(-4,67.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_17.setTransform(277.8,67.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BPQA/ggAFhEIAAgPIAQAAIAAAIIgBAKQANBBA2AcIgMAPQgygjgLgvQgIAzg7AiIgKgOgAheA/QATgcAWguIAOAKQgNAVgbA0gAA1gLQAHgOAIgVIhJAAIgNAbIgFAKQgGgEgIgFQAVgiALgoIAPAEQgFAPgFAOIBUAAIAAANQgJAagIAOQgGgDgIgCgAhYhJIAMgJIAhAqIgMALQgSgagPgSg");
	this.shape_18.setTransform(257.8,68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhZBSQA3gRAJgjIg1AAIAAgNIA4AAIAAgCQABgJAAgJIAQAAIgCAUIBKAAIgBAYIgBANQABAlgmgBIgcAAIgBgGIgCgKIAPAAIAQABQAWADABgYIABgNIAAgLIg+AAQgJAsg9AUIgJgMgAhfgEQAvgGAkgOQgUgNgOgSQgTAVgOALIgKgKQAggZAWgkIAOAHIgGAIIgEAFIBkAAIAAANQgWAXgbAOQAhAMArADIgLAOQgxgFghgPQgjAOg3AKQgDgHgFgGgAADgfQAagNATgRIhTAAQAQASAWAMg");
	this.shape_19.setTransform(237.8,67.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAtA9QgOANgVAMIgIgNQAXgKAKgMQgSgXgGghIgJAAIAABOIAAAOIgOAAIAAisIBdAAIgCAdQACAagfgBIgZAAIgBgIIgCgHIAaABQASABAAgNIAAgOIhAAAIAAA2IBQAAIAAALQgJAjgTAWQAOANAaAKIgKANQgYgMgPgOgAAtApQAPgVAHgZIgsAAQAGAaAQAUgAheBNQAPgRgBgpIAAhpIA0AAIAACYQACATgUAAIgQAAIgDgNIAQAAQAJAAAAgIIAAgqIgbAAQABArgRAWIgLgKgAhDALIAbAAIAAgkIgbAAgAhDgmIAbAAIAAgkIgbAAgAACBJIAAAAgAACgFIAJAAQAGAhASAXQgKAMgXAKg");
	this.shape_20.setTransform(217.9,68.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgIBOIAAibIAQAAIAACbg");
	this.shape_21.setTransform(205,67.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag7BOIAAibIBDAAQAvACAFAsQgBAtg1ABIgvAAIAAA/gAgpAAIAsAAQAlgBABgfQgBgdglgBIgsAAg");
	this.shape_22.setTransform(195.2,67.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA3BOIgUgvIhGAAIgSAvIgTAAIA/ibIASAAIBBCbgAgDgyIgaBBIA6AAIgahBIgDgLIgDALg");
	this.shape_23.setTransform(180.2,67.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhNBWIgKgLQAOgQADgUQAEgUAAgtIAAg9ICZAAIAACTQACAYgdAAIgXABIAAgDIgDgOIALAAIAOABQAPABgBgNIAAghIg4AAIAAA7IgPAAIAAg7Ig2AAQgDAmgUAaIgCgCgAARALIA4AAIAAgjIg4AAgAg0ALIA2AAIAAgjIg1AAIgBAjgAARgmIA4AAIAAgjIg4AAgAgzgmIA1AAIAAgjIg1AAg");
	this.shape_24.setTransform(162.3,68.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguBVIgFgFQAbgZgDg1IAAhUIB0AAIAACUQAAAXgVgBIgYAAIgFAAIgCgPIAbABQANACgCgNIAAiEIhYAAIAABFQAAAjgGASQgFASgSAUIgEgGgAhKA0QAHgHAAgJIAAg4IgVAAIAAgNIAiAAIAABHQALgLAIgHIACAQQgUAQgMANgAAAA7IAAgyIA6AAIAAAygAAOAvIAfAAIAAgaIgfAAgAgHgEIAAgNIAfAAIAAgRIgaAAIAAgNIAaAAIAAgSIANAAIAAASIAbAAIAAANIgbAAIAAARIAgAAIAAANgAg3g4IgVgZIALgJIAPAQIANAOIgMAKIgGgGg");
	this.shape_25.setTransform(142.4,68);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_26.setTransform(277.9,-32.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8DC4D6").s().p("Ag4BPQA/ggAGhDIAAgQIAPAAIAAAIIAAAKQAMBAA2AdIgMAPQgygjgLgvQgIAzg7AiIgKgOgAheA/QATgdAVgtIAPAKQgNAWgaAzgAA0gLQAIgOAIgVIhJAAIgOAbIgEAKQgFgEgKgFQAWgiAMgoIAOAEQgFAPgFAOIBVAAIAAANQgKAagIAOQgFgDgKgCgAhXhJIALgJIAiAqIgNALQgSgagOgSg");
	this.shape_27.setTransform(257.9,-32.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8DC4D6").s().p("AhZBSQA3gRAJgjIg1AAIAAgOIA4AAIAAgBQABgJAAgJIAQAAIgCATIBKAAIgBAZIgBANQABAmgmgCIgcAAIgBgGIgCgKIAPABIAQAAQAWADABgYIABgNIAAgLIg+AAQgJAsg9AUIgJgMgAhfgEQAvgGAkgOQgUgNgOgSQgTAVgOALIgKgKQAggZAWgkIAOAHIgGAIIgEAFIBkAAIAAAOQgWAWgbAOQAhANArACIgLAOQgxgFghgPQgjAOg3AKQgDgHgFgGgAADgfQAagMATgRIhTAAQAQARAWAMg");
	this.shape_28.setTransform(237.8,-32.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8DC4D6").s().p("AAsA9QgOANgUAMIgIgNQAXgKAKgMQgSgXgHghIgIAAIAABOIAAAOIgNAAIAAisIBcAAIgCAdQABAagegBIgYAAIgCgIIgBgHIAYABQATABgBgNIABgOIhAAAIAAA2IBQAAIAAALQgJAjgUAWQAPANAbAKIgMANQgXgMgQgOgAAsApQARgVAGgZIgsAAQAHAaAOAUgAhdBNQAOgRgCgpIAAhpIA1AAIAACYQABATgSAAIgSAAIgCgNIAQAAQAJAAAAgIIAAgqIgbAAQABArgRAWIgKgKgAhDALIAbAAIAAgkIgbAAgAhDgmIAbAAIAAgkIgbAAgAACBJIAAAAgAACgFIAIAAQAHAhASAXQgKAMgXAKg");
	this.shape_29.setTransform(218,-31.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8DC4D6").s().p("AgHBOIAAibIAQAAIAACbg");
	this.shape_30.setTransform(205.1,-32.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8DC4D6").s().p("Ag7BOIAAibIBDAAQAvACAFAsQgBAtg1ABIgvAAIAAA/gAgpAAIAsAAQAlgBABgfQgBgdglgBIgsAAg");
	this.shape_31.setTransform(195.3,-32.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DC4D6").s().p("AA2BOIgTgwIhGAAIgTAwIgTAAIBAibIARAAIBBCbgAgDgyIgZBCIA5AAIgahCIgDgLIgDALg");
	this.shape_32.setTransform(180.3,-32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8DC4D6").s().p("AglBXIgHgGQAcgUATgZIANAKQgSAWgdAYIgGgFgAhDBcIAAhoQgKAOgLAOQgDgNgDgEQAggrAPgvIAPAFQgJAYgMAWIAACEgAAiAuIALgKQAQAOAaAYIAHAHIgNALQgSgUgdgagAgpAfIAAgOIAfAAIAAgzIgYAAIAAgNIAYAAIAAgrIAOAAIAAArIApAAIAAgrIAQAAIAAArIAaAAIAAANIgaAAIAAAzIAiAAIAAAOgAAEARIApAAIAAgzIgpAAg");
	this.shape_33.setTransform(162.8,-32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8DC4D6").s().p("AgvBTQAbgVACgpIAOABQgBALgCAIQALAbASADIAAg6Ig5AAIAAgMIB+AAIAAAMIg3AAIAAAWIAwAAIAAAMIgwAAIAAAaIAHAAQAMABAWgBIASAAIgFANIg1AAQgkAAgNgcQgHASgQAQIgMgJgAhbBaIgCgQIAPABQAKABgBgIIAAg4IgYAMIgBgQIAZgKIAAgpIgYAAIAAgNIAYAAIAAgjIAOAAIAAAjIAYAAIAAANIgYAAIAAAjIAWgMIABAOIgIAEIgPAHIAABAQABAVgWAAIgPAAgAgTgOIAAhGIBdAAIAABGgAgFgZIBCAAIAAgSIhCAAgAgFg2IBCAAIAAgRIhCAAg");
	this.shape_34.setTransform(143,-32.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_35.setTransform(86.1,-32.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8DC4D6").s().p("AgTBWIgWAAQgBgKgCgGIAYABQAPAAAAgOIAAg/IhWAAIAAgNICLAAIAAgUIhzAAIAAgNIBzAAIAAgUIh2AAIAAgNICFAAIAABCIAeAAIAAANIhWAAIAAAGQAKAPALAMIAogbIAKALIgWAOIgSALQASAQAmAJQgFAGgFAIQg2gPgXgmIAAAkQACAcgbAAIgBAAgAhdA5QAggLAwgSIACAOIhNAdgAg/ASIgNgKIAJgKIAIAFIAcASIgJANIgXgQg");
	this.shape_36.setTransform(66.2,-31.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8DC4D6").s().p("AhLBNQAHgGgBgKIAAhJIgYAAIAAgOIAnAAIAABaQALgGAOgMIABARQgXAOgPAMgAgUA7IAAhLIBVAAIAAgzIhYAAIAAgPIBnAAIAABRIhXAAIAAA5QgBARASgCIAqAAQAVABAAgMQADgJACgVIADACIANADIgGAfQgEAVgcgBIgyAAIgFAAQgYAAADgbgAhNhOIAMgLIAdAgIgMALQgMgPgRgRg");
	this.shape_37.setTransform(46.2,-32.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8DC4D6").s().p("AgIBPIgBgEQAYgPAUgaQgXgigFhDIgHAAIAAgOIBUAAIAAAMQgKBDgXAkQAQAYAbAOIgFAGIgHAHQgZgTgOgTQgRAVgaAUIgIgJgAAsAUQASgiAHg1IgxAAQAEA4AUAfgAgaBYIAAgpIhBAMIgCgPIALgBIAFgBIAAhzIgMAAIAAgOIBXAAIAAAOIgKAAIAABqIATgEIAAANQgIADgLAAIAAArgAg/ApIAlgGIAAgcIglAAgAg/gEIAlAAIAAgdIglAAgAg/gtIAlAAIAAgcIglAAg");
	this.shape_38.setTransform(26.2,-31.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8DC4D6").s().p("ABLBbIAAgJIhSAAIAAAJIgOAAIAAiPIAvAAIAAgmIAPAAIAAAmIAwAAIAACPgAApBGIAiAAIAAg0IgiAAgAgHBGIAhAAIAAg0IghAAgAApAFIAiAAIAAgtIgiAAgAgHAFIAhAAIAAgtIghAAgAhUBbIgBgNIgBgDQAGABAJAAQAJABgBgJIAAg0IgWAIIgDgPIANgEIAMgDIAAgqIgWAAIAAgMIAWAAIAAglIAOAAIAAAlIAXAAIAAAMIgXAAIAAAmIAVgHIAAAOIgEABIgRAGIAAA4QACAXgXAAIgOAAg");
	this.shape_39.setTransform(5.5,-32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8DC4D6").s().p("AhDBdIAAhpQgJAPgKAOIgGgOIgBgDQAagnAPg0IAPAEQgHAZgKAVIAACGgAgqBUIAAgNIBFAAQATgyAPg1IAQAFIgUA6IgNAoIAzAAIAAANgAgbgZIAPgFQAMAgAOAxIgPAGQgOgzgMgfgAgmgqIAAgOIA9AAIgKgfIAOgFIAMAgIgPAEIBCAAIAAAOg");
	this.shape_40.setTransform(-68,-32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8DC4D6").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAnAAIgLgMIgKgKIAMgIIAYAYIgKAGIAvAAQAMgOALgQIANAIIgJAKIgJAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_41.setTransform(-88,-32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8DC4D6").s().p("AAdBcIgDgOQAKABATAAQAQAAgBgQIAAiAIhfAAIAAgPIBuAAIAACPQABAegcgBIgKAAIgMABIgHgBgAhUBcIAAiSIAPAAIAACSgAg+BCQApgMAAgeIgYAAIAAg1IAZAAQgHgLgKgMIAKgIIAJAKIAMAOIgJAHIAUAAIAQgXIAEgHIAMAHQgEAHgLANIgBADIAZAAIAAA1IgaAAIAAAYQAAAJAIAAIAIAAQAKAAABgKIAAgOIALADIADACIgCAQQgDAOgQABIgPAAQgTABABgVIAAgZIgOAAQAAAlguAQQgDgGgGgFgAggALIBBAAIAAgcIhBAAgAhJhSIAKgJIAZAaIgLAKIgYgbg");
	this.shape_42.setTransform(-108,-32.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8DC4D6").s().p("AgLBJIAIAAIAWAAQATACgCgSIAAh3Ig9AAIAAgOIB3AAIAAAOIgrAAIAAB6QACAcgfAAIgdABIgEgQgAhJBHQAIgFgBgOIAAhAIgcAAIAAgOIArAAIAABRIAjgZIADAQIgmAbIgKAKgAhRhNIALgLIAiAgIgNAMQgOgQgSgRg");
	this.shape_43.setTransform(-128,-32.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8DC4D6").s().p("AADBaIgHgJQAdgTANgTQgNgVgGgmIgJAOIgGgIIgDgEQAVgfAJgvIAOABQgDASgGARIA5AAIAAANIgMAAQgFA3gVAgQAOASAbAPQgHAHgDAGQgZgPgOgSQgNAPgdAVgAAdglQAFArANAYQAOgYAFgxIgjAAIgCAGgAhcBTIgDgEQAbgHAUgJIgegOIgEgCQAGgIAGgLIgVAAIAAgNIAcAAIAGgIIACgFIAOADIgGAKIAvAAQgCAfgUAPIAHADIAOAFIgIAMIgNgGIgMgGQgWAOggAIQAAgCgEgGgAg7AjIgFAIIAdAMQASgNACgOIgoAAIgEAHgAhdgEQAbgNARgTIgoAAIAAgMIAsAAIAAgrIAOAAIAAArIAmAAIAAAMIgmAAIAAARIAHgIQALAHAQANIgIAJIgGgEIgUgQIAAATIgOAAIAAgbQgOARgaAPIgIgKgAgYg/QALgJAMgMIAJAKQgJAJgOAMgAhVhMIAJgIIAWAVIgLAJIgUgWg");
	this.shape_44.setTransform(-197.7,-32.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8DC4D6").s().p("Ag/BRQAbgcgChFIAAg/ICDAAIAAALIg2AAIgFALIgFAMIAxAAIAABIIgmAAIAAApQADAXgWgBQgGABgLgBIgCgNIAQAAQAKABgBgKIAAgpIgjAAIAAhIIAXAAQADgFAEgRIABgBIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgTIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgLQALgpAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAIQgLANgUAZgAA8A1IgIgJIAKgHIAMANIAVAXIgMAJQgGgJgRgUgAhegfIAJgLIAhAaIgLAMQgLgLgUgQgAhWhPIAJgLIAfAaIgKALQgQgQgOgKg");
	this.shape_45.setTransform(-217.6,-32.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8DC4D6").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_46.setTransform(-237.7,-32.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8DC4D6").s().p("AACBdIAAhcIgqAAIAABOIgOAAIAAhIQgMAPgPAQIgGgGIgFgHQAmgiAVgpIg0AAIAAgOIA7AAIALgcIAPACIgHATIgDAHIBnAAIAAAOIhuAAQgKAUgNASIAqAAIAAgdIAPAAIAAAdIA7AAIAAA+QABAXgZABIgXABIgCgIIgBgGIAIAAIAOAAQAOABgBgNIAAgwIgsAAIAABcg");
	this.shape_47.setTransform(-257.8,-32.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8DC4D6").s().p("Ag9BQQA0gNAQgLQgXgVgMggQgRAtgmAlQgFgGgFgGQAvgtAPg+Ig0AAIAAgPQAJgUAFgQIAQAEIgHAQIgHARIAoAAIABgEQADgOAEgaIAQADIgHAiIgBAHIBnAAIAAAOIhqAAIgEAMIgEALIBdAAIAAANQgMAfgbAXQAUANAqAHIgJAOQAAgBAAAAQAAAAgBAAQAAAAAAABQgBAAgBACQgkgKgbgRQgWANgvAPQgEgHgHgGgAATAwQAagVAIgZIhDAAQALAeAWAQgAA3g3QgUgRgKgGIAIgLQAVANAPALIgKANIgEgDg");
	this.shape_48.setTransform(-277.7,-32.3);

	this.text5 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#09E9FF");
	this.text5.name = "text5";
	this.text5.textAlign = "center";
	this.text5.lineHeight = 36;
	this.text5.parent = this;
	this.text5.setTransform(-237.7,17.7);

	this.text6 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#09E9FF");
	this.text6.name = "text6";
	this.text6.textAlign = "center";
	this.text6.lineHeight = 36;
	this.text6.parent = this;
	this.text6.setTransform(-98,17.7);

	this.text7 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#09E9FF");
	this.text7.name = "text7";
	this.text7.textAlign = "center";
	this.text7.lineHeight = 36;
	this.text7.parent = this;
	this.text7.setTransform(46.1,17.7);

	this.text8 = new cjs.Text("3869", "30px 'FZCuQian-M17S'", "#09E9FF");
	this.text8.name = "text8";
	this.text8.textAlign = "center";
	this.text8.lineHeight = 36;
	this.text8.parent = this;
	this.text8.setTransform(210.4,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text8},{t:this.text7},{t:this.text6},{t:this.text5},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.3,-81.8,582.7,163.7);


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


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function getSpeed(){
			return Math.random()*-4-0.5;
		}
		for(var i=1;i<=9;i++){
			var text = this['text'+i];
			text.speed = getSpeed();
		}
		var that = this;
		this.addEventListener('tick',function(e){
			for(var i=1;i<=9;i++){
				var text = that['text'+i];
				text.x += text.speed;
				//console.log("x:",text.x+text.getBounds().width);
				if(text.x+text.getBounds().width<-216){
					text.x = 220;
					text.speed = getSpeed();
				}
			}
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgguAYsMAAAgxXMBBdAAAMAAAAxXg");
	mask.setTransform(-0.3,-16);

	// Symbol 10
	this.text9 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#76E8FD");
	this.text9.name = "text9";
	this.text9.textAlign = "center";
	this.text9.lineHeight = 23;
	this.text9.lineWidth = 120;
	this.text9.parent = this;
	this.text9.setTransform(-53.4,109.2);

	var maskedShapeInstanceList = [this.text9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text9).wait(1));

	// Symbol 9
	this.text8 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#00A6B0");
	this.text8.name = "text8";
	this.text8.textAlign = "center";
	this.text8.lineHeight = 23;
	this.text8.lineWidth = 120;
	this.text8.parent = this;
	this.text8.setTransform(82.6,64.1);

	var maskedShapeInstanceList = [this.text8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text8).wait(1));

	// Symbol 8
	this.text7 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#7BA8B2");
	this.text7.name = "text7";
	this.text7.textAlign = "center";
	this.text7.lineHeight = 23;
	this.text7.lineWidth = 120;
	this.text7.parent = this;
	this.text7.setTransform(-82.4,38.2);

	var maskedShapeInstanceList = [this.text7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text7).wait(1));

	// Symbol 7
	this.text6 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#D89300");
	this.text6.name = "text6";
	this.text6.textAlign = "center";
	this.text6.lineHeight = 23;
	this.text6.lineWidth = 120;
	this.text6.parent = this;
	this.text6.setTransform(133.6,-5.9);

	var maskedShapeInstanceList = [this.text6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text6).wait(1));

	// Symbol 6
	this.text5 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#DAA548");
	this.text5.name = "text5";
	this.text5.textAlign = "center";
	this.text5.lineHeight = 23;
	this.text5.lineWidth = 120;
	this.text5.parent = this;
	this.text5.setTransform(-140.5,-5.9);

	var maskedShapeInstanceList = [this.text5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text5).wait(1));

	// Symbol 5
	this.text4 = new cjs.Text("发布资源数", "25px 'FZLanTingHeiS-B-GB'", "#FEE300");
	this.text4.name = "text4";
	this.text4.textAlign = "center";
	this.text4.lineHeight = 31;
	this.text4.lineWidth = 146;
	this.text4.parent = this;
	this.text4.setTransform(-15.5,-37.3);

	var maskedShapeInstanceList = [this.text4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text4).wait(1));

	// Symbol 4
	this.text3 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 23;
	this.text3.lineWidth = 120;
	this.text3.parent = this;
	this.text3.setTransform(140.5,-74.3);

	var maskedShapeInstanceList = [this.text3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(1));

	// Symbol 3
	this.text2 = new cjs.Text("发布资源数", "23px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text2.name = "text2";
	this.text2.textAlign = "center";
	this.text2.lineHeight = 28;
	this.text2.lineWidth = 120;
	this.text2.parent = this;
	this.text2.setTransform(-96.4,-96.2);

	var maskedShapeInstanceList = [this.text2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// Symbol 1
	this.text1 = new cjs.Text("发布资源数", "18px 'FZLanTingHeiS-B-GB'", "#00EDD9");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 23;
	this.text1.lineWidth = 164;
	this.text1.parent = this;
	this.text1.setTransform(40.4,-137.8);

	var maskedShapeInstanceList = [this.text1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-202.5,-141.8,405,276), null);


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
	this.instance.setTransform(0.5,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.cornor("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(209.9,244.9,1,1,180,0,0,-9.5,-5.5);

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
	this.shape_7.graphics.f().s("#00B4E8").ss(1,1,1).p("AfZ85QBbAAAABbIAADXIAACdIAAUYIAAUdIAAJvMhAMAAAQhbAAAAhbIAA8xIAA21IAAkyg");
	this.shape_7.setTransform(0,60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAkxMBAMAAAQBbAAAABbIAADWg");
	this.shape_8.setTransform(0,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-126,422,372);


(lib.frame_l2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("874", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(195,115.9);

	this.text_1 = new cjs.Text("1375", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 60;
	this.text_1.parent = this;
	this.text_1.setTransform(195,86.3);

	this.text_2 = new cjs.Text("279", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 23;
	this.text_2.lineWidth = 42;
	this.text_2.parent = this;
	this.text_2.setTransform(195,55.9);

	this.text_3 = new cjs.Text("474", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 23;
	this.text_3.lineWidth = 42;
	this.text_3.parent = this;
	this.text_3.setTransform(195,26.4);

	this.text_4 = new cjs.Text("1576", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 23;
	this.text_4.lineWidth = 64;
	this.text_4.parent = this;
	this.text_4.setTransform(195,-4.1);

	this.text_5 = new cjs.Text("374", "19px 'FZCuQian-M17S'", "#FEB300");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 23;
	this.text_5.lineWidth = 42;
	this.text_5.parent = this;
	this.text_5.setTransform(195,-33.6);

	this.tx1 = new cjs.Text("1378", "19px 'FZCuQian-M17S'", "#FEB300");
	this.tx1.name = "tx1";
	this.tx1.textAlign = "right";
	this.tx1.lineHeight = 23;
	this.tx1.lineWidth = 52;
	this.tx1.parent = this;
	this.tx1.setTransform(195,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tx1},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape.setTransform(195,158.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_1.setTransform(185.3,158.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_2.setTransform(175.5,158.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#97E5FF").s().p("AgpAEQABhDAsAAQAbABAIAbIgMAEQgFgWgTABQgeAAAAA0QAKgRAVgBQAjACADAmQgDAnglADQgrAAAAg8gAgbAPQABAmAcABQAYgBABgeQAAgdgZgBQgXACgGAUg");
	this.shape_3.setTransform(165.7,158.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_4.setTransform(142.7,158.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_5.setTransform(132.9,158.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_6.setTransform(123.2,158.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97E5FF").s().p("AgpAeIAOgFQAEAbAXAAQAbgBABgeQgBgcgagCQgTABgIANIgJgCIAHhBIBAAAIAAANIg1AAIgEAlQALgJANAAQAkACACAnQgBAqgnABQgiAAgIghg");
	this.shape_7.setTransform(113.5,158.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_8.setTransform(90.4,158.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_9.setTransform(80.7,158.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_10.setTransform(70.9,158.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97E5FF").s().p("AAOA/IAAgeIg5AAIAAgIIA7hXIAKAAIAABUIASAAIAAALIgSAAIAAAegAANgnIgCADQgKANgdAtIAqAAIAAhAIgBADg");
	this.shape_11.setTransform(60.9,158.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_12.setTransform(38.1,158.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_13.setTransform(28.3,158.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_14.setTransform(18.6,158.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#97E5FF").s().p("AgpAfIAOgEQAFAaAWAAQAbAAAAgaQgBgXgagBIgLAAIAAgKIAGAAQAZgBACgXQgBgUgVgBQgTABgFAXIgOgEQAIgfAeAAQAjABACAfQAAAVgWAHQAZAHACAYQgCAigoACQghAAgIghg");
	this.shape_15.setTransform(8.8,158.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_16.setTransform(-14.2,158.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_17.setTransform(-23.9,158.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_18.setTransform(-33.7,158.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#97E5FF").s().p("AgoA/IAAgIQAMgZAbgUQAcgUgBgRQAAgWgagBQgSABgHAXIgNgGQAMgfAdABQAjABADAgQABAZghAVQgZATgHAQIBAAAIAAALg");
	this.shape_19.setTransform(-43.4,158.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_20.setTransform(-66.3,158.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_21.setTransform(-76,158.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_22.setTransform(-85.8,158.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#97E5FF").s().p("AAKA/IAAhjQgMAMgUAIIAAgNQAcgNAIgUIAJAAIAAB9g");
	this.shape_23.setTransform(-96.1,158.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#97E5FF").s().p("AgoABQAAg/AogBQApABAAA/QAAA+goABQgpAAAAg/gAAbABQAAg2gbABQgZACgBAzQAAA1AaAAQAbAAAAg1g");
	this.shape_24.setTransform(-114.2,158.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_25.setTransform(-132.1,129.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_26.setTransform(-147.1,129.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrBGIAAgeIgYAEIgCgKQAOgCAMgBIAAgVIgXAAIAAgJQAHgSAFgUIgNAAIAAgJIAPAAIAGgXIAKADIgCAKIgDAKIAXAAIAAAJIgaAAIgMAmIANAAIAAgZIAKAAIAAAZIAOAAIAAAJIgOAAIAAATIAPgBIAAAEIgBAFIgOACIAAAfgAgPBFIAAhkIAXAAIAAgUIgbAAIAAgJIBZAAIAAAJIgbAAIAAAUIAXAAIAABRQABARgSAAIgRABIgDgLIASAAQALACgBgKIAAgVIgIgMIgIgLQABgLAAgPIAPAAIAAAxIAAgxIgPAAQAAAPgBALIAIALIAIAMIgIAGIgEgGIgHgMQgEAOgMAQIgHgHQASgVAAgnIgRAAIgBAUIANAOIgGAIIgEgFIgFgHQgDAOgLATIgGgHIAAAigAgHAhQAOgUAAgiIgOAAgAARgfIAQAAIAAgUIgQAAIAAAUg");
	this.shape_27.setTransform(-162.2,129.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAABGIAAgdIhDAAIAAgLIBDAAIAAgYIgzAAIAAgJQAMgQAKgRIghAAIAAgKIAmAAIAHgMIAGgLIAKADIgKAUIBJAAIAAAKIhPAAIgVAiIAmAAIAAgcIALAAIAAAcIApAAIAAAIIgpAAIAAAYIA6AAIAAALIg6AAIAAAdg");
	this.shape_28.setTransform(-177.1,129.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_29.setTransform(-132.1,98.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_30.setTransform(-147.1,98.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag9BCIAAiDIB7AAIAACCIgLAAIAAgGIhlAAIAAAHgAgyAxIBlAAIAAhoIhlAAgAgsAiIAAgJIAoAAIAAgbIgjAAIAAgKIAjAAIAAgTIglAAIAAgJIBTAAIAAAJIglAAIAAATIAjAAIAAAKIgjAAIAAAbIAnAAIAAAJgAANAGIAIgGIANAPIgJAGIgMgPg");
	this.shape_31.setTransform(-162.1,99.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAwBDIAAgEIhqAAIAAgzIALAAIAAApIAqAAIAAg3IgxAAIAAgzIALAAIAAAoIAmAAIAAg1IAKAAIAAA1IAnAAIAAgoIALAAIAAAzIgyAAIAAA3IArAAIAAgpIALAAIAAA3g");
	this.shape_32.setTransform(-177.1,98.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_33.setTransform(-132.1,68.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_34.setTransform(-147.1,68.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AANBFIAAg2QgQAdgbARIgHgIQAcgPANgYIglAAIAAgJIAuAAIAAgPIAKAAIAAAPIAvAAIAAAJIgmAAQAOAYAZAMIgGAIQgdgPgNgcIAAA2gAg1BFIAAhNQgGAKgHAJIgEgLQAUgdAKgnIAKADQgGASgGARIAABjgAgUgOIAAgwIBOAAIAAAwgAgKgYIA5AAIAAgcIg5AAg");
	this.shape_35.setTransform(-162.1,68.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgvBFIAAg9QgJAKgJAHQgBgHgDgFQAXgRAOgZIgjAAIAAgKIAuAAIAAALQgGAMgIALIAABKgAgVBAIAAgLIAnAAIAAhEIggAAIAAgLIAgAAIAAgpIAMAAIAAApIAkAAIAAALIgkAAIAABEIAoAAIAAALgAggAFIAHgGIAJAJIAIAJIgIAIIgQgUgAgyg/IAKgFIAKAUIgLAFIgJgUg");
	this.shape_36.setTransform(-177.2,68.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_37.setTransform(-132.1,37.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_38.setTransform(-147.1,38);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrBGIAAgeIgYAEIgCgKQAOgCAMgBIAAgVIgXAAIAAgJQAHgSAFgUIgNAAIAAgJIAPAAIAGgXIAKADIgCAKIgDAKIAXAAIAAAJIgaAAIgMAmIANAAIAAgZIAKAAIAAAZIAOAAIAAAJIgOAAIAAATIAPgBIAAAEIgBAFIgOACIAAAfgAgPBFIAAhkIAXAAIAAgUIgbAAIAAgJIBZAAIAAAJIgbAAIAAAUIAXAAIAABRQABARgSAAIgRABIgDgLIASAAQALACgBgKIAAgVIgIgMIgIgLQABgLAAgPIAPAAIAAAxIAAgxIgPAAQAAAPgBALIAIALIAIAMIgIAGIgEgGIgHgMQgEAOgMAQIgHgHQASgVAAgnIgRAAIgBAUIANAOIgGAIIgEgFIgFgHQgDAOgLATIgGgHIAAAigAgHAhQAOgUAAgiIgOAAgAARgfIAQAAIAAgUIgQAAIAAAUg");
	this.shape_39.setTransform(-162.2,38);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAABGIAAgdIhDAAIAAgLIBDAAIAAgYIgzAAIAAgJQAMgQAKgRIghAAIAAgKIAmAAIAHgMIAGgLIAKADIgKAUIBJAAIAAAKIhPAAIgVAiIAmAAIAAgcIALAAIAAAcIApAAIAAAIIgpAAIAAAYIA6AAIAAALIg6AAIAAAdg");
	this.shape_40.setTransform(-177.1,38);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_41.setTransform(-132.1,7.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_42.setTransform(-147.1,7.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAtA7IAAgNIhZAAIAAANIgMAAIAAh2IBxAAIAAB2gAgsAkIBZAAIAAhTIhZAAg");
	this.shape_43.setTransform(-162.1,8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhAA+IgFgGQA/giADhZIALAAIgDAaQARBIAwAXIgEAFIgEAHQgugcgQg5QgMA5gwAeIgEgGg");
	this.shape_44.setTransform(-177.1,7.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_45.setTransform(-132.1,-23.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_46.setTransform(-147.1,-23);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANBFIAAg2QgQAegbAPIgHgIQAcgOANgYIglAAIAAgKIAuAAIAAgOIAKAAIAAAOIAvAAIAAAKIgmAAQAOAYAZALIgGAJQgdgPgNgcIAAA2gAg1BFIAAhNQgGAKgHAKIgEgMQAUgdAKgnIAKADQgGASgGAQIAABkgAgUgNIAAgxIBOAAIAAAxgAgKgXIA5AAIAAgdIg5AAg");
	this.shape_47.setTransform(-162.1,-22.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgvBFIAAg9QgJAKgJAHQgBgHgDgFQAXgSAOgYIgjAAIAAgKIAuAAIAAAKQgGANgIAMIAABJgAgVBAIAAgLIAnAAIAAhDIggAAIAAgLIAgAAIAAgqIAMAAIAAAqIAkAAIAAALIgkAAIAABDIAoAAIAAALgAggAEIAHgFIAJAIIAIAKIgIAIIgQgVgAgyg/IAKgFIAKAUIgLAGIgJgVg");
	this.shape_48.setTransform(-177.2,-22.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgkAxIAAgWIAKAAIAAAVQgBALANgBIAcAAQANAAABgHIACgKIABgFIAKAEIgBAIIgCAGQgDAOgTAAIggAAIgCAAQgTAAABgTgAhHA5QAIgLAGgTIAKAEIgEALIgJAUgAArAgIAIgGQALALAKANIgJAGQgKgNgKgLgAgMAbIAIgGIASATIgIAHIgSgUgAgzATIAAhIIAjAAIABgEQACgDABgHIAMACIgFAMIA3AAIAABIgAgoAKIBQAAIAAgMIhQAAgAgogKIBQAAIAAgNIhQAAgAgogfIBQAAIAAgNIhQAAg");
	this.shape_49.setTransform(-132.1,-53.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAxBGIAAgIIg5AAIAAAIIgLAAIAAgzIBQAAIAAAzgAgIA1IA5AAIAAgYIg5AAgAgzBGIAAhQQgHAMgHAJIgFgLQAVgeALgmIALADIgCAFIgLAdIAABlgAgUAGIAAgJIBSAAIAAAJgAgUgQIAAgKIBSAAIAAAKgAgdgnIAAgKIAuAAIgHgPIAJgFIAFAIIAEAJIgHADIAyAAIAAAKg");
	this.shape_50.setTransform(-147.1,-53.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgrBGIAAgeIgYAEIgCgKQAOgCAMgBIAAgVIgXAAIAAgJQAHgSAFgUIgNAAIAAgJIAPAAIAGgXIAKADIgCAKIgDAKIAXAAIAAAJIgaAAIgMAmIANAAIAAgZIAKAAIAAAZIAOAAIAAAJIgOAAIAAATIAPgBIAAAEIgBAFIgOACIAAAfgAgPBFIAAhkIAXAAIAAgUIgbAAIAAgJIBZAAIAAAJIgbAAIAAAUIAXAAIAABRQABARgSAAIgRABIgDgLIASAAQALACgBgKIAAgVIAAgxIgPAAQAAAPgBALIAIALIAIAMIgIAGIgEgGIgHgMQgEAOgMAQIgHgHQASgVAAgnIgRAAIgBAUIANAOIgGAIIgEgFIgFgHQgDAOgLATIgGgHIAAAigAgHAhQAOgUAAgiIgOAAgAARgfIAQAAIAAgUIgQAAIAAAUgAA5AcIAAAAgAAxAQIgIgLQABgLAAgPIAPAAIAAAxIgIgMg");
	this.shape_51.setTransform(-162.2,-53.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAABGIAAgdIhDAAIAAgLIBDAAIAAgYIgzAAIAAgJQAMgQAKgRIghAAIAAgKIAmAAIAHgMIAGgLIAKADIgKAUIBJAAIAAAKIhPAAIgVAiIAmAAIAAgcIALAAIAAAcIApAAIAAAIIgpAAIAAAYIA6AAIAAALIg6AAIAAAdg");
	this.shape_52.setTransform(-177.1,-53.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-85,0,85,0).s().p("AtRA8IAAh3IaFAAQANAAAIAIQAJAJAAANIAAA6QAAAOgJAIQgJAJgMAAg");
	this.shape_53.setTransform(-33,-53.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-60,0,60,0).s().p("ApXA8IAAh3ISRAAQAMAAAJAJQAJAIAAANIAAA7QAAANgJAIQgJAJgMAAg");
	this.shape_54.setTransform(-58,-23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-110,0,110,0).s().p("AxLA8IAAh3MAh5AAAQANAAAJAIQAIAKAAAMIAAA7QAAAMgIAJQgJAJgNAAg");
	this.shape_55.setTransform(-8,6.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-85,0,85,0).s().p("AtRA8IAAh3IaFAAQANAAAIAIQAJAJAAANIAAA7QAAANgJAIQgJAJgMAAg");
	this.shape_56.setTransform(-33,36.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-65,0,65,0).s().p("AqJA8IAAh3IT1AAQANAAAJAJQAIAJAAAMIAAA7QAAANgIAIQgJAJgNAAg");
	this.shape_57.setTransform(-53,67.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-80,0,80,0).s().p("AsfA8IAAh3IYhAAQANAAAJAJQAIAJAAAMIAAA7QAAANgIAIQgKAJgMAAg");
	this.shape_58.setTransform(-38,126.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#179CFF","#7AFCFC"],[0,1],-105,0,105,0).s().p("AwZA8IAAh3MAgVAAAQANAAAIAIQAJAKAAAMIAAA7QAAAMgJAJQgJAJgMAAg");
	this.shape_59.setTransform(-13,97.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#005292").s().p("AgEQ4MAAAghvIAJAAMAAAAhvg");
	this.shape_60.setTransform(-118.5,40.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8C8C8C").s().p("A4/AFIAAgJMAx/AAAIAAAJg");
	this.shape_61.setTransform(42,147.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_62.setTransform(-70.5,43.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_63.setTransform(-24.5,43.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_64.setTransform(21.5,43.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_65.setTransform(67.5,43.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_66.setTransform(113.5,43.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#005292").s().p("AgEQLMAAAggVIAJAAMAAAAgVg");
	this.shape_67.setTransform(159.5,43.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_68.setTransform(5.5,-22.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_69.setTransform(5.5,127.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_70.setTransform(5.5,97.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_71.setTransform(5.5,67.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_72.setTransform(5.5,37.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_73.setTransform(5.5,7.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#031523").s().p("A+sCCIAAkDMA9ZAAAIAAEDg");
	this.shape_74.setTransform(5.5,-52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance = new lib.cornor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(209.9,178.9,1,1,180,0,0,-9.5,-5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape_75.setTransform(-200.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgDBZIAAgYIAtAAQAGAAAAgIIAAhLIgDAAIhEAAIAAgXIBwAAIAAAXIgIAAIgDAAIAABWQAAAUgbABgAhKBYIAAhUIgNAAIAAgaIAJAAQADAAACgDIABgBIAIgPIAkAAIgPAhIAABggAhAgsIgYAAIAAgWIAPAAQAHAAADgJIAGgOIAiAAIgQAiQgFALgRAAIgDAAgAgVg+IAAgWIBtAAIAAAWg");
	this.shape_76.setTransform(-39,-109);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAoBZIAAiwIAZAAIAAALIAbAAIAAAWIgbAAIAAArIAaAAIAAATIgaAAIAAAnIAaAAIAAAUIgaAAIAAAWgAAGBZIAAgVIgWAAIAAgWIAWAAIAAgmIgWAAIAAgVIAWAAIAAgpIgVAAIAAgWIAVAAIAAgMIAaAAIAACxgAg0BXIghAAIAAgVIAXAAQAFABAAgHIAAgmIgHAVQgFALgIgBIgOAAIAAgZIAEAAQADABACgFIAZg5IAAgTIghAAIAAgWIAhAAIAAgOIAaAAIAAAPIAHAAIAAAVIgHAAIAAANIAHAAIAAAWIgIAAIAABXQABARgTAAIgCAAg");
	this.shape_77.setTransform(-59.1,-108.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_78.setTransform(-79,-108.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhXBZIAAgUIAcAAQAHABAHgFIAggNIAAgUIAbAAIAAATIAhAOQAIADAEAAIAeAAIAAAUIgqAAQgJAAgIgDIgegOIgfAOQgLAEgGAAgAA8A3IAAgdIh3AAIAAAdIgbAAIAAgzICtAAIAAAzgAApgLIgJgXIgJAVQgDALgKgCIgmAAIAAgUIAXAAQAFABABgFIAMgbIAbAAIgDAJIAQAAIAJASQAAAFAGgBIATAAIAAAVIghAAIgCAAQgHAAgEgIgAhCgEIgWAAIAAgUIAOAAQAFACABgFIAGgOIAYAAIgLAbQgCAKgLAAIgEAAgABCgrIAAgSIg8AAIgCAEQgBAFgGgBIgYAAIAAgUIAJAAQAEAAAAgEIADgLIAZAAIgCAGIBMAAIAAAngAhOg+IgKgaIAbAAIADAKQACAFAFAAIAQAAIAAAVIgbAAIgDAAQgLAAgCgKg");
	this.shape_79.setTransform(-99.2,-108.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgSBZQgLAAgBgLIgGgcIAaAAIADARQABAFAFgCIAMAAIAAATgAhZBZIAAgTIAKAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBABAAIACgSIAbAAIgHAcQgDALgNAAgAARBOIgHgcIAZAAIAEAQQABAEAEgBIAHAAIAAATIgXAAIgBABQgIAAgCgLgAA5BNIgGgbIAZAAIAEAQQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAIAHAAIAAATIgTAAIgCABQgKAAgBgMgAgtAtIgiAAIAAgVIASAAQAEABAAgEIAAgPIgFAIQgDAGgJgBIgPAAIAAgTIAIAAQADABACgDIATgjIAAgOIggAAIAAgYIAgAAIAAgMIAbAAIAAAMIAGAAIAAAWIgGAAIAAALIAGAAIAAAWIgGAAIAAAyQAAAPgNAAIgCAAgAAJAtIgcAAIAAgVIAQAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgBIAAgEIgSg7IAXAAIAEAQIAGgaIgiAAIAAgZIAkAAIADgNIAaAAIgCANIAlAAIAABeQAAABABABQAAABAAAAQAAABABAAQAAAAABAAIAFAAIAAAWIgVAAQgMABABgSIAAhOIgRAAIgLA0IAVAAIAAAWIgXAAIgEAOQgBAIgMAAIgBAAg");
	this.shape_80.setTransform(-118.7,-109);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgaBZIAAgFIg/AAIAAgSIAIAAIAAg8IgGAAIAAgPICwAAIAAAPIhZAAIAABTgAg1BCIAaAAIAAgHIgaAAgAg1AoIAaAAIAAgIIgaAAgAg1APIAaAAIAAgJIgaAAgAA/BVQgGAAgGgGIgGgFIgGAFQgEAEgJABIgVAAIAAgTIAIAAQAHAAADgBIAFgGIgQgMIABgDIAeAAIAIgJIgtAAIAAgTIBRAAIAAASIgXAZIAHAFQACACAHAAIAJAAIAAAUgABAgQIiQAAIAAhIICiAAIAAA1QABATgQAAIgDAAgAgzgjIBkAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAgDIhnAAgAgzg9IBnAAIAAgHIhnAAg");
	this.shape_81.setTransform(-139,-108.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_82.setTransform(-159,-108.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgWICuAAIAAAWIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBMAAIAAAXgAA4gxIgLgSIhVAAIgMASQgDAFgLAAIgVAAIAAgXIAJAAQAGAAAEgFIALgRIB4AAIALASQAEAGAHAAIAGAAIAAAWIgTAAIgEAAQgJAAgDgGg");
	this.shape_83.setTransform(-178.9,-108.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#00405B").ss(1,1,1).p("EggzAAAMBBnAAA");
	this.shape_84.setTransform(0,-94.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#00B4E8").ss(1,1,1).p("EggzAWVMAAAgpSIAAkyMBAMAAAQBbAAAABbIAADXIAACdIAAcLIAAMFMhAMAAAQhbAAAAhbg");
	this.shape_85.setTransform(0,27);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAkxMBAMAAAQBbAAAABbIAADWg");
	this.shape_86.setTransform(0,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-126,422,306);


(lib.frame_l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape.setTransform(-176,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_1.setTransform(-176,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIAZAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_2.setTransform(-176,47.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_3.setTransform(-164.6,62.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_4.setTransform(-164.6,54.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyANQgFAAgEgEQgDgEAAgFQAAgEADgEQAEgEAFAAIBlAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAg");
	this.shape_5.setTransform(-164.6,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.9).p("ADBAAQAABQg4A5Qg5A4hQAAQhPAAg5g4Qg4g5AAhQQAAhPA4g5QA5g4BPAAQBQAAA5A4QA4A5AABPg");
	this.shape_6.setTransform(-168.4,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBpIAAg4IAKgNIABgBIBchwIitBVIA/AUIgMAPIhOgYIgDgCIgCgDQgCgDACgEQABgDADgCIDnhyQADgBAEABQADABACADIABAEIgBACIggCwQgBAIgIgBIgDAAIhUgbIAAAzQAAADgCADQgDACgEAAQgIAAAAgIgAAIAoIBEAVIAZiFg");
	this.shape_7.setTransform(45.4,55.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.9).p("ADBAAQAABQg4A5Qg5A4hQAAQhPAAg5g4Qg4g5AAhQQAAhPA4g5QA5g4BPAAQBQAAA5A4QA4A5AABPg");
	this.shape_8.setTransform(47.2,54.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhvB4QgEAAgDgDQgCgCAAgEQAAgEACgDQADgDAEAAIDfAAQAJAAAAAKQAAAJgJAAgAgGAtQgDgDAAgDIAAh+IgRARQgDADgEAAQgGAAgCgGQgCgGAEgEIAgghIAEgCQAGgCAEAEIAhAhQAFAGgFAHQgGAGgIgGIgRgSIAAB/QAAADgDADQgDADgDAAQgDAAgDgDg");
	this.shape_9.setTransform(46.4,-41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhjCjQgjgUgZgfQgYgfgLgnQgKguAHgqQAGghARggQAcgwAvgcQAEgCAGABQAFACADAEQACAFgBAFQgCAFgEADQgrAZgXApQgkA/AUBFQATBGBAAkQA+AkBGgUQBFgTAkg/QAkhAgUhFQgThGhAgjQgEgDgCgFQgBgFACgFQADgEAFgCQAGgBAEACQBJApAWBRQAXBPgqBJQgpBJhQAWQgcAIgbAAQgyAAgvgbg");
	this.shape_10.setTransform(46.4,-38.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiIAyQgEgDAAgGQAAgFAEgEQAEgEAFAAIDegCIg+g5QgEgDAAgGQAAgFADgEQAEgEAFAAQAGAAAEADIBVBQQAIAGgFAIQgCAIgJAAIj/ACQgFAAgEgEg");
	this.shape_11.setTransform(-173.6,-40.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhJC+Qg2gUgigqQgEgDABgGQABgFAEgEQAEgDAFABQAFAAAEAEQAeAlAuARQBEAYBBgfQBCgfAYhEQAMghgBgiQgCgjgPgfQgfhChEgYQhEgZhCAgQhBAfgYBEQgCAFgFACQgFADgFgCQgFgCgCgFQgCgFABgFQAchOBMgkQBMgkBNAdQAmANAeAbQAdAbARAkQASAlACAoQACAngOAlQgOAmgaAeQgbAdglARQgsASgqAAQgiAAghgLg");
	this.shape_12.setTransform(-166.8,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDD100").s().p("AhbBhIAAgNICBAAQALAAgCgKIAAhDQACgJgLAAIhjAAQgbAAgFAEIAChiIC2AAIAAANIiHAAIgBBEIBiAAQAoABABAhIAAAmQABAogrAAg");
	this.shape_13.setTransform(142,75.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDD100").s().p("AhUBhIAAgMIBvAAQAKAAAAgLIAAg+QABgIgLAAIhIAAIAAgMIBIAAQALAAgBgJIAAg4QABgLgLABIhvAAIAAgNIB9AAQAtgBgBAoIAAAYQADAdgpABIAAABQApABgDAdIAAAeQABAngtAAg");
	this.shape_14.setTransform(122.4,75.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDD100").s().p("AhYBhIAAgNIB9AAQALAAAAgLIAAhHQgIAOgQACIhRAAQgjgBgBghIAAgsQABgiAjgCIBzAAQAiACACAiIAAB6QgCAigiABgAgvhJIAABFQAAAJAKAAIBAAAQATgCACgMIAAhAQABgLgMABIhKAAIgCAAQgIAAAAAKg");
	this.shape_15.setTransform(102.6,75.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDD100").s().p("AgyBhQgrAAABgoIAAgfQgDgeAvgDIAAgBQgvgDADggIAAgRQgDgmArACIBpAAQApgBgBAlIAAARQACAgguADIAAABQAuADgCAeIAAAfQABAogsAAgAguAKIAABCQAAAIAKAAIBJAAQAKAAAAgIIAAhCQAAgKgKABIhJAAIgCAAQgIAAAAAJgAguhLIAAAzQAAAIAKAAIBKAAQALAAgCgIIAAgzQACgJgLAAIhKAAQgKAAAAAJg");
	this.shape_16.setTransform(-83.2,75.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDD100").s().p("AgEBhIAAiUIgjAAIAAgVIA8gYIATAAIAADBg");
	this.shape_17.setTransform(-105.5,75.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDD100").s().p("AgEBhIAAiUIgjAAIAAgVIA8gYIATAAIAADBg");
	this.shape_18.setTransform(-125.7,75.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDD100").s().p("Ag7BhQgigBgCgiIAAh6QACgiAigCIB4AAQAhACACAiIAAB6QgCAighABgAguhMIAACZQAAAHALAAIBIAAQAKAAAAgHIAAiZQAAgHgKAAIhIAAQgLAAAAAHg");
	this.shape_19.setTransform(121,-19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDD100").s().p("Ag5BhQgigBgBgiIAAh6QABgiAigCICVAAIAAANIiAAAQgKAAAAAHIAABFIABAAQAEgOARgCIBSAAQAiABABAhIAAAzQgBAigiABgAguAEIAABGQAAAKAKAAIBJAAQAKAAAAgKIAAhLQAAgKgKABIhBAAQgPACgDAMg");
	this.shape_20.setTransform(100,-19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDD100").s().p("Ag7BhQgigBgCgiIAAh6QACgiAigCIB4AAQAhACACAiIAAB6QgCAighABgAguhMIAACZQAAAHALAAIBIAAQAKAAAAgHIAAiZQAAgHgKAAIhIAAQgLAAAAAHg");
	this.shape_21.setTransform(-98.1,-19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDD100").s().p("AhUBhIAAgMIBvAAQAKAAAAgLIAAg+QABgIgLAAIhIAAIAAgMIBIAAQALAAgBgJIAAg4QABgLgLABIhvAAIAAgNIB9AAQAtgBgBAoIAAAYQADAdgpABIAAABQApABgDAdIAAAeQABAngtAAg");
	this.shape_22.setTransform(-118.1,-19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_23.setTransform(7.9,43.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgCgDQA4gdAig3IASACIgFAHQAeAwA3AXIgKAPQg3gbgdgtQggAtg1AeIgHgLg");
	this.shape_24.setTransform(-5.5,42.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAMBnQgjgtgCg4QABg3AkgxIAOAAQgiAxAAA2QgBA2AjAwg");
	this.shape_25.setTransform(-18.7,43.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTBWIgWAAQgBgKgCgGIAYABQAPAAgBgOIAAg/IhVAAIAAgNICLAAIAAgUIh0AAIAAgNIB0AAIAAgUIh2AAIAAgNICFAAIAABCIAdAAIAAANIhUAAIAAAGQAIAPAMAMIAogbIAKALIgWAOIgSALQASAQAmAJQgGAGgEAIQg2gPgWgmIAAAkQABAcgbAAIgBAAgAhdA5QAhgLAugSIADAOIhNAdgAg/ASIgNgKIAIgKIAJAFIAcASIgJANIgXgQg");
	this.shape_26.setTransform(-32.6,43.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA0BXIAAgPIhoAAIAAAPIgPAAIAAitICGAAIAACtgAg0A8IBoAAIAAgkIhoAAgAg0ALIBoAAIAAgjIhoAAgAg0glIBoAAIAAgjIhoAAg");
	this.shape_27.setTransform(-52.6,43.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/BRQAbgbgChGIAAhAICDAAIAAAMIg2AAIgFAMIgFALIAxAAIAABIIgmAAIAAAqQADAVgWgBQgGABgLgBIgCgMIAQAAQAKABgBgJIAAgqIgjAAIAAhIIAXAAQADgFAEgQIABgCIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgSIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgMQALgoAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAHQgLAPgUAYgAA8A1IgIgJIAKgIIAMAOIAVAXIgMAJQgGgKgRgTgAhegeIAJgMIAhAZIgLANQgLgLgUgPgAhWhQIAJgKIAfAaIgKALQgQgQgOgLg");
	this.shape_28.setTransform(-72.6,42.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_29.setTransform(-92.7,42.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhcBUIgBgDIACgCQASgOAGgKQgPgQgJgcIANgFQAIAaAJAKQAIgPAEgeIgnAAIAAgPIAkgrIglAAIAAgOIA2AAIAAANIgkAvIAkAAIAAAKQgFAlgKAVQAUASAtACIBQgCIgHAOIhKAAQgvAAgYgTQgKALgSAQIgHgJgAAPBEIAAgTIgxAAIAAgLIAxAAIAAgQIgqAAIAAgMIAqAAIAAgPIgnAAIAAgLIAnAAIAAgRIgxAAIAAgMIAxAAIAAgQIgnAAIAAgMIAnAAIAAgTIANAAIAAATIAsAAIAAAcIAUAAIAAAMIgUAAIAAAcIgsAAIAAAPIAwAAIAAAMIgwAAIAAAQIA5AAIAAALIg5AAIAAATgAAcgQIAfAAIAAgRIgfAAgAAcgtIAfAAIAAgQIgfAAg");
	this.shape_30.setTransform(-112.7,42.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAkBbQgBgHgCgJIAOABIAMAAQAPAAgBgMIAAiZIAPAAIAACdQABAYgYgBIgdAAgAhCA/IAAhTIgEACIgJAHQAAgCgEgGIgEgFQAogdASgmIAQAEIgFAHQAUARAZAZIgLAMQgOgSgbgXQgRAZgWATIBNAAQAAAPgCAYQgBAbgbgBIgWAAIgCgQIAXABQAQABgBgOIABgNIABgLIgyAAIAABIQgCAOAQgBIAaAAQAPgBADgHQACgGABgSIAPAGQgCARgDAGQgEARgYgBIggAAIgDABQgZAAACgagAAiAtIAAhzIAOAAIAABzg");
	this.shape_31.setTransform(-133.3,42.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_32.setTransform(183.2,43.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgCgDQA4gdAig3IASACIgFAHQAeAwA3AXIgKAPQg4gbgcgtQggAtg0AeIgIgLg");
	this.shape_33.setTransform(169.8,42.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAMBnQgjgtgCg4QABg3AkgxIAOAAQgiAxAAA2QgBA2AjAwg");
	this.shape_34.setTransform(156.6,43.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag/BRQAbgbgChGIAAhAICDAAIAAAMIg2AAIgFAMIgFALIAxAAIAABIIgmAAIAAAqQADAVgWgBQgGABgLgBIgCgMIAQAAQAKABgBgJIAAgqIgjAAIAAhIIAXAAQADgFAEgQIABgCIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgSIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgMQALgoAEgWIAOAHIgIAhIgKAngAgcBLQAOgNAQgZIAMAHQgLAPgUAYgAA8A1IgIgJIAKgIIAMAOIAVAXIgMAJQgGgKgRgTgAhegeIAJgMIAhAZIgLANQgLgLgUgPgAhWhQIAJgKIAfAaIgKALQgQgQgOgLg");
	this.shape_35.setTransform(142.7,42.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_36.setTransform(122.6,42.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AACBdIAAhcIgqAAIAABOIgOAAIAAhIQgMAPgPAQIgGgGIgFgHQAmgiAVgpIg0AAIAAgOIA7AAIALgcIAPACIgHATIgDAHIBnAAIAAAOIhuAAQgKAUgNASIAqAAIAAgdIAPAAIAAAdIA7AAIAAA+QABAXgZABIgXABIgCgIIgBgGIAIAAIAOAAQAOABgBgNIAAgwIgsAAIAABcg");
	this.shape_37.setTransform(102.5,42.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag9BQQA0gOAQgLQgXgTgMghQgRAugmAkQgFgGgFgGQAvguAPg9Ig0AAIAAgPQAJgTAFgRIAQAEIgHAQIgHARIAoAAIABgEQADgOAEgaIAQADIgHAjIgBAGIBnAAIAAAOIhqAAIgEAMIgEAMIBdAAIAAAMQgMAfgbAWQAUAOAqAHIgJAOQAAgBAAAAQAAAAgBAAQAAAAAAABQgBAAgBABQgkgKgbgQQgWAOgvAOQgEgHgHgGgAATAwQAagVAIgZIhDAAQALAeAWAQgAA3g3QgUgRgKgHIAIgKQAVANAPAMIgKAMIgEgDg");
	this.shape_38.setTransform(82.6,42.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_39.setTransform(203.9,-52.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgCgDQA4gdAig3IASACIgFAHQAeAwA3AXIgKAPQg4gbgcgtQggAtg0AeIgIgLg");
	this.shape_40.setTransform(190.5,-53.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAMBnQgjgtgCg4QABg3AkgxIAOAAQgiAxAAA2QgBA2AjAwg");
	this.shape_41.setTransform(177.3,-52.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABBTQAVgSARgXQgHgfgBg5IhCAAIAAgNIBCAAIAAghIAOAAIAAAhIAvAAIAAANIgvAAQABAuAEAZQAMgVALgeIANAGQgPAmgRAaQAFARAHAKQAEAFADgBQADgBACgEQACgJABgVIANAEQgBARgDAOQgDAQgNAAQgKABgIgMQgIgKgEgKQgOARgSAQIgLgKgAgsA5QApgGAbgHIAAAOIg/AMgAhdA2IAKgCIAOgFIAAhKIgXAAIAAgMIAXAAIAAg1IAOAAIAAA1IAVAAIAAAMIgVAAIAABFIAKgEIAKgDIAAAKIABAEQgfALgZAKgAgdAhIAAg6IAuAAIAAA6gAgRAVIAVAAIAAgiIgVAAgAA1hRIAHgJIAWASIgIAJIgVgSg");
	this.shape_42.setTransform(163.3,-53);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag/BRQAbgbgChGIAAhAICDAAIAAAMIg2AAIgFAMIgFAKIAxAAIAABJIgmAAIAAAqQADAVgWgBQgGABgLgBIgCgMIAQAAQAKABgBgJIAAgqIgjAAIAAhJIAXAAQADgEAEgQIABgCIgvAAIAAA0QACBJgfAiIgKgKgAADAQIA/AAIAAgSIg/AAgAADgOIA/AAIAAgUIg/AAgAhaBUIADgMQALgoAEgWIAOAHIgIAhIgKAngAgcBLQAOgOAQgYIAMAHQgLAPgUAYgAA8A1IgIgKIAKgHIAMAOIAVAXIgMAJQgGgKgRgTgAhegeIAJgMIAhAZIgLANQgLgLgUgPgAhWhQIAJgKIAfAaIgKALQgQgQgOgLg");
	this.shape_43.setTransform(143.4,-52.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhUBWIgEgHQBKgKAGgXQADgIAAgNIAOAAQgBAMgCAKIAuASIAiANIgHAOIgegNIgxgUQgNAWhEAMIgDgHgAhAA7IAAg7ICDAAIAAA5IgOAAIAAgsIhnAAIAAAugAhcgMQAcgTAVgSIAIAOQgWAPgZAUgAAbgmQgMAYguAMIgGgKIgCgDQA6gMAAgjIgaAAQgHANgLAMQgGgFgGgDQATgTAKgcIAOADIgGAPIBVAAIAAALIgNAaIgFgBQgFgEgDAAIAKgUIgjAAIAAADIgBADQAJAfAzAKQgCACgGAKIgCACQgsgNgMgYgAhNhJIgHgFIAJgKIAEADIAdATIgLAMIgYgTg");
	this.shape_44.setTransform(123.3,-53.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhcBUIgBgDIACgCQASgOAGgKQgPgQgJgcIANgFQAIAZAJALQAIgPAEgeIgnAAIAAgPIAkgrIglAAIAAgOIA2AAIAAANIgkAvIAkAAIAAAKQgFAlgKAVQAUASAtACIBQgCIgHAOIhKAAQgvAAgYgTQgKALgSAQIgHgJgAAPBEIAAgTIgxAAIAAgLIAxAAIAAgQIgqAAIAAgMIAqAAIAAgPIgnAAIAAgLIAnAAIAAgRIgxAAIAAgMIAxAAIAAgQIgnAAIAAgMIAnAAIAAgTIANAAIAAATIAsAAIAAAcIAUAAIAAAMIgUAAIAAAcIgsAAIAAAPIAwAAIAAAMIgwAAIAAAQIA5AAIAAALIg5AAIAAATgAAcgQIAfAAIAAgRIgfAAgAAcgtIAfAAIAAgQIgfAAg");
	this.shape_45.setTransform(103.3,-53.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAkBbQgBgHgCgJIAOABIAMAAQAPAAgBgMIAAiZIAPAAIAACdQABAYgYgBIgdAAgAhCA/IAAhTIgEACIgJAHQAAgCgEgGIgEgFQAogdASgmIAQAEIgFAHQAUARAZAZIgLAMQgOgSgbgXQgRAZgWATIBNAAQAAAPgCAYQgBAagbAAIgWAAIgCgQIAXABQAQABgBgOIABgNIABgLIgyAAIAABIQgCAOAQgBIAaAAQAPgBADgHQACgGABgSIAPAGQgCARgDAGQgEARgYgBIggAAIgDABQgZAAACgagAAiAtIAAhzIAOAAIAABzg");
	this.shape_46.setTransform(82.7,-53.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgZBmQAjgugBg2QAAg2gigxIAOAAQAkAwABA3QgCA4gjAsg");
	this.shape_47.setTransform(-23,-52.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIBcIAAhzIAQAAIAABzgAhbgEIgCgDQA4gdAig3IASACIgFAHQAeAwA3AXIgLAPQg3gbgcgtQggAtg0AeIgIgLg");
	this.shape_48.setTransform(-36.4,-53.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMBnQgjgtgCg4QABg3AkgxIAOAAQgiAxAAA2QgBA2AjAwg");
	this.shape_49.setTransform(-49.6,-52.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhEBdIAAhpQgHAPgMAOIgFgOIgCgDQAbgnAPg0IAQAEQgJAZgIAVIAACGgAgqBUIAAgNIBGAAQARgyAQg1IAQAFIgUA6IgNAoIAyAAIAAANgAgagZIAOgFQAMAgAOAxIgOAGQgOgzgMgfgAgmgqIAAgOIA8AAQgBgJgJgWIAQgFIAKAgIgOAEIBDAAIAAAOg");
	this.shape_50.setTransform(-63.6,-53.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGBdIAAgmIhWAAIAAgNIBWAAIAAgUIhDAAIAAhUIAoAAIgLgMIgLgKIANgIIAWAYIgKAGIAwAAQALgOALgQIAPAIIgJAKIgKAMIAmAAIAABUIhDAAIAAAUIBWAAIAAANIhWAAIAAAmgAAHAIIA1AAIAAgVIg1AAgAg7AIIA1AAIAAgVIg1AAgAAHgaIA1AAIAAgXIg1AAgAg7gaIA1AAIAAgXIg1AAg");
	this.shape_51.setTransform(-83.6,-53.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhdBLQA8gmAWhSQgOgYgQgLIANgIQAUAMAaA3QAiBMAqAQIgNAQQgrgYgihNIgDgGIgCgGQgUBJg9AqQgFgIgGgGg");
	this.shape_52.setTransform(-103.5,-53.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgpBPQAmgFAVgLIgLgFIgbgNIAQgUIgfAAIAAgNIAlAAIALgUIANAGIgJAOIBLAAIAAANIgZAAQgHAUgPAQIAUAIQARAGAJAEIgIAMIgDgBQgbgNgVgHQgWAOgsAJIgHgOgAACAkIgCAFIAfAOQAPgNAGgRIgqAAIgIALgAhZBaIgCgPIAQABQAIAAAAgGIAAg0IgYAIIgBgRQAEAAAKgDIALgEIAAgqIgXAAIAAgOIAXAAIAAgjIAOAAIAAAjIAWAAIAAAOIgWAAIAAAnIAHgDIALgDIABAHIAAAHIgJACIgKADIAAA7QACATgVAAIgRAAgAgjgJIAAgOIBKAAIAVggIAMAHIgSAZIAnAAIAAAOgAgKgvIAKgHIAFAGIAMAPIgLAIQgHgMgJgKgAgbg4IAAgNIA0AAIgJgSIAMgFQAGAIAGANIgFACIA2AAIAAANg");
	this.shape_53.setTransform(-123.6,-53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Layer 3
	this.instance = new lib.cornor("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(209.9,124.9,1,1,180,0,0,-9.5,-5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape_54.setTransform(-200.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhZBZIAAgXIAEAAIAAhBICpAAIAABBIAGAAIAAAXgAAkBCIAVAAIAAgnIgVAAgAgLBCIAVAAIAAgnIgVAAgAg6BCIAXAAIAAgnIgXAAgAABgRIgJgZIAdAAIAFAKQABAEAEgBIA6AAIAAAXIhHAAIgEABQgMAAgBgMgAhXgGIAAhSIAaAAIAABSgAgpgGIAAhSIAaAAIAABSgAAegvIgnAAIAAgXIATAAQAEABADgFIAEgOIAcAAIgDAKIArAAIAAAWIgwAAIgCAEQgBAFgGAAIgCAAg");
	this.shape_55.setTransform(-78.8,-110.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgnBHIAAg1IAZAAIAAAsQgBAGAFAAIA5AAIAAAVIhHAAIgDAAQgOAAACgSgAA4BHIgGg0IAZAAIAGAtQgBAEAFAAIADAAIAAAUIgQAAIgDAAQgNAAAAgRgAhFBXIgSAAIAAgTIAGAAQADAAAAgFIAFgsIAZAAIgGA0QgBAQgMAAIgCAAgAAAAoIAAgUIAWAAIAAAMQgBAEAFAAIAKAAIAAATIgXAAIgDAAQgLAAABgPgABGAKIiZAAIAAhVIAPAAIgDgNIAfAAIACANIBSAAIAEgNIAbAAIgDANIAOAAIAABDQACASgPAAIgDAAgAg2gNIBsAAQAEAAAAgGIAAggIhwAAg");
	this.shape_56.setTransform(-98.7,-110.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAjBaIgOAAIAAgVIAEAAQADABAAgFIAAgjIggAAIAAhaIAZAAIADgIIghAAIAACNQACATgSgCIgVAAIAAgWIAHAAQAEAAAAgEIAAiZIB7AAIAAAVIgiAAIgEAIIAnAAIAABJQABAUgRgDIgTAAIAAAmQACAWgRAAIgEAAgAASAIIAoAAQAGABAAgGIAAgGIguAAgAASgZIAuAAIAAgMIguAAgAhGBaIgQAAIAAgWIAFAAQAFABAAgFIAGgkIAaAAIgIAyQAAAMgOAAIgEAAgABBBOIgIgqIAXAAIAFAeQAAAAAAABQAAAAABABQAAAAABAAQABAAABAAIAAAVIgLAAIgDAAQgJAAgBgLgAgHBZIAAgWIACAAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIAFgcIAWAAIgIAuQAAAHgNAAgAhQAKIgIgmIAZAAIAFAVQABAHAEgCIALAAIAAAVIgcAAIgCAAQgHAAgBgJgAhQgyIgFgnIAaAAIAEAYQABAGAEgBIAHAAIAAAXIgYAAIgDAAQgKAAAAgNg");
	this.shape_57.setTransform(-118.9,-110.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhXBZIAAgVIAdAAQAGABAHgDIAhgPIAAgTIAaAAIAAASIAiAQQAHADAEgBIAeAAIAAAUIgpAAQgLAAgGgDIgfgOIgeAOQgMAEgGAAgAA8A4IAAgfIh2AAIAAAfIgcAAIAAg0ICtAAIAAA0gAApgMIgJgVIgJAUQgDALgLgCIglAAIAAgUIAYAAQAEAAAAgEIANgcIAcAAIgFAKIARAAIAIASQABAEAGAAIATAAIAAAVIghAAIgCAAQgHAAgEgJgAhCgEIgWAAIAAgTIAOAAQAFAAABgEIAFgOIAZAAIgKAbQgDAKgLAAIgEAAgABDgrIAAgSIg9AAIgBAEQgCAFgGgBIgYAAIAAgVIAIAAQAFACAAgFIADgLIAZAAIgBAGIBLAAIAAAngAhOg+IgKgaIAaAAIAFAKQABAGAGgCIAPAAIAAAWIgcAAIgCAAQgLAAgCgKg");
	this.shape_58.setTransform(-139.1,-110.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABCBbIgeAAIAAgWIAQAAQAGAAAAgHIAAh/Ih0AAIAACZIgZAAIAAiyICnAAIAACgQABAVgRAAIgCAAgAgBBGIARg+IgQg3IgTA/IAPA2IgVAAIgFgWIgHAWIgTAAIAQg2IgShGIAVAAIAIAhIAJggIAmAAIAJAdIAIgdIAUAAIgSA9IAMAzIgUAAIgDgPIgIAag");
	this.shape_59.setTransform(-158.9,-110.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhaBaIAAgXIBMAAIAAgdIhKAAIAAgXIBLAAIAAgdIhJAAIAAgXICuAAIAAAXIhKAAIAAAdIBKAAIAAAXIhKAAIAAAdIBMAAIAAAXgAA4gxIgLgSIhVAAIgMASQgDAGgLgBIgVAAIAAgXIAJAAQAGABAEgHIALgQIB4AAIAKASQAFAGAHgBIAGAAIAAAXIgTAAIgEAAQgJAAgDgGg");
	this.shape_60.setTransform(-178.8,-110.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#00405B").ss(1,1,1).p("EggzAAAMBBnAAA");
	this.shape_61.setTransform(0,-94.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#00B4E8").ss(1,1,1).p("AfZzhQBbAAAABbIAADXIAACdIAAf0MhAMAAAQhbAAAAhbMAAAgg2IAAkyg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.267)").s().p("EggzACZIAAkxMBAMAAAQBbAAAABbIAADWg");
	this.shape_63.setTransform(0,-109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211,-126,422,252);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.freshBottom){
			var that = this;
			this.freshBottom = function(){
				for(var i=1;i<=4;i++){
					that.bottom['text'+i+'_1'].text = that.bottom['text'+i].text;
					that.bottom['text'+i].text = Math.round(Math.random()*10000);
				}
				for(i=5;i<=8;i++){
					that.bottom['text'+i].text = Math.round(Math.random()*10000);
				}
				that.bottom.gotoAndPlay(2);
			}
		}
	}
	this.frame_52 = function() {
		this.freshBottom();
	}
	this.frame_106 = function() {
		this.freshBottom();
	}
	this.frame_170 = function() {
		this.freshBottom();
	}
	this.frame_234 = function() {
		this.freshBottom();
	}
	this.frame_280 = function() {
		this.freshBottom();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(52).call(this.frame_52).wait(54).call(this.frame_106).wait(64).call(this.frame_170).wait(64).call(this.frame_234).wait(46).call(this.frame_280).wait(9));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97E5FF").s().p("AhRA4QAQgbAAgnIAAhDICTAAIAAAXIh7AAIAAArQAAA4gYAhQgHgMgJgKgAgXA3IAGAAIARABQAMAAAAgNIAAg6IgwAAIAAgWIB0AAIAAAWIgsAAIAABBQAAAYgXACIgJAAIgWABQgCgLgDgLg");
	this.shape.setTransform(-167.3,772.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97E5FF").s().p("AAJBSIAAgtQgRAYgWAOQgDgGgIgKIgCgDQAVgMATgWIgjAAIAAgTIAvAAIAAgPIgkAAIAAg+IBhAAIAAA+IgmAAIAAAPIAxAAIAAATIgmAAQANASAbAMQgKAOgDAGQgZgOgNgXIAAAvgAgFgfIA1AAIAAgXIg1AAgAhBBSIAAhJIgGAJIgGAJQgCgQgDgOQARgeAMgwIAWAHIgNAoIAAB0g");
	this.shape_1.setTransform(-195.1,772.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97E5FF").s().p("AAOBMIAAhKQgMAVgOATIgJgHIgBAUQgjADgXAFIgCgWIAOgBIAHgBIAAglIgSAAIAAgWIASAAIAAggIgTAAIAAgXIA7AAIAAAXIgSAAIAAAgIASAAIAAAWIgSAAIAAAiIAOgDIACAAQgEgEgEgDQAfgiANgtIgcAAIAAgWIBcAAIAAAWIgoAAQgEAOgGANIAJAAIAAANIARgJIACAEQAQAYAMAaIgUAKIgJgRIgSghIAABUg");
	this.shape_2.setTransform(-223.2,772.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#97E5FF").s().p("AhRA4QAQgbAAgnIAAhDICTAAIAAAXIh7AAIAAArQAAA4gYAhQgHgMgJgKgAgXA3IAGAAIARABQAMAAAAgNIAAg6IgwAAIAAgWIB0AAIAAAWIgsAAIAABBQAAAYgXACIgJAAIgWABQgCgLgDgLg");
	this.shape_3.setTransform(-167.3,732.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97E5FF").s().p("AgLBAQgyAFgTAEIgCgWIADgBIAGgBIAAhKIATAAIAABIIAKgCQgBAAAAABQAAAAAAAAQAAAAABAAQABgBABAAIAAhdIglAAIAAgVIBRAAIAAAVIgXAAIAAAjIALAAQARgbAKgqIAYAGIgFAMIgCAHIAxAAIAAAXIgMAAQgCAqgRAeQAOANARAJQgGAJgIAMQgPgIgRgQQgQAOgVAMQgFgMgGgHgAAAA3QAMgJALgJQgLgUgFgWIgBACIgEAFIgEgFIAAAJIgTAAIAAAlIAXgDIgCAPgAAmARQALgUACgfIgbAAQACAdAMAWg");
	this.shape_4.setTransform(-195.1,732.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97E5FF").s().p("AARBRIgEgVIATABQAMAAAAgNIAAgyQgQAegZAZQgGgIgKgIQAfgbATgnIgmAAIAAgUIAtAAIAAgfIAWAAIAAAfIARAAIAAAUIgRAAIAABVQAAAZgbAAIgWAAgAhSBAQAhgVAAghIAAg5IARAAIAAA5IgBAQQARARAPATIgRAOQgEgIgRgVQgJAUgWAOIgMgRgAhMAfIAAhoIBHAAIAABmIgTAAIAAhTIghAAIAABVg");
	this.shape_5.setTransform(-223.1,732.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97E5FF").s().p("AAdBDIgQgGQgbAPg6ADIgKgTQAsgDASgFIgWgHIgRgEIAGgHIAFgHIggAAIAAgTIAuAAIAFgIIAFgGIAPAEIAAgUQgbATgkAKIgLgRQAdgHAZgMIgyAAIAAgRIBGAAIAAgLIggABIgbAAIgEgTQBHgBBCgDIAFATIggABIgaABIAAAMIBDAAIAAARIgxAAQAWAOAgACIgLATQgkgIgZgVIAAAWIgSAAIAFABIgGAIIBWAAIAAATIgfAAQgGAMgIAJIAZAHIAWAFIgMAUIgogNgAgZAdIgCADIATAEIAQAFQAHgGAHgIIgtAAIgCACg");
	this.shape_6.setTransform(-167.1,692.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97E5FF").s().p("AAfA1QgSARgVAMIgEgGIgKgOQAVgKAQgSQgKgPgFgTIgEAIIgMgPIAAAMIgmAAIAAArIAKgGIAZgMIACAIIABAOQgqAUgKAJIgNgQQAGgEAAgJIAAhDIAlAAIAAggIgqAAIAAgWIBAAAIAAA1QAQgbAFgmIAWAEIgEAWIA4AAIAAAXIgLAAQgEApgTAaQAQAQAUAKIgLAQIgDAFQgVgNgPgQgAAOgaQADAZAOARQAKgSAGgeIggAAIgBAGg");
	this.shape_7.setTransform(-194.9,692.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97E5FF").s().p("Ag7A/QAcgJAWgKQgMgMgJgOQgUAfgZAUIgDgJIgEgRQAfgfARgoIgpAAIAAgUIAIgcIAWACIgGAaIAYAAIACgLIAGgWIAWACIgDAWIgCAJIAuAAIgTgTIAOgOIAQAOIAKAIIgKALIAcAAIAAAUIhcAAQgBAEgDAHIgCAFIBRAAIAAASQgOAXgTAPQASAJAgAFQgEAFgIAOIgCAEQgigIgYgOQgYANghAKIgNgTgAAKAgQATgMAJgOIgxAAQAGANAPANg");
	this.shape_8.setTransform(-223.1,692.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#97E5FF").s().p("AhRA4QAQgbAAgnIAAhDICTAAIAAAXIh7AAIAAArQAAA4gYAhQgHgMgJgKgAgXA3IAGAAIARABQAMAAAAgNIAAg6IgwAAIAAgWIB0AAIAAAWIgsAAIAABBQAAAYgXACIgJAAIgWABQgCgLgDgLg");
	this.shape_9.setTransform(-167.3,654.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#97E5FF").s().p("AA5BKIgCgDQhBACgSAEIgJgSQARgQASgdIgjAAIAAgUIAvAAIAAgdIgoAAIAAgUIAoAAIAAgaIAXAAIAAAaIAqAAIAAAUIgqAAIAAAdIAyAAIAAAUIg6AAQgOAVgPATIAPAAIAggBIgJgNIgFgIIAUgLQATAaAPAYIgVALIgFgIgAhABOIgPgFQALgbAKglQAJAFAMAEIgTA/IgIgDgAhSgTIAOgQQAPAJAOAOIgQAQQgMgLgPgMgAhMg/IANgQQARALANALIgOASIgdgYg");
	this.shape_10.setTransform(-195.1,653.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97E5FF").s().p("AAOA4IAZABQAOAAAAgQIAAhhIh5AAIAAgVICRAAIAAB8QAAAdgdABIgbABQgBgMgGgKgAg+A9IAAhGIBaAAIAAA9IhCAAIAAAJgAgmAfIAqAAIAAgTIgqAAgAhMgWIAAgUIB3AAIAAAUg");
	this.shape_11.setTransform(-223.5,654.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#97E5FF").s().p("AhRA4QAQgbAAgnIAAhDICTAAIAAAXIh7AAIAAArQAAA4gYAhQgHgMgJgKgAgXA3IAGAAIARABQAMAAAAgNIAAg6IgwAAIAAgWIB0AAIAAAWIgsAAIAABBQAAAYgXACIgJAAIgWAAQgCgKgDgLg");
	this.shape_12.setTransform(-167.3,615.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#97E5FF").s().p("AAJA7QgbAOg0AJQAAgDgDgCQgEgJgFgHQAogFAYgJIgRgGIgXgJIAQgaIgoAAIAAgUIAzAAIALgaIAaAHIgJATIBWAAIAAAUIgfAAQgHAXgPAPIANAEIAjANIgMAVQgegOgbgJgAgZAWIATAIIAMAEQAMgKAHgSIgoAAIgKAQgAA0gbIAAgQIhnAAIAAAPIgYAAIAAgkIBAAAQAAgDgEgEIgBgFIAbgFIAEAKIACAHIA8AAIAAAlg");
	this.shape_13.setTransform(-195.1,614.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#97E5FF").s().p("AAzBNIgGgKIhWAEIgBAAIgRADIgKgVIAMgLQAZgdAVgoIAYALQgcArgRAVIA+gCIgVgdIAUgNQAZAgAVAdIgVAQIgDgEgAhFAAIgNgPQAegaARglIAXAKQgTApgiAfIgEgEgAAMhFIAWgLQATAnAeAYQgNAMgGAIQgegbgWgtg");
	this.shape_14.setTransform(-223.1,614.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(289));

	// Layer 6
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(-142.6,617.3,1,1,0,0,0,118.2,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({y:652.7},7).wait(47).to({y:694.3},7).wait(57).to({y:733},9).wait(55).to({y:771.3},8).wait(38).to({y:617.3},8).wait(1));

	// Layer 7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2C3D44").ss(2).p("Eg1egQsMBq9AAAQAeAAAAAcMAAAAghQAAAcgeAAMhq9AAAQgeAAAAgcMAAAgghQAAgcAeAAg");
	this.shape_15.setTransform(304.9,694.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(289));

	// Layer 4
	this.bottom = new lib.Symbol13();
	this.bottom.parent = this;
	this.bottom.setTransform(322.5,691.4);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(289));

	// Layer 3
	this.instance_1 = new lib.cornor("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(662.1,839.3,1,1,180,0,0,-9.5,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00FCFF").ss(2,1,1).p("AheA3IAAhtIC9AA");
	this.shape_16.setTransform(-258.4,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance_1}]}).wait(289));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00B5EB").ss(1,1,1).p("EBIrBLWMiP6AAAQhbAAAAhbMAAAiVQMBW8AAAIAVAAIAIAAMA4gAAAQBcAAAABbg");
	this.shape_17.setTransform(197.1,357.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(289));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-126,944,966.4);


// stage content:
(lib._super = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 左下图
	this.instance = new lib.frame_l3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(229.8,793.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 左中图
	this.instance_1 = new lib.frame_l2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(229.8,468.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

	this.instance_5 = new lib.frame_l1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(229.8,201.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// 中图
	this.instance_6 = new lib.frame();
	this.instance_6.parent = this;
	this.instance_6.setTransform(730.1,202.2,1,1,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CBF1FF").s().p("AAJCWIAAgpIhAA/QgMAMgNAAIhdAAIAAgoIA+AAQALAAAIgKIA7g7IAAglIA4AAIAAA5IgIAIIAyAAIAAAZQAAANALAAIBhAAIAAArIiFAAIgDAAQggAAAEgigABxBsIAAhZIjkAAIAABXIg2AAIAAiIIFSAAIAACKgAAFg/IgUgnIA3AAIAEAIQAFAIAKAAIBzAAIAAAnIiOAAIgDAAQgSAAgGgQgAhTgvIAAiBIAyAAIAACBgAingvIAAiBIA3AAIAACBgAAxhuIhAAAIAAgqIAfAAQAIABADgJIAHgXIAuAAIgBAHIBcAAIAAAuIhkAAIgCAJQgCALgOAAIgEAAg");
	this.shape.setTransform(1280.1,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CBF1FF").s().p("Ah4CuIAAjKIgIAAIgFCbQgDAjgkABIgLAAIAAgnQAIACAAgQIADi5IA0AAIAAgQIg6AAIAAguIA6AAIAAgkIAzAAIAAAkIALAAIAAAuIgLAAIAAAQIALAAIAAAvIgLAAIAADKgAAeCtIhRAAIAAlZIBvAAIAADEQACAhgjgDIgmAAIAABIIAdAAQAGABAAgLIAAgZIAkAAIAAA0QACAegdAAIgDAAgAgLAIIAaAAQAFACAAgIIAAgmIgfAAgAgLhQIAfAAIAAgtIgfAAgABCCrIAAgtIAIAAQAGABAAgJIAKh0IgWAAIAAhnIAZAAIAAA5IARAAIAAhPIgqAAIAAgvIB0AAIAAAvIgjAAIAABPIAjAAIAAAuIg5AAIgLCQQgDAZgdAAgACCCCIAAhtIAmAAIAABbQgCAOAKgCIAIAAIAAAtIgWAAIgDAAQggAAADgng");
	this.shape_1.setTransform(1234.2,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBF1FF").s().p("ACEC2Ig7AAIAAgsIAfAAQAMAAAAgOIAAj/IjpAAIAAE0IgyAAIAAlmIFPAAIAAFCQADApgiAAIgFAAgAgDCNIAlh9IgihvIgnB/IAfBtIgqAAIgLgtIgMAtIgnAAIAghtIgjiMIAqAAIAPBCIAShAIBNAAIARA6IARg6IApAAIgmB6IAZBnIgoAAIgHgdIgPAzg");
	this.shape_2.setTransform(1188.1,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBF1FF").s().p("Ai1C0IAAguICZAAIAAg5IiVAAIAAgvICXAAIAAg7IiUAAIAAgtIFdAAIAAAtIiTAAIAAA7ICTAAIAAAvIiTAAIAAA5ICXAAIAAAugABvhjIgVgiIirAAIgZAiQgFALgWgCIgqAAIAAgtIATAAQAKACAKgNIAWghIDwAAIAVAjQAJAOAPgCIALAAIAAAuIgnAAIgIAAQgSAAgGgNg");
	this.shape_3.setTransform(1142.4,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBF1FF").s().p("AixCyIAAgwICIAAIAAAwgACNCxIiqAAIAAiVIDMAAIAABvQAEAmgfAAIgHAAgAAcCFIBRAAQAIABAAgKIAAg0IhZAAgAiwBfIAAggIAshJIgtAAIAAhAIA4hlIA/AAIhBB1IAPAAIARgeIA9AAIhOCKIBDAAIAAAtgABXAGIgPgNIgOAMQgKAJgMgBIhEAAIAAgmIAmAAQAGABAHgGIAMgNIg3gtIBSAAIAJAIIAfghIg9AAQgGALgLgCIgyAAIAAglIARAAQAIABAEgJIAMgcIA3AAIgIARIB2AAIAAAvIhDBDIARAOQAHAHAIgCIAlAAIAAAoIhFAAIgEAAQgMAAgGgHg");
	this.shape_4.setTransform(1096.6,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBF1FF").s().p("ACEC2Ig7AAIAAgsIAfAAQAMAAAAgOIAAj/IjpAAIAAE0IgyAAIAAlmIFPAAIAAFCQADApgiAAIgFAAgAgDCNIAlh9IgihvIgnB/IAfBtIgqAAIgLgtIgMAtIgnAAIAghtIgjiMIAqAAIAPBCIAShAIBNAAIARA6IARg6IApAAIgmB6IAZBnIgoAAIgHgdIgPAzg");
	this.shape_5.setTransform(1050.1,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBF1FF").s().p("ABkCzIj5AAIAAgsIDVAAQAFACAAgKIAAgOIj1AAIAAgqID7AAIATgUIkBAAIAAgsIFNAAIAAAkIgaAcIAgAAIAAAqIgwAAIAAAeQADAkgZAAIgGAAgAB6gDIkcAAIAAhnIFGAAIAABBQAEAngjAAIgLgBgAhlgtIDJAAQAIABAAgLIAAgHIjRAAgAixh3IAAgtICWAAIAAgOIA8AAIAAAQICRAAIAAArg");
	this.shape_6.setTransform(1004.6,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBF1FF").s().p("AiwCyIAAgtIARAAQAMAAAEgKIANgqIA7AAIgSA/QgNAfgeADgAB9CxQghgCgGgcIgPhAIA7AAIANAoQACALALgBIAVAAIAAAsgAiuBDIAAgwIAuAAIAAhmIgmAAIAAgxIAkAAIAAgsIA6AAIAAAsICTAAIAAgtIA9AAIAAAtIAkAAIAAAvIgnAAIAABoIAsAAIAAAwgAhIATICTAAIAAhmIiTAAg");
	this.shape_7.setTransform(958.5,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBF1FF").s().p("AA6CxIAAgqIAwAAQANABAAgPIAAgvIihAAIgVBOQgGAZgWAAIhUAAIAAgsIAxAAQAKACAEgOIALgvIhKAAIAAgwIBVAAIAHgXIhcAAIAAgqIBSAAQAIAAAIgDIAOgIIhGgpIBgAAIAXANIBHgkIiHAAQgMARgSgBIhCAAIAAgsIAhAAQAKABAFgLIANgYIA7AAIgHANIDsAAIAAAmIiFBLIALAGQAIAHAWgCIBdAAIAAArIh1AAQgaADgRgNIgagOIgTAMQgMAIgRABIAiAAIgHAZIDNAAIAAB7QAAAdgXgBg");
	this.shape_8.setTransform(912.6,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBF1FF").s().p("AAhCzIgfAAIAAgsIAPAAQAIAAAJgRIAehHIgyhqIBAAAIAQAkIAWg3IA9AAIAAABIgyB8IAfBLQAGAKAGAAIALAAIAAAtIgkAAQgaAAgGgRIgTgyIgRAvQgGAWgiAAIgEAAgAi0CsIAAgtIAJAAIAAjaIAyAAIAADaIATAAIAAj+IhLAAIAAguICtAAIAAAuIgtAAIAABbIAqAAIAAAsIgqAAIAAB3IAsAAIAAAtgAgHhGIAAguIANAAQAKACAEgQIALgwIA6AAIgFAXIBgAAIAAAvIhsAAIgDAOQgIAYgbAAg");
	this.shape_9.setTransform(867.1,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBF1FF").s().p("AAvCyIjEAAIAAguICyAAQAKACAAgLIAAg/IjaAAIAAguIDaAAIAAgjIiHAAIAAgxICQAAIAzg7IkGAAIAAgxIFXAAIAAAuIhTBiIAAAuIBRAAIAAAyIhRAAIAAA+QAFA3gtAAIgKgBg");
	this.shape_10.setTransform(820.3,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBF1FF").s().p("AgiCPIAAgfIiSAAIAAkWICSAAIAAgLIA6AAIAAALICTAAIAADrQACAvgkgEIhxAAIAAAPQABAKAHgCICUAAIAAAqIiuAAIgGABQgmAAAEgjgAAYA+IBSAAQAEAAACgKIAAg2IhYAAgAh4A+IBWAAIAAhAIhWAAgAAYg0IBYAAIAAhAIhYAAgAh4g0IBWAAIAAhAIhWAAg");
	this.shape_11.setTransform(775.2,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CBF1FF").s().p("AiZCvIAAi7IgWAAIAAgqIDEAAIAOgXIBLAAIgLAZIBHAAIAAC/QAAAkg3AAgAhfCEIDCAAQANACgCgJIAAgLIjNAAgAhfBHIDNAAIAAgSIjNAAgAhfAHIDNAAIAAgTIjNAAgAgGhDIhCAAIAAgqIAhAAQALACAAgLIAAg4IA5AAIAABFQAAAnggAAIgDgBgAh4hJIg3AAIAAgtIAbAAQALACADgOIALgmIA+AAIgUBIQgGAYgeAAIgDgBgABdhrIgLg9IA/AAIAEAcQACANAJgCIAQAAIAAAtIg4AAIgDABQgVAAgDgYg");
	this.shape_12.setTransform(728.4,32);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBF1FF").s().p("ABNC2IhbAAIAAgvIBHAAQAFABAAgGIAAihIhdAAIgZCuQgDAlgegBIhWAAIAAgpIA1AAQARACACgTIAUiYIhcAAIAAgvIBhAAIADgUIA1AAIgDAUICKAAIAADeQACAmgjAAIgDAAgACXCdQgVgCgBgaIgLjBIAqAAIAJCxQgBAIAIgCIAAAmgAiQBmIgfAAIAAglIANAAQAGABAFgMIAOg4IAuAAIgUBOQgEAbgYAAIgFgBgAivhtIAAgxIATAAIAAgUIA4AAIAAAUIDGAAIAAgXIA4AAIAAAXIAUAAIAAAxg");
	this.shape_13.setTransform(683.2,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBF1FF").s().p("AhACxIAAgxIBdAAIAAj4IhJAAIAAg0IDfAAIAAA0IhWAAIAAD4IBWAAIAAAxgAiyCxIAAgxIAgAAQAMABABgLIAUhDIA9AAIgZBkQgHAZgkABgAhrAhQgfABgIgYIgdhGIBCAAIAPAoQAHAMAOAAIAXAAIAAApgAiVhiIgahOIBFAAIARAvQAFAJAPAAIARAAIAAAvIgwAAIgEAAQglAAgIgZg");
	this.shape_14.setTransform(636.7,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(15,107,160,0.388)").ss(1,1,1).p("ECWAAAAMkr/AAA");
	this.shape_15.setTransform(960,64);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.298)").s().p("EiV/AFAIAAp/MEr/AAAIAAJ/g");
	this.shape_16.setTransform(960,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 背景
	this.instance_7 = new lib.DSSGbg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(952,540,1929,1080);
// library properties:
lib.properties = {
	id: '397FF11EC6E3D54CB7D87738A5B35DEF',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/DSSGbg.jpg", id:"DSSGbg"}
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
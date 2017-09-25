define(["topologicalCore","topologicalNode"],function(){function computeCross(line,lineArray){var pointArray=new Array;lineArray.forEach(function(l){if(line.x*l.y-line.y*l.x!=0){var pointX=(l.y*line.z-l.z*line.y)/(line.x*l.y-line.y*l.x),pointY=(line.x*l.z-l.x*line.z)/(line.x*l.y-l.x*line.y),xMax=0===line.x?line.xMax:l.xMax,xMin=0===line.x?line.xMin:l.xMin,yMax=0===line.y?line.yMax:l.yMax,yMin=0===line.y?line.yMin:l.yMin;xMax>pointX&&pointX>xMin&&yMax>pointY&&pointY>yMin&&pointArray.push({x:pointX,y:pointY})}});return pointArray}function link(init,target,g,lineArray){var lastPointOffset,xMax=0,xMin=0,yMax=0,yMin=0,xDir=init.x<target.x?1:-1,yDir=init.y<target.y?1:-1;xMax=xDir>0?target.x:init.x;xMin=xDir>0?init.x:target.x;yMax=yDir>0?target.y:init.y;yMin=yDir>0?init.y:target.y;g.moveTo(init.x,init.y);if(init.y==target.y){computeCross({x:0,y:1,z:init.y,xMax:xMax,xMin:xMin,yMax:yMax,yMin:yMin},lineArray).sort(function(a,b){return a.x>b.x?xDir:-1*xDir}).forEach(function(point){if(!(point.x-3*xDir<xMin||point.x-3*xDir>xMax||point.x<lastPointOffset+3&&point.x>lastPointOffset-3)){g.lineTo(point.x-3*xDir,init.y);g.arc(point.x,init.y,4,xDir>0?Math.PI:0,xDir>0?0:Math.PI,0);g.moveTo(point.x+3*xDir,init.y);lastPointOffset=point.x}});lineArray.push({x:0,y:1,z:init.y,xMax:xMax,xMin:xMin,yMax:yMax,yMin:yMin})}else if(init.x==target.x){computeCross({x:1,y:0,z:init.x,xMax:xMax,xMin:xMin,yMax:yMax,yMin:yMin},lineArray).sort(function(a,b){return a.y>b.y?yDir:-1*yDir}).forEach(function(point){if(!(point.y-3*yDir<yMin||point.y-3*yDir>yMax||point.y<lastPointOffset+3&&point.y>lastPointOffset-3)){g.lineTo(target.x,point.y-3*yDir);g.arc(target.x,point.y,4,0>yDir?Math.PI/2:3*Math.PI/2,0>yDir?3*Math.PI/2:Math.PI/2,1);g.moveTo(target.x,point.y+3*yDir);lastPointOffset=point.y}});lineArray.push({x:1,y:0,z:init.x,xMax:xMax,xMin:xMin,yMax:yMax,yMin:yMin})}g.lineTo(target.x,target.y)}function generateNodes(data,that,parentIndex){for(var retChildIndex=new Array,i=0;i<data.length;i++){var node=new topologic.TopologicalNode(data[i].name,data[i].icon,parentIndex);if(data[i].children&&data[i].children.length>0){node.nodeChildren=arguments.callee(data[i].children,that,node.index);node.image.cursor="pointer"}else node.image.cursor="move";node.ll=data[i].ll;node.toX=void 0===data[i].x?0:data[i].x;node.toY=void 0===data[i].y?0:data[i].y;node.SLT.x=node.toX/10;node.SLT.y=node.toY/10;that.SLT.addChild(node.SLT);node.x=stage.canvas.width/2;node.y=stage.canvas.height/2;node.collapsed=void 0===data[i].collapse?!0:data[i].collapse;that.addChild(node);retChildIndex.push(node.index)}return retChildIndex}function selectLineColor(g,ll,timeStamp){g.beginStroke("#fcce10")}function determinant(v1,v2,v3,v4){return v1*v3-v2*v4}function intersect(aa,bb,cc,dd){var delta=determinant(bb.x-aa.x,cc.x-dd.x,bb.y-aa.y,cc.y-dd.y);if(1e-6>=delta&&delta>=-1e-6)return!1;var namenda=determinant(cc.x-aa.x,cc.x-dd.x,cc.y-aa.y,cc.y-dd.y)/delta;if(namenda>1||0>namenda)return!1;var miu=determinant(bb.x-aa.x,cc.x-aa.x,bb.y-aa.y,cc.y-aa.y)/delta;return miu>1||0>miu?!1:!0}function compareDistance(a,b,c){var adistance=(a.x-c.x)*(a.x-c.x)+(a.y-c.y)*(a.y-c.y),bdistance=(b.x-c.x)*(b.x-c.x)+(b.y-c.y)*(b.y-c.y);return bdistance>adistance?-1:1}(topologic.TopologicalDiagram=function(data){this.initialize();this.shape=new cjs.Shape;this.SLT=new cjs.Container;this.smallerAble=!0;generateNodes(data,this);this.drawLine=function(timeStamp){this.smallerAble=!0;for(var nodes=topologic.TopologicalNode.pool,i=0;i<nodes.length;i++)for(var j=0;j<nodes[i].ports.length;j++)nodes[i].ports[j].link=-1;var g=new cjs.Graphics,lineArray=new Array;g.setStrokeStyle(2);for(var i=0;i<nodes.length;i++)if(nodes[i].nodeChildren){for(var children=new Array,j=0;j<nodes[i].nodeChildren.length;j++)nodes[nodes[i].nodeChildren[j]].visible&&children.push(nodes[nodes[i].nodeChildren[j]]);for(var ports=nodes[i].ports,j=0;j<children.length;j++){for(var orderPorts=new Array,k=0;k<ports.length;k++)orderPorts.push({x:ports[k].x,y:ports[k].y,link:ports[k].link,index:k});orderPorts.sort(function(a,b){return compareDistance({x:a.x+nodes[i].x,y:a.y+nodes[i].y},{x:b.x+nodes[i].x,y:b.y+nodes[i].y},{x:children[j].x+children[j].nodeWidth/2,y:children[j].y+children[j].nodeHeight/2})});var childPorts=children[j].ports,childPort=null;!function(index){if(-1!==orderPorts[index].link){if(orderPorts.length>index+1){var competitor=nodes[orderPorts[index].link],cross=intersect({x:orderPorts[index].x,y:orderPorts[index].y},{x:competitor.x,y:competitor.y},{x:orderPorts[index+1].x,y:orderPorts[index+1].y},{x:children[j].x,y:children[j].y});if(-1!==orderPorts[index+1].link){arguments.callee(index+1);if(cross){orderPorts[index+1].link=orderPorts[index].link;orderPorts[index].link=children[j].index;childPort.link=i}else{orderPorts[index+1].link=children[j].index;for(k=0;k<childPorts.length;k++){childPort||(childPort=childPorts[k]);-1===compareDistance({x:childPorts[k].x+children[j].x,y:childPorts[k].y+children[j].y},{x:childPort.x+children[j].x,y:childPort.y+children[j].y},{x:nodes[i].x+orderPorts[index+1].x,y:nodes[i].y+orderPorts[index+1].y})&&(childPort=childPorts[k])}childPort.link=i}}else if(cross){ports[orderPorts[index+1].index].link=ports[orderPorts[index].index].link;ports[orderPorts[index].index].link=children[j].index;for(k=0;k<childPorts.length;k++){childPort||(childPort=childPorts[k]);-1===compareDistance({x:childPorts[k].x+children[j].x,y:childPorts[k].y+children[j].y},{x:childPort.x+children[j].x,y:childPort.y+children[j].y},{x:nodes[i].x+ports[orderPorts[index].index].x,y:nodes[i].y+ports[orderPorts[index].index].y})&&(childPort=childPorts[k])}childPort.link=i}else{ports[orderPorts[index+1].index].link=children[j].index;for(k=0;k<childPorts.length;k++){childPort||(childPort=childPorts[k]);-1===compareDistance({x:childPorts[k].x+children[j].x,y:childPorts[k].y+children[j].y},{x:childPort.x+children[j].x,y:childPort.y+children[j].y},{x:nodes[i].x+ports[orderPorts[index+1].index].x,y:nodes[i].y+ports[orderPorts[index+1].index].y})&&(childPort=childPorts[k])}childPort.link=i}}}else{ports[orderPorts[index].index].link=children[j].index;for(k=0;k<childPorts.length;k++){childPort||(childPort=childPorts[k]);-1===compareDistance({x:childPorts[k].x+children[j].x,y:childPorts[k].y+children[j].y},{x:childPort.x+children[j].x,y:childPort.y+children[j].y},{x:nodes[i].x+ports[orderPorts[index].index].x,y:nodes[i].y+ports[orderPorts[index].index].y})&&(childPort=childPorts[k])}childPort.link=i}}(0)}}for(var i=0;i<nodes.length;i++)for(var j=0;4>j;j++)if(-1==nodes[i].ports[0+3*j].link&&-1==nodes[i].ports[1+3*j].link&&-1!=nodes[i].ports[2+3*j].link){nodes[i].ports[1+3*j].link=nodes[i].ports[2+3*j].link;nodes[i].ports[2+3*j].link=-1}else if(-1==nodes[i].ports[2+3*j].link&&-1==nodes[i].ports[1+3*j].link&&-1!=nodes[i].ports[0+3*j].link){nodes[i].ports[1+3*j].link=nodes[i].ports[0+3*j].link;nodes[i].ports[0+3*j].link=-1}for(var i=0;i<nodes.length;i++)for(var j=0;j<nodes[i].ports.length;j++)if(-1!=nodes[i].ports[j].link&&nodes[i].nodeChildren){for(var children=null,k=0;k<nodes[i].nodeChildren.length;k++)nodes[i].nodeChildren[k]==nodes[i].ports[j].link&&(children=nodes[nodes[i].ports[j].link]);if(children)for(var k=0;k<children.ports.length;k++)if(children.ports[k].link==i){selectLineColor(g,children.ll,timeStamp);if(1==children.visible){var portRadius=nodes[i].portRadius,initPoint={x:nodes[i].ports[j].x+nodes[i].x,y:nodes[i].ports[j].y+nodes[i].y,portId:j},targetPoint={x:children.ports[k].x+children.x,y:children.ports[k].y+children.y,portId:k},parentPortSide=parseInt(j/3),childPortSide=parseInt(k/3);if(0==parentPortSide&&2==childPortSide)if(initPoint.y>targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x,initPoint.y-portRadius);var center=(targetPoint.y-initPoint.y)/2+initPoint.y,radius=Math.abs(targetPoint.x-initPoint.x)/2>5?5:Math.abs(targetPoint.x-initPoint.x)/2;link({x:initPoint.x,y:initPoint.y-portRadius},{x:initPoint.x,y:center+radius},g,lineArray);if(initPoint.x>targetPoint.x){g.arc(initPoint.x-radius,center+radius,radius,0,Math.PI/2*3,-1);link({x:initPoint.x-radius,y:center},{x:targetPoint.x+radius,y:center},g,lineArray);g.arc(targetPoint.x+radius,center-radius,radius,Math.PI/2,Math.PI)}else{g.arc(initPoint.x+radius,center+radius,radius,Math.PI,Math.PI/2*3);link({x:initPoint.x+radius,y:center},{x:targetPoint.x-radius,y:center},g,lineArray);g.arc(targetPoint.x-radius,center-radius,radius,Math.PI/2,0,-1)}g.moveTo(targetPoint.x,center-radius);link({x:targetPoint.x,y:center-radius},{x:targetPoint.x,y:targetPoint.y+portRadius},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI)}else this.smallerAble=!1;else if(0==parentPortSide&&1==childPortSide)if(initPoint.x>targetPoint.x&&initPoint.y>targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x+portRadius,initPoint.y);var radius=Math.abs(targetPoint.y-initPoint.y)/2>5?5:Math.abs(targetPoint.y-initPoint.y)/2;link({x:initPoint.x,y:initPoint.y-portRadius},{x:initPoint.x,y:targetPoint.y+radius},g,lineArray);g.arc(initPoint.x-radius,targetPoint.y+radius,radius,0,Math.PI/2*3,-1);g.moveTo(initPoint.x-radius,targetPoint.y);link({x:initPoint.x-radius,y:targetPoint.y},{x:targetPoint.x+portRadius,y:targetPoint.y},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI)}else this.smallerAble=!1;else if(0==parentPortSide&&3==childPortSide)if(initPoint.x<targetPoint.x&&initPoint.y>targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x,initPoint.y-portRadius);var radius=Math.abs(targetPoint.y-initPoint.y)/2>5?5:Math.abs(targetPoint.y-initPoint.y)/2;link({x:initPoint.x,y:initPoint.y-portRadius},{x:initPoint.x,y:targetPoint.y+radius},g,lineArray);g.arc(initPoint.x+radius,targetPoint.y+radius,radius,Math.PI,Math.PI/2*3);g.moveTo(initPoint.x+radius,targetPoint.y);link({x:initPoint.x+radius,y:targetPoint.y},{x:targetPoint.x-portRadius,y:targetPoint.y},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1;else if(1==parentPortSide&&3==childPortSide)if(initPoint.x<targetPoint.x){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x+portRadius,initPoint.y);var center=(targetPoint.x-initPoint.x)/2+initPoint.x,radius=Math.abs(targetPoint.y-initPoint.y)/2>5?5:Math.abs(targetPoint.y-initPoint.y)/2;link({x:initPoint.x+portRadius,y:initPoint.y},{x:center-radius,y:initPoint.y},g,lineArray);if(initPoint.y<targetPoint.y){g.arc(center-radius,initPoint.y+radius,radius,Math.PI/2*3,0);link({x:center,y:initPoint.y+radius},{x:center,y:targetPoint.y-radius},g,lineArray);g.arc(center+radius,targetPoint.y-radius,radius,Math.PI,Math.PI/2,-1)}else{g.arc(center-radius,initPoint.y-radius,radius,Math.PI/2,0,-1);link({x:center,y:initPoint.y-radius},{x:center,y:targetPoint.y+radius},g,lineArray);g.arc(center+radius,targetPoint.y+radius,radius,Math.PI,Math.PI/2*3)}g.moveTo(center+radius,targetPoint.y);link({x:center+radius,y:targetPoint.y},{x:targetPoint.x-portRadius,y:targetPoint.y},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1;else if(1==parentPortSide&&0==childPortSide)if(initPoint.x<targetPoint.x&&initPoint.y<targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x+portRadius,initPoint.y);var radius=Math.abs(targetPoint.x-initPoint.x)/2>5?5:Math.abs(targetPoint.x-initPoint.x)/2;link({x:initPoint.x+portRadius,y:initPoint.y},{x:targetPoint.x-radius,y:initPoint.y},g,lineArray);g.arc(targetPoint.x-radius,initPoint.y+radius,radius,Math.PI/2*3,0);g.moveTo(targetPoint.x,initPoint.y+radius);link({x:targetPoint.x,y:initPoint.y+radius},{x:targetPoint.x,y:targetPoint.y-portRadius},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI)}else this.smallerAble=!1;else if(1==parentPortSide&&2==childPortSide)if(initPoint.x<targetPoint.x&&initPoint.y>targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x+portRadius,initPoint.y);var radius=Math.abs(targetPoint.x-initPoint.x)/2>5?5:Math.abs(targetPoint.x-initPoint.x)/2;link({x:initPoint.x+portRadius,y:initPoint.y},{x:targetPoint.x-radius,y:initPoint.y},g,lineArray);g.arc(targetPoint.x-radius,initPoint.y-radius,radius,Math.PI/2,0,-1);g.moveTo(targetPoint.x,initPoint.y-radius);link({x:targetPoint.x,y:initPoint.y-radius},{x:targetPoint.x,y:targetPoint.y+portRadius},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI)}else this.smallerAble=!1;else if(2==parentPortSide&&0==childPortSide)if(initPoint.y<targetPoint.y){g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI);g.moveTo(targetPoint.x,targetPoint.y-portRadius);var center=(initPoint.y-targetPoint.y)/2+targetPoint.y,radius=Math.abs(initPoint.x-targetPoint.x)/2>5?5:Math.abs(initPoint.x-targetPoint.x)/2;link({x:targetPoint.x,y:targetPoint.y-portRadius},{x:targetPoint.x,y:center+radius},g,lineArray);if(targetPoint.x>initPoint.x){g.arc(targetPoint.x-radius,center+radius,radius,0,Math.PI/2*3,-1);link({x:targetPoint.x-radius,y:center},{x:initPoint.x+radius,y:center},g,lineArray);g.arc(initPoint.x+radius,center-radius,radius,Math.PI/2,Math.PI)}else{g.arc(targetPoint.x+radius,center+radius,radius,Math.PI,Math.PI/2*3);link({x:targetPoint.x+radius,y:center},{x:initPoint.x-radius,y:center},g,lineArray);g.arc(initPoint.x-radius,center-radius,radius,Math.PI/2,0,-1)}g.moveTo(initPoint.x,center-radius);link({x:initPoint.x,y:center-radius},{x:initPoint.x,y:initPoint.y+portRadius},g,lineArray);g.arc(initPoint.x,initPoint.y,portRadius,Math.PI/2,Math.PI/2*5)}else this.smallerAble=!1;else if(2==parentPortSide&&1==childPortSide)if(initPoint.x>targetPoint.x&&initPoint.y<targetPoint.y){g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI);g.moveTo(targetPoint.x+portRadius,targetPoint.y);var radius=Math.abs(initPoint.x-targetPoint.x)/2>5?5:Math.abs(initPoint.x-targetPoint.x)/2;link({x:targetPoint.x+portRadius,y:targetPoint.y},{x:initPoint.x-radius,y:targetPoint.y},g,lineArray);g.arc(initPoint.x-radius,targetPoint.y-radius,radius,Math.PI/2,0,-1);g.moveTo(initPoint.x,targetPoint.y-radius);link({x:initPoint.x,y:targetPoint.y-radius},{x:initPoint.x,y:initPoint.y+portRadius},g,lineArray);g.arc(initPoint.x,initPoint.y,portRadius,Math.PI/2,Math.PI/2*5)}else this.smallerAble=!1;else if(2==parentPortSide&&3==childPortSide)if(initPoint.x<targetPoint.x&&initPoint.y<targetPoint.y){g.arc(initPoint.x,initPoint.y,portRadius,0,2*Math.PI);g.moveTo(initPoint.x,initPoint.y+portRadius);var radius=Math.abs(targetPoint.x-initPoint.x)/2>5?5:Math.abs(targetPoint.x-initPoint.x)/2;link({x:initPoint.x,y:initPoint.y+portRadius},{x:initPoint.x,y:targetPoint.y-radius},g,lineArray);g.arc(initPoint.x+radius,targetPoint.y-radius,radius,Math.PI,Math.PI/2,-1);g.moveTo(initPoint.x+radius,targetPoint.y);link({x:initPoint.x+radius,y:targetPoint.y},{x:targetPoint.x-portRadius,y:targetPoint.y},g,lineArray);g.arc(targetPoint.x,targetPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1;else if(3==parentPortSide&&1==childPortSide)if(initPoint.x>targetPoint.x){g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI);g.moveTo(targetPoint.x+portRadius,targetPoint.y);var center=(initPoint.x-targetPoint.x)/2+targetPoint.x,radius=Math.abs(initPoint.y-targetPoint.y)/2>5?5:Math.abs(initPoint.y-targetPoint.y)/2;link({x:targetPoint.x+portRadius,y:targetPoint.y},{x:center-radius,y:targetPoint.y},g,lineArray);if(targetPoint.y<initPoint.y){g.arc(center-radius,targetPoint.y+radius,radius,Math.PI/2*3,0);link({x:center,y:targetPoint.y+radius},{x:center,y:initPoint.y-radius},g,lineArray);g.arc(center+radius,initPoint.y-radius,radius,Math.PI,Math.PI/2,-1)}else{g.arc(center-radius,targetPoint.y-radius,radius,Math.PI/2,0,-1);link({x:center,y:targetPoint.y-radius},{x:center,y:initPoint.y+radius},g,lineArray);g.arc(center+radius,initPoint.y+radius,radius,Math.PI,Math.PI/2*3)}g.moveTo(center+radius,initPoint.y);link({x:center+radius,y:initPoint.y},{x:initPoint.x-portRadius,y:initPoint.y},g,lineArray);g.arc(initPoint.x,initPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1;else if(3==parentPortSide&&0==childPortSide)if(initPoint.x>targetPoint.x&&initPoint.y<targetPoint.y){g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI);g.moveTo(targetPoint.x,targetPoint.y-portRadius);var radius=Math.abs(initPoint.y-targetPoint.y)/2>5?5:Math.abs(initPoint.y-targetPoint.y)/2;link({x:targetPoint.x,y:targetPoint.y-portRadius},{x:targetPoint.x,y:initPoint.y+radius},g,lineArray);g.arc(targetPoint.x+radius,initPoint.y+radius,radius,Math.PI,Math.PI/2*3);g.moveTo(targetPoint.x+radius,initPoint.y);g.arc(initPoint.x,initPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1;else if(3==parentPortSide&&2==childPortSide)if(initPoint.x>targetPoint.x&&initPoint.y>targetPoint.y){g.arc(targetPoint.x,targetPoint.y,portRadius,0,2*Math.PI);g.moveTo(targetPoint.x,targetPoint.y+portRadius);var radius=Math.abs(initPoint.x-targetPoint.x)/2>5?5:Math.abs(initPoint.x-targetPoint.x)/2;link({x:targetPoint.x,y:targetPoint.y+portRadius},{x:targetPoint.x,y:initPoint.y-radius},g,lineArray);g.arc(targetPoint.x+radius,initPoint.y-radius,radius,Math.PI,Math.PI/2,-1);g.moveTo(targetPoint.x+radius,initPoint.y);link({x:targetPoint.x+radius,y:initPoint.y},{x:initPoint.x-radius,y:initPoint.y},g,lineArray);g.arc(initPoint.x,initPoint.y,portRadius,Math.PI,3*Math.PI)}else this.smallerAble=!1}}}this.children[0].graphics&&this.removeChildAt(0);this.shape=new cjs.Shape(g);this.addChildAt(this.shape,0)};this.drawLine()}).prototype=new cjs.Container;topologic.TopologicalDiagram.prototype.nominalBounds=new cjs.Rectangle(726.5,478.5,126,92.5);topologic.TopologicalDiagram.prototype.reloadData=function(data){this.removeAllChildren();topologic.TopologicalNode.pool=[];generateNodes(data,this);this.drawLine()}});
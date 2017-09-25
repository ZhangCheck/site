define(["require","zrender/tool/util"],function(require){function TreeNode(id,data){this.id=id;this.depth=0;this.height=0;this.children=[];this.parent=null;this.data=data||null}function Tree(id){this.root=new TreeNode(id)}var zrUtil=require("zrender/tool/util");TreeNode.prototype.add=function(child){var children=this.children;if(child.parent!==this){children.push(child);child.parent=this}};TreeNode.prototype.remove=function(child){var children=this.children,idx=zrUtil.indexOf(children,child);if(idx>=0){children.splice(idx,1);child.parent=null}};TreeNode.prototype.traverse=function(cb,context){cb.call(context,this);for(var i=0;i<this.children.length;i++)this.children[i].traverse(cb,context)};TreeNode.prototype.updateDepthAndHeight=function(depth){var height=0;this.depth=depth;for(var i=0;i<this.children.length;i++){var child=this.children[i];child.updateDepthAndHeight(depth+1);child.height>height&&(height=child.height)}this.height=height+1};TreeNode.prototype.getNodeById=function(id){if(this.id===id)return this;for(var i=0;i<this.children.length;i++){var res=this.children[i].getNodeById(id);if(res)return res}};Tree.prototype.traverse=function(cb,context){this.root.traverse(cb,context)};Tree.prototype.getSubTree=function(id){var root=this.getNodeById(id);if(root){var tree=new Tree(root.id);tree.root=root;return tree}};Tree.prototype.getNodeById=function(id){return this.root.getNodeById(id)};Tree.fromOptionData=function(id,data){function buildHierarchy(dataNode,parentNode){var node=new TreeNode(dataNode.name,dataNode);parentNode.add(node);var children=dataNode.children;if(children)for(var i=0;i<children.length;i++)buildHierarchy(children[i],node)}var tree=new Tree(id),rootNode=tree.root;rootNode.data={name:id,children:data};for(var i=0;i<data.length;i++)buildHierarchy(data[i],rootNode);tree.root.updateDepthAndHeight(0);return tree};Tree.fromGraph=function(graph){function buildHierarchy(root){for(var graphNode=graph.getNodeById(root.id),i=0;i<graphNode.outEdges.length;i++){var edge=graphNode.outEdges[i],childTreeNode=treeNodesMap[edge.node2.id];root.children.push(childTreeNode);buildHierarchy(childTreeNode)}}for(var treeMap={},treeNodesMap={},i=0;i<graph.nodes.length;i++){var treeNode,node=graph.nodes[i];if(0===node.inDegree()){treeMap[node.id]=new Tree(node.id);treeNode=treeMap[node.id].root}else treeNode=new TreeNode(node.id);treeNode.data=node.data;treeNodesMap[node.id]=treeNode}var treeList=[];for(var id in treeMap){buildHierarchy(treeMap[id].root);treeMap[id].root.updateDepthAndHeight(0);treeList.push(treeMap[id])}return treeList};return Tree});
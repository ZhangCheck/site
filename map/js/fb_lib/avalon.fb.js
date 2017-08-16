define(["./mmRequest/mmRequest","./cookie/avalon.cookie","css!./chameleon/fb.core.css"],function(){function getChildVM(expr,vm,strLen){for(var pre,_t,t=vm,i=0,len=expr.length;len>i;i++){var k=expr[i];_t=t.$model||t;if("undefined"==typeof _t[k])return;pre=t;t=t[k]}return strLen>1?pre[k]:pre}var fb=window.fb||{};fb.version="1.0.1";fb.server="";fb.getHtmlArg=function(name,defaultValue){var reg=new RegExp("(\\?|&)"+name+"=([^&#]*)(&|#)?"),r=window.location.href.match(reg);return null!=r?unescape(r[2]):defaultValue};fb.fbMode=fb.getHtmlArg("fbMode",-1);-1!=fb.fbMode?avalon.cookie.set("fbMode",fb.fbMode,{path:"/",httpOnly:!1}):fb.fbMode=avalon.cookie.get("fbMode",5);fb.rootPath=require.baseUrl?require.baseUrl.replace("/js",""):"";fb.math=fb.math||{};fb.log=function(){var now=new Date,msg=fb.format("[{0}:{1}:{2} {3}] ",now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds());0==arguments.length&&(msg="\n");if(fb.isDebug){fb.logs||(fb.logs=[]);fb.logs.length>300&&fb.logs.splice(0,fb.logs.length-300)}for(var i=0;i<arguments.length;i++)msg+=arguments[i]+" ";fb.isDebug&&fb.logs.push(msg);avalon.log(msg)};fb.format=function(){if(0==arguments.length)return null;for(var str=arguments[0],i=1;i<arguments.length;i++){var re=new RegExp("\\{"+(i-1)+"\\}","gm");str=str.replace(re,arguments[i])}return str};fb.getStateParam=function(name,stateName){return mmState&&mmState.currentState&&mmState.currentState.params?mmState.currentState.params[name]:null};fb.getStateQuery=function(name){if(mmState){var queryObj=mmState.query;return queryObj[name]}return""};fb.setHtmlArg=function(data,url){void 0===url&&(url=window.location.href);avalon.each(data,function(k,v){var exp=new RegExp("([&?])"+k+"=([^&=?]*)");exp.test(url)?url=url.replace(exp,RegExp.$1+k+"="+v):url+=(url.indexOf("?")>0?"&":"?")+k+"="+v});return url};fb.alert=function(msg,title,modal){void 0===title&&(title="");void 0===modal&&(modal=!1);avalon.log(title,msg);alert(title+msg)};fb.InterfaceStruct={name:"",data:null,remoteUrl:"",localUrl:"",type:"POST",async:!0,syncTarget:null,view:null,success:null,error:null,isStandard:!0,alert:null};fb.ajaxStruct={url:"",type:"",dataType:"",data:"",success:null,error:null};fb.interfaceConfigStruct={_alertCount:0,postLabel:null,_stateIndex:-1,stateTemplate:"",alert:function(interfaceObj,ms,message,log,isNew){try{if(void 0===ms){var vm=interfaceObj._stateVm;if(interfaceObj.view&&vm){vm.stateMsg="";vm.visible=!1}return}message||(message="暂无数据...");fb.log();isNew&&this._alertCount++;fb.log(fb.format("---------{0}---------",this._alertCount));fb.log(message);fb.log("Url:",interfaceObj.isLocal?interfaceObj.localUrl:interfaceObj.remoteUrl);interfaceObj.data&&fb.log("Data:",JSON.stringify(interfaceObj.data));fb.log("Log:",log);fb.log("Response:","200"==ms.status?ms.responseText:ms.statusText);fb.log("View:",interfaceObj.view);fb.log("------------------");if(interfaceObj.alert)interfaceObj.alert(interfaceObj,ms,message,log,isNew);else if(interfaceObj.view){var $div,vm;if(interfaceObj._stateVm)$div=$(interfaceObj.view).find(">.interfaceState");else{var $view=$(interfaceObj.view),view=$view.get(0),id="iState"+ ++this._stateIndex;$div=$(fb.format(this.stateTemplate,id));view.childNodes.length>0?view.insertBefore($div.get(0),view.childNodes[0]):$view.append($div);vm=interfaceObj._stateVm=avalon.define({$id:id,isLoading:!1,stateMsg:"",visible:!0});avalon.scan($div.get(0),vm)}if(vm){vm.visible=!0;vm.isLoading=isNew;vm.stateMsg=message}}}catch(ex){fb.log("alert error:",ex)}},_callback:function(interfaceObj,ms,data){this.alert(interfaceObj);try{interfaceObj.success(data,interfaceObj,ms)}catch(ex){this.alert(interfaceObj,ms,null,"回调函数出错:"+ex+"\n"+ex.stack)}},success:function(interfaceObj,ms,data){null!=data?void 0!=data.errorCode?this.error(interfaceObj,ms,"Warning:出错时接口不应该返回200状态"):void 0!=data.errorcode?this.error(interfaceObj,ms,"Warning:出错时接口不应该返回200状态,'errorcode'应为'errorCode'"):Array.isArray(data)&&0==data.length?this.alert(interfaceObj,ms,null,"接口返回为空数组"):this._callback(interfaceObj,ms,data):this.alert(interfaceObj,ms,null,"返回数据不存在")},error:function(interfaceObj,ms,message){void 0===message&&(message="");if(ms)if("200"==ms.status)this.alert(interfaceObj,ms,null,"JSON格式有误"+message);else if("404"==ms.status)this.alert(interfaceObj,ms,null,"404连接失败..."+message);else if("500"==ms.status){var responseJSON=eval("("+ms.responseText+")");alert(responseJSON.errorCode+": "+responseJSON.message);this.alert(interfaceObj,ms,data,"接口错误")}else this.alert(interfaceObj,ms,null,"未知错误 状态码:"+ms.status+message);else this.alert(interfaceObj,{},null,message);if(fb.state(fb.fbMode,8)&&!interfaceObj.isLocal){interfaceObj.isLocal=!0;fb.requestJson(interfaceObj,!0)}interfaceObj.error&&interfaceObj.error(ms)},complete:function(interfaceObj,ms){interfaceObj.complete&&interfaceObj.complete(interfaceObj,ms)},extendDataCheck:function(data){return!0},dataFormat:null};fb.config={"interface":fb.interfaceConfigStruct};window.$||(window.$=function(selector){return selector instanceof AsJquery?selector:new AsJquery(selector)});var AsJquery=function(selector){this.els=[];this.length=0;if(void 0===selector)return this;try{if("string"==typeof selector)if(selector.match(/<(\w*)(.*)\/?>/)){var p=document.createElement("div"),t=this;p.innerHTML=selector;avalon.each(p.childNodes,function(i,e){t.els.push(e)})}else this.els=document.querySelectorAll(selector);else this.els.push(selector)}catch(ex){fb.log("AsJquery Error:",ex,ex.stack)}this.length=this.els.length};AsJquery.id=0;AsJquery.prototype={generateId:function(){return this.each(function(i,e){var id=e.getAttribute("id");id||(id="aq"+AsJquery.id++);e.setAttribute("id",id)})},attr:function(name,value){return 0!=this.els.length?void 0===value?this.els[0]?this.els[0].getAttribute(name):null:this.each(function(i,e){"object"==typeof name?avalon.each(name,function(k,v){e.setAttribute(k,v)}):e.setAttribute(name,value)}):void 0},add:function(selector){var newAq;newAq=selector instanceof AsJquery?selector:$(selector);newAq.each(function(i,e){this.els.push(e);this.length=this.els.length})},find:function(selector){for(var cls=new AsJquery,i=this.els.length-1;i>=0;i--){var id=this.els[i].getAttribute("id");id||(id="aq"+AsJquery.id++);this.els[i].setAttribute("id",id);var finds=document.querySelectorAll("#"+id+(">"==selector.charAt(0)?"":" ")+selector);finds&&avalon.each(finds,function(i,e){cls.els.push(e);cls.length=cls.els.length})}return cls},remove:function(){return this.each(function(i,e){e.parentNode&&e.parentNode.removeChild(e)})},css:function(name,value){if(void 0===value&&"string"==typeof name)return avalon.css(this.els[0],name);var obj=null;if(avalon.isPlainObject(name))obj=name;else{obj={};obj[name]=value}for(var p in obj)for(var i=this.els.length-1;i>=0;i--)this.els[i]&&avalon.css(this.els[i],p,obj[p]);return this},empty:function(){return this.each(function(i,e){avalon.clearHTML(e)})},width:function(v){if(void 0!==v){"number"==typeof v&&(v+="px");this.css("width",v);return this}var w=0;this.els.length>0&&(w=avalon(this.els[0]).outerWidth());return w},height:function(v){if(void 0!==v){"number"==typeof v&&(v+="px");this.css("height",v);return this}var h=0;this.els.length>0&&(h=avalon(this.els[0]).outerHeight());return h},eq:function(index){return this.length>0&&index<this.length?$(this.els[index]):$()},get:function(i){return i<this.els.length?this.els[i]:null},addClass:function(v){return this.each(function(i,e){avalon(e).addClass(v)})},removeClass:function(v){return this.each(function(i,e){avalon(e).removeClass(v)})},toggleClass:function(v){return this.each(function(i,e){avalon(e).toggleClass(v)})},hasClass:function(v){return avalon(this.els[0]).hasClass(v)},parent:function(){return $(this.get(0).parentNode)},each:function(callback){for(var i=this.els.length-1;i>=0;i--)callback(i,this.els[i]);return this},appendTo:function(v){return this.each(function(i,c){$(v).each(function(j,p){p.appendChild(c)})})},append:function(v){return this.each(function(i,p){$(v).each(function(j,c){p.appendChild(c)})})},hide:function(){return this.css("display","none")},show:function(){return this.css("display","")},bind:function(e,f,p){return this.each(function(i,d){avalon.bind(d,e,f,p)})},unbind:function(e,f,p){return this.each(function(i,d){avalon.unbind(d,e,f,p)})},html:function(v){return void 0===v?this.els.length>0?this.els[0].innerHTML:null:this.each(function(i,e){avalon.innerHTML(e,v)})},text:function(v){return void 0===v?this.els.length>0?this.els[0].textContent:null:this.each(function(i,e){e.textContent=v})}};fb.requestJson=function(interfaceObj){if(!interfaceObj.isLocal&&fb.state(fb.fbMode,16)||fb.state(fb.fbMode,8)&&!interfaceObj.isLocal&&(!interfaceObj.remoteUrl||""==interfaceObj.remoteUrl)){interfaceObj.isLocal=!0;return fb.requestJson(interfaceObj)}if(!interfaceObj.isLocal||!fb.state(fb.fbMode,1)){var url=interfaceObj.isLocal?interfaceObj.localUrl:interfaceObj.remoteUrl;interfaceObj.isLocal&&fb.log("加载本地数据:",url);var uploadData={};"POST"==interfaceObj.type?fb.config["interface"].postLabel?uploadData[fb.config["interface"].postLabel]=JSON.stringify(interfaceObj.data):uploadData=JSON.stringify(interfaceObj.data):uploadData=interfaceObj.data;var config={type:interfaceObj.type,url:url,dataType:"json",contentType:fb.config["interface"].postLabel?"application/x-www-form-urlencoded; charset=UTF-8":"application/json",data:uploadData,async:void 0===interfaceObj.async?!0:interfaceObj.async,success:function(data,msState,ms){fb.log("接口访问成功:",url);fb.config["interface"].dataFormat&&(data=fb.config["interface"].dataFormat(data));fb.config["interface"].success(interfaceObj,ms,data)},error:function(ms,msState){fb.log("接口访问失败:",url);fb.config["interface"].error(interfaceObj,ms)},complete:function(ms,msState){fb.config["interface"].complete(interfaceObj,ms)}};fb.config["interface"].alert(interfaceObj);var promise;try{promise=avalon.ajax(config)}catch(ex){fb.config["interface"].error(interfaceObj,null,"接口访问异常:"+ex+(ex.stack?ex.stack:""))}promise&&config.async&&fb.config["interface"].alert(interfaceObj,promise,"信息加载中...",null,!0);return promise}fb.log("fbMode配置错误")};fb.postJson=function(interfaceObj){interfaceObj.type="POST";fb.requestJson(interfaceObj)};fb.getJson=function(interfaceObj){interfaceObj.type="GET";fb.requestJson(interfaceObj)};fb.getModel=function(expr,vmodels){if(!expr)return null;var str=expr.split("."),strLen=str.length,last=str[strLen-1];1!=str.length&&str.pop();for(var i=0,len=vmodels.length;len>i;i++){var ancestor=vmodels[i],child=getChildVM(str,ancestor,strLen);if("undefined"!=typeof child&&(child.hasOwnProperty(last)||Object.prototype.hasOwnProperty.call(child,last)))return[last,child,ancestor]}return null};fb.watchCollection=function(model,watch,callback,deep){if(0!=deep){model.$watch(watch,callback);for(var obj=model,$obj=model.$model,propertes=watch.split("."),i=0;i<propertes.length;i++){if(!$obj)return;$obj=$obj[propertes[i]];obj=obj[propertes[i]]}void 0===deep&&(deep=10);obj.$watch(watch,callback);if(avalon.isPlainObject($obj)){var curDeep=0;for(var key in $obj){obj.$watch(key,callback);avalon.log("fb watch",watch+"."+key);curDeep++;avalon.isPlainObject($obj[key])&&fb.watchCollection(model,watch+"."+key,callback,deep-1)}}else Array.isArray($obj)}};fb.unwatchPlainObj=function($obj,objName,callback,deep){};fb.safeChangeObj=function($obj,property,value){var temp={},prop=temp;avalon.mix(temp,$obj);for(var propertes=property.split("."),i=0;i<propertes.length;i++)prop=prop[propertes[i]];void 0===value?delete prop:prop=value;return temp};fb.safeDeleteObjProp=function($obj,property){return fb.safeChangeObj($obj,property)};fb.getStyle=function(url,toHead){fb.log("addStyle:",url);void 0===toHead&&(toHead=!0);var link=$('link[href="'+url+'"]').get(0);if(link){fb.log("has exit");$(link).remove()}link=document.createElement("link");link.rel="stylesheet";link.type="text/css";link.href=url;if(toHead){fb.log("addStyle to head");var head=document.getElementsByTagName("head")[0];head.appendChild(link);fb.log("addStyle to head end")}return link};fb.removeStyle=function(url){fb.log("remove style:",url);var link=$('link[href="'+url+'"]');link.remove()};fb.math.percentToNumber=function(v){if("string"==typeof v&&v.indexOf("%")>0)return parseFloat(v.replace("%",""))/100;throw new Error("无效百分数")};fb.math.numberToPercent=function(v,deciment){void 0===deciment&&(deciment=0);if("number"==typeof v)return(100*v).toFixed(deciment)+"%";throw new Error("非小数")};fb.state=function(room,seat,person){return void 0===person?(room&seat)==seat:(person?room|=seat:room&=~seat,fb)};window.fb=fb;return fb});
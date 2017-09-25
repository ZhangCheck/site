define(["avalon","../mmPromise/mmPromise"],function(avalon){function IE(){if(window.VBArray){var mode=document.documentMode;return mode?mode:window.XMLHttpRequest?7:6}return 0}function parseJS(code){var indirect=eval;code=code.trim();if(code)if(1===code.indexOf("use strict")){var script=document.createElement("script");script.text=code;head.appendChild(script).parentNode.removeChild(script)}else indirect(code)}function parseXML(data,xml,tmp){try{var mode=document.documentMode;if(window.DOMParser&&(!mode||mode>8)){tmp=new DOMParser;xml=tmp.parseFromString(data,"text/xml")}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data)}}catch(e){xml=void 0}xml&&xml.documentElement&&!xml.getElementsByTagName("parsererror").length||avalon.error("Invalid XML: "+data);return xml}function ajaxExtend(opts){opts=avalon.mix({},defaults,opts);opts.type=opts.type.toUpperCase();var querystring="string"==typeof opts.data?opts.data:avalon.param(opts.data);opts.querystring=querystring||"";opts.url=opts.url.replace(rhash,"").replace(rprotocol,location.protocol+"//");if("boolean"!=typeof opts.crossDomain){var urlAnchor=document.createElement("a");try{urlAnchor.href=opts.url;var absUrl="1"[0]?urlAnchor.href:urlAnchor.getAttribute("href",4);urlAnchor.href=absUrl;opts.crossDomain=originAnchor.protocol+"//"+originAnchor.host!=urlAnchor.protocol+"//"+urlAnchor.host}catch(e){opts.crossDomain=!0}}opts.hasContent=!rnoContent.test(opts.type);if(!opts.hasContent){querystring&&(opts.url+=(rquery.test(opts.url)?"&":"?")+querystring);opts.cache===!1&&(opts.url+=(rquery.test(opts.url)?"&":"?")+"_time="+(new Date-0))}return opts}function ok(val){return val}function ng(e){throw e}function paramInner(prefix,obj,add){var name;if(Array.isArray(obj))avalon.each(obj,function(i,v){paramInner(prefix+"["+("object"==typeof v?i:"")+"]",v,add)});else if(avalon.isPlainObject(obj))for(name in obj)paramInner(prefix+"["+name+"]",obj[name],add);else add(prefix,obj)}function trimLine(val){return val.replace(rline,"\r\n")}var global=this||(0,eval)("this"),DOC=global.document,encode=encodeURIComponent,decode=decodeURIComponent,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rhash=/#.*$/,rquery=/\?/,rjsonp=/(=)\?(?=&|$)|\?\?/,r20=/%20/g,originAnchor=document.createElement("a");originAnchor.href=location.href;var accepts={xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",script:"text/javascript, application/javascript","*":["*/"]+["*"]},useOnload=0===IE()||IE()>8;String.prototype.startsWith||(String.prototype.startsWith=function(searchString,position){position=position||0;return this.lastIndexOf(searchString,position)===position});var head=DOC.getElementsByTagName("head")[0],isLocal=!1;try{isLocal=rlocalProtocol.test(location.protocol)}catch(e){}!new function(){var s=["XMLHttpRequest","ActiveXObject('MSXML2.XMLHTTP.6.0')","ActiveXObject('MSXML2.XMLHTTP.3.0')","ActiveXObject('MSXML2.XMLHTTP')","ActiveXObject('Microsoft.XMLHTTP')"];s[0]=IE()<8&&0!==IE()&&isLocal?"!":s[0];for(var i=0,axo;axo=s[i++];)try{if(eval("new "+axo)){avalon.xhr=new Function("return new "+axo);break}}catch(e){}};var supportCors="withCredentials"in avalon.xhr(),defaults={type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",async:!0,jsonp:"callback"},XHRMethods={setRequestHeader:function(name,value){this.requestHeaders[name]=value;return this},getAllResponseHeaders:function(){return 4===this.readyState?this.responseHeadersString:null},getResponseHeader:function(name,match){if(4===this.readyState){for(;match=rheaders.exec(this.responseHeadersString);)this.responseHeaders[match[1]]=match[2];match=this.responseHeaders[name]}return void 0===match?null:match},overrideMimeType:function(type){this.mimeType=type;return this},abort:function(statusText){statusText=statusText||"abort";this.transport&&this.respond(0,statusText);return this},dispatch:function(status,nativeStatusText){var statusText=nativeStatusText;if(this.transport){this.readyState=4;var isSuccess=status>=200&&300>status||304===status;if(isSuccess)if(204===status)statusText="nocontent";else if(304===status)statusText="notmodified";else if("undefined"==typeof this.response){var dataType=this.options.dataType||this.options.mimeType;if(!dataType&&this.responseText||this.responseXML){dataType=this.getResponseHeader("Content-Type")||"";dataType=dataType.match(/json|xml|script|html/)||["text"];dataType=dataType[0]}var responseText=this.responseText||"",responseXML=this.responseXML||"";try{this.response=avalon.ajaxConverters[dataType].call(this,responseText,responseXML)}catch(e){isSuccess=!1;this.error=e;statusText="parsererror"}}this.status=status;this.statusText=statusText+"";if(this.timeoutID){clearTimeout(this.timeoutID);delete this.timeoutID}this._transport=this.transport;isSuccess?this._resolve([this.response,statusText,this]):this._reject([this,statusText,this.error]);delete this.transport}}};avalon.ajax=function(opts,promise){opts&&opts.url||avalon.error("参数必须为Object并且拥有url属性");opts=ajaxExtend(opts);var _reject,_resolve,XHRProperties={responseHeadersString:"",responseHeaders:{},requestHeaders:{},querystring:opts.querystring,readyState:0,uniqueID:(""+Math.random()).replace(/0\./,""),status:0},promise=new avalon.Promise(function(resolve,reject){_resolve=resolve;_reject=reject});promise.options=opts;promise._reject=_reject;promise._resolve=_resolve;var doneList=[],failList=[];Array("done","fail","always").forEach(function(method){promise[method]=function(fn){if("function"==typeof fn){"fail"!==method&&doneList.push(fn);"done"!==method&&failList.push(fn)}return this}});var isSync=opts.async===!1;if(isSync){avalon.log("warnning:与jquery1.8一样,async:false这配置已经被废弃");promise.async=!1}avalon.mix(promise,XHRProperties,XHRMethods);promise.then(function(value){value=Array.isArray(value)?value:void 0===value?[]:[value];for(var fn,i=0;fn=doneList[i++];)fn.apply(promise,value);return value},function(value){value=Array.isArray(value)?value:void 0===value?[]:[value];for(var fn,i=0;fn=failList[i++];)fn.apply(promise,value);return value});promise.done(opts.success).fail(opts.error).always(opts.complete);var dataType=opts.dataType,transports=avalon.ajaxTransports;(opts.crossDomain&&!supportCors||rjsonp.test(opts.url))&&"json"===dataType&&"GET"===opts.type&&(dataType=opts.dataType="jsonp");var name=opts.form?"upload":dataType,transport=transports[name]||transports.xhr;avalon.mix(promise,transport);promise.preproccess&&(dataType=promise.preproccess()||dataType);opts.contentType&&promise.setRequestHeader("Content-Type",opts.contentType);promise.setRequestHeader("Accept",accepts[dataType]?accepts[dataType]+", */*; q=0.01":accepts["*"]);for(var i in opts.headers)promise.setRequestHeader(i,opts.headers[i]);opts.async&&opts.timeout>0&&(promise.timeoutID=setTimeout(function(){promise.abort("timeout");promise.dispatch(0,"timeout")},opts.timeout));promise.request();return promise};"get,post".replace(avalon.rword,function(method){avalon[method]=function(url,data,callback,type){if("function"==typeof data){type=type||callback;callback=data;data=void 0}return avalon.ajax({type:method,url:url,data:data,success:callback,dataType:type})}});avalon.getScript=function(url,callback){return avalon.get(url,null,callback,"script")};avalon.getJSON=function(url,data,callback){return avalon.get(url,data,callback,"json")};avalon.upload=function(url,form,data,callback,dataType){if("function"==typeof data){dataType=callback;callback=data;data=void 0}return avalon.ajax({url:url,type:"post",dataType:dataType,form:form,data:data,success:callback})};avalon.ajaxConverters={text:function(text){return text},xml:function(text,xml){return void 0!==xml?xml:parseXML(text)},html:function(text){return avalon.parseHTML(text)},json:function(text){avalon.parseJSON||avalon.log("avalon.parseJSON不存在,请升级到最新版");return avalon.parseJSON(text)},script:function(text){parseJS(text);return text},jsonp:function(){var json,callbackName;if(this.jsonpCallback.startsWith("avalon.")){callbackName=this.jsonpCallback.replace(/avalon\./,"");json=avalon[callbackName];delete avalon[callbackName]}else json=window[this.jsonpCallback];return json}};avalon.param=function(a){var prefix,s=[],add=function(key,value){value=null==value?"":value;s[s.length]=encode(key)+"="+encode(value)};if(Array.isArray(a)||!avalon.isPlainObject(a))avalon.each(a,function(subKey,subVal){add(subKey,subVal)});else for(prefix in a)paramInner(prefix,a[prefix],add);return s.join("&").replace(r20,"+")};avalon.unparam=function(input){var items,temp,expBrackets=/\[(.*?)\]/g,expVarname=/(.+?)\[/,result={};if("string"!=(temp=avalon.type(input))||"string"==temp&&!temp.length)return{};-1!==input.indexOf("?")&&(input=input.split("?").pop());items=decode(input).split("&");if(!(temp=items.length)||1==temp&&""===temp)return result;items.forEach(function(item){if(item.length){temp=item.split("=");var size,link,key=temp.shift(),value=temp.join("=").replace(/\+/g," "),subitems=[];if(key.length){for(;temp=expBrackets.exec(key);)subitems.push(temp[1]);if(size=subitems.length){size--;temp=expVarname.exec(key);if(temp&&(key=temp[1])&&key.length){"object"!==avalon.type(result[key])&&(result[key]={});link=result[key];avalon.each(subitems,function(subindex,subitem){if(!(temp=subitem).length){temp=0;avalon.each(link,function(num){!isNaN(num)&&num>=0&&num%1===0&&num>=temp&&(temp=Number(num)+1)})}subindex==size?link[temp]=value:link="object"!==avalon.type(link[temp])?link[temp]={}:link[temp]})}}else result[key]=value}}});return result};var rinput=/select|input|button|textarea/i,rcheckbox=/radio|checkbox/,rline=/\r?\n/g;avalon.serialize=function(form){var json={};Array.prototype.filter.call(form.getElementsByTagName("*"),function(el){return rinput.test(el.nodeName)&&el.name&&!el.disabled?rcheckbox.test(el.type)?el.checked:!0:void 0}).forEach(function(el){var val=avalon(el).val();val=Array.isArray(val)?val.map(trimLine):trimLine(val);var name=el.name;name in json?Array.isArray(val)?json[name].push(val):json[name]=[json[name],val]:json[name]=val});return avalon.param(json,!1)};var transports=avalon.ajaxTransports={xhr:{request:function(){var self=this,opts=this.options,transport=this.transport=new avalon.xhr;transport.open(opts.type,opts.url,opts.async,opts.username,opts.password);this.mimeType&&transport.overrideMimeType&&transport.overrideMimeType(this.mimeType);opts.crossDomain&&"withCredentials"in transport&&(transport.withCredentials=!0);opts.crossDomain||(this.requestHeaders["X-Requested-With"]="XMLHttpRequest");for(var i in this.requestHeaders)transport.setRequestHeader(i,this.requestHeaders[i]+"");if(opts.progressCallback){var isOldIE=document.all&&!window.atob;isOldIE||(transport.upload.onprogress=opts.progressCallback)}var dataType=opts.dataType;if("responseType"in transport&&/^(blob|arraybuffer|text)$/.test(dataType)){transport.responseType=dataType;this.useResponseType=!0}transport.send(opts.hasContent&&(this.formdata||this.querystring)||null);opts.async&&4!==transport.readyState?useOnload?transport.onload=transport.onerror=function(e){this.readyState=4;this.status="load"===e.type?200:500;self.respond()}:transport.onreadystatechange=function(){self.respond()}:this.respond()},respond:function(event,forceAbort){var transport=this.transport;if(transport){if(forceAbort&&this.timeoutID){clearTimeout(this.timeoutID);delete this.timeoutID}try{var completed=4===transport.readyState;if(forceAbort||completed){transport.onreadystatechange=avalon.noop;useOnload&&(transport.onerror=transport.onload=null);if(forceAbort)completed||"function"!=typeof transport.abort||transport.abort();else{var status=transport.status,text=transport.responseText;this.responseText="string"==typeof text?text:void 0;try{var xml=transport.responseXML;this.responseXML=xml.documentElement}catch(e){}this.useResponseType&&(this.response=transport.response);this.responseHeadersString=transport.getAllResponseHeaders();try{var statusText=transport.statusText}catch(e){this.error=e;statusText="firefoxAccessError"}status||!isLocal||this.options.crossDomain?1223===status&&(status=204):status=this.responseText?200:404;this.dispatch(status,statusText)}}}catch(err){forceAbort||this.dispatch(500,err)}}}},jsonp:{preproccess:function(){var opts=this.options,name=this.jsonpCallback=opts.jsonpCallback||"avalon.jsonp"+setTimeout("1");rjsonp.test(opts.url)?opts.url=opts.url.replace(rjsonp,"$1"+name):opts.url=opts.url+(rquery.test(opts.url)?"&":"?")+opts.jsonp+"="+name;if(name.startsWith("avalon.")){name=name.replace(/avalon\./,"");avalon[name]=function(json){avalon[name]=json}}else window[name]=function(json){window[name]=json};return"script"}},script:{request:function(){var opts=this.options,node=this.transport=DOC.createElement("script");opts.charset&&(node.charset=opts.charset);var self=this;node.onerror=node[useOnload?"onload":"onreadystatechange"]=function(){self.respond()};node.src=opts.url;head.insertBefore(node,head.firstChild)},respond:function(event,forceAbort){var node=this.transport;if(node){if(forceAbort&&this.timeoutID){clearTimeout(this.timeoutID);delete this.timeoutID}var execute=/loaded|complete|undefined/i.test(node.readyState);if(forceAbort||execute){node.onerror=node.onload=node.onreadystatechange=null;var parent=node.parentNode;parent&&parent.removeChild(node);if(!forceAbort){var args;if(this.jsonpCallback){var jsonpCallback=this.jsonpCallback.startsWith("avalon.")?avalon[this.jsonpCallback.replace(/avalon\./,"")]:window[this.jsonpCallback];args="function"==typeof jsonpCallback?[500,"error"]:[200,"success"]}else args=[200,"success"];this.dispatch.apply(this,args)}}}}},upload:{preproccess:function(){var formdata,opts=this.options;if("function"==typeof opts.form.append){formdata=opts.form;opts.contentType=""}else formdata=new FormData(opts.form);avalon.each(opts.data,function(key,val){formdata.append(key,val)});this.formdata=formdata}}};avalon.mix(transports.jsonp,transports.script);avalon.mix(transports.upload,transports.xhr);if(!window.FormData){var str='Function BinaryToArray(binary)\r\n                 Dim oDic\r\n                 Set oDic = CreateObject("scripting.dictionary")\r\n                 length = LenB(binary) - 1\r\n                 For i = 1 To length\r\n                     oDic.add i, AscB(MidB(binary, i, 1))\r\n                 Next\r\n                 BinaryToArray = oDic.Items\r\n              End Function';execScript(str,"VBScript");avalon.fixAjax=function(){function createIframe(ID){var iframe=avalon.parseHTML("<iframe  id='"+ID+"' name='"+ID+"' style='position:absolute;left:-9999px;top:-9999px;'/>").firstChild;return(DOC.body||DOC.documentElement).insertBefore(iframe,null)}function addDataToForm(form,data){var d,isArray,vs,i,e,ret=[];for(d in data){isArray=Array.isArray(data[d]);vs=isArray?data[d]:[data[d]];for(i=0;i<vs.length;i++){e=DOC.createElement("input");e.type="hidden";e.name=d;e.value=vs[i];form.appendChild(e);ret.push(e)}}return ret}avalon.ajaxConverters.arraybuffer=function(){var body=this.tranport&&this.tranport.responseBody;return body?new VBArray(BinaryToArray(body)).toArray():void 0};avalon.ajaxTransports.upload={request:function(){var self=this,opts=this.options,ID="iframe-upload-"+this.uniqueID,form=opts.form,iframe=this.transport=createIframe(ID),backups={target:form.target||"",action:form.action||"",enctype:form.enctype,method:form.method},fields=opts.data?addDataToForm(form,opts.data):[];form.target=ID;form.action=opts.url;form.method="POST";form.enctype="multipart/form-data";this.uploadcallback=avalon.bind(iframe,"load",function(event){self.respond(event)});form.submit();for(var i in backups)form[i]=backups[i];fields.forEach(function(input){form.removeChild(input)})},respond:function(event){var child,node=this.transport;if(node){if(event&&"load"===event.type){var doc=node.contentWindow.document;this.responseXML=doc;if(doc.body){this.responseText=doc.body.innerHTML;(child=doc.body.firstChild)&&"PRE"===child.nodeName.toUpperCase()&&child.firstChild&&(this.responseText=child.firstChild.nodeValue)}this.dispatch(200,"success")}this.uploadcallback=avalon.unbind(node,"load",this.uploadcallback);delete this.uploadcallback;setTimeout(function(){node.parentNode.removeChild(node)})}}};delete avalon.fixAjax};avalon.fixAjax()}return avalon});
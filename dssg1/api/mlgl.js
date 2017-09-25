webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(2101);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(559);

	var _upload = __webpack_require__(528);

	var _upload2 = _interopRequireDefault(_upload);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Download = __webpack_require__(1132);

	var _Download2 = _interopRequireDefault(_Download);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("mlgl")(function (args, callback) {

	  var config = {
	    "success": true,
	    "data": {
	      "id": "mlgl",
	      "title": "目录管理",
	      "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, { "buttonName": "delete" }, { "buttonName": function buttonName(config) {
	          return _react2["default"].createElement(
	            'div',
	            { className: "configRightBtnGp" },
	            _react2["default"].createElement(
	              _upload2["default"],
	              {
	                name: 'file',
	                //action: '//jsonplaceholder.typicode.com/posts/',
	                action: Global.server + 'catalog/uploadCatalog?userId=' + Global.getState().framework.loginApi.data.loginUserProfileDTO.id + '&userName=' + Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName + '&resDomainId=' + Global.getState().mainConMenu.selected,
	                showUploadList: false,
	                onChange: function onChange(info) {
	                  if (info.file.status !== 'uploading') {
	                    console.log(info.file, info.fileList);
	                  }
	                  if (info.file.status === 'done') {
	                    message.success(info.file.name + ' file uploaded successfully');
	                  } else if (info.file.status === 'error') {
	                    message.error(info.file.name + ' file upload failed.');
	                  }
	                }
	              },
	              _react2["default"].createElement(_icon2["default"], { type: 'dssg-importIn' }),
	              _react2["default"].createElement(
	                'a',
	                null,
	                '\u5BFC\u5165'
	              )
	            ),
	            _react2["default"].createElement(
	              'div',
	              null,
	              _react2["default"].createElement(_icon2["default"], { type: 'dssg-importOut' }),
	              _react2["default"].createElement(
	                _Download2["default"],
	                { src: _interfaces.server + "catalog/downloadCatalog?resDomainId=" + Global.getState().mainConMenu.selected },
	                _react2["default"].createElement(
	                  'a',
	                  null,
	                  '\u5BFC\u51FA'
	                )
	              )
	            )
	          );
	        } }],
	      "table": {
	        "primarykey": "id",
	        "clounms": [{
	          "title": "序号",
	          "dataIndex": "index",
	          "key": "index",
	          "width": 50,
	          "render": function render(text, recode, index) {
	            var state = Global.getState().dataList.mlgl;
	            return _react2["default"].createElement(
	              'div',
	              null,
	              index + 1 + state.currentPage * state.pageSize
	            );
	          }
	        }, {
	          "title": "目录名称",
	          "dataIndex": "name",
	          "key": "name"
	        }, {
	          "title": "目录编码",
	          "dataIndex": "code",
	          "key": "code"
	        }, {
	          "title": "目录审核节点",
	          "dataIndex": "ename",
	          "key": "ename"
	        }, {
	          "title": "目录审核员",
	          "dataIndex": "auditorUserName",
	          "key": "auditorUserName"
	        }, {
	          "title": "联系电话",
	          "dataIndex": "telphone",
	          "key": "telphone"
	        }, {
	          "title": "审核单位",
	          "dataIndex": "auditorCompany",
	          "key": "auditorCompany"
	        }],
	        "body": { apiName: 'findCatalogList', body: {}, next: function next(action) {
	            if (!action.success) {
	              _modal2["default"].warning({ content: action.message });
	            }
	          } }

	      },
	      "list": {
	        "view": null,
	        "listApi": null,
	        "saveApi": null
	      },
	      "add": {
	        "byDialog": true,
	        "validate": function validate(next) {
	          var ctt = Global.getState().mainConMenu.selected;
	          var mainConMenuTree = Global.getState().mainConMenu.data[0].children;
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = (0, _getIterator3["default"])(mainConMenuTree), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var mainTree = _step.value;

	              if (ctt == mainTree.id) {
	                if (mainTree.isDomainMember) {
	                  next();
	                  return;
	                } else {
	                  _modal2["default"].warning({ content: "没有操作权限!" });
	                  return;
	                }
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator["return"]) {
	                _iterator["return"]();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        },
	        "initData": {
	          data: { "apiName": "catalogAdd", url: 'api/catalogAdd.js', dataType: 'jsonp' }
	        },
	        "onAddSubmitApi": { "apiName": "saveCatalogInfo", next: function next(action) {
	            if (action.success) {

	              Global.requestApi({
	                apiName: "findCatalogTree", body: { name: null }, next: function next(action) {}
	              }, { mainConMenu: null });
	            } else {
	              _modal2["default"].warning({ content: action.message });
	            }
	          } }
	      },
	      "edit": {
	        "byDialog": true,
	        "validate": function validate(next) {
	          var dl = Global.getState().dataList.mlgl;
	          var selected = dl.selectedRows || [];
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = (0, _getIterator3["default"])(selected), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var selectedKey = _step2.value;
	              var _iteratorNormalCompletion3 = true;
	              var _didIteratorError3 = false;
	              var _iteratorError3 = undefined;

	              try {
	                for (var _iterator3 = (0, _getIterator3["default"])(dl.tableBodyDataApi.data.content), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                  var row = _step3.value;

	                  if (row.id == selectedKey && row.isAuditorCompany == false) {
	                    _modal2["default"].warning({ content: "没有操作权限!" });
	                    return;
	                  }
	                }
	              } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                    _iterator3["return"]();
	                  }
	                } finally {
	                  if (_didIteratorError3) {
	                    throw _iteratorError3;
	                  }
	                }
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                _iterator2["return"]();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          next();
	        },
	        "initData": {
	          data: { "apiName": "catalogAdd", url: 'api/catalogAdd.js', dataType: 'jsonp' }
	        },
	        "onUpdateSubmitApi": { "apiName": "updateCatalogInfo", next: function next(action) {
	            if (action.success) {
	              Global.requestApi({ apiName: "findCatalogTree", body: { name: null } }, { mainConMenu: null });
	            } else {
	              _modal2["default"].warning({ content: action.message });
	            }
	          } }
	      },
	      "delete": {
	        "validate": function validate(next) {
	          var dl = Global.getState().dataList.mlgl;
	          var selected = dl.selectedRows || [];
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = (0, _getIterator3["default"])(selected), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var selectedKey = _step4.value;
	              var _iteratorNormalCompletion5 = true;
	              var _didIteratorError5 = false;
	              var _iteratorError5 = undefined;

	              try {
	                for (var _iterator5 = (0, _getIterator3["default"])(dl.tableBodyDataApi.data.content), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                  var row = _step5.value;

	                  if (row.id == selectedKey && row.isAuditorCompany == false) {
	                    _modal2["default"].warning({ content: "没有操作权限!" });
	                    return;
	                  }
	                }
	              } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                    _iterator5["return"]();
	                  }
	                } finally {
	                  if (_didIteratorError5) {
	                    throw _iteratorError5;
	                  }
	                }
	              }
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                _iterator4["return"]();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          next();
	        },
	        "body": { apiName: 'deleteCatalogById', next: function next(action) {
	            if (action.success) {
	              Global.requestApi({
	                apiName: "findCatalogTree", body: { name: null }, next: function next(action) {}
	              }, { mainConMenu: null });
	            } else {
	              _modal2["default"].warning({ content: action.message });
	            }
	          } }
	      },
	      "detail": {
	        "initData": {
	          data: { "apiName": "CatalogInfo", url: 'api/CatalogInfo.js', dataType: 'jsonp' }
	        },
	        "body": { apiName: 'findCatalogInfo' }
	      },
	      "check": {
	        "view": null,
	        "checkApi": null
	      }
	    }
	  };

	  setTimeout(function () {
	    config.data.table.body.body.id = Global.getState().mainConMenu && Global.getState().mainConMenu.selected && Global.getState().mainConMenu.selected.length > 0 ? Global.getState().mainConMenu.selected[0] : "";

	    callback(config);
	  }, 500);
	});

/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _stringify = __webpack_require__(128);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _css = __webpack_require__(214);

	var _message = __webpack_require__(207);

	var _message2 = _interopRequireDefault(_message);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _global2 = _interopRequireDefault(_global);

	var _downloadjs = __webpack_require__(1218);

	var _downloadjs2 = _interopRequireDefault(_downloadjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by Administrator on 2017/7/6.
	 */
	//请手动创建组件文件 "src/components/Download.js"，并填充以下内容：
	//生成日期：Thu Jul 06 2017 20:11:26 GMT+0800 (中国标准时间)

	//import styles from './CustomComponent.less';
	var Download = function (_Component) {
	  (0, _inherits3["default"])(Download, _Component);

	  function Download(props) {
	    (0, _classCallCheck3["default"])(this, Download);

	    //初始化树
	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _global2["default"].mark({
	      download: (0, _defineProperty3["default"])({}, _this.props.id || 'undefined', {})
	    }, 'Download_init');
	    return _this;
	  }

	  Download.prototype.readBody = function readBody() {
	    var body = typeof this.props.body == 'function' ? this.props.body() : this.props.body;
	    return body;
	  };

	  Download.prototype.onClick = function onClick() {
	    var _this2 = this;

	    var x = new XMLHttpRequest();
	    x.onreadystatechange = function (e) {
	      if (x.readyState == 4) {
	        // 4 = "loaded"
	        if (x.status == 200) {// 200 = O
	          // ...our code here...
	        } else {
	          _message2["default"].error('下载失败,请重试。');
	        }
	      }
	    };

	    var url = this.props.src;
	    if (this.props.body) {
	      var body = this.readBody();
	      url += url.indexOf("?") == -1 ? "?" : "&";
	      for (var p in body) {
	        url += p + '=' + body[p] + '&';
	      }
	      url = url.toString().substring(0, url.toString().length - 1);
	    }
	    x.open(this.props.method || "GET", url, true);
	    x.responseType = "blob";
	    x.onload = function (e) {
	      (0, _downloadjs2["default"])(e.target.response, _this2.props.name || decodeURI(x.getResponseHeader('Content-Disposition').match(/filename=(.*)/)[1]));
	    };
	    if (this.props.method == "POST") {
	      x.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	      x.send((0, _stringify2["default"])(this.readBody())); //JSON.stringify(data)
	    } else {
	      x.send();
	    }

	    //download(this.props.src);
	  };

	  Download.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    return _react2["default"].createElement(
	      'div',
	      { className: this.props.className, style: (0, _extends3["default"])({ cursor: 'pointer' }, this.props.style),
	        onClick: this.onClick.bind(this) },
	      this.props.children
	    );
	  };

	  return Download;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("download", null, null)(Download);
	module.exports = exports['default'];

/***/ },

/***/ 1218:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
	// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
	// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
	// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
	// v4 adds AMD/UMD, commonJS, and plain browser support
	// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
	// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
	// https://github.com/rndme/download

	(function (root, factory) {
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like environments that support module.exports,
			// like Node.
			module.exports = factory();
		} else {
			// Browser globals (root is window)
			root.download = factory();
	  }
	}(this, function () {

		return function download(data, strFileName, strMimeType) {

			var self = window, // this script is only for browsers anyway...
				defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
				mimeType = strMimeType || defaultMime,
				payload = data,
				url = !strFileName && !strMimeType && payload,
				anchor = document.createElement("a"),
				toString = function(a){return String(a);},
				myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
				fileName = strFileName || "download",
				blob,
				reader;
				myBlob= myBlob.call ? myBlob.bind(self) : Blob ;
		  
			if(String(this)==="true"){ //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
				payload=[payload, mimeType];
				mimeType=payload[0];
				payload=payload[1];
			}


			if(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument
				fileName = url.split("/").pop().split("?")[0];
				anchor.href = url; // assign href prop to temp anchor
			  	if(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:
	        		var ajax=new XMLHttpRequest();
	        		ajax.open( "GET", url, true);
	        		ajax.responseType = 'blob';
	        		ajax.onload= function(e){ 
					  download(e.target.response, fileName, defaultMime);
					};
	        		setTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:
				    return ajax;
				} // end if valid url?
			} // end if url?


			//go ahead and download dataURLs right away
			if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)){
			
				if(payload.length > (1024*1024*1.999) && myBlob !== toString ){
					payload=dataUrlToBlob(payload);
					mimeType=payload.type || defaultMime;
				}else{			
					return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
						navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
						saver(payload) ; // everyone else can save dataURLs un-processed
				}
				
			}else{//not data url, is it a string with special needs?
				if(/([\x80-\xff])/.test(payload)){			  
					var i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;
					for(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);
				 	payload=new myBlob([tempUiArr], {type: mimeType});
				}		  
			}
			blob = payload instanceof myBlob ?
				payload :
				new myBlob([payload], {type: mimeType}) ;


			function dataUrlToBlob(strUrl) {
				var parts= strUrl.split(/[:;,]/),
				type= parts[1],
				decoder= parts[2] == "base64" ? atob : decodeURIComponent,
				binData= decoder( parts.pop() ),
				mx= binData.length,
				i= 0,
				uiArr= new Uint8Array(mx);

				for(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);

				return new myBlob([uiArr], {type: type});
			 }

			function saver(url, winMode){

				if ('download' in anchor) { //html5 A[download]
					anchor.href = url;
					anchor.setAttribute("download", fileName);
					anchor.className = "download-js-link";
					anchor.innerHTML = "downloading...";
					anchor.style.display = "none";
					document.body.appendChild(anchor);
					setTimeout(function() {
						anchor.click();
						document.body.removeChild(anchor);
						if(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}
					}, 66);
					return true;
				}

				// handle non-a[download] safari as best we can:
				if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
					if(/^data:/.test(url))	url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
					if(!window.open(url)){ // popup blocked, offer direct download:
						if(confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")){ location.href=url; }
					}
					return true;
				}

				//do iframe dataURL download (old ch+FF):
				var f = document.createElement("iframe");
				document.body.appendChild(f);

				if(!winMode && /^data:/.test(url)){ // force a mime that will download:
					url="data:"+url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				}
				f.src=url;
				setTimeout(function(){ document.body.removeChild(f); }, 333);

			}//end saver




			if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
				return navigator.msSaveBlob(blob, fileName);
			}

			if(self.URL){ // simple fast and modern way using Blob and URL:
				saver(self.URL.createObjectURL(blob), true);
			}else{
				// handle non-Blob()+non-URL browsers:
				if(typeof blob === "string" || blob.constructor===toString ){
					try{
						return saver( "data:" +  mimeType   + ";base64,"  +  self.btoa(blob)  );
					}catch(y){
						return saver( "data:" +  mimeType   + "," + encodeURIComponent(blob)  );
					}
				}

				// Blob but not URL support:
				reader=new FileReader();
				reader.onload=function(e){
					saver(this.result);
				};
				reader.readAsDataURL(blob);
			}
			return true;
		}; /* end download() */
	}));


/***/ }

});
var program = require('commander');
var http = require('http');
var url=require('url');
var fs=require('fs');


program
  .version('0.0.1')
  .option('-p, --port [port]', 'server port',3088)
  .parse(process.argv);

var mine={
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
var path=require('path');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = pathname.replace(/^\//,"");//path.join("assets", pathname);
    if(realPath=="api/fileUpload/uploadFile"){
		var contentType = "text/html";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write('{"filesObj":[{"createDtm":1494209336338,"delFlag":"\u0000","fid":"a59603c5-7aaf-432b-8242-4842da144d86","fileName":"03889633-8ffb-45fa-8fb9-d58e5f00c215.jpeg","filePath":"upload/center-master-dev/2017-05/03889633-8ffb-45fa-8fb9-d58e5f00c215.jpeg","fileSize":"18.14 KB","realFileName":"cd92ef0a-f6fa-41e0-a654-64f79dc5669d.jpeg","relativePath":"upload/center-master-dev/2017-05/03889633-8ffb-45fa-8fb9-d58e5f00c215.jpeg"}],"filesId":["a59603c5-7aaf-432b-8242-4842da144d86"]}');
                    response.end();
					return;
    }if(realPath==""){
		realPath = 'index.html';
	}else if(realPath.match(/.*\/$/)){
		realPath += "index.html";
	}
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            response.write("This request URL " + realPath + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    try{response.end(err);}catch(ex){}
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Content-Type': contentType
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(program.port);
console.log("Server runing at port: " + program.port + ".");
try{
    var open=require('open');
    open('http://localhost:{port}/#/?fbMode=5&server=http%3a%2f%2f192.168.30.216%3a7000%2fapi%2f#/aiFormBaseDemo?_k=jdon59'.replace('{port}',program.port));
}catch(ex){}

var express=require("express"),app=express(),bodyParser=require("body-parser");app.use(express["static"](__dirname+"/public"));app.use(bodyParser.urlencoded({extended:!1}));app.use(bodyParser.json());var router=express.Router();router.get("/",function(req,res){res.sendfile("index.html")});app.use("/",router);router.post("/post",function(req,res){console.log(req.body);req.xhr&&res.json({msg:"提交成功"})});router.get("/get",function(req,res){req.xhr&&res.send("这是后端返回的数据")});router.get("/getjson",function(req,res){console.log(req.xhr);req.xhr?res.send({msg:"json",channel:"ajax"}):res.jsonp({msg:"json",channel:"jsonp"})});app.listen(3e3);console.log("3000");
/**
 * Created by Administrator on 2016/9/20 0020.
 */
var express=require("express");
var bodyParser=require("body-parser");
var fs=require("fs");
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.post("/uploadPhoto",function(req,res){
    var bitmap=new Buffer(req.body.imageData,"base64");
    fs.writeFile("./images/"+new Date().getTime()+".png",bitmap,function(err){
    if(err){
        res.send("0");
    }else{
        res.send("1");
    }
    });
});
app.get("/getAllPhoto",function(req,res){
    fs.readdir("./images",function(err,files){
        if(err){
            res.send("0");
        }else{
            res.send(files);
        }
    })
});
 app.listen(9999, function (err) {
   if(err){
       console.info(err);
   }else{
       console.info("服务器启动成功");
   }
});


/**
 * Created by Administrator on 2016/9/19 0019.
 */
/*var express=require("express");
var app=express();
app.use(express.static('public'));

app.get('/process_get',function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.info(response);
    console.info(JSON.stringify(response));
    res.end(JSON.stringify(response));
});
var server=app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

*/
var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var urlencodedParser=bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));
app.post('/process_post', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    console.log(JSON.stringify(response));
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
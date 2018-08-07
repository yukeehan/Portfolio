var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("about", {page: 'home'});
});

app.get("/blogs", function(req, res){
    res.render("blogs", {page: 'blogs'});
});

app.get("/blogs/RESTful-Routes",function(req, res){
    res.render("blogs/restful_routes",{page: 'blogs'});
})

app.listen(process.env.PORT, process.env.IP);
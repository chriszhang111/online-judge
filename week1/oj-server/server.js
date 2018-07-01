var express = require("express");
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var path = require("path");

mongoose.connect("mongodb://chris:z31415926@ds016068.mlab.com:16068/coj");
app.use(express.static(path.join(__dirname, '../public')));
app.use("/api/v1", restRouter);
app.use("/", indexRouter);



app.listen(3001, function(){
   //console.log('express app');
});


const { check, validationResult } = require('express-validator/check');

var task=[];
var complete=[];
exports.addtask = (req,res)=>{
  var newtask = req.body.newtask;
  task.push(newtask);
  res.redirect("/");
};

exports.index = function(req,res){
  res.render('index',{task : task, complete : complete});
};

exports.removetask = function(req,res){
  var completetask=req.body.check;
  if(typeof(completetask)==='string') {complete.push(completetask); task.splice(task.indexOf(completetask),1);}
  else if(typeof completetask==='object') {
    for(var i=0;i<completetask.lenght;i++){
      complete.push(completetask[i]);
      task.splice(task.indexOf(completetask[i]),1);
    }
  }
  res.redirect('/');
};

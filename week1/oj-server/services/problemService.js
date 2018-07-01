var problems = [
    {
        id:1,
        name:"two sum",
        desc:"Return two sum of an array..."
    }
];


var ProblemModel = require("../models/problemModel");

var getProblems = function(){
    return new Promise((resolve,reject) => {
        ProblemModel.find({},function(err,problems){
            if(err){
                reject(err);
            }else{
                resolve(problems);
            }
        });
        });
};

var getProblem = function(id){
    return new Promise((resolve, reject) => {
          ProblemModel.findOne({id:id},function(err,problem){
            if(err){
                reject(err);
            }else{
                resolve(problem);
            }
        });
        });
};

var addProblem = function(newProblem){
    return new Promise((resolve, reject) => {
          ProblemModel.findOne({name:newProblem.name},function(err,problem){
            if(problem){
                reject("Problem name already exists");
            }else{
                ProblemModel.count({}, function(err,num){
                    newProblem.id = num+1;
                    var p = new ProblemModel(newProblem);
                    p.save();
                    resolve(newProblem);
                });
            }
        });
        });
}

module.exports = {
    getProblems:getProblems,
    getProblem:getProblem,
    addProblem:addProblem
}

























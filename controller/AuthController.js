var authService = require('../services/AuthService');


exports.register = function(req, res){
    let register = authService.Register(req.body, function(err, result){
    if(err)
        res.send(err);
    res.send(result);
  })
};


exports.login = function(req, res){
    let login = authService.Login(req.body, function(err, result){
        if(err)
           res.send(err);
        res.send(result);
    })
 };


exports.validate_token = function(req, res){
    let validate = authService.Validate(req.body.token,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
};


exports.user_profile = function(req, res){
    let profile = authService.Profile(req.body,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
};


exports.logout = function(req, res){
    let logout = authService.Logout(req.body,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
};


exports.forgotpassword = function(req, res){
    let forgotpassword = authService.ForgotPassword(req.body,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
};


exports.changepassword = function(req, res){
    let changepassword = authService.ChangePassword(req.body,function(err, result){
        if(err)
            res.send(err.message);
        res.send(result);
    })
};
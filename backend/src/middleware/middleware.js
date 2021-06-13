const jwt = require('jsonwebtoken');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "_" + file.originalname);
    },
  });

exports.upload = multer({ storage });

exports.requireSignin = (req,res,next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    }
    else{
        return res.status(400).json({message : "Authorization required"});
    }
    next();
}

exports.facultyMiddleware = (req,res,next) =>{
    if(req.user.role != "Faculty"){
        return res.status(400).json({message : "Faculty Access Denied"})
    }
    next();
}

exports.studentMiddleware = (req,res,next) =>{
  if(req.user.role != "Student"){
      return res.status(400).json({message : "Student Access Denied"})
  }
  next();
}

const EnrolledCourses = require('../models/enrolled_courses');

exports.registerCourse = (req, res) => {
    
  
  const courses = new EnrolledCourses({
    student: req.user._id,
    faculty:req.body.faculty,
    course:req.body.course
  });
  courses.save((error, courses) => {
    if (error) return res.status(400).json({ error });
    if (courses) {
      res.status(201).json({ courses });
    }
  });
}

class APIfeatures {
  constructor(query, querystring) {
    this.query = query,
      this.querystring = querystring;
  }
  sorting() {
    if (this.querystring.sort) {
      const sortby = this.querystring.sort.split(',').join(' ');
      this.query = this.query.sort(sortby);
    }
    else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }
  filtering() {
    const queryobj = { ...this.querystring };
    const excludedfields = ['page', 'sort', 'limit'];
    excludedfields.forEach(el => delete queryobj[el]);
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    this.query.find(JSON.parse(querystr));
    return this;
  }
  paginating() {
    const page = this.querystring.page * 1 || 1;
    const limit = this.querystring.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

exports.getcoursesByID = (req, res) => {
  EnrolledCourses.find({"course" : req.params.id})
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error' + err))
}

var ObjectId = require('mongodb').ObjectId;
exports.getCoursesByStudentID = async (req, res) => {
  try {
    const features = new APIfeatures(EnrolledCourses.find({ "student": ObjectId(req.params.id) }), req.query).filtering().sorting().paginating();
    const courses = await features.query;
    const propertyNames = Object.keys(courses);
    res.status(200).json({
        courses
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.countEnrolledCourses = (req,res) =>{
    EnrolledCourses.countDocuments({"student":ObjectId(req.params.id)})
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteEnrolledCourses = (req,res) => {
  EnrolledCourses.findByIdAndDelete(req.params.id)
  .then(() => res.json('Course deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
}
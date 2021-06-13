const Courses = require('../models/course');
const { isValidObjectId } = require('mongoose');

exports.createCourse = (req, res) => {

  const { CourseId, CourseName, CourseDept, description, CourseRoom, Waitlist_Capacity, CourseTeam, courseImage } = req.body;

  const course = new Courses({
    CourseId, CourseName, CourseDept, description, CourseRoom, Waitlist_Capacity, CourseTeam,
    createdBy: req.user._id, courseImage: "/public/" + req.file.filename
  });

  course.save((error, course) => {
    if (error) return res.status(400).json({ error });
    if (course) {
      res.status(201).json({ course });
    }
  });
};

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
    const limit = this.querystring.limit * 1 || 5;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}


exports.getCourses = async (req, res) => {
  {/*  try {
    const features = new APIfeatures(Courses.find(), req.query).filtering().sorting().paginating();
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
*/}
  Courses.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error' + err))
}

exports.getCourseById = (req, res) => {
  Courses.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err => res.status(400).json('Error' + err))

}


var ObjectId = require('mongodb').ObjectId;
exports.getCourseofFaculty = async (req, res) => {
  try {
    const features = new APIfeatures(Courses.find({ "createdBy": ObjectId(req.params.id) }), req.query).filtering().sorting().paginating();
    const faculty_courses = await features.query;
    const propertyNames = Object.keys(faculty_courses);
    res.status(200).json({
      faculty_courses
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.countCourses = (req, res) => {
  Courses.countDocuments()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.countCourseByFaculty = (req, res) => {
  Courses.countDocuments({ createdBy: req.params.id })
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteCourse = (req, res) => {
  Courses.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.courseUpdate = async (req, res) => {
  try {
    const { CourseId, CourseName, CourseDept, description, CourseRoom, Waitlist_Capacity, CourseTeam, courseImage } = req.body;
    const course = {
      CourseId, CourseName, CourseDept, description, CourseRoom, Waitlist_Capacity, CourseTeam,
      createdBy: req.user._id, courseImage: "/public/" + req.file.filename
    }

    const updatedCourse = await Courses.findByIdAndUpdate((req.params.id), { $set: course }, { new: true });
    return res.status(201).json({ updatedCourse });
  }
  catch (err) {
    res.status(404).json('Error' + err)
  }
}
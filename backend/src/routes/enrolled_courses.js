const express = require('express');
const {registerCourse,getcoursesByID, countEnrolledCourses, deleteEnrolledCourses, getCoursesByStudentID} = require('../controllers/enrolled_courses');
const router = express.Router();
const {requireSignin, studentMiddleware,upload} = require('../middleware/middleware');

router.post('/student/register',requireSignin,studentMiddleware,registerCourse);
router.get('/student/enrolled_courses/search/:id',requireSignin,studentMiddleware,getcoursesByID);
router.get('/student/enrolled_courses/count/:id',requireSignin,studentMiddleware,countEnrolledCourses);
router.delete('/student/enrolled_courses/delete/:id',requireSignin,studentMiddleware,deleteEnrolledCourses);
router.get('/student/enrolled_courses/:id',requireSignin,studentMiddleware,getCoursesByStudentID);
module.exports = router;
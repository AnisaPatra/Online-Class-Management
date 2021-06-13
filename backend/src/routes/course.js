const express = require('express');
const {createCourse, getCourses,getCourseById, countCourses, countCourseByFaculty,deleteCourse,courseUpdate} = require('../controllers/course');
const router = express.Router();
const {requireSignin, facultyMiddleware, upload} = require('../middleware/middleware');

router.post('/faculty/create_course', requireSignin,facultyMiddleware,upload.single('courseImage'),createCourse);
router.get('/courses',getCourses);
router.get('/courses/details/:id',getCourseById);
router.get('/count_courses',countCourses);
router.get('/faculty/count_courses/:id',requireSignin,facultyMiddleware,countCourseByFaculty);
router.delete('/faculty/delete_course/:id',requireSignin,facultyMiddleware,deleteCourse);
router.put('/faculty/course_update/:id',requireSignin,facultyMiddleware,upload.single('courseImage'),courseUpdate);
module.exports = router;
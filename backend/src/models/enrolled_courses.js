const mongoose = require('mongoose');

const enrolledcoursesSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses', required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, { timestamps: true });


module.exports = mongoose.model('Enrolled_Courses', enrolledcoursesSchema);
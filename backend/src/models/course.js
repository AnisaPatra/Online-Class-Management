const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    CourseId: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: 1,
        maxlength: 20
    }, 
    CourseName: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: 2,
        maxlength: 200
    }, 
    CourseDept:{
        type:String,
        required:true,
        minlength: 2,
        maxlength: 200
    },
    description:{
        type:String,
        required:true,
    }, 
    CourseRoom:{
        type:String,
        required:true,
    }, 
    Waitlist_Capacity:{
        type:Number,
        required:true,
        min:0
    }, 
    CourseTeam:{
        type:String,
        required:true,
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseImage: { 
        type: String 
    }
}, { timestamps: true })

module.exports = mongoose.model('Courses', CourseSchema);
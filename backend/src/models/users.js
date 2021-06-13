const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        unique:true
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Student', 'Faculty'],
        required: true
    },
    phoneNumber: {
        type: String,
        validate: /^[789]\d{9}$/,
        unique: true
    },
    profileImg:{
        type:String,
        default:null
    },
    about_me: {
        type: String,
        default : null
    },
    city: {
        type: String,
        minlength:6,
        maxlength:20,
        default : null
    },
    country: {
        type: String,
        minlength:2,
        maxlength:20,
        default : null
    },
    company: {
        type: String,
        minlength:2,
        maxlength:500,
        default : null
    },
    school: {
        type: String,
        minlength:2,
        maxlength:300,
        default : null
    },
    hometown: {
        type: String,
        minlength:2,
        maxlength:50,
        default : null
    },
    languages: [
        {type: String,
        default : null},
        
    ],
    gender: {
        type: String,
        enum: ['Male', 'Female','Other'],
        default : 'Male'
    },
},
    { timestamps: true }

);


usersSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10)
    });

usersSchema.methods = {
    authenticate: async function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', usersSchema);
const User = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec(async (error, user) => {
            if (user) return res.status(400).json({
                message: 'User already registered'
            });
            const {
                name,
                email,
                password,
                role,
                phoneNumber,
                about_me, 
                city, 
                country, 
                hometown, 
                company, 
                school, 
                languages, 
                gender,
                profileImg
            } = req.body;
            const _user = new User({
                name,
                email,
                password,
                role,
                phoneNumber,
                about_me, 
                city, 
                country, 
                hometown, 
                company, 
                school, 
                languages, 
                gender,
                profileImg   
            });
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: `Something went wrong, ${error}`
                    });
                }
                if (data) {
                    if (_user.role === 'Student') {
                        return res.status(201).json({
                            message: 'Student created Successfully..!'
                        })
                    }
                    if (_user.role === 'Faculty') {
                        return res.status(201).json({
                            message: 'Faculty created Successfully..!'
                        })
                    }
                }
            });
        });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec(async(error, user) => {
            if (error) return res.status(400).json({ error });
            if (user) {
                const isPassword = await user.authenticate(req.body.password);
                if (isPassword) {
                    const token = jwt.sign(
                        { _id: user._id, role: user.role }, 
                        process.env.JWT_SECRET, { expiresIn: '1d' });
                    const { _id, name, email, phoneNumber, role, about_me, city, country, hometown, company, school, languages, gender, profileImg} = user;
                    res.status(200).json({
                        token,
                        user: {_id, name, email, phoneNumber, role, about_me, city, country, hometown, company, school, languages, gender, profileImg }
                    });
                }
                else {
                    return res.status(400).json({
                        message: "Invalid Password / EmailId"
                    })
                }
            } else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        });
}


exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error' + err))
}


exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateUser = async (req, res) => {
  try {
    const user = {
        name : req.body.name,
        email : req.body.email,
        phoneNumber : req.body.phoneNumber,
        role : req.body.role ,
        gender : req.body.gender ,
        about_me : req.body.about_me ,
        hometown : req.body.hometown ,
        city : req.body.city ,
        school : req.body.school ,
        company : req.body.company ,
        country : req.body.country,
        languages : req.body.languages,
        profileImg : "/public/" + req.file.filename
    }


    const updatedUser = await User.findByIdAndUpdate((req.params.id), { $set: user }, { new: true });
    return res.status(201).json({ updatedUser });
  }
  catch (err) {
    res.status(404).json('Error' + err)
  }
}

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Signout successfully...!",
    });
};
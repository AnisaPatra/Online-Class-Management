const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const body_parser = require('body-parser');
const authRoutes = require('./routes/authentication');
const courseRoutes = require('./routes/course');
const enrolled = require('./routes/enrolled_courses');
mongoose.Promise = global.Promise;

env.config();
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.th5he.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database Connected');
});

app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(authRoutes);
app.use(courseRoutes);
app.use(enrolled);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(process.env.PORT, () => {
    console.log(`Hi server is running on port ${process.env.PORT} `);
});
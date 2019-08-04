const express = require("express");
const app = express();
const morgan = require("morgan"); // middleware
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
dotenv.config()

// database connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
	console.log("DB is connected")
})

mongoose.connection.on('error', err => {
	console.log("DB is connected")
})
//routes 
const postRoutes = require('./routes/post');

// middleware
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(expressValidator());

// create server using express
app.use('/', postRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`A node js API is listening to a port: ${port}`)
})
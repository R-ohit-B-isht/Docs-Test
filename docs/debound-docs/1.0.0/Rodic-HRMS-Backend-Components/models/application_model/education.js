// This is a Mongoose model for Education

// Load required packages
var mongoose = require('mongoose');

// Define our education schema

var EducationSchema = new mongoose.Schema({
    degreeType: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    graduationDate: {
        type: Date,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
});

// Export the Mongoose model
module.exports = EducationSchema;
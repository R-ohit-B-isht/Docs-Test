// This is a Mongoose model for Application Form Fields

// Load required packages
var mongoose = require('mongoose');
const EducationSchema = require('./education');

// Define our application form fields schema
var ApplicationFormFieldsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    emailID: {
        type: String,
        required: true,
    },
    fieldOfService: {
        type: String,
        required: true,
    },
    currentDesignation: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    noticePeriod: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    education: {
        type: [EducationSchema],
        required: true,
    },

});

// Export the Mongoose model
module.exports = ApplicationFormFieldsSchema;
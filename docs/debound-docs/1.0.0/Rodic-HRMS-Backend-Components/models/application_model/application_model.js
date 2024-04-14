// This is a Mongoose Model for Application

// Load required packages
var mongoose = require('mongoose');
var { middlewares } = require('rodic-hrms-backend-components');
var { generateObjectNumber } = middlewares;
var ApplicationFormFieldsSchema = require('./application_form_fields');

// Define our application schema
/**
 * Represents the schema for an application.
 *
 * @typedef {Object} ApplicationSchema
 * @property {String} applicationNumber - The application number.
 * @property {String} candidateNumber - The candidate number.
 * @property {String} srfNumber - The SRF number.
 * @property {Date} dateOfApplication - The date of application.
 * @property {String} position - The position applied for.
 * @property {String} cvUrl - The URL of the candidate's CV.
 * @property {ApplicationFormFieldsSchema} fields - The fields of the application form.
 * @property {String[]} previousSRF - An array of previous SRF numbers.
 * @property {Number} status - The status of the application. 1 for open, 0 for closed.
 */
var ApplicationSchema = new mongoose.Schema({
    applicationNumber: {
        type: String,
        required: true,
        unique: true
    },
    candidateNumber: {
        type: String,
        required: true,
        unique: true
    },
    srfNumber: {
        type: String,
        required: true
    },
    dateOfApplication: {
        type: Date,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    cvUrl: {
        type: String,
        required: true
    },
    // Application Form Fields
    fields: {
        type: ApplicationFormFieldsSchema,
        required: true
    },
    previousSRF: {
        type: [String],
        required: false
    },
    status: {
        type: Number,
        required: false
    },
});

//Generate a unique application ID
ApplicationSchema.pre('save', function(next) {
    generateObjectNumber.call(this, next, 'APP', 'applicationNumber');
  });


// Export the Mongoose model
module.exports = mongoose.model('applications', ApplicationSchema);
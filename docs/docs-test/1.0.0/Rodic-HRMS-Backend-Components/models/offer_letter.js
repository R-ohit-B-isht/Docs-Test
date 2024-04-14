const mongoose = require('mongoose');

/**
 * @fileoverview This file contains the model for the Project collection.
 * @module
 * @exports offerLetterSchema
 */

/**
 * Represents a offer letter in the system.
 * @typedef {Object} OfferLetter
 * @property {string} srfNumber - The SRF (Service Request Form) number.
 * @property {string} candidateNumber - The candidate number.
 * @property {string} applicationNumber - The application number.
 * @property {string} offerLetterUrl - The URL to the offer letter.
 * @property {string} candidateName - The name of the candidate.
 * @property {string} candidateDesignation - The designation of the candidate.
 * @property {string} projectName - The name of the project.
 * @property {string} address - The address of the candidate.
 * @property {string} phone - The phone number of the candidate.
 * @property {string} email - The email address of the candidate.
 * @property {Date} joiningDate - The date of joining for the candidate in ISO format.
 */
const offerLetterSchema = new mongoose.Schema({
    srfNumber: {
        type: String,
        required: true
    },
    candidateNumber: {
        type: String,
        required: true
    },
    applicationNumber: {
        type: String,
        required: true
    },
    offerLetterUrl: {
        type: String,
        required: true
    },
    candidateName: {
        type: String,
        required: false
    },
    candidateDesignation: {
        type: String,
        required: false
    },
    projectName: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    joiningDate: {
        type: Date,
        required: false
    },
}); 

module.exports = mongoose.model('offer_letters', offerLetterSchema);
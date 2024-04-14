
/**
 * @module
 */

/**
 * Represents the schema for the SRF raised by.
 * @typedef {Object} SrfRaisedBy
 * @property {string} fullName - The full name of the person raising the SRF.
 * @property {string} employeeID - The employee ID of the person raising the SRF.
 * @property {string} designation - The designation of the person raising the SRF.
 * @property {string} department - The department of the person raising the SRF.
 * @property {string} emailID - The email ID of the person raising the SRF.
 */
// This is a Mongoose Schema for an SRF

const mongoose = require('mongoose');
// Define the srfRaisedBy schema.
const srfRaisedBy = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    employeeID: {
        type: String,
        required: true,
    },  
    designation: {
        type: String,   
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    emailID: {
        type: String,
        required: true,
    },
});

// Export the srfRaisedBy schema.
module.exports = srfRaisedBy;
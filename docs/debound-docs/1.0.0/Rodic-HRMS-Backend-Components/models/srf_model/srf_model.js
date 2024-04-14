const mongoose = require("mongoose");
const srfRaisedBy = require("./srf_raised_by_model");
const fieldsSchema = require("./fields_model");
const generateObjectNumber = require("../../middlewares/generate_object_number");

/**
 * Mongoose Schema for an SRF (Service Request Form)
 * @module
 */


// Import the srfRaisedBy schema.
// Import the fields schema.
// Import middleware generator for srfNumber

/**
 * SRF Schema
 * @typedef {Object} SrfSchema
 * @property {string} srfNumber - SRF Number. (required, unique)
 * @property {number} version - Version number of the SRF. (required)
 * @property {srfRaisedBy} srfRaisedBy - SRF raised by details. (required)
 * @property {Date} requisitionDate - Requisition date of the SRF. (required)
 * @property {Date} creationDate - Creation date of the SRF. (required)
 * @property {Date} closureDate - Closure date of the SRF. (optional)
 * @property {fieldsSchema} fields - Fields of the SRF. (required)
 * @property {string} interviewer - Interviewer of the SRF. (required)
 * @property {string} status - Status of the SRF. (required)
 * @property {number} flowStageCode - Flow stage code of the SRF. (required)
 * @property {string} flowStageName - Flow stage name of the SRF. (required)
 * @property {number} completionStatus - Completion status of the SRF. (required)
 * @property {boolean} isDelayed - Indicates if the SRF is delayed. (required)
 * @property {boolean} isDraft - Indicates if the SRF is a draft. (required)
 * @property {string} draftName - Name of the draft SRF. (optional)
 * @property {string} assignedToEmployeeID - Employee ID of the assigned employee. (optional)
 */

const srfSchema = new mongoose.Schema({
  srfNumber: {
    type: String,
    required: true,
    unique: true,
  },
  version: {
    type: Number,
    required: true,
  },
  srfRaisedBy: {
    type: srfRaisedBy,
    required: true,
  },
  requisitionDate: {
    type: Date,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  closureDate: {
    type: Date,
    required: false,
  },
  fields: {
    type: fieldsSchema,
    required: true,
  },
  interviewer: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  flowStageCode: {
    type: Number,
    required: true,
  },
  flowStageName: {
    type: String,
    required: true,
  },
  completionStatus: {
    type: Number,
    required: true,
  },
  isDelayed: {
    type: Boolean,
    required: true,
  },
  isDraft: {
    type: Boolean,
    required: true,
  },
  draftName: {
    type: String,
    required: false,
  },
  assignedToEmployeeID: {
    type: String,
    required: false,
  },
});

// Generate SRF Number using middleware
/**
 * SRF Model
 * @typedef {Object} SrfModel
 * @property {Function} save - Save the SRF model.
 */
srfSchema.pre("save", function (next) {
  generateObjectNumber.call(this, next, "REQ", "srfNumber");
});


const Srf = mongoose.model("Srf", srfSchema, "srfs");

// Export the model.
module.exports = Srf;

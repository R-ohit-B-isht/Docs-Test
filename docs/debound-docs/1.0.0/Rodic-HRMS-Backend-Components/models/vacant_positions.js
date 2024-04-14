const mongoose = require("mongoose");

/**
 * @fileoverview Vacant Positions model.
 * @exports VacantPosition
 * This is a Mongoose Schema for a vacant position.
 */

// Import the required modules.

/**
 * @module
 * @typedef {Object} VacantPosition
 * @property {string} positionID - The ID of the position.
 * @property {string} designation - The designation of the position.
 * @property {string} category - The category of the position.
 * @property {number} billingRate - The billing rate for the position.
 * @property {string} billingRateCurrency - The currency for the billing rate.
 * @property {number} escalatedBillingRate - The escalated billing rate for the position.
 * @property {string} escalatedBillingRateCurrency - The currency for the escalated billing rate.
 * @property {boolean} requisitionRaised - Indicates if a requisition has been raised for the position.
 * @property {string} requisitionRaisedID - The ID of the requisition raised for the position.
 * @property {number} status - The status of the position.
 * @property {string} projectID - The ID of the project associated with the position.
 * @property {number} positionStatus - The status of the position.
 */

/**
 * Mongoose schema for vacant positions.
 * @type {mongoose.Schema}
 */
const vacantPositionsSchema = new mongoose.Schema({
  positionID: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  billingRate: {
    type: Number,
    required: false,
  },
  billingRateCurrency: {
    type: String,
    required: false,
  },
  escalatedBillingRate: {
    type: Number,
    required: false,
  },
  escalatedBillingRateCurrency: {
    type: String,
    required: false,
  },
  requisitionRaised: {
    type: Boolean,
    required: true,
  },
  requisitionRaisedID: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    required: false,
  },
  projectID: {
    type: String,
    required: false,
  },
  positionStatus: {
    type: Number,
    required: false,
  },
});

/**
 * Mongoose model for vacant positions.
 * @type {mongoose.Model<VacantPosition>}
 */
const VacantPosition = mongoose.model("vacant_positions", vacantPositionsSchema);

// Export the model.
module.exports = VacantPosition;

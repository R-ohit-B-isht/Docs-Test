const mongoose = require('mongoose');

/**
 * @fileoverview This file contains the model for the Project collection.
 * @module
 * @exports projectSchema
 */

// Import the required modules.

/**
 * Represents a project in the system.
 * @typedef {Object} Project
 * @property {string} projectCode - The code of the project.
 * @property {string} projectName - The name of the project.
 * @property {string} projectCategory - The category of the project.
 * @property {string} businessLine - The business line of the project.
 * @property {string} businessLineCode - The code of the business line.
 * @property {string} businessUnit - The business unit of the project.
 * @property {Date} startDate - The start date of the project.
 * @property {Date} actualStartDate - The actual start date of the project.
 * @property {Date} endDate - The end date of the project.
 * @property {Date} actualEndDate - The actual end date of the project.
 * @property {number} eotInMonths - The extension of time in months for the project.
 * @property {string} locationID - The ID of the project location.
 * @property {string} state - The state of the project.
 * @property {string} projectCoordinator - The coordinator of the project.
 */

const projectSchema = new mongoose.Schema({
    projectCode: {
        type: String,
        required: true,
        unique: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectCategory: {
        type: String,
        required: true
    },
    businessLine: {
        type: String,
        required: true
    },
    businessLineCode: {
        type: String,
        required: true
    },
    businessUnit: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    actualStartDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    actualEndDate: {
        type: Date,
        required: true
    },
    eotInMonths: {
        type: Number,
        required: true
    },
    locationID: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    projectCoordinator: {
        type: String,
        required: true
    },
});

// Export the model.
module.exports = mongoose.model('Project', projectSchema, "projects");

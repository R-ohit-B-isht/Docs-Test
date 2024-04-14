const mongoose = require('mongoose');

/**
 * @fileoverview This file contains the model for the User collection.
 * @module
 * @exports User
 */

// Import the required modules.

/**
 * Represents a User in the system.
 * @typedef {Object} User
 * @property {string} employeeID - The employee ID of the user.
 * @property {string} name - The name of the user.
 * @property {string} phone - The phone number of the user.
 * @property {string} reportingToEmployeeID - The employee ID of the user's reporting manager.
 * @property {string} profilePicture - The URL of the user's profile picture.
 * @property {string} uid - The unique identifier of the user.
 * @property {string} designation - The designation of the user.
 * @property {string} email - The email address of the user.
 * @property {string} department - The department of the user.
 * @property {string} seatingLocation - The seating location of the user.
 * @property {number[]} roles - The roles assigned to the user.
 * @property {number} employmentStatus - The employment status of the user.
 * @property {string} positionId - The position ID of the user.
 * @property {Date} joiningDate - The date of joining of the user.
 */

// Define the user schema.
const userSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    reportingToEmployeeID: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false,
    },
    uid: {
        type: String,
        required: false,
        unique: true,
    },
    designation: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
    seatingLocation: {
        type: String,
        required: false,
    },
    roles: {
        type: [Number],
        required: false,
    },
    employmentStatus: {
        type: Number,
        required: false,
    },
    positionId: {
        type: String,
        required: false,
    },
    joiningDate: {
        type: Date,
        required: false,
    },
});

// Define the 'User' model with the schema.
const User = mongoose.model('User', userSchema);

// Export the model.
module.exports = User;

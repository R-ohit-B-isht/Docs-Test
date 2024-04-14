
/**@module */
/**
 * Represents the fields schema for the SRF model.
 * @typedef {Object} FieldsSchema
 * @property {string} projectName - The name of the project.
 * @property {string} projectCode - The code of the project.
 * @property {string} projectLocation - The location of the project.
 * @property {string} businessLine - The business line of the project.
 * @property {string} businessUnit - The business unit of the project.
 * @property {string} projectCategory - The category of the project.
 * @property {number} projectDurationInMonths - The duration of the project in months.
 * @property {string} projectRegion - The region of the project.
 * @property {string} projectSiteID - The site ID of the project.
 * @property {string} natureOfPosition - The nature of the position.
 * @property {string} positionID - The ID of the position.
 * @property {string} positionDesignation - The designation of the position.
 * @property {string} positionType - The type of the position.
 * @property {string} replacementOfName - The name of the person being replaced.
 * @property {Date} replacementLastWorkingDate - The last working date of the person being replaced.
 * @property {string} replacementOfPositionID - The ID of the position being replaced.
 * @property {Date} replacementDateOfResignation - The date of resignation of the person being replaced.
 * @property {string} hiringType - The type of hiring.
 * @property {string} employmentType - The type of employment.
 * @property {string} internalDesignation - The internal designation.
 * @property {string} jobCategory - The category of the job.
 * @property {string} jobGrade - The grade of the job.
 * @property {number} maximumBudgetedCTC - The maximum budgeted CTC.
 * @property {number} chargeOutBillingRate - The charge out billing rate.
 * @property {number} escalatedChargeOutBillingRate - The escalated charge out billing rate.
 * @property {number} balanceManMonth - The balance man month.
 * @property {string} perksAndBenefits - The perks and benefits.
 * @property {string} education - The education required.
 * @property {string} qualification - The qualification required.
 * @property {number} experience - The experience required.
 * @property {string} matrixManager - The matrix manager (only for HO/RO).
 * @property {string} businessUnitHead - The business unit head (only for HO/RO).
 * @property {string} galID - The GAL ID.
 * @property {string} jobCode - The job code.
 * @property {string} jobFamily - The job family.
 * @property {string} baseLocation - The base location.
 * @property {string[]} behaviouralSkills - The behavioural skills.
 * @property {string} technicalSkills - The technical skills.
 * @property {number} minimumExperience - The minimum experience required.
 * @property {number} maximumExperience - The maximum experience required.
 * @property {number} minimumSalary - The minimum salary.
 * @property {number} maximumSalary - The maximum salary.
 * @property {string} costCenterCode - The cost center code.
 * @property {number} eotDuration - The EOT duration.
 * @property {string} compensationType - The compensation type.
 * @property {string} jobDescription - The job description.
 * @property {string} salaryRangeCurrency - The currency for salary range.
 * @property {string} maximumBudgetedCTCCurrency - The currency for maximum budgeted CTC.
 * @property {string} chargeOutBillingRateCurrency - The currency for charge out billing rate.
 * @property {string} escalatedChargeOutBillingRateCurrency - The currency for escalated charge out billing rate.
 */
// Initialize Mongoose
const mongoose = require('mongoose');

// Import field checkers
const { project_checker, field_checker } = require('./field_checker_validator');
const { base } = require('./srf_model');

// Define the fields schema.
const fieldsSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: false
    },
    projectCode: {
        type: String,
        required: false
    },
    projectLocation: {
        type: String,
        required: false
    },
    businessLine: {
        type: String,
        required: false
    },
    businessUnit: {
        type: String,
        required: false
    },
    projectCategory: {
        type: String,
        required: false
    },
    projectDurationInMonths: {
        type: Number,
        required: false
    },
    projectRegion: {
        type: String,
        required: false
    },
    projectSiteID: {
        type: String,
        required: false
    },
    natureOfPosition: {
        type: String,
        required: false
    },
    positionID: {
        type: String,
        required: false
    },
    positionDesignation: {
        type: String,
        required: false
    },
    positionType: {
        type: String,
        required: false
    },
    replacementOfName: {
        type: String
    },
    replacementLastWorkingDate: {
        type: Date
    },
    replacementOfPositionID: {
        type: String
    },
    replacementDateOfResignation: {
        type: Date
    },
    hiringType: {
        type: String,
        required: false
    },
    employmentType: {
        type: String,
        required: false
    },
    internalDesignation: {
        type: String,
        required: false
    },
    jobCategory: {
        type: String,
        required: false
    },
    jobGrade: {
        type: String,
        required: false
    },
    maximumBudgetedCTC: {
        type: Number,
        required: false
    },
    chargeOutBillingRate: {
        type: Number,
        required: false
    },
    escalatedChargeOutBillingRate: {
        type: Number,
        required: false
    },
    balanceManMonth: {
        type: Number,
        required: false
    },
    perksAndBenefits: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    },
    qualification: {
        type: String,
        required: false
    },
    experience: {
        type: Number,
        required: false
    },
    // HO/RO only
    matrixManager: {
        type: String,
        required: false
    },
    businessUnitHead: {
        type: String,
        required: false
    },
    galID: {
        type: String,
        required: false
    },
    jobCode: {
        type: String,
        required: false
    },
    jobFamily: {
        type: String,
        required: false
    },
    baseLocation: {
        type: String,
        required: false
    },
    behaviouralSkills: {
        type: [String],
        required: false
    },
    technicalSkills: {
        type: String,
        required: false
    },
    minimumExperience: {
        type: Number,
        required: false
    },
    maximumExperience: {
        type: Number,
        required: false
    },
    minimumSalary: {
        type: Number,
        required: false
    },
    maximumSalary: {
        type: Number,
        required: false
    },
    costCenterCode: {
        type: String,
        required: false
    },
    eotDuration: {
        type: Number,
        required: false
    },
    compensationType: {
        type: String,
        required: false
    },
    jobDescription: {
        type: String,
        required: false
    },
    // Currency fields
    salaryRangeCurrency: {
        type: String,
        required: false
    },
    maximumBudgetedCTCCurrency: {
        type: String,
        required: false
    },
    chargeOutBillingRateCurrency: {
        type: String,
        required: false
    },
    escalatedChargeOutBillingRateCurrency: {
        type: String,
        required: false
    },
});


// Export the fields schema.
module.exports = fieldsSchema;

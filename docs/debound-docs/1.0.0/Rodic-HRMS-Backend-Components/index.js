const userModel = require('./models/user');
const projectModel = require('./models/projects');
const vacantPositionModel = require('./models/vacant_positions');
const SRF = require('./models/srf_model/srf_model');
const offer_letter = require('./models/offer_letter');
const generateDecisionMeetingName = require('./middlewares/generate_decision_meeting_name');
const generateObjectNumber = require('./middlewares/generate_object_number');
const generateEmail = require('./services/email_alerts/mailing_service');
const Selection = require('./models/selection_model');
const CandidateAction = require('./models/candidate_action_model');
const Application = require('./models/application_model/application_model');

// Description: This file is the entry point for the models, middlewares, and other commonly used modules.
// Currently, it exports the models and middlewares that are used in the application.

/**
 * @description Entry point for the backend components.
 */

// Models

// Middlewares

/**
 * @typedef {Object} Models
 * @property {Object} User - The User model.
 * @property {Object} VacantPosition - The VacantPosition model.
 * @property {Object} Project - The Project model.
 * @property {Object} SRF - The SRF model.
 */

/**
 * @typedef {Object} Middlewares
 * @property {Function} generateDecisionMeetingName - The generateDecisionMeetingName middleware.
 * @property {Function} generateObjectNumber - The generateObjectNumber middleware.
 */

/**
 * @typedef {Object} ExportedComponents
 * @property {Models} models - The exported models.
 * @property {Middlewares} middlewares - The exported middlewares.
 */

/**
 * Exported components of the backend.
 * @type {ExportedComponents}
 */
module.exports = {
    models: {
        User: userModel,
        VacantPosition: vacantPositionModel,
        Project: projectModel,
        SRF: SRF,
        OfferLetter:offer_letter,
        Selection:Selection,
        CandidateAction:CandidateAction,
        Application:Application
    },
    services:{
        GenerateEmail:generateEmail
    },
    middlewares: {
        generateDecisionMeetingName,
        generateObjectNumber
    }
};

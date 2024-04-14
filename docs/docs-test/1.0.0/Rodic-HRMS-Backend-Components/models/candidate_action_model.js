// Model for Candidate Actions

// Import the required modules.
const mongoose = require('mongoose');

/**
 * Schema for Candidate Actions.
 * It stores the actions taken on a candidate over time. 
 * This will be helpful for dashboarding and building a timeline/history.
 * @author Arshdeep Taneja
 */
const candidateActionSchema = new mongoose.Schema({
    srfNumber: {
        type: String,
        required: true,
    },
    candidateNumber: {
        type: String,
        required: true,
    },
    flowStageCode: {
        type: Number,
        required: true,
    },
    stageID: {
        type: Number,
        required: true,
    },
    statusCode: {
        type: Number,
        required: true,
    },
    assignedTo: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: false,
    }
});

// Export the model.
module.exports = mongoose.model('candidate_actions', candidateActionSchema);
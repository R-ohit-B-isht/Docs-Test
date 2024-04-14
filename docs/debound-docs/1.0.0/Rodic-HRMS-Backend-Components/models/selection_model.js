// Model for Selection Schema

// Import the required modules.
const mongoose = require('mongoose');

/**
 * Schema for Selections.
 * It stores the current relationship between a Requisition and a Candidate.
 * @author Arshdeep Taneja
 */
const selectionSchema = new mongoose.Schema({
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
});

// Export the model.
module.exports = mongoose.model('selections', selectionSchema);
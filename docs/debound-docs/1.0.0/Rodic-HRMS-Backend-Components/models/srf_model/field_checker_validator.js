/**
 * Function to set the required property of project fields.
 * @module
 * @param {Object} options - The options object.
 * @param {string} options.projectType - The project type.
 * @param {boolean} options.isDraft - The draft status.
 * @returns {boolean} - Returns true if the project type is "Project" and isDraft is false, otherwise returns false.
 */
function project_checker({projectType, isDraft}) {
    if (projectType === "Project" && isDraft === false) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function to set the required property of other fields.
 * @param {Object} options - The options object.
 * @param {boolean} options.isDraft - The draft status.
 * @returns {boolean} - Returns true if isDraft is false, otherwise returns false.
 */
function field_checker({isDraft}) {
    console.log(isDraft);
    if (isDraft === false) {
        return true;
    } else {
        return false;
    }
}

// Export the functions
module.exports = {
    project_checker,
    field_checker,
};

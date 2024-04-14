/**
 * Middleware to generate a unique Decision Meeting Name.
 * This generates a unique name for each decision meeting by appending a count to the prefix.
 * @class 
 * @description Middleware to generate a unique Decision Meeting Name.
 * @example
 * // Usage example
 * decisionMeetingSchema.pre('save', function (next) {
 *    generateDecisionMeetingName.call(this, next, 'decisionMeetingName');
 * }
 * 
 * @param {Function} next - The next function to be called after the middleware is executed.
 * @param {String} attributeName - Parameter of the class that will store the generated decision meeting name.
 * @returns {void} - Calls next().
 */

async function generateDecisionMeetingName(next, attributeName){
    // If the document is not new, do not generate a new object number
  // Simply call the next function
  if (!this.isNew) {
    return next();
  }

  try {
    // Get the count of documents in the collection
    const count = await this.constructor.countDocuments();
    // Generate the decision Meeting name as Decision Meeting + count
    const decisionMeetingName = `Decision Meeting ${count+1}`;
    // Set the object number to the parameter of the class provided as attributeName 
    this[attributeName] = decisionMeetingName;
    // Call the next function
    next();
  } catch (error) {
    // If there is an error, call the next function with the error
    next(error);
  }
}

// Export the function
module.exports = generateDecisionMeetingName;

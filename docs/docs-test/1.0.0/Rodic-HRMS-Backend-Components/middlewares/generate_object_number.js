/**
 * Middleware to generate a unique Object Number. This generates a unique 6 digit padded number with a prefix. 
 * Eg. REQ000001, CAN000003, etc.
 * @class
 * @example 
 * // Usage example
 * srfSchema.pre('save', function (next) {
    generateObjectNumber.call(this, next, 'REQ', 'srfNumber');
  });
 * @author Arshdeep Taneja
 * @param {Function} next The next function to be called after the middleware is executed 
 * @param {String} prefix Prefix for the Object Number
 * @param {*} attributeName Parameter of the class that will store the generated object number
 * @returns {void} Calls next()
 */  


async function generateObjectNumber(next, prefix, attributeName) {
  // If the document is not new, do not generate a new object number
  // Simply call the next function
  if (!this.isNew) {
    return next();
  }

  try {
    // Get the count of documents in the collection
    const count = await this.constructor.countDocuments();
    // Generate the object number (Count + 1) and pad it with 0s to make it 6 digits long
    const objectNumber = `${prefix}${String(count + 1).padStart(6, '0')}`;
    // Set the object number to the parameter of the class provided as attributeName 
    this[attributeName] = objectNumber;
    // Call the next function
    next();
  } catch (error) {
    // If there is an error, call the next function with the error
    next(error);
  }
}

module.exports = generateObjectNumber;
  
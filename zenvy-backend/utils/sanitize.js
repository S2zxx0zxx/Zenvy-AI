/**
 * Sanitizes user input by stripping HTML tags and trimming whitespace.
 * @param {string} str - The input string to sanitize.
 * @returns {string} - The cleaned string.
 */
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .trim();                  // Trim leading/trailing whitespace
}

module.exports = { sanitizeInput };

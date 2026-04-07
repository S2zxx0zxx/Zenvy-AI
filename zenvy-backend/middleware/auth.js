// Placeholder auth middleware — Firebase UID-based auth will be added in Prompt 3
// For now, this is a pass-through middleware

const authMiddleware = (req, res, next) => {
  // TODO: Verify Firebase ID token in Prompt 3
  next();
};

module.exports = authMiddleware;

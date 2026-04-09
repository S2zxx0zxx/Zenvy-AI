/**
 * Auth middleware — validates X-Zenvy-Secret header.
 * Frontend must send this header with every /api/chat request.
 * Value must match BACKEND_API_SECRET env variable.
 * Firebase UID-based auth will be layered on top in Phase 3.
 */
const authMiddleware = (req, res, next) => {
  const secret = process.env.BACKEND_API_SECRET;
  const provided = req.headers['x-zenvy-secret'];

  if (!secret) {
    // Fail closed in production; allow bypass only in development
    if (process.env.NODE_ENV === 'production') {
      console.error('[auth] BACKEND_API_SECRET not set in production — rejecting request');
      return res.status(401).json({ error: 'Unauthorized' });
    }
    console.warn('[auth] BACKEND_API_SECRET not set — skipping auth check');
    return next();
  }

  if (!provided || provided !== secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = authMiddleware;

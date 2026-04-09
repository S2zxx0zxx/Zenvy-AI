/**
 * Rate limiter — IP-based, IST midnight reset.
 * Uses in-memory Map (Phase 3 will upgrade to Redis/Firestore server-side).
 * Fail-CLOSED: on any error, block the request (do not grant access).
 * DAILY_LIMIT: 5 requests/IP/day for free tier.
 */

const requestMap = new Map();
const DAILY_LIMIT = 5;

function getMidnightIST() {
  const now = new Date();
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffsetMs);
  const midnightIST = new Date(
    Date.UTC(
      istNow.getUTCFullYear(),
      istNow.getUTCMonth(),
      istNow.getUTCDate() + 1,
      0, 0, 0, 0
    ) - istOffsetMs
  );
  return midnightIST.getTime();
}

// Clean expired entries every hour to prevent memory leak
setInterval(() => {
  if (requestMap.size === 0) return;
  const now = Date.now();
  for (const [ip, record] of requestMap.entries()) {
    if (now >= record.resetAt) requestMap.delete(ip);
  }
}, 60 * 60 * 1000);

const rateLimiter = (req, res, next) => {
  try {
    const ip = req.ip || req.socket?.remoteAddress || 'unknown';
    const now = Date.now();
    const record = requestMap.get(ip);

    if (!record || now >= record.resetAt) {
      requestMap.set(ip, { count: 1, resetAt: getMidnightIST() });
      return next();
    }

    if (record.count >= DAILY_LIMIT) {
      return res.status(429).json({
        error: 'Daily limit reached. Upgrade to Pro for unlimited access.',
        limitReached: true
      });
    }

    record.count += 1;
    requestMap.set(ip, record);
    return next();

  } catch (err) {
    // Fail CLOSED — do not grant access on error
    console.error('[rateLimit] Error:', err.message);
    return res.status(500).json({ error: 'Rate limit check failed. Try again.' });
  }
};

module.exports = rateLimiter;

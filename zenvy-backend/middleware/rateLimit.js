// Simple in-memory rate limiter using Map
// Key: req.ip | Resets at midnight IST (UTC+5:30) each day
// Free users: 5 requests per day
// Note: IP-based for now. Firebase UID-based limit added in Prompt 3.

const requestMap = new Map();

function getMidnightIST() {
  const now = new Date();
  // IST offset: UTC+5:30 = 330 minutes
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffsetMs);

  // Set to midnight IST
  const midnightIST = new Date(
    Date.UTC(
      istNow.getUTCFullYear(),
      istNow.getUTCMonth(),
      istNow.getUTCDate() + 1, // next day
      0, 0, 0, 0
    ) - istOffsetMs
  );

  return midnightIST.getTime();
}

const DAILY_LIMIT = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();

  const record = requestMap.get(ip);

  if (!record || now >= record.resetAt) {
    // First request or reset time passed — start fresh
    requestMap.set(ip, { count: 1, resetAt: getMidnightIST() });
    return next();
  }

  if (record.count >= DAILY_LIMIT) {
    return res.status(429).json({
      error: 'Daily limit reached. Upgrade to Pro for unlimited access.',
      limitReached: true
    });
  }

  // Increment count
  record.count += 1;
  requestMap.set(ip, record);
  return next();
};

module.exports = rateLimiter;

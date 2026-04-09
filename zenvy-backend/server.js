require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const chatRouter = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 8080;

// ── SECURITY HEADERS ──────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // Frontend is separate origin
  crossOriginEmbedderPolicy: false
}));
app.disable('x-powered-by');

// ── CORS — STRICT WHITELIST ───────────────────────────
const allowedOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://zenvy-ai-seven.vercel.app',
  'https://zenvyindia.com',
  'https://www.zenvyindia.com',
  'https://s2zxx0zxx.github.io'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow server-to-server (no origin) only in dev
    if (!origin && process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    if (origin && allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy violation'), false);
  },
  credentials: true
}));

app.use(express.json({ limit: '10kb' }));

// ── ROUTES ────────────────────────────────────────────
app.use('/api/chat', chatRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Zenvy Backend', timestamp: new Date().toISOString() });
});

// ── GLOBAL ERROR HANDLER ──────────────────────────────
app.use((err, req, res, next) => {
  if (err.message === 'CORS policy violation') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ── START ─────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(`✅ Zenvy backend running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

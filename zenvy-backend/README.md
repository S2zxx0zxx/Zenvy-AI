# Zenvy AI — Backend

Express.js backend for Zenvy AI. Deployed on Railway.

## Stack
- Node.js 18+
- Express 4
- Gemini 1.5 Flash (Google Generative AI)
- helmet (security headers)
- IP-based rate limiting (5 req/day free tier)
- X-Zenvy-Secret header auth

## Environment Variables (Railway)
| Variable | Description |
|---|---|
| GEMINI_API_KEY | Your Google AI Studio API key |
| BACKEND_API_SECRET | Random 32-char secret (must match frontend ZENVY_SECRET) |
| PORT | Auto-set by Railway |
| NODE_ENV | Set to `production` on Railway |

## Local Setup
```bash
cd zenvy-backend
npm install
cp .env.example .env
# Fill in GEMINI_API_KEY and BACKEND_API_SECRET in .env
npm run dev
```

## API Endpoints
| Method | Path | Auth | Description |
|---|---|---|---|
| GET | /api/health | None | Health check |
| POST | /api/chat | X-Zenvy-Secret header | Send message to AI agent |

## POST /api/chat — Request Body
```json
{
  "agent": "finance",
  "message": "How should I invest ₹10,000/month?",
  "history": []
}
```
agent must be one of: finance, legal, health, career

## Security Notes
- CORS: strict whitelist, no wildcard in production
- Rate limit: IP-based, IST midnight reset, fail-closed
- Auth: X-Zenvy-Secret validated on every /api/chat request
- Helmet: all security headers active, x-powered-by disabled

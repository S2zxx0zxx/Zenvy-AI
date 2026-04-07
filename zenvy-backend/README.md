# Zenvy AI — Backend Server

Express.js backend powering the Zenvy AI agents (Finance, Legal, Health, Career).

## Tech Stack
- Node.js 18+
- Express.js
- Anthropic Claude API
- CORS whitelist for production security

## Local Development

```bash
npm install
cp .env.example .env
# Fill in your API keys in .env
npm run dev
```

Server runs on `http://localhost:3001`

## Environment Variables Required

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic Claude API key |
| `RAZORPAY_KEY_ID` | Razorpay Key ID (for payments) |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret (for payments) |
| `PORT` | Port number (set automatically by Railway) |
| `NODE_ENV` | Set to `production` in production |

## Deployment on Railway

1. Go to [railway.app](https://railway.app) → Login with GitHub
2. **New Project** → **Deploy from GitHub repo**
3. Select the `zenvy-backend` folder (or the whole repo and set root directory to `zenvy-backend`)
4. Add environment variables in Railway dashboard (Settings → Variables)
5. Railway auto-detects `npm start` from `package.json`
6. Get your Railway URL (e.g. `https://zenvy-backend-production.up.railway.app`)
7. Paste that URL into `API_BASE` in `zenvyv2.html`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/chat` | Send message to AI agent |

### POST /api/chat

**Request body:**
```json
{
  "agent": "finance",
  "message": "How to save tax under 80C?",
  "history": []
}
```

**Response:**
```json
{
  "reply": "Under Section 80C, you can save up to ₹1.5 lakh..."
}
```

**Agent types:** `finance` | `legal` | `health` | `career`

## CORS Allowed Origins

Edit `server.js` to add your production domain to `allowedOrigins`.

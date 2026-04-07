<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=54&duration=2800&pause=1000&color=5B9BF8&center=true&vCenter=true&width=800&lines=ZENVY+AI;YOUR+COGNITIVE+OPERATING+SYSTEM;THINK+LESS.+DO+MORE.;BUILT+FOR+HUMANS+WHO+MOVE+FAST." alt="Zenvy AI" />

<br/>

![Status](https://img.shields.io/badge/Status-IN_DEVELOPMENT-5b9bf8?style=for-the-badge&logo=vercel&logoColor=white)
![Version](https://img.shields.io/badge/Version-v3.0-7c3aed?style=for-the-badge)
![Phase](https://img.shields.io/badge/Phase-1_(Claude_API_Live)-10b981?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-Vanilla_HTML%2FCSS%2FJS-f59e0b?style=for-the-badge&logo=javascript&logoColor=black)
![Claude](https://img.shields.io/badge/AI-Claude_Sonnet_4-cc785c?style=for-the-badge&logo=anthropic&logoColor=white)
![Firebase](https://img.shields.io/badge/Auth-Firebase_v10-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Razorpay](https://img.shields.io/badge/Payments-Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Service_Worker-5A2D82?style=for-the-badge&logo=pwa&logoColor=white)
![Hosting](https://img.shields.io/badge/Hosted-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)
![Firestore](https://img.shields.io/badge/DB-Firestore-FF6F00?style=for-the-badge&logo=firebase)
![Built By](https://img.shields.io/badge/Built_by-Satzzxzxx-5b9bf8?style=for-the-badge&logo=github)

<br/>

> ### 🧠 A zero-dependency AI SaaS OS — engineered without React, without Node, without a build pipeline.
> Just raw browser APIs, the Claude API, and an obsessive attention to craft.

<br/>

[🚀 Live App](https://zenvy.ai) &nbsp;·&nbsp; [💬 WhatsApp](https://wa.me/917439133880) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/S2zxx0zxx/ZENVYAI/issues) &nbsp;·&nbsp; [📸 Instagram](https://instagram.com/__.satzzxzxx) &nbsp;·&nbsp; [🐦 X / Twitter](https://twitter.com/satzzxzxx)

</div>

---

<br/>

## 🗺️ Table of Contents

- [What Is Zenvy](#-what-is-zenvy)
- [Live Architecture](#-live-architecture)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Feature Map](#-feature-map)
- [AI Agent System](#-ai-agent-system)
- [Build Phases](#-build-phases)
- [Analytics & Tracking](#-analytics--tracking)
- [PWA & Service Worker](#-pwa--service-worker)
- [Security Layer](#-security-layer)
- [Performance Numbers](#-performance-numbers)
- [Version History](#-version-history)
- [Deployment](#-deployment)
- [Pricing](#-pricing)
- [Built By](#-built-by)

<br/>

---

## 🧠 What Is Zenvy

**Zenvy AI** is a personal cognitive operating system — a single-interface AI SaaS that replaces ten separate apps with one. It's not a chatbot. It's a structured agent layer on top of the Claude API, purpose-built to help individuals think, plan, write, and execute faster.

This repository is the **complete production codebase**. No CRA. No Vite. No Next.js. Just one HTML file, one CSS file, one JS file — and a direct line to one of the most capable AI models on earth.

```
One file loads the UI.
One API call runs the brain.
One WhatsApp link closes the sale.

Zero npm install. Zero webpack. Zero build step.
The browser is the platform. The Claude API is the engine.
```

### What Makes It Different

| Other AI Tools | Zenvy AI |
|---|---|
| Blank chat box | Structured agent cards per task type |
| Generic GPT responses | Agents with system prompts tuned to context |
| No memory between sessions | Firestore-persisted conversation history |
| Cold, corporate UI | Glassmorphism + ripple + kinetic dark UI |
| Requires login immediately | Works in demo mode, auth unlocks history |
| Subscription or nothing | Free tier + INR-native Razorpay billing |

<br/>

---

## ⚡ Live Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                        ZENVY AI — v3.0                                    │
│                     Production Architecture                               │
├──────────────────────────┬───────────────────────────────────────────────┤
│  Frontend                │  Pure HTML5 + CSS3 + Vanilla ES6+             │
│  Entry Point             │  index.html  (~68KB · 4,800+ lines)           │
│  Styles                  │  assets/css/main.css  (~42KB)                 │
│  Scripts                 │  assets/js/main.js  (~24KB)                   │
│  Config                  │  config/app.js  (~3.1KB · feature flags)      │
├──────────────────────────┼───────────────────────────────────────────────┤
│  AI Engine               │  Claude API → claude-sonnet-4-20250514        │
│  Auth                    │  Firebase Authentication v10 (Google SSO)     │
│  Database                │  Firestore (conversation history · user prefs)│
│  Payments                │  Razorpay (INR · UPI · Cards · Wallets)       │
├──────────────────────────┼───────────────────────────────────────────────┤
│  Hosting                 │  GitHub Pages (Static)                        │
│  CDN                     │  Cloudflare (Cache · HTTPS · DDoS)            │
│  Domain                  │  zenvy.ai (Namecheap)                         │
│  DNS                     │  Namecheap → GitHub Pages A records           │
├──────────────────────────┼───────────────────────────────────────────────┤
│  Analytics               │  GA4 · G-XXXXXXXX                             │
│  Error Tracking          │  Sentry (GitHub Student Pack)                 │
│  Secrets                 │  Doppler (API keys · env vars)                │
│  PWA Cache               │  Service Worker v2 · 3-strategy caching       │
├──────────────────────────┼───────────────────────────────────────────────┤
│  CI/CD                   │  GitHub Actions (auto-deploy on push to main) │
│  Dev Environment         │  GitHub Codespaces (180hrs/month free)        │
│  SEO                     │  Schema.org JSON-LD · Open Graph · Sitemap    │
│  Security                │  CSP · Input Sanitization · HTTPS enforced    │
└──────────────────────────┴───────────────────────────────────────────────┘
```

<br/>

---

## 🗂️ Project Structure

```
ZENVYAI/
│
├── 📄 index.html                    # Main app shell (Single-file PWA · ~68KB)
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 🎨 main.css             # Complete design system (42KB)
│   ├── 📁 js/
│   │   └── ⚙️  main.js             # All application logic (24KB)
│   └── 📁 icons/
│       ├── 🎨  icon-96.png
│       ├── 🎨  icon-144.png
│       ├── 🎨  icon-192.png
│       └── 🎨  icon-512.png
│
├── 📁 config/
│   └── ⚙️  app.js                  # Feature flags · API hooks · plan limits
│
├── 📁 .github/
│   └── 📁 workflows/
│       └── 🔄 deploy.yml           # GitHub Actions auto-deploy pipeline
│
├── 📄 sw.js                        # Service Worker (Cache v2 · 3 strategies)
├── 📄 manifest.json                # PWA manifest (5 icon sizes · 3 shortcuts)
├── 📄 CNAME                        # Custom domain → zenvy.ai
├── 📄 robots.txt                   # Crawler config + sitemap reference
├── 📄 sitemap.xml                  # SEO sitemap
├── 📄 SECURITY.md                  # Responsible disclosure policy
├── 📄 CHANGELOG.md                 # Full version history
└── 📄 README.md                    # You're reading this
```

<br/>

---

## 🎨 Design System

Every visual token is defined once and used everywhere. No hardcoded values. No inconsistencies.

### Color Palette

```
┌─────────────────────┬──────────────────────────┬──────────────────────────────────────┐
│ Token               │ Value                    │ Usage                                │
├─────────────────────┼──────────────────────────┼──────────────────────────────────────┤
│ --blue              │ #5b9bf8                  │ Primary accent · CTA · links         │
│ --blue-dim          │ #3b7de8                  │ Button hover · active states         │
│ --purple            │ #7c3aed                  │ Agent: Life Manager · gradients      │
│ --green             │ #10b981                  │ Agent: Brain · success · status      │
│ --orange            │ #f59e0b                  │ Agent: Business · badges · warnings  │
│ --bg                │ #080810                  │ Root background (near-black navy)    │
│ --bg2               │ #0d0d1a                  │ Sidebar · modal overlays             │
│ --bg3               │ #12122a                  │ Card backgrounds                     │
│ --glass             │ rgba(255,255,255,0.04)   │ Glassmorphism card fill              │
│ --glass-b           │ rgba(91,155,248,0.14)    │ Glassmorphism borders                │
│ --text              │ #e8eaf6                  │ Primary body text                    │
│ --text2             │ #9099b8                  │ Descriptions · secondary text        │
│ --text3             │ #565f82                  │ Labels · timestamps · meta           │
│ --success           │ #10b981                  │ Positive states · online dot         │
│ --danger            │ #ef4444                  │ Errors · delete actions              │
│ --shadow            │ 0 4px 24px rgba(0,0,0,0.4)    │ Card elevation               │
│ --shadow-blue       │ 0 8px 32px rgba(91,155,248,0.2)│ CTA glow · focus ring        │
└─────────────────────┴──────────────────────────┴──────────────────────────────────────┘
```

### Typography

```
Display / Brand    →  Space Grotesk     (headings · logo · hero · agent names)
Body / UI          →  Inter             (descriptions · inputs · chat text · meta)
Mono / Code        →  JetBrains Mono   (API responses · code blocks · timestamps)
```

Font loading: `preload as="style"` with `onload` swap — zero render blocking.

### Spacing & Depth

```
--r      : 16px   →  Cards · modals · agent panels
--rs     :  8px   →  Buttons · inputs · pill tags
--rss    :  4px   →  Badges · small elements

--shadow           →  0 4px 24px rgba(0,0,0, 0.40)
--shadow-md        →  0 12px 48px rgba(0,0,0, 0.55)
--shadow-blue      →  0 8px 32px rgba(91,155,248, 0.20)
--shadow-purple    →  0 8px 32px rgba(124,58,237, 0.20)
```

### Animation Principles

- **GPU-only** — all transforms use `transform` + `opacity` exclusively. Zero layout-triggering properties.
- **Ripple on every button** — `::after` radial-gradient ripple on `mousedown`, 600ms ease-out
- **Glassmorphism cards** — `backdrop-filter: blur(24px)` on chat panel, sidebar, modals
- **IntersectionObserver** — agent cards animate in staggered via `translateY(40px) → 0` on scroll
- **Bottom nav pulse** — active tab indicator scales in with spring cubic bezier `cubic-bezier(.34,1.56,.64,1)`
- **Chat stream** — token-by-token text injection with typewriter cursor `|` blink
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` respected throughout

<br/>

---

## 🔧 Feature Map

### Shell & Navigation

| Feature | Class / ID | Notes |
|---|---|---|
| Fixed sidebar (desktop) | `#sidebar` | Collapsible · 260px → 72px icon-only mode |
| Bottom nav (mobile) | `#bottom-nav` | 5 tabs · active indicator with spring animation |
| Active route tracking | `data-route` attrs | `setRoute()` function manages view transitions |
| Scroll progress bar | `#pb` | Blue gradient · 2px top of viewport |
| Custom cursor | `.cur` + `.curR` | Dot + ring · hover morph · RAF loop |
| Announcement banner | `#ann-bar` | Dismiss → `sessionStorage` persist |
| Ripple system | `.ripple` class | Attached to every interactive element via IIFE |
| Keyboard shortcuts | `Ctrl+K` | Open command palette (power user feature) |
| Theme persistence | `localStorage` | Dark mode only, but saved per user |

### Chat Interface

| Feature | Details |
|---|---|
| **Claude API integration** | `fetch()` POST to `/v1/messages` · `claude-sonnet-4-20250514` |
| **Streaming simulation** | Token-by-token DOM injection with `requestAnimationFrame` cadence |
| **Message history** | Full conversation array maintained in-memory · Firestore synced on auth |
| **Agent switching** | Each agent injects a custom `system` prompt — context shapes the entire conversation |
| **Copy button** | Per-message clipboard copy with check-mark confirmation (2s then reverts) |
| **Regenerate** | Re-fires last user message without duplicating it in history |
| **Clear chat** | Wipes local state + Firestore doc for the session |
| **Input resize** | `textarea` auto-grows to 5 rows max · collapses on send |
| **Keyboard send** | `Enter` sends · `Shift+Enter` newline |
| **XSS sanitization** | `esc()` wraps all injected content · Markdown rendering via `marked.js`-free custom parser |

### AI Agent System (4 Agents)

| Agent | Color Token | System Prompt Focus | Use Case |
|---|---|---|---|
| **Zenvy** (default) | `--blue` | General AI assistant · broad knowledge | Everyday queries |
| **Life Manager** | `--purple` | Goal setting · scheduling · habit tracking | Personal productivity |
| **Brain** | `--green` | Deep research · synthesis · second brain | Learning & knowledge |
| **Business Co-Pilot** | `--orange` | Strategy · copy · market research · decisions | Entrepreneurship |

### Auth System (Firebase)

| Feature | Function | Notes |
|---|---|---|
| Google SSO | `signInWithPopup()` | One-click · no password form |
| Auth state listener | `onAuthStateChanged()` | Hydrates UI on reload without flicker |
| Guest mode | Default on load | Full UI visible · history not saved |
| Sign out | `signOut()` | Clears local state + redirects to home |
| User avatar | `photoURL` from Google | Shown in sidebar + welcome screen |
| Plan gate | `checkPlan()` on message send | Blocks free users at 10 msg/day |

### Subscription & Payments (Razorpay)

| Plan | Price | Limits | Razorpay Plan ID |
|---|---|---|---|
| Free | ₹0 | 10 msgs/day · 1 agent | — |
| Pro | ₹199/mo | Unlimited msgs · all agents · history | `plan_pro_monthly` |
| Max | ₹499/mo | Pro + priority API · export · early features | `plan_max_monthly` |

- Razorpay `checkout.js` loaded **on demand** only when user clicks upgrade (not on page load)
- Payment success → Firestore `users/{uid}.plan` updated → UI re-rendered
- UPI · Cards · Net Banking · Wallets all supported natively

### Command Palette (`Ctrl+K`)

```
Commands registered:
  /new          → Start new chat
  /agent [name] → Switch active agent
  /clear        → Clear current chat
  /history      → Open chat history panel
  /upgrade      → Open pricing modal
  /logout       → Sign out
  /help         → Show all commands
```

### History Panel

- Firestore collection: `chats/{uid}/sessions/{sessionId}`
- Paginated: 20 sessions per load · "Load more" infinite scroll
- Each session: title (first user message truncated to 40 chars) · timestamp · message count
- Delete session: soft-delete with undo toast (3s window)
- Search: client-side filter on session titles

### Onboarding Flow

- 3-step modal on first load (`localStorage` key `zv_onboarded`)
- Step 1: Agent picker — user selects primary agent
- Step 2: Name input — personalizes system prompts (`Hi [name], ...`)
- Step 3: Plan overview — Free vs Pro comparison
- Skip always available · revisit from settings

<br/>

---

## 🤖 AI Agent System

Each agent in Zenvy is not just a different label. It's a full system prompt architecture:

```
┌──────────────────────────────────────────────────────────────────────┐
│  Agent: Business Co-Pilot                                             │
├──────────────────────────────────────────────────────────────────────┤
│  System Prompt Focus:                                                 │
│  - Strategic thinking partner for solo founders & entrepreneurs       │
│  - Answers about: pricing, positioning, GTM, hiring, ops, copy      │
│  - Always pushes for specificity: "give me a number, not a vibe"    │
│  - Follows up with one sharp question to deepen the answer           │
│  - Never gives academic theory. Only actionable decisions.           │
├──────────────────────────────────────────────────────────────────────┤
│  Max Tokens   : 1,000                                                 │
│  Temperature  : 0.7 (balanced creativity + precision)                │
│  Model        : claude-sonnet-4-20250514                             │
└──────────────────────────────────────────────────────────────────────┘
```

Agent configs stored in `config/app.js` as a typed constant object — swappable without touching UI logic.

<br/>

---

## 🏗️ Build Phases

```
Phase 1  ✅  COMPLETE    Claude API Live Chat
         │               → Real API calls (claude-sonnet-4-20250514)
         │               → 4 agent personas with system prompts
         │               → Streaming token injection UI
         │               → Mobile-first bottom nav + sidebar
         │               → Glassmorphism card design system
         │               → Ripple button system
         │               → Custom cursor

Phase 2  🔄  IN PROGRESS  Firebase Auth
         │               → Google SSO
         │               → Auth state persistence
         │               → Guest vs signed-in UI states
         │               → User avatar + display name

Phase 3  📋  PLANNED      Firestore History
         │               → Session save/load
         │               → Paginated history panel
         │               → Delete with undo
         │               → Client-side search

Phase 4  📋  PLANNED      Razorpay Payments
                         → Pro + Max plan checkout
                         → Firestore plan field sync
                         → Plan-gated features
                         → UPI-first payment flow
```

<br/>

---

## 📊 Analytics & Tracking

### GA4 Events Tracked (`track()` helper)

| Event Name | Trigger |
|---|---|
| `agent_selected` | Agent tab clicked |
| `message_sent` | User submits a message |
| `message_regenerated` | Regenerate button clicked |
| `chat_cleared` | Clear chat triggered |
| `auth_login` | Successful Google sign-in |
| `auth_logout` | Sign-out clicked |
| `upgrade_modal_open` | Pricing modal opened |
| `plan_selected` | Razorpay plan chosen |
| `payment_success` | Razorpay `payment.captured` fired |
| `onboarding_completed` | Step 3 confirmed |
| `onboarding_skipped` | Skip clicked |
| `command_palette_open` | `Ctrl+K` used |
| `shortcut_used` | Any command palette command fired |
| `history_session_opened` | Past chat loaded |
| `history_session_deleted` | Session deleted |
| `scroll_depth` | 25% · 50% · 75% · 100% |
| `pwa_install` | Install prompt accepted |

### Scroll Depth

```js
// Fires once per milestone per session — zero repeat firing
const marks = [25, 50, 75, 100];
const tracked = new Set();
// Passive scroll listener + requestAnimationFrame
// Zero jank. Zero layout thrash.
```

### Sentry Error Tracking

```js
// GitHub Student Pack — free Sentry project
// Captures: unhandled promise rejections · JS errors · API failures
// Source maps uploaded on deploy via GitHub Actions
```

<br/>

---

## 📱 PWA & Service Worker

### Manifest (manifest.json)

```json
{
  "name": "Zenvy AI",
  "short_name": "Zenvy",
  "display": "standalone",
  "theme_color": "#5b9bf8",
  "background_color": "#080810",
  "start_url": "/"
}
```

**3 App Shortcuts** (long-press icon):
- New Chat → `/?new=true`
- Business Co-Pilot → `/?agent=business`
- Chat History → `/#history`

**5 Icon Sizes**: 96px · 144px · 152px · 192px · 512px

### Service Worker (sw.js · Cache Version: v2)

```
┌──────────────────────────────────────┬──────────────────────────────────┐
│ Request Type                         │ Strategy                         │
├──────────────────────────────────────┼──────────────────────────────────┤
│ Google Fonts (googleapis/gstatic)    │ Cache-First (long-lived)         │
│ /assets/ · /icons/ · /config/        │ Cache-First (static shell)       │
│ HTML pages (text/html)               │ Network-First (always fresh)     │
│ Anthropic API calls                  │ Network-Only (never cached)      │
│  Firebase SDK calls                   │ Network-Only (never cached)      │
│ Everything else                      │ Stale-While-Revalidate           │
└──────────────────────────────────────┴──────────────────────────────────┘
```

**Cache buckets:**
- `zv-static-v2` → CSS · JS · icons
- `zv-pages-v2` → HTML
- `zv-fonts-v2` → Google Fonts

**Critical**: API calls (`api.anthropic.com`, `firestore.googleapis.com`) are explicitly **excluded** from SW — always go to network.

<br/>

---

## 🔐 Security Layer

```
┌────────────────────────────────────────────────────────────────────────┐
│                          SECURITY POSTURE                               │
├────────────────────────────────────────────────────────────────────────┤
│  HTTPS             Enforced by GitHub Pages + Cloudflare               │
│  API Keys          All secrets via Doppler (GitHub Student Pack)       │
│                    Never hardcoded. Never in client JS.                │
│  CSP Header        Strict Content-Security-Policy in <meta>            │
│                    Allowlist: self · GTM · Firebase · Anthropic        │
│  XSS Protection    esc() sanitizes all DOM injections                  │
│  MIME Sniffing     X-Content-Type-Options: nosniff                     │
│  Referrer          strict-origin-when-cross-origin                     │
│  Auth              Firebase JWT · tokens never stored in localStorage  │
│  Firestore Rules   Users can only read/write their own UID path        │
│  Rate Limiting     Plan check in JS + Firestore rule enforcement       │
│  Dependencies      Zero npm packages in production runtime             │
│  Razorpay          Payment verified server-side via Firestore Functions│
│  Sentry            PII scrubbing enabled · no user content logged      │
└────────────────────────────────────────────────────────────────────────┘
```

### Firestore Security Rules (Simplified)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    match /chats/{uid}/sessions/{sessionId} {
      allow read, write: if request.auth.uid == uid;
    }
  }
}
```

### Doppler Secrets Managed

```
ANTHROPIC_API_KEY      →  Claude API key
FIREBASE_API_KEY       →  Firebase web config
RAZORPAY_KEY_ID        →  Razorpay publishable key
GA4_MEASUREMENT_ID     →  Google Analytics
SENTRY_DSN             →  Error tracking endpoint
```

<br/>

---

## ⚡ Performance Numbers

### Lighthouse Scores (Target)

```
                    Mobile          Desktop
                 ┌──────────┐    ┌──────────┐
  Performance    │   96 ██▓ │    │  100 ███ │
  Accessibility  │   95 ██▓ │    │   98 ██▓ │
  Best Practices │  100 ███ │    │  100 ███ │
  SEO            │   98 ██▓ │    │  100 ███ │
                 └──────────┘    └──────────┘
```

### Asset Budget

```
┌──────────────────────────┬──────────────┬──────────────────────────────────┐
│ File                     │ Size         │ Notes                            │
├──────────────────────────┼──────────────┼──────────────────────────────────┤
│ index.html               │ ~68KB        │ All markup + inline SVG          │
│ assets/css/main.css      │ ~42KB        │ Complete design system           │
│ assets/js/main.js        │ ~24KB        │ All app logic + API calls        │
│ config/app.js            │ ~3.1KB       │ Agent configs + feature flags    │
│ sw.js                    │ ~5.2KB       │ Service worker                   │
│ manifest.json            │ ~1.8KB       │ PWA manifest                    │
│ 4× PNG Icons             │ ~18KB total  │ 96–512px PWA icons               │
├──────────────────────────┼──────────────┼──────────────────────────────────┤
│ TOTAL (static shell)     │ ~162KB       │ Before any API call              │
│ Firebase SDK             │ ~47KB        │ Loaded async after auth needed   │
│ Razorpay SDK             │ ~38KB        │ Loaded on-demand at checkout     │
└──────────────────────────┴──────────────┴──────────────────────────────────┘
```

### Techniques Used

- **`preload as="style"`** — fonts async, never block render
- **`defer`** on all non-critical scripts (Firebase, Razorpay, Sentry)
- **`passive: true`** on all scroll + touch listeners
- **`requestAnimationFrame`** for cursor, ripple, and stream injection
- **`will-change: transform`** on animated elements for GPU layer promotion
- **`IntersectionObserver`** — every scroll-reveal and agent card entrance
- **On-demand SDK loading** — Razorpay `checkout.js` injected into DOM only when upgrade modal opens
- **Cloudflare edge caching** — static assets cached globally

<br/>

---

## 🔄 Version History

```
v3.0  |  Apr 2026  |  Design System Overhaul (CURRENT)
      |            |  → Glassmorphism 2.0 — multi-layer card depth
      |            |  → Agent color system (blue · purple · green · orange)
      |            |  → Ripple system on all interactive elements
      |            |  → Bottom nav with spring animation indicator
      |            |  → Command palette (Ctrl+K) with 7 shortcuts
      |            |  → Custom cursor (dot + ring · hover morph)
      |            |  → Mobile-first full redesign
      |            |  → Onboarding 3-step modal

v2.0  |  Apr 2026  |  Claude API Integration
      |            |  → Real API calls (claude-sonnet-4-20250514)
      |            |  → 4 agent personas with system prompts
      |            |  → Token streaming simulation
      |            |  → Message history (in-memory)
      |            |  → Copy + Regenerate per message
      |            |  → Auto-resize textarea
      |            |  → XSS sanitization on all DOM injection

v1.0  |  Apr 2026  |  Initial Build (zenvyv2.html)
      |            |  → Static UI — no API calls
      |            |  → Design system established
      |            |  → Dark theme · Inter + Space Grotesk
      |            |  → Agent card layout
      |            |  → Mobile bottom nav
      |            |  → Sidebar navigation (desktop)
```

<br/>

---

## 🚀 Deployment

### Auto-Deploy Flow

```
Push to main branch
       ↓
GitHub Actions triggers (.github/workflows/deploy.yml)
       ↓
Doppler injects secrets into build environment
       ↓
GitHub Pages deploys static files
       ↓
Cloudflare CDN invalidates edge cache
       ↓
Live at zenvy.ai
```

### Local Dev (No Build Step)

```bash
# Direct open — works for UI, but CORS blocks API
open index.html

# Local server — required for SW + API testing
npx serve .
# or
python3 -m http.server 8000

# Doppler secrets for local dev
doppler run -- npx serve .
```

### DNS Configuration (Namecheap)

```
Type   |  Host   |  Value
───────┼─────────┼──────────────────────────────────
A      |  @      |  185.199.108.153
A      |  @      |  185.199.109.153
A      |  @      |  185.199.110.153
A      |  @      |  185.199.111.153
CNAME  |  www    |  s2zxx0zxx.github.io
```

<br/>

---

## 💳 Pricing

```
┌───────────────┬──────────────────┬──────────────────┬────────────────────┐
│               │  FREE            │  PRO             │  MAX               │
├───────────────┼──────────────────┼──────────────────┼────────────────────┤
│  Price        │  ₹0/mo           │  ₹199/mo         │  ₹499/mo           │
│  Messages     │  10/day          │  Unlimited       │  Unlimited         │
│  Agents       │  Zenvy only      │  All 4 agents    │  All 4 + upcoming  │
│  History      │  Session only    │  30 days         │  Unlimited         │
│  Export       │  ✗               │  ✗               │  ✓ PDF + Markdown  │
│  API Priority │  Shared          │  Shared          │  Priority queue    │
│  Support      │  Community       │  Email           │  WhatsApp direct   │
└───────────────┴──────────────────┴──────────────────┴────────────────────┘
```

Payment handled by Razorpay — UPI, Cards, Net Banking, Wallets. INR-native. No USD conversion.

<br/>

---

## 🌐 SEO & Structured Data

### Schema.org JSON-LD

Full `SoftwareApplication` schema:
- `applicationCategory: BusinessApplication`
- `operatingSystem: Web`
- `offers` → 3 pricing tiers with `priceCurrency: INR`
- `author` → `Person` → Satzzxzxx
- `potentialAction` → `SearchAction` on main chat

### Open Graph

```html
og:type    → website
og:locale  → en_IN
og:image   → 1200×630 preview card (dark · blue accent)
twitter:card → summary_large_image
```

<br/>

---

## 👨‍💻 Built By

<div align="center">

<br/>

**Satzzxzxx** — Solo Developer & Entrepreneur

*Building monetizable digital products from scratch — zero frameworks, maximum impact.*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-S2zxx0zxx-181717?style=for-the-badge&logo=github)](https://github.com/S2zxx0zxx)
[![Website](https://img.shields.io/badge/Portfolio-satzzxzxx.me-5b9bf8?style=for-the-badge&logo=safari&logoColor=white)](https://satzzxzxx.me)
[![Instagram](https://img.shields.io/badge/Instagram-__.satzzxzxx-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/__.satzzxzxx)
[![Twitter](https://img.shields.io/badge/Twitter-satzzxzxx-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/satzzxzxx)
[![Telegram](https://img.shields.io/badge/Telegram-InvestGrow__IN-2CA5E0?style=for-the-badge&logo=telegram)](https://t.me/InvestGrow_IN)

<br/>

> *"The browser is the most powerful runtime ever built. Most developers ignore that and reach for a framework. I don't."*

<br/>

**Other Projects**

| Project | Description | Stack |
|---|---|---|
| [The Liquid Lounge](https://theliquidlounge.in) | Premium bar & restaurant — production website | HTML · CSS · JS · PWA |
| [FinCalc India](https://satzzxzxx.me) | Personal finance calculator suite · 11 tools | HTML · CSS · JS · PWA |
| [GameMart](https://github.com/S2zxx0zxx) | Digital accounts storefront | Single-file HTML |
| FanGate | Sports ticket marketplace | GitHub Pages |

</div>

<br/>

---

<div align="center">

**⭐ Star this repo if this codebase made you question why you use React.**

*Every file has a reason. Every line has intent. Nothing is here by accident.*

<br/>

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=100&section=footer&animation=twinkling)

</div>

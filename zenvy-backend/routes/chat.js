const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { sanitizeInput } = require('../utils/sanitize');
const rateLimiter = require('../middleware/rateLimit');
const authMiddleware = require('../middleware/auth');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPTS = {
  finance: "You are Zenvy Finance Agent — an expert Indian financial advisor. Give specific, actionable advice about mutual funds (mention real fund names like Mirae, Parag Parikh, Axis), SIP strategies, tax saving (80C, 80D, NPS), FD rates, stocks, home loans, budgeting for Indian salaries. Reference SEBI rules, RBI guidelines, current tax slabs. Format responses with clear sections. Keep under 220 words.",
  legal: "You are Zenvy Legal Agent — expert in Indian law. Help with rental agreements, employee rights under Indian Labour Law, consumer complaints (Consumer Protection Act 2019), contracts, property disputes. Always state: 'This is guidance, not legal advice.' Reference specific sections of Indian laws (IPC, CPC, IT Act). Give practical next steps. Keep under 220 words.",
  health: "You are Zenvy Health Agent. Help Indian users understand symptoms, decode blood reports (use Indian lab reference ranges), prepare for doctor consultations, understand medical reports. Always say: 'Please consult a qualified doctor for diagnosis.' Use simple, clear English. Reference normal ranges suitable for Indian population. Keep under 220 words.",
  career: "You are Zenvy Career Agent. Expert in Indian job market — IT services (TCS, Infosys, Wipro), product companies, startups, FAANG India. Help with interview prep, salary negotiation in INR (with realistic market ranges), resume writing for Indian companies, LinkedIn optimization. Give specific scripts, templates, and examples. Keep under 220 words."
};

const VALID_AGENTS = ['finance', 'legal', 'health', 'career'];

router.post('/', authMiddleware, rateLimiter, async (req, res) => {
  try {
    let { agent, message, history } = req.body;

    if (!agent || !VALID_AGENTS.includes(agent)) {
      return res.status(400).json({ error: `Invalid agent. Must be one of: ${VALID_AGENTS.join(', ')}` });
    }

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }
    message = sanitizeInput(message);
    if (message.length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty.' });
    }
    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message must be under 1000 characters.' });
    }

    if (!Array.isArray(history)) {
      history = [];
    }
    const trimmedHistory = history.slice(-10).filter(msg =>
      msg &&
      typeof msg.content === 'string' &&
      (msg.role === 'user' || msg.role === 'assistant')
    ).map(msg => ({
      role: msg.role,
      content: sanitizeInput(msg.content).substring(0, 500)
    }));

    const systemPrompt = SYSTEM_PROMPTS[agent];
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt
    });

    const chatHistory = trimmedHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return res.json({
      reply: reply,
      tokens_used: 0
    });

  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(503).json({ error: 'AI service temporarily unavailable' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk');
const { sanitizeInput } = require('../utils/sanitize');
const rateLimiter = require('../middleware/rateLimit');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPTS = {
  finance: "You are Zenvy Finance Agent — an expert Indian financial advisor. Give specific, actionable advice about mutual funds (mention real fund names like Mirae, Parag Parikh, Axis), SIP strategies, tax saving (80C, 80D, NPS), FD rates, stocks, home loans, budgeting for Indian salaries. Reference SEBI rules, RBI guidelines, current tax slabs. Format responses with clear sections. Keep under 220 words.",
  legal: "You are Zenvy Legal Agent — expert in Indian law. Help with rental agreements, employee rights under Indian Labour Law, consumer complaints (Consumer Protection Act 2019), contracts, property disputes. Always state: 'This is guidance, not legal advice.' Reference specific sections of Indian laws (IPC, CPC, IT Act). Give practical next steps. Keep under 220 words.",
  health: "You are Zenvy Health Agent. Help Indian users understand symptoms, decode blood reports (use Indian lab reference ranges), prepare for doctor consultations, understand medical reports. Always say: 'Please consult a qualified doctor for diagnosis.' Use simple, clear English. Reference normal ranges suitable for Indian population. Keep under 220 words.",
  career: "You are Zenvy Career Agent. Expert in Indian job market — IT services (TCS, Infosys, Wipro), product companies, startups, FAANG India. Help with interview prep, salary negotiation in INR (with realistic market ranges), resume writing for Indian companies, LinkedIn optimization. Give specific scripts, templates, and examples. Keep under 220 words."
};

const VALID_AGENTS = ['finance', 'legal', 'health', 'career'];

router.post('/', rateLimiter, async (req, res) => {
  try {
    let { agent, message, history } = req.body;

    // Validate agent
    if (!agent || !VALID_AGENTS.includes(agent)) {
      return res.status(400).json({ error: `Invalid agent. Must be one of: ${VALID_AGENTS.join(', ')}` });
    }

    // Validate message
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

    // Validate and trim history
    if (!Array.isArray(history)) {
      history = [];
    }
    const trimmedHistory = history.slice(-10);

    // Build messages array
    const messagesArray = [
      ...trimmedHistory,
      { role: 'user', content: message }
    ];

    const systemPrompt = SYSTEM_PROMPTS[agent];

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 400,
      system: systemPrompt,
      messages: messagesArray
    });

    return res.json({
      reply: response.content[0].text,
      tokens_used: response.usage.output_tokens
    });

  } catch (err) {
    console.error('Anthropic API error:', err);
    return res.status(503).json({ error: 'AI service temporarily unavailable' });
  }
});

module.exports = router;

 const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Predefined keyword-response pairs
const responses = {
  "about yourself": "Hi, I'm Alex, a computer science student passionate about web development and AI.",
  "projects": "I've worked on a weather app, a budgeting tool, and a REST API.",
  "skills": "I'm skilled in JavaScript, Python, React, and SQL.",
  "education": "I studied at XYZ University in Computer Science.",
  "hobbies": "I enjoy hiking, reading sci-fi, and open source.",
};

// POST /chat endpoint
app.post('/chat', (req, res) => {
  const prompt = req.body.prompt.toLowerCase();

  // Look for keywords in the prompt
  for (const keyword in responses) {
    if (prompt.includes(keyword)) {
      return res.json({ response: responses[keyword] });
    }
  }

  // Default response if no keywords matched
  res.json({ reply: "Sorry, I didn't understand that. Could you try asking in a different way?" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});  
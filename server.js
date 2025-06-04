 const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});


// Predefined keyword-response pairs
const responses = [
    {
        keywords: ["about yourself","who are you","Tell me about you "],
        response: "Hi, I'm Rafaella, a computer science student passionate about web development and AI."
    },
    {
        keywords: ["projects","project","apps","worked on"],
        response: "I've worked on a weather app, a budgeting tool, and a REST API."
    },
    {
        keywords: ["skills","adept","expertise","programming languages"],
        response: "I'm skilled in JavaScript, Python, C, and C++.",
    },
    {    
        keywords: ["education","university","school","Where did you study"], 
        response: "I studied at University of Crete in Computer Science.",
    },
    {    
        keywords: ["hobbies","free time","interests"],
        response: "I enjoy listening to music, reading sci-fi, and programming.",
    },    
    {
        keywords: ["choose to study"],
        response: "I've always been curious about how computers work behind the scenes."
    },
    {
        keywords: ["interested in this intership","intership","interested in this job","apply"],
        response: "It’s a great opportunity to apply what I’ve learned and grow as a developer."
    },
    {
        keywords: ["experience"],
        response: "I have experience working on several academic projects and personal coding challenges."
    },
    {
        keywords: ["stuck"],
        response: "I take a break, then revisit it with a fresh mind. If I’m still stuck, I ask for help or look for patterns in similar problems online."
    },
    {
        keywords: ["favourite course","favourite subject"],
        response: "I really enjoyed linear algebra. Its use in image compression and AI seemed very interesting."
    },
    {
        keywords: ["interested in computer ","interested in computers","like computers"],
        response: "I’ve always been fascinated by how technology works. What really pulled me in was the idea that you can solve real problems just by writing code."
    },
    {
        keywords: ["work with team","worked with teams"],
        response: "I work well in teams because I genuinely enjoy learning from others and combining strengths to solve problems more effectively."
    }

];

// POST /chat endpoint
app.post('/chat', (req, res) => {
  const prompt = req.body.prompt.toLowerCase();

  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (prompt.includes(keyword.toLowerCase())) {
        return res.json({ response: item.response });
      }
    }
  }

  // Default response if no keywords matched
  res.json({ response: "Sorry, I didn't understand that. Could you try asking in a different way?" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});  
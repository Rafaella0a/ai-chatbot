document.getElementById('sendBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;
  if (prompt.trim() !== '') {
    await sendPrompt(prompt);
  }
});

// Function to send prompt
async function sendPrompt(prompt) {
  const res = await fetch('https://ai-chatbot-xtpo.onrender.com/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  const responseBox = document.getElementById('response');
  responseBox.textContent = data.response;
  responseBox.classList.remove('hidden');
}

// Suggestion buttons: fill input AND send prompt
document.querySelectorAll('.suggestion-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const promptText = button.textContent.trim();
    const promptInput = document.getElementById('prompt');
    promptInput.value = promptText;
    promptInput.focus();
    await sendPrompt(promptText);
  });
});

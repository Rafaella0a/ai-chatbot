document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('sendBtn');
  const promptInput = document.getElementById('prompt');
  const responseBox = document.getElementById('response');

  async function sendPrompt(prompt) {
    const res = await fetch('https://ai-chatbot-xtpo.onrender.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    responseBox.textContent = data.response;
    responseBox.classList.remove('hidden');
  }

  sendBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();
    if (prompt !== '') {
      await sendPrompt(prompt);
    }
  });

  document.querySelectorAll('.suggestion-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.textContent.trim();
      promptInput.value = text;
      promptInput.focus();
      await sendPrompt(text);
    });
  });
});

// Once html loaded run script
document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.getElementById('sendBtn');
  const promptInput = document.getElementById('prompt');
  const responseBox = document.getElementById('response');
 
  // Function to send prompt to server and reveal response
  async function sendPrompt(prompt) {
    const res = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    responseBox.textContent = data.response;
    responseBox.classList.remove('hidden');
  }
  
  // Register button press if chat isnt empty get response
  sendBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();
    if (prompt !== '') {
      await sendPrompt(prompt);
    }
  });

  // Gets all buttons with class .suggestion-btn and fills chat with suggestion
  document.querySelectorAll('.suggestion-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.textContent.trim();
      promptInput.value = text;
      promptInput.focus();
    });
  });
});

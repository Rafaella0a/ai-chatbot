document.getElementById('sendBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('prompt').value;

  // Replace this with your backend URL if needed
  const res = await fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  const responseBox = document.getElementById('response');
  responseBox.textContent = data.response;
  responseBox.classList.remove('hidden');
});
// New: fill input when clicking a suggested question
document.querySelectorAll('.suggestion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const promptInput = document.getElementById('prompt');
    promptInput.value = button.textContent.trim();
    promptInput.focus(); // optional: focus input after filling
  });
});
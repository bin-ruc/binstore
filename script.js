function sendMessage() {
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  const userText = input.value.trim();
  if (!userText) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = userText;
  chat.appendChild(userMsg);

  input.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = "I'm here to help you learn! 😊 (This will be smarter soon)";
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

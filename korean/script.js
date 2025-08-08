function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + input.value;
  chatBox.appendChild(userMsg);

  // Bot response
  const botMsg = document.createElement("div");
  botMsg.textContent = "Min-Joon: That's interesting! Tell me more in Korean.";
  chatBox.appendChild(botMsg);

  // Scroll down
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  input.value = "";
}

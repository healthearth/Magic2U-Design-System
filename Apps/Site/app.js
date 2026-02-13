// FAIRY
const fairy = document.getElementById("fairy");
const chat = document.getElementById("fairy-chat");

// DRAGGING
let isDragging = false;

fairy.addEventListener("mousedown", () => {
  isDragging = true;
  fairy.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  fairy.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    fairy.style.left = e.clientX - 20 + "px";
    fairy.style.top = e.clientY - 20 + "px";
  }
});

// SPARKLES (THROTTLED)
let lastSparkle = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastSparkle > 40) {
    createSparkle(e.pageX, e.pageY);
    lastSparkle = now;
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle-dot";

  const size = Math.random() * 8 + 2;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}

// CHAT TOGGLE
fairy.addEventListener("click", () => {
  if (!isDragging) {
    chat.style.display = chat.style.display === "block" ? "none" : "block";
  }
});

// SIMPLE AI SIMULATION
document.getElementById("fairy-send").addEventListener("click", () => {
  const input = document.getElementById("fairy-input").value.trim();
  const response = document.getElementById("fairy-response");

  if (!input) {
    response.textContent = "Ask me anything! I'm here to help.";
    return;
  }

  response.textContent =
    "✨ Magic2U helps teams scale with reusable components, tokens, and workflows.";

  document.getElementById("fairy-input").value = "";
});

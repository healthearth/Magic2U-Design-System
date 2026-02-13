// ------------------------------
// FAIRY SETUP
// ------------------------------
const fairy = document.getElementById("fairy");

// Create chat panel
const chat = document.createElement("div");
chat.id = "fairy-chat";
chat.innerHTML = `
  <h3>MagicaI Assistant</h3>
  <p>Ask me anything about Magic2U, design systems, or how we can help your company.</p>
  <textarea id="fairy-input" placeholder="Type your question..."></textarea>
  <button id="fairy-send">Ask</button>
  <p id="fairy-response" style="margin-top:10px; opacity:0.8;"></p>
`;
document.body.appendChild(chat);

// ------------------------------
// DRAGGABLE FAIRY
// ------------------------------
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

// --- SPARKLE TRAIL ENGINE ---
document.addEventListener('mousemove', (e) => {
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-dot';
    
    // Randomize size and position slightly for a "dust" effect
    const size = Math.random() * 8 + 2;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    // Remove the element after animation ends to keep the DOM clean
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// ------------------------------
// OPEN CHAT ON CLICK
// ------------------------------
fairy.addEventListener("click", () => {
  chat.style.display = chat.style.display === "block" ? "none" : "block";
});

// ------------------------------
// SIMPLE AI SIMULATION
// ------------------------------
document.getElementById("fairy-send").addEventListener("click", () => {
  const input = document.getElementById("fairy-input").value.trim();
  const response = document.getElementById("fairy-response");

  if (!input) {
    response.textContent = "Ask me anything! I'm here to help.";
    return;
  }

  // Simulated AI response
  response.textContent = `✨ Great question! Magic2U helps by creating reusable components, tokens, and workflows that scale across your entire product ecosystem.`;

  document.getElementById("fairy-input").value = "";
});

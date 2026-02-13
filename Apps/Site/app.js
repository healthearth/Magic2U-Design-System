const fairy = document.getElementById("fairy");

fairy.style.position = "fixed";
fairy.style.width = "40px";
fairy.style.height = "40px";
fairy.style.borderRadius = "50%";
fairy.style.background = "var(--magic-secondary)";
fairy.style.boxShadow = "0 0 20px var(--magic-secondary)";
fairy.style.top = "20px";
fairy.style.left = "20px";
fairy.style.cursor = "grab";

let isDragging = false;

fairy.addEventListener("mousedown", () => (isDragging = true));
document.addEventListener("mouseup", () => (isDragging = false));

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    fairy.style.left = e.clientX + "px";
    fairy.style.top = e.clientY + "px";
  }
});


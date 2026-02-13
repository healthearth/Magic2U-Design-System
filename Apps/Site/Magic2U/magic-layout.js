class MagicLayout extends HTMLElement {
  connectedCallback() {
    this.style.display = "flex";
    this.style.justifyContent = "center";
    this.style.alignItems = "center";
    this.style.height = "100vh";
    this.style.background = "linear-gradient(135deg, #0f0e17, #1b1a2e)";
  }
}

customElements.define("magic-layout", MagicLayout);


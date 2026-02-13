class MagicCard extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.background = "var(--magic-bg)";
    this.style.color = "var(--magic-text)";
    this.style.padding = "var(--magic-padding)";
    this.style.borderRadius = "var(--magic-radius)";
    this.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  }
}

customElements.define("magic-card", MagicCard);


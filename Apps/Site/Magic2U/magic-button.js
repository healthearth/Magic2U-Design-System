class MagicButton extends HTMLElement {
  connectedCallback() {
    this.style.display = "inline-block";
    this.style.padding = "12px 20px";
    this.style.background = "var(--magic-primary)";
    this.style.color = "white";
    this.style.borderRadius = "var(--magic-radius)";
    this.style.cursor = "pointer";
    this.style.fontWeight = "bold";
  }
}

customElements.define("magic-button", MagicButton);

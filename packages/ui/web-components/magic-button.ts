class MagicButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>${this.textContent}</button>`;
  }
}

customElements.define('magic-button', MagicButton);


class MagicCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="padding:16px;border:1px solid #ddd">
        ${this.innerHTML}
      </div>
    `;
  }
}

customElements.define('magic-card', MagicCard);


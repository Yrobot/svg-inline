class InlineSVG extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    const shadowRoot = this.attachShadow({ mode: "open" });
    if (src) {
      fetch(src)
        .then((res) => res.text())
        .then((row) => {
          const svg = new DOMParser()
            .parseFromString(row, "image/svg+xml")
            .getElementsByTagName("svg")[0];
          console.log(svg);
          if (svg) shadowRoot.appendChild(svg);
        });
    }
  }
}

customElements.define("svg-inline", InlineSVG);

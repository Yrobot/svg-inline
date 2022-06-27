export const TAG_NAME = "svg-inline";
const HOLDER_ESCAPE_PROPS = [
  // "width", "height"
];
const SVG_ESCAPE_PROPS = ["class", "style", "src", "width", "height"];

const STYLE = `
${TAG_NAME}{
  display: inline-block;
  font-size: 0;
}
${TAG_NAME}>svg{
  width: 100%;
  height: 100%;
}
`;
const addStyleSheet = () => {
  const style = document.createElement("style");
  style.id = `${TAG_NAME}-stylesheet`;
  style.textContent = STYLE;
  document.head.appendChild(style);
};

addStyleSheet();

class InlineSVG extends HTMLElement {
  constructor() {
    super();

    const props: any = Array.from(this.attributes).reduce(
      (pre, { name, value }) => {
        pre[name] = value;
        return pre;
      },
      {}
    );

    HOLDER_ESCAPE_PROPS.forEach((key) => this.removeAttribute(key));

    if (props.src) {
      fetch(props.src)
        .then((res) => res.text())
        .then((row) => {
          const svg = new DOMParser()
            .parseFromString(row, "image/svg+xml")
            .getElementsByTagName("svg")[0];
          Object.entries(props).forEach(([key, value]) => {
            if (!SVG_ESCAPE_PROPS.includes(key))
              svg.setAttribute(key, String(value));
          });

          if (!svg.hasAttribute("viewBox")) {
            svg.setAttribute(
              "viewBox",
              `0 0 ${svg.getAttribute("width") || props.width} ${
                svg.getAttribute("height") || props.height
              }`
            );
          }

          this.appendChild(svg);
        });
    }
  }
}

customElements.define(TAG_NAME, InlineSVG);

export default class InlineSVG extends HTMLElement {
  src: string;
}
declare global {
  interface Window {
    InlineSVG: typeof InlineSVG;
  }
  interface HTMLElementTagNameMap {
    "svg-inline": InlineSVG;
  }
}
declare namespace JSX {
  interface IntrinsicElements {
    "svg-inline": InlineSVG;
  }
}

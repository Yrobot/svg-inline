import { TAG_NAME } from "./index";
export default class InlineSVG extends HTMLElement {
  src: string;
}
declare global {
  interface Window {
    InlineSVG: typeof InlineSVG;
  }
  interface HTMLElementTagNameMap {
    [TAG_NAME]: InlineSVG;
  }
}
declare namespace JSX {
  interface IntrinsicElements {
    [TAG_NAME]: InlineSVG;
  }
}

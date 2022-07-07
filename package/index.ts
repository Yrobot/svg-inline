export interface InlineSVGElement {
  src: string;
  class?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    "svg-inline": InlineSVGElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "svg-inline": InlineSVGElement;
    }
  }
}

interface Attributes {
  [key: string]: string;
}

const throwError = (message: string) => {
  throw new Error(`@yrobot/svg-inline Error: ${message}`);
};

const TAG_NAME = "svg-inline";
// const HOLDER_ESCAPE_PROPS: string[] = [
//   // "width", "height"
// ];
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
  /**
   * @description fetch svg from url and return rawData
   * @author Yrobot
   * @date 07/07/2022
   * @param {string} src
   */
  fetchSVG = async (src: string): Promise<string> =>
    fetch(src).then((res) => {
      if (!res.ok)
        throwError(
          `Fetch for '${src}' returned ${res.status} (${res.statusText})`
        );
      return res.text();
    });

  /**
   * @description parse svg rowData to svg element
   * @author Yrobot
   * @date 07/07/2022
   * @param {string} rowData
   * @param {Attributes} props
   */
  parseSVG = (rowData: string, props: Attributes): SVGSVGElement => {
    const svg = new DOMParser()
      .parseFromString(rowData, "image/svg+xml")
      .getElementsByTagName("svg")[0];

    if (!svg) throwError(`Failed to parse SVG from '${props.src}'`);

    Object.entries(props).forEach(([key, value]) => {
      if (!SVG_ESCAPE_PROPS.includes(key)) svg.setAttribute(key, String(value));
    });

    if (!svg.hasAttribute("viewBox")) {
      svg.setAttribute(
        "viewBox",
        `0 0 ${svg.getAttribute("width") || props.width} ${
          svg.getAttribute("height") || props.height
        }`
      );
    }
    return svg;
  };

  /**
   * @description generate the props from svg-inline attributes
   * @author Yrobot
   * @date 07/07/2022
   */
  generateProps = () => {
    const props: Attributes = {};

    for (let i = 0; i < this.attributes.length; i++) {
      const { name, value } = this.attributes[i];
      props[name] = value;
    }

    return props;
  };

  /**
   * @description set child element inside svg-inline
   * @author Yrobot
   * @date 07/07/2022
   * @param {Node} child
   */
  setChild = (child: Node) => {
    if (typeof this.replaceChildren == "function") {
      this.replaceChildren(child);
    } else {
      this.innerHTML = "";
      this.appendChild(child);
    }
  };

  render = async () => {
    const props = this.generateProps();
    if (props.src) {
      const rowData = await this.fetchSVG(props.src);
      const svg = this.parseSVG(rowData, props);
      this.setChild(svg);
    }
  };

  constructor() {
    super();
  }

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "src") this.render();
    });
  });

  connectedCallback() {
    this.render();

    this.observer.observe(this, {
      attributeFilter: ["src"],
    });
  }
}

customElements.define(TAG_NAME, InlineSVG);

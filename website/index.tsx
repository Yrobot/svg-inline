import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const icons = ["svg-inline", "yrobot"];
const fills = ["#C59FC9", "red", "green", "#C1E0F7", "black"];
const opacities = [1, 0.4];

function App() {
  const [iconIndex, setIconIndex] = useState(0);
  const [fillIndex, setFillIndex] = useState(0);
  const [opacityIndex, setOpacityIndex] = useState(0);
  return (
    <div className="relative w-full h-[50vh] bg-slate-200 flex items-center justify-center flex-col space-y-8">
      <svg-inline
        src={`/${icons[iconIndex % icons.length]}.svg`}
        class="inline-block w-16 h-16 icon"
        style={{
          "--svg-fill": fills[fillIndex % fills.length],
          "--svg-fill-opacity": opacities[opacityIndex % opacities.length],
        }}
      ></svg-inline>
      <div className="space-x-4">
        {[
          { title: "Change Icon", callback: setIconIndex },
          { title: "Change Color", callback: setFillIndex },
          { title: "Change Opacity", callback: setOpacityIndex },
        ].map(({ title, callback }) => (
          <button
            className="px-3 py-2 rounded-lg bg-black text-white"
            type="button"
            onClick={() => {
              callback((old) => old + 1);
            }}
            key={title}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);

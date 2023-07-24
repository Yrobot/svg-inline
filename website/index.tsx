import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [check, setCheck] = useState(true);
  return (
    <div className="relative w-full h-[50vh] bg-slate-200 flex items-center justify-center flex-col space-y-8">
      <svg-inline
        src={`/${check ? "svg-inline" : "yrobot"}.svg`}
        class="inline-block w-16 h-16 icon"
        style={{
          "--svg-fill": "white",
          "--svg-fill-opacity": 0.3,
        }}
      ></svg-inline>
      <button
        className="px-3 py-2 rounded-lg bg-black text-white"
        type="button"
        onClick={() => {
          setCheck(!check);
        }}
      >
        Switch
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<App />);

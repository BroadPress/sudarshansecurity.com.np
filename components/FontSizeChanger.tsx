'use client'
import React, { useState, useEffect } from "react";
type FontSizeChangerProps = {
  showFont: boolean;
};
const FontSizeChanger:React.FC<FontSizeChangerProps> = ({showFont}) => {
  const [fontSize, setFontSize] = useState("medium");

  useEffect(() => {
    // Load saved font size
    const savedSize = localStorage.getItem("fontSize") || "medium";
    setFontSize(savedSize);
    applyFontSize(savedSize);
  }, []);

  const applyFontSize = (size:string) => {
    let textSize;

    switch (size) {
      case "small":
        textSize = "0.875rem"; // 14px
        break;
      case "medium":
        textSize = "1rem"; // 16px
        break;
      case "large":
        textSize = "1.125rem"; // 18px
        break;
      default:
        textSize = "1rem";
    }

    // Apply globally via CSS variable
    document.documentElement.style.setProperty("--app-font-size", textSize);
  };

  const changeFontSize = (size:string) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem("fontSize", size);
  };

  return (
    <>
    {showFont &&
    <div className="hidden sm:flex items-center w-fit gap-3 rounded-lg shadow-sm">
      <span className="font-medium text-sm">Change Font Size:</span>

      <div className="flex gap-2">
        <button
          onClick={() => changeFontSize("small")}
          className={`w-10 h-10 flex items-center text cursor-pointer justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "small"
              ? "border-teal-400 card"
              : " hover:border-teal-400 border-teal-400 hover:bg-gray-50"
          }`}
          title="Medium font size"
        >
          <span className="text-base">A</span>
        </button>

        <button
          onClick={() => changeFontSize("medium")}
          className={`w-10 h-10 flex items-center text cursor-pointer justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "medium"
              ? "border-teal-600 card"
              : " hover:border-teal-400 border-teal-400 hover:bg-gray-50"
          }`}
          title="Medium font size"
        >
          <span className="text-base">A</span>
        </button>

        <button
          onClick={() => changeFontSize("large")}
          className={`w-10 h-10 flex items-center text cursor-pointer justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "large"
              ? "border-teal-600 card"
              : " hover:border-teal-400 border-teal-400 hover:bg-gray-50"
          }`}
          title="Large font size"
        >
          <span className="text-lg">A</span>
        </button>
      </div>
    </div>}
    

    {/*In order to apply font size changer on mobile view for all pages, you need
     to change the text of whole pages from text-xl/2xl/... or text-[15px]... 
     format to 1em format like text-[1em]/text[0.7em]... */}
    
    {/* <div className="flex sm:hidden items-center w-fit gap-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeFontSize("small")}
          className={`w-8 h-8 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "small"
              ? "border-teal-600 card4"
              : "card hover:border-teal-400 hover:bg-gray-50"
          }`}
          title="Small font size"
        >
          <span className="text-xs">A</span>
        </button>

        <button
          onClick={() => changeFontSize("medium")}
          className={`w-9 h-9 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "medium"
              ? "border-teal-600 card4"
              : "card hover:border-teal-400 hover:bg-gray-50"
          }`}
          title="Medium font size"
        >
          <span className="text-sm">A</span>
        </button>

        <button
          onClick={() => changeFontSize("large")}
          className={`w-10 h-10 flex items-center justify-center border-2 rounded-md font-semibold transition-all ${
            fontSize === "large"
              ? "border-teal-600 card4"
              : "card hover:border-teal-400 hover:bg-gray-50"
          }`}
          title="Large font size"
        >
          <span className="text-lg">A</span>
        </button>
      </div>
    </div> */}
    </>
  );
};

export default FontSizeChanger;

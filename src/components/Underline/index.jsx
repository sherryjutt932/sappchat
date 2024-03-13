import React from "react";

export default function Underline({ text, z }) {
  return (
    <div className="relative inline-block text-inherit">
      <div className="w-full h-1/3 bg-comp absolute bottom-0 left-0"></div>
      <div className="relative" style={{zIndex:z}}>{text}</div>
    </div>
  );
}

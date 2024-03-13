import React from "react";

export default function Image({ src }) {

  return (
    <div className={`pr-16 h-full w-full flex justify-end items-end pt-16 pb-32`}>
      <img
        src={src}
        alt="workImage"
        className="w-auto block h-full object-contain rounded-3xl"
      />
    </div>
  );
}

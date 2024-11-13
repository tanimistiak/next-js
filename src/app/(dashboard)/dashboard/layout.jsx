import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div className="bg-green-300">
        <p>Custom header</p>
      </div>
      {children}
    </div>
  );
}

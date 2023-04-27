import React from "react";

export default function Loading() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <span className="custom-loader"></span>
    </div>
  );
}

import React from "react";

export default function Loading() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="w-12 h-12 border-8 border-purple-500 border-solid rounded-full animate-spin border-t-transparent" />
    </div>
  );
}

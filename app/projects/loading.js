import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6 mt-10 lg:mt-20 md:flex-row">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

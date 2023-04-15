import React from "react";
import { FaGithub } from "react-icons/fa";

export default function SkeletonCard() {
  return (
    <div
      className={`shadow-xl card w-5/6 md:w-96 max-h-96 bg-base-100 z-20 mb-6 md:mb-0 `}
    >
      <div className=" h-[200px] bg-gray-700 rounded-[1rem]"></div>
      <div className="card-body animate-pulse">
        <div className="w-[230px] h-[28px] bg-gray-700 card-title animate-pulse rounded-md"></div>
        <div className="justify-end card-actions">
          <div className="badge badge-outline animate-pulse border-gray-700 w-[50px]"></div>
        </div>
        <button
          className="w-full mt-2 btn btn-primary animate-pulse loading"
          disabled
        >
          <FaGithub size={"20px"} className="mr-2" />
          Source
        </button>
      </div>
    </div>
  );
}

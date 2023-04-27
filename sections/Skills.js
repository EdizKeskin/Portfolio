import React from "react";
import { reactjs, javascript, html, css, git, tailwind } from "@/assets";
import dynamic from "next/dynamic";

const BallCanvas = dynamic(() => import("@/components/models/Balls"));

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
  ];
  return (
    <div className="mockup-window backdrop-blur-md bg-[#2d374850] border border-base-300 shadow-lg sm:shadow-md mb-6 sm:shadow-[#aa65fa] sm:border-none">
      <div className="p-4 py-10 m-4 md:p-10 md:m-10 md:py-10">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {skills.map((skill) => (
            <div className="w-28 h-28" key={skill.name}>
              <BallCanvas icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

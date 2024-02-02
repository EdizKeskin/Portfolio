import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div
      className={`shadow-xl card w-5/6 md:w-96 max-h-96 bg-base-100 z-20 mb-6 md:mb-0 `}
    >
      <figure className={!project.link ? "hover:cursor-not-allowed" : ""}>
        <Link
          href={project.link ? project.link : ""}
          className={!project.link ? "pointer-events-none" : ""}
          passHref
        >
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            className="h-[200px] rounded-md"
            alt={project.title}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <div className="justify-end card-actions">
          {project.tags?.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <Link
          href={project.link ? project.link : ""}
          className={
            !project.link ? "pointer-events-none hover:cursor-not-allowed" : ""
          }
          passHref
        >
          <button
            className={`w-full mt-2 btn btn-primary`}
            disabled={!project.link && true}
          >
            <FaGithub size={"20px"} className="mr-2" />
            Source
          </button>
        </Link>
      </div>
    </div>
  );
}

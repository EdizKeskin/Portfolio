import { getAllProjects } from "@/functions/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6 mt-10 lg:mt-20 md:flex-row">
      {projects?.map((project, index) => (
        <div
          key={index}
          className={`shadow-xl card w-96 max-h-96 bg-base-100 z-20 ${
            index === projects.length - 1 ? "mb-6 md:mb-0" : ""
          }`}
        >
          <figure className="hover:cursor-pointer">
            <Link href={project.link} passHref>
              <Image
                src={project.image.url}
                width={project.image.width}
                height={project.image.height}
                className="h-[200px]"
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
            <Link href={project.link} passHref>
              <button className="w-full mt-2 btn btn-primary disabled">
                <FaGithub size={"20px"} className="mr-2" />
                Source
              </button>
            </Link>
          </div>
        </div>
      ))}
      <div className="z-0 projects-gradient-2 md:projects-gradient-1" />
    </div>
  );
}

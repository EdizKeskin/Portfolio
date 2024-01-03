import ProjectCard from "@/components/ProjectCard";
import { Projects as data } from "./data";

export default async function Projects() {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col flex-wrap items-center justify-center gap-6 my-6 md:flex-row">
        {data?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="z-0 projects-gradient-2 md:projects-gradient-1" />
    </div>
  );
}

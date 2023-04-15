import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/functions/getAllProjects";

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6 mt-10 lg:mt-20 md:flex-row">
      {projects?.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="z-0 projects-gradient-2 md:projects-gradient-1" />
    </div>
  );
}

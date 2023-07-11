import { ProjectCard } from '@/components/ProjectCard';
import { fetcher } from '@/utils/fetcher';
import { Project } from '@prisma/client';

const getData = async () => {
  return await fetcher('/project', 'GET');
};
export const Projects = async () => {
  const projects = await getData();

  return (
    <section id="project-setion" className="flex flex-col gap-4">
      {projects.map((project: Project) => (
        <ProjectCard key={projects.id} project={project} />
      ))}
    </section>
  );
};

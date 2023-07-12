import { ProjectCard } from '@/components/ProjectCard';
import { fetcher } from '@/utils/fetcher';
import { Project } from '@prisma/client';

const getData = async () => {
  return await fetcher<Project[]>('/project', 'GET');
};

export const Projects = async () => {
  const projects = await getData();
  console.log(projects.data);
  return (
    <section id="project-setion" className="flex flex-col gap-4">
      {projects.data &&
        projects.data.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </section>
  );
};

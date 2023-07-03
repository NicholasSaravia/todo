import { ProjectCard } from '@/components/ProjectCard';

export const Projects = () => {
  return (
    <section id="project-setion" className="flex flex-col gap-4">
      {Array.from({ length: 4 }, (_, i) => (
        <ProjectCard i={i} />
      ))}
    </section>
  );
};

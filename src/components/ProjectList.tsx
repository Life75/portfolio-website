import ProjectCard from "./ProjectCard";
import { useProjects } from "../hooks/useProjects";

export default function ProjectList() {
  const { projects, loading } = useProjects();

  if (loading) return <div>Loading…</div>;

  return (
    <div className="flex flex-col gap-8">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.id}
          imageUrl={proj.imageUrl}
          title={proj.title}
          description={proj.description}
          tags={proj.tags}
          onTitleClickHandler={() =>
            proj.link && window.open(proj.link, "_blank")
          }
        />
      ))}
    </div>
  );
}

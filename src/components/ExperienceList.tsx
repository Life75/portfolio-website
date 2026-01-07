import ExperienceCard from "./ExperienceCard";
import { useExperiences } from "../hooks/useExperiences";

export default function ExperienceList() {
  const { experiences, loading } = useExperiences();

  if (loading) return <div>Loading…</div>;

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          from={exp.from}
          to={exp.to}
          title={exp.title}
          description={exp.description}
          tags={exp.tags}
          onTitleClickHandler={() =>
            console.log("Clicked:", exp.title)
          }
        />
      ))}
    </div>
  );
}

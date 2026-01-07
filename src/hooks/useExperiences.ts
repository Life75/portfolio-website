import { useEffect, useState } from "react";
import { ExperienceRepository } from '../repositories/ExperienceRepository';
//import  Experience  from '../types/Experience.type';

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new ExperienceRepository();

    repo.getAll().then((data) => {
      setExperiences(data);
      setLoading(false);
    });
  }, []);

  return { experiences, loading };
}

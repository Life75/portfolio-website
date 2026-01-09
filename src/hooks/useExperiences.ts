import { useEffect, useState } from "react";
import { ExperienceRepository } from '../repositories/ExperienceRepository';
import type { Experience } from '../types/Experience';

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

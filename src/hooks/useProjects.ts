import { useEffect, useState } from "react";
import { ProjectRepository } from "../repositories/ProjectRepository";
import type { Project } from "../types/Project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new ProjectRepository();

    repo.getAll().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return { projects, loading };
}

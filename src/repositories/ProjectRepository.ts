import projectData from "../data/projects.json";
import type { Project } from "../types/Project";

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getById(id: string): Promise<Project | undefined>;
}

export class ProjectRepository implements IProjectRepository {
  private projects: Project[];

  constructor() {
    this.projects = projectData as Project[];
  }

  async getAll(): Promise<Project[]> {
    return Promise.resolve(this.projects);
  }

  async getById(id: string): Promise<Project | undefined> {
    const result = this.projects.find((p) => p.id === id);
    return Promise.resolve(result);
  }
}

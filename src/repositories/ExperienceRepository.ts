import experienceData from "../data/experiences.json";
import type { Experience } from '../types/Experience';

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>;
  getById(id: string): Promise<Experience | undefined>;
}

export class ExperienceRepository implements IExperienceRepository {
  private experiences: Experience[];

  constructor() {
    this.experiences = experienceData as Experience[];
  }

  async getAll(): Promise<Experience[]> {
    return Promise.resolve(this.experiences);
  }

  async getById(id: string): Promise<Experience | undefined> {
    const result = this.experiences.find((e) => e.id === id);
    return Promise.resolve(result);
  }
}

import experienceData from "../data/experiences.json";
//import  Experience  from '../types/Experience.type';

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>;
  getById(id: string): Promise<Experience | undefined>;
}

export class ExperienceRepository implements IExperienceRepository {
  private experiences: Experience[];

  constructor() {
    // Typed mock data
    this.experiences = experienceData as Experience[];
  }

  async getAll(): Promise<Experience[]> {
    // simulate async (API later, mock now)
    return Promise.resolve(this.experiences);
  }

  async getById(id: string): Promise<Experience | undefined> {
    const result = this.experiences.find((e) => e.id === id);
    return Promise.resolve(result);
  }
}

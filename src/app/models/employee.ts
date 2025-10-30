import { Skill } from './skill';

export interface Employee {
    id: number;
    name: string;
    age: number;
    skills: Skill[];
}

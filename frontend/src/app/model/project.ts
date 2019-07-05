import { ToDo } from './todo';

export class Project {
    public id: number;
    public title: string;
    public owner: string;
    public description: string;
    public priority: string;
    public toDo: Array<ToDo>;
}
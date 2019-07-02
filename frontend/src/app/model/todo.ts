import { Time } from '@angular/common';

export class ToDo {
    public id: number;
    public title: string;
    public archived: boolean;
    public done: boolean;
    public date: Date;
}
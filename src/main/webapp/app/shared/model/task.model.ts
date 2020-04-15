export interface ITask {
  id?: string;
  title?: string;
  description?: string;
}

export class Task implements ITask {
  constructor(public id?: string, public title?: string, public description?: string) {}
}

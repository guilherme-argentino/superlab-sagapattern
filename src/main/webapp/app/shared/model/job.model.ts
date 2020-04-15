export interface IJob {
  id?: string;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
}

export class Job implements IJob {
  constructor(public id?: string, public jobTitle?: string, public minSalary?: number, public maxSalary?: number) {}
}

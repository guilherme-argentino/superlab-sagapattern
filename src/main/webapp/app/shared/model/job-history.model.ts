import { Moment } from 'moment';
import { Language } from 'app/shared/model/enumerations/language.model';

export interface IJobHistory {
  id?: string;
  startDate?: Moment;
  endDate?: Moment;
  language?: Language;
}

export class JobHistory implements IJobHistory {
  constructor(public id?: string, public startDate?: Moment, public endDate?: Moment, public language?: Language) {}
}

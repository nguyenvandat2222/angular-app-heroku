import {QuestionModel} from './question.model';

export interface TestLessonModel {
  _id: string;
  name: string;
  status: boolean;
  questions: QuestionModel[];
}

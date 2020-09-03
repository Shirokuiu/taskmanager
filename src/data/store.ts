import { TaskModel } from '../app/shared/models';
import { makeTask } from '../app/shared/utils';

export class Store {
  static makeTasks(count: number): TaskModel[] {
    return Array(count).fill('').map(makeTask);
  }
}

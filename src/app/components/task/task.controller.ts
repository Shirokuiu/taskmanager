import { TaskModel } from '../../shared/models';
import { TaskTemplate } from './task.template';
import { DOM } from '../../core';

export class TaskController {
  private readonly taskTemplate: HTMLElement;

  constructor(
    private readonly $container: HTMLElement,
    private readonly taskData: TaskModel
  ) {
    this.taskTemplate = new TaskTemplate(this.taskData).getElement();
  }

  init(): void {
    DOM.render(this.$container, this.taskTemplate);
  }
}

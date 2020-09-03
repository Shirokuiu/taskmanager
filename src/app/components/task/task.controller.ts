import { TaskModel } from '../../shared/models';
import { TaskTemplate } from './task.template';
import { DOM } from '../../core';

export class TaskController {
  private readonly taskTemplate: TaskTemplate;

  constructor(
    private readonly $container: HTMLElement,
    private readonly taskData: TaskModel
  ) {
    this.taskTemplate = new TaskTemplate(this.taskData);
  }

  init(): void {
    const $taskTemplate: HTMLElement = this.taskTemplate.getElement();

    DOM.render(this.$container, $taskTemplate);
  }
}

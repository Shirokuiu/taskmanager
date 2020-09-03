import { BoardTemplate } from './board.template';
import { DOM } from '../../core';
import { DateFiltersController, LoadMoreController, TaskController } from '..';
import { TaskModel } from '../../shared/models';
import { Store } from '../../../data/store';

export class BoardController {
  private boardTemplate = new BoardTemplate();
  private dateFiltersController: DateFiltersController;
  private loadMoreController: LoadMoreController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    const $boardTemplate = this.boardTemplate.getElement();
    const $boardFiltersWrap = $boardTemplate.querySelector(
      '.board__filters-wrap'
    ) as HTMLElement;
    const boardTaskWrap: HTMLElement = $boardTemplate.querySelector(
      '.board__tasks'
    ) as HTMLElement;
    const films: TaskModel[] = Store.makeTasks(3);

    this.dateFiltersController = new DateFiltersController($boardFiltersWrap);
    this.loadMoreController = new LoadMoreController($boardTemplate);

    DOM.render(this.$container, $boardTemplate);

    this.dateFiltersController.init();

    films.forEach((task: TaskModel) => {
      const taskController = new TaskController(boardTaskWrap, task);

      taskController.init();
    });

    this.loadMoreController.init();
  }
}

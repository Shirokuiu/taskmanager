import { BoardTemplate } from './board.template';
import { DOM } from '../../core';
import { DateFiltersController, LoadMoreController, TaskController } from '..';
import { makeTasks } from '../../../data/task';

export class BoardController {
  private readonly boardTemplate: HTMLElement;
  private readonly dateFiltersController: DateFiltersController;
  private taskController: TaskController;
  private readonly loadMoreController: LoadMoreController;

  constructor(private readonly container: HTMLElement) {
    this.boardTemplate = new BoardTemplate().getElement();
    this.dateFiltersController = new DateFiltersController(
      this.boardTemplate.querySelector('.board__filters-wrap')
    );
    this.loadMoreController = new LoadMoreController(this.boardTemplate);
  }

  init(): void {
    DOM.render(this.container, this.boardTemplate);
    this.dateFiltersController.init();

    const boardTaskWrap: HTMLElement = this.boardTemplate.querySelector(
      '.board__tasks'
    ) as HTMLElement;

    Array(3)
      .fill('')
      .forEach(() => {
        this.taskController = new TaskController(boardTaskWrap, makeTasks());
        this.taskController.init();
      });

    this.loadMoreController.init();
  }
}

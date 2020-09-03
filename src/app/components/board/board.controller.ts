import { BoardTemplate } from './board.template';
import { DOM } from '../../core';
import { DateFiltersController, LoadMoreController, TaskController } from '..';
import { makeTasks } from '../../../data/task';

export class BoardController {
  private readonly boardTemplate: BoardTemplate;
  private readonly dateFiltersController: DateFiltersController;
  private taskController: TaskController;
  private readonly loadMoreController: LoadMoreController;

  constructor(private readonly $container: HTMLElement) {
    this.boardTemplate = new BoardTemplate();
    this.dateFiltersController = new DateFiltersController(
      this.boardTemplate.getElement().querySelector('.board__filters-wrap')
    );
    this.loadMoreController = new LoadMoreController(this.boardTemplate.getElement());
  }

  init(): void {
    const $boardTemplate: HTMLElement = this.boardTemplate.getElement();

    DOM.render(this.$container, $boardTemplate);
    this.dateFiltersController.init();

    const boardTaskWrap: HTMLElement = $boardTemplate.querySelector(
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

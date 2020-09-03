import {
  BoardController,
  MainFiltersController,
  MainNavController,
  MainSearchController,
} from '..';

export class AppController {
  private mainNavController: MainNavController;
  private mainSearchController: MainSearchController;
  private mainFiltersController: MainFiltersController;
  private boardController: BoardController;

  constructor(private readonly $container: HTMLElement) {}

  init(): void {
    this.mainNavController = new MainNavController(
      this.$container.querySelector('.main__control')
    );
    this.mainSearchController = new MainSearchController(this.$container);
    this.mainFiltersController = new MainFiltersController(this.$container);
    this.boardController = new BoardController(this.$container);

    this.mainNavController.init();
    this.mainSearchController.init();
    this.mainFiltersController.init();
    this.boardController.init();
  }
}

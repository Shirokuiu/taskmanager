import {
  BoardController,
  MainFiltersController,
  MainNavController,
  MainSearchController,
} from '..';

export class AppController {
  private readonly mainNavController: MainNavController;
  private readonly mainSearchController: MainSearchController;
  private readonly mainFiltersController: MainFiltersController;
  private readonly boardController: BoardController;

  constructor(private readonly $container: HTMLElement) {
    this.mainNavController = new MainNavController(
      this.$container.querySelector('.main__control')
    );
    this.mainSearchController = new MainSearchController(this.$container);
    this.mainFiltersController = new MainFiltersController(this.$container);
    this.boardController = new BoardController(this.$container);
  }

  init(): void {
    this.mainNavController.init();
    this.mainSearchController.init();
    this.mainFiltersController.init();
    this.boardController.init();
  }
}
